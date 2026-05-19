
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
require('./assets/Framework/Scripts/Functionalities');
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Game/Painting_template/Script/Common/CommonFun');
require('./assets/Game/Painting_template/Script/Common/ConfigController');
require('./assets/Game/Painting_template/Script/Common/Constant');
require('./assets/Game/Painting_template/Script/Common/Global');
require('./assets/Game/Painting_template/Script/Common/audioManager');
require('./assets/Game/Painting_template/Script/Draw');
require('./assets/Game/Painting_template/Script/GamePlay/DrawingTable');
require('./assets/Game/Painting_template/Script/GamePlay/Drawingmask');
require('./assets/Game/Painting_template/Script/GamePlay/GamePlay');
require('./assets/Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll');
require('./assets/Game/Painting_template/Script/GamePlay/TileSelection');
require('./assets/Game/Painting_template/Script/LevelSelection/LevelSelection');
require('./assets/Game/Painting_template/Script/ScreenShot');
require('./assets/Game/Painting_template/Script/endScreen');
require('./assets/Game/Painting_template/Script/globalVariables');
require('./assets/Game/Painting_template/Script/scratch');
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
cc._RF.push(module, '90836YZIMNLW78/ham1kSzE', 'empty');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxQcmVmYWJzXFxQcm9ncmVzc2JhclxcU2NyaXB0c1xcUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBSTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBaUpDO1FBN0lXLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBYzVCLGlCQUFXLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQThIdkQsaUJBQWlCO0lBQ3JCLENBQUM7b0JBakpvQixXQUFXO0lBb0I1QixzQkFBVyx1QkFBUTthQUFuQjtZQUNJLE9BQU8sYUFBVyxDQUFDLFFBQVEsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0kseUNBQXlDO1FBQ3pDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxZQUFvQixFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7UUFDdEQsd0NBQXdDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQSxhQUFhO1FBQzVELElBQUksS0FBSyxHQUFHLFlBQVksR0FBRyxT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LEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTzs0QkFDN0UsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhOzRCQUNsSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQ0FDbE4sS0FBSyxFQUFFLENBQUM7eUJBQ2hCOzZCQUNJOzRCQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTzs0QkFDN0UsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhOzRCQUNsSixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQ0FDbE4sS0FBSyxFQUFFLENBQUM7eUJBQ2hCO3dCQUVELEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDaEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNuRSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNmLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBM0R0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFO29CQUFsQyxDQUFDO1NBNERUO0lBQ0wsQ0FBQzs7SUEzSWMsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTVDO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzttREFDa0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNZO0lBaEJsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUovQjtJQUFELGtCQUFDO0NBakpELEFBaUpDLENBakp3QyxFQUFFLENBQUMsU0FBUyxHQWlKcEQ7a0JBakpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGlzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHN0YXJJbWc6IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcclxuICAgIHByaXZhdGUgdHJhaWxzSW1nOiBjYy5UZXh0dXJlMkQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdHJhaWxTb3VuZHM6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBhcnRpY2xlU291bmRzOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdGFyUG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXJzRWFybmVkOiBCb29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZ3Jlc3NGaWxsKF9jdXJyZW50UXVlczogbnVtYmVyLCBzdGFyTG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlU3RhclRyYWlscygxMCwgdGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgcGFydGljbGVzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVzXCIgKyAxKTtcclxuICAgICAgICBsZXQgbWF4TGV2ZWxzID0gc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzOy8vdG90YWxMZXZlbHNcclxuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikpLnRvKDAuNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyUG9wU291bmQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGlmIChfY3VycmVudFF1ZXMgIT0gMCAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMF0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFswXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9jdXJyZW50UXVlcyA+PSBtYXhMZXZlbHMgLyAyICYmIF9jdXJyZW50UXVlcyA8IG1heExldmVscyAmJiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXS5vcGFjaXR5ID09IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXJzRWFybmVkWzFdICYmIHN0YXJMb2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnNFYXJuZWRbMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzICYmIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMl0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFsyXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzFdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gX251bWJlciA9IF9udW1iZXIgKiB0aGlzLnNoYXBlcy5sZW5ndGg7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVN0YXJUcmFpbHMobnVtOiBudW1iZXIsIF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTtcclxuICAgICAgICBsZXQgX29mZnNldCA9IDUwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBybmdfTnVtT2ZQYXJ0aWNsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgTm9kZVBPUyA9IF9ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucGFyZW50LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcihfbm9kZS54IC0gX29mZnNldCwgX25vZGUueCArIF9vZmZzZXQpO1xyXG4gICAgICAgICAgICBsZXQgcm5nWSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9ub2RlLnkgLSBfb2Zmc2V0LCBfbm9kZS55ICsgX29mZnNldCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZXMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCB0cmFpbCA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYWlsLnBhcmVudCA9IHBhcnRpY2xlcztcclxuICAgICAgICAgICAgcGFydGljbGVzLnggPSBybmdYO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMueSA9IHJuZ1k7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhckltZztcclxuICAgICAgICAgICAgcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzYwKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgICsgaTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy50cmFpbHNJbWc7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdHJhaWwuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjUyLCAyNDQsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgd2lkdGg6IDM1LCBoZWlnaHQ6IDM1IH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC4yNSwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgYW5nbGU6IDE4MCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLnN0YXJ0KCkudG8oMC4yNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhZGVUaW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRyYWlsU291bmRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnRyYWlsU291bmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykuYmV6aWVyVG8oMC43NSwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgLy9zdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggLyAyICsgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoICogdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MpKSkgLy9lbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbygwLjc1LCBuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLCAvL3N0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnggLSAxMDAsIHBhcnRpY2xlcy54ICsgMTAwKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnkgLSA1MDAsIHBhcnRpY2xlcy55ICsgMjAwKSksIC8vY3VydmUgcmFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSwgdGhpcy5ub2RlLnkpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBhbmdsZTogLXBhcnRpY2xlcy5hbmdsZSAvIDIgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMSAqIChpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30f37RhHfRDy5c6luFrmfSU', 'PersistentScroll');
// Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll.ts

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
var CommonFun_1 = require("../../Common/CommonFun");
var Constant_1 = require("../../Common/Constant");
var Global_1 = require("../../Common/Global");
var GamePlay_1 = require("../GamePlay");
var TileSelection_1 = require("../TileSelection");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ColorFrameList = /** @class */ (function () {
    function ColorFrameList() {
        this.color = new cc.Color();
        this.colorParticleFrame = null;
        this.isLocked = false;
    }
    __decorate([
        property({ visible: true, tooltip: "color" })
    ], ColorFrameList.prototype, "color", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "colorParticleFrame" })
    ], ColorFrameList.prototype, "colorParticleFrame", void 0);
    __decorate([
        property({ visible: true, tooltip: "locked" })
    ], ColorFrameList.prototype, "isLocked", void 0);
    ColorFrameList = __decorate([
        ccclass("ColorFrameList")
    ], ColorFrameList);
    return ColorFrameList;
}());
var PatternFrameList = /** @class */ (function () {
    function PatternFrameList() {
        this.PatternFrame = null;
        this.PatternParticleFrame = null;
        this.isLocked = false;
    }
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "PatternFrame" })
    ], PatternFrameList.prototype, "PatternFrame", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "PatternParticleFrame" })
    ], PatternFrameList.prototype, "PatternParticleFrame", void 0);
    __decorate([
        property({ visible: true, tooltip: "locked" })
    ], PatternFrameList.prototype, "isLocked", void 0);
    PatternFrameList = __decorate([
        ccclass("PatternFrameList")
    ], PatternFrameList);
    return PatternFrameList;
}());
var SparkleFrameList = /** @class */ (function () {
    function SparkleFrameList() {
        this.SparkleFrame = null;
        this.SparkleParticleFrame = null;
        this.isLocked = false;
    }
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "SparkleFrame" })
    ], SparkleFrameList.prototype, "SparkleFrame", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, visible: true, tooltip: "SparkleParticleFrame" })
    ], SparkleFrameList.prototype, "SparkleParticleFrame", void 0);
    __decorate([
        property({ visible: true, tooltip: "locked" })
    ], SparkleFrameList.prototype, "isLocked", void 0);
    SparkleFrameList = __decorate([
        ccclass("SparkleFrameList")
    ], SparkleFrameList);
    return SparkleFrameList;
}());
var TileSelectionList = /** @class */ (function () {
    function TileSelectionList() {
        this.DrawingmaskPrefab = null;
        this.ScrollSelectionPrefab = null;
        this.ColorFrameListArray = [];
        this.PatternFrameListArray = [];
        this.SparkleFrameListArray = [];
        this.type = "";
    }
    __decorate([
        property({ type: cc.Prefab, visible: true, tooltip: "Drawingmask" })
    ], TileSelectionList.prototype, "DrawingmaskPrefab", void 0);
    __decorate([
        property({ type: cc.Prefab, visible: true, tooltip: "ScrollSelection" })
    ], TileSelectionList.prototype, "ScrollSelectionPrefab", void 0);
    __decorate([
        property({ type: ColorFrameList, visible: true, tooltip: "ColorFrameListArray" })
    ], TileSelectionList.prototype, "ColorFrameListArray", void 0);
    __decorate([
        property({ type: PatternFrameList, visible: true, tooltip: "PatternFrameListArray" })
    ], TileSelectionList.prototype, "PatternFrameListArray", void 0);
    __decorate([
        property({ type: SparkleFrameList, visible: true, tooltip: "SparkleFrameListArray" })
    ], TileSelectionList.prototype, "SparkleFrameListArray", void 0);
    __decorate([
        property({ visible: true, tooltip: "type" })
    ], TileSelectionList.prototype, "type", void 0);
    TileSelectionList = __decorate([
        ccclass("TileSelectionList")
    ], TileSelectionList);
    return TileSelectionList;
}());
var PersistentScroll = /** @class */ (function (_super) {
    __extends(PersistentScroll, _super);
    function PersistentScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Qvoplay = [];
        _this.hand = null;
        _this.tickBtn = null;
        _this.TileSelectionListArray = [];
        _this.rightNode = null;
        _this.ToolArray = [];
        _this.DualSymetry = null;
        _this.QuadSymetry = null;
        // @property(cc.Color)
        // colorPicker: cc.Color[] = null;
        _this.particleEffect = null;
        _this.cameraAud = null;
        _this.toolsAud = null;
        _this.glowAud = null;
        _this.scrollAud = null;
        _this.eraserAud = null;
        _this.CurrentBottomIndexValue = 0;
        _this.CurrentTopIndexValue = 0;
        _this.count = 0;
        _this.FrameArray = [];
        _this.TileArray = [];
        _this.startUpdate = false;
        _this.isScrolled = false;
        _this.prevTouch = new cc.Vec2;
        _this.touchTilePos = new cc.Vec2(0, 0);
        _this.currentTileIndex = -1;
        _this.prevPensilSelection = 0;
        _this.currentPensilSelection = 1;
        _this.currentToolIndex = 1;
        _this.currentPatternFrame = null;
        _this.currentPatternFrameIndex = 0;
        _this.currentDrawingScript = null;
        _this.isDualSymetryClicked = false;
        _this.isQuadSymetryClicked = false;
        return _this;
    }
    PersistentScroll_1 = PersistentScroll;
    Object.defineProperty(PersistentScroll, "Instance", {
        get: function () {
            return PersistentScroll_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    PersistentScroll.prototype.onLoad = function () {
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
    };
    PersistentScroll.prototype.start = function () {
        cc.game.addPersistRootNode(this.node);
        Global_1.default.instance.PersistentScrollInstance = this;
        PersistentScroll_1.instance = this;
        this.touchTilePos = new cc.Vec2(0, 0);
        this.onColorClicked();
        this.initialiseTool();
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        this.rightNode.getChildByName("scroll").on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.currentPensilSelection = Constant_1.Constant.ToolsTag.PENCIL;
        // this._instance = this;
        console.log("count = ", this.count);
        this.count++;
    };
    PersistentScroll.prototype.onDualSymetryCalled = function () {
        this.isDualSymetryClicked = true;
        this.isQuadSymetryClicked = false;
    };
    PersistentScroll.prototype.onQuadSymetryCalled = function () {
        this.isDualSymetryClicked = false;
        this.isQuadSymetryClicked = true;
    };
    PersistentScroll.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.prevTouch = point;
        this.isScrolled = false;
    };
    PersistentScroll.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        var Distance = this.prevTouch.y - point.y;
        for (var i = 0; i < this.TileArray.length; i++) {
            var element = this.TileArray[i];
            element.setPosition(element.getPosition().x, element.getPosition().y - Distance);
        }
        this.prevTouch = point;
        this.isScrolled = true;
    };
    PersistentScroll.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    PersistentScroll.prototype.update = function (dt) {
        if (!this.startUpdate)
            return;
        if (this.touchTilePos.y != 0 && !this.isScrolled) {
            var diffVal = (this.touchTilePos.y > 0 ? 1 : -1);
            var diff = 40 * diffVal;
            if (this.touchTilePos.y < 40 && this.touchTilePos.y > -40) {
                diff = this.touchTilePos.y;
                this.touchTilePos.y = 0;
            }
            else
                this.touchTilePos.y = this.touchTilePos.y - diff;
            for (var i = 0; i < this.rightNode.getChildByName("scroll").children.length; i++) {
                var element = this.rightNode.getChildByName("scroll").children[i];
                element.setPosition(new cc.Vec2(0, element.getPosition().y - diff));
            }
        }
        var currentArray = this.FrameArray;
        this.checkIfTileFilledOnBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        this.checkIfTileFilledOnTop(this.TileArray[0], currentArray);
        this.checkToRemoveFromBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        this.checkToRemoveFromTop(this.TileArray[0], currentArray);
    };
    PersistentScroll.prototype.addTile = function () {
        var posY = 0;
        this.CurrentTopIndexValue = 0;
        var currentArray = this.FrameArray;
        var lastTile = null;
        for (var i = 0; i < currentArray.length; i++) {
            var data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab);
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);
            var dataRef = CommonFun_1.default.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[i], i);
            dataRef.setLocked(currentArray[i].isLocked);
            this.TileArray.push(data);
            posY = posY - data.height;
            this.CurrentBottomIndexValue = i;
            lastTile = data;
            // if(i==10)
            //     this.touchTilePos.y = data.getPosition().y;
        }
        this.CurrentBottomIndexValue++;
        this.startUpdate = true;
    };
    PersistentScroll.prototype.checkToRemoveFromBottom = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y + lastTile.height);
        if (pos < 0) {
            this.CurrentBottomIndexValue--;
            if (this.CurrentBottomIndexValue < 0)
                this.CurrentBottomIndexValue = currentArray.length - 1;
            this.rightNode.getChildByName("scroll").removeChild(lastTile);
            this.TileArray.pop();
        }
    };
    PersistentScroll.prototype.checkToRemoveFromTop = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y - lastTile.height);
        if (pos > this.rightNode.getChildByName("scroll").height) {
            this.CurrentTopIndexValue++;
            if (this.CurrentTopIndexValue >= currentArray.length)
                this.CurrentTopIndexValue = 0;
            this.rightNode.getChildByName("scroll").removeChild(lastTile);
            this.TileArray.shift();
        }
    };
    PersistentScroll.prototype.checkIfTileFilledOnBottom = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y);
        if (pos > 0) {
            this.CurrentBottomIndexValue++;
            if (this.CurrentBottomIndexValue >= currentArray.length)
                this.CurrentBottomIndexValue = 0;
            var posY = lastTile.getPosition().y - lastTile.height;
            var data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab);
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);
            var dataRef = CommonFun_1.default.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[this.CurrentBottomIndexValue], this.CurrentBottomIndexValue);
            dataRef.setLocked(currentArray[this.CurrentBottomIndexValue].isLocked);
            this.TileArray.push(data);
            this.checkIfTileFilledOnBottom(this.TileArray[this.TileArray.length - 1], currentArray);
        }
    };
    PersistentScroll.prototype.checkIfTileFilledOnTop = function (lastTile, currentArray) {
        var pos = CommonFun_1.default.instance.convertToCenterYPos(lastTile.getPosition().y);
        if (pos < this.rightNode.getChildByName("scroll").height) {
            this.CurrentTopIndexValue--;
            if (this.CurrentTopIndexValue < 0)
                this.CurrentTopIndexValue = currentArray.length - 1;
            var posY = lastTile.getPosition().y + lastTile.height;
            var data = cc.instantiate(this.TileSelectionListArray[this.currentTileIndex].ScrollSelectionPrefab);
            this.rightNode.getChildByName("scroll").addChild(data);
            data.setPosition(0, posY);
            var dataRef = CommonFun_1.default.instance.getTileSelectionClassRef(data);
            dataRef.initialiseRef(this);
            dataRef.initialiseData(currentArray[this.CurrentTopIndexValue], this.CurrentTopIndexValue);
            dataRef.setLocked(currentArray[this.CurrentTopIndexValue].isLocked);
            this.TileArray.unshift(data);
            this.checkIfTileFilledOnTop(this.TileArray[0], currentArray);
        }
    };
    PersistentScroll.prototype.onTileSelected = function (ref) {
        cc.audioEngine.playEffect(this.scrollAud, false);
        if (this.isScrolled) {
            for (var i = 0; i < this.rightNode.getChildByName("scroll").children.length; i++) {
                var element = this.rightNode.getChildByName("scroll").children[i];
                var area = element.getBoundingBox();
                var pos = this.rightNode.convertToNodeSpaceAR(element.getPosition());
                var a = new cc.Rect(pos.x, pos.y - element.height * 0.5, element.width, element.height);
                var b = new cc.Vec2(this.rightNode.getChildByName("arrow").getChildByName("point").getPosition().x, this.rightNode.getChildByName("arrow").getChildByName("point").getPosition().y);
                b = this.rightNode.convertToNodeSpaceAR(b);
                if (a.contains(b)) {
                    this.isScrolled = false;
                    this.touchTilePos.y = element.getPosition().y;
                    var elementRef = element.getComponent(TileSelection_1.default);
                    if (!elementRef.isLocked) {
                        this.changePattern(elementRef);
                    }
                    else {
                        console.log("Selected is locked -- ritesh");
                    }
                }
            }
        }
        else {
            if (!ref.isLocked) {
                this.changePattern(ref);
            }
            else {
                console.log("Selected is locked -- ritesh");
            }
            this.touchTilePos.y = ref.node.getPosition().y;
        }
    };
    PersistentScroll.prototype.changePattern = function (element) {
        this.currentPatternFrame = element.patternFrame;
        this.currentPatternFrameIndex = element.index;
        this.changeParticle(element.index);
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER) {
            this.currentPensilSelection = this.prevPensilSelection;
            this.highLightTool();
        }
    };
    PersistentScroll.prototype.onColorClicked = function () {
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant_1.Constant.COLORTAG.COLOR;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].ColorFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();
        this.currentPatternFrame = this.FrameArray[0].color;
        this.currentPatternFrameIndex = 0;
        this.changeParticle(0);
        var element1 = this.ToolArray[this.currentPensilSelection];
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH2 ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.SPRAY ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PAINT)
            element1.getChildByName("mask").getChildByName("bg").color = this.currentPatternFrame; //CommonFun.instance.hexToRgb(this.currentPatternFrame);
    };
    PersistentScroll.prototype.onPatternClicked = function () {
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant_1.Constant.COLORTAG.PATTERN;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].PatternFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();
        this.currentPatternFrame = this.FrameArray[0].PatternFrame;
        this.currentPatternFrameIndex = 0;
        this.changeParticle(0);
    };
    PersistentScroll.prototype.onSparkleClicked = function () {
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            return;
        this.startUpdate = false;
        this.currentTileIndex = Constant_1.Constant.COLORTAG.SPARKLE;
        this.FrameArray = this.TileSelectionListArray[this.currentTileIndex].SparkleFrameListArray;
        this.TileArray = [];
        this.rightNode.getChildByName("scroll").removeAllChildren();
        this.addTile();
        this.currentPatternFrame = this.FrameArray[0].SparkleFrame;
        this.currentPatternFrameIndex = 0;
        this.changeParticle(0);
    };
    PersistentScroll.prototype.changeParticle = function (index) {
        //set color of particle
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR) {
            this.particleEffect.spriteFrame = this.FrameArray[index].colorParticleFrame;
            this.particleEffect.startColor = this.FrameArray[index].color; //CommonFun.instance.hexToRgb(this.FrameArray[index].color);
            this.particleEffect.endColor = this.FrameArray[index].color; //CommonFun.instance.hexToRgb(this.FrameArray[index].color);
        }
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN) {
            this.particleEffect.spriteFrame = this.FrameArray[index].PatternParticleFrame;
            this.particleEffect.startColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
            this.particleEffect.endColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
        }
        if (this.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE) {
            this.particleEffect.spriteFrame = this.FrameArray[index].SparkleParticleFrame;
            this.particleEffect.startColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
            this.particleEffect.endColor = CommonFun_1.default.instance.hexToRgb("#FFFFFF");
        }
        //set color of tool
        var element1 = this.ToolArray[this.currentPensilSelection];
        this.currentToolIndex = index;
        this.updateColorOfTool(element1, this.currentPensilSelection, index);
    };
    PersistentScroll.prototype.initialiseTool = function () {
        this.highLightTool();
        for (var i = 0; i < this.ToolArray.length; i++) {
            var element1 = this.ToolArray[i];
            this.initColorOfTool(element1, i, 0);
        }
    };
    PersistentScroll.prototype.onToolsClicked = function (ref, tag) {
        this.prevPensilSelection = this.currentPensilSelection;
        this.currentPensilSelection = Constant_1.Constant.ToolsTag[tag];
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER) {
            cc.audioEngine.playEffect(this.eraserAud, false);
        }
        else {
            cc.audioEngine.playEffect(this.toolsAud, false);
        }
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH2 ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.SPRAY ||
            this.currentPensilSelection == Constant_1.Constant.ToolsTag.PAINT)
            this.onColorClicked();
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.PATTERN)
            this.onPatternClicked();
        if (this.currentPensilSelection == Constant_1.Constant.ToolsTag.SPARKEL)
            this.onSparkleClicked();
        this.highLightTool();
        this.updateColorOfTool(ref.target, this.currentPensilSelection, this.currentToolIndex);
    };
    PersistentScroll.prototype.highLightTool = function () {
        for (var i = 0; i < this.ToolArray.length; i++) {
            var element = this.ToolArray[i];
            element.scale = 1;
            if (i != Constant_1.Constant.ToolsTag.ERASER) {
                element.getChildByName("mask").getChildByName("layer").active = false;
                element.getChildByName("highLight1").active = false;
            }
            element.getChildByName("highLight").active = false;
            if (i == this.currentPensilSelection) {
                if (i != Constant_1.Constant.ToolsTag.ERASER) {
                    element.getChildByName("mask").getChildByName("layer").active = false;
                    element.getChildByName("highLight1").active = true;
                }
                element.getChildByName("highLight").active = true;
                element.scale = 1.1;
            }
        }
    };
    PersistentScroll.prototype.initColorOfTool = function (element, value, index) {
        if (value == Constant_1.Constant.ToolsTag.BRUSH
        // || 
        // value == Constant.ToolsTag.PENCIL ||
        //     value == Constant.ToolsTag.BRUSH2||
        //         value == Constant.ToolsTag.SPRAY||
        //             value == Constant.ToolsTag.PAINT
        )
            element.getChildByName("mask").getChildByName("bg").color = this.TileSelectionListArray[0].ColorFrameListArray[index].color; //CommonFun.instance.hexToRgb(this.TileSelectionListArray[0].ColorFrameListArray[index].color);
        if (value == Constant_1.Constant.ToolsTag.SPARKEL)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.TileSelectionListArray[2].SparkleFrameListArray[index].SparkleFrame;
        if (value == Constant_1.Constant.ToolsTag.PATTERN)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.TileSelectionListArray[1].PatternFrameListArray[index].PatternFrame;
    };
    PersistentScroll.prototype.updateColorOfTool = function (element, value, index) {
        if (value == Constant_1.Constant.ToolsTag.BRUSH ||
            value == Constant_1.Constant.ToolsTag.PENCIL ||
            value == Constant_1.Constant.ToolsTag.BRUSH2 ||
            value == Constant_1.Constant.ToolsTag.SPRAY ||
            value == Constant_1.Constant.ToolsTag.PAINT)
            element.getChildByName("mask").getChildByName("bg").color = this.FrameArray[index].color; //CommonFun.instance.hexToRgb(this.FrameArray[index].color);
        if (value == Constant_1.Constant.ToolsTag.SPARKEL)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.FrameArray[index].SparkleFrame;
        if (value == Constant_1.Constant.ToolsTag.PATTERN)
            element.getChildByName("mask").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.FrameArray[index].PatternFrame;
    };
    PersistentScroll.prototype.initialiseDrawing = function (ref) {
        this.currentDrawingScript = ref;
    };
    PersistentScroll.prototype.onUndoClicked = function () {
        cc.audioEngine.playEffect(this.eraserAud, false);
        if (this.currentDrawingScript.currentstensil.length > 0) {
            var data = this.currentDrawingScript.currentstensil[this.currentDrawingScript.currentstensil.length - 1];
            for (var i = 0; i < this.currentDrawingScript.drawingDataArray.length; i++) {
                for (var j = 0; j < this.currentDrawingScript.drawingDataArray[i].length; j++) {
                    if (data.child == this.currentDrawingScript.drawingDataArray[i][j].child)
                        this.currentDrawingScript.drawingDataArray[i].pop();
                }
            }
            data.parent.removeChild(data.child);
            this.currentDrawingScript.currentstensil.pop();
        }
    };
    PersistentScroll.prototype.playQuestionsound = function () {
        var _this = this;
        this.node.getChildByName("panel").getChildByName("vo").getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.Qvoplay[GamePlay_1.default.Instance.count], false);
        this.scheduleOnce(function () {
            _this.node.getChildByName("panel").getChildByName("vo").getComponent(cc.Button).interactable = true;
        }, this.Qvoplay[GamePlay_1.default.Instance.count].duration + 0.1);
    };
    var PersistentScroll_1;
    PersistentScroll.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "Qvoplay", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "tickBtn", void 0);
    __decorate([
        property(TileSelectionList)
    ], PersistentScroll.prototype, "TileSelectionListArray", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "rightNode", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "ToolArray", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "DualSymetry", void 0);
    __decorate([
        property(cc.Node)
    ], PersistentScroll.prototype, "QuadSymetry", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], PersistentScroll.prototype, "particleEffect", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "cameraAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "toolsAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "glowAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "scrollAud", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PersistentScroll.prototype, "eraserAud", void 0);
    PersistentScroll = PersistentScroll_1 = __decorate([
        ccclass
    ], PersistentScroll);
    return PersistentScroll;
}(cc.Component));
exports.default = PersistentScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXFBlcnNpc3RlbnRcXFBlcnNpc3RlbnRTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0RBQStDO0FBRS9DLGtEQUFpRDtBQUNqRCw4Q0FBeUM7QUFDekMsd0NBQW1DO0FBQ25DLGtEQUE2QztBQUV2QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBRUksVUFBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR3ZCLHVCQUFrQixHQUFtQixJQUFJLENBQUM7UUFHMUMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBUEc7UUFEQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztpREFDdkI7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDOzhEQUN2QztJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO29EQUM5QjtJQVJmLGNBQWM7UUFEbkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO09BQ3BCLGNBQWMsQ0FTbkI7SUFBRCxxQkFBQztDQVRELEFBU0MsSUFBQTtBQUVEO0lBQUE7UUFFSSxpQkFBWSxHQUFtQixJQUFJLENBQUM7UUFHcEMseUJBQW9CLEdBQW1CLElBQUksQ0FBQztRQUc1QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDOzBEQUN2QztJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLENBQUM7a0VBQ3ZDO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7c0RBQzlCO0lBUmYsZ0JBQWdCO1FBRHJCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztPQUN0QixnQkFBZ0IsQ0FTckI7SUFBRCx1QkFBQztDQVRELEFBU0MsSUFBQTtBQUVEO0lBQUE7UUFFSSxpQkFBWSxHQUFtQixJQUFJLENBQUM7UUFHcEMseUJBQW9CLEdBQW1CLElBQUksQ0FBQztRQUc1QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFQRztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDOzBEQUN2QztJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLENBQUM7a0VBQ3ZDO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7c0RBQzlCO0lBUmYsZ0JBQWdCO1FBRHJCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztPQUN0QixnQkFBZ0IsQ0FTckI7SUFBRCx1QkFBQztDQVRELEFBU0MsSUFBQTtBQUdEO0lBQUE7UUFFSSxzQkFBaUIsR0FBYyxJQUFJLENBQUM7UUFHcEMsMEJBQXFCLEdBQWMsSUFBSSxDQUFDO1FBR3hDLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUd6QiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFHM0IsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRzNCLFNBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBaEJHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUM7Z0VBQ2pDO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztvRUFDakM7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUM7a0VBQ3pEO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUM7b0VBQzNEO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUM7b0VBQzNEO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7bURBQ25DO0lBakJSLGlCQUFpQjtRQUR0QixPQUFPLENBQUMsbUJBQW1CLENBQUM7T0FDdkIsaUJBQWlCLENBa0J0QjtJQUFELHdCQUFDO0NBbEJELEFBa0JDLElBQUE7QUFHRDtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXdnQkM7UUF0Z0JHLGFBQU8sR0FBbUIsRUFBRSxDQUFDO1FBRzdCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4Qiw0QkFBc0IsR0FBd0IsRUFBRSxDQUFDO1FBR2pELGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFHLEVBQUUsQ0FBQztRQUlmLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLHNCQUFzQjtRQUN0QixrQ0FBa0M7UUFHbEMsb0JBQWMsR0FBc0IsSUFBSSxDQUFDO1FBR3pDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBaUIsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLDZCQUF1QixHQUFHLENBQUMsQ0FBQztRQUM1QiwwQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztRQUN4QixrQkFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakMsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIseUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLDRCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIseUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLDhCQUF3QixHQUFHLENBQUMsQ0FBQztRQUU3QiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsMEJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLDBCQUFvQixHQUFHLEtBQUssQ0FBQzs7SUF3Y2pDLENBQUM7eUJBeGdCb0IsZ0JBQWdCO0lBbUVqQyxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLE9BQU8sa0JBQWdCLENBQUMsUUFBUSxDQUFBO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsaUNBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRDLGdCQUFNLENBQUMsUUFBUSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztRQUVoRCxrQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBR3RCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsbUJBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXZELHlCQUF5QjtRQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4Q0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNELDhDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBR0Qsd0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDZixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUNwRjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEQsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ2pCLE9BQU87UUFHWCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDOUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUN2RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjs7Z0JBRUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5RSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdkU7U0FDSjtRQUdELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFHN0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRTFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUE7WUFDbkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTFCLElBQUksT0FBTyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLENBQUM7WUFDakMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVoQixZQUFZO1lBQ1osa0RBQWtEO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELGtEQUF1QixHQUF2QixVQUF3QixRQUFRLEVBQUUsWUFBWTtRQUMxQyxJQUFJLEdBQUcsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsK0NBQW9CLEdBQXBCLFVBQXFCLFFBQVEsRUFBRSxZQUFZO1FBQ3ZDLElBQUksR0FBRyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN0RCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxZQUFZLENBQUMsTUFBTTtnQkFDaEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxvREFBeUIsR0FBekIsVUFBMEIsUUFBUSxFQUFFLFlBQVk7UUFDNUMsSUFBSSxHQUFHLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNULElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLHVCQUF1QixJQUFJLFlBQVksQ0FBQyxNQUFNO2dCQUNuRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO1lBRXJDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN0RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUxQixJQUFJLE9BQU8sR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2pHLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXZFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTFCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNGO0lBQ0wsQ0FBQztJQUNELGlEQUFzQixHQUF0QixVQUF1QixRQUFRLEVBQUUsWUFBWTtRQUN6QyxJQUFJLEdBQUcsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3RELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUV4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQTtZQUNuRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFMUIsSUFBSSxPQUFPLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMzRixPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVwRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNoRTtJQUNMLENBQUM7SUFHRCx5Q0FBYyxHQUFkLFVBQWUsR0FBRztRQUNkLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5RSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFeEYsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQzlGLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxVQUFVLEdBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFtQixDQUFDO29CQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDbEM7eUJBQ0k7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO3FCQUM5QztpQkFDSjthQUNKO1NBQ0o7YUFDSTtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO2FBQzlDO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLE9BQU87UUFDakIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3pELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ2hELE9BQU87UUFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsbUJBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ3pGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdEQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDdkQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDdkQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdEQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQSxDQUFBLHdEQUF3RDtJQUVySixDQUFDO0lBQ0QsMkNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTztZQUNsRCxPQUFPO1FBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUMzRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELDJDQUFnQixHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDbEQsT0FBTztRQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUM7UUFDM0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDM0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsS0FBSztRQUNoQix1QkFBdUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUEsQ0FBQSw0REFBNEQ7WUFDekgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUEsQ0FBQSw0REFBNEQ7U0FDMUg7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztZQUM5RSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsb0JBQW9CLENBQUM7WUFDOUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RTtRQUVELG1CQUFtQjtRQUNuQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFHckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxHQUFHLEVBQUUsR0FBRztRQUVuQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDekQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRDthQUNJO1lBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdEQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDdkQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDdkQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdEQsSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDeEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTztZQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUMvQixPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0RSxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdkQ7WUFDRCxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQy9CLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDdEQ7Z0JBQ0QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNsRCxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLO1FBQ2pDLElBQUksS0FBSyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7UUFDaEMsTUFBTTtRQUNOLHVDQUF1QztRQUN2QywwQ0FBMEM7UUFDMUMsNkNBQTZDO1FBQzdDLCtDQUErQzs7WUFFL0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUEsQ0FBQSwrRkFBK0Y7UUFFOU4sSUFBSSxLQUFLLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTztZQUNsQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRXZLLElBQUksS0FBSyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUUzSyxDQUFDO0lBQ0QsNENBQWlCLEdBQWpCLFVBQWtCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSztRQUNuQyxJQUFJLEtBQUssSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ2hDLEtBQUssSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ2pDLEtBQUssSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ2pDLEtBQUssSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ2hDLEtBQUssSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ2hDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQSxDQUFBLDREQUE0RDtRQUV4SixJQUFJLEtBQUssSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQ2xDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRWxJLElBQUksS0FBSyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDdEksQ0FBQztJQUVELDRDQUFpQixHQUFqQixVQUFrQixHQUFHO1FBQ2pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFekcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7d0JBQ3BFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDM0Q7YUFFSjtZQUlELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUNELDRDQUFpQixHQUFqQjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwRyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFdkcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7O0lBcmNjLHlCQUFRLEdBQXFCLElBQUksQ0FBQztJQWhFakQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7b0VBQ3FCO0lBR2pEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDSDtJQUlmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDQztJQU1uQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDOzREQUNhO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7dURBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNNO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7dURBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDUTtJQXZDZCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXdnQnBDO0lBQUQsdUJBQUM7Q0F4Z0JELEFBd2dCQyxDQXhnQjZDLEVBQUUsQ0FBQyxTQUFTLEdBd2dCekQ7a0JBeGdCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENvbW1vbkZ1biBmcm9tIFwiLi4vLi4vQ29tbW9uL0NvbW1vbkZ1blwiO1xyXG5pbXBvcnQgY29uZmlnRGF0YSBmcm9tIFwiLi4vLi4vQ29tbW9uL0NvbmZpZ0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL0NvbnN0YW50XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL0NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgVGlsZVNlbGVjdGlvbiBmcm9tIFwiLi4vVGlsZVNlbGVjdGlvblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiQ29sb3JGcmFtZUxpc3RcIilcclxuY2xhc3MgQ29sb3JGcmFtZUxpc3Qge1xyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJjb2xvclwiIH0pXHJcbiAgICBjb2xvciA9IG5ldyBjYy5Db2xvcigpO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImNvbG9yUGFydGljbGVGcmFtZVwiIH0pXHJcbiAgICBjb2xvclBhcnRpY2xlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcImxvY2tlZFwiIH0pXHJcbiAgICBpc0xvY2tlZCA9IGZhbHNlO1xyXG59XHJcbkBjY2NsYXNzKFwiUGF0dGVybkZyYW1lTGlzdFwiKVxyXG5jbGFzcyBQYXR0ZXJuRnJhbWVMaXN0IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlBhdHRlcm5GcmFtZVwiIH0pXHJcbiAgICBQYXR0ZXJuRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJQYXR0ZXJuUGFydGljbGVGcmFtZVwiIH0pXHJcbiAgICBQYXR0ZXJuUGFydGljbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwibG9ja2VkXCIgfSlcclxuICAgIGlzTG9ja2VkID0gZmFsc2U7XHJcbn1cclxuQGNjY2xhc3MoXCJTcGFya2xlRnJhbWVMaXN0XCIpXHJcbmNsYXNzIFNwYXJrbGVGcmFtZUxpc3Qge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiU3BhcmtsZUZyYW1lXCIgfSlcclxuICAgIFNwYXJrbGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlNwYXJrbGVQYXJ0aWNsZUZyYW1lXCIgfSlcclxuICAgIFNwYXJrbGVQYXJ0aWNsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJsb2NrZWRcIiB9KVxyXG4gICAgaXNMb2NrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuQGNjY2xhc3MoXCJUaWxlU2VsZWN0aW9uTGlzdFwiKVxyXG5jbGFzcyBUaWxlU2VsZWN0aW9uTGlzdCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiRHJhd2luZ21hc2tcIiB9KVxyXG4gICAgRHJhd2luZ21hc2tQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIlNjcm9sbFNlbGVjdGlvblwiIH0pXHJcbiAgICBTY3JvbGxTZWxlY3Rpb25QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ29sb3JGcmFtZUxpc3QsIHZpc2libGU6IHRydWUsIHRvb2x0aXA6IFwiQ29sb3JGcmFtZUxpc3RBcnJheVwiIH0pXHJcbiAgICBDb2xvckZyYW1lTGlzdEFycmF5ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUGF0dGVybkZyYW1lTGlzdCwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJQYXR0ZXJuRnJhbWVMaXN0QXJyYXlcIiB9KVxyXG4gICAgUGF0dGVybkZyYW1lTGlzdEFycmF5ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3BhcmtsZUZyYW1lTGlzdCwgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJTcGFya2xlRnJhbWVMaXN0QXJyYXlcIiB9KVxyXG4gICAgU3BhcmtsZUZyYW1lTGlzdEFycmF5ID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogdHJ1ZSwgdG9vbHRpcDogXCJ0eXBlXCIgfSlcclxuICAgIHR5cGUgPSBcIlwiO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U2Nyb2xsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBRdm9wbGF5OiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpY2tCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShUaWxlU2VsZWN0aW9uTGlzdClcclxuICAgIFRpbGVTZWxlY3Rpb25MaXN0QXJyYXk6IFRpbGVTZWxlY3Rpb25MaXN0W10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJpZ2h0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBUb29sQXJyYXkgPSBbXTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEdWFsU3ltZXRyeSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFF1YWRTeW1ldHJ5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuQ29sb3IpXHJcbiAgICAvLyBjb2xvclBpY2tlcjogY2MuQ29sb3JbXSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgcGFydGljbGVFZmZlY3Q6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2FtZXJhQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHRvb2xzQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdsb3dBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2Nyb2xsQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGVyYXNlckF1ZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBDdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA9IDA7XHJcbiAgICBDdXJyZW50VG9wSW5kZXhWYWx1ZSA9IDA7XHJcblxyXG4gICAgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgRnJhbWVBcnJheSA9IFtdO1xyXG4gICAgVGlsZUFycmF5ID0gW107XHJcblxyXG4gICAgc3RhcnRVcGRhdGUgPSBmYWxzZTtcclxuICAgIGlzU2Nyb2xsZWQgPSBmYWxzZTtcclxuICAgIHByZXZUb3VjaCA9IG5ldyBjYy5WZWMyO1xyXG4gICAgdG91Y2hUaWxlUG9zID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgY3VycmVudFRpbGVJbmRleCA9IC0xO1xyXG4gICAgcHJldlBlbnNpbFNlbGVjdGlvbiA9IDA7XHJcbiAgICBjdXJyZW50UGVuc2lsU2VsZWN0aW9uID0gMTtcclxuICAgIGN1cnJlbnRUb29sSW5kZXggPSAxO1xyXG4gICAgY3VycmVudFBhdHRlcm5GcmFtZSA9IG51bGw7XHJcbiAgICBjdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSAwO1xyXG5cclxuICAgIGN1cnJlbnREcmF3aW5nU2NyaXB0ID0gbnVsbDtcclxuXHJcbiAgICBpc0R1YWxTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgaXNRdWFkU3ltZXRyeUNsaWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUGVyc2lzdGVudFNjcm9sbCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBQZXJzaXN0ZW50U2Nyb2xsLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGVyQ29tcGxldGUtLXRydWVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLVRpdGxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICBQZXJzaXN0ZW50U2Nyb2xsLmluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MgPSBuZXcgY2MuVmVjMigwLCAwKTtcclxuICAgICAgICB0aGlzLm9uQ29sb3JDbGlja2VkKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlVG9vbCgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hCZWdpbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9IENvbnN0YW50LlRvb2xzVGFnLlBFTkNJTDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5faW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50ID0gXCIsIHRoaXMuY291bnQpO1xyXG4gICAgICAgIHRoaXMuY291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICBvbkR1YWxTeW1ldHJ5Q2FsbGVkKCkge1xyXG4gICAgICAgIHRoaXMuaXNEdWFsU3ltZXRyeUNsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNRdWFkU3ltZXRyeUNsaWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIG9uUXVhZFN5bWV0cnlDYWxsZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0R1YWxTeW1ldHJ5Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNRdWFkU3ltZXRyeUNsaWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfb25Ub3VjaEJlZ2luKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBwb2ludDtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Njcm9sbGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hNb3ZlZChldmVudCkge1xyXG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG5cclxuICAgICAgICBsZXQgRGlzdGFuY2UgPSB0aGlzLnByZXZUb3VjaC55IC0gcG9pbnQueTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRpbGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5UaWxlQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0UG9zaXRpb24oZWxlbWVudC5nZXRQb3NpdGlvbigpLngsIGVsZW1lbnQuZ2V0UG9zaXRpb24oKS55IC0gRGlzdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG5cclxuICAgICAgICB0aGlzLmlzU2Nyb2xsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFydFVwZGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaWxlUG9zLnkgIT0gMCAmJiAhdGhpcy5pc1Njcm9sbGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWZmVmFsID0gKHRoaXMudG91Y2hUaWxlUG9zLnkgPiAwID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgbGV0IGRpZmYgPSA0MCAqIGRpZmZWYWw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoVGlsZVBvcy55IDwgNDAgJiYgdGhpcy50b3VjaFRpbGVQb3MueSA+IC00MCkge1xyXG4gICAgICAgICAgICAgICAgZGlmZiA9IHRoaXMudG91Y2hUaWxlUG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gdGhpcy50b3VjaFRpbGVQb3MueSAtIGRpZmY7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoMCwgZWxlbWVudC5nZXRQb3NpdGlvbigpLnkgLSBkaWZmKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY3VycmVudEFycmF5ID0gdGhpcy5GcmFtZUFycmF5O1xyXG4gICAgICAgIHRoaXMuY2hlY2tJZlRpbGVGaWxsZWRPbkJvdHRvbSh0aGlzLlRpbGVBcnJheVt0aGlzLlRpbGVBcnJheS5sZW5ndGggLSAxXSwgY3VycmVudEFycmF5KTtcclxuICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrVG9SZW1vdmVGcm9tQm90dG9tKHRoaXMuVGlsZUFycmF5W3RoaXMuVGlsZUFycmF5Lmxlbmd0aCAtIDFdLCBjdXJyZW50QXJyYXkpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tUb1JlbW92ZUZyb21Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGlsZSgpIHtcclxuICAgICAgICB2YXIgcG9zWSA9IDA7XHJcbiAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50QXJyYXkgPSB0aGlzLkZyYW1lQXJyYXk7XHJcbiAgICAgICAgbGV0IGxhc3RUaWxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU2Nyb2xsU2VsZWN0aW9uUHJlZmFiKVxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5hZGRDaGlsZChkYXRhKTtcclxuICAgICAgICAgICAgZGF0YS5zZXRQb3NpdGlvbigwLCBwb3NZKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldFRpbGVTZWxlY3Rpb25DbGFzc1JlZihkYXRhKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VEYXRhKGN1cnJlbnRBcnJheVtpXSwgaSk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuc2V0TG9ja2VkKGN1cnJlbnRBcnJheVtpXS5pc0xvY2tlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnB1c2goZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBwb3NZID0gcG9zWSAtIGRhdGEuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlID0gaTtcclxuICAgICAgICAgICAgbGFzdFRpbGUgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYoaT09MTApXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnRvdWNoVGlsZVBvcy55ID0gZGF0YS5nZXRQb3NpdGlvbigpLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUrKztcclxuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1RvUmVtb3ZlRnJvbUJvdHRvbShsYXN0VGlsZSwgY3VycmVudEFycmF5KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IENvbW1vbkZ1bi5pbnN0YW5jZS5jb252ZXJ0VG9DZW50ZXJZUG9zKGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSArIGxhc3RUaWxlLmhlaWdodCk7XHJcbiAgICAgICAgaWYgKHBvcyA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZS0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSA8IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUNoaWxkKGxhc3RUaWxlKTtcclxuICAgICAgICAgICAgdGhpcy5UaWxlQXJyYXkucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVG9SZW1vdmVGcm9tVG9wKGxhc3RUaWxlLCBjdXJyZW50QXJyYXkpIHtcclxuICAgICAgICBsZXQgcG9zID0gQ29tbW9uRnVuLmluc3RhbmNlLmNvbnZlcnRUb0NlbnRlcllQb3MobGFzdFRpbGUuZ2V0UG9zaXRpb24oKS55IC0gbGFzdFRpbGUuaGVpZ2h0KTtcclxuICAgICAgICBpZiAocG9zID4gdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUgPj0gY3VycmVudEFycmF5Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudFRvcEluZGV4VmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5yZW1vdmVDaGlsZChsYXN0VGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZUaWxlRmlsbGVkT25Cb3R0b20obGFzdFRpbGUsIGN1cnJlbnRBcnJheSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFRvQ2VudGVyWVBvcyhsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIGlmIChwb3MgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPj0gY3VycmVudEFycmF5Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuQ3VycmVudEJvdHRvbUluZGV4VmFsdWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvc1kgPSBsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkgLSBsYXN0VGlsZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuaW5zdGFudGlhdGUodGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU2Nyb2xsU2VsZWN0aW9uUHJlZmFiKVxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5hZGRDaGlsZChkYXRhKTtcclxuICAgICAgICAgICAgZGF0YS5zZXRQb3NpdGlvbigwLCBwb3NZKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldFRpbGVTZWxlY3Rpb25DbGFzc1JlZihkYXRhKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VEYXRhKGN1cnJlbnRBcnJheVt0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlXSwgdGhpcy5DdXJyZW50Qm90dG9tSW5kZXhWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuc2V0TG9ja2VkKGN1cnJlbnRBcnJheVt0aGlzLkN1cnJlbnRCb3R0b21JbmRleFZhbHVlXS5pc0xvY2tlZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlRpbGVBcnJheS5wdXNoKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGVja0lmVGlsZUZpbGxlZE9uQm90dG9tKHRoaXMuVGlsZUFycmF5W3RoaXMuVGlsZUFycmF5Lmxlbmd0aCAtIDFdLCBjdXJyZW50QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrSWZUaWxlRmlsbGVkT25Ub3AobGFzdFRpbGUsIGN1cnJlbnRBcnJheSkge1xyXG4gICAgICAgIGxldCBwb3MgPSBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFRvQ2VudGVyWVBvcyhsYXN0VGlsZS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIGlmIChwb3MgPCB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZS0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5DdXJyZW50VG9wSW5kZXhWYWx1ZSA8IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlID0gY3VycmVudEFycmF5Lmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zWSA9IGxhc3RUaWxlLmdldFBvc2l0aW9uKCkueSArIGxhc3RUaWxlLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5TY3JvbGxTZWxlY3Rpb25QcmVmYWIpXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmFkZENoaWxkKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhLnNldFBvc2l0aW9uKDAsIHBvc1kpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGFSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0VGlsZVNlbGVjdGlvbkNsYXNzUmVmKGRhdGEpO1xyXG4gICAgICAgICAgICBkYXRhUmVmLmluaXRpYWxpc2VSZWYodGhpcyk7XHJcbiAgICAgICAgICAgIGRhdGFSZWYuaW5pdGlhbGlzZURhdGEoY3VycmVudEFycmF5W3RoaXMuQ3VycmVudFRvcEluZGV4VmFsdWVdLCB0aGlzLkN1cnJlbnRUb3BJbmRleFZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YVJlZi5zZXRMb2NrZWQoY3VycmVudEFycmF5W3RoaXMuQ3VycmVudFRvcEluZGV4VmFsdWVdLmlzTG9ja2VkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVGlsZUFycmF5LnVuc2hpZnQoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZUaWxlRmlsbGVkT25Ub3AodGhpcy5UaWxlQXJyYXlbMF0sIGN1cnJlbnRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRpbGVTZWxlY3RlZChyZWYpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2Nyb2xsQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJlYSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnJpZ2h0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbGVtZW50LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgY2MuUmVjdChwb3MueCwgcG9zLnkgLSBlbGVtZW50LmhlaWdodCAqIDAuNSwgZWxlbWVudC53aWR0aCwgZWxlbWVudC5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBiID0gbmV3IGNjLlZlYzIodGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5nZXRDaGlsZEJ5TmFtZShcInBvaW50XCIpLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmdldENoaWxkQnlOYW1lKFwicG9pbnRcIikuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICAgICAgICAgIGIgPSB0aGlzLnJpZ2h0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYS5jb250YWlucyhiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hUaWxlUG9zLnkgPSBlbGVtZW50LmdldFBvc2l0aW9uKCkueTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlZiA9IChlbGVtZW50LmdldENvbXBvbmVudChUaWxlU2VsZWN0aW9uKSBhcyBUaWxlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRSZWYuaXNMb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYXR0ZXJuKGVsZW1lbnRSZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBpcyBsb2NrZWQgLS0gcml0ZXNoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXJlZi5pc0xvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYXR0ZXJuKHJlZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGlzIGxvY2tlZCAtLSByaXRlc2hcIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50b3VjaFRpbGVQb3MueSA9IHJlZi5ub2RlLmdldFBvc2l0aW9uKCkueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGF0dGVybihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lID0gZWxlbWVudC5wYXR0ZXJuRnJhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXggPSBlbGVtZW50LmluZGV4O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFydGljbGUoZWxlbWVudC5pbmRleCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9IHRoaXMucHJldlBlbnNpbFNlbGVjdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5oaWdoTGlnaHRUb29sKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sb3JDbGlja2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZUluZGV4ID0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1I7XHJcbiAgICAgICAgdGhpcy5GcmFtZUFycmF5ID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uQ29sb3JGcmFtZUxpc3RBcnJheTtcclxuICAgICAgICB0aGlzLlRpbGVBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmlnaHROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRUaWxlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZSA9IHRoaXMuRnJhbWVBcnJheVswXS5jb2xvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFydGljbGUoMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQxID0gdGhpcy5Ub29sQXJyYXlbdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMiB8fFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BSQVkgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgICAgICBlbGVtZW50MS5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZS8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZSk7XHJcblxyXG4gICAgfVxyXG4gICAgb25QYXR0ZXJuQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXJ0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZUluZGV4ID0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTjtcclxuICAgICAgICB0aGlzLkZyYW1lQXJyYXkgPSB0aGlzLlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbdGhpcy5jdXJyZW50VGlsZUluZGV4XS5QYXR0ZXJuRnJhbWVMaXN0QXJyYXk7XHJcbiAgICAgICAgdGhpcy5UaWxlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLnJpZ2h0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjcm9sbFwiKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkVGlsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbMF0uUGF0dGVybkZyYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJ0aWNsZSgwKTtcclxuICAgIH1cclxuICAgIG9uU3BhcmtsZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGFydFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGVJbmRleCA9IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEU7XHJcbiAgICAgICAgdGhpcy5GcmFtZUFycmF5ID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W3RoaXMuY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5O1xyXG4gICAgICAgIHRoaXMuVGlsZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yaWdodE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxcIikucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLmFkZFRpbGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0dGVybkZyYW1lID0gdGhpcy5GcmFtZUFycmF5WzBdLlNwYXJrbGVGcmFtZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFydGljbGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGFydGljbGUoaW5kZXgpIHtcclxuICAgICAgICAvL3NldCBjb2xvciBvZiBwYXJ0aWNsZVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5zcHJpdGVGcmFtZSA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3JQYXJ0aWNsZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnN0YXJ0Q29sb3IgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVFZmZlY3QuZW5kQ29sb3IgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yLy9Db21tb25GdW4uaW5zdGFuY2UuaGV4VG9SZ2IodGhpcy5GcmFtZUFycmF5W2luZGV4XS5jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTikge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnNwcml0ZUZyYW1lID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5QYXR0ZXJuUGFydGljbGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5zdGFydENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5lbmRDb2xvciA9IENvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYihcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlRWZmZWN0LnNwcml0ZUZyYW1lID0gdGhpcy5GcmFtZUFycmF5W2luZGV4XS5TcGFya2xlUGFydGljbGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5zdGFydENvbG9yID0gQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUVmZmVjdC5lbmRDb2xvciA9IENvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYihcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NldCBjb2xvciBvZiB0b29sXHJcbiAgICAgICAgY29uc3QgZWxlbWVudDEgPSB0aGlzLlRvb2xBcnJheVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvb2xJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JPZlRvb2woZWxlbWVudDEsIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpc2VUb29sKCkge1xyXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0VG9vbCgpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvb2xBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50MSA9IHRoaXMuVG9vbEFycmF5W2ldO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb2xvck9mVG9vbChlbGVtZW50MSwgaSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG9vbHNDbGlja2VkKHJlZiwgdGFnKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJldlBlbnNpbFNlbGVjdGlvbiA9IHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPSBDb25zdGFudC5Ub29sc1RhZ1t0YWddO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5lcmFzZXJBdWQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50b29sc0F1ZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSCB8fFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDIgfHxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQUkFZIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgdGhpcy5vbkNvbG9yQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk4pXHJcbiAgICAgICAgICAgIHRoaXMub25QYXR0ZXJuQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUwpXHJcbiAgICAgICAgICAgIHRoaXMub25TcGFya2xlQ2xpY2tlZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmhpZ2hMaWdodFRvb2woKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2xvck9mVG9vbChyZWYudGFyZ2V0LCB0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24sIHRoaXMuY3VycmVudFRvb2xJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlnaExpZ2h0VG9vbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG9vbEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLlRvb2xBcnJheVtpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChpICE9IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHQxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChpID09IHRoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0MVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY2FsZSA9IDEuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29sb3JPZlRvb2woZWxlbWVudCwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIXHJcbiAgICAgICAgICAgIC8vIHx8IFxyXG4gICAgICAgICAgICAvLyB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwgfHxcclxuICAgICAgICAgICAgLy8gICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMnx8XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BSQVl8fFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVswXS5Db2xvckZyYW1lTGlzdEFycmF5W2luZGV4XS5jb2xvci8vQ29tbW9uRnVuLmluc3RhbmNlLmhleFRvUmdiKHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVswXS5Db2xvckZyYW1lTGlzdEFycmF5W2luZGV4XS5jb2xvcik7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUEFSS0VMKVxyXG4gICAgICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5UaWxlU2VsZWN0aW9uTGlzdEFycmF5WzJdLlNwYXJrbGVGcmFtZUxpc3RBcnJheVtpbmRleF0uU3BhcmtsZUZyYW1lO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTilcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVsxXS5QYXR0ZXJuRnJhbWVMaXN0QXJyYXlbaW5kZXhdLlBhdHRlcm5GcmFtZTtcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGVDb2xvck9mVG9vbChlbGVtZW50LCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0ggfHxcclxuICAgICAgICAgICAgdmFsdWUgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMIHx8XHJcbiAgICAgICAgICAgIHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIMiB8fFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSB8fFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5jb2xvciA9IHRoaXMuRnJhbWVBcnJheVtpbmRleF0uY29sb3IvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLmNvbG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUwpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLlNwYXJrbGVGcmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk4pXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkZyYW1lQXJyYXlbaW5kZXhdLlBhdHRlcm5GcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXNlRHJhd2luZyhyZWYpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0ID0gcmVmO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVW5kb0NsaWNrZWQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmVyYXNlckF1ZCwgZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmN1cnJlbnRzdGVuc2lsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmN1cnJlbnRzdGVuc2lsW3RoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWwubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuZHJhd2luZ0RhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmRyYXdpbmdEYXRhQXJyYXlbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGlsZCA9PSB0aGlzLmN1cnJlbnREcmF3aW5nU2NyaXB0LmRyYXdpbmdEYXRhQXJyYXlbaV1bal0uY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuZHJhd2luZ0RhdGFBcnJheVtpXS5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YS5wYXJlbnQucmVtb3ZlQ2hpbGQoZGF0YS5jaGlsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYXdpbmdTY3JpcHQuY3VycmVudHN0ZW5zaWwucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheVF1ZXN0aW9uc291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ2b1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5Rdm9wbGF5W0dhbWVQbGF5Lkluc3RhbmNlLmNvdW50XSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ2b1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCB0aGlzLlF2b3BsYXlbR2FtZVBsYXkuSW5zdGFuY2UuY291bnRdLmR1cmF0aW9uICsgMC4xKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/ConfigController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09d54EY9qlIFrZBCgFaPshF', 'ConfigController');
// Game/Painting_template/Script/Common/ConfigController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var configData = {
    currentConfig: {
        "levelDetails": [{
                "shape": "lettera",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterb",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterc",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterd",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettere",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterf",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterg",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterh",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letteri",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterj",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterk",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterl",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterm",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettern",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettero",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterp",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterq",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterr",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letters",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettert",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letteru",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterv",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterw",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterx",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettery",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterz",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            },
        ]
    },
    updateConfigData: function (newData) {
        this.currentConfig = newData;
        window.localStorage.setItem("a-zJson", JSON.stringify(this.currentConfig));
    },
    getConfig: function () {
        if (!Constant_1.Constant.DEBUG_ENABLED)
            this.updateConfigData(this.currentConfig);
        if (window.localStorage.getItem("a-zJson") == null || window.localStorage.getItem("a-zJson") == undefined)
            window.localStorage.setItem("a-zJson", JSON.stringify(this.currentConfig));
        return JSON.parse(window.localStorage.getItem("a-zJson"));
        return this.currentConfig;
    }
};
exports.default = configData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxDb25maWdDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7QUFFbEYsdUNBQXNDO0FBRXRDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLGFBQWEsRUFBRTtRQUNiLGNBQWMsRUFBRSxDQUFDO2dCQUNmLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQjtTQUNBO0tBQ0Y7SUFFRCxnQkFBZ0IsRUFBRSxVQUFVLE9BQU87UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELFNBQVMsRUFBRTtRQUVULElBQUksQ0FBQyxtQkFBUSxDQUFDLGFBQWE7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUc1QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTO1lBQ3ZHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRzFELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQUVELGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ0RhdGEgPSB7XHJcbiAgY3VycmVudENvbmZpZzoge1xyXG4gICAgXCJsZXZlbERldGFpbHNcIjogW3tcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmFcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyYlwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJjXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmRcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyZVwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJmXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmdcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyaFwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJpXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmpcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVya1wiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJsXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcm1cIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyblwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJvXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnBcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVycVwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJyXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnNcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVydFwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJ1XCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnZcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyd1wiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJ4XCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnlcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyelwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LFxyXG4gICAgXVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZUNvbmZpZ0RhdGE6IGZ1bmN0aW9uIChuZXdEYXRhKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRDb25maWcgPSBuZXdEYXRhO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYS16SnNvblwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRDb25maWcpKTtcclxuICB9LFxyXG5cclxuICBnZXRDb25maWc6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIUNvbnN0YW50LkRFQlVHX0VOQUJMRUQpXHJcbiAgICAgIHRoaXMudXBkYXRlQ29uZmlnRGF0YSh0aGlzLmN1cnJlbnRDb25maWcpO1xyXG5cclxuXHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYS16SnNvblwiKSA9PSBudWxsIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImEtekpzb25cIikgPT0gdW5kZWZpbmVkKVxyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhLXpKc29uXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudENvbmZpZykpO1xyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImEtekpzb25cIikpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29uZmlnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnRGF0YTsiXX0=
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
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25d577LK0hNiIdIeT/jFT5D', 'globalVariables');
// Game/Painting_template/Script/globalVariables.ts

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
var GamePlay_1 = require("./GamePlay/GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var globalVariables = /** @class */ (function (_super) {
    __extends(globalVariables, _super);
    function globalVariables() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jockey = null;
        _this.playBtn_audio = null;
        _this.isDemoGame = false;
        _this.introBG = null;
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        _this.totalLevels = 0;
        _this.BGM_audio = null;
        _this.volume = 0.1;
        _this.mainBg = null;
        _this.initialVO = null;
        return _this;
        // update (dt) {}
    }
    globalVariables_1 = globalVariables;
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
        var _this = this;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        this.scheduleOnce(function () {
            _this.StartGame();
        }, 2);
        if (this.jockeyName == "Podar") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("podar").active = true;
        }
        else if (this.jockeyName == "tlc") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("tlc").active = true;
        }
        else if (this.jockeyName == "supercub") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("supercub").active = true;
        }
        else if (this.jockeyName == "stallion") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("stallion").active = true;
        }
        else if (this.jockeyName == "bag" || this.jockeyName == "cryon") {
            this.node.getChildByName("intro").getChildByName("bg").getChildByName("jaipuria").active = true;
        }
    };
    globalVariables.prototype.removeExtension = function (imageName) {
        // Remove .png extension
        return imageName.replace(/\.png$/g, '');
    };
    globalVariables.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, '');
    };
    globalVariables.prototype.updateJSONdata = function () {
        var _this = this;
        this.node.getChildByName("base").opacity = 0;
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
            var levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;
            // Assign question data to the variable
            this.questions = jsonData.questionData;
            // console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node.getChildByName("intro").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            cc.loader.load(jsonData.additionalData.initialVOName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.initialVO = audioClip;
            });
            cc.loader.load(jsonData.additionalData.introBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.node.getChildByName("intro").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                _this.introBG = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.mainBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.mainBg = spriteFrame;
                cc.find("Canvas").getChildByName("bg").children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }
        else {
            cc.loader.loadRes('game_data', cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                var levelCount = jsonData.additionalData.totalLevel;
                _this.totalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                // Assign question data to the variable
                _this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.TitleImageName), function (spriteFrame) {
                    _this.node.getChildByName("intro").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    _this.node.getChildByName("intro").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    _this.introBG = spriteFrame;
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.bgmMusicName), function (AudioClip) {
                    _this.BGM_audio = AudioClip;
                    var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                    cc.audioEngine.setVolume(id, _this.volume);
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.initialVOName), function (AudioClip) {
                    _this.initialVO = AudioClip;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.mainBgName), function (spriteFrame) {
                    _this.mainBg = spriteFrame;
                    cc.find("Canvas").getChildByName("bg").children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.questions.forEach(function (question) {
                    question.questionImageName = _this.removeExtension(question.questionImageName);
                    question.pictureImageName = _this.removeExtension(question.pictureImageName);
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
            });
        }
    };
    globalVariables.prototype.StartGame = function () {
        this.node.getChildByName("intro").active = false;
        this.node.getChildByName("base").opacity = 255;
        GamePlay_1.default.Instance.StartGame();
    };
    globalVariables.prototype.OnPlayBtn = function (_event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        this.StartGame();
    };
    globalVariables.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    globalVariables.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    var globalVariables_1;
    globalVariables.instance = null;
    __decorate([
        property(cc.Node)
    ], globalVariables.prototype, "jockey", void 0);
    __decorate([
        property(cc.AudioClip)
    ], globalVariables.prototype, "playBtn_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], globalVariables.prototype, "initialVO", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcZ2xvYmFsVmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQTJCckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFxT0M7UUFsT0csWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsYUFBTyxHQUFtQixJQUFJLENBQUM7UUFFL0Isb0NBQW9DO1FBQzVCLG9CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQ3BDLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVMsR0FBbUIsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7O1FBOE0vQixpQkFBaUI7SUFDckIsQ0FBQzt3QkFyT29CLGVBQWU7SUEwQmhDLGdDQUFNLEdBQU47UUFDSSxpQkFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksT0FBTyxpQkFBZSxDQUFDLFFBQVEsQ0FBQTtRQUNuQyxDQUFDOzs7T0FBQTtJQUVELCtCQUFLLEdBQUw7UUFBQSxpQkEyQkM7UUExQkcsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFD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R0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBMU1jLHdCQUFRLEdBQW9CLElBQUksQ0FBQztJQXJCaEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBEQUNZO0lBZ0JuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNRO0lBdEJkLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FxT25DO0lBQUQsc0JBQUM7Q0FyT0QsQUFxT0MsQ0FyTzRDLEVBQUUsQ0FBQyxTQUFTLEdBcU94RDtrQkFyT29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXkvR2FtZVBsYXlcIjtcclxuXHJcbmludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XHJcbiAgICBHYW1lSUQ6IHN0cmluZztcclxuICAgIHRvdGFsTGV2ZWw6IHN0cmluZztcclxuICAgIFRpdGxlSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBpbnRyb0JnTmFtZTogc3RyaW5nO1xyXG4gICAgYmdtTXVzaWNOYW1lOiBzdHJpbmc7XHJcbiAgICBpbml0aWFsVk9OYW1lOiBzdHJpbmc7XHJcbiAgICBtYWluQmdOYW1lOiBzdHJpbmc7XHJcbiAgICBKb2NrZXlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkRhdGEge1xyXG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbkltYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgcXVlc3Rpb25BdWRpb05hbWU6IHN0cmluZztcclxuICAgIHNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvOiBib29sZWFuO1xyXG4gICAgcGljdHVyZUltYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgbmVlZE1vcmVUb29sczogYm9vbGVhbjtcclxuICAgIGNvcnJlY3RBdWRpb05hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gICAgYWRkaXRpb25hbERhdGE6IEFkZGl0aW9uYWxEYXRhO1xyXG4gICAgcXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2xvYmFsVmFyaWFibGVzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGpvY2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBsYXlCdG5fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgaXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGludHJvQkc6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIHRvdGFsTGV2ZWxzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSB0aXRsZUltYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGpvY2tleU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBxdWVzdGlvbnM6IFF1ZXN0aW9uRGF0YVtdID0gW107XHJcblxyXG4gICAgdG90YWxMZXZlbHM6IG51bWJlciA9IDA7XHJcbiAgICBCR01fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICB2b2x1bWU6IG51bWJlciA9IDAuMTtcclxuICAgIG1haW5CZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGluaXRpYWxWTzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogZ2xvYmFsVmFyaWFibGVzID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWxWYXJpYWJsZXMuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xyXG4gICAgICAgIHZhciBkZW1vID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpc2RlbW9cIik7XHJcbiAgICAgICAgaWYgKGRlbW8gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RlbW9HYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdCBpcyBhIGRlbW8gZ2FtZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5TdGFydEdhbWUoKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgICAgICBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbnRyb1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicG9kYXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRsY1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdXBlcmN1YlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFsbGlvblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCB0aGlzLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJqYWlwdXJpYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFeHRlbnNpb24oaW1hZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgICAgIHJldHVybiBpbWFnZU5hbWUucmVwbGFjZSgvXFwucG5nJC9nLCAnJyk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIC5wbmcgZXh0ZW5zaW9uXHJcbiAgICAgICAgcmV0dXJuIGF1ZGlvTmFtZS5yZXBsYWNlKC9cXC5tcDMkL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVKU09OZGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MubG9hZGVyLmxvYWQoXCJodHRwczovL3MzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZ3YyLXByb2QtaW1hZ2VzLmNyZWF0aXZlZ2FsaWxlby5jb20vSHlicmlkTFpBc3NldHMvQlROLWJnLW9yYW5nZS5wbmdcIiwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0sIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgJ2pzb24nIHBhcmFtZXRlciB2YWx1ZSBmcm9tIHRoZSBVUkxcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlZEpzb24gPSB1cmxQYXJhbXMuZ2V0KCdqc29uJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWNvZGUgdGhlIFVSTC1lbmNvZGVkIEpTT04gZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkSnNvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkSnNvbik7XHJcblxyXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkZWNvZGVkSnNvblN0cmluZyk7XHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXHJcbiAgICAgICAgICAgIGxldCBsZXZlbENvdW50ID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEudG90YWxMZXZlbDtcclxuICAgICAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuam9ja2V5TmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkpvY2tleU5hbWU7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkJHTSBtdXNpYyBuYW1lID0gXCIsIGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh0aGlzLnRpdGxlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuQkdNX2F1ZGlvID0gYXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW5pdGlhbFZPTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsVk8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5pbnRyb0JnTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZV9kYXRhJywgY2MuSnNvbkFzc2V0LCAoZXJyLCBqc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YTogTXlKU09ORGF0YSA9IGpzb25Bc3NldC5qc29uIGFzIE15SlNPTkRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgICAgIGxldCBsZXZlbENvdW50ID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEudG90YWxMZXZlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuam9ja2V5TmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkpvY2tleU5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudGl0bGVJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbih0aGlzLnRpdGxlSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lKSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lKSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW50cm9cIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAodGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW5pdGlhbFZPTmFtZSksIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxWTyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSksIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnBpY3R1cmVJbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihxdWVzdGlvbi5waWN0dXJlSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImludHJvXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBHYW1lUGxheS5JbnN0YW5jZS5TdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBPblBsYXlCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlCdG5fYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLlN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImltYWdlcy9cIiArIGltYWdlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZEF1ZGlvQ2xpcChhdWRpb05hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhdWRpb3MvXCIgKyBhdWRpb05hbWUsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/LevelSelection/LevelSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c423iHn9JGn5NIhCMbGh9d', 'LevelSelection');
// Game/Painting_template/Script/LevelSelection/LevelSelection.ts

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
var CommonFun_1 = require("../Common/CommonFun");
var Constant_1 = require("../Common/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelSelection = /** @class */ (function (_super) {
    __extends(LevelSelection, _super);
    function LevelSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lvlArray = [];
        _this.clickAud = null;
        _this.DrawingDataArray = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LevelSelection.prototype.start = function () {
        var _this = this;
        this.addDrawing();
        this.scheduleOnce(function () {
            _this.PlayEffects();
        }, 1);
        this.schedule(function () {
            _this.PlayEffects();
        }, 7);
    };
    // update (dt) {}
    LevelSelection.prototype.addDrawing = function () {
        var _loop_1 = function (i) {
            var currentDrawing = cc.instantiate(this_1.DrawingDataArray[i]);
            this_1.lvlArray[i].addChild(currentDrawing);
            currentDrawing.setPosition(new cc.Vec2(0, 0));
            var currentDrawingeClassRef = CommonFun_1.default.instance.getDrawingTableClassRef(currentDrawing);
            currentDrawingeClassRef.initialiseRef(this_1);
            setTimeout(function () {
                var data = Constant_1.Constant.getLevelData(i);
                currentDrawingeClassRef.drawData(data);
            }, 10);
            currentDrawing.setScale(0.2);
        };
        var this_1 = this;
        for (var i = 0; i < this.lvlArray.length; i++) {
            _loop_1(i);
        }
    };
    LevelSelection.prototype.onLvlClicked = function (ref, tag) {
        cc.audioEngine.playEffect(this.clickAud, false);
        CommonFun_1.default.instance.currentLvl = parseInt(tag);
        console.log("levelStarted--" + (CommonFun_1.default.instance.currentLvl + 1));
        // console.log("current level = ", CommonFun.instance.currentLvl);
        cc.director.loadScene("GamePlay");
    };
    LevelSelection.prototype.PlayEffects = function () {
        // console.log("islogging");
        for (var i = 0; i < this.lvlArray.length; i++) {
            var delay = this.getRandomNumber(3, 9);
            delay *= 0.1;
            cc.tween(this.lvlArray[i]).to(delay, { scale: 1.2 }, { easing: "backInOut" })
                .to(delay, { scale: 1 }, { easing: "backInOut" }).start();
        }
    };
    LevelSelection.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    LevelSelection.prototype.OnBackButton = function () {
        console.log("gameEnded--true");
        console.log("gameExit--true");
    };
    __decorate([
        property(cc.Node)
    ], LevelSelection.prototype, "lvlArray", void 0);
    __decorate([
        property(cc.AudioClip)
    ], LevelSelection.prototype, "clickAud", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelSelection.prototype, "DrawingDataArray", void 0);
    LevelSelection = __decorate([
        ccclass
    ], LevelSelection);
    return LevelSelection;
}(cc.Component));
exports.default = LevelSelection;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcTGV2ZWxTZWxlY3Rpb25cXExldmVsU2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlEQUE0QztBQUM1QywrQ0FBOEM7QUFJeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE4RUM7UUEzRUcsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLHNCQUFnQixHQUFnQixFQUFFLENBQUM7O0lBc0V2QyxDQUFDO0lBcEVHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsOEJBQUssR0FBTDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLG1DQUFVLEdBQVY7Z0NBRWEsQ0FBQztZQUNOLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELE9BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMs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QUFDOzREQUNlO0lBUmxCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E4RWxDO0lBQUQscUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RTJDLEVBQUUsQ0FBQyxTQUFTLEdBOEV2RDtrQkE5RW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBQZXJzaXN0ZW50U2Nyb2xsIGZyb20gXCIuLi9HYW1lUGxheS9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFNlbGVjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsdmxBcnJheSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGNsaWNrQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBEcmF3aW5nRGF0YUFycmF5OiBjYy5QcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWRkRHJhd2luZygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5QbGF5RWZmZWN0cygpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlBsYXlFZmZlY3RzKCk7XHJcbiAgICAgICAgfSwgNyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIGFkZERyYXdpbmcoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sdmxBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERyYXdpbmcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkRyYXdpbmdEYXRhQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLmx2bEFycmF5W2ldLmFkZENoaWxkKGN1cnJlbnREcmF3aW5nKTtcclxuICAgICAgICAgICAgY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoMCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERyYXdpbmdlQ2xhc3NSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RHJhd2luZ1RhYmxlQ2xhc3NSZWYoY3VycmVudERyYXdpbmcpO1xyXG4gICAgICAgICAgICBjdXJyZW50RHJhd2luZ2VDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gQ29uc3RhbnQuZ2V0TGV2ZWxEYXRhKGkpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudERyYXdpbmdlQ2xhc3NSZWYuZHJhd0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgY3VycmVudERyYXdpbmcuc2V0U2NhbGUoMC4yKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkx2bENsaWNrZWQocmVmLCB0YWcpIHtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwgPSBwYXJzZUludCh0YWcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIChDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCArIDEpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWwgPSBcIiwgQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lUGxheVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFBsYXlFZmZlY3RzKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXNsb2dnaW5nXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sdmxBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSB0aGlzLmdldFJhbmRvbU51bWJlcigzLCA5KTtcclxuICAgICAgICAgICAgZGVsYXkgKj0gMC4xO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmx2bEFycmF5W2ldKS50byhkZWxheSwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oZGVsYXksIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE9uQmFja0J1dHRvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFeGl0LS10cnVlXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        _this.volume = 1;
        _this.NextSceneName = "1";
        _this.TotalLevels = 7;
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [3, 5, 7];
        _this.isMusicOn = true;
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
        if (premium != null) {
            this.premiumLevel = parseInt(premium);
        }
        if (level != null) {
            this.NextSceneName = level;
        }
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
        cc.director.preloadScene(this.NextSceneName);
        this.scheduleOnce(function () {
            cc.director.loadScene(_this.NextSceneName);
        }, 2);
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
    startGame.prototype.OnBack = function () {
        console.log("gameExit--true");
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
        property(Number)
    ], startGame.prototype, "TotalLevels", void 0);
    __decorate([
        property(cc.Boolean)
    ], startGame.prototype, "isAgeParameterNeeded", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "LevelAgeParameters", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isPremiumGame", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isMobileNumberPriority", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "premiumLevel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF1TEM7UUFwTEcsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFHL0IsNEJBQXNCLEdBQVksS0FBSyxDQUFDO1FBRXhDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLG9DQUFvQztRQUVwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1Qiw4QkFBOEI7UUFFOUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUlWLGNBQVEsR0FBWSxLQUFLLENBQUM7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QUMsT0FBTyxDQUFDOzJEQUNPO0lBRTVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt5REFDd0I7SUFTekM7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO29EQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs2REFDc0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO21EQUNRO0lBM0JSLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1TDdCO0lBQUQsZ0JBQUM7Q0F2TEQsQUF1TEMsQ0F2THNDLEVBQUUsQ0FBQyxTQUFTLEdBdUxsRDtrQkF2TG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgQkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHZvbHVtZTogbnVtYmVyID0gMTtcclxuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgICBOZXh0U2NlbmVOYW1lOiBzdHJpbmcgPSBcIjFcIjtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBUb3RhbExldmVsczogbnVtYmVyID0gNztcclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgaXNBZ2VQYXJhbWV0ZXJOZWVkZWQgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIExldmVsQWdlUGFyYW1ldGVyczogbnVtYmVyW10gPSBbMywgNSwgN107XHJcbiAgICBpc011c2ljT246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGxldmVsVHlwZTogc3RyaW5nID0gXCIxXCI7XHJcbiAgICBjdXJyZW50TGV2ZWw6IHN0cmluZyA9IFwiMVwiO1xyXG4gICAgaGFzQWNjZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBoYXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG1vYmlsZU51bWJlcjogc3RyaW5nID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgaXNQcmVtaXVtR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgaXNNb2JpbGVOdW1iZXJQcmlvcml0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIHByZW1pdW1MZXZlbDogbnVtYmVyID0gMztcclxuICAgIC8vIG1vYk51bUF2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGZpcnN0Q2xpY2s6IG51bWJlciA9IDE7XHJcbiAgICBjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICB0aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgYWN0aXZhdGVIaW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gc3RhcnRHYW1lLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1UaXRsZVwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvY2tleU5vZGUgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcclxuICAgICAgICB2YXIgaXNBdWRpbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic291bmRTZXR0aW5nXCIpO1xyXG4gICAgICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgICAgICB2YXIgYWNjZXNzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhY2Nlc3NcIik7XHJcbiAgICAgICAgdmFyIG1vYmlsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibW9iaWxlXCIpO1xyXG4gICAgICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcbiAgICAgICAgdmFyIHByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInByZW1pdW1cIik7XHJcblxyXG4gICAgICAgIGlmIChwcmVtaXVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVtaXVtTGV2ZWwgPSBwYXJzZUludChwcmVtaXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldmVsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gbGV2ZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9iaWxlID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY2Nlc3MgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1ByZW1pdW1HYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgaWYgKGlzQXVkaW8gPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWdlVmFsdWU6IG51bWJlciA9IHBhcnNlSW50KGFnZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQWdlUGFyYW1ldGVyTmVlZGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSAmJiBhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1s0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLk9uVGltZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25CYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25UaW1lcigpIHtcclxuICAgIC8vICAgICBsZXQgZGVsYXkgPSAxO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTk5OTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgIT0gXCJnYW1lRW5kXCIpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyKys7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgIC8vICAgICAgICAgZGVsYXkgKz0gMTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/audioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e168rfJYxHOoAcjwhWWx5T', 'audioManager');
// Game/Painting_template/Script/Common/audioManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var audioManager = /** @class */ (function () {
    function audioManager() {
        this.soundVolume = 1;
    }
    audioManager_1 = audioManager;
    Object.defineProperty(audioManager, "instance", {
        get: function () {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new audioManager_1();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // init AudioManager in GameRoot.
    audioManager.prototype.init = function () {
        var _this = this;
        this.checkSound();
        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.disableSound();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            _this.checkSound();
        });
    };
    audioManager.prototype.playMusic = function (loop) {
        if (!cc.audioEngine.isMusicPlaying()) {
            var path = 'audio/music/';
            cc.resources.load(path + Constant_1.Constant.AUDIO_SOUND.BACKGROUND, cc.AudioClip, function (err, clip) {
                cc.audioEngine.playMusic(clip, true);
            });
            this.openMusic();
        }
    };
    /**
     * 播放音效
     * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
     */
    audioManager.prototype.playSound = function (name) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, false);
        });
    };
    audioManager.prototype.playLoopSound = function (name) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, true);
        });
    };
    audioManager.prototype.stopLoopSound = function () {
        cc.audioEngine.stopAllEffects();
    };
    audioManager.prototype.loadAuido = function (name) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            //
        });
    };
    audioManager.prototype.getAudioLength = function (name, callbacks) {
        var path = 'audio/sound/';
        cc.resources.load(path + name, cc.AudioClip, function (err, clip) {
            callbacks(clip.duration);
        });
    };
    audioManager.prototype.setMusicVolume = function (flag) {
        cc.audioEngine.setMusicVolume(flag);
    };
    audioManager.prototype.setSoundVolume = function (flag) {
        cc.audioEngine.setEffectsVolume(flag);
    };
    audioManager.prototype.openMusic = function () {
        this.setMusicVolume(0.1);
    };
    audioManager.prototype.closeMusic = function () {
        this.setMusicVolume(0);
    };
    audioManager.prototype.openSound = function () {
        this.setSoundVolume(1);
    };
    audioManager.prototype.closeSound = function () {
        this.setSoundVolume(0);
    };
    audioManager.prototype.checkSound = function () {
        if (Constant_1.Constant.CheckSoundEnabled())
            this.enableSound();
        else
            this.disableSound();
    };
    audioManager.prototype.toggleGameSound = function () {
        if (Constant_1.Constant.ToggleSound())
            this.enableSound();
        else
            this.disableSound();
        return Constant_1.Constant.CheckSoundEnabled();
    };
    audioManager.prototype.enableSound = function () {
        this.openMusic();
        this.openSound();
    };
    audioManager.prototype.disableSound = function () {
        this.closeMusic();
        //this.closeSound();
    };
    var audioManager_1;
    audioManager = audioManager_1 = __decorate([
        ccclass
    ], audioManager);
    return audioManager;
}());
exports.default = audioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxhdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7OztBQUVsRix1Q0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtRQWFJLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBK0c1QixDQUFDO3FCQTVIb0IsWUFBWTtJQUk3QixzQkFBVyx3QkFBUTthQUFuQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGNBQVksRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlELGlDQUFpQztJQUNqQywyQkFBSSxHQUFKO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUFhO1FBQ25CLElBQUksQ0FB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aUJBQWlCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztZQUVuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLG1CQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFFbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXhCLE9BQU8sbUJBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsbUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixvQkFBb0I7SUFDeEIsQ0FBQzs7SUEzSGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0SGhDO0lBQUQsbUJBQUM7Q0E1SEQsQUE0SEMsSUFBQTtrQkE1SG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGF1ZGlvTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBhdWRpb01hbmFnZXI7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgYXVkaW9NYW5hZ2VyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdW5kVm9sdW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIGluaXQgQXVkaW9NYW5hZ2VyIGluIEdhbWVSb290LlxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrU291bmQoKTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU291bmQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1NvdW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsYXlNdXNpYyhsb29wOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gJ2F1ZGlvL211c2ljLyc7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBDb25zdGFudC5BVURJT19TT1VORC5CQUNLR1JPVU5ELCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6Z+z5pWIXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSDpn7PmlYjlkI3np7Dlj6/pgJrov4djb25zdGFudHMuQVVESU9fU09VTkQg6I635Y+WXHJcbiAgICAgKi9cclxuICAgIHBsYXlTb3VuZChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdhdWRpby9zb3VuZC8nO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBuYW1lLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUxvb3BTb3VuZChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcGF0aCA9ICdhdWRpby9zb3VuZC8nO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggKyBuYW1lLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXAgOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0b3BMb29wU291bmQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgbG9hZEF1aWRvKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnYXVkaW8vc291bmQvJztcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoICsgbmFtZSwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwIDogY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEF1ZGlvTGVuZ3RoKG5hbWU6IHN0cmluZywgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSAnYXVkaW8vc291bmQvJztcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoICsgbmFtZSwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwIDogY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcyhjbGlwLmR1cmF0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0TXVzaWNWb2x1bWUoZmxhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoZmxhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U291bmRWb2x1bWUoZmxhZzogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShmbGFnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSgwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3VuZFZvbHVtZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U291bmRWb2x1bWUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTb3VuZCgpIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnQuQ2hlY2tTb3VuZEVuYWJsZWQoKSlcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVTb3VuZCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlU291bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVHYW1lU291bmQoKSB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50LlRvZ2dsZVNvdW5kKCkpXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU291bmQoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVNvdW5kKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBDb25zdGFudC5DaGVja1NvdW5kRW5hYmxlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMub3Blbk11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuU291bmQoKTtcclxuICAgIH1cclxuICAgIGRpc2FibGVTb3VuZCgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTXVzaWMoKTtcclxuICAgICAgICAvL3RoaXMuY2xvc2VTb3VuZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/scratch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbb86E7QbtLxqVXFMHsAE7u', 'scratch');
// Game/Painting_template/Script/scratch.ts

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
var scratch = /** @class */ (function (_super) {
    __extends(scratch, _super);
    function scratch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myMask1 = null;
        _this.myMask2 = null;
        _this.MyMaterial = null;
        _this.MyMaterial1 = null;
        _this.size = 32;
        _this.usedBtn = 1;
        _this.currentMask = null;
        return _this;
    }
    scratch.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    };
    scratch.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype.onBtnClicked = function () {
        this.usedBtn *= -1;
        var mask = null;
        if (this.usedBtn == 1)
            mask = cc.instantiate(this.myMask1);
        if (this.usedBtn == -1)
            mask = cc.instantiate(this.myMask2);
        this.node.getChildByName("mask").addChild(mask);
        this.currentMask = mask.getComponent(cc.Mask);
    };
    scratch.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype._addCircle = function (point) {
        // var stencil = this.myMask._graphics;
        // stencil.circle(point.x, point.y, this.size);
        // stencil.fill();
        var stencil1 = this.currentMask._graphics;
        stencil1.circle(point.x, point.y, this.size);
        stencil1.fill();
        return;
        if (this.usedBtn == 1) {
            var stencil1 = this.myMask1._graphics;
            stencil1.circle(point.x, point.y, this.size);
            stencil1.fillColor = cc.Color.GREEN;
            stencil1.fill();
            // var stencil2 = this.myMask2._graphics;
            // stencil2.circle(point.x, point.y, 20);
            // stencil2.setMaterial(0,this.MyMaterial);
            // stencil2.fillColor.a = 0
            // stencil2.srcBlendFactor = cc.BlendFunc.BlendFactor.ZERO;
            // stencil2.dstBlendFactor = cc.BlendFunc.BlendFactor.ONE_MINUS_SRC_ALPHA;
            // stencil2.fill();
        }
        else {
            // var stencil1 = this.myMask1._graphics;
            // stencil1.circle(point.x, point.y, this.size);
            // stencil1.close();
            var stencil2 = this.myMask2._graphics;
            stencil2.circle(point.x, point.y, this.size);
            // stencil2.setMaterial(0,this.MyMaterial1);
            // stencil2.fillColor.a = 255
            stencil2.fill();
        }
    };
    __decorate([
        property({
            type: cc.Prefab
        })
    ], scratch.prototype, "myMask1", void 0);
    __decorate([
        property({
            type: cc.Prefab
        })
    ], scratch.prototype, "myMask2", void 0);
    __decorate([
        property({
            type: cc.Material
        })
    ], scratch.prototype, "MyMaterial", void 0);
    __decorate([
        property({
            type: cc.Material
        })
    ], scratch.prototype, "MyMaterial1", void 0);
    __decorate([
        property({
            displayName: "刮卡路径大小",
            min: 32
        })
    ], scratch.prototype, "size", void 0);
    scratch = __decorate([
        ccclass
    ], scratch);
    return scratch;
}(cc.Component));
exports.default = scratch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcc2NyYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWlIQztRQTVHRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBSzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFNMUIsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBSS9CLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQU1oQyxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUFvRnZCLENBQUM7SUFsRkcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCwrQkFBYSxHQUFiLFVBQWUsS0FBSztRQUNoQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLEtBQUssR0FBRyxJ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TCxDQUFDO0lBM0dEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7NENBQ3dCO0lBSzFCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7NENBQ3dCO0lBTTFCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRO1NBQ3BCLENBQUM7K0NBQzZCO0lBSS9CO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRO1NBQ3BCLENBQUM7Z0RBQzhCO0lBTWhDO1FBSkMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLFFBQVE7WUFDckIsR0FBRyxFQUFFLEVBQUU7U0FDVixDQUFDO3lDQUNnQjtJQTFCRCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUgzQjtJQUFELGNBQUM7Q0FqSEQsQUFpSEMsQ0FqSG9DLEVBQUUsQ0FBQyxTQUFTLEdBaUhoRDtrQkFqSG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNjcmF0Y2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICB9KVxyXG4gICAgbXlNYXNrMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgIH0pXHJcbiAgICBteU1hc2syOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5NYXRlcmlhbFxyXG4gICAgfSlcclxuICAgIE15TWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTWF0ZXJpYWxcclxuICAgIH0pXHJcbiAgICBNeU1hdGVyaWFsMTogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5Yiu5Y2h6Lev5b6E5aSn5bCPXCIsXHJcbiAgICAgICAgbWluOiAzMlxyXG4gICAgfSlcclxuICAgIHNpemU6IG51bWJlciA9IDMyO1xyXG5cclxuICAgIHVzZWRCdG4gPSAxO1xyXG4gICAgY3VycmVudE1hc2sgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoQmVnaW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoQmVnaW4gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaE1vdmVkIChldmVudCkge1xyXG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG4gICAgICAgIHRoaXMuX2FkZENpcmNsZShwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKCl7XHJcbiAgICAgICAgdGhpcy51c2VkQnRuICo9IC0xO1xyXG4gICAgICAgIGxldCBtYXNrID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLnVzZWRCdG4gPT0gMSlcclxuICAgICAgICAgICAgbWFzayA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXlNYXNrMSk7XHJcbiAgICAgICAgaWYodGhpcy51c2VkQnRuID09IC0xKVxyXG4gICAgICAgICAgICBtYXNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5teU1hc2syKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5hZGRDaGlsZChtYXNrKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gbWFzay5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hFbmQgKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfYWRkQ2lyY2xlIChwb2ludCkge1xyXG4gICAgICAgIC8vIHZhciBzdGVuY2lsID0gdGhpcy5teU1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgIC8vIHN0ZW5jaWwuY2lyY2xlKHBvaW50LngsIHBvaW50LnksIHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgLy8gc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzdGVuY2lsMSA9IHRoaXMuY3VycmVudE1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgIHN0ZW5jaWwxLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xyXG4gICAgICAgIHN0ZW5jaWwxLmZpbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLnVzZWRCdG4gPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGVuY2lsMSA9IHRoaXMubXlNYXNrMS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgIHN0ZW5jaWwxLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xyXG4gICAgICAgICAgICBzdGVuY2lsMS5maWxsQ29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICAgICAgc3RlbmNpbDEuZmlsbCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdmFyIHN0ZW5jaWwyID0gdGhpcy5teU1hc2syLl9ncmFwaGljcztcclxuICAgICAgICAgICAgLy8gc3RlbmNpbDIuY2lyY2xlKHBvaW50LngsIHBvaW50LnksIDIwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0ZW5jaWwyLnNldE1hdGVyaWFsKDAsdGhpcy5NeU1hdGVyaWFsKTtcclxuICAgICAgICAgICAgLy8gc3RlbmNpbDIuZmlsbENvbG9yLmEgPSAwXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5zcmNCbGVuZEZhY3RvciA9IGNjLkJsZW5kRnVuYy5CbGVuZEZhY3Rvci5aRVJPO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5kc3RCbGVuZEZhY3RvciA9IGNjLkJsZW5kRnVuYy5CbGVuZEZhY3Rvci5PTkVfTUlOVVNfU1JDX0FMUEhBO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RlbmNpbDIuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB2YXIgc3RlbmNpbDEgPSB0aGlzLm15TWFzazEuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMS5jaXJjbGUocG9pbnQueCwgcG9pbnQueSwgdGhpcy5zaXplKTtcclxuICAgICAgICAgICAgLy8gc3RlbmNpbDEuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGVuY2lsMiA9IHRoaXMubXlNYXNrMi5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgIHN0ZW5jaWwyLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5zZXRNYXRlcmlhbCgwLHRoaXMuTXlNYXRlcmlhbDEpO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5maWxsQ29sb3IuYSA9IDI1NVxyXG4gICAgICAgICAgICBzdGVuY2lsMi5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5011exdQO5CqYRjNCOxwXhq', 'Constant');
// Game/Painting_template/Script/Common/Constant.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Constant = /** @class */ (function () {
    function Constant() {
    }
    Constant_1 = Constant;
    Constant.getCenterVal = function (min, max, first, last, current) {
        return (((current - first) / (last - first)) * (max - min)) + min;
    };
    Constant.getNewModifiedSpeed = function (botScale, refe) {
        return (((botScale - refe.initialSize) / (refe.maxSize - refe.initialSize)) * (refe.endspeed - refe.startSpeed)) + refe.startSpeed;
    };
    Constant.circlerandPoint = function (x, y, radius) {
        var ang = Math.random() * 2 * Math.PI, hyp = Math.sqrt(Math.random()) * radius, adj = Math.cos(ang) * hyp, opp = Math.sin(ang) * hyp;
        return new cc.Vec2(x + adj, y + opp);
    };
    Constant.getFrame = function (path, frameLocation, currentLength, totalLength, shouldPlayAnim, callbacks) {
        cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.warn("load Sprite frame Failed : ", err);
                callbacks(null);
            }
            try {
                callbacks(spriteFrame, frameLocation, currentLength, totalLength, shouldPlayAnim);
            }
            catch (error) {
                callbacks(null);
            }
        });
    };
    Constant.updateSpriteFrame = function (img, path) {
        cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.warn("load Sprite frame Failed : ", err);
                return;
            }
            try {
                if (img != null)
                    img.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }
            catch (error) {
                console.log(error, " error");
            }
        });
    };
    //sound
    Constant.CheckSoundEnabled = function () {
        if (window.localStorage.getItem("soundEnabled") == null || window.localStorage.getItem("soundEnabled") == undefined)
            window.localStorage.setItem("soundEnabled", "1");
        return parseInt(window.localStorage.getItem("soundEnabled"));
    };
    Constant.ToggleSound = function () {
        if (parseInt(window.localStorage.getItem("soundEnabled")))
            window.localStorage.setItem("soundEnabled", "0");
        else
            window.localStorage.setItem("soundEnabled", "1");
        return this.CheckSoundEnabled();
    };
    Constant.getLevelData = function (lvlNo) {
        var lvl = lvlNo + "newdata";
        if (window.localStorage.getItem(lvl) == null || window.localStorage.getItem(lvl) == undefined)
            window.localStorage.setItem(lvl, null);
        // let val = parseInt(window.localStorage.getItem(lvl));
        // let dataArray = [];
        // if(val >= 0)
        // {
        //     for (let i = 0; i <= val; i++) {
        //         let lvlData = lvlNo+"data"+i;
        //         let splitVal = JSON.parse(window.localStorage.getItem(lvlData));
        //         for (let j = 0; j < splitVal.length; j++) {
        //             dataArray.push(splitVal[j]);
        //         }
        //     }
        // }
        //new
        var dataArray = JSON.parse(window.localStorage.getItem(lvl));
        //new
        return dataArray;
    };
    Constant.SaveLevelData = function (lvlNo, data) {
        // let totalLength = data.length;
        // let splitData1 = Math.floor(totalLength/5);
        // let k = 0;
        // for (let i = 0; i <= splitData1; i++) {
        //     let newData = [];
        //     for (let j = 0; j < 5; j++) {
        //         if(data[k] == undefined)
        //             break;
        //         newData.push(data[k]);
        //         k++;
        //     }
        //     let lvlData = lvlNo+"data"+i;
        //     this.setInLocalStorage(lvlData,newData)
        // }
        // let lvl = lvlNo+"data";
        // this.setInLocalStorage(lvl,splitData1)  
        //new
        for (var i = 0; i < data.length; i++) {
            data[i].splice(0, data[i].length - 1);
        }
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].length; j++) {
                delete data[i][j].child;
            }
        }
        var lvl = lvlNo + "newdata";
        this.setInLocalStorage(lvl, data);
        //new
    };
    Constant.setInLocalStorage = function (keyName, value) {
        try {
            localStorage.setItem(keyName, JSON.stringify(value));
        }
        catch (error) {
            console.log('Error in local storage', error);
            this.setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)));
        }
    };
    var Constant_1;
    Constant.DEBUG_ENABLED = true;
    Constant.GAMESTATE = {
        MAINMENU: 0,
        GAMEPLAY: 1,
        GAMEOVER: 2,
        LEVELSELECTION: 2,
    };
    Constant.currentscene = null;
    Constant.CURRENTSTATE = Constant_1.GAMESTATE.MAINMENU;
    Constant.GAMEOVER = {
        ISCORRECTANSWER: 0,
        ISWRONGANSWER: 1,
        ISDEATHBYHEALTHRUNOUT: 2,
        ISTIMERUNOUT: 3,
    };
    Constant.ToolsTag = {
        BRUSH: 0,
        PENCIL: 1,
        BRUSH2: 2,
        SPRAY: 3,
        PAINT: 4,
        SPARKEL: 5,
        PATTERN: 6,
        ERASER: 7,
    };
    Constant.ToolsColorIndex = {
        0: -1,
        1: -1,
        2: -1,
        3: -1,
        4: -1,
        5: -1,
        6: -1,
        7: -1,
    };
    Constant.ToolsTagSize = {
        0: {
            MIN: 20,
            MAX: 50,
        },
        1: {
            MIN: 2,
            MAX: 20,
        },
        2: {
            MIN: 20,
            MAX: 30,
        },
        3: {
            MIN: 1,
            MAX: 10,
        },
        4: {
            MIN: 2000,
            MAX: 10,
        },
        5: {
            MIN: 20,
            MAX: 50,
        },
        6: {
            MIN: 20,
            MAX: 30,
        },
        7: {
            MIN: 20,
            MAX: 30,
        },
    };
    Constant.CurrentToolsTagSize = {
        0: Constant_1.ToolsTagSize[0].MIN,
        1: Constant_1.ToolsTagSize[1].MIN,
        2: Constant_1.ToolsTagSize[2].MIN,
        3: Constant_1.ToolsTagSize[3].MIN,
        4: Constant_1.ToolsTagSize[4].MIN,
        5: Constant_1.ToolsTagSize[5].MIN,
        6: Constant_1.ToolsTagSize[6].MIN,
        7: Constant_1.ToolsTagSize[7].MIN,
    };
    Constant.COLORTAG = {
        COLOR: 0,
        PATTERN: 1,
        SPARKLE: 2,
    };
    Constant.RAJU_ANIMATION = {
        fly: "fly",
        celebration: "celebration",
        idle: "idle",
        talking: "talking",
        try_again: "try_again",
        well_done: "well_done",
    };
    Constant.AUDIO_SOUND = {
        BACKGROUND: 'bgm',
        // Dialogue : "Dialogue",
        Dialogue: {
            0: "letter/L1-",
        },
        correct: {
            0: "correct/L1 Correct",
        },
        wrong: {
            0: {
                0: "wrong/L1 Negative A",
                1: "wrong/L1 Negative B"
            },
        },
        tracing: "Tracing Pull",
        EndPoint: "EndPoint",
        Shapereveal: "Shape reveal",
        Timer: "Timer",
        Yeahh: "Yeahh",
        Click: "Click",
        elementAppear: "elementAppear",
    };
    Constant.AUDIO_FRAME = {
        soundOn: 'Png/persistent/Sound on',
        soundOff: "Png/persistent/Sound off",
    };
    Constant.LOG_DATA = {
        //initial
        LOADING_100: "loading--100",
        LOADER_COMPLETE_TRUE: "loaderComplete--true",
        TITLE_SHOWED: "logEvent--showedScreen--Title",
        LEVEL_STARTED: "levelStarted--",
        FIRST_CLICK: "firstClick--",
        LEVEL_COMPLETE: "levelComplete--",
        LEVEL_FAILED: "levelFailed--",
        STARS_EARNED: "starsEarned--",
        LEVEL_CLICK: "levelClick--",
        CORRECT_ANSWER: "correctAnswer--",
        RESTARTED: "logEvent--replayClick--true",
        SOUND_TRUE: "soundSetting--true",
        SOUND_FALSE: "soundSetting--false",
        GAME_EXIT: "gameExit--true",
        //gameOver
        CONGRATULATION: "logEvent--showedScreen--Congratulations",
        GAME_ENDED_TRUE: "gameEnded--true",
    };
    Constant = Constant_1 = __decorate([
        ccclass
    ], Constant);
    return Constant;
}());
exports.Constant = Constant;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxDb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBd1NBLENBQUM7aUJBeFNZLFFBQVE7SUErRkgscUJBQVksR0FBMUIsVUFBMkIsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDckQsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0RSxDQUFDO0lBRWEsNEJBQW1CLEdBQWpDLFVBQWtDLFFBQVEsRUFBRSxJQUFJO1FBQzVDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkksQ0FBQztJQUVhLHdCQUFlLEdBQTdCLFVBQThCLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTTtRQUN0QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQ2pDLEdBQUcsR0FB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dDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBERUJVR19FTkFCTEVEID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdBTUVTVEFURSA9IHtcclxuICAgICAgICBNQUlOTUVOVTogMCxcclxuICAgICAgICBHQU1FUExBWTogMSxcclxuICAgICAgICBHQU1FT1ZFUjogMixcclxuICAgICAgICBMRVZFTFNFTEVDVElPTjogMixcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGN1cnJlbnRzY2VuZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIENVUlJFTlRTVEFURSA9IENvbnN0YW50LkdBTUVTVEFURS5NQUlOTUVOVTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdBTUVPVkVSID0ge1xyXG4gICAgICAgIElTQ09SUkVDVEFOU1dFUjogMCxcclxuICAgICAgICBJU1dST05HQU5TV0VSOiAxLFxyXG4gICAgICAgIElTREVBVEhCWUhFQUxUSFJVTk9VVDogMixcclxuICAgICAgICBJU1RJTUVSVU5PVVQ6IDMsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBUb29sc1RhZyA9IHtcclxuICAgICAgICBCUlVTSDogMCxcclxuICAgICAgICBQRU5DSUw6IDEsXHJcbiAgICAgICAgQlJVU0gyOiAyLFxyXG4gICAgICAgIFNQUkFZOiAzLFxyXG4gICAgICAgIFBBSU5UOiA0LFxyXG4gICAgICAgIFNQQVJLRUw6IDUsXHJcbiAgICAgICAgUEFUVEVSTjogNixcclxuICAgICAgICBFUkFTRVI6IDcsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBUb29sc0NvbG9ySW5kZXggPSB7XHJcbiAgICAgICAgMDogLTEsLy9CUlVTSCxcclxuICAgICAgICAxOiAtMSwvL1BFTkNJTCxcclxuICAgICAgICAyOiAtMSwvL0JSVVNIMixcclxuICAgICAgICAzOiAtMSwvL1NQUkFZLFxyXG4gICAgICAgIDQ6IC0xLC8vUEFJTlQsXHJcbiAgICAgICAgNTogLTEsLy9TUEFSQ0VMLFxyXG4gICAgICAgIDY6IC0xLC8vUEFUVEVSTixcclxuICAgICAgICA3OiAtMSwvL0VSQVNFUn0sXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBUb29sc1RhZ1NpemUgPSB7XHJcbiAgICAgICAgMDogey8vQlJVU0hcclxuICAgICAgICAgICAgTUlOOiAyMCxcclxuICAgICAgICAgICAgTUFYOiA1MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE6IHsvL1BFTkNJTFxyXG4gICAgICAgICAgICBNSU46IDIsXHJcbiAgICAgICAgICAgIE1BWDogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAyOiB7Ly9CUlVTSDJcclxuICAgICAgICAgICAgTUlOOiAyMCxcclxuICAgICAgICAgICAgTUFYOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDM6IHsvL1NQUkFZXHJcbiAgICAgICAgICAgIE1JTjogMSxcclxuICAgICAgICAgICAgTUFYOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQ6IHsvL1BBSU5UXHJcbiAgICAgICAgICAgIE1JTjogMjAwMCxcclxuICAgICAgICAgICAgTUFYOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU6IHsvL1NQQVJDRUxcclxuICAgICAgICAgICAgTUlOOiAyMCxcclxuICAgICAgICAgICAgTUFYOiA1MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDY6IHsvL1BBVFRFUk5cclxuICAgICAgICAgICAgTUlOOiAyMCxcclxuICAgICAgICAgICAgTUFYOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc6IHsvL0VSQVNFUlxyXG4gICAgICAgICAgICBNSU46IDIwLFxyXG4gICAgICAgICAgICBNQVg6IDMwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDdXJyZW50VG9vbHNUYWdTaXplID0ge1xyXG4gICAgICAgIDA6IENvbnN0YW50LlRvb2xzVGFnU2l6ZVswXS5NSU4sLy9CUlVTSFxyXG4gICAgICAgIDE6IENvbnN0YW50LlRvb2xzVGFnU2l6ZVsxXS5NSU4sLy9QRU5DSUxcclxuICAgICAgICAyOiBDb25zdGFudC5Ub29sc1RhZ1NpemVbMl0uTUlOLC8vQlJVU0gyXHJcbiAgICAgICAgMzogQ29uc3RhbnQuVG9vbHNUYWdTaXplWzNdLk1JTiwvL1NQUkFZXHJcbiAgICAgICAgNDogQ29uc3RhbnQuVG9vbHNUYWdTaXplWzRdLk1JTiwvL1BBSU5UXHJcbiAgICAgICAgNTogQ29uc3RhbnQuVG9vbHNUYWdTaXplWzVdLk1JTiwvL1NQQVJDRUxcclxuICAgICAgICA2OiBDb25zdGFudC5Ub29sc1RhZ1NpemVbNl0uTUlOLC8vUEFUVEVSTlxyXG4gICAgICAgIDc6IENvbnN0YW50LlRvb2xzVGFnU2l6ZVs3XS5NSU4sLy9FUkFTRVJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTE9SVEFHID0ge1xyXG4gICAgICAgIENPTE9SOiAwLFxyXG4gICAgICAgIFBBVFRFUk46IDEsXHJcbiAgICAgICAgU1BBUktMRTogMixcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENlbnRlclZhbChtaW4sIG1heCwgZmlyc3QsIGxhc3QsIGN1cnJlbnQpIHtcclxuICAgICAgICByZXR1cm4gKCgoY3VycmVudCAtIGZpcnN0KSAvIChsYXN0IC0gZmlyc3QpKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld01vZGlmaWVkU3BlZWQoYm90U2NhbGUsIHJlZmUpIHtcclxuICAgICAgICByZXR1cm4gKCgoYm90U2NhbGUgLSByZWZlLmluaXRpYWxTaXplKSAvIChyZWZlLm1heFNpemUgLSByZWZlLmluaXRpYWxTaXplKSkgKiAocmVmZS5lbmRzcGVlZCAtIHJlZmUuc3RhcnRTcGVlZCkpICsgcmVmZS5zdGFydFNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2lyY2xlcmFuZFBvaW50KHgsIHksIHJhZGl1cykge1xyXG4gICAgICAgIGxldCBhbmcgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAgIGh5cCA9IE1hdGguc3FydChNYXRoLnJhbmRvbSgpKSAqIHJhZGl1cyxcclxuICAgICAgICAgICAgYWRqID0gTWF0aC5jb3MoYW5nKSAqIGh5cCxcclxuICAgICAgICAgICAgb3BwID0gTWF0aC5zaW4oYW5nKSAqIGh5cFxyXG4gICAgICAgIHJldHVybiBuZXcgY2MuVmVjMih4ICsgYWRqLCB5ICsgb3BwKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUkFKVV9BTklNQVRJT04gPSB7XHJcbiAgICAgICAgZmx5OiBcImZseVwiLFxyXG4gICAgICAgIGNlbGVicmF0aW9uOiBcImNlbGVicmF0aW9uXCIsXHJcbiAgICAgICAgaWRsZTogXCJpZGxlXCIsXHJcbiAgICAgICAgdGFsa2luZzogXCJ0YWxraW5nXCIsXHJcbiAgICAgICAgdHJ5X2FnYWluOiBcInRyeV9hZ2FpblwiLFxyXG4gICAgICAgIHdlbGxfZG9uZTogXCJ3ZWxsX2RvbmVcIixcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RnJhbWUocGF0aCwgZnJhbWVMb2NhdGlvbiwgY3VycmVudExlbmd0aCwgdG90YWxMZW5ndGgsIHNob3VsZFBsYXlBbmltLCBjYWxsYmFja3MpIHtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibG9hZCBTcHJpdGUgZnJhbWUgRmFpbGVkIDogXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyhzcHJpdGVGcmFtZSwgZnJhbWVMb2NhdGlvbiwgY3VycmVudExlbmd0aCwgdG90YWxMZW5ndGgsIHNob3VsZFBsYXlBbmltKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlU3ByaXRlRnJhbWUoaW1nLCBwYXRoKSB7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxvYWQgU3ByaXRlIGZyYW1lIEZhaWxlZCA6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgXCIgZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NvdW5kXHJcbiAgICBwdWJsaWMgc3RhdGljIENoZWNrU291bmRFbmFibGVkKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZEVuYWJsZWRcIikgPT0gbnVsbCB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZEVuYWJsZWRcIikgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3VuZEVuYWJsZWRcIiwgXCIxXCIpXHJcblxyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZEVuYWJsZWRcIikpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFRvZ2dsZVNvdW5kKCkge1xyXG4gICAgICAgIGlmIChwYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZEVuYWJsZWRcIikpKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3VuZEVuYWJsZWRcIiwgXCIwXCIpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3VuZEVuYWJsZWRcIiwgXCIxXCIpXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkNoZWNrU291bmRFbmFibGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMZXZlbERhdGEobHZsTm8pIHtcclxuICAgICAgICBsZXQgbHZsID0gbHZsTm8gKyBcIm5ld2RhdGFcIjtcclxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGx2bCkgPT0gbnVsbCB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obHZsKSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShsdmwsIG51bGwpXHJcblxyXG4gICAgICAgIC8vIGxldCB2YWwgPSBwYXJzZUludCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obHZsKSk7XHJcbiAgICAgICAgLy8gbGV0IGRhdGFBcnJheSA9IFtdO1xyXG4gICAgICAgIC8vIGlmKHZhbCA+PSAwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdmFsOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBsdmxEYXRhID0gbHZsTm8rXCJkYXRhXCIraTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBzcGxpdFZhbCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGx2bERhdGEpKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNwbGl0VmFsLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZGF0YUFycmF5LnB1c2goc3BsaXRWYWxbal0pO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICBsZXQgZGF0YUFycmF5ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obHZsKSk7XHJcbiAgICAgICAgLy9uZXdcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGFBcnJheTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgU2F2ZUxldmVsRGF0YShsdmxObywgZGF0YSkge1xyXG4gICAgICAgIC8vIGxldCB0b3RhbExlbmd0aCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIC8vIGxldCBzcGxpdERhdGExID0gTWF0aC5mbG9vcih0b3RhbExlbmd0aC81KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGsgPSAwO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDw9IHNwbGl0RGF0YTE7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgbmV3RGF0YSA9IFtdO1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoZGF0YVtrXSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBuZXdEYXRhLnB1c2goZGF0YVtrXSk7XHJcbiAgICAgICAgLy8gICAgICAgICBrKys7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgbGV0IGx2bERhdGEgPSBsdmxObytcImRhdGFcIitpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldEluTG9jYWxTdG9yYWdlKGx2bERhdGEsbmV3RGF0YSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IGx2bCA9IGx2bE5vK1wiZGF0YVwiO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0SW5Mb2NhbFN0b3JhZ2UobHZsLHNwbGl0RGF0YTEpICBcclxuXHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGF0YVtpXS5zcGxpY2UoMCwgZGF0YVtpXS5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2ldW2pdLmNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbHZsID0gbHZsTm8gKyBcIm5ld2RhdGFcIjtcclxuICAgICAgICB0aGlzLnNldEluTG9jYWxTdG9yYWdlKGx2bCwgZGF0YSlcclxuICAgICAgICAvL25ld1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW5Mb2NhbFN0b3JhZ2Uoa2V5TmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBsb2NhbCBzdG9yYWdlJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEluTG9jYWxTdG9yYWdlKGtleU5hbWUsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5TmFtZSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQVVESU9fU09VTkQgPSB7XHJcbiAgICAgICAgQkFDS0dST1VORDogJ2JnbScsXHJcblxyXG4gICAgICAgIC8vIERpYWxvZ3VlIDogXCJEaWFsb2d1ZVwiLFxyXG4gICAgICAgIERpYWxvZ3VlOiB7XHJcbiAgICAgICAgICAgIDA6IFwibGV0dGVyL0wxLVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29ycmVjdDoge1xyXG4gICAgICAgICAgICAwOiBcImNvcnJlY3QvTDEgQ29ycmVjdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd3Jvbmc6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgMDogXCJ3cm9uZy9MMSBOZWdhdGl2ZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAxOiBcIndyb25nL0wxIE5lZ2F0aXZlIEJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRyYWNpbmc6IFwiVHJhY2luZyBQdWxsXCIsXHJcbiAgICAgICAgRW5kUG9pbnQ6IFwiRW5kUG9pbnRcIixcclxuICAgICAgICBTaGFwZXJldmVhbDogXCJTaGFwZSByZXZlYWxcIixcclxuICAgICAgICBUaW1lcjogXCJUaW1lclwiLFxyXG4gICAgICAgIFllYWhoOiBcIlllYWhoXCIsXHJcbiAgICAgICAgQ2xpY2s6IFwiQ2xpY2tcIixcclxuXHJcbiAgICAgICAgZWxlbWVudEFwcGVhcjogXCJlbGVtZW50QXBwZWFyXCIsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBBVURJT19GUkFNRSA9IHtcclxuICAgICAgICBzb3VuZE9uOiAnUG5nL3BlcnNpc3RlbnQvU291bmQgb24nLFxyXG4gICAgICAgIHNvdW5kT2ZmOiBcIlBuZy9wZXJzaXN0ZW50L1NvdW5kIG9mZlwiLFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTE9HX0RBVEEgPSB7XHJcblxyXG4gICAgICAgIC8vaW5pdGlhbFxyXG4gICAgICAgIExPQURJTkdfMTAwOiBcImxvYWRpbmctLTEwMFwiLFxyXG4gICAgICAgIExPQURFUl9DT01QTEVURV9UUlVFOiBcImxvYWRlckNvbXBsZXRlLS10cnVlXCIsXHJcbiAgICAgICAgVElUTEVfU0hPV0VEOiBcImxvZ0V2ZW50LS1zaG93ZWRTY3JlZW4tLVRpdGxlXCIsXHJcblxyXG4gICAgICAgIExFVkVMX1NUQVJURUQ6IFwibGV2ZWxTdGFydGVkLS1cIixcclxuICAgICAgICBGSVJTVF9DTElDSzogXCJmaXJzdENsaWNrLS1cIixcclxuICAgICAgICBMRVZFTF9DT01QTEVURTogXCJsZXZlbENvbXBsZXRlLS1cIixcclxuICAgICAgICBMRVZFTF9GQUlMRUQ6IFwibGV2ZWxGYWlsZWQtLVwiLFxyXG4gICAgICAgIFNUQVJTX0VBUk5FRDogXCJzdGFyc0Vhcm5lZC0tXCIsXHJcbiAgICAgICAgTEVWRUxfQ0xJQ0s6IFwibGV2ZWxDbGljay0tXCIsXHJcbiAgICAgICAgQ09SUkVDVF9BTlNXRVI6IFwiY29ycmVjdEFuc3dlci0tXCIsXHJcblxyXG4gICAgICAgIFJFU1RBUlRFRDogXCJsb2dFdmVudC0tcmVwbGF5Q2xpY2stLXRydWVcIixcclxuXHJcbiAgICAgICAgU09VTkRfVFJVRTogXCJzb3VuZFNldHRpbmctLXRydWVcIixcclxuICAgICAgICBTT1VORF9GQUxTRTogXCJzb3VuZFNldHRpbmctLWZhbHNlXCIsXHJcblxyXG4gICAgICAgIEdBTUVfRVhJVDogXCJnYW1lRXhpdC0tdHJ1ZVwiLFxyXG5cclxuICAgICAgICAvL2dhbWVPdmVyXHJcbiAgICAgICAgQ09OR1JBVFVMQVRJT046IFwibG9nRXZlbnQtLXNob3dlZFNjcmVlbi0tQ29uZ3JhdHVsYXRpb25zXCIsXHJcbiAgICAgICAgR0FNRV9FTkRFRF9UUlVFOiBcImdhbWVFbmRlZC0tdHJ1ZVwiLFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/Drawingmask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0aaaadim+RIGpc5sMmbR2rZ', 'Drawingmask');
// Game/Painting_template/Script/GamePlay/Drawingmask.ts

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
var Constant_1 = require("../Common/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Drawingmask = /** @class */ (function (_super) {
    __extends(Drawingmask, _super);
    function Drawingmask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parentRef = null;
        _this.parentNode = null;
        _this.patternFrame = null;
        _this.touches = [];
        return _this;
    }
    Drawingmask.prototype.start = function () {
    };
    // update (dt) {}
    Drawingmask.prototype.initialiseRef = function (ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
    };
    Drawingmask.prototype.initialisePatternData = function (persistentScrollScript) {
        this.patternFrame = persistentScrollScript.currentPatternFrame;
        if (persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER)
            return;
        if (persistentScrollScript.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.node.getChildByName("img").color = this.patternFrame; //CommonFun.instance.hexToRgb(this.patternFrame);
        if (persistentScrollScript.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN ||
            persistentScrollScript.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.node.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.patternFrame;
        if (persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PAINT)
            this.node.getComponent(cc.Mask).inverted = true;
    };
    Drawingmask.prototype.getPatternFrame = function () {
        return this.patternFrame;
    };
    Drawingmask = __decorate([
        ccclass
    ], Drawingmask);
    return Drawingmask;
}(cc.Component));
exports.default = Drawingmask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXERyYXdpbmdtYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLCtDQUE4QztBQUV4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXdDQztRQXJDRyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBYyxFQUFFLENBQUE7O0lBZ0MzQixDQUFDO0lBOUJHLDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLG1DQUFhLEdBQWIsVUFBYyxTQUFTO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUNELDJDQUFxQixHQUFyQixVQUFzQixzQkFBc0I7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUUvRCxJQUFHLHNCQUFzQixDQUFDLHNCQUFzQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDeEUsT0FBTztRQUVYLElBQUcsc0JBQXNCLENBQUMsZ0JBQWdCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQSxDQUFBLGlEQUFpRDtRQUU5RyxJQUFHLHNCQUFzQixDQUFDLGdCQUFnQixJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDL0Qsc0JBQXNCLENBQUMsZ0JBQWdCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTztZQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRTVGLElBQUcsc0JBQXNCLENBQUMsc0JBQXNCLElBQUksbUJBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSztZQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUV4RCxDQUFDO0lBQ0QscUNBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBdkNnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBd0MvQjtJQUFELGtCQUFDO0NBeENELEFBd0NDLENBeEN3QyxFQUFFLENBQUMsU0FBUyxHQXdDcEQ7a0JBeENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENvbW1vbkZ1biBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vbkZ1blwiO1xyXG5pbXBvcnQgeyBDb25zdGFudCB9IGZyb20gXCIuLi9Db21tb24vQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZ21hc2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcblxyXG4gICAgcGFyZW50UmVmID0gbnVsbDtcclxuICAgIHBhcmVudE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHBhdHRlcm5GcmFtZSA9IG51bGw7XHJcbiAgICBcclxuICAgIHRvdWNoZXM6IGNjLlZlYzJbXSA9IFtdXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIGluaXRpYWxpc2VSZWYoUGFyZW50UmVmKXtcclxuICAgICAgICB0aGlzLnBhcmVudFJlZiA9IFBhcmVudFJlZjtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB0aGlzLnBhcmVudFJlZi5ub2RlO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGlzZVBhdHRlcm5EYXRhKHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQpe1xyXG4gICAgICAgIHRoaXMucGF0dGVybkZyYW1lID0gcGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGF0dGVybkZyYW1lO1xyXG5cclxuICAgICAgICBpZihwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gdGhpcy5wYXR0ZXJuRnJhbWUvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLnBhdHRlcm5GcmFtZSk7XHJcblxyXG4gICAgICAgIGlmKHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOIHx8IFxyXG4gICAgICAgICAgICAgICAgcGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGF0dGVybkZyYW1lO1xyXG5cclxuICAgICAgICBpZihwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFJTlQpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWFzaykuaW52ZXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuICAgIGdldFBhdHRlcm5GcmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdHRlcm5GcmFtZTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFpQkM7UUFiVSw4QkFBd0IsR0FBRyxJQUFJLENBQUM7O0lBYTNDLENBQUM7ZUFqQm9CLE1BQU07SUFNdkIsc0JBQVcsa0JBQVE7YUFBbkI7WUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQU0sQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSyxHQUFMO0lBQ0EsQ0FBQzs7SUFoQmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpQjFCO0lBQUQsYUFBQztDQWpCRCxBQWlCQyxDQWpCbUMsRUFBRSxDQUFDLFNBQVMsR0FpQi9DO2tCQWpCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBEcmF3aW5nbWFzayBmcm9tIFwiLi4vR2FtZVBsYXkvRHJhd2luZ21hc2tcIjtcclxuaW1wb3J0IERyYXdpbmdUYWJsZSBmcm9tIFwiLi4vR2FtZVBsYXkvRHJhd2luZ1RhYmxlXCI7XHJcbmltcG9ydCBQZXJzaXN0ZW50U2Nyb2xsIGZyb20gXCIuLi9HYW1lUGxheS9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuaW1wb3J0IFRpbGVTZWxlY3Rpb24gZnJvbSBcIi4uL0dhbWVQbGF5L1RpbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9hdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xyXG5cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdsb2JhbDtcclxuXHJcbiAgICBwdWJsaWMgUGVyc2lzdGVudFNjcm9sbEluc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCl7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHbG9iYWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Draw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77541gnSxBIPqgHQkYr5Kbo', 'Draw');
// Game/Painting_template/Script/Draw.ts

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
var Draw = /** @class */ (function (_super) {
    __extends(Draw, _super);
    function Draw() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touches = [];
        _this.graphics = null;
        _this.usedBtn = 1;
        return _this;
    }
    Draw.prototype.start = function () {
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    Draw.prototype.setupDrawingNode = function () {
        // let drawingNode = cc.instantiate(this.drawingPrefab);
        // drawingNode.setPosition(new cc.Vec2(0, 0));
        // this.points[this.currentPos].mask.addChild(drawingNode);
        var graphicsNode = this.node.getChildByName("grap").getComponent(cc.Graphics);
        graphicsNode.moveTo(0, 0);
        graphicsNode.lineTo(0.1, 0);
        graphicsNode.lineTo(-0.11, 0);
        graphicsNode.stroke();
        return graphicsNode;
    };
    Draw.prototype.onTouchStart = function (event) {
        this.graphics = this.setupDrawingNode();
        if (this.usedBtn == 1) {
            this.touches.length = 0;
            this.touches.push(event.touch.getLocation());
        }
        else {
            this.graphics.setMaterial(0, this.graphics.getMaterial(1));
            // this.touches1.length = 0;
            // this.touches1.push(event.touch.getLocation());
        }
    };
    Draw.prototype.onTouchMove = function (event) {
        var touches = this.touches;
        touches.push(event.touch.getLocation());
        var MIN_POINT_DISTANCE = 2;
        this.graphics.clear();
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        var lastIndex = 0;
        for (var i = 1, l = touches.length; i < l; i++) {
            if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) {
                continue;
            }
            lastIndex = i;
            this.graphics.lineTo(touches[i].x - worldPos.x, touches[i].y - worldPos.y);
        }
        this.graphics.stroke();
    };
    Draw.prototype.onTouchEnd = function (event) {
    };
    Draw.prototype.onBtnClicked = function () {
        this.usedBtn *= -1;
    };
    Draw = __decorate([
        ccclass
    ], Draw);
    return Draw;
}(cc.Component));
exports.default = Draw;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcRHJhdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXNFQztRQXBFRyxhQUFPLEdBQWMsRUFBRSxDQUFBO1FBQ3ZCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBaUVoQixDQUFDO0lBL0RHLG9CQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCwrQkFBZ0IsR0FBaEI7UUFFSSx3REFBd0Q7UUFDeEQsOENBQThDO1FBQzlDLDJEQUEyRDtRQUUzRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FB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IjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHRvdWNoZXM6IGNjLlZlYzJbXSA9IFtdXHJcbiAgICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgXHJcbiAgICB1c2VkQnRuID0gMTtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXR1cERyYXdpbmdOb2RlKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gbGV0IGRyYXdpbmdOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kcmF3aW5nUHJlZmFiKTtcclxuICAgICAgICAvLyBkcmF3aW5nTm9kZS5zZXRQb3NpdGlvbihuZXcgY2MuVmVjMigwLCAwKSk7XHJcbiAgICAgICAgLy8gdGhpcy5wb2ludHNbdGhpcy5jdXJyZW50UG9zXS5tYXNrLmFkZENoaWxkKGRyYXdpbmdOb2RlKTtcclxuXHJcbiAgICAgICAgbGV0IGdyYXBoaWNzTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdyYXBcIikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljc05vZGUubW92ZVRvKDAsIDApO1xyXG4gICAgICAgIGdyYXBoaWNzTm9kZS5saW5lVG8oMC4xLCAwKTtcclxuICAgICAgICBncmFwaGljc05vZGUubGluZVRvKC0wLjExLCAwKTtcclxuICAgICAgICBncmFwaGljc05vZGUuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBncmFwaGljc05vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0IChldmVudCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLnNldHVwRHJhd2luZ05vZGUoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy51c2VkQnRuID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy50b3VjaGVzLnB1c2goZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc2V0TWF0ZXJpYWwoMCwgdGhpcy5ncmFwaGljcy5nZXRNYXRlcmlhbCgxKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG91Y2hlczEubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgLy8gdGhpcy50b3VjaGVzMS5wdXNoKGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZSAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hlcyA9IHRoaXMudG91Y2hlcztcclxuICAgICAgICB0b3VjaGVzLnB1c2goZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IE1JTl9QT0lOVF9ESVNUQU5DRSA9IDI7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKCkpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHRvdWNoZXNbMF0ueCAtIHdvcmxkUG9zLngsIHRvdWNoZXNbMF0ueSAtIHdvcmxkUG9zLnkpO1xyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxLCBsID0gdG91Y2hlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRvdWNoZXNbaV0uc3ViKHRvdWNoZXNbbGFzdEluZGV4XSkubWFnKCkgPCBNSU5fUE9JTlRfRElTVEFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRvdWNoZXNbaV0ueCAtIHdvcmxkUG9zLngsIHRvdWNoZXNbaV0ueSAtIHdvcmxkUG9zLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmQgKGV2ZW50KSB7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkNsaWNrZWQoKXtcclxuICAgICAgICB0aGlzLnVzZWRCdG4gKj0gLTE7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/TileSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e87e4A2+tCgoW+6DQz4w3i', 'TileSelection');
// Game/Painting_template/Script/GamePlay/TileSelection.ts

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
var Constant_1 = require("../Common/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TileSelection = /** @class */ (function (_super) {
    __extends(TileSelection, _super);
    function TileSelection() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.parentRef = null;
        _this.parentNode = null;
        _this.patternFrame = null;
        _this.currentTimeout = null;
        _this.index = 0;
        _this.isLocked = false;
        return _this;
    }
    TileSelection.prototype.start = function () {
    };
    TileSelection.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
    };
    TileSelection.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    TileSelection.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    TileSelection.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.parentRef.onTileSelected(this);
    };
    // update (dt) {}
    TileSelection.prototype.initialiseRef = function (ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
    };
    TileSelection.prototype.initialiseData = function (data, index) {
        this.index = index;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.patternFrame = data.color;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            this.patternFrame = data.PatternFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.patternFrame = data.SparkleFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.node.color = this.patternFrame; //CommonFun.instance.hexToRgb(this.patternFrame);
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
    };
    TileSelection.prototype.setLocked = function (value) {
        this.isLocked = value;
        this.node.getChildByName("lockNode").active = value;
    };
    TileSelection = __decorate([
        ccclass
    ], TileSelection);
    return TileSelection;
}(cc.Component));
exports.default = TileSelection;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXFRpbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBRUksd0JBQXdCO1FBRjVCLHFFQXdFQztRQXBFRyxlQUFlO1FBRWYsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUEwRHJCLENBQUM7SUF4REcsNkJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVB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eEQsQ0FBQztJQXZFZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXdFakM7SUFBRCxvQkFBQztDQXhFRCxBQXdFQyxDQXhFMEMsRUFBRSxDQUFDLFNBQVMsR0F3RXREO2tCQXhFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25GdW5cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVTZWxlY3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHBhcmVudFJlZiA9IG51bGw7XHJcbiAgICBwYXJlbnROb2RlID0gbnVsbDtcclxuXHJcbiAgICBwYXR0ZXJuRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIGN1cnJlbnRUaW1lb3V0ID0gbnVsbDtcclxuICAgIGluZGV4ID0gMDtcclxuXHJcbiAgICBpc0xvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaEJlZ2luLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIF9vblRvdWNoQmVnaW4gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hNb3ZlZCAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaEVuZCAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRSZWYub25UaWxlU2VsZWN0ZWQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBpbml0aWFsaXNlUmVmKFBhcmVudFJlZil7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRSZWYgPSBQYXJlbnRSZWY7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gdGhpcy5wYXJlbnRSZWYubm9kZTtcclxuICAgIH1cclxuICAgIGluaXRpYWxpc2VEYXRhKGRhdGEsaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZih0aGlzLnBhcmVudFJlZi5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SKVxyXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GcmFtZSA9IGRhdGEuY29sb3I7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKVxyXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GcmFtZSA9IGRhdGEuUGF0dGVybkZyYW1lO1xyXG4gICAgICAgIGlmKHRoaXMucGFyZW50UmVmLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICAgICAgdGhpcy5wYXR0ZXJuRnJhbWUgPSBkYXRhLlNwYXJrbGVGcmFtZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5wYXR0ZXJuRnJhbWUvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLnBhdHRlcm5GcmFtZSk7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKVxyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wYXR0ZXJuRnJhbWU7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFKVxyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wYXR0ZXJuRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9ja2VkKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmlzTG9ja2VkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibG9ja05vZGVcIikuYWN0aXZlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/ScreenShot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a278cwRfFpKkaF9UqIfZD4w', 'ScreenShot');
// Game/Painting_template/Script/ScreenShot.ts

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
var Global_1 = require("./Common/Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScreenShot = /** @class */ (function (_super) {
    __extends(ScreenShot, _super);
    function ScreenShot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.currentPic = null;
        _this.cameraAud = null;
        _this.texture = null;
        _this._width = 0;
        _this._height = 0;
        _this.persistentScrollNode = null;
        _this.persistentScrollScript = null;
        return _this;
    }
    ScreenShot.prototype.start = function () {
        this.persistentScrollScript = Global_1.default.instance.PersistentScrollInstance;
        this.persistentScrollNode = Global_1.default.instance.PersistentScrollInstance.node;
    };
    ScreenShot.prototype.onScrennClicked = function (_event) {
        var _this = this;
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.cameraAud, false);
        console.log("takeSnapshot--true");
        this.persistentScrollNode.opacity = 0;
        this.scheduleOnce(function () {
            _this.persistentScrollNode.opacity = 255;
            _event.target.getComponent(cc.Button).interactable = true;
        }, 3);
        // this.init();
        // create the capture
        // this.camera.enabled = true;
        // this.schedule(() => {
        //     let picData = this.initImage();
        //     // this.createCanvas(picData);
        //     this.saveFile(picData);
        //     this.showTexture(picData);
        //     this.camera.enabled = false;
        // }, 0.5, 0);
    };
    ScreenShot.prototype.showTexture = function (picData) {
        var texture = new cc.Texture2D();
        texture.initWithData(picData, 32, this._width, this._height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        // let node = new cc.Node();
        // let sprite = node.addComponent(cc.Sprite);
        // this._sprite = this.getComponent<cc.Sprite>(cc.Sprite);
        this.currentPic.spriteFrame = spriteFrame;
        this.persistentScrollNode.opacity = 255;
        this.currentPic.node.opacity = 255;
        setTimeout(function () {
            this.currentPic.node.opacity = 0;
        }.bind(this), 1000 * (2));
    };
    ScreenShot.prototype.saveFile = function (picData) {
        if (CC_JSB) {
            var filePath = jsb.fileUtils.getWritablePath() + 'render_to_sprite_image.png';
            var success = jsb.saveImageData(picData, this._width, this._height, filePath);
            if (success) {
                cc.log("save image data success, file: " + filePath);
            }
            else {
                cc.error("save image data failed!");
            }
        }
    };
    ScreenShot.prototype.init = function () {
        var texture = new cc.RenderTexture();
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.gfx.RB_FMT_S8);
        this.camera.targetTexture = texture;
        this.texture = texture;
    };
    // override init with Data
    ScreenShot.prototype.createCanvas = function (picData) {
        var texture = new cc.Texture2D();
        texture.initWithData(picData, 32, this._width, this._height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        // set position
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        node.on(cc.Node.EventType.TOUCH_START, function () {
            node.parent = null;
            node.destroy();
        });
        this.captureAction(node, width, height);
    };
    // sprite action
    ScreenShot.prototype.captureAction = function (capture, width, height) {
        var scaleAction = cc.scaleTo(1, 0.3);
        var targetPos = cc.v2(width - width / 6, height / 4);
        var moveAction = cc.moveTo(1, targetPos);
        var spawn = cc.spawn(scaleAction, moveAction);
        capture.runAction(spawn);
        var blinkAction = cc.blink(0.1, 1);
        // scene action
        this.node.runAction(blinkAction);
    };
    // override
    ScreenShot.prototype.initImage = function () {
        var data = this.texture.readPixels();
        this._width = this.texture.width;
        this._height = this.texture.height;
        var picData = this.filpYImage(data, this._width, this._height);
        return picData;
    };
    // This is a temporary solution
    ScreenShot.prototype.filpYImage = function (data, width, height) {
        // create the data array
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var start = srow * width * 4;
            var reStart = row * width * 4;
            // save the piexls data
            for (var i = 0; i < rowBytes; i++) {
                picData[reStart + i] = data[start + i];
            }
        }
        return picData;
    };
    __decorate([
        property(cc.Camera)
    ], ScreenShot.prototype, "camera", void 0);
    __decorate([
        property(cc.Sprite)
    ], ScreenShot.prototype, "currentPic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ScreenShot.prototype, "cameraAud", void 0);
    ScreenShot = __decorate([
        ccclass
    ], ScreenShot);
    return ScreenShot;
}(cc.Component));
exports.default = ScreenShot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcU2NyZWVuU2hvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwwQ0FBcUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE0SkM7UUF6SkcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixhQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ2QsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFHWiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsNEJBQXNCLEdBQUcsSUFBSSxDQUFDOztJQTRJbEMsQ0FBQztJQTFJRywwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7SUFDOUUsQ0FBQztJQUVELG9DQUFlLEdBQWYsVUFBZ0IsTUFBZ0I7UUFBaEMsaUJBd0JDO1FBdkJHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FB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LFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuQyxJQUFJLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM5Qix1QkFBdUI7WUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBeEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNRO0lBUmQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTRKOUI7SUFBRCxpQkFBQztDQTVKRCxBQTRKQyxDQTVKdUMsRUFBRSxDQUFDLFNBQVMsR0E0Sm5EO2tCQTVKb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vQ29tbW9uL0dsb2JhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlblNob3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGN1cnJlbnRQaWM6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2FtZXJhQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHRleHR1cmUgPSBudWxsXHJcbiAgICBfd2lkdGggPSAwO1xyXG4gICAgX2hlaWdodCA9IDA7XHJcbiAgICBfc3ByaXRlOiBjYy5TcHJpdGU7XHJcblxyXG4gICAgcGVyc2lzdGVudFNjcm9sbE5vZGUgPSBudWxsO1xyXG4gICAgcGVyc2lzdGVudFNjcm9sbFNjcmlwdCA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gR2xvYmFsLmluc3RhbmNlLlBlcnNpc3RlbnRTY3JvbGxJbnN0YW5jZTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlID0gR2xvYmFsLmluc3RhbmNlLlBlcnNpc3RlbnRTY3JvbGxJbnN0YW5jZS5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2NyZW5uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAgICAgX2V2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2FtZXJhQXVkLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFrZVNuYXBzaG90LS10cnVlXCIpO1xyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbE5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9LCAzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuaW5pdCgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjYXB0dXJlXHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBwaWNEYXRhID0gdGhpcy5pbml0SW1hZ2UoKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5jcmVhdGVDYW52YXMocGljRGF0YSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2F2ZUZpbGUocGljRGF0YSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvd1RleHR1cmUocGljRGF0YSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FtZXJhLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyB9LCAwLjUsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUZXh0dXJlKHBpY0RhdGEpIHtcclxuXHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEocGljRGF0YSwgMzIsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgLy8gbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5fc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQ8Y2MuU3ByaXRlPihjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBpYy5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQaWMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9LmJpbmQodGhpcyksIDEwMDAgKiAoMikpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUZpbGUocGljRGF0YSkge1xyXG4gICAgICAgIGlmIChDQ19KU0IpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGVQYXRoID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArICdyZW5kZXJfdG9fc3ByaXRlX2ltYWdlLnBuZyc7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3VjY2VzcyA9IGpzYi5zYXZlSW1hZ2VEYXRhKHBpY0RhdGEsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQsIGZpbGVQYXRoKVxyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwic2F2ZSBpbWFnZSBkYXRhIHN1Y2Nlc3MsIGZpbGU6IFwiICsgZmlsZVBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJzYXZlIGltYWdlIGRhdGEgZmFpbGVkIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aXNpYmxlUmVjdC53aWR0aCwgY2MudmlzaWJsZVJlY3QuaGVpZ2h0LCBjYy5nZnguUkJfRk1UX1M4KTtcclxuICAgICAgICB0aGlzLmNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG92ZXJyaWRlIGluaXQgd2l0aCBEYXRhXHJcbiAgICBjcmVhdGVDYW52YXMocGljRGF0YSkge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhEYXRhKHBpY0RhdGEsIDMyLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XHJcbiAgICAgICAgc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cclxuICAgICAgICBub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIC8vIHNldCBwb3NpdGlvblxyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xyXG4gICAgICAgIG5vZGUueCA9IHdpZHRoIC8gMjtcclxuICAgICAgICBub2RlLnkgPSBoZWlnaHQgLyAyO1xyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0dXJlQWN0aW9uKG5vZGUsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNwcml0ZSBhY3Rpb25cclxuICAgIGNhcHR1cmVBY3Rpb24oY2FwdHVyZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGxldCBzY2FsZUFjdGlvbiA9IGNjLnNjYWxlVG8oMSwgMC4zKTtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gY2MudjIod2lkdGggLSB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgIGxldCBtb3ZlQWN0aW9uID0gY2MubW92ZVRvKDEsIHRhcmdldFBvcyk7XHJcbiAgICAgICAgbGV0IHNwYXduID0gY2Muc3Bhd24oc2NhbGVBY3Rpb24sIG1vdmVBY3Rpb24pO1xyXG4gICAgICAgIGNhcHR1cmUucnVuQWN0aW9uKHNwYXduKTtcclxuICAgICAgICBsZXQgYmxpbmtBY3Rpb24gPSBjYy5ibGluaygwLjEsIDEpO1xyXG4gICAgICAgIC8vIHNjZW5lIGFjdGlvblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYmxpbmtBY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG92ZXJyaWRlXHJcbiAgICBpbml0SW1hZ2UoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnRleHR1cmUucmVhZFBpeGVscygpO1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gdGhpcy50ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHRoaXMudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IHBpY0RhdGEgPSB0aGlzLmZpbHBZSW1hZ2UoZGF0YSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHBpY0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBpcyBhIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gICAgZmlscFlJbWFnZShkYXRhLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBkYXRhIGFycmF5XHJcbiAgICAgICAgbGV0IHBpY0RhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG4gICAgICAgIGxldCByb3dCeXRlcyA9IHdpZHRoICogNDtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCBzcm93ID0gaGVpZ2h0IC0gMSAtIHJvdztcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3JvdyAqIHdpZHRoICogNDtcclxuICAgICAgICAgICAgbGV0IHJlU3RhcnQgPSByb3cgKiB3aWR0aCAqIDQ7XHJcbiAgICAgICAgICAgIC8vIHNhdmUgdGhlIHBpZXhscyBkYXRhXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Qnl0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGljRGF0YVtyZVN0YXJ0ICsgaV0gPSBkYXRhW3N0YXJ0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBpY0RhdGE7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/CommonFun.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04f51fxUhpNXKW0151wPJGJ', 'CommonFun');
// Game/Painting_template/Script/Common/CommonFun.ts

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
var Drawingmask_1 = require("../GamePlay/Drawingmask");
var DrawingTable_1 = require("../GamePlay/DrawingTable");
var TileSelection_1 = require("../GamePlay/TileSelection");
var audioManager_1 = require("./audioManager");
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonFun = /** @class */ (function (_super) {
    __extends(CommonFun, _super);
    function CommonFun() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentLvl = 0;
        _this.isSymetryEnabled = false;
        return _this;
    }
    CommonFun_1 = CommonFun;
    Object.defineProperty(CommonFun, "instance", {
        get: function () {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new CommonFun_1;
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    CommonFun.prototype.start = function () {
        this.currentLvl = 0;
    };
    CommonFun.prototype.convertToCenterXPos = function (x) {
        var val = x + cc.winSize.width / 2;
        return val;
    };
    CommonFun.prototype.convertToCenterYPos = function (y) {
        var val = y + cc.winSize.height / 2;
        return val;
    };
    CommonFun.prototype.convertXPos = function (x, node) {
        var val = x - node.width / 2;
        return val;
    };
    CommonFun.prototype.convertYPos = function (y, node) {
        var val = y - node.height / 2;
        return val;
    };
    CommonFun.prototype.convertXPosWithNode = function (x, node) {
        var val = x - node.width / 2;
        return val;
    };
    CommonFun.prototype.convertYPosWithNode = function (y, node) {
        var val = y - node.height / 2;
        return val;
    };
    CommonFun.prototype.showScaleAnimation = function (node, scale, time) {
        cc.tween(node)
            .to(time, {
            scale: scale
        })
            .start();
    };
    CommonFun.prototype.angle = function (originX, originY, targetX, targetY) {
        var dx = originX - targetX;
        var dy = originY - targetY;
        var theta = Math.atan2(-dy, -dx); // [0, Ⲡ] then [-Ⲡ, 0]; clockwise; 0° = east
        theta *= 180 / Math.PI; // [0, 180] then [-180, 0]; clockwise; 0° = east
        if (theta < 0)
            theta += 360; // [0, 360]; clockwise; 0° = east
        return theta;
    };
    CommonFun.prototype.removeArrayValue = function (array, val) {
        var index = array.indexOf(val);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    CommonFun.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    CommonFun.prototype.getDistance = function (xA, yA, xB, yB) {
        var xDiff = xA - xB;
        var yDiff = yA - yB;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    CommonFun.prototype.getRndInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    CommonFun.prototype.generateRect = function (p1) {
        var val = 20;
        var left = p1.x - val;
        var right = p1.x + val;
        var top = p1.y + val;
        var bottom = p1.y - val;
        var width = right - left;
        var height = top - bottom;
        return cc.rect(left, p1.y, width, height);
    };
    CommonFun.prototype.checkInPolygon = function (p1, p3) {
        var rect = this.generateRect(p1);
        var inside = rect.contains(p3);
        return inside;
    };
    CommonFun.prototype.splitNumIntoXRandomComponents = function (num, x, min_num) {
        var components = [];
        var count = 1;
        var cumulative = 0;
        var balance = num;
        for (var i = 0; i < x - 1; i++) {
            //max num for this spot
            var max_num = balance - ((x - count) * min_num);
            //to avoid big numbers in the beginning and min numbers at the end
            if (Math.random() > 0.3) { //0.5 can be tuned to your liking
                max_num = Math.floor(max_num / 2) + min_num;
            }
            //generate the number for the spot at 'count'
            var c = Math.floor(Math.random() * (max_num - min_num + 1) + min_num);
            //adjust balances
            cumulative += c;
            balance -= c;
            count++;
            //store this number
            components.push(c);
        }
        //push remaining balance into the last spot
        components.push(balance);
        //print numbers
        return components;
    };
    CommonFun.prototype.pointOnLine = function (pt1, pt2, pt3) {
        var result = {
            on_projected_line: true,
            on_line: false,
            between_both: false,
            between_x: false,
            between_y: false,
        };
        // Determine if on line interior or exterior
        var x = (pt3.x - pt1.x) / (pt2.x - pt1.x);
        var y = (pt3.y - pt1.y) / (pt2.y - pt1.y);
        // Check if on line equation
        result.on_projected_line = x === y;
        // Check within x bounds
        if ((pt1.x <= pt3.x && pt3.x <= pt2.x) ||
            (pt2.x <= pt3.x && pt3.x <= pt1.x)) {
            result.between_x = true;
        }
        // Check within y bounds
        if ((pt1.y <= pt3.y && pt3.y <= pt2.y) ||
            (pt2.y <= pt3.y && pt3.y <= pt1.y)) {
            result.between_y = true;
        }
        result.between_both = result.between_x && result.between_y;
        result.on_line = result.on_projected_line && result.between_both;
        return result;
    };
    CommonFun.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new cc.Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 255) : new cc.Color(0, 0, 0, 255);
    };
    CommonFun.prototype.getTileSelectionClassRef = function (node) {
        if (node.getComponent(TileSelection_1.default) != null)
            return node.getComponent(TileSelection_1.default);
        return null;
    };
    CommonFun.prototype.getDrawingmaskClassRef = function (node) {
        if (node.getComponent(Drawingmask_1.default) != null)
            return node.getComponent(Drawingmask_1.default);
        return null;
    };
    CommonFun.prototype.getDrawingTableClassRef = function (node) {
        if (node.getComponent(DrawingTable_1.default) != null)
            return node.getComponent(DrawingTable_1.default);
        return null;
    };
    CommonFun.prototype.loadAllAudios = function () {
        for (var i = 0; i < Object.keys(Constant_1.Constant.AUDIO_SOUND.correct).length; i++) {
            audioManager_1.default.instance.loadAuido(Constant_1.Constant.AUDIO_SOUND.correct[Object.keys(Constant_1.Constant.AUDIO_SOUND.correct)[i]]);
        }
    };
    CommonFun.prototype.circleCoordinates = function (radius, steps, centerX, centerY) {
        var pos = [];
        for (var i = 0; i < steps; i++) {
            pos.push(new cc.Vec2(centerX + radius * Math.cos(2 * Math.PI * (i / steps)), centerY + radius * Math.sin(2 * Math.PI * (i / steps))));
        }
        return pos;
    };
    CommonFun.prototype.getAlphabet = function (num) {
        return (num + 10).toString(36);
    };
    CommonFun.prototype.ifFirstTimePlayer = function () {
        // window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1")
        if (window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == null || window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == undefined)
            window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1");
        return parseInt(window.localStorage.getItem("smallAlphabetifFirstTimePlayer"));
    };
    CommonFun.prototype.updateifFirstTimePlayer = function () {
        window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "0");
    };
    CommonFun.prototype.logData = function (txt) {
        console.log(txt);
    };
    CommonFun.prototype.getTotalLvlPlayed = function () {
        if (window.localStorage.getItem("totalLvlPlayeda-z") == null || window.localStorage.getItem("totalLvlPlayeda-z") == undefined)
            window.localStorage.setItem("totalLvlPlayeda-z", "-1");
        var array = [];
        var lvl = window.localStorage.getItem("totalLvlPlayeda-z");
        array = lvl.split("/");
        return array;
    };
    CommonFun.prototype.updateLvlPlayed = function (lvlNo) {
        var currentLvls = this.getTotalLvlPlayed();
        var lvlExist = this.checkLvlExist(lvlNo);
        if (!lvlExist) {
            currentLvls.push(lvlNo);
            var str = "";
            for (var i = 0; i < currentLvls.length; i++) {
                str = str + currentLvls[i];
                if (i < currentLvls.length - 1)
                    str = str + "/";
            }
            window.localStorage.setItem("totalLvlPlayeda-z", str);
        }
    };
    CommonFun.prototype.checkLvlExist = function (lvlNo) {
        var currentLvls = this.getTotalLvlPlayed();
        var lvlExist = false;
        for (var i = 0; i < currentLvls.length; i++) {
            if (lvlNo.toString() == currentLvls[i]) {
                lvlExist = true;
                break;
            }
        }
        return lvlExist;
    };
    var CommonFun_1;
    CommonFun = CommonFun_1 = __decorate([
        ccclass
    ], CommonFun);
    return CommonFun;
}(cc.Component));
exports.default = CommonFun;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxDb21tb25GdW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsdURBQWtEO0FBQ2xELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsK0NBQTBDO0FBQzFDLHVDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQThSQztRQTFSVSxnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLHNCQUFnQixHQUFHLEtBQUssQ0FBQzs7SUF5UnBDLENBQUM7a0JBOVJvQixTQUFTO0lBTzFCLHNCQUFXLHFCQUFRO2FBQW5CO1lBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDekI7WUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBUyxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCx1Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNqQixJQUFJLEdBQUcsR0FBRyxD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V0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNO2FBQ1Q7U0FDSjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7O0lBN1JnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOFI3QjtJQUFELGdCQUFDO0NBOVJELEFBOFJDLENBOVJzQyxFQUFFLENBQUMsU0FBUyxHQThSbEQ7a0JBOVJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IERyYXdpbmdtYXNrIGZyb20gXCIuLi9HYW1lUGxheS9EcmF3aW5nbWFza1wiO1xyXG5pbXBvcnQgRHJhd2luZ1RhYmxlIGZyb20gXCIuLi9HYW1lUGxheS9EcmF3aW5nVGFibGVcIjtcclxuaW1wb3J0IFRpbGVTZWxlY3Rpb24gZnJvbSBcIi4uL0dhbWVQbGF5L1RpbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9hdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25GdW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ29tbW9uRnVuO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50THZsID0gMDtcclxuICAgIHB1YmxpYyBpc1N5bWV0cnlFbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ29tbW9uRnVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMdmwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRUb0NlbnRlclhQb3MoeCkge1xyXG4gICAgICAgIHZhciB2YWwgPSB4ICsgY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0VG9DZW50ZXJZUG9zKHkpIHtcclxuICAgICAgICB2YXIgdmFsID0geSArIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRYUG9zKHgsIG5vZGUpIHtcclxuICAgICAgICB2YXIgdmFsID0geCAtIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFlQb3MoeSwgbm9kZSkge1xyXG4gICAgICAgIHZhciB2YWwgPSB5IC0gbm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFhQb3NXaXRoTm9kZSh4LCBub2RlKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IHggLSBub2RlLndpZHRoIC8gMjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRZUG9zV2l0aE5vZGUoeSwgbm9kZSkge1xyXG4gICAgICAgIHZhciB2YWwgPSB5IC0gbm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dTY2FsZUFuaW1hdGlvbihub2RlLCBzY2FsZSwgdGltZSkge1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aW1lLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogc2NhbGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcblxyXG4gICAgYW5nbGUob3JpZ2luWCwgb3JpZ2luWSwgdGFyZ2V0WCwgdGFyZ2V0WSkge1xyXG4gICAgICAgIHZhciBkeCA9IG9yaWdpblggLSB0YXJnZXRYO1xyXG4gICAgICAgIHZhciBkeSA9IG9yaWdpblkgLSB0YXJnZXRZO1xyXG5cclxuICAgICAgICB2YXIgdGhldGEgPSBNYXRoLmF0YW4yKC1keSwgLWR4KTsgLy8gWzAsIOKyoF0gdGhlbiBbLeKyoCwgMF07IGNsb2Nrd2lzZTsgMMKwID0gZWFzdFxyXG4gICAgICAgIHRoZXRhICo9IDE4MCAvIE1hdGguUEk7ICAgICAgICAgICAvLyBbMCwgMTgwXSB0aGVuIFstMTgwLCAwXTsgY2xvY2t3aXNlOyAwwrAgPSBlYXN0XHJcbiAgICAgICAgaWYgKHRoZXRhIDwgMCkgdGhldGEgKz0gMzYwOyAgICAgIC8vIFswLCAzNjBdOyBjbG9ja3dpc2U7IDDCsCA9IGVhc3RcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoZXRhO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW1vdmVBcnJheVZhbHVlKGFycmF5LCB2YWwpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YodmFsKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXN0YW5jZSh4QSwgeUEsIHhCLCB5Qikge1xyXG4gICAgICAgIHZhciB4RGlmZiA9IHhBIC0geEI7XHJcbiAgICAgICAgdmFyIHlEaWZmID0geUEgLSB5QjtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4RGlmZiAqIHhEaWZmICsgeURpZmYgKiB5RGlmZik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um5kSW50ZWdlcihtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSZWN0KHAxKSB7XHJcblxyXG4gICAgICAgIGxldCB2YWwgPSAyMDtcclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSBwMS54IC0gdmFsO1xyXG4gICAgICAgIGxldCByaWdodCA9IHAxLnggKyB2YWw7XHJcbiAgICAgICAgbGV0IHRvcCA9IHAxLnkgKyB2YWw7XHJcbiAgICAgICAgbGV0IGJvdHRvbSA9IHAxLnkgLSB2YWw7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0b3AgLSBib3R0b207XHJcbiAgICAgICAgcmV0dXJuIGNjLnJlY3QobGVmdCwgcDEueSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJblBvbHlnb24ocDEsIHAzKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmdlbmVyYXRlUmVjdChwMSk7XHJcbiAgICAgICAgbGV0IGluc2lkZSA9IHJlY3QuY29udGFpbnMocDMpO1xyXG4gICAgICAgIHJldHVybiBpbnNpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BsaXROdW1JbnRvWFJhbmRvbUNvbXBvbmVudHMobnVtLCB4LCBtaW5fbnVtKSB7XHJcblxyXG4gICAgICAgIHZhciBjb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMTtcclxuICAgICAgICB2YXIgY3VtdWxhdGl2ZSA9IDA7XHJcbiAgICAgICAgdmFyIGJhbGFuY2UgPSBudW07XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAvL21heCBudW0gZm9yIHRoaXMgc3BvdFxyXG4gICAgICAgICAgICB2YXIgbWF4X251bSA9IGJhbGFuY2UgLSAoKHggLSBjb3VudCkgKiBtaW5fbnVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vdG8gYXZvaWQgYmlnIG51bWJlcnMgaW4gdGhlIGJlZ2lubmluZyBhbmQgbWluIG51bWJlcnMgYXQgdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuMykgeyAvLzAuNSBjYW4gYmUgdHVuZWQgdG8geW91ciBsaWtpbmdcclxuICAgICAgICAgICAgICAgIG1heF9udW0gPSBNYXRoLmZsb29yKG1heF9udW0gLyAyKSArIG1pbl9udW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgdGhlIG51bWJlciBmb3IgdGhlIHNwb3QgYXQgJ2NvdW50J1xyXG4gICAgICAgICAgICB2YXIgYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhfbnVtIC0gbWluX251bSArIDEpICsgbWluX251bSk7XHJcblxyXG4gICAgICAgICAgICAvL2FkanVzdCBiYWxhbmNlc1xyXG4gICAgICAgICAgICBjdW11bGF0aXZlICs9IGM7XHJcbiAgICAgICAgICAgIGJhbGFuY2UgLT0gYztcclxuICAgICAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgICAgIC8vc3RvcmUgdGhpcyBudW1iZXJcclxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9wdXNoIHJlbWFpbmluZyBiYWxhbmNlIGludG8gdGhlIGxhc3Qgc3BvdFxyXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChiYWxhbmNlKTtcclxuXHJcbiAgICAgICAgLy9wcmludCBudW1iZXJzXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9pbnRPbkxpbmUocHQxLCBwdDIsIHB0Mykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgb25fcHJvamVjdGVkX2xpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uX2xpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBiZXR3ZWVuX2JvdGg6IGZhbHNlLFxyXG4gICAgICAgICAgICBiZXR3ZWVuX3g6IGZhbHNlLFxyXG4gICAgICAgICAgICBiZXR3ZWVuX3k6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIERldGVybWluZSBpZiBvbiBsaW5lIGludGVyaW9yIG9yIGV4dGVyaW9yXHJcbiAgICAgICAgY29uc3QgeCA9IChwdDMueCAtIHB0MS54KSAvIChwdDIueCAtIHB0MS54KTtcclxuICAgICAgICBjb25zdCB5ID0gKHB0My55IC0gcHQxLnkpIC8gKHB0Mi55IC0gcHQxLnkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBvbiBsaW5lIGVxdWF0aW9uXHJcbiAgICAgICAgcmVzdWx0Lm9uX3Byb2plY3RlZF9saW5lID0geCA9PT0geTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgd2l0aGluIHggYm91bmRzXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAocHQxLnggPD0gcHQzLnggJiYgcHQzLnggPD0gcHQyLngpIHx8XHJcbiAgICAgICAgICAgIChwdDIueCA8PSBwdDMueCAmJiBwdDMueCA8PSBwdDEueClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmVzdWx0LmJldHdlZW5feCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayB3aXRoaW4geSBib3VuZHNcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChwdDEueSA8PSBwdDMueSAmJiBwdDMueSA8PSBwdDIueSkgfHxcclxuICAgICAgICAgICAgKHB0Mi55IDw9IHB0My55ICYmIHB0My55IDw9IHB0MS55KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXN1bHQuYmV0d2Vlbl95ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5iZXR3ZWVuX2JvdGggPSByZXN1bHQuYmV0d2Vlbl94ICYmIHJlc3VsdC5iZXR3ZWVuX3k7XHJcbiAgICAgICAgcmVzdWx0Lm9uX2xpbmUgPSByZXN1bHQub25fcHJvamVjdGVkX2xpbmUgJiYgcmVzdWx0LmJldHdlZW5fYm90aDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGhleFRvUmdiKGhleCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ID8gbmV3IGNjLkNvbG9yKHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLCBwYXJzZUludChyZXN1bHRbMl0sIDE2KSwgcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksIDI1NSkgOiBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlU2VsZWN0aW9uQ2xhc3NSZWYobm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZS5nZXRDb21wb25lbnQoVGlsZVNlbGVjdGlvbikgYXMgVGlsZVNlbGVjdGlvbikgIT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIChub2RlLmdldENvbXBvbmVudChUaWxlU2VsZWN0aW9uKSBhcyBUaWxlU2VsZWN0aW9uKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREcmF3aW5nbWFza0NsYXNzUmVmKG5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdtYXNrKSBhcyBEcmF3aW5nbWFzaykgIT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIChub2RlLmdldENvbXBvbmVudChEcmF3aW5nbWFzaykgYXMgRHJhd2luZ21hc2spO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyYXdpbmdUYWJsZUNsYXNzUmVmKG5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdUYWJsZSkgYXMgRHJhd2luZ1RhYmxlKSAhPSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdUYWJsZSkgYXMgRHJhd2luZ1RhYmxlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWxsQXVkaW9zKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoQ29uc3RhbnQuQVVESU9fU09VTkQuY29ycmVjdCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXVkaW9NYW5hZ2VyLmluc3RhbmNlLmxvYWRBdWlkbyhDb25zdGFudC5BVURJT19TT1VORC5jb3JyZWN0W09iamVjdC5rZXlzKENvbnN0YW50LkFVRElPX1NPVU5ELmNvcnJlY3QpW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUNvb3JkaW5hdGVzKHJhZGl1cywgc3RlcHMsIGNlbnRlclgsIGNlbnRlclkpIHtcclxuICAgICAgICBsZXQgcG9zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvcy5wdXNoKG5ldyBjYy5WZWMyKGNlbnRlclggKyByYWRpdXMgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIChpIC8gc3RlcHMpKSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclkgKyByYWRpdXMgKiBNYXRoLnNpbigyICogTWF0aC5QSSAqIChpIC8gc3RlcHMpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFscGhhYmV0KG51bSkge1xyXG4gICAgICAgIHJldHVybiAobnVtICsgMTApLnRvU3RyaW5nKDM2KTtcclxuICAgIH1cclxuXHJcbiAgICBpZkZpcnN0VGltZVBsYXllcigpIHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzbWFsbEFscGhhYmV0aWZGaXJzdFRpbWVQbGF5ZXJcIiwgXCIxXCIpXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiKSA9PSBudWxsIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiKSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiLCBcIjFcIilcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlaWZGaXJzdFRpbWVQbGF5ZXIoKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic21hbGxBbHBoYWJldGlmRmlyc3RUaW1lUGxheWVyXCIsIFwiMFwiKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dEYXRhKHR4dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG90YWxMdmxQbGF5ZWQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsTHZsUGxheWVkYS16XCIpID09IG51bGwgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxMdmxQbGF5ZWRhLXpcIikgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbEx2bFBsYXllZGEtelwiLCBcIi0xXCIpXHJcblxyXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBsdmwgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbEx2bFBsYXllZGEtelwiKTtcclxuXHJcbiAgICAgICAgYXJyYXkgPSBsdmwuc3BsaXQoXCIvXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTHZsUGxheWVkKGx2bE5vKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMdmxzID0gdGhpcy5nZXRUb3RhbEx2bFBsYXllZCgpO1xyXG4gICAgICAgIGxldCBsdmxFeGlzdCA9IHRoaXMuY2hlY2tMdmxFeGlzdChsdmxObyk7XHJcbiAgICAgICAgaWYgKCFsdmxFeGlzdCkge1xyXG4gICAgICAgICAgICBjdXJyZW50THZscy5wdXNoKGx2bE5vKTtcclxuICAgICAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEx2bHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIGN1cnJlbnRMdmxzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBjdXJyZW50THZscy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIFwiL1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsTHZsUGxheWVkYS16XCIsIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTHZsRXhpc3QobHZsTm8pIHtcclxuICAgICAgICBsZXQgY3VycmVudEx2bHMgPSB0aGlzLmdldFRvdGFsTHZsUGxheWVkKCk7XHJcbiAgICAgICAgbGV0IGx2bEV4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50THZscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobHZsTm8udG9TdHJpbmcoKSA9PSBjdXJyZW50THZsc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgbHZsRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGx2bEV4aXN0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/endScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5066f8YXv5M4rP4gJr2ulON', 'endScreen');
// Game/Painting_template/Script/endScreen.ts

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
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var endScreen = /** @class */ (function (_super) {
    __extends(endScreen, _super);
    function endScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.podarEnd = null;
        _this.jaipuriaEnd = null;
        _this.tlcEnd = null;
        _this.supercubEnd = null;
        return _this;
        // update (dt) {}
    }
    endScreen.prototype.onLoad = function () {
        this.node.getChildByName("bgimg").getComponent(cc.Sprite).spriteFrame = globalVariables_1.default.Instance.mainBg;
        console.log("showedScreen--wellDone");
        this.scheduleOnce(function () {
            console.log("gameEnded--true");
        }, 2);
    };
    endScreen.prototype.start = function () {
        if (globalVariables_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "bag" || globalVariables_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }
        this.node.getChildByName("jockey").getChildByName(globalVariables_1.default.Instance.jockeyName).active = true;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "podarEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "jaipuriaEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "tlcEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], endScreen.prototype, "supercubEnd", void 0);
    endScreen = __decorate([
        ccclass
    ], endScreen);
    return endScreen;
}(cc.Component));
exports.default = endScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcZW5kU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXVDQztRQXJDRyx3QkFBd0I7UUFFaEIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7UUE0QjNDLGlCQUFpQjtJQUNyQixDQUFDO0lBM0JHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMzRjthQUNJLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQ3JHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDOUY7YUFDSSxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6RjthQUNJLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFekcsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ2tCO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDa0I7SUFWMUIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXVDN0I7SUFBRCxnQkFBQztDQXZDRCxBQXVDQyxDQXZDc0MsRUFBRSxDQUFDLFNBQVMsR0F1Q2xEO2tCQXZDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZW5kU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgcG9kYXJFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgamFpcHVyaWFFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgdGxjRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHN1cGVyY3ViRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLm1haW5CZztcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0td2VsbERvbmVcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvZGFyRW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5qYWlwdXJpYUVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy50bGNFbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdXBlcmN1YkVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvY2tleVwiKS5nZXRDaGlsZEJ5TmFtZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26a7fGjaTVL/ZE/X7RED3YG', 'GamePlay');
// Game/Painting_template/Script/GamePlay/GamePlay.ts

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
var CommonFun_1 = require("../Common/CommonFun");
var Constant_1 = require("../Common/Constant");
var globalVariables_1 = require("../globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawingData = /** @class */ (function () {
    function DrawingData() {
        this.DrawingDataPrefab = null;
    }
    __decorate([
        property({ type: cc.Prefab, visible: true, tooltip: "DrawingDataPrefab" })
    ], DrawingData.prototype, "DrawingDataPrefab", void 0);
    DrawingData = __decorate([
        ccclass("DrawingData")
    ], DrawingData);
    return DrawingData;
}());
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DrawingDataArray = [];
        _this.clickAud = null;
        _this.currentDrawing = null;
        _this.questionNode = null;
        _this.hand = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        // @property(String)
        _this.questions = [''];
        // @property(cc.SpriteFrame)
        _this.questionImage = [];
        _this.pictureImage = [];
        // @property(cc.AudioClip)
        _this.question_audios = [];
        _this.reiteration_Audio = [];
        _this.initialVO = null;
        _this.persistentScrollNode = null;
        _this.persistentScrollScript = null;
        _this.DrawingTableClassRef = null;
        _this.overAllData = [];
        _this.currentLevel = 0;
        _this.totalLevels = 0;
        _this.Ypos = 0;
        _this.Qvoplay = [];
        _this.InitialQvo = [];
        _this.count = 0;
        return _this;
    }
    GamePlay_1 = GamePlay;
    GamePlay.prototype.onLoad = function () {
        GamePlay_1.instance = this;
    };
    Object.defineProperty(GamePlay, "Instance", {
        get: function () {
            return GamePlay_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    GamePlay.prototype.start = function () {
    };
    GamePlay.prototype.LoadJsonData = function () {
        var _this = this;
        this.totalLevels = globalVariables_1.default.Instance.questions.length;
        var _loop_1 = function (i) {
            var questionData = globalVariables_1.default.Instance.questions[i];
            this_1.questions[i] = questionData.questionText;
            if (globalVariables_1.default.Instance.isDemoGame) {
                cc.loader.load(questionData.questionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.questionImage[i] = spriteFrame;
                });
                cc.loader.load(questionData.questionAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.question_audios[i] = audioClip;
                });
                cc.loader.load(questionData.pictureImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.pictureImage[i] = spriteFrame;
                });
                cc.loader.load(questionData.correctAudioName, function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio:", err);
                        return;
                    }
                    _this.reiteration_Audio[i] = audioClip;
                });
            }
            else {
                this_1.loadSpriteFrame(questionData.questionImageName, function (spriteFrame) {
                    _this.questionImage[i] = spriteFrame;
                });
                this_1.loadAudioClip(questionData.questionAudioName, function (audioClip) {
                    _this.question_audios[i] = audioClip;
                });
                this_1.loadSpriteFrame(questionData.pictureImageName, function (spriteFrame) {
                    _this.pictureImage[i] = spriteFrame;
                });
                this_1.loadAudioClip(questionData.correctAudioName, function (audioClip) {
                    _this.reiteration_Audio[i] = audioClip;
                });
            }
        };
        var this_1 = this;
        // console.log("totalLevels--" + this.totalLevels);
        for (var i = 0; i < this.totalLevels; i++) {
            _loop_1(i);
        }
        if (globalVariables_1.default.Instance.jockeyName == "Podar") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.podar_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "tlc") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.tlc_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "supercub") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.supercub_font;
        }
        else if (globalVariables_1.default.Instance.jockeyName == "bag" || globalVariables_1.default.Instance.jockeyName == "cryon") {
            this.questionNode.children[0].getComponent(cc.Label).font = this.jaipuria_font;
        }
    };
    GamePlay.prototype.StartGame = function () {
        var _this = this;
        this.LoadJsonData();
        this.questionNode.setPosition(-60, this.questionNode.y);
        this.Ypos = this.questionNode.getPosition().y;
        this.questionNode.setPosition(-60, 1800);
        this.scheduleOnce(function () {
            _this.initialVO = globalVariables_1.default.Instance.initialVO;
            if (_this.InitialQvo[0]) {
                cc.audioEngine.playEffect(_this.InitialQvo[0], false);
                _this.scheduleOnce(function () {
                    _this.checkNextLevel();
                }, _this.InitialQvo[0].duration);
            }
            else {
                _this.scheduleOnce(function () {
                    _this.checkNextLevel();
                }, 0.2);
            }
            _this.addDrawing();
            _this.node.getChildByName("image").setPosition(_this.node.getChildByName("image").getPosition().x, 138);
            _this.hand.setPosition(_this.node.getChildByName("backButton").getPosition().x + 100, _this.node.getChildByName("backButton").getPosition().y);
            _this.hand.opacity = 0;
            _this.node.getChildByName("backButton").getComponent(cc.Button).interactable = false;
        }, 1);
    };
    // update (dt) {}
    GamePlay.prototype.addDrawing = function () {
        var _this = this;
        this.currentDrawing = cc.instantiate(this.DrawingDataArray[CommonFun_1.default.instance.currentLvl].DrawingDataPrefab);
        this.node.addChild(this.currentDrawing);
        this.currentDrawing.setPosition(new cc.Vec2(CommonFun_1.default.instance.convertXPos(cc.winSize.width * 0.45, this.node), CommonFun_1.default.instance.convertYPos(cc.winSize.height * 0.5, this.node)));
        this.currentDrawing.setPosition(this.currentDrawing.getPosition().x + 50, this.currentDrawing.getPosition().y - 50);
        // console.log("pos = ", this.currentDrawing.getPosition().x);
        this.DrawingTableClassRef = CommonFun_1.default.instance.getDrawingTableClassRef(this.currentDrawing);
        if (this.currentLevel > 0) {
            this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.pictureImage[this.currentLevel - 1];
        }
        // else {
        //     this.currentDrawing.getChildByName("splash").getComponent(cc.Sprite).spriteFrame = this.questionImage[0];
        // }
        this.DrawingTableClassRef.initTouch();
        this.DrawingTableClassRef.initialiseRef(this);
        setTimeout(function () {
            var data = Constant_1.Constant.getLevelData(CommonFun_1.default.instance.currentLvl);
            _this.DrawingTableClassRef.drawData(data);
        }, 10);
    };
    GamePlay.prototype.saveData = function () {
        this.overAllData = [];
        this.overAllData = this.DrawingTableClassRef.overAllData;
        //new
        this.overAllData = this.DrawingTableClassRef.drawingDataArray;
        //new
        Constant_1.Constant.SaveLevelData(CommonFun_1.default.instance.currentLvl, this.overAllData);
        this.hand.opacity = 255;
    };
    GamePlay.prototype.onBackClicked = function () {
        GamePlay_1.instance.count++;
        // console.log("levelComplete--" + (CommonFun.instance.currentLvl + 1));
        cc.audioEngine.playEffect(this.clickAud, false);
        // console.log("gameExit--true");
        // this.persistentScrollNode.getChildByName("base").active = false;
        // this.saveData();
        // cc.director.loadScene("LevelSelection");
        this.checkNextLevel();
    };
    GamePlay.prototype.OnExitClicked = function () {
        cc.audioEngine.playEffect(this.clickAud, false);
        console.log("gameExit--true");
    };
    GamePlay.prototype.checkNextLevel = function () {
        var _this = this;
        var duration = 0;
        if (this.currentLevel != 0) {
            cc.audioEngine.playEffect(this.reiteration_Audio[this.currentLevel - 1], false);
            duration = this.reiteration_Audio[this.currentLevel - 1].duration;
            console.log("correctAnswer--" + (this.currentLevel));
            console.log("levelComplete--" + (this.currentLevel));
        }
        this.hand.opacity = 0;
        this.node.getChildByName("backButton").getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            cc.tween(_this.node.getChildByName("image")).to(0.5, { opacity: 0 }, { easing: "sineInOut" })
                .to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(_this.node.getChildByName("image")).to(0.5, { scale: 0 }, { easing: "sineInOut" })
                .to(0.5, { scale: 0.75 }, { easing: "sineInOut" }).start();
            cc.tween(_this.questionNode).to(0.5, { y: _this.Ypos }, { easing: "sineInOut" }).start();
            if (_this.currentLevel < _this.totalLevels) {
                console.log("levelStarted--" + (_this.currentLevel + 1));
                cc.audioEngine.stopAllEffects();
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.question_audios[_this.currentLevel], false);
                    _this.node.getChildByName("image").getComponent(cc.Sprite).spriteFrame = _this.questionImage[_this.currentLevel];
                    _this.currentLevel++;
                    _this.addDrawing();
                }, 0.5);
                _this.questionNode.children[0].getComponent(cc.Label).string = _this.questions[_this.currentLevel];
            }
            else {
                _this.node.getChildByName("image").active = false;
                _this.questionNode.getParent().active = false;
                cc.director.loadScene("gameEnded");
            }
        }, duration);
    };
    GamePlay.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    GamePlay.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, audioClip) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(audioClip);
        });
    };
    GamePlay.prototype.onSlideDraged = function (ref) {
        // let progress = ref.progress*10;
        // // progress = parseInt(progress.toString());
        // // 10% of 500 100-200 150
        // let min = Constant.ToolsTagSize[this.currentPensilSelection].MIN;
        // let max = Constant.ToolsTagSize[this.currentPensilSelection].MAX;
        // let val = Constant.getCenterVal(min, max, 0, 10, progress);
        // val = parseInt(val.toString());
        // ref.node.getParent().getChildByName("val").getComponent(cc.Label).string = val;
        // Constant.CurrentToolsTagSize[this.currentPensilSelection] = val;
    };
    GamePlay.prototype.playQuestionsound = function () {
        var _this = this;
        this.node.getChildByName("Questionpanel").getChildByName("vo").getComponent(cc.Button).interactable = false;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.Qvoplay[this.count], false);
        this.scheduleOnce(function () {
            _this.node.getChildByName("Questionpanel").getChildByName("vo").getComponent(cc.Button).interactable = true;
        }, this.Qvoplay[this.count].duration + 0.1);
    };
    var GamePlay_1;
    GamePlay.instance = null;
    __decorate([
        property(DrawingData)
    ], GamePlay.prototype, "DrawingDataArray", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "clickAud", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "questionNode", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], GamePlay.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "Qvoplay", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "InitialQvo", void 0);
    GamePlay = GamePlay_1 = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXEdhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlEQUE0QztBQUM1QywrQ0FBOEM7QUFFOUMsc0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxzQkFBaUIsR0FBYyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQURHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzswREFDdkM7SUFGbEMsV0FBVztRQURoQixPQUFPLENBQUMsYUFBYSxDQUFDO09BQ2pCLFdBQVcsQ0FHaEI7SUFBRCxrQkFBQztDQUhELEFBR0MsSUFBQTtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc1NDO1FBcFNHLHNCQUFnQixHQUFrQixFQUFFLENBQUM7UUFFckMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFFOUIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFHdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdiLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDdEMsb0JBQW9CO1FBQ3BCLGVBQVMsR0FBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLDRCQUE0QjtRQUM1QixtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFFckMsa0JBQVksR0FBcUIsRUFBRSxDQUFDO1FBQ3BDLDBCQUEwQjtRQUMxQixxQkFBZSxHQUFtQixFQUFFLENBQUM7UUFFckMsdUJBQWlCLEdBQW1CLEVBQUUsQ0FBQztRQUV2QyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsNEJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBRTlCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVULGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFHekIsYUFBTyxHQUFtQixFQUFFLENBQUM7UUFFN0IsZ0JBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBcVB0QixDQUFDO2lCQXRTb0IsUUFBUTtJQW1EekIseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBVyxvQkFBUTthQUFuQjtZQUNJLE9BQU8sVUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUM1QixDQUFDOzs7T0FBQTtJQUVELHdCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUFBLGlCQXNFQztRQXJFRyxJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0NBRXBELENBQUM7WUFDTixJQUFJLFlBQVksR0FBRyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsT0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUc5QyxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDckMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87b0JBQ3hELElBQUksR0FBRyxFQUFFO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzVDLE9BQU87cUJBQ1Y7b0JBQ0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsR0FBRyxFQUFFLFNBQVM7b0JBQzFELElBQUksR0FBRyxFQUFFO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzVDLE9BQU87cUJBQ1Y7b0JBQ0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPO29CQUN2RCxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPO3FCQUNWO29CQUNELElBQU0sV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTO29CQUN6RCxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QyxPQUFPO3FCQUNWO29CQUNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7Z0JBQzFDLENBQUMsQ0FDQSxDQUFDO2FBRUw7aUJBQ0k7Z0JBQ0QsT0FBSyxlQUFlLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsV0FBVztvQkFDN0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQUssYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLFNBQVM7b0JBQ3pELEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFLLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxXQUFXO29CQUM1RCxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBSyxhQUFhLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsU0FBUztvQkFDeEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLENBQUM7YUFDTjs7O1FBckRMLG1EQUFtRDtRQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7b0JBQWhDLENBQUM7U0FxRFQ7UUFFRCxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUMvRTthQUNJLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdFO2FBQ0ksSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ3hELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbEY7YUFDSSxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUNyRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ2xGO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFBQSxpQkEwQkM7UUF6QkcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFNBQVMsR0FBRyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDcEQsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7aUJBQ0k7Z0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNYO1lBQ0QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFdEcsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1SSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3hGLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFHRCxpQkFBaUI7SUFFakIsNkJBQVUsR0FBVjtRQUFBLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckwsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BILDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVGLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9IO1FBQ0QsU0FBUztRQUNULGdIQUFnSDtRQUNoSCxJQUFJO1FBQ0osSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsVUFBVSxDQUFDO1lBQ1AsSUFBSSxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEUsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztRQUN6RCxLQUFLO1FBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsS0FBSztRQUNMLG1CQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksVUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQix3RUFBd0U7UUFDeEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxpQ0FBaUM7UUFDakMsbUVBQW1FO1FBQ25FLG1CQUFtQjtRQUNuQiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFBQSxpQkFtQ0M7UUFsQ0csSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEYsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUVwRixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7aUJBQ3ZGLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDckYsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9ELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFdkYsSUFBSSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzFFLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM5RyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ25HO2lCQUNJO2dCQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDN0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdEM7UUFDTCxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsU0FBaUIsRUFBRSxRQUErQztRQUM5RSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVztZQUN0RSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxRQUE2QztRQUMxRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsU0FBUztZQUNsRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCxnQ0FBYSxHQUFiLFVBQWMsR0FBRztRQUViLGtDQUFrQztRQUNsQywrQ0FBK0M7UUFDL0MsNEJBQTRCO1FBQzVCLG9FQUFvRTtRQUNwRSxvRUFBb0U7UUFDcEUsOERBQThEO1FBQzlELGtDQUFrQztRQUVsQyxrRkFBa0Y7UUFFbEYsbUVBQW1FO0lBQ3ZFLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUUvRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O0lBeFBjLGlCQUFRLEdBQWEsSUFBSSxDQUFDO0lBMUN6QztRQURDLFFBQVEsQ0FBQyxXQUFXLENBQUM7c0RBQ2U7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDTztJQUs5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQTBCdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNTO0lBaERmLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzUzVCO0lBQUQsZUFBQztDQXRTRCxBQXNTQyxDQXRTcUMsRUFBRSxDQUFDLFNBQVMsR0FzU2pEO2tCQXRTb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25GdW5cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0YW50XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0NvbW1vbi9HbG9iYWxcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmltcG9ydCBQZXJzaXN0ZW50U2Nyb2xsIGZyb20gXCIuL1BlcnNpc3RlbnQvUGVyc2lzdGVudFNjcm9sbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiRHJhd2luZ0RhdGFcIilcclxuY2xhc3MgRHJhd2luZ0RhdGEge1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIkRyYXdpbmdEYXRhUHJlZmFiXCIgfSlcclxuICAgIERyYXdpbmdEYXRhUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoRHJhd2luZ0RhdGEpXHJcbiAgICBEcmF3aW5nRGF0YUFycmF5OiBEcmF3aW5nRGF0YVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY2xpY2tBdWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgY3VycmVudERyYXdpbmcgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcXVlc3Rpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIC8vIEBwcm9wZXJ0eShTdHJpbmcpXHJcbiAgICBxdWVzdGlvbnM6IHN0cmluZ1tdID0gWycnXTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHF1ZXN0aW9uSW1hZ2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwaWN0dXJlSW1hZ2U6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBxdWVzdGlvbl9hdWRpb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgcmVpdGVyYXRpb25fQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgaW5pdGlhbFZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHBlcnNpc3RlbnRTY3JvbGxOb2RlID0gbnVsbDtcclxuICAgIHBlcnNpc3RlbnRTY3JvbGxTY3JpcHQgPSBudWxsO1xyXG5cclxuICAgIERyYXdpbmdUYWJsZUNsYXNzUmVmID0gbnVsbDtcclxuICAgIG92ZXJBbGxEYXRhID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgWXBvczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgUXZvcGxheTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBJbml0aWFsUXZvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG4gICAgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVQbGF5Lmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBHYW1lUGxheS5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIExvYWRKc29uRGF0YSgpIHtcclxuICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3RhbExldmVscy0tXCIgKyB0aGlzLnRvdGFsTGV2ZWxzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxMZXZlbHM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb25EYXRhID0gZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLnF1ZXN0aW9uc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0gPSBxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkltYWdlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW86XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9hdWRpb3NbaV0gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHF1ZXN0aW9uRGF0YS5waWN0dXJlSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWN0dXJlSW1hZ2VbaV0gPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLmNvcnJlY3RBdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVpdGVyYXRpb25fQXVkaW9baV0gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkltYWdlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChxdWVzdGlvbkRhdGEucXVlc3Rpb25BdWRpb05hbWUsIChhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX2F1ZGlvc1tpXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUocXVlc3Rpb25EYXRhLnBpY3R1cmVJbWFnZU5hbWUsIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGljdHVyZUltYWdlW2ldID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChxdWVzdGlvbkRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVpdGVyYXRpb25fQXVkaW9baV0gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Ob2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5Mb2FkSnNvbkRhdGEoKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5zZXRQb3NpdGlvbigtNjAsIHRoaXMucXVlc3Rpb25Ob2RlLnkpO1xyXG4gICAgICAgIHRoaXMuWXBvcyA9IHRoaXMucXVlc3Rpb25Ob2RlLmdldFBvc2l0aW9uKCkueTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5zZXRQb3NpdGlvbigtNjAsIDE4MDApO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVk8gPSBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuaW5pdGlhbFZPO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Jbml0aWFsUXZvWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuSW5pdGlhbFF2b1swXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOZXh0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuSW5pdGlhbFF2b1swXS5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja05leHRMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFkZERyYXdpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW1hZ2VcIikuZ2V0UG9zaXRpb24oKS54LCAxMzgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oYW5kLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tCdXR0b25cIikuZ2V0UG9zaXRpb24oKS54ICsgMTAwLCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrQnV0dG9uXCIpLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZC5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tCdXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgYWRkRHJhd2luZygpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5EcmF3aW5nRGF0YUFycmF5W0NvbW1vbkZ1bi5pbnN0YW5jZS5jdXJyZW50THZsXS5EcmF3aW5nRGF0YVByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuY3VycmVudERyYXdpbmcpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoQ29tbW9uRnVuLmluc3RhbmNlLmNvbnZlcnRYUG9zKGNjLndpblNpemUud2lkdGggKiAwLjQ1LCB0aGlzLm5vZGUpLCBDb21tb25GdW4uaW5zdGFuY2UuY29udmVydFlQb3MoY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjUsIHRoaXMubm9kZSkpKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREcmF3aW5nLnNldFBvc2l0aW9uKHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS54ICsgNTAsIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS55IC0gNTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zID0gXCIsIHRoaXMuY3VycmVudERyYXdpbmcuZ2V0UG9zaXRpb24oKS54KTtcclxuICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdUYWJsZUNsYXNzUmVmKHRoaXMuY3VycmVudERyYXdpbmcpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhd2luZy5nZXRDaGlsZEJ5TmFtZShcInNwbGFzaFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGljdHVyZUltYWdlW3RoaXMuY3VycmVudExldmVsIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnREcmF3aW5nLmdldENoaWxkQnlOYW1lKFwic3BsYXNoXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5xdWVzdGlvbkltYWdlWzBdO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmluaXRUb3VjaCgpO1xyXG4gICAgICAgIHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBDb25zdGFudC5nZXRMZXZlbERhdGEoQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwpO1xyXG4gICAgICAgICAgICB0aGlzLkRyYXdpbmdUYWJsZUNsYXNzUmVmLmRyYXdEYXRhKGRhdGEpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YSgpIHtcclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5vdmVyQWxsRGF0YSA9IHRoaXMuRHJhd2luZ1RhYmxlQ2xhc3NSZWYub3ZlckFsbERhdGE7XHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICB0aGlzLm92ZXJBbGxEYXRhID0gdGhpcy5EcmF3aW5nVGFibGVDbGFzc1JlZi5kcmF3aW5nRGF0YUFycmF5O1xyXG4gICAgICAgIC8vbmV3XHJcbiAgICAgICAgQ29uc3RhbnQuU2F2ZUxldmVsRGF0YShDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCwgdGhpcy5vdmVyQWxsRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZC5vcGFjaXR5ID0gMjU1O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja0NsaWNrZWQoKSB7XHJcbiAgICAgICAgR2FtZVBsYXkuaW5zdGFuY2UuY291bnQrKztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsQ29tcGxldGUtLVwiICsgKENvbW1vbkZ1bi5pbnN0YW5jZS5jdXJyZW50THZsICsgMSkpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZCwgZmFsc2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICAgICAgLy8gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhc2VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxldmVsU2VsZWN0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tOZXh0TGV2ZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkV4aXRDbGlja2VkKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZCwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tOZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgbGV0IGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1t0aGlzLmN1cnJlbnRMZXZlbCAtIDFdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5yZWl0ZXJhdGlvbl9BdWRpb1t0aGlzLmN1cnJlbnRMZXZlbCAtIDFdLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgKHRoaXMuY3VycmVudExldmVsKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArICh0aGlzLmN1cnJlbnRMZXZlbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja0J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpKS50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNzUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5xdWVzdGlvbk5vZGUpLnRvKDAuNSwgeyB5OiB0aGlzLllwb3MgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA8IHRoaXMudG90YWxMZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArICh0aGlzLmN1cnJlbnRMZXZlbCArIDEpKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnF1ZXN0aW9uX2F1ZGlvc1t0aGlzLmN1cnJlbnRMZXZlbF0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWFnZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucXVlc3Rpb25JbWFnZVt0aGlzLmN1cnJlbnRMZXZlbF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZERyYXdpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uTm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucXVlc3Rpb25zW3RoaXMuY3VycmVudExldmVsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImltYWdlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk5vZGUuZ2V0UGFyZW50KCkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBkdXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhhdWRpb0NsaXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblNsaWRlRHJhZ2VkKHJlZikge1xyXG5cclxuICAgICAgICAvLyBsZXQgcHJvZ3Jlc3MgPSByZWYucHJvZ3Jlc3MqMTA7XHJcbiAgICAgICAgLy8gLy8gcHJvZ3Jlc3MgPSBwYXJzZUludChwcm9ncmVzcy50b1N0cmluZygpKTtcclxuICAgICAgICAvLyAvLyAxMCUgb2YgNTAwIDEwMC0yMDAgMTUwXHJcbiAgICAgICAgLy8gbGV0IG1pbiA9IENvbnN0YW50LlRvb2xzVGFnU2l6ZVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dLk1JTjtcclxuICAgICAgICAvLyBsZXQgbWF4ID0gQ29uc3RhbnQuVG9vbHNUYWdTaXplW3RoaXMuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0uTUFYO1xyXG4gICAgICAgIC8vIGxldCB2YWwgPSBDb25zdGFudC5nZXRDZW50ZXJWYWwobWluLCBtYXgsIDAsIDEwLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdmFsID0gcGFyc2VJbnQodmFsLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAvLyByZWYubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHZhbDtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dID0gdmFsO1xyXG4gICAgfVxyXG4gICAgcGxheVF1ZXN0aW9uc291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25wYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInZvXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlF2b3BsYXlbdGhpcy5jb3VudF0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9ucGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ2b1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LCB0aGlzLlF2b3BsYXlbdGhpcy5jb3VudF0uZHVyYXRpb24gKyAwLjEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/DrawingTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a84dcApqB9OvZnd34MZQ78e', 'DrawingTable');
// Game/Painting_template/Script/GamePlay/DrawingTable.ts

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
var CommonFun_1 = require("../Common/CommonFun");
var Constant_1 = require("../Common/Constant");
var Global_1 = require("../Common/Global");
var PersistentScroll_1 = require("./Persistent/PersistentScroll");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawingSplitData = /** @class */ (function () {
    function DrawingSplitData() {
        this.DrawingSplitData = null;
    }
    __decorate([
        property({ type: cc.Node, visible: true, tooltip: "DrawingSplitData" })
    ], DrawingSplitData.prototype, "DrawingSplitData", void 0);
    DrawingSplitData = __decorate([
        ccclass("DrawingSplitData")
    ], DrawingSplitData);
    return DrawingSplitData;
}());
var DrawingTable = /** @class */ (function (_super) {
    __extends(DrawingTable, _super);
    function DrawingTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DrawingSplitDataArray = [];
        _this.currentChild = null;
        _this.currentMask = null;
        _this.parentRef = null;
        _this.parentNode = null;
        _this.persistentScrollNode = null;
        _this.persistentScrollScript = null;
        _this.prevTouch = new cc.Vec2;
        _this.currentstensil = [];
        // draggedstensil = [];
        // pointposition = [];
        _this.overAllData = [];
        _this.currentData = {
            currentTool: 0,
            drawArray: [],
            currentChildIndex: 0,
            currentPatternFrameIndex: 0,
            currentTileIndex: 0
        };
        _this.drawingDataArray = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    DrawingTable.prototype.onLoad = function () {
    };
    DrawingTable.prototype.start = function () {
        this.persistentScrollScript = Global_1.default.instance.PersistentScrollInstance;
        this.persistentScrollNode = Global_1.default.instance.PersistentScrollInstance.node;
        this.persistentScrollScript.initialiseDrawing(this);
    };
    DrawingTable.prototype.initTouch = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
    };
    // update (dt) {}
    DrawingTable.prototype.initialiseRef = function (ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
        for (var i = 0; i < this.DrawingSplitDataArray.length; i++) {
            this.drawingDataArray.push([]);
        }
    };
    DrawingTable.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        for (var i = 0; i < this.DrawingSplitDataArray.length; i++) {
            var element = this.DrawingSplitDataArray[i].DrawingSplitData;
            var collider = this.getPolygonData(element);
            if (cc.Intersection.pointInPolygon(point, collider.world.points)) {
                this.prevTouch = point;
                this.currentData = {
                    currentTool: 0,
                    drawArray: [],
                    currentChildIndex: 0,
                    currentPatternFrameIndex: 0,
                    currentTileIndex: 0
                };
                // this.draggedstensil = [];
                // this.pointposition = []
                this.currentData.currentChildIndex = i;
                this.currentData.currentTool = this.persistentScrollScript.currentPensilSelection;
                this.currentMask = null;
                this.currentChild = element;
                this.checkMasking();
                this._addCircle(point);
                return;
            }
        }
    };
    DrawingTable.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    DrawingTable.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        PersistentScroll_1.default.Instance.hand.opacity = 255;
        PersistentScroll_1.default.Instance.tickBtn.getComponent(cc.Button).interactable = true;
        this._addCircle(point);
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH ||
            this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PATTERN ||
            this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.SPARKEL)
            cc.audioEngine.playEffect(PersistentScroll_1.default.Instance.glowAud, false);
        // if(this.persistentScrollScript.currentPensilSelection == Constant.ToolsTag.PAINT)
        //     this.draggedstensil.push(this.currentMask);
        // this.currentstensil.push(this.draggedstensil);
        //new
        var myData = {
            currentTool: this.currentData.currentTool,
            currentPatternFrameIndex: this.currentData.currentPatternFrameIndex,
            currentTileIndex: this.currentData.currentTileIndex,
            child: this.currentMask,
        };
        this.drawingDataArray[this.currentData.currentChildIndex].push(myData);
        //new
        // this.currentData.drawArray.push(this.pointposition);
        // this.overAllData.push(this.currentData);
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER)
            return;
        var point1 = event.touch.getLocation();
        point1 = this.persistentScrollNode.convertToNodeSpaceAR(point1);
        this.persistentScrollScript.particleEffect.node.setPosition(point1);
        this.persistentScrollScript.particleEffect.resetSystem();
    };
    DrawingTable.prototype._addCircle = function (point) {
        var pos1 = new cc.Vec2(this.prevTouch.x - point.x, this.prevTouch.y - point.y);
        var forwardVector = pos1.normalize();
        var splitVal = 5;
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL)
            splitVal = 2;
        var distance = splitVal;
        var Distance = CommonFun_1.default.instance.getDistance(this.prevTouch.x, this.prevTouch.y, point.x, point.y);
        var val = Distance / splitVal;
        // this.pointposition.push(new cc.Vec2(this.prevTouch.x,this.prevTouch.y));
        for (var i = 0; i <= val; i++) {
            if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.SPARKEL
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PATTERN
                || this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER) {
                var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                stencil.fill();
                // this.draggedstensil.push(stencil);
                if (this.persistentScrollScript.isDualSymetryClicked) {
                    var stencil1 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil1.circle(this.prevTouch.x * -1, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil1.fill();
                    // this.draggedstensil.push(stencil1);
                }
                else if (this.persistentScrollScript.isQuadSymetryClicked) {
                    var stencil1 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil1.circle(this.prevTouch.x * -1, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil1.fill();
                    // this.draggedstensil.push(stencil1);
                    var stencil2 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil2.circle(this.prevTouch.x * -1, this.prevTouch.y * -1, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil2.fill();
                    // this.draggedstensil.push(stencil2);
                    var stencil3 = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil3.circle(this.prevTouch.x, this.prevTouch.y * -1, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil3.fill();
                    // this.draggedstensil.push(stencil3);
                }
            }
            if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.BRUSH2) {
                var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                stencil.rect(this.prevTouch.x - (Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] / 2), this.prevTouch.y - (Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]), Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] / 2, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection] * 2);
                stencil.fill();
                // this.draggedstensil.push(stencil);
            }
            if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.SPRAY) {
                for (var i_1 = 0; i_1 < 5; i_1++) {
                    var pt = Constant_1.Constant.circlerandPoint(this.prevTouch.x, this.prevTouch.y, 20);
                    var stencil = this.currentMask.getComponent(cc.Mask)._graphics;
                    stencil.circle(pt.x, pt.y, Constant_1.Constant.CurrentToolsTagSize[this.persistentScrollScript.currentPensilSelection]);
                    stencil.fill();
                    // this.draggedstensil.push(stencil);
                }
            }
            this.prevTouch = new cc.Vec2(this.prevTouch.x + (forwardVector.x * distance) * -1, this.prevTouch.y + (forwardVector.y * distance) * -1);
        }
        this.prevTouch = point;
    };
    DrawingTable.prototype.checkMasking = function () {
        var currentTileIndex = 0;
        if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.ERASER)
            currentTileIndex = 0;
        else
            currentTileIndex = this.persistentScrollScript.currentTileIndex;
        this.currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[currentTileIndex].DrawingmaskPrefab);
        this.currentChild.addChild(this.currentMask);
        var DrawingmaskClassRef = CommonFun_1.default.instance.getDrawingmaskClassRef(this.currentMask);
        DrawingmaskClassRef.initialiseRef(this);
        DrawingmaskClassRef.initialisePatternData(this.persistentScrollScript);
        this.currentData.currentPatternFrameIndex = this.persistentScrollScript.currentPatternFrameIndex;
        this.currentData.currentTileIndex = currentTileIndex;
        var data = {
            child: this.currentMask,
            parent: this.currentChild
        };
        this.currentstensil.push(data);
    };
    DrawingTable.prototype.getPolygonData = function (element) {
        return element.getComponent(cc.PolygonCollider);
    };
    DrawingTable.prototype.drawData = function (dataArray) {
        if (dataArray == null)
            return;
        this.drawingDataArray = dataArray;
        //new
        for (var i = 0; i < dataArray.length; i++) {
            var element = dataArray[i];
            if (element.length > 0) {
                var currentChild = this.DrawingSplitDataArray[i].DrawingSplitData;
                var currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].DrawingmaskPrefab);
                currentChild.addChild(currentMask);
                var DrawingmaskClassRef = CommonFun_1.default.instance.getDrawingmaskClassRef(currentMask);
                DrawingmaskClassRef.initialiseRef(this);
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.COLOR && element[0].currentTool != Constant_1.Constant.ToolsTag.ERASER)
                    currentMask.getChildByName("img").color = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].ColorFrameListArray[element[0].currentPatternFrameIndex].color;
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
                    currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].PatternFrameListArray[element[0].currentPatternFrameIndex].PatternFrame;
                if (element[0].currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
                    currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element[0].currentTileIndex].SparkleFrameListArray[element[0].currentPatternFrameIndex].SparkleFrame;
                currentMask.getComponent(cc.Mask).inverted = true;
            }
        }
        return;
        //new
        this.overAllData = dataArray;
        for (var j = 0; j < dataArray.length; j++) {
            var element = dataArray[j];
            var currentChild = this.DrawingSplitDataArray[element.currentChildIndex].DrawingSplitData;
            var currentMask = cc.instantiate(this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].DrawingmaskPrefab);
            currentChild.addChild(currentMask);
            var DrawingmaskClassRef = CommonFun_1.default.instance.getDrawingmaskClassRef(currentMask);
            DrawingmaskClassRef.initialiseRef(this);
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR && element.currentTool != Constant_1.Constant.ToolsTag.ERASER)
                currentMask.getChildByName("img").color = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].ColorFrameListArray[element.currentPatternFrameIndex].color;
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].PatternFrameListArray[element.currentPatternFrameIndex].PatternFrame;
            if (element.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
                currentMask.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.persistentScrollScript.TileSelectionListArray[element.currentTileIndex].SparkleFrameListArray[element.currentPatternFrameIndex].SparkleFrame;
            if (element.currentTileIndex == Constant_1.Constant.ToolsTag.PAINT)
                currentMask.getComponent(cc.Mask).inverted = true;
            if (element.currentTool == Constant_1.Constant.ToolsTag.PAINT)
                currentMask.getComponent(cc.Mask).inverted = true;
            for (var i = 0; i < element.drawArray.length; i++) {
                for (var k = 0; k < element.drawArray[i].length; k++) {
                    if (k == 0) {
                        this.prevTouch = element.drawArray[i][k];
                    }
                    var pos1 = new cc.Vec2(this.prevTouch.x - element.drawArray[i][k].x, this.prevTouch.y - element.drawArray[i][k].y);
                    var forwardVector = pos1.normalize();
                    var splitVal = 5;
                    if (this.persistentScrollScript.currentPensilSelection == Constant_1.Constant.ToolsTag.PENCIL)
                        splitVal = 2;
                    var distance = splitVal;
                    var Distance = CommonFun_1.default.instance.getDistance(this.prevTouch.x, this.prevTouch.y, element.drawArray[i][k].x, element.drawArray[i][k].y);
                    var val = Distance / splitVal;
                    for (var i_2 = 0; i_2 <= val; i_2++) {
                        if (element.currentTool == Constant_1.Constant.ToolsTag.BRUSH
                            || element.currentTool == Constant_1.Constant.ToolsTag.PENCIL
                            || element.currentTool == Constant_1.Constant.ToolsTag.SPARKEL
                            || element.currentTool == Constant_1.Constant.ToolsTag.PATTERN
                            || element.currentTool == Constant_1.Constant.ToolsTag.ERASER) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant_1.Constant.ToolsTag.BRUSH2) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.rect(this.prevTouch.x - (Constant_1.Constant.CurrentToolsTagSize[element.currentTool] / 2), this.prevTouch.y - (Constant_1.Constant.CurrentToolsTagSize[element.currentTool]), Constant_1.Constant.CurrentToolsTagSize[element.currentTool] / 2, Constant_1.Constant.CurrentToolsTagSize[element.currentTool] * 2);
                            stencil.fill();
                        }
                        if (element.currentTool == Constant_1.Constant.ToolsTag.SPRAY) {
                            var stencil = currentMask.getComponent(cc.Mask)._graphics;
                            stencil.circle(this.prevTouch.x, this.prevTouch.y, Constant_1.Constant.CurrentToolsTagSize[element.currentTool]);
                            stencil.fill();
                        }
                        this.prevTouch = new cc.Vec2(this.prevTouch.x + (forwardVector.x * distance) * -1, this.prevTouch.y + (forwardVector.y * distance) * -1);
                    }
                    this.prevTouch = element.drawArray[i][k];
                }
            }
        }
    };
    __decorate([
        property(DrawingSplitData)
    ], DrawingTable.prototype, "DrawingSplitDataArray", void 0);
    DrawingTable = __decorate([
        ccclass
    ], DrawingTable);
    return DrawingTable;
}(cc.Component));
exports.default = DrawingTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXERyYXdpbmdUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpREFBNEM7QUFDNUMsK0NBQThDO0FBQzlDLDJDQUFzQztBQUV0QyxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVJLHFCQUFnQixHQUFZLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBREc7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzhEQUN2QztJQUYvQixnQkFBZ0I7UUFEckIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO09BQ3RCLGdCQUFnQixDQUdyQjtJQUFELHVCQUFDO0NBSEQsQUFHQyxJQUFBO0FBSUQ7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpWUM7UUE5WEcsMkJBQXFCLEdBQXVCLEVBQUUsQ0FBQztRQUUvQyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1Qiw0QkFBc0IsR0FBRyxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztRQUd4QixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFB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QUksRUFBRSxDQUFDO3lCQUNsQjt3QkFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3RDtvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVDO2FBQ0o7U0FHSjtJQUNMLENBQUM7SUE1WEQ7UUFEQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7K0RBQ29CO0lBSDlCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FpWWhDO0lBQUQsbUJBQUM7Q0FqWUQsQUFpWUMsQ0FqWXlDLEVBQUUsQ0FBQyxTQUFTLEdBaVlyRDtrQkFqWW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBEcmF3aW5nbWFzayBmcm9tIFwiLi9EcmF3aW5nbWFza1wiO1xyXG5pbXBvcnQgUGVyc2lzdGVudFNjcm9sbCBmcm9tIFwiLi9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkRyYXdpbmdTcGxpdERhdGFcIilcclxuY2xhc3MgRHJhd2luZ1NwbGl0RGF0YSB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB2aXNpYmxlOiB0cnVlLCB0b29sdGlwOiBcIkRyYXdpbmdTcGxpdERhdGFcIiB9KVxyXG4gICAgRHJhd2luZ1NwbGl0RGF0YTogY2MuTm9kZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nVGFibGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShEcmF3aW5nU3BsaXREYXRhKVxyXG4gICAgRHJhd2luZ1NwbGl0RGF0YUFycmF5OiBEcmF3aW5nU3BsaXREYXRhW10gPSBbXTtcclxuXHJcbiAgICBjdXJyZW50Q2hpbGQgPSBudWxsO1xyXG4gICAgY3VycmVudE1hc2sgPSBudWxsO1xyXG5cclxuICAgIHBhcmVudFJlZiA9IG51bGw7XHJcbiAgICBwYXJlbnROb2RlID0gbnVsbDtcclxuXHJcbiAgICBwZXJzaXN0ZW50U2Nyb2xsTm9kZSA9IG51bGw7XHJcbiAgICBwZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gbnVsbDtcclxuXHJcbiAgICBwcmV2VG91Y2ggPSBuZXcgY2MuVmVjMjtcclxuXHJcblxyXG4gICAgY3VycmVudHN0ZW5zaWwgPSBbXTtcclxuICAgIC8vIGRyYWdnZWRzdGVuc2lsID0gW107XHJcbiAgICAvLyBwb2ludHBvc2l0aW9uID0gW107XHJcblxyXG4gICAgb3ZlckFsbERhdGEgPSBbXTtcclxuICAgIGN1cnJlbnREYXRhID0ge1xyXG4gICAgICAgIGN1cnJlbnRUb29sOiAwLFxyXG4gICAgICAgIGRyYXdBcnJheTogW10sXHJcbiAgICAgICAgY3VycmVudENoaWxkSW5kZXg6IDAsXHJcbiAgICAgICAgY3VycmVudFBhdHRlcm5GcmFtZUluZGV4OiAwLFxyXG4gICAgICAgIGN1cnJlbnRUaWxlSW5kZXg6IDBcclxuICAgIH07XHJcblxyXG5cclxuICAgIGRyYXdpbmdEYXRhQXJyYXkgPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdCA9IEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsTm9kZSA9IEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuaW5pdGlhbGlzZURyYXdpbmcodGhpcyk7XHJcbiAgICB9XHJcbiAgICBpbml0VG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoQmVnaW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgaW5pdGlhbGlzZVJlZihQYXJlbnRSZWYpIHtcclxuICAgICAgICB0aGlzLnBhcmVudFJlZiA9IFBhcmVudFJlZjtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB0aGlzLnBhcmVudFJlZi5ub2RlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRHJhd2luZ1NwbGl0RGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheS5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hCZWdpbihldmVudCkge1xyXG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRHJhd2luZ1NwbGl0RGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtpXS5EcmF3aW5nU3BsaXREYXRhO1xyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXIgPSB0aGlzLmdldFBvbHlnb25EYXRhKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihwb2ludCwgY29sbGlkZXIud29ybGQucG9pbnRzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBwb2ludDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb29sOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENoaWxkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdHRlcm5GcmFtZUluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlSW5kZXg6IDBcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb2ludHBvc2l0aW9uID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRDaGlsZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudFRvb2wgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENoaWxkID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXNraW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoTW92ZWQoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgICAgICB0aGlzLl9hZGRDaXJjbGUocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS5oYW5kLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgUGVyc2lzdGVudFNjcm9sbC5JbnN0YW5jZS50aWNrQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZENpcmNsZShwb2ludCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIIHx8XHJcbiAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk4gfHxcclxuICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuU1BBUktFTClcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChQZXJzaXN0ZW50U2Nyb2xsLkluc3RhbmNlLmdsb3dBdWQsIGZhbHNlKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2godGhpcy5jdXJyZW50TWFzayk7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50c3RlbnNpbC5wdXNoKHRoaXMuZHJhZ2dlZHN0ZW5zaWwpO1xyXG4gICAgICAgIC8vbmV3XHJcbiAgICAgICAgbGV0IG15RGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFRvb2w6IHRoaXMuY3VycmVudERhdGEuY3VycmVudFRvb2wsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleDogdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50UGF0dGVybkZyYW1lSW5kZXgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlSW5kZXg6IHRoaXMuY3VycmVudERhdGEuY3VycmVudFRpbGVJbmRleCxcclxuICAgICAgICAgICAgY2hpbGQ6IHRoaXMuY3VycmVudE1hc2ssXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRyYXdpbmdEYXRhQXJyYXlbdGhpcy5jdXJyZW50RGF0YS5jdXJyZW50Q2hpbGRJbmRleF0ucHVzaChteURhdGEpO1xyXG4gICAgICAgIC8vbmV3XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudERhdGEuZHJhd0FycmF5LnB1c2godGhpcy5wb2ludHBvc2l0aW9uKTtcclxuICAgICAgICAvLyB0aGlzLm92ZXJBbGxEYXRhLnB1c2godGhpcy5jdXJyZW50RGF0YSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgcG9pbnQxID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludDEgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50MSk7XHJcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LnBhcnRpY2xlRWZmZWN0Lm5vZGUuc2V0UG9zaXRpb24ocG9pbnQxKTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQucGFydGljbGVFZmZlY3QucmVzZXRTeXN0ZW0oKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIF9hZGRDaXJjbGUocG9pbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIHBvczEgPSBuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54IC0gcG9pbnQueCwgdGhpcy5wcmV2VG91Y2gueSAtIHBvaW50LnkpO1xyXG4gICAgICAgIGxldCBmb3J3YXJkVmVjdG9yID0gcG9zMS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHNwbGl0VmFsID0gNTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb24gPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMKVxyXG4gICAgICAgICAgICBzcGxpdFZhbCA9IDI7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gc3BsaXRWYWw7XHJcblxyXG4gICAgICAgIGxldCBEaXN0YW5jZSA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREaXN0YW5jZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LCBwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgICBsZXQgdmFsID0gRGlzdGFuY2UgLyBzcGxpdFZhbDtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMucG9pbnRwb3NpdGlvbi5wdXNoKG5ldyBjYy5WZWMyKHRoaXMucHJldlRvdWNoLngsdGhpcy5wcmV2VG91Y2gueSkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWw7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkJSVVNIXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUxcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUxcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLlBBVFRFUk5cclxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICBzdGVuY2lsLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54LCB0aGlzLnByZXZUb3VjaC55LFxyXG4gICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuaXNEdWFsU3ltZXRyeUNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbDEgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbDEuY2lyY2xlKHRoaXMucHJldlRvdWNoLnggKiAtMSwgdGhpcy5wcmV2VG91Y2gueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwxLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmlzUXVhZFN5bWV0cnlDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwxID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwxLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54ICogLTEsIHRoaXMucHJldlRvdWNoLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsMS5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwyID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwyLmNpcmNsZSh0aGlzLnByZXZUb3VjaC54ICogLTEsIHRoaXMucHJldlRvdWNoLnkgKiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwyLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbDMgPSB0aGlzLmN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlbmNpbDMuY2lyY2xlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnkgKiAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwzLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5CUlVTSDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgc3RlbmNpbC5yZWN0KHRoaXMucHJldlRvdWNoLnggLSAoQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZUb3VjaC55IC0gKENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKSxcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW3RoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uXSAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVt0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbl0gKiAyKTtcclxuICAgICAgICAgICAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmFnZ2Vkc3RlbnNpbC5wdXNoKHN0ZW5jaWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHQgPSBDb25zdGFudC5jaXJjbGVyYW5kUG9pbnQodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSwgMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gdGhpcy5jdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKHB0LngsIHB0LnksIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQZW5zaWxTZWxlY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdnZWRzdGVuc2lsLnB1c2goc3RlbmNpbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gbmV3IGNjLlZlYzIodGhpcy5wcmV2VG91Y2gueCArIChmb3J3YXJkVmVjdG9yLnggKiBkaXN0YW5jZSkgKiAtMSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoLnkgKyAoZm9yd2FyZFZlY3Rvci55ICogZGlzdGFuY2UpICogLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZUb3VjaCA9IHBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTWFza2luZygpIHtcclxuICAgICAgICBsZXQgY3VycmVudFRpbGVJbmRleCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5jdXJyZW50UGVuc2lsU2VsZWN0aW9uID09IENvbnN0YW50LlRvb2xzVGFnLkVSQVNFUilcclxuICAgICAgICAgICAgY3VycmVudFRpbGVJbmRleCA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjdXJyZW50VGlsZUluZGV4ID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRUaWxlSW5kZXg7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtjdXJyZW50VGlsZUluZGV4XS5EcmF3aW5nbWFza1ByZWZhYik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hpbGQuYWRkQ2hpbGQodGhpcy5jdXJyZW50TWFzayk7XHJcblxyXG4gICAgICAgIGxldCBEcmF3aW5nbWFza0NsYXNzUmVmID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERyYXdpbmdtYXNrQ2xhc3NSZWYodGhpcy5jdXJyZW50TWFzayk7XHJcbiAgICAgICAgRHJhd2luZ21hc2tDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVBhdHRlcm5EYXRhKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGEuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4ID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleDtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhLmN1cnJlbnRUaWxlSW5kZXggPSBjdXJyZW50VGlsZUluZGV4O1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY2hpbGQ6IHRoaXMuY3VycmVudE1hc2ssXHJcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jdXJyZW50Q2hpbGRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50c3RlbnNpbC5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQb2x5Z29uRGF0YShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0RhdGEoZGF0YUFycmF5KSB7XHJcbiAgICAgICAgaWYgKGRhdGFBcnJheSA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd2luZ0RhdGFBcnJheSA9IGRhdGFBcnJheTtcclxuXHJcbiAgICAgICAgLy9uZXdcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YUFycmF5W2ldO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2hpbGQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtpXS5EcmF3aW5nU3BsaXREYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TWFzayA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleF0uRHJhd2luZ21hc2tQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkLmFkZENoaWxkKGN1cnJlbnRNYXNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nbWFza0NsYXNzUmVmKGN1cnJlbnRNYXNrKTtcclxuICAgICAgICAgICAgICAgIERyYXdpbmdtYXNrQ2xhc3NSZWYuaW5pdGlhbGlzZVJlZih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SICYmIGVsZW1lbnRbMF0uY3VycmVudFRvb2wgIT0gQ29uc3RhbnQuVG9vbHNUYWcuRVJBU0VSKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmNvbG9yID0gdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4XS5Db2xvckZyYW1lTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFswXS5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuVGlsZVNlbGVjdGlvbkxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXhdLlBhdHRlcm5GcmFtZUxpc3RBcnJheVtlbGVtZW50WzBdLmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uUGF0dGVybkZyYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WzBdLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2VsZW1lbnRbMF0uY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLmludmVydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy9uZXdcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMub3ZlckFsbERhdGEgPSBkYXRhQXJyYXk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YUFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhQXJyYXlbal07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2hpbGQgPSB0aGlzLkRyYXdpbmdTcGxpdERhdGFBcnJheVtlbGVtZW50LmN1cnJlbnRDaGlsZEluZGV4XS5EcmF3aW5nU3BsaXREYXRhO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRNYXNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0LlRpbGVTZWxlY3Rpb25MaXN0QXJyYXlbZWxlbWVudC5jdXJyZW50VGlsZUluZGV4XS5EcmF3aW5nbWFza1ByZWZhYik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaGlsZC5hZGRDaGlsZChjdXJyZW50TWFzayk7XHJcblxyXG4gICAgICAgICAgICBsZXQgRHJhd2luZ21hc2tDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nbWFza0NsYXNzUmVmKGN1cnJlbnRNYXNrKTtcclxuICAgICAgICAgICAgRHJhd2luZ21hc2tDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuQ09MT1IgJiYgZWxlbWVudC5jdXJyZW50VG9vbCAhPSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uQ29sb3JGcmFtZUxpc3RBcnJheVtlbGVtZW50LmN1cnJlbnRQYXR0ZXJuRnJhbWVJbmRleF0uY29sb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uUGF0dGVybkZyYW1lTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5QYXR0ZXJuRnJhbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGVyc2lzdGVudFNjcm9sbFNjcmlwdC5UaWxlU2VsZWN0aW9uTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFRpbGVJbmRleF0uU3BhcmtsZUZyYW1lTGlzdEFycmF5W2VsZW1lbnQuY3VycmVudFBhdHRlcm5GcmFtZUluZGV4XS5TcGFya2xlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LlRvb2xzVGFnLlBBSU5UKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLmludmVydGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5QQUlOVClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5pbnZlcnRlZCA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5kcmF3QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZWxlbWVudC5kcmF3QXJyYXlbaV0ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoayA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zMSA9IG5ldyBjYy5WZWMyKHRoaXMucHJldlRvdWNoLnggLSBlbGVtZW50LmRyYXdBcnJheVtpXVtrXS54LCB0aGlzLnByZXZUb3VjaC55IC0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba10ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcndhcmRWZWN0b3IgPSBwb3MxLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BsaXRWYWwgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbnRTY3JvbGxTY3JpcHQuY3VycmVudFBlbnNpbFNlbGVjdGlvbiA9PSBDb25zdGFudC5Ub29sc1RhZy5QRU5DSUwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBzcGxpdFZhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IERpc3RhbmNlID0gQ29tbW9uRnVuLmluc3RhbmNlLmdldERpc3RhbmNlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLngsIGVsZW1lbnQuZHJhd0FycmF5W2ldW2tdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBEaXN0YW5jZSAvIHNwbGl0VmFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB2YWw7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEVOQ0lMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBlbGVtZW50LmN1cnJlbnRUb29sID09IENvbnN0YW50LlRvb2xzVGFnLlNQQVJLRUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuUEFUVEVSTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5FUkFTRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVuY2lsID0gY3VycmVudE1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZW5jaWwuY2lyY2xlKHRoaXMucHJldlRvdWNoLngsIHRoaXMucHJldlRvdWNoLnksIENvbnN0YW50LkN1cnJlbnRUb29sc1RhZ1NpemVbZWxlbWVudC5jdXJyZW50VG9vbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY3VycmVudFRvb2wgPT0gQ29uc3RhbnQuVG9vbHNUYWcuQlJVU0gyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RlbmNpbCA9IGN1cnJlbnRNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLnJlY3QodGhpcy5wcmV2VG91Y2gueCAtIChDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSAtIChDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudC5DdXJyZW50VG9vbHNUYWdTaXplW2VsZW1lbnQuY3VycmVudFRvb2xdICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50VG9vbCA9PSBDb25zdGFudC5Ub29sc1RhZy5TUFJBWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZW5jaWwgPSBjdXJyZW50TWFzay5nZXRDb21wb25lbnQoY2MuTWFzaykuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlbmNpbC5jaXJjbGUodGhpcy5wcmV2VG91Y2gueCwgdGhpcy5wcmV2VG91Y2gueSwgQ29uc3RhbnQuQ3VycmVudFRvb2xzVGFnU2l6ZVtlbGVtZW50LmN1cnJlbnRUb29sXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVuY2lsLmZpbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2ggPSBuZXcgY2MuVmVjMih0aGlzLnByZXZUb3VjaC54ICsgKGZvcndhcmRWZWN0b3IueCAqIGRpc3RhbmNlKSAqIC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2VG91Y2gueSArIChmb3J3YXJkVmVjdG9yLnkgKiBkaXN0YW5jZSkgKiAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlRvdWNoID0gZWxlbWVudC5kcmF3QXJyYXlbaV1ba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

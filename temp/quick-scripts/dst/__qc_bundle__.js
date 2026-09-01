
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
require('./assets/Games/SwipeToForm/Scripts/GameEnd');
require('./assets/Games/SwipeToForm/Scripts/Gameplay');
require('./assets/Games/SwipeToForm/Scripts/TVInputManager');
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
var TVInputManager_1 = require("../../Games/SwipeToForm/Scripts/TVInputManager");
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
        this.scheduleOnce(function () {
            var backBtn = _this.node.getChildByName("back");
            // :fire: music button
            var musicBtn = _this.node.getChildByName("music");
            backBtn.scale = 1;
            musicBtn.scale = 1;
            var nodes = [
                backBtn,
                musicBtn,
            ];
            TVInputManager_1.default.Instance.setCanSelect(true);
            TVInputManager_1.default.Instance.init(nodes);
        }, 0.5);
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
                cc.find("Canvas").getChildByName("bg").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            cc.loader.loadRes('game_data', cc.JsonAsset, function (err, jsonAsset) {
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
                        cc.find("Canvas").getChildByName("bg").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    if (spriteFrame) {
                        _this.introBG = spriteFrame;
                        cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                    question.options = question.options.map(function (option) { return _this.removeExtension(option); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTRFO0FBaUN0RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXNiQztRQW5iRyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixrQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFHL0IsNEJBQXNCLEdBQVksS0FBSyxDQUFDO1FBRXhDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLG9DQUFvQztRQUVwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1Qiw4QkFBOEI7UUFFOUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUlWLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFbEMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsZ0JB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QUMsU0FBUyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDcEUsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQTlYYyxrQkFBUSxHQUFjLElBQUksQ0FBQztJQXJDMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDUTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NkNBQ0U7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNZO0lBRW5DO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFDTztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJEQUNPO0lBRTVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt5REFDd0I7SUFTekM7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO29EQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs2REFDc0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO21EQUNRO0lBcUJ6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNLO0lBbEROLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzYjdCO0lBQUQsZ0JBQUM7Q0F0YkQsQUFzYkMsQ0F0YnNDLEVBQUUsQ0FBQyxTQUFTLEdBc2JsRDtrQkF0Ym9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVFZJbnB1dE1hbmFnZXIgZnJvbSBcIi4uLy4uL0dhbWVzL1N3aXBlVG9Gb3JtL1NjcmlwdHMvVFZJbnB1dE1hbmFnZXJcIjtcclxuXHJcbmludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XHJcbiAgICBHYW1lSUQ6IHN0cmluZztcclxuICAgIHRvdGFsTGV2ZWw6IHN0cmluZztcclxuICAgIFRpdGxlSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBpbnRyb0JnTmFtZTogc3RyaW5nO1xyXG4gICAgYmdtTXVzaWNOYW1lOiBzdHJpbmc7XHJcbiAgICBtYWluQmdOYW1lOiBzdHJpbmc7XHJcbiAgICBKb2NrZXlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWVzdGlvbkRhdGEge1xyXG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbkltYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgcXVlc3Rpb25BdWRpb05hbWU6IHN0cmluZztcclxuICAgIHNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvOiBib29sZWFuO1xyXG4gICAgY29tbW9uT3B0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBpc09wdGlvblRleHQ6IGJvb2xlYW47XHJcbiAgICBvcHRpb25PZmZzZXQ6IG51bWJlcjtcclxuICAgIG51bWJlck9mT3B0aW9uczogbnVtYmVyO1xyXG4gICAgb3B0aW9uczogc3RyaW5nW107IC8vIFRoaXMgd2lsbCBlaXRoZXIgY29udGFpbiB0ZXh0IG9wdGlvbnMgb3IgaW1hZ2UgbmFtZXMgYmFzZWQgb24gaXNPcHRpb25UZXh0IGZsYWdcclxuICAgIGNvcnJlY3RBbnN3ZXI6IHN0cmluZztcclxuICAgIGNvcnJlY3RBdWRpb05hbWU6IHN0cmluZztcclxuICAgIG5lZWRSZWl0ZXJhdGlvbjogYm9vbGVhbjtcclxuICAgIHJlaXRlcmF0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgTXlKU09ORGF0YSB7XHJcbiAgICBhZGRpdGlvbmFsRGF0YTogQWRkaXRpb25hbERhdGE7XHJcbiAgICBxdWVzdGlvbkRhdGE6IFF1ZXN0aW9uRGF0YVtdO1xyXG59XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBCR01fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgdm9sdW1lOiBudW1iZXIgPSAxO1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIE5leHRTY2VuZU5hbWU6IHN0cmluZyA9IFwiMVwiO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBsYXlCdG5fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgVG90YWxMZXZlbHM6IG51bWJlciA9IDc7XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGlzQWdlUGFyYW1ldGVyTmVlZGVkID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBMZXZlbEFnZVBhcmFtZXRlcnM6IG51bWJlcltdID0gWzMsIDUsIDddO1xyXG4gICAgaXNNdXNpY09uOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBsZXZlbFR5cGU6IHN0cmluZyA9IFwiMVwiO1xyXG4gICAgY3VycmVudExldmVsOiBzdHJpbmcgPSBcIjFcIjtcclxuICAgIGhhc0FjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaGFzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBtb2JpbGVOdW1iZXI6IHN0cmluZyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGlzUHJlbWl1bUdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIGlzTW9iaWxlTnVtYmVyUHJpb3JpdHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgICBwcmVtaXVtTGV2ZWw6IG51bWJlciA9IDM7XHJcbiAgICAvLyBtb2JOdW1BdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBKb2NrZXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBmaXJzdENsaWNrOiBudW1iZXIgPSAxO1xyXG4gICAgY2xpY2tFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gY3VycmVudEhlYWx0aDogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgdGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IHN0YXJ0R2FtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGFjdGl2YXRlSGludDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBpc0RlbW9HYW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqb2NrZXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG1haW5CZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgaW50cm9CRzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdGl0bGVJbWFnZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0R2FtZS5pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHN0YXJ0R2FtZS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nLS0xMDBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkZXJDb21wbGV0ZS0tdHJ1ZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tVGl0bGVcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gXCJqb2NrZXlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Kb2NrZXlOb2RlID0gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiYWNrQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICAgICAgLy8gOmZpcmU6IG11c2ljIGJ1dHRvblxyXG4gICAgICAgICAgICBsZXQgbXVzaWNCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgbGV0IG5vZGVzID0gW1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tCdG4sXHJcbiAgICAgICAgICAgICAgICBtdXNpY0J0bixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRydWUpO1xyXG5cclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dEYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG90YWwgTGV2ZWxzOlwiLCB0aGlzLlRvdGFsTGV2ZWxzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkJHTSBhdWRpbyBuYW1lOlwiLCB0aGlzLkJHTV9hdWRpby5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlIEltYWdlIE5hbWU6XCIsIHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSm9ja2V5IE5hbWU6XCIsIHRoaXMuam9ja2V5TmFtZSk7XHJcblxyXG4gICAgICAgIC8vIExvZyBxdWVzdGlvbiBkYXRhXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbiAke2luZGV4ICsgMX06YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIEF1ZGlvIE5hbWU6XCIsIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMSBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDb3JyZWN0IEFuc3dlciBOdW1iZXI6XCIsIHF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJOdW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuICAgICAgICByZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgJycpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQXVkaW9FeHRlbnNpb24oYXVkaW9OYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgICAgIHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSlNPTmRhdGEoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NndjItcHJvZC1pbWFnZXMuY3JlYXRpdmVnYWxpbGVvLmNvbS9IeWJyaWRMWkFzc2V0cy9CVE4tYmctb3JhbmdlLnBuZ1wiLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIC8vICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoJ2pzb24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY29kZSB0aGUgVVJMLWVuY29kZWQgSlNPTiBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRKc29uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRKc29uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3RcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGRlY29kZWRKc29uU3RyaW5nKTtcclxuICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICAgICAgICB0aGlzLlRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMudGl0bGVJbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJHTV9hdWRpbyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUgPSBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZTtcclxuICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9IHF1ZXN0aW9uLmNvbW1vbk9wdGlvbkltYWdlTmFtZTtcclxuICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbnMgYXJlIGltYWdlIG5hbWVzLCB5b3UgbWlnaHQgd2FudCB0byByZW1vdmUgZXh0ZW5zaW9ucyBhcyB3ZWxsXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5vcHRpb25zID0gcXVlc3Rpb24ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICAgICAgICAvLyB0aGlzLmxvZ0RhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lX2RhdGEnLCBjYy5Kc29uQXNzZXQsIChlcnIsIGpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZUltYWdlTmFtZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiam9ja2V5IG5hbWUgPSBcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50aXRsZUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWUpLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lKSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcCh0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSksIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQkdNX2F1ZGlvID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUpLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluQmcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lID0gdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihxdWVzdGlvbi5xdWVzdGlvbkF1ZGlvTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5yZWl0ZXJhdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLnJlaXRlcmF0aW9uSW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5jb3JyZWN0QXVkaW9OYW1lID0gdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihxdWVzdGlvbi5jb3JyZWN0QXVkaW9OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25zIGFyZSBpbWFnZSBuYW1lcywgeW91IG1pZ2h0IHdhbnQgdG8gcmVtb3ZlIGV4dGVuc2lvbnMgYXMgd2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLm9wdGlvbnMgPSBxdWVzdGlvbi5vcHRpb25zLm1hcChvcHRpb24gPT4gdGhpcy5yZW1vdmVFeHRlbnNpb24ob3B0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIE5vdyB5b3UgY2FuIHVzZSB0aGVzZSB2YXJpYWJsZXMgd2l0aGluIHRoaXMgc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZ0RhdGEoKTsgLy8gWW91IGNhbiBjYWxsIGEgZnVuY3Rpb24gdG8gbG9nIHRoZSBkYXRhIG9yIHVzZSBpdCBpbiBvdGhlciBmdW5jdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xyXG4gICAgICAgIHZhciBpc0F1ZGlvID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzb3VuZFNldHRpbmdcIik7XHJcbiAgICAgICAgdmFyIGFnZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWdlXCIpO1xyXG4gICAgICAgIHZhciBhY2Nlc3MgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFjY2Vzc1wiKTtcclxuICAgICAgICB2YXIgbW9iaWxlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJtb2JpbGVcIik7XHJcbiAgICAgICAgdmFyIGxldmVsID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsZXZlbFwiKTtcclxuICAgICAgICB2YXIgcHJlbWl1bSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwicHJlbWl1bVwiKTtcclxuICAgICAgICB2YXIgaXNQcmVtaXVtID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpc1ByZW1pdW1cIik7XHJcbiAgICAgICAgdmFyIGRlbW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzZGVtb1wiKTtcclxuICAgICAgICBpZiAoZGVtbyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVtb0dhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0IGlzIGEgZGVtbyBnYW1lXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVKU09OZGF0YSgpO1xyXG5cclxuICAgICAgICBpZiAocHJlbWl1bSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlbWl1bUxldmVsID0gcGFyc2VJbnQocHJlbWl1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IFwiMVwiO1xyXG4gICAgICAgIC8vIGlmIChsZXZlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IGxldmVsO1xyXG4gICAgICAgIC8vICAgICBpZiAocGFyc2VJbnQodGhpcy5OZXh0U2NlbmVOYW1lKSA+PSB0aGlzLlRvdGFsTGV2ZWxzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSB0aGlzLlRvdGFsTGV2ZWxzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChtb2JpbGUgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNNb2JpbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNNb2JpbGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjY2VzcyA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLmhhc0FjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhc0FjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUHJlbWl1bUdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUHJlbWl1bSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzUHJlbWl1bSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgaWYgKGlzQXVkaW8gPT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgbGV0IGFnZVZhbHVlOiBudW1iZXIgPSBwYXJzZUludChhZ2UpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0FnZVBhcmFtZXRlck5lZWRlZCkge1xyXG4gICAgICAgICAgICBpZiAoYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM10gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbNF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiam9ja2V5IG5hbWUgPSBcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RhclwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0bGNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdXBlcmN1YlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInN0YWxsaW9uXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgdGhpcy5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSAhPSBcImJhZ1wiICYmIHRoaXMuam9ja2V5TmFtZSAhPSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjUpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLk9uVGltZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPblBsYXlCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlCdG5fYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3ByaXRlRnJhbWUoaW1hZ2VOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRBdWRpb0NsaXAoYXVkaW9OYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9uVGltZXIoKSB7XHJcbiAgICAvLyAgICAgbGV0IGRlbGF5ID0gMTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk5OTk7IGkrKykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lICE9IFwiZ2FtZUVuZFwiKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy50aW1lcisrO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAvLyAgICAgICAgIGRlbGF5ICs9IDE7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
var TVInputManager_1 = require("./TVInputManager");
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
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") {
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
    GameEnd.prototype.start = function () {
        var _this = this;
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        // :fire: music button
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var nodes = [
            backBtn,
            musicBtn,
        ];
        TVInputManager_1.default.Instance.setCanSelect(true);
        TVInputManager_1.default.Instance.init(nodes);
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        // this.scheduleOnce(() => {
        //     this.node.getChildByName("awesome").getComponent(cc.Animation).play();
        // }, 0.3);
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
    GameEnd.prototype.OnEndBtn = function (_event) {
        window.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxTY3JpcHRzXFxHYW1lRW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUU3RCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFpR0M7UUE5RlcsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsY0FBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQW1CLElBQUksQ0FBQzs7UUFpRjNDLGlCQUFpQjtJQUNyQixDQUFDO0lBaEZHLHdCQUF3QjtJQUV4Qix3QkFBTSxHQUFOO1FBQUEsaUJBa0JDO1FBakJHLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzNGO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMzRixJQUFJLENBQUMsWUFBWSxD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QVIsVUFBUyxNQUFnQjtRQUNyQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXpGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lDQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7eUNBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDZTtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dEQUNrQjtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ2tCO0lBZjFCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FpRzNCO0lBQUQsY0FBQztDQWpHRCxBQWlHQyxDQWpHb0MsRUFBRSxDQUFDLFNBQVMsR0FpR2hEO2tCQWpHb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2NrZXkgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9Kb2NrZXlzL1NjcmlwdHMvSm9ja2V5XCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgVFZJbnB1dE1hbmFnZXIgZnJvbSBcIi4vVFZJbnB1dE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdGFyOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHllYWg6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBwb2RhckVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBqYWlwdXJpYUVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSB0bGNFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgc3VwZXJjdWJFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wb2RhckVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuamFpcHVyaWFFbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy50bGNFbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zdXBlcmN1YkVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5pbnRyb0JHO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBiYWNrQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrXCIpO1xyXG5cclxuICAgICAgICAvLyA6ZmlyZTogbXVzaWMgYnV0dG9uXHJcbiAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICBiYWNrQnRuLnNjYWxlID0gMTtcclxuICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgbGV0IG5vZGVzID0gW1xyXG5cclxuICAgICAgICAgICAgYmFja0J0bixcclxuICAgICAgICAgICAgbXVzaWNCdG4sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodHJ1ZSk7XHJcblxyXG4gICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1Db25ncmF0dWxhdGlvbnNcIik7XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIC8vIH0sIDAuMyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDAuOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDEuMyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDEuOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMueWVhaFswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICB9LCAyLjMpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25FbmRCdG4oX2V2ZW50OiBjYy5FdmVudCkge1xyXG4gICAgICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
        _this.negativeAudio = [];
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
        _this.selectedorder = "";
        _this.tappingcount = 0;
        _this.letter = "";
        _this.canPlay = false;
        _this.nodeNameToLetter = {
            "1": "h", "2": "t", "3": "e"
        };
        _this.nodeNameToLetter1 = {
            "1": "e", "2": "h", "3": "t"
        };
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
        this.node.getChildByName("BG").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.podar_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.tlc_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.supercub_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).font = this.jaipuria_font;
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
    };
    Gameplay.prototype.PlayQuestionAudio = function () {
        this.currentJockey.active = true;
        if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
            cc.audioEngine.playEffect(this.questionVO, false);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            //PLAY HAND ANIMATION
            var hand = this.node.getChildByName("hand");
            hand.active = true;
            var x1 = this.optionsNode.children[0].x;
            var x2 = this.optionsNode.children[1].x;
            hand.setParent(this.optionsNode.children[0]);
            // hand.setPosition(0, 0);
            hand.setParentWithSamePos(this.node);
            // this.playTween(hand, x1, x2);
            hand.getComponent(cc.Animation).play();
        }
    };
    Gameplay.prototype.playTween = function (_hand, x1, x2) {
        var _this = this;
        _hand.setPosition(x1, _hand.getPosition().y);
        cc.tween(_hand).to(1, { x: x2 }).call(function () {
            _this.playTween(_hand, x1, x2);
        }).start();
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
            element.on('touchstart', function (event) {
                this.TouchStart(element);
            }, _this);
            element.on('touchmove', function (event) {
                this.TouchMove(element, event);
            }, _this);
            element.on('touchend', function (event) {
                this.TouchEnd(element);
            }, _this);
            element.on('touchcancel', function (event) {
                this.TouchEnd(element);
            }, _this);
            element.on('tv-select', function (event) {
                this.TouchStart(element);
            }, _this);
            element.on('tv-select', function (event) {
                this.TouchMove(element, event);
            }, _this);
            element.on('tv-select', function (event) {
                this.TouchEnd(element);
            }, _this);
            element.on('tv-select', function (event) {
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
                    cc.tween(_this.optionsNode.children[i]).to(0.3, { scale: 0.8 }, { easing: 'backInOut' }).start();
                    if (i == _this.optionsNode.children.length - 1) {
                        _this.scheduleOnce(function () {
                            _this.SubcribeEvents();
                            _this.canPlay = true;
                            if (TVInputManager_1.default.Instance)
                                TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
                            _this.setupTVFocus("options");
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
        if (questionData.questionImageName != null && questionData.questionImageName != "") {
            if (questionData.questionText == "") {
                this.node.getChildByName("questionPanel").getChildByName("img").setPosition(0, this.node.getChildByName("questionPanel").getChildByName("img").getPosition().y);
            }
            else {
                this.node.getChildByName("questionPanel").getChildByName("text2").getComponent(cc.Label).string = this.questionText;
            }
            if (StartGame_1.default.Instance.isDemoGame) {
                cc.loader.load(questionData.questionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node.getChildByName("questionPanel").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            else {
                this.loadSpriteFrame(questionData.questionImageName, function (spriteFrame) {
                    _this.node.getChildByName("questionPanel").getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        }
        else if (this.questionText != "") {
            this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = this.questionText;
            this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
            this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
            cc.tween(this.node.getChildByName("questionPanel")).to(1, { y: this.questionBoxPosY }, { easing: 'sineInOut' }).start();
        }
        this.needReiteration = questionData.needReiteration;
        this.LoadAssetsAudios(questionData);
        if (this.needReiteration) {
            this.node.getChildByName("reiteration").getChildByName("text").getComponent(cc.Label).string = questionData.correctAnswer;
            if (questionData.reiterationImageName != null && questionData.reiterationImageName != "") {
                if (StartGame_1.default.Instance.isDemoGame) {
                    cc.loader.load(questionData.reiterationImageName, function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node.getChildByName("reiteration").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this.loadSpriteFrame(questionData.reiterationImageName, function (spriteFrame) {
                        _this.node.getChildByName("reiteration").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            optionNode.getChildByName("img").setPosition(cc.v2(optionNode.getChildByName("img").getPosition().x, questionData.optionOffset));
            optionNode.getChildByName("text").setPosition(cc.v2(optionNode.getChildByName("text").getPosition().x, questionData.optionOffset));
            if (questionData.commonOptionImageName != null && questionData.commonOptionImageName != "") {
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
                optionNode.getChildByName("text").getComponent(cc.Label).string = options[i];
            }
            else {
                optionNode.getChildByName("img").active = true;
                optionNode.getChildByName("text").active = false;
                this_1.node.getChildByName("reiteration").getChildByName("text").active = false;
                if (questionData.commonOptionImageName == null || questionData.commonOptionImageName == "") {
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
                        optionNode.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.loadSpriteFrame(options[i], function (spriteFrame) {
                        optionNode.getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            this.canPlay = true;
            if (TVInputManager_1.default.Instance)
                TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
            this.currentDraggingObject = _node.name;
            this.startPosX = _node.getPosition().x;
            _node.zIndex = 1;
            this.attemptSwap(_node);
            console.log("_node:", _node.name);
            // Convert node name to letter
            if (globalVariables_1.default.Instance.currentLevel == 1 || globalVariables_1.default.Instance.currentLevel == 3)
                this.letter = this.nodeNameToLetter[_node.name];
            else
                this.letter = this.nodeNameToLetter1[_node.name];
            if (this.letter) {
                this.selectedorder += this.letter;
            }
            console.log("Letter:", this.letter);
            console.log("this.selectedorder:", this.selectedorder);
            if (!this.isFirstClick) {
                this.isFirstClick = true;
                console.log("firstClick--" + StartGame_1.default.Instance.currentLevel);
            }
        }
    };
    Gameplay.prototype.TouchMove = function (_node, _event) {
        // if (!this.canTouch || this.currentDraggingObject !== _node.name || this.isAnswered) {
        //     return;
        // }
        // let delta = _event.touch.getDelta();
        // _node.x += delta.x;
        // this.attemptSwap(_node);
    };
    Gameplay.prototype.attemptSwap = function (_node) {
        var deltaX = _node.x - this.startPosX;
        // if (Math.abs(deltaX) > 50) {
        for (var _i = 0, _a = this.optionsNode.children; _i < _a.length; _i++) {
            var otherNode = _a[_i];
            // if (otherNode !== _node) {
            var distance = this.calculateDistance(_node.position, otherNode.position);
            // if (this.shouldSwap(deltaX, _node, otherNode, distance)) {
            this.performSwap(_node, otherNode);
            break;
            // }
            // }
        }
        // }
    };
    Gameplay.prototype.shouldSwap = function (deltaX, _node, otherNode, distance) {
        return distance < 50 && ((deltaX > 0 && _node.x < otherNode.x) || (deltaX < 0 && _node.x > otherNode.x));
    };
    Gameplay.prototype.performSwap = function (_node, otherNode) {
        var _this = this;
        // cc.audioEngine.playEffect(this.swipe_sound, false);
        // cc.tween(_node).to(0.15, { x: otherNode.x }, { easing: 'backInOut' }).start();
        // cc.tween(otherNode).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
            _this.checkOrder(); // Check if the current order is correct
        }, 0.15);
        this.canTouch = false;
        this.canPlay = false;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
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
        // cc.tween(_node).to(0.15, { x: this.startPosX }, { easing: 'backInOut' }).start();
        this.scheduleOnce(function () {
            _this.currentDraggingObject = null;
        }, 0.2);
    };
    Gameplay.prototype.checkOrder = function () {
        var _this = this;
        var currentWord = this.selectedorder;
        // let currentWord = this.getCurrentWord();
        console.log("current word =", currentWord);
        var targetWord = this.correctAnswer; // Define your target word here
        console.log("correctAnswer : =", this.correctAnswer);
        this.tappingcount++;
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = this.selectedorder;
        this.canPlay = true;
        if (TVInputManager_1.default.Instance)
            TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
        if (this.tappingcount == 3) {
            if (currentWord === targetWord) {
                console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
                this.isAnswered = true;
                this.node.getChildByName("questionPanel").getChildByName("sound").active = false;
                // Additional logic for when the order is correct
                // console.log("need iteration--" + this.needReiteration);
                cc.audioEngine.playEffect(this.correctSound, false);
                if (this.needReiteration) {
                    // this.optionsNode.active = false;
                    this.node.getChildByName("reiteration").active = true;
                    this.node.getChildByName("reiteration").scale = 0;
                    // cc.tween(this.optionsNode).to(0.25, { scaleX: 0 }, { easing: 'backInOut' }).start();
                    //  cc.tween(this.node.getChildByName("reiteration")).to(0.5, { scale: 1 }, { easing: 'sineInOut' }).start();
                    this.scheduleOnce(function () {
                        _this.optionsNode.active = false;
                        _this.node.getChildByName("confetti").active = true;
                        _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
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
                this.selectedorder = "";
                this.tappingcount = 0;
                this.letter = "";
                this.callnegJockey();
                // console.log("Incorrect order.");
                // Additional logic for when the order is incorrect
            }
        }
    };
    Gameplay.prototype.getCurrentWord = function () {
        // Sort the nodes based on their x-coordinate
        var sortedNodes = this.optionsNode.children.sort(function (a, b) { return a.x - b.x; });
        var word = sortedNodes.map(function (child) {
            if (StartGame_1.default.Instance.questions[parseInt(StartGame_1.default.Instance.currentLevel) - 1].isOptionText) {
                var labelNode = child.getChildByName("text"); // Adjust if necessary
                var labelComponent = labelNode ? labelNode.getComponent(cc.Label) : null;
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
        }).join('');
        // console.log("Constructed Word: ", word);
        return word;
    };
    Gameplay.prototype.LoadNextQuestion = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
        console.log("levelComplete--" + StartGame_1.default.Instance.currentLevel);
        //playjockey
        // after jockey call below animation
        this.scheduleOnce(function () {
            if (parseInt(StartGame_1.default.Instance.currentLevel) >= StartGame_1.default.Instance.TotalLevels) {
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
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag") {
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
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
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
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                _this.LoadNextQuestion();
            }, _this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    };
    Gameplay.prototype.callnegJockey = function () {
        var _this = this;
        var anim = [];
        anim = ["negative_1", "negative_2"];
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
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
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
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[globalVariables_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                // this.LoadNextQuestion();
            }, _this.negativeAudio[currentClipNum].duration);
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
    Gameplay.prototype.OnSound = function () {
        var _this = this;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questionVO, false);
        this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function () {
            _this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = true;
            _this.node.getChildByName("questionPanel").getChildByName("sound").scale = 1;
            _this.canPlay = true;
            if (TVInputManager_1.default.Instance)
                TVInputManager_1.default.Instance.setCanSelect(_this.canPlay);
            _this.setupTVFocus("options");
        }, this.questionVO.duration + 0.1);
    };
    Gameplay.prototype.setupTVFocus = function (activeContainerName) {
        var backBtn = StartGame_1.default.Instance.node.getChildByName("back");
        var musicBtn = StartGame_1.default.Instance.node.getChildByName("music");
        var soundBtn = this.node.getChildByName("questionPanel").getChildByName("sound");
        backBtn.scale = 1;
        musicBtn.scale = 1;
        var optionButtons = this.node.getChildByName(activeContainerName).children.filter(function (node) {
            var btn = node.getComponent(cc.Button);
            return node.active && node.opacity > 0 && (!btn || btn.interactable !== false);
        });
        var nodes = __spreadArrays(optionButtons, [backBtn, soundBtn, musicBtn]).filter(function (n) { return !!n; });
        // pick a sensible default — e.g. first option, or correct answer index
        if (cc.director.getScene().name == "1") {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        else {
            TVInputManager_1.default.Instance.init(nodes, -1);
        }
        TVInputManager_1.default.Instance.setCanSelect(this.canPlay);
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
    ], Gameplay.prototype, "negativeAudio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxTY3JpcHRzXFxHYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFDaEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbzJCQztRQWwyQlcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUd0QyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUV0QywyQkFBcUIsR0FBVyxJQUFJLENBQUM7UUFDckMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVUsR0FBWSxLQUFLLENB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LENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN4RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM3RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM5RzthQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM3RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNsSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxL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QUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTthQUNJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0SSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFGLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckUsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5SCxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUs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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBRzlDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7bURBQ29CO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ3VCO0lBekM3QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbzJCNUI7SUFBRCxlQUFDO0NBcDJCRCxBQW8yQkMsQ0FwMkJxQyxFQUFFLENBQUMsU0FBUyxHQW8yQmpEO2tCQXAyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1ByZWZhYnMvUHJvZ3Jlc3NiYXIvU2NyaXB0cy9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi9nbG9iYWxWYXJpYWJsZXNcIjtcclxuaW1wb3J0IFRWSW5wdXRNYW5hZ2VyIGZyb20gXCIuL1RWSW5wdXRNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHBvZGFyX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1Yl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG9wdGlvbnNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwb3Bfc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc3dpcGVfc291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY29ycmVjdFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBvc2l0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgcG9zaXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBuZWdhdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgY3J5b25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdXBlcmN1YlBvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudERyYWdnaW5nT2JqZWN0OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGFydFBvc1g6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5Ub3VjaDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0Ryb3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNBbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgcXVlc3Rpb25UZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBjb3JyZWN0QW5zd2VyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblZPOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb3JyZWN0Vk86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5lZWRSZWl0ZXJhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZWl0ZXJhdGlvbkltYWdlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhMZXZlbDogbnVtYmVyID0gNztcclxuXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uQm94UG9zWTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHNlbGVjdGVkb3JkZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICB0YXBwaW5nY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBsZXR0ZXIgPSBcIlwiO1xyXG4gICAgY2FuUGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UuVG90YWxMZXZlbHM7XHJcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbCkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJHXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnBvZGFyX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMudGxjX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25WTywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vUExBWSBIQU5EIEFOSU1BVElPTlxyXG4gICAgICAgICAgICBsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcbiAgICAgICAgICAgIGhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHgxOiBudW1iZXIgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdLng7XHJcbiAgICAgICAgICAgIGxldCB4MjogbnVtYmVyID0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlblsxXS54O1xyXG4gICAgICAgICAgICBoYW5kLnNldFBhcmVudCh0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgLy8gaGFuZC5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgaGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYXlUd2VlbihoYW5kLCB4MSwgeDIpO1xyXG4gICAgICAgICAgICBoYW5kLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVR3ZWVuKF9oYW5kOiBjYy5Ob2RlLCB4MTogbnVtYmVyLCB4MjogbnVtYmVyKSB7XHJcbiAgICAgICAgX2hhbmQuc2V0UG9zaXRpb24oeDEsIF9oYW5kLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgY2MudHdlZW4oX2hhbmQpLnRvKDEsIHsgeDogeDIgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVR3ZWVuKF9oYW5kLCB4MSwgeDIpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgU3ViY3JpYmVFdmVudHMoKSB7XHJcbiAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpbykge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5xdWVzdGlvblZPKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblZPLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnF1ZXN0aW9uVk8pIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLlBsYXlRdWVzdGlvbkF1ZGlvKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoRW5kKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hjYW5jZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hFbmQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5vbigndHYtc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdWNoU3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCd0di1zZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3R2LXNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3VjaEVuZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3R2LXNlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3VjaEVuZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVEaXN0YW5jZShwb2ludDEsIHBvaW50Mikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnQyLnggLSBwb2ludDEueCwgMikgKyBNYXRoLnBvdyhwb2ludDIueSAtIHBvaW50MS55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxLCBmYWxzZSk7XHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUXVlc3Rpb25EYXRhKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4ubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYW5nZUNoaWxkcmVuKHRoaXMub3B0aW9uc05vZGUsIDgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSAwLjI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcF9zb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0pLnRvKDAuMywgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN1YmNyaWJlRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlKSBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5QbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICAgICAgICBkZWxheSArPSAwLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuY3J5b25Qb3NpdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25Qb3NpdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnRsY1Bvc2l0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1YlBvc2l0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVRdWVzdGlvbkRhdGEoKSB7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uRGF0YSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbcGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgLSAxXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHF1ZXN0aW9uRGF0YS5vcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IHF1ZXN0aW9uRGF0YS5jb3JyZWN0QW5zd2VyO1xyXG4gICAgICAgIGxldCBudW1iZXJPZk9wdGlvbnMgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IHF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSAhPSBudWxsICYmIHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2V0UG9zaXRpb24oMCwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRQb3NpdGlvbigpLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEucXVlc3Rpb25JbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5xdWVzdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuc2V0UG9zaXRpb24oY2MudjIoMCwgMTUwMCkpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpKS50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnF1ZXN0aW9uVGV4dCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25Cb3hQb3NZID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS55O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKSkudG8oMSwgeyB5OiB0aGlzLnF1ZXN0aW9uQm94UG9zWSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmVlZFJlaXRlcmF0aW9uID0gcXVlc3Rpb25EYXRhLm5lZWRSZWl0ZXJhdGlvbjtcclxuICAgICAgICB0aGlzLkxvYWRBc3NldHNBdWRpb3MocXVlc3Rpb25EYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5uZWVkUmVpdGVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcXVlc3Rpb25EYXRhLmNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUgIT0gbnVsbCAmJiBxdWVzdGlvbkRhdGEucmVpdGVyYXRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQocXVlc3Rpb25EYXRhLnJlaXRlcmF0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5yZWl0ZXJhdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbGV0IG9wdGlvbk5vZGUgPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAvL2NyZWF0ZSBvcHRpb25zXHJcbiAgICAgICAgICAgIGxldCBvcHRpb25Ob2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIikpO1xyXG4gICAgICAgICAgICBvcHRpb25Ob2RlLm5hbWUgPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUuc2V0UGFyZW50KHRoaXMub3B0aW9uc05vZGUpO1xyXG4gICAgICAgICAgICBvcHRpb25Ob2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2V0UG9zaXRpb24oY2MudjIob3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRQb3NpdGlvbigpLngsIHF1ZXN0aW9uRGF0YS5vcHRpb25PZmZzZXQpKTtcclxuICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuc2V0UG9zaXRpb24oY2MudjIob3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0UG9zaXRpb24oKS54LCBxdWVzdGlvbkRhdGEub3B0aW9uT2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lICE9IG51bGwgJiYgcXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChxdWVzdGlvbkRhdGEuY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUsIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5pc09wdGlvblRleHQpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25Ob2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBvcHRpb25zW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb25EYXRhLmNvbW1vbk9wdGlvbkltYWdlTmFtZSA9PSBudWxsIHx8IHF1ZXN0aW9uRGF0YS5jb21tb25PcHRpb25JbWFnZU5hbWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQob3B0aW9uc1tpXSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShvcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgTG9hZEFzc2V0c0F1ZGlvcyhfcXVlc3Rpb25kYXRhOiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc0RlbW9HYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKF9xdWVzdGlvbmRhdGEucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25WTyA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKF9xdWVzdGlvbmRhdGEuY29ycmVjdEF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0Vk8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE9iamVjdFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uVk8gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoX3F1ZXN0aW9uZGF0YS5jb3JyZWN0QXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RWTyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRTcHJpdGVGcmFtZShfcXVlc3Rpb25kYXRhLnF1ZXN0aW9uSW1hZ2VOYW1lLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRvdWNoU3RhcnQoX25vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Fuc3dlcmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nT2JqZWN0ID0gX25vZGUubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFBvc1ggPSBfbm9kZS5nZXRQb3NpdGlvbigpLng7XHJcblxyXG4gICAgICAgICAgICBfbm9kZS56SW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHRTd2FwKF9ub2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX25vZGU6XCIsIF9ub2RlLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCBub2RlIG5hbWUgdG8gbGV0dGVyXHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEgfHwgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXIgPSB0aGlzLm5vZGVOYW1lVG9MZXR0ZXJbX25vZGUubmFtZV07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubGV0dGVyID0gdGhpcy5ub2RlTmFtZVRvTGV0dGVyMVtfbm9kZS5uYW1lXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkb3JkZXIgKz0gdGhpcy5sZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGV0dGVyOlwiLCB0aGlzLmxldHRlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zZWxlY3RlZG9yZGVyOlwiLCB0aGlzLnNlbGVjdGVkb3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdENsaWNrLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBub2RlTmFtZVRvTGV0dGVyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG5cclxuICAgICAgICBcIjFcIjogXCJoXCIsIFwiMlwiOiBcInRcIiwgXCIzXCI6IFwiZVwiXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBub2RlTmFtZVRvTGV0dGVyMTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuXHJcbiAgICAgICAgXCIxXCI6IFwiZVwiLCBcIjJcIjogXCJoXCIsIFwiM1wiOiBcInRcIlxyXG4gICAgfTtcclxuICAgIFRvdWNoTW92ZShfbm9kZTogY2MuTm9kZSwgX2V2ZW50OiBhbnkpIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuY2FuVG91Y2ggfHwgdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QgIT09IF9ub2RlLm5hbWUgfHwgdGhpcy5pc0Fuc3dlcmVkKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IGRlbHRhID0gX2V2ZW50LnRvdWNoLmdldERlbHRhKCk7XHJcbiAgICAgICAgLy8gX25vZGUueCArPSBkZWx0YS54O1xyXG4gICAgICAgIC8vIHRoaXMuYXR0ZW1wdFN3YXAoX25vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGVtcHRTd2FwKF9ub2RlKSB7XHJcbiAgICAgICAgbGV0IGRlbHRhWCA9IF9ub2RlLnggLSB0aGlzLnN0YXJ0UG9zWDtcclxuICAgICAgICAvLyBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IDUwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgb3RoZXJOb2RlIG9mIHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgLy8gaWYgKG90aGVyTm9kZSAhPT0gX25vZGUpIHtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZShfbm9kZS5wb3NpdGlvbiwgb3RoZXJOb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc2hvdWxkU3dhcChkZWx0YVgsIF9ub2RlLCBvdGhlck5vZGUsIGRpc3RhbmNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Td2FwKF9ub2RlLCBvdGhlck5vZGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRTd2FwKGRlbHRhWCwgX25vZGUsIG90aGVyTm9kZSwgZGlzdGFuY2UpIHtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPCA1MCAmJiAoKGRlbHRhWCA+IDAgJiYgX25vZGUueCA8IG90aGVyTm9kZS54KSB8fCAoZGVsdGFYIDwgMCAmJiBfbm9kZS54ID4gb3RoZXJOb2RlLngpKTtcclxuICAgIH1cclxuXHJcbiAgICBwZXJmb3JtU3dhcChfbm9kZSwgb3RoZXJOb2RlKSB7XHJcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnN3aXBlX3NvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2MudHdlZW4oX25vZGUpLnRvKDAuMTUsIHsgeDogb3RoZXJOb2RlLnggfSwgeyBlYXNpbmc6ICdiYWNrSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gY2MudHdlZW4ob3RoZXJOb2RlKS50bygwLjE1LCB7IHg6IHRoaXMuc3RhcnRQb3NYIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrT3JkZXIoKTsgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb3JkZXIgaXMgY29ycmVjdFxyXG4gICAgICAgIH0sIDAuMTUpO1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhblBsYXkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0aGlzLmNhblBsYXkpO1xyXG4gICAgICAgIHRoaXMuaXNEcm9wcGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBUb3VjaEVuZChfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbm9kZS56SW5kZXggPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRHJvcHBlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJvcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKF9ub2RlKS50bygwLjE1LCB7IHg6IHRoaXMuc3RhcnRQb3NYIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIH0sIDAuMik7XHJcbiAgICB9XHJcbiAgICBjaGVja09yZGVyKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50V29yZCA9IHRoaXMuc2VsZWN0ZWRvcmRlcjtcclxuICAgICAgICAvLyBsZXQgY3VycmVudFdvcmQgPSB0aGlzLmdldEN1cnJlbnRXb3JkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHdvcmQgPVwiLCBjdXJyZW50V29yZCk7XHJcbiAgICAgICAgbGV0IHRhcmdldFdvcmQgPSB0aGlzLmNvcnJlY3RBbnN3ZXI7IC8vIERlZmluZSB5b3VyIHRhcmdldCB3b3JkIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXIgOiA9XCIsIHRoaXMuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgdGhpcy50YXBwaW5nY291bnQrKztcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2VsZWN0ZWRvcmRlcjtcclxuICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xyXG4gICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgaWYgKHRoaXMudGFwcGluZ2NvdW50ID09IDMpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRXb3JkID09PSB0YXJnZXRXb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3Igd2hlbiB0aGUgb3JkZXIgaXMgY29ycmVjdFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJuZWVkIGl0ZXJhdGlvbi0tXCIgKyB0aGlzLm5lZWRSZWl0ZXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdFNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZWVkUmVpdGVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm9wdGlvbnNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaXRlcmF0aW9uXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpdGVyYXRpb25cIikuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMub3B0aW9uc05vZGUpLnRvKDAuMjUsIHsgc2NhbGVYOiAwIH0sIHsgZWFzaW5nOiAnYmFja0luT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWl0ZXJhdGlvblwiKSkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFZPZHVyYXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0Vk8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZPZHVyYXRpb24gPSB0aGlzLmNvcnJlY3RWTy5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdFZPLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBWT2R1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBWT2R1cmF0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0Vk8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVk9kdXJhdGlvbiA9IHRoaXMuY29ycmVjdFZPLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0Vk8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuTG9hZE5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFZPZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZG9yZGVyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwcGluZ2NvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV0dGVyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbG5lZ0pvY2tleSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbmNvcnJlY3Qgb3JkZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3Igd2hlbiB0aGUgb3JkZXIgaXMgaW5jb3JyZWN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRXb3JkKCkge1xyXG4gICAgICAgIC8vIFNvcnQgdGhlIG5vZGVzIGJhc2VkIG9uIHRoZWlyIHgtY29vcmRpbmF0ZVxyXG4gICAgICAgIGxldCBzb3J0ZWROb2RlcyA9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4uc29ydCgoYSwgYikgPT4gYS54IC0gYi54KTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmQgPSBzb3J0ZWROb2Rlcy5tYXAoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1twYXJzZUludChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsKSAtIDFdLmlzT3B0aW9uVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsTm9kZSA9IGNoaWxkLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTsgLy8gQWRqdXN0IGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQ29tcG9uZW50ID0gbGFiZWxOb2RlID8gbGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYWJlbENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGFiZWwgVGV4dDogXCIsIGxhYmVsQ29tcG9uZW50LnN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsQ29tcG9uZW50LnN0cmluZztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYWJlbCBDb21wb25lbnQgbm90IGZvdW5kIG9yIG5lc3RlZCBpbiBub2RlOiBcIiwgY2hpbGQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGVkIFdvcmQ6IFwiLCB3b3JkKTtcclxuICAgICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBMb2FkTmV4dFF1ZXN0aW9uKCkge1xyXG5cclxuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbENvbXBsZXRlLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIC8vcGxheWpvY2tleVxyXG4gICAgICAgIC8vIGFmdGVyIGpvY2tleSBjYWxsIGJlbG93IGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpID49IHN0YXJ0R2FtZS5JbnN0YW5jZS5Ub3RhbExldmVscykge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgKz0gMTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAocGFyc2VJbnQoc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPcHRpb25zTGF5b3V0KCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5vcHRpb25zTm9kZTtcclxuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbldpZHRoID0gb3B0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uSGVpZ2h0ID0gb3B0aW9uLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gb3B0aW9uV2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25IZWlnaHQgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IG9wdGlvbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gb3B0aW9uc0xheW91dC53aWR0aDtcclxuICAgICAgICBsZXQgdG90YWxXaWR0aFdpdGhQYWRkaW5nID0gdG90YWxXaWR0aCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuICAgICAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVXaWR0aCAvIHRvdGFsV2lkdGhXaXRoUGFkZGluZyk7XHJcblxyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZFdpZHRoID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2NhbGUgZmFjdG9yIGZvciB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgIGxldCBvcHRpb25TY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gU2NhbGUgdGhlIG9wdGlvblxyXG4gICAgICAgICAgICBvcHRpb24ud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgIG9wdGlvbi5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gYW5jaG9yIGFuZCBzY2FsZWQgc2l6ZVxyXG4gICAgICAgICAgICBsZXQgcG9zWCA9IGFjY3VtdWxhdGVkV2lkdGggKyAob3B0aW9uLndpZHRoICogb3B0aW9uLmFuY2hvclgpO1xyXG4gICAgICAgICAgICBvcHRpb24ueCA9IHBvc1ggLSAob3B0aW9uc0xheW91dC53aWR0aCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWCk7XHJcblxyXG4gICAgICAgICAgICBhY2N1bXVsYXRlZFdpZHRoICs9IG9wdGlvbi53aWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxyXG4gICAgICAgICAgICBmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC55ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0ICogc2NhbGVGYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYW5nZUNoaWxkcmVuKGNlbnRlck5vZGU6IGNjLk5vZGUsIHNwYWNpbmc6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGNlbnRlck5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdG90YWwgd2lkdGggcmVxdWlyZWRcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IGNoaWxkLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFdpZHRoICs9IHNwYWNpbmcgKiAoY2hpbGRyZW4ubGVuZ3RoIC0gMSk7IC8vIEFkZCBzcGFjZXMgYmV0d2VlbiBjaGlsZHJlblxyXG5cclxuICAgICAgICAvLyBTdGFydGluZyBYIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgLy8gQXJyYW5nZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLnggPSBzdGFydFggKyBjaGlsZC53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHN0YXJ0WCArPSBjaGlsZC53aWR0aCArIHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYWxsSm9ja2V5KCkge1xyXG4gICAgICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc3NpdGl2ZVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiLCBcInBvc2l0aXZlXzZcIiwgXCJwb3NpdGl2ZV83XCIsIFwicG9zaXRpdmVfOFwiLCBcInBvc2l0aXZlXzlcIiwgXCJwb3NpdGl2ZV8xMFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV82XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCIsIFwicG9zaXRpdmVfNVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcclxuICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XHJcbiAgICAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTE2MDAsIDE2MDBdO1xyXG4gICAgICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IFsxOTAwLCAxOTAwXTtcclxuICAgICAgICAgICAgam9ja2V5dHdlZW4gPSBbODcwLCA4NzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2V0UG9zaXRpb24ocG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSwgdGhpcy5jdXJyZW50Sm9ja2V5LnkpO1xyXG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gLTAuNjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuc2NhbGVYID0gMC42NTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvYWROZXh0UXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsbG5lZ0pvY2tleSgpIHtcclxuICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCBhbmltLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudENsaXBOdW0gPSBcIiwgY3VycmVudENsaXBOdW0pO1xyXG4gICAgICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xNjAwLCAxNjAwXTtcclxuICAgICAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlcltdID0gWy00NTAsIDQ1MF07XHJcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG4gICAgICAgICAgICBwb3MgPSBbMTkwMCwgMTkwMF07XHJcbiAgICAgICAgICAgIGpvY2tleXR3ZWVuID0gWzg3MCwgODcwXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0sIHRoaXMuY3VycmVudEpvY2tleS55KTtcclxuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDIgPT0gMCAmJiBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IC0wLjY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50Sm9ja2V5KS50bygwLjUsIHsgeDogcG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Mb2FkTmV4dFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwcml0ZUZyYW1lKGltYWdlTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkQXVkaW9DbGlwKGF1ZGlvTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWQpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhhdWRpb0NsaXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgT25Tb3VuZCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblZPLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZFwiKS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChUVklucHV0TWFuYWdlci5JbnN0YW5jZSkgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuUGxheSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICB9LCB0aGlzLnF1ZXN0aW9uVk8uZHVyYXRpb24gKyAwLjEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXR1cFRWRm9jdXMoYWN0aXZlQ29udGFpbmVyTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICBsZXQgc291bmRCdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwic291bmRcIik7XHJcbiAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgbXVzaWNCdG4uc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uQnV0dG9ucyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShhY3RpdmVDb250YWluZXJOYW1lKS5jaGlsZHJlbi5maWx0ZXIobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5hY3RpdmUgJiYgbm9kZS5vcGFjaXR5ID4gMCAmJiAoIWJ0biB8fCBidG4uaW50ZXJhY3RhYmxlICE9PSBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IFsuLi5vcHRpb25CdXR0b25zLCBiYWNrQnRuLCBzb3VuZEJ0biwgbXVzaWNCdG5dLmZpbHRlcihuID0+ICEhbik7XHJcblxyXG4gICAgICAgIC8vIHBpY2sgYSBzZW5zaWJsZSBkZWZhdWx0IOKAlCBlLmcuIGZpcnN0IG9wdGlvbiwgb3IgY29ycmVjdCBhbnN3ZXIgaW5kZXhcclxuXHJcbiAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5QbGF5KTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/SwipeToForm/Scripts/TVInputManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89d3dmJvXZCG7lvfiAEGaPE', 'TVInputManager');
// Games/SwipeToForm/Scripts/TVInputManager.ts

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
    TVInputManager.FOCUS_SCALE = 1.15;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFN3aXBlVG9Gb3JtXFxTY3JpcHRzXFxUVklucHV0TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTBRQztRQXZRVyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsb0JBQWMsR0FBeUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQStCekQsNENBQTRDO1FBR3BDLGtCQUFZLEdBQUcsVUFBQyxDQUFnQjs7WUFDcEMsSUFBTSxXQUFXLEdBQUc7Z0JBQ2hCLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osT0FBTztnQkFDUCxHQUFHO2dCQUNILE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixhQUFhO2FBQ2hCLENBQUM7WUFFRixJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQzdCLE1BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLDBDQUFFLEtBQUssR0FBRztnQkFDeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87aUJBQ2QsQ0FBQyxDQUFDO2FBQ2I7UUFDTCxDQUFDLENB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QUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3JELE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQzdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3lCQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7eUJBQzdCLEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQWpRdUIsMEJBQVcsR0FBRyxJQUFJLENBQUM7SUFFM0MsMkNBQTJDO0lBRTVCLHVCQUFRLEdBQW1CLElBQUksQ0FBQztJQVQvQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNlO0lBSHJCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwUWxDO0lBQUQscUJBQUM7Q0ExUUQsQUEwUUMsQ0ExUTJDLEVBQUUsQ0FBQyxTQUFTLEdBMFF2RDtrQkExUW9CLGNBQWM7QUE0UW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEZFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUVklucHV0TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgaG92ZXJTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGZvY3VzTm9kZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBjYW5TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbFNjYWxlczogTWFwPGNjLk5vZGUsIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT0NVU19TQ0FMRSA9IDEuMTU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSU5JVCA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBUVklucHV0TWFuYWdlciA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgaW5pdChub2RlczogY2MuTm9kZVtdLCBkZWZhdWx0SW5kZXg6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGVzID0gbm9kZXMgfHwgW107XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gbm9kZS5zY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuc2V0KG5vZGUsIHNjYWxlID4gMC4wMSA/IHNjYWxlIDogMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGRlZmF1bHRJbmRleDtcclxuICAgICAgICBpZiAoZGVmYXVsdEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXR0YWNoQ2xpY2tMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW5TZWxlY3QodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5TZWxlY3QgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSU5QVVQgPT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUVktleXMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrZWRLZXlzID0gW1xyXG4gICAgICAgICAgICBcIkFycm93VXBcIixcclxuICAgICAgICAgICAgXCJBcnJvd0Rvd25cIixcclxuICAgICAgICAgICAgXCJBcnJvd0xlZnRcIixcclxuICAgICAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwiRW50ZXJcIixcclxuICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgIFwiU3BhY2VcIixcclxuICAgICAgICAgICAgXCJTcGFjZWJhclwiLFxyXG4gICAgICAgICAgICBcIkJhY2tzcGFjZVwiLFxyXG4gICAgICAgICAgICBcIkVzY2FwZVwiLFxyXG4gICAgICAgICAgICBcIkdvQmFja1wiLFxyXG4gICAgICAgICAgICBcIkJyb3dzZXJCYWNrXCJcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2tlZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXM/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duKHtcclxuICAgICAgICAgICAgICAgIGtleUNvZGU6IGUua2V5Q29kZVxyXG4gICAgICAgICAgICB9IGFzIGFueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgVFZJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG91Y2hBY3Rpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVFZLZXlzLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2MuZ2FtZS5jYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuY2FudmFzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVUVktleXMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZXMuY2xlYXIoKTtcclxuICAgICAgICBUVklucHV0TWFuYWdlci5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIChldmVudCBhcyBhbnkpLnByZXZlbnREZWZhdWx0Py4oKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoLTEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5TZWxlY3QpIHJldHVybjtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDggfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMjdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lbnRlciB8fFxyXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMjMgfHxcclxuICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gNjZcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IENPUkUgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBtb3ZlKHN0ZXA6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW92ZVwiKVxyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPVxyXG4gICAgICAgICAgICAgICAgc3RlcCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ICs9IHN0ZXA7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmZvY3VzTm9kZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5mb2N1c05vZGVzLmxlbmd0aCkgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZm9jdXNOb2Rlc1t0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF5UHJlc3NFZmZlY3Qobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbiAmJiBidXR0b24uY2xpY2tFdmVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLmZvckVhY2goZXZlbnRIYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQ6IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09IEhFTFBFUlMgPT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMgPSB0aGlzLmZvY3VzTm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgaWYgKGJ0biAmJiAhYnRuLmludGVyYWN0YWJsZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZm9jdXNOb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVGb2N1cygpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVNjYWxlID0gdGhpcy5vcmlnaW5hbFNjYWxlcy5nZXQobm9kZSkgPz8gMTtcclxuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaG92ZXJTRlgsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgKiBUVklucHV0TWFuYWdlci5GT0NVU19TQ0FMRSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gTU9VU0UgKyBUViA9PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHBsYXlQcmVzc0VmZmVjdChub2RlOiBjYy5Ob2RlLCBjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IG5vZGUuc2NhbGU7IC8vIPCflKUgaW1wb3J0YW50XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDTElDSzpcIiwgbm9kZS5uYW1lKTtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIDAuODUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIG5vZGUuZW1pdChcInR2LXNlbGVjdFwiLCB7IHRhcmdldDogbm9kZSwgY3VycmVudFRhcmdldDogbm9kZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBiYXNlU2NhbGU7XHJcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIpO1xyXG4gICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSk7XHJcbiAgICAgICAgICAgIG5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04pO1xyXG4gICAgICAgICAgICBub2RlLm9mZihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5UHJlc3NFZmZlY3Qobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJjdXN0b20tc2VsZWN0XCIsIGV2ZW50IHx8IHsgdGFyZ2V0OiBub2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmhvdmVyU0ZYLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VTY2FsZSA9IHRoaXMub3JpZ2luYWxTY2FsZXMuZ2V0KG5vZGUpID8/IDE7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKS50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSAqIFRWSW5wdXRNYW5hZ2VyLkZPQ1VTX1NDQUxFIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlU2NhbGUgPSB0aGlzLm9yaWdpbmFsU2NhbGVzLmdldChub2RlKSA/PyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmZvY3VzTm9kZXMgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSkudG8oMC4xLCB7IHNjYWxlOiBiYXNlU2NhbGUgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2N1c05vZGVzW3RoaXMuY3VycmVudEluZGV4XSAhPT0gbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IGJhc2VTY2FsZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgICAgICAgLS0tLS0tLS0tLS0tLS1Gb3IgR2FtZXBsYXktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcbiAgICAgICAgaWYgZ2FtZSBoYXMgdG91Y2hTdGFydCBldmVudCA6IGFkZCB0aGlzIGFmdGVyIGFzc2lnbmluZyB0b3VjaFN0YXJ0IGV2ZW50XHJcbiAgICAgICAgZWxlbWVudC5vbigndHYtc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hTdGFydChlbGVtZW50KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgU3RhcnQgOlxyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9wdGlvbnNcIikuY2hpbGRyZW47XHJcbiAgICAgICAgb3B0aW9uTm9kZXMuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gY2MudHdlZW4oZWxlbWVudCkudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSBvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gdC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwVFZGb2N1cyhcIm9wdGlvbnNcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0LnN0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBGb3Igb3B0aW9uc1xyXG4gICAgICAgIGxldCBvcHRpb25Ob2RlczIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvcHRpb25zXCIpLmNoaWxkcmVuO1xyXG4gICAgICAgIG9wdGlvbk5vZGVzMi5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHQgPSBjYy50d2VlbihlbGVtZW50KS50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5zZXRDYW5TZWxlY3QodGhpcy5jYW5Ub3VjaClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSBvcHRpb25Ob2RlczIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRWRm9jdXMoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgYnV0dG9uU291bmQ6IHRoaXMuc2V0dXBUVkZvY3VzKFwib3B0aW9uc1wiKTtcclxuICAgIFxyXG4gICAgICAgIHByaXZhdGUgc2V0dXBUVkZvY3VzKGFjdGl2ZUNvbnRhaW5lck5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgbGV0IHNvdW5kQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzb3VuZGJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbkJ1dHRvbnMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoYWN0aXZlQ29udGFpbmVyTmFtZSkuY2hpbGRyZW4uZmlsdGVyKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5hY3RpdmUgJiYgbm9kZS5vcGFjaXR5ID4gMCAmJiAoIWJ0biB8fCBidG4uaW50ZXJhY3RhYmxlICE9PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSBbLi4ub3B0aW9uQnV0dG9ucywgYmFja0J0biwgc291bmRCdG4sIG11c2ljQnRuXS5maWx0ZXIobiA9PiAhIW4pO1xyXG4gICAgICAgICAgICBpZiAoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAocGFyc2VJbnQodGhpcy5hbnN3ZXJhcnJheVswXSkpIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2Uuc2V0Q2FuU2VsZWN0KHRoaXMuY2FuVG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzZXR1cFRWRm9jdXMyKCkge1xyXG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKTtcclxuICAgICAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIG11c2ljQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgbGV0IG5vZGVzID0gW2JhY2tCdG4sIG11c2ljQnRuLF07XHJcbiAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0cnVlKTtcclxuICAgICAgICAgICAgVFZJbnB1dE1hbmFnZXIuSW5zdGFuY2UuaW5pdChub2Rlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZFNjcmVlbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgIG9ubG9hZCA6IFxyXG4gICAgICAgICAgICAgICAgbGV0IGJhY2tCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhY2tcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVzaWNCdG4gPSBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBtdXNpY0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZXMgPSBbYmFja0J0biwgbXVzaWNCdG4sXTtcclxuICAgICAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLnNldENhblNlbGVjdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIFRWSW5wdXRNYW5hZ2VyLkluc3RhbmNlLmluaXQobm9kZXMpO1xyXG4gICAgXHJcblxyXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0R2FtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG9ubG9hZCA6XHJcbiAgICAgICAgICAgIGxldCBiYWNrQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKTtcclxuICAgICAgICAgICAgbGV0IG11c2ljQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIik7XHJcbiAgICAgICAgICAgIGxldCBub2RlcyA9IFtiYWNrQnRuLCBtdXNpY0J0bixdO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUVklucHV0TWFuYWdlci5JbnN0YW5jZS5pbml0KG5vZGVzKTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgIFxyXG4qLyJdfQ==
//------QC-SOURCE-SPLIT------

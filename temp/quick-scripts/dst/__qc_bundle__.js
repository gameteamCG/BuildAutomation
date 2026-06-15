
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
require('./assets/Games/ArcheryGame/scripts/ArrowScript');
require('./assets/Games/ArcheryGame/scripts/GameManager');
require('./assets/Games/ArcheryGame/scripts/Target');
require('./assets/Games/ArcheryGame/scripts/gameEnd');
require('./assets/Games/ArcheryGame/scripts/globalVariables');
require('./assets/Games/ArcheryGame/scripts/graphics');
require('./assets/Games/ArcheryGame/scripts/roughArea');
require('./assets/Games/ArcheryGame/utils/Constants');
require('./assets/Games/ArcheryGame/utils/EventSystem');
require('./assets/Games/ArcheryGame/utils/Helpers');
require('./assets/Games/MainAssets/Scripts/FontChanger');
require('./assets/Games/MainAssets/Scripts/GameEnd');
require('./assets/Games/MainAssets/Scripts/JockeyController');
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
cc._RF.push(module, '08d69cvmAtH6amp5NXMhdJN', 'empty');
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
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/Target.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d3d7Z1GipLSY2FmCepx0Hl', 'Target');
// Games/ArcheryGame/scripts/Target.ts

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
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 0;
        _this.targetLabel = null;
        _this.defColor = new cc.Color(255, 255, 255);
        return _this;
    }
    Target.prototype.setValue = function (val) {
        // this.value = val;
        // console.log("target node :", this.node.name)
        // this.targetLabel.string = this.value.toFixed();
        // this.targetLabel.node.color = this.defColor;
    };
    Target.prototype.setColor = function (color) {
        this.targetLabel.node.color = color;
    };
    Target.prototype.setDefColor = function () {
        this.targetLabel.node.color = this.defColor;
    };
    Target.prototype.onLoad = function () {
        this.value = parseInt(this.node.name);
    };
    __decorate([
        property(cc.Label)
    ], Target.prototype, "targetLabel", void 0);
    Target = __decorate([
        ccclass
    ], Target);
    return Target;
}(cc.Component));
exports.default = Target;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxUYXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUEwQkM7UUF6QlEsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7O0lBb0JoRCxDQUFDO0lBbEJRLHlCQUFRLEdBQWYsVUFBZ0IsR0FBVztRQUN6QixvQkFBb0I7UUFDcEIsK0NBQStDO1FBQy9DLGtEQUFrRDtRQUNsRCwrQ0FBK0M7SUFDakQsQ0FBQztJQUVNLHlCQUFRLEdBQWYsVUFBZ0IsS0FBZTtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFTSw0QkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ2lCO0lBSmpCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwQjFCO0lBQUQsYUFBQztDQTFCRCxBQTBCQyxDQTFCbUMsRUFBRSxDQUFDLFNBQVMsR0EwQi9DO2tCQTFCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIHB1YmxpYyB2YWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHB1YmxpYyB0YXJnZXRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgZGVmQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWw6IG51bWJlcikge1xyXG4gICAgLy8gdGhpcy52YWx1ZSA9IHZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGFyZ2V0IG5vZGUgOlwiLCB0aGlzLm5vZGUubmFtZSlcclxuICAgIC8vIHRoaXMudGFyZ2V0TGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZS50b0ZpeGVkKCk7XHJcbiAgICAvLyB0aGlzLnRhcmdldExhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmRlZkNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENvbG9yKGNvbG9yOiBjYy5Db2xvcikge1xyXG4gICAgdGhpcy50YXJnZXRMYWJlbC5ub2RlLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGVmQ29sb3IoKSB7XHJcbiAgICB0aGlzLnRhcmdldExhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmRlZkNvbG9yO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHBhcnNlSW50KHRoaXMubm9kZS5uYW1lKTtcclxuICB9XHJcbn1cclxuIl19
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
        var maxLevels = StartGame_1.default.Instance.totalLevels; //totalLevels
        console.log("maxLevel : ", maxLevels);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxQcmVmYWJzXFxQcm9ncmVzc0JhclxcU2NyaXB0c1xcUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBSTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa0pDO1FBOUlXLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBYzVCLGlCQUFXLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQStIdkQsaUJBQWlCO0lBQ3JCLENBQUM7b0JBbEpvQixXQUFXO0lBb0I1QixzQkFBVyx1QkFBUTthQUFuQjtZQUNJLE9BQU8sYUFBVyxDQUFDLFFBQVEsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0kseUNBQXlDO1FBQ3pDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxZQUFvQixFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7UUFDdEQsd0NBQXdDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQSxhQUFhO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxF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QyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNmLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBM0R0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFO29CQUFsQyxDQUFDO1NBNERUO0lBQ0wsQ0FBQzs7SUE1SWMsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTVDO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzttREFDa0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNTO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNZO0lBaEJsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa0ovQjtJQUFELGtCQUFDO0NBbEpELEFBa0pDLENBbEp3QyxFQUFFLENBQUMsU0FBUyxHQWtKcEQ7a0JBbEpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGlzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHN0YXJJbWc6IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcclxuICAgIHByaXZhdGUgdHJhaWxzSW1nOiBjYy5UZXh0dXJlMkQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgdHJhaWxTb3VuZHM6IGNjLkF1ZGlvQ2xpcDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHBhcnRpY2xlU291bmRzOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBzdGFyUG9wU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXJzRWFybmVkOiBCb29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZ3Jlc3NGaWxsKF9jdXJyZW50UXVlczogbnVtYmVyLCBzdGFyTG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlU3RhclRyYWlscygxMCwgdGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgcGFydGljbGVzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVzXCIgKyAxKTtcclxuICAgICAgICBsZXQgbWF4TGV2ZWxzID0gc3RhcnRHYW1lLkluc3RhbmNlLnRvdGFsTGV2ZWxzOy8vdG90YWxMZXZlbHNcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1heExldmVsIDogXCIsIG1heExldmVscylcclxuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikpLnRvKDAuNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyUG9wU291bmQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGlmIChfY3VycmVudFF1ZXMgIT0gMCAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzIC8gMikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMF0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFswXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0xXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9jdXJyZW50UXVlcyA+PSBtYXhMZXZlbHMgLyAyICYmIF9jdXJyZW50UXVlcyA8IG1heExldmVscyAmJiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXS5vcGFjaXR5ID09IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXJzRWFybmVkWzFdICYmIHN0YXJMb2cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnNFYXJuZWRbMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzICYmIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdLm9wYWNpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMl0gJiYgc3RhckxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFsyXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzFdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzJdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gX251bWJlciA9IF9udW1iZXIgKiB0aGlzLnNoYXBlcy5sZW5ndGg7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVN0YXJUcmFpbHMobnVtOiBudW1iZXIsIF9ub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHJuZ19OdW1PZlBhcnRpY2xlcyA9IG51bTtcclxuICAgICAgICBsZXQgX29mZnNldCA9IDUwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBybmdfTnVtT2ZQYXJ0aWNsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgTm9kZVBPUyA9IF9ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucGFyZW50LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IHJuZ1ggPSB0aGlzLmdldFJhbmRvbU51bWJlcihfbm9kZS54IC0gX29mZnNldCwgX25vZGUueCArIF9vZmZzZXQpO1xyXG4gICAgICAgICAgICBsZXQgcm5nWSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9ub2RlLnkgLSBfb2Zmc2V0LCBfbm9kZS55ICsgX29mZnNldCk7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZXMgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCB0cmFpbCA9IGNjLmluc3RhbnRpYXRlKG5ldyBjYy5Ob2RlKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYWlsLnBhcmVudCA9IHBhcnRpY2xlcztcclxuICAgICAgICAgICAgcGFydGljbGVzLnggPSBybmdYO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMueSA9IHJuZ1k7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RhckltZztcclxuICAgICAgICAgICAgcGFydGljbGVzLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMucGFydGljbGVTb3VuZHM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICAgICAgcGFydGljbGVzLmFuZ2xlID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMzYwKTtcclxuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMubmFtZSA9IGBwYXJ0aWNsZXNgICsgaTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS50ZXh0dXJlID0gdGhpcy50cmFpbHNJbWc7XHJcbiAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdHJhaWwuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjUyLCAyNDQsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgd2lkdGg6IDM1LCBoZWlnaHQ6IDM1IH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC4yNSwgeyBhbmdsZTogMCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgYW5nbGU6IDE4MCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLnN0YXJ0KCkudG8oMC4yNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5taW5TZWcgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhZGVUaW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmZhc3RNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRyYWlsU291bmRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnRyYWlsU291bmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS52b2x1bWUgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykuYmV6aWVyVG8oMC43NSwgbmV3IGNjLlZlYzIocGFydGljbGVzLngsIHBhcnRpY2xlcy55KSwgLy9zdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggLyAyICsgKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoICogdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MpKSkgLy9lbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbygwLjc1LCBuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLCAvL3N0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlZlYzIodGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnggLSAxMDAsIHBhcnRpY2xlcy54ICsgMTAwKSwgdGhpcy5nZXRSYW5kb21OdW1iZXIocGFydGljbGVzLnkgLSA1MDAsIHBhcnRpY2xlcy55ICsgMjAwKSksIC8vY3VydmUgcmFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLm5vZGUueCAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSwgdGhpcy5ub2RlLnkpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBhbmdsZTogLXBhcnRpY2xlcy5hbmdsZSAvIDIgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMSAqIChpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/gameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06514WlvWJKt6t02NWjxWSC', 'gameEnd');
// Games/ArcheryGame/scripts/gameEnd.ts

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
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        StartGame_1.default.Instance.node.getChildByName("progress").active = false;
        StartGame_1.default.Instance.JockeyNode.getChildByName(StartGame_1.default.Instance.jockeyName).active = false;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxnYW1lRW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9CQztRQWpCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBYXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBWkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEUsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQy9GLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9CNUI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEJxQyxFQUFFLENBQUMsU0FBUyxHQW9CakQ7a0JBcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/MainAssets/Scripts/FontChanger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'daae5i3rR9GhqyCjrp9sFbV', 'FontChanger');
// Games/MainAssets/Scripts/FontChanger.ts

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
var TextComponentFontChanger = /** @class */ (function (_super) {
    __extends(TextComponentFontChanger, _super);
    function TextComponentFontChanger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newFont = null;
        _this.richTextFont = null; // Optional separate font for RichText
        _this.excludedNodes = [];
        _this.applyOnLoad = true;
        _this.targetRootNode = null;
        _this.debugMode = true;
        // Delay in seconds before applying changes
        _this.initialDelay = 0.1;
        return _this;
    }
    TextComponentFontChanger.prototype.onLoad = function () {
        var _this = this;
        if (this.applyOnLoad) {
            this.scheduleOnce(function () { return _this.changeAllTextFonts(); }, this.initialDelay);
        }
    };
    TextComponentFontChanger.prototype.changeAllTextFonts = function () {
        if (!this.newFont && !this.richTextFont) {
            this.logError("No fonts assigned for either Label or RichText!");
            return;
        }
        var rootNode = this.targetRootNode || this.node;
        this.log("Starting font change from root: " + rootNode.name);
        this.processNode(rootNode);
        this.log("Font change operation completed");
    };
    TextComponentFontChanger.prototype.processNode = function (node) {
        var _this = this;
        if (this.isNodeExcluded(node)) {
            this.log("Skipping excluded node: " + node.name);
            return;
        }
        // Process Label component if exists
        var label = node.getComponent(cc.Label);
        if (label && this.newFont) {
            this.changeLabelFont(node, label);
        }
        // Process RichText component if exists
        var richText = node.getComponent(cc.RichText);
        if (richText && this.richTextFont) {
            this.changeRichTextFont(node, richText);
        }
        // Process children recursively
        node.children.forEach(function (child) { return _this.processNode(child); });
    };
    TextComponentFontChanger.prototype.changeLabelFont = function (node, label) {
        var _a;
        if (!label.enabled) {
            this.log("Skipping disabled Label on node: " + node.name);
            return;
        }
        try {
            this.log("Changing Label font on " + node.name + " from " + (((_a = label.font) === null || _a === void 0 ? void 0 : _a.name) || 'default') + " to " + this.newFont.name);
            label.font = this.newFont;
            this.forceLabelUpdate(label);
        }
        catch (error) {
            this.logError("Failed to change Label font on " + node.name + ": " + error);
        }
    };
    TextComponentFontChanger.prototype.changeRichTextFont = function (node, richText) {
        var _a;
        if (!richText.enabled) {
            this.log("Skipping disabled RichText on node: " + node.name);
            return;
        }
        try {
            var fontToUse = this.richTextFont || this.newFont;
            this.log("Changing RichText font on " + node.name + " to " + fontToUse.name);
            richText.font = fontToUse;
            (_a = richText['_updateRenderData']) === null || _a === void 0 ? void 0 : _a.call(richText);
        }
        catch (error) {
            this.logError("Failed to change RichText font on " + node.name + ": " + error);
        }
    };
    TextComponentFontChanger.prototype.forceLabelUpdate = function (label) {
        var _a, _b, _c;
        // Multiple update methods for different Cocos versions
        (_a = label['_updateRenderData']) === null || _a === void 0 ? void 0 : _a.call(label);
        label['_renderData'] = null;
        (_b = label['_forceUpdateRenderData']) === null || _b === void 0 ? void 0 : _b.call(label);
        (_c = label['_activateMaterial']) === null || _c === void 0 ? void 0 : _c.call(label);
    };
    TextComponentFontChanger.prototype.isNodeExcluded = function (node) {
        return this.excludedNodes.some(function (excludedNode) {
            return excludedNode === node || node.isChildOf(excludedNode);
        });
    };
    // Debug utilities
    TextComponentFontChanger.prototype.log = function (message) {
        if (this.debugMode)
            cc.log("[FontChanger] " + message);
    };
    TextComponentFontChanger.prototype.logError = function (message) {
        cc.error("[FontChanger] ERROR: " + message);
    };
    // Public API
    TextComponentFontChanger.prototype.addExclusion = function (node) {
        if (!this.excludedNodes.includes(node)) {
            this.excludedNodes.push(node);
            this.log("Added exclusion: " + node.name);
        }
    };
    TextComponentFontChanger.prototype.removeExclusion = function (node) {
        var index = this.excludedNodes.indexOf(node);
        if (index >= 0) {
            this.excludedNodes.splice(index, 1);
            this.log("Removed exclusion: " + node.name);
        }
    };
    __decorate([
        property(cc.Font)
    ], TextComponentFontChanger.prototype, "newFont", void 0);
    __decorate([
        property(cc.Font)
    ], TextComponentFontChanger.prototype, "richTextFont", void 0);
    __decorate([
        property({
            type: [cc.Node],
            tooltip: "Nodes to exclude from font changes"
        })
    ], TextComponentFontChanger.prototype, "excludedNodes", void 0);
    __decorate([
        property({
            tooltip: "Apply changes automatically when scene loads"
        })
    ], TextComponentFontChanger.prototype, "applyOnLoad", void 0);
    __decorate([
        property(cc.Node)
    ], TextComponentFontChanger.prototype, "targetRootNode", void 0);
    __decorate([
        property({
            tooltip: "Show detailed processing logs"
        })
    ], TextComponentFontChanger.prototype, "debugMode", void 0);
    __decorate([
        property({
            tooltip: "Initial delay before applying changes",
            min: 0
        })
    ], TextComponentFontChanger.prototype, "initialDelay", void 0);
    TextComponentFontChanger = __decorate([
        ccclass
    ], TextComponentFontChanger);
    return TextComponentFontChanger;
}(cc.Component));
exports.default = TextComponentFontChanger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW5Bc3NldHNcXFNjcmlwdHNcXEZvbnRDaGFuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNELDRDQUFZO0lBQWxFO1FBQUEscUVBb0pDO1FBbEpHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBWSxJQUFJLENBQUMsQ0FBRSxzQ0FBc0M7UUFNckUsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFLOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFLL0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQiwyQ0FBMkM7UUFLM0Msa0JBQVksR0FBVyxHQUFHLENBQUM7O0lBcUgvQixDQUFDO0lBbkhHLHlDQUFNLEdBQU47UUFBQSxpQkFJQztRQUhHLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBekIsQ0FBeUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekU7SUFDTCxDQUFDO0lBRUQscURBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsaURBQWlELENBQUMsQ0FBQztZQUNqRSxPQUFPO1NBQ1Y7UUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBbUMsUUFBUSxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBRTdE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WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQWpKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0VBQ1c7SUFNN0I7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsT0FBTyxFQUFFLG9DQUFvQztTQUNoRCxDQUFDO21FQUM0QjtJQUs5QjtRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSw4Q0FBOEM7U0FDMUQsQ0FBQztpRUFDMEI7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvRUFDYTtJQUsvQjtRQUhDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSwrQkFBK0I7U0FDM0MsQ0FBQzsrREFDd0I7SUFPMUI7UUFKQyxRQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsdUNBQXVDO1lBQ2hELEdBQUcsRUFBRSxDQUFDO1NBQ1QsQ0FBQztrRUFDeUI7SUEvQlYsd0JBQXdCO1FBRDVDLE9BQU87T0FDYSx3QkFBd0IsQ0FvSjVDO0lBQUQsK0JBQUM7Q0FwSkQsQUFvSkMsQ0FwSnFELEVBQUUsQ0FBQyxTQUFTLEdBb0pqRTtrQkFwSm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q29tcG9uZW50Rm9udENoYW5nZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgICBuZXdGb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIHJpY2hUZXh0Rm9udDogY2MuRm9udCA9IG51bGw7ICAvLyBPcHRpb25hbCBzZXBhcmF0ZSBmb250IGZvciBSaWNoVGV4dFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgICAgIHRvb2x0aXA6IFwiTm9kZXMgdG8gZXhjbHVkZSBmcm9tIGZvbnQgY2hhbmdlc1wiXHJcbiAgICB9KVxyXG4gICAgZXhjbHVkZWROb2RlczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBcIkFwcGx5IGNoYW5nZXMgYXV0b21hdGljYWxseSB3aGVuIHNjZW5lIGxvYWRzXCJcclxuICAgIH0pXHJcbiAgICBhcHBseU9uTG9hZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXRSb290Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBcIlNob3cgZGV0YWlsZWQgcHJvY2Vzc2luZyBsb2dzXCJcclxuICAgIH0pXHJcbiAgICBkZWJ1Z01vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIERlbGF5IGluIHNlY29uZHMgYmVmb3JlIGFwcGx5aW5nIGNoYW5nZXNcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogXCJJbml0aWFsIGRlbGF5IGJlZm9yZSBhcHBseWluZyBjaGFuZ2VzXCIsXHJcbiAgICAgICAgbWluOiAwXHJcbiAgICB9KVxyXG4gICAgaW5pdGlhbERlbGF5OiBudW1iZXIgPSAwLjE7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFwcGx5T25Mb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuY2hhbmdlQWxsVGV4dEZvbnRzKCksIHRoaXMuaW5pdGlhbERlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQWxsVGV4dEZvbnRzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5uZXdGb250ICYmICF0aGlzLnJpY2hUZXh0Rm9udCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ0Vycm9yKFwiTm8gZm9udHMgYXNzaWduZWQgZm9yIGVpdGhlciBMYWJlbCBvciBSaWNoVGV4dCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJvb3ROb2RlID0gdGhpcy50YXJnZXRSb290Tm9kZSB8fCB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5sb2coYFN0YXJ0aW5nIGZvbnQgY2hhbmdlIGZyb20gcm9vdDogJHtyb290Tm9kZS5uYW1lfWApO1xyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3NOb2RlKHJvb3ROb2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2coXCJGb250IGNoYW5nZSBvcGVyYXRpb24gY29tcGxldGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc05vZGUobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTm9kZUV4Y2x1ZGVkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nKGBTa2lwcGluZyBleGNsdWRlZCBub2RlOiAke25vZGUubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBMYWJlbCBjb21wb25lbnQgaWYgZXhpc3RzXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgaWYgKGxhYmVsICYmIHRoaXMubmV3Rm9udCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxhYmVsRm9udChub2RlLCBsYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIFJpY2hUZXh0IGNvbXBvbmVudCBpZiBleGlzdHNcclxuICAgICAgICBjb25zdCByaWNoVGV4dCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcclxuICAgICAgICBpZiAocmljaFRleHQgJiYgdGhpcy5yaWNoVGV4dEZvbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VSaWNoVGV4dEZvbnQobm9kZSwgcmljaFRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBjaGlsZHJlbiByZWN1cnNpdmVseVxyXG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0aGlzLnByb2Nlc3NOb2RlKGNoaWxkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VMYWJlbEZvbnQobm9kZTogY2MuTm9kZSwgbGFiZWw6IGNjLkxhYmVsKSB7XHJcbiAgICAgICAgaWYgKCFsYWJlbC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nKGBTa2lwcGluZyBkaXNhYmxlZCBMYWJlbCBvbiBub2RlOiAke25vZGUubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5sb2coYENoYW5naW5nIExhYmVsIGZvbnQgb24gJHtub2RlLm5hbWV9IGZyb20gJHtsYWJlbC5mb250Py5uYW1lIHx8ICdkZWZhdWx0J30gdG8gJHt0aGlzLm5ld0ZvbnQubmFtZX1gKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsLmZvbnQgPSB0aGlzLm5ld0ZvbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VMYWJlbFVwZGF0ZShsYWJlbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nRXJyb3IoYEZhaWxlZCB0byBjaGFuZ2UgTGFiZWwgZm9udCBvbiAke25vZGUubmFtZX06ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlUmljaFRleHRGb250KG5vZGU6IGNjLk5vZGUsIHJpY2hUZXh0OiBjYy5SaWNoVGV4dCkge1xyXG4gICAgICAgIGlmICghcmljaFRleHQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyhgU2tpcHBpbmcgZGlzYWJsZWQgUmljaFRleHQgb24gbm9kZTogJHtub2RlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbnRUb1VzZSA9IHRoaXMucmljaFRleHRGb250IHx8IHRoaXMubmV3Rm9udDtcclxuICAgICAgICAgICAgdGhpcy5sb2coYENoYW5naW5nIFJpY2hUZXh0IGZvbnQgb24gJHtub2RlLm5hbWV9IHRvICR7Zm9udFRvVXNlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByaWNoVGV4dC5mb250ID0gZm9udFRvVXNlO1xyXG4gICAgICAgICAgICByaWNoVGV4dFsnX3VwZGF0ZVJlbmRlckRhdGEnXT8uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nRXJyb3IoYEZhaWxlZCB0byBjaGFuZ2UgUmljaFRleHQgZm9udCBvbiAke25vZGUubmFtZX06ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9yY2VMYWJlbFVwZGF0ZShsYWJlbDogY2MuTGFiZWwpIHtcclxuICAgICAgICAvLyBNdWx0aXBsZSB1cGRhdGUgbWV0aG9kcyBmb3IgZGlmZmVyZW50IENvY29zIHZlcnNpb25zXHJcbiAgICAgICAgbGFiZWxbJ191cGRhdGVSZW5kZXJEYXRhJ10/LigpO1xyXG4gICAgICAgIGxhYmVsWydfcmVuZGVyRGF0YSddID0gbnVsbDtcclxuICAgICAgICBsYWJlbFsnX2ZvcmNlVXBkYXRlUmVuZGVyRGF0YSddPy4oKTtcclxuICAgICAgICBsYWJlbFsnX2FjdGl2YXRlTWF0ZXJpYWwnXT8uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05vZGVFeGNsdWRlZChub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhjbHVkZWROb2Rlcy5zb21lKGV4Y2x1ZGVkTm9kZSA9PiBcclxuICAgICAgICAgICAgZXhjbHVkZWROb2RlID09PSBub2RlIHx8IG5vZGUuaXNDaGlsZE9mKGV4Y2x1ZGVkTm9kZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlYnVnIHV0aWxpdGllc1xyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdNb2RlKSBjYy5sb2coYFtGb250Q2hhbmdlcl0gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MuZXJyb3IoYFtGb250Q2hhbmdlcl0gRVJST1I6ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgQVBJXHJcbiAgICBwdWJsaWMgYWRkRXhjbHVzaW9uKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXhjbHVkZWROb2Rlcy5pbmNsdWRlcyhub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4Y2x1ZGVkTm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5sb2coYEFkZGVkIGV4Y2x1c2lvbjogJHtub2RlLm5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVFeGNsdXNpb24obm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5leGNsdWRlZE5vZGVzLmluZGV4T2Yobm9kZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5leGNsdWRlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nKGBSZW1vdmVkIGV4Y2x1c2lvbjogJHtub2RlLm5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
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
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/graphics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a971ebhNVpMDaezT79cYiY1', 'graphics');
// Games/ArcheryGame/scripts/graphics.ts

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
var roughArea_1 = require("./roughArea");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Graphics = /** @class */ (function (_super) {
    __extends(Graphics, _super);
    function Graphics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touches = [];
        _this.graphics = null;
        _this.maxPoints = 1000;
        _this.isDrawing = false; // Track if a line is being drawn
        return _this;
    }
    Graphics.prototype.start = function () {
        var board = this.node.parent.parent.getChildByName("board");
        // Add touch event listeners
        board.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        board.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        board.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        // Get the single Graphics component for the entire drawing
        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.clear();
        this.touches.length = 0;
    };
    Graphics.prototype.onTouchStart = function (event) {
        // Start a new path without clearing the previous drawings
        var touchLocation = event.touch.getLocation();
        this.touches.length = 0;
        this.touches.push(touchLocation);
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.graphics.moveTo(touchLocation.x - worldPos.x, touchLocation.y - worldPos.y);
        this.isDrawing = true; // Start drawing
    };
    Graphics.prototype.onTouchMove = function (event) {
        if (!this.isDrawing)
            return; // Only draw if the touch has started
        var touchLocation = event.touch.getLocation();
        var touches = this.touches;
        touches.push(touchLocation);
        if (touches.length > this.maxPoints) {
            touches.shift();
        }
        var worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        // Continue from the last point and draw to the new point
        this.graphics.lineTo(touchLocation.x - worldPos.x, touchLocation.y - worldPos.y);
        this.graphics.stroke();
        // Set the stroke color
        this.graphics.strokeColor =
            this.node.parent.parent.getComponent(roughArea_1.default).currentColor;
    };
    Graphics.prototype.onTouchEnd = function (event) {
        // Finish drawing when touch ends
        this.isDrawing = false;
    };
    Graphics = __decorate([
        ccclass
    ], Graphics);
    return Graphics;
}(cc.Component));
exports.default = Graphics;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxncmFwaGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnRUM7UUEvREMsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUM3QixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxLQUFLLENBQUMsQ0FBQyxpQ0FBaUM7O0lBNEQvRCxDQUFDO0lBMURDLHdCQUFLLEdBQUw7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVELDRCQUE0QjtRQUM1QixLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCwyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsMERBQTBEO1FBQzFELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWpDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDNUIsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUM3QixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0I7SUFDekMsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxDQUFDLHFDQUFxQztRQUVsRSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEIsYUFBYSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUM1QixhQUFhLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXZCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ2pFLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBSztRQUNkLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBL0RrQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0U1QjtJQUFELGVBQUM7Q0FoRUQsQUFnRUMsQ0FoRXFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0VqRDtrQkFoRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91Z2hBcmVhIGZyb20gXCIuL3JvdWdoQXJlYVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICB0b3VjaGVzOiBjYy5WZWMyW10gPSBbXTtcclxuICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gIG1heFBvaW50czogbnVtYmVyID0gMTAwMDtcclxuICBpc0RyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTsgLy8gVHJhY2sgaWYgYSBsaW5lIGlzIGJlaW5nIGRyYXduXHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdmFyIGJvYXJkID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJib2FyZFwiKTtcclxuXHJcbiAgICAvLyBBZGQgdG91Y2ggZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBib2FyZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgYm9hcmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICBib2FyZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBzaW5nbGUgR3JhcGhpY3MgY29tcG9uZW50IGZvciB0aGUgZW50aXJlIGRyYXdpbmdcclxuICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICB0aGlzLnRvdWNoZXMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgLy8gU3RhcnQgYSBuZXcgcGF0aCB3aXRob3V0IGNsZWFyaW5nIHRoZSBwcmV2aW91cyBkcmF3aW5nc1xyXG4gICAgbGV0IHRvdWNoTG9jYXRpb24gPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgdGhpcy50b3VjaGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnRvdWNoZXMucHVzaCh0b3VjaExvY2F0aW9uKTtcclxuXHJcbiAgICBsZXQgd29ybGRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKCkpO1xyXG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oXHJcbiAgICAgIHRvdWNoTG9jYXRpb24ueCAtIHdvcmxkUG9zLngsXHJcbiAgICAgIHRvdWNoTG9jYXRpb24ueSAtIHdvcmxkUG9zLnlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlOyAvLyBTdGFydCBkcmF3aW5nXHJcbiAgfVxyXG5cclxuICBvblRvdWNoTW92ZShldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRHJhd2luZykgcmV0dXJuOyAvLyBPbmx5IGRyYXcgaWYgdGhlIHRvdWNoIGhhcyBzdGFydGVkXHJcblxyXG4gICAgbGV0IHRvdWNoTG9jYXRpb24gPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHRvdWNoZXMgPSB0aGlzLnRvdWNoZXM7XHJcbiAgICB0b3VjaGVzLnB1c2godG91Y2hMb2NhdGlvbik7XHJcblxyXG4gICAgaWYgKHRvdWNoZXMubGVuZ3RoID4gdGhpcy5tYXhQb2ludHMpIHtcclxuICAgICAgdG91Y2hlcy5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoKSk7XHJcblxyXG4gICAgLy8gQ29udGludWUgZnJvbSB0aGUgbGFzdCBwb2ludCBhbmQgZHJhdyB0byB0aGUgbmV3IHBvaW50XHJcbiAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhcclxuICAgICAgdG91Y2hMb2NhdGlvbi54IC0gd29ybGRQb3MueCxcclxuICAgICAgdG91Y2hMb2NhdGlvbi55IC0gd29ybGRQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzdHJva2UgY29sb3JcclxuICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPVxyXG4gICAgICB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQocm91Z2hBcmVhKS5jdXJyZW50Q29sb3I7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAvLyBGaW5pc2ggZHJhd2luZyB3aGVuIHRvdWNoIGVuZHNcclxuICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/utils/Helpers.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '559c1Hu6CdCw7Ml+E/YGsbe', 'Helpers');
// Games/ArcheryGame/utils/Helpers.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Constants");
var DebugHelpers = /** @class */ (function () {
    function DebugHelpers() {
    }
    /* *INFO: write debug and utility functions here, for docs, search with HELPER
    you can add more log types when the project becomes complex */
    DebugHelpers.prototype.log = function (msg, type) {
        if (!Constants_1.enableLogs) {
            return;
        }
        var background = "";
        var typeName = "";
        switch (type) {
            case Constants_1.LogTypes.INFO:
                background = "background: green;";
                typeName = Constants_1.LogTypes.INFO;
                break;
            case Constants_1.LogTypes.ERROR:
                background = "background: red;";
                typeName = Constants_1.LogTypes.ERROR;
                break;
            case Constants_1.LogTypes.TRACK:
                background = "background: purple;";
                typeName = Constants_1.LogTypes.TRACK;
                break;
            case Constants_1.LogTypes.CREATION:
                background = "background: teal;";
                typeName = Constants_1.LogTypes.CREATION;
                break;
            case Constants_1.LogTypes.DESTRUCTION:
                background = "background: orange;";
                typeName = Constants_1.LogTypes.DESTRUCTION;
                break;
            default:
                background = "";
                break;
        }
        console.log("%c" + typeName, "font-weight: bold; " + background);
        console.log("%c" + msg, "" + background);
        if (typeName == Constants_1.LogTypes.ERROR) {
            console.trace("Error Stack Trace: ");
        }
    };
    DebugHelpers.prototype.customDebugger = function () {
        if (Constants_1.enableDebuggers) {
            debugger;
        }
    };
    return DebugHelpers;
}());
var debug = new DebugHelpers();
exports.default = debug;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFx1dGlsc1xcSGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvRTtBQUVwRTtJQUFBO0lBK0NBLENBQUM7SUE5Q0M7a0VBQzhEO0lBQ3ZELDBCQUFHLEdBQVYsVUFBVyxHQUFRLEVBQUUsSUFBWTtRQUMvQixJQUFJLENBQUMsc0JBQVUsRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLG9CQUFRLENBQUMsSUFBSTtnQkFDaEIsVUFBVSxHQUFHLG9CQUFvQixDQUFDO2dCQUNsQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsS0FBSztnQkFDakIsVUFBVSxHQUFHLGtCQUFrQixDQUFDO2dCQUNoQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsS0FBSztnQkFDakIsVUFBVSxHQUFHLHFCQUFxQixDQUFDO2dCQUNuQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsUUFBUTtnQkFDcEIsVUFBVSxHQUFHLG1CQUFtQixDQUFDO2dCQUNqQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQzdCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsV0FBVztnQkFDdkIsVUFBVSxHQUFHLHFCQUFxQixDQUFDO2dCQUNuQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDUjtnQkFDRSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixNQUFNO1NBQ1Q7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssUUFBVSxFQUFFLHdCQUFzQixVQUFZLENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssR0FBSyxFQUFFLEtBQUcsVUFBWSxDQUFDLENBQUM7UUFFekMsSUFBSSxRQUFRLElBQUksb0JBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVNLHFDQUFjLEdBQXJCO1FBQ0UsSUFBSSwyQkFBZSxFQUFFO1lBQ25CLFFBQVEsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQUVELElBQU0sS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFFakMsa0JBQWUsS0FBSyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5hYmxlRGVidWdnZXJzLCBlbmFibGVMb2dzLCBMb2dUeXBlcyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgRGVidWdIZWxwZXJzIHtcclxuICAvKiAqSU5GTzogd3JpdGUgZGVidWcgYW5kIHV0aWxpdHkgZnVuY3Rpb25zIGhlcmUsIGZvciBkb2NzLCBzZWFyY2ggd2l0aCBIRUxQRVJcclxuICB5b3UgY2FuIGFkZCBtb3JlIGxvZyB0eXBlcyB3aGVuIHRoZSBwcm9qZWN0IGJlY29tZXMgY29tcGxleCAqL1xyXG4gIHB1YmxpYyBsb2cobXNnOiBhbnksIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKCFlbmFibGVMb2dzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBiYWNrZ3JvdW5kID0gXCJcIjtcclxuICAgIGxldCB0eXBlTmFtZSA9IFwiXCI7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBMb2dUeXBlcy5JTkZPOlxyXG4gICAgICAgIGJhY2tncm91bmQgPSBcImJhY2tncm91bmQ6IGdyZWVuO1wiO1xyXG4gICAgICAgIHR5cGVOYW1lID0gTG9nVHlwZXMuSU5GTztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dUeXBlcy5FUlJPUjpcclxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kOiByZWQ7XCI7XHJcbiAgICAgICAgdHlwZU5hbWUgPSBMb2dUeXBlcy5FUlJPUjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dUeXBlcy5UUkFDSzpcclxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kOiBwdXJwbGU7XCI7XHJcbiAgICAgICAgdHlwZU5hbWUgPSBMb2dUeXBlcy5UUkFDSztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dUeXBlcy5DUkVBVElPTjpcclxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kOiB0ZWFsO1wiO1xyXG4gICAgICAgIHR5cGVOYW1lID0gTG9nVHlwZXMuQ1JFQVRJT047XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9nVHlwZXMuREVTVFJVQ1RJT046XHJcbiAgICAgICAgYmFja2dyb3VuZCA9IFwiYmFja2dyb3VuZDogb3JhbmdlO1wiO1xyXG4gICAgICAgIHR5cGVOYW1lID0gTG9nVHlwZXMuREVTVFJVQ1RJT047XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYmFja2dyb3VuZCA9IFwiXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgJWMke3R5cGVOYW1lfWAsIGBmb250LXdlaWdodDogYm9sZDsgJHtiYWNrZ3JvdW5kfWApO1xyXG4gICAgY29uc29sZS5sb2coYCVjJHttc2d9YCwgYCR7YmFja2dyb3VuZH1gKTtcclxuXHJcbiAgICBpZiAodHlwZU5hbWUgPT0gTG9nVHlwZXMuRVJST1IpIHtcclxuICAgICAgY29uc29sZS50cmFjZShcIkVycm9yIFN0YWNrIFRyYWNlOiBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3VzdG9tRGVidWdnZXIoKSB7XHJcbiAgICBpZiAoZW5hYmxlRGVidWdnZXJzKSB7XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVidWcgPSBuZXcgRGVidWdIZWxwZXJzKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWJ1ZztcclxuIl19
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
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/roughArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8b24k22v1PqrZk3dxoCIuU', 'roughArea');
// Games/ArcheryGame/scripts/roughArea.ts

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
var GameManager_1 = require("./GameManager");
var graphics_1 = require("./graphics");
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
        GameManager_1.default.roughSheetMode = false;
        var graphicsScript = this.node
            .getChildByName("GraphicParent")
            .getChildByName("Graphics")
            .getComponent(graphics_1.default);
        // graphicsScript.clearTouchesArray();
        // startGame.Instance.node
        //   .getChildByName("BtnSlate")
        //   .getComponent(cc.Button).interactable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxyb3VnaEFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQStDQztRQTdDQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztJQXdDMUMsQ0FBQztrQkEvQ29CLFNBQVM7SUFVNUIsMEJBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBVyxxQkFBUTthQUFuQjtZQUNFLE9BQU8sV0FBUyxDQUFDLFFBQVEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELGtDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNqRSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixxQkFBVyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDM0IsY0FBYyxDQUFDLGVBQWUsQ0FBQzthQUMvQixjQUFjLENBQUMsVUFBVSxDQUFDO2FBQzFCLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUM7UUFDMUIsc0NBQXNDO1FBQ3RDLDBCQUEwQjtRQUMxQixnQ0FBZ0M7UUFDaEMsa0RBQWtEO0lBQ3BELENBQUM7SUFFRCw4QkFBVSxHQUFWLFVBQVcsTUFBZ0I7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ2pFLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7SUF0Q2Msa0JBQVEsR0FBYyxJQUFJLENBQUM7SUFOMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDTztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNhO0lBTGQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStDN0I7SUFBRCxnQkFBQztDQS9DRCxBQStDQyxDQS9Dc0MsRUFBRSxDQUFDLFNBQVMsR0ErQ2xEO2tCQS9Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdyYXBoaWNzIGZyb20gXCIuL2dyYXBoaWNzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgcm91Z2hBcmVhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHRhcFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGdyYXBoaWNzUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBjdXJyZW50Q29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IHJvdWdoQXJlYSA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICByb3VnaEFyZWEuaW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgIHJldHVybiByb3VnaEFyZWEuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBjbG9zZVJvdWdoQXJlYSgpIHtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNQYXJlbnRcIikuY2hpbGRyZW4uZm9yRWFjaCgoRWxlbWVudCkgPT4ge1xyXG4gICAgICBFbGVtZW50LmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUgPSBmYWxzZTtcclxuICAgIGxldCBncmFwaGljc1NjcmlwdCA9IHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJHcmFwaGljUGFyZW50XCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkdyYXBoaWNzXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoR3JhcGhpY3MpO1xyXG4gICAgLy8gZ3JhcGhpY3NTY3JpcHQuY2xlYXJUb3VjaGVzQXJyYXkoKTtcclxuICAgIC8vIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlXHJcbiAgICAvLyAgIC5nZXRDaGlsZEJ5TmFtZShcIkJ0blNsYXRlXCIpXHJcbiAgICAvLyAgIC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VG9vbChfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGFwU291bmQsIGZhbHNlKTtcclxuICAgIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJwZW5jaWxcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgfSBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJjbGVhcmJydXNoXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3JhcGhpY1BhcmVudFwiKS5jaGlsZHJlbi5mb3JFYWNoKChFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgRWxlbWVudC5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmNsZWFyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJlcmFzZXJcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/globalVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69a5bAFwWpFAaEFgtvUVIkt', 'globalVariables');
// Games/ArcheryGame/scripts/globalVariables.ts

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
var globalVariables = /** @class */ (function (_super) {
    __extends(globalVariables, _super);
    function globalVariables() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxnbG9iYWxWYXJpYWJsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUF5Q0M7UUFyQ1Usb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLHdCQUFrQixHQUFXLENBQUMsQ0FBQztRQUUvQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDOztJQXVCckMsQ0FBQzt3QkF6Q29CLGVBQWU7SUFxQmhDLHdCQUF3QjtJQUV4QixnQ0FBTSxHQUFOO1FBQ0ksaUJBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBVywyQkFBUTthQUFuQjtZQUNJLE9BQU8saUJBQWUsQ0FBQyxRQUFRLENBQUE7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUdELGdDQUFNLEdBQU4sVUFBTyxFQUFFO0lBRVQsQ0FBQzs7SUFsQmMsd0JBQVEsR0FBb0IsSUFBSSxDQUFDO0lBcEIvQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBeUNuQztJQUFELHNCQUFDO0NBekNELEFBeUNDLENBekM0QyxFQUFFLENBQUMsU0FBUyxHQXlDeEQ7a0JBekNvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdsb2JhbFZhcmlhYmxlcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uRW50cnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3RheUVmZmVjdDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBhbmltYXRpb25FeGl0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGN1cnJlbnRMZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgdG90YWxRdWVzdGlvbnM6IG51bWJlciA9IDM7XHJcbiAgICBwdWJsaWMgY3VycmVudFF1ZXN0aW9uOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBpbmNyZWFzZXRyYW5zaXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGZpbGxSYW5nZTogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBjYW52YXNUb3BZOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGNhbnZhc0xlZnRYOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGNhbnZhc1JpZ2h0WDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjYW52YXNCb3R0b21ZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBnbG9iYWxWYXJpYWJsZXMgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsVmFyaWFibGVzLmluc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/ArrowScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be5564i40RE2JmZzUp63nx9', 'ArrowScript');
// Games/ArcheryGame/scripts/ArrowScript.ts

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
var Constants_1 = require("../utils/Constants");
var EventSystem_1 = require("../utils/EventSystem");
var Target_1 = require("./Target");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ArrowScript = /** @class */ (function (_super) {
    __extends(ArrowScript, _super);
    function ArrowScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rigidBody = null;
        return _this;
    }
    ArrowScript.prototype.onLoad = function () {
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.rigidBody.gravityScale = 0;
    };
    ArrowScript.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        if (otherCollider.tag == Constants_1.COLLISION_TAGS.TARGET) {
            var otherTarget = otherCollider.node.getComponent(Target_1.default);
            console.log("collided with target");
            this.scheduleOnce(function () {
                _this.rigidBody.type = cc.RigidBodyType.Static;
            }, 0.001);
            EventSystem_1.default.emit(Constants_1.GAME_EVENTS.HIT, otherTarget);
        }
        if (otherCollider.tag == Constants_1.COLLISION_TAGS.BOUNDS) {
            console.log("collided with boundary");
            EventSystem_1.default.emit(Constants_1.GAME_EVENTS.MISS);
        }
    };
    ArrowScript = __decorate([
        ccclass
    ], ArrowScript);
    return ArrowScript;
}(cc.Component));
exports.default = ArrowScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxBcnJvd1NjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBaUU7QUFDakUsb0RBQTBDO0FBQzFDLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTBCQztRQXpCUyxlQUFTLEdBQWlCLElBQUksQ0FBQzs7SUF5QnpDLENBQUM7SUF2QlcsNEJBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFDRSxPQUEwQixFQUMxQixZQUFnQyxFQUNoQyxhQUFpQztRQUhuQyxpQkFpQkM7UUFaQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksMEJBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNoRCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDVixxQkFBTSxDQUFDLElBQUksQ0FBQyx1QkFBVyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSwwQkFBYyxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMscUJBQU0sQ0FBQyxJQUFJLENBQUMsdUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUF6QmtCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQi9CO0lBQUQsa0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQndDLEVBQUUsQ0FBQyxTQUFTLEdBMEJwRDtrQkExQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT0xMSVNJT05fVEFHUywgR0FNRV9FVkVOVFMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBFVkVOVFMgZnJvbSBcIi4uL3V0aWxzL0V2ZW50U3lzdGVtXCI7XHJcbmltcG9ydCBUYXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3dTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB0aGlzLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gIH1cclxuXHJcbiAgb25CZWdpbkNvbnRhY3QoXHJcbiAgICBjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCxcclxuICAgIHNlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyLFxyXG4gICAgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyXHJcbiAgKSB7XHJcbiAgICBpZiAob3RoZXJDb2xsaWRlci50YWcgPT0gQ09MTElTSU9OX1RBR1MuVEFSR0VUKSB7XHJcbiAgICAgIGxldCBvdGhlclRhcmdldCA9IG90aGVyQ29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0KTtcclxuICAgICAgY29uc29sZS5sb2coXCJjb2xsaWRlZCB3aXRoIHRhcmdldFwiKTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgfSwgMC4wMDEpO1xyXG4gICAgICBFVkVOVFMuZW1pdChHQU1FX0VWRU5UUy5ISVQsIG90aGVyVGFyZ2V0KTtcclxuICAgIH1cclxuICAgIGlmIChvdGhlckNvbGxpZGVyLnRhZyA9PSBDT0xMSVNJT05fVEFHUy5CT1VORFMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb2xsaWRlZCB3aXRoIGJvdW5kYXJ5XCIpO1xyXG4gICAgICBFVkVOVFMuZW1pdChHQU1FX0VWRU5UUy5NSVNTKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
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
        _this.loadingBar = null;
        _this.activateHint = false;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        _this.totalLevels = 7;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.mainBg = null;
        return _this;
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
        this.loadingBar = cc
            .find("Canvas/bg/jaipuria/loadingBar")
            .getComponent(cc.ProgressBar);
        this.loadingBar.node.active = false;
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
            console.log("Question Audio Name:", question.questionAudioName);
            // console.log("Option 1 Image Name:", question.option1ImageName);
            // console.log("Option 2 Image Name:", question.option2ImageName);
            console.log("Correct Answer Number:", question.correctAnswerNum);
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
        if (this.isDemoGame) {
            var urlParams = new URLSearchParams(window.location.search);
            // Get the 'json' parameter value from the URL
            var encodedJson = urlParams.get("json");
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
            this.questions = jsonData.questionData;
            console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("Title")
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
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            // Now you can use these variables within this script
            this.logData();
        }
        else {
            cc.loader.loadRes("game_data", cc.JsonAsset, function (err, jsonAsset) {
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
                    cc
                        .find("Canvas")
                        .getChildByName("bg")
                        .getChildByName("Title")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    cc
                        .find("Canvas")
                        .getChildByName("bg")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
                    question.options = question.options.map(function (option) {
                        return _this.removeExtension(option);
                    });
                });
                _this.logData();
            });
        }
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
        if (level != null) {
            this.NextSceneName = level;
            if (parseInt(this.NextSceneName) >= this.TotalLevels) {
                this.NextSceneName = this.TotalLevels.toString();
            }
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
        if (isPremium == "1") {
            this.isMusicOn = true;
        }
        else if (isPremium == "0") {
            this.isMusicOn = false;
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
        // this.scheduleOnce(() => {
        //     console.log("jockey name = ", this.jockeyName);
        //     if (this.jockeyName == "Podar") {
        //         cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true;
        //     }
        //     else if (this.jockeyName == "bag" || this.jockeyName == "cryon") {
        //         cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
        //     }
        //     if (this.jockeyName != "bag" && this.jockeyName != "cryon") {
        //         this.scheduleOnce(() => {
        //             cc.director.loadScene(this.NextSceneName);
        //         }, 2);
        //     }
        // }, 1);
        this.scheduleOnce(function () {
            cc.director.loadScene(_this.NextSceneName);
        }, 2);
        // this.OnTimer();
    };
    startGame.prototype.onClickPlayBtn = function () {
        var _this = this;
        var playBtn = cc.find("Canvas/bg/jaipuria/playBtn");
        var playBtnAnimComp = playBtn.getComponent(cc.Animation);
        playBtnAnimComp.stop();
        // playBtnAnimComp.enabled = false;
        cc.tween(playBtn)
            .to(0.1, { scale: 0.8 }, { easing: "quadOut" })
            .to(0.2, { scale: 1.5 }, { easing: "quadOut" })
            .call(function () {
            // cc.director.loadScene(this.NextSceneName);
            playBtn.active = false;
            _this.loadSceneWithProgress();
        })
            .start();
    };
    startGame.prototype.loadSceneWithProgress = function () {
        var _this = this;
        if (this.loadingBar) {
            this.loadingBar.node.active = true;
        }
        cc.director.preloadScene(this.NextSceneName, function (completedCount, totalCount) {
            var progress = completedCount / totalCount;
            // update the progress bar here
            _this.loadingBar.progress = progress;
        }, function () {
            cc.director.loadScene(_this.NextSceneName);
        });
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
    startGame.prototype.update = function (dt) {
        //console.log("This totallevels : ", this.totalLevels);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNmJDO1FBM2JDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsOEJBQThCO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFJVixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUUxQyxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUV0QixZQUFNLEdBQVcsRUFBRSxD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QWdCLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCx1REFBdUQ7SUFDekQsQ0FBQzs7SUF2WmMsa0JBQVEsR0FBYyxJQUFJLENBQUM7SUFuQzFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzZDQUNFO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tEQUNPO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkRBQ087SUFFNUI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO3lEQUN3QjtJQVN6QztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7bURBQ1E7SUExQk4sU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTZiN0I7SUFBRCxnQkFBQztDQTdiRCxBQTZiQyxDQTdic0MsRUFBRSxDQUFDLFNBQVMsR0E2YmxEO2tCQTdib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XHJcbiAgR2FtZUlEOiBzdHJpbmc7XHJcbiAgdG90YWxMZXZlbDogc3RyaW5nO1xyXG4gIFRpdGxlSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgaW50cm9CZ05hbWU6IHN0cmluZztcclxuICBiZ21NdXNpY05hbWU6IHN0cmluZztcclxuICBtYWluQmdOYW1lOiBzdHJpbmc7XHJcbiAgSm9ja2V5TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVlc3Rpb25EYXRhIHtcclxuICBxdWVzdGlvblRleHQ6IHN0cmluZztcclxuICBxdWVzdGlvbkF1ZGlvTmFtZTogc3RyaW5nO1xyXG4gIHNob3VsZFBsYXlRdWVzdGlvbkF1ZGlvOiBib29sZWFuO1xyXG4gIGlzT3B0aW9uVGV4dDogYm9vbGVhbjtcclxuICBvcHRpb25zOiBzdHJpbmdbXTsgLy8gVGhpcyB3aWxsIGVpdGhlciBjb250YWluIHRleHQgb3B0aW9ucyBvciBpbWFnZSBuYW1lcyBiYXNlZCBvbiBpc09wdGlvblRleHQgZmxhZ1xyXG4gIGNvcnJlY3RBdWRpb3M6IHN0cmluZ1tdO1xyXG4gIGNvcnJlY3RBbnN3ZXJOdW06IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xyXG4gIGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YTtcclxuICBxdWVzdGlvbkRhdGE6IFF1ZXN0aW9uRGF0YVtdO1xyXG59XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgQkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOdW1iZXIpXHJcbiAgdm9sdW1lOiBudW1iZXIgPSAxO1xyXG4gIEBwcm9wZXJ0eShjYy5TdHJpbmcpXHJcbiAgTmV4dFNjZW5lTmFtZTogc3RyaW5nID0gXCIxXCI7XHJcbiAgQHByb3BlcnR5KE51bWJlcilcclxuICBUb3RhbExldmVsczogbnVtYmVyID0gNztcclxuICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICBpc0FnZVBhcmFtZXRlck5lZWRlZCA9IHRydWU7XHJcbiAgQHByb3BlcnR5KE51bWJlcilcclxuICBMZXZlbEFnZVBhcmFtZXRlcnM6IG51bWJlcltdID0gWzMsIDUsIDddO1xyXG4gIGlzTXVzaWNPbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGxldmVsVHlwZTogc3RyaW5nID0gXCIxXCI7XHJcbiAgY3VycmVudExldmVsOiBzdHJpbmcgPSBcIjFcIjtcclxuICBoYXNBY2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoYXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBtb2JpbGVOdW1iZXI6IHN0cmluZyA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgaXNQcmVtaXVtR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAcHJvcGVydHkoQm9vbGVhbilcclxuICBpc01vYmlsZU51bWJlclByaW9yaXR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQHByb3BlcnR5KE51bWJlcilcclxuICBwcmVtaXVtTGV2ZWw6IG51bWJlciA9IDM7XHJcbiAgLy8gbW9iTnVtQXZhaWxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBmaXJzdENsaWNrOiBudW1iZXIgPSAxO1xyXG4gIGNsaWNrRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBjdXJyZW50SGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgdGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBzdGFydEdhbWUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgbG9hZGluZ0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICBhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBnYW1lSUQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgLy8gcHJpdmF0ZSB0b3RhbExldmVsczogc3RyaW5nID0gXCJcIjtcclxuICBwcml2YXRlIHRpdGxlSW1hZ2VOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gIGpvY2tleU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbkRhdGFbXSA9IFtdO1xyXG4gIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xyXG4gIGlzRGVtb0dhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgbWFpbkJnOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICByZXR1cm4gc3RhcnRHYW1lLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICBzdGFydEdhbWUuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nLS0xMDBcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLVRpdGxlXCIpO1xyXG4gICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XHJcbiAgICAgICAgdGhpcy5Kb2NrZXlOb2RlID0gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nQmFyID0gY2NcclxuICAgICAgLmZpbmQoXCJDYW52YXMvYmcvamFpcHVyaWEvbG9hZGluZ0JhclwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgIHRoaXMubG9hZGluZ0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9nRGF0YSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2FtZSBJRDpcIiwgdGhpcy5nYW1lSUQpO1xyXG4gICAgY29uc29sZS5sb2coXCJUb3RhbCBMZXZlbHM6XCIsIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJCR00gYXVkaW8gbmFtZTpcIiwgdGhpcy5CR01fYXVkaW8ubmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRpdGxlIEltYWdlIE5hbWU6XCIsIHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJKb2NrZXkgTmFtZTpcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAvLyBMb2cgcXVlc3Rpb24gZGF0YVxyXG4gICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbiAke2luZGV4ICsgMX06YCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gQXVkaW8gTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAxIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAyIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvcnJlY3QgQW5zd2VyIE51bWJlcjpcIiwgcXVlc3Rpb24uY29ycmVjdEFuc3dlck51bSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG4gICAgcmV0dXJuIGltYWdlTmFtZS5yZXBsYWNlKC9cXC5wbmckL2csIFwiXCIpO1xyXG4gIH1cclxuICByZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuICAgIHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCBcIlwiKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUpTT05kYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG4gICAgICBjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoXCJqc29uXCIpO1xyXG5cclxuICAgICAgLy8gRGVjb2RlIHRoZSBVUkwtZW5jb2RlZCBKU09OIGRhdGFcclxuICAgICAgY29uc3QgZGVjb2RlZEpzb25TdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZEpzb24pO1xyXG5cclxuICAgICAgLy8gUGFyc2UgdGhlIEpTT04gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdFxyXG4gICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZGVjb2RlZEpzb25TdHJpbmcpO1xyXG4gICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG4gICAgICB0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuICAgICAgbGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG4gICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcbiAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgdGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHJcbiAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJCR00gbXVzaWMgbmFtZSA9IFwiLCBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpO1xyXG5cclxuICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy50aXRsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgY2NcclxuICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICB9KTtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuYmdtTXVzaWNOYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XHJcbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICBjY1xyXG4gICAgICAgICAgLmZpbmQoXCJDYW52YXNcIilcclxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBOb3cgeW91IGNhbiB1c2UgdGhlc2UgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHNjcmlwdFxyXG4gICAgICB0aGlzLmxvZ0RhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiZ2FtZV9kYXRhXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbkFzc2V0KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25EYXRhOiBNeUpTT05EYXRhID0ganNvbkFzc2V0Lmpzb24gYXMgTXlKU09ORGF0YTtcclxuXHJcbiAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcclxuICAgICAgICB0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XHJcbiAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xyXG4gICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xyXG5cclxuICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuICAgICAgICAvLyB0aGlzLnRpdGxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24odGhpcy50aXRsZUltYWdlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZSksXHJcbiAgICAgICAgICAoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgY2NcclxuICAgICAgICAgICAgICAuZmluZChcIkNhbnZhc1wiKVxyXG4gICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIilcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgIHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lKSxcclxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBjY1xyXG4gICAgICAgICAgICAgIC5maW5kKFwiQ2FudmFzXCIpXHJcbiAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgdGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgICAgdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUpLFxyXG4gICAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkJHTV9hdWRpbyA9IEF1ZGlvQ2xpcDtcclxuICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUV4dGVuc2lvbihqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5tYWluQmdOYW1lKSxcclxuICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5CZyA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBxdWVzdGlvbi5vcHRpb25zID0gcXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFeHRlbnNpb24ob3B0aW9uKSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2dEYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCxcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkLFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG4gICAgICBjYy5BdWRpb0NsaXAsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xyXG4gICAgdmFyIGlzQXVkaW8gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNvdW5kU2V0dGluZ1wiKTtcclxuICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcclxuICAgIHZhciBhY2Nlc3MgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFjY2Vzc1wiKTtcclxuICAgIHZhciBtb2JpbGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm1vYmlsZVwiKTtcclxuICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XHJcbiAgICB2YXIgcHJlbWl1bSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwicHJlbWl1bVwiKTtcclxuICAgIHZhciBpc1ByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImlzUHJlbWl1bVwiKTtcclxuXHJcbiAgICB2YXIgZGVtbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaXNkZW1vXCIpO1xyXG4gICAgaWYgKGRlbW8gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgdGhpcy5pc0RlbW9HYW1lID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJJdCBpcyBhIGRlbW8gZ2FtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZUpTT05kYXRhKCk7XHJcblxyXG4gICAgaWYgKHByZW1pdW0gIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnByZW1pdW1MZXZlbCA9IHBhcnNlSW50KHByZW1pdW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxldmVsICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gbGV2ZWw7XHJcbiAgICAgIGlmIChwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpID49IHRoaXMuVG90YWxMZXZlbHMpIHtcclxuICAgICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSB0aGlzLlRvdGFsTGV2ZWxzLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9iaWxlID09IFwiMVwiKSB7XHJcbiAgICAgIHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYWNjZXNzID09IFwiMVwiKSB7XHJcbiAgICAgIHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzQWNjZXNzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUHJlbWl1bUdhbWUpIHtcclxuICAgICAgdGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ByZW1pdW0gPT0gXCIxXCIpIHtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChpc1ByZW1pdW0gPT0gXCIwXCIpIHtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCB0aGlzLnZvbHVtZSk7XHJcbiAgICBpZiAoaXNBdWRpbyA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibXVzaWNcIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xyXG4gICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYWdlVmFsdWU6IG51bWJlciA9IHBhcnNlSW50KGFnZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBZ2VQYXJhbWV0ZXJOZWVkZWQpIHtcclxuICAgICAgaWYgKGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjFcIjtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1swXSAmJlxyXG4gICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0gJiZcclxuICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiM1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzJdICYmXHJcbiAgICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM11cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBcIjRcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxldmVsQWdlUGFyYW1ldGVycy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXSAmJlxyXG4gICAgICAgICAgICAgICAgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbNF1cclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI1XCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiam9ja2V5IG5hbWUgPSBcIiwgdGhpcy5qb2NrZXlOYW1lKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgIC8vICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwicG9kYXJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgdGhpcy5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgLy8gICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJqYWlwdXJpYVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSAhPSBcImJhZ1wiICYmIHRoaXMuam9ja2V5TmFtZSAhPSBcImNyeW9uXCIpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyAgICAgICAgIH0sIDIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIDEpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICB9LCAyKTtcclxuXHJcbiAgICAvLyB0aGlzLk9uVGltZXIoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tQbGF5QnRuKCkge1xyXG4gICAgbGV0IHBsYXlCdG4gPSBjYy5maW5kKFwiQ2FudmFzL2JnL2phaXB1cmlhL3BsYXlCdG5cIik7XHJcbiAgICBsZXQgcGxheUJ0bkFuaW1Db21wID0gcGxheUJ0bi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIHBsYXlCdG5BbmltQ29tcC5zdG9wKCk7XHJcbiAgICAvLyBwbGF5QnRuQW5pbUNvbXAuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgY2MudHdlZW4ocGxheUJ0bilcclxuICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBcInF1YWRPdXRcIiB9KVxyXG4gICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjUgfSwgeyBlYXNpbmc6IFwicXVhZE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5OZXh0U2NlbmVOYW1lKTtcclxuICAgICAgICBwbGF5QnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9hZFNjZW5lV2l0aFByb2dyZXNzKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNjZW5lV2l0aFByb2dyZXNzKCkge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZ0Jhcikge1xyXG4gICAgICB0aGlzLmxvYWRpbmdCYXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFxyXG4gICAgICB0aGlzLk5leHRTY2VuZU5hbWUsXHJcbiAgICAgIChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgYmFyIGhlcmVcclxuICAgICAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIE9uTXVzaWMoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcbiAgICAgIHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIE9uQmFjaygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJUaGlzIHRvdGFsbGV2ZWxzIDogXCIsIHRoaXMudG90YWxMZXZlbHMpO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/MainAssets/Scripts/JockeyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4138btVV3lL44fpYZhOJ74R', 'JockeyController');
// Games/MainAssets/Scripts/JockeyController.ts

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
exports.JOCKEY_TYPE = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JOCKEY_TYPE;
(function (JOCKEY_TYPE) {
    JOCKEY_TYPE[JOCKEY_TYPE["POSITIVE"] = 0] = "POSITIVE";
    JOCKEY_TYPE[JOCKEY_TYPE["NEGATIVE"] = 1] = "NEGATIVE";
})(JOCKEY_TYPE = exports.JOCKEY_TYPE || (exports.JOCKEY_TYPE = {}));
var JockeyController = /** @class */ (function (_super) {
    __extends(JockeyController, _super);
    function JockeyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positiveVos = [];
        _this.negativeVos = [];
        _this.positiveAnims = [];
        _this.negativeAnims = [];
        _this.jockey = null;
        return _this;
    }
    JockeyController_1 = JockeyController;
    Object.defineProperty(JockeyController, "JOCKEY", {
        get: function () {
            return JockeyController_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    JockeyController.prototype.onLoad = function () {
        JockeyController_1.instance = this;
    };
    JockeyController.prototype.start = function () {
        this.jockey = this.node;
        this.positiveAnims = [
            "positive_1",
            "positive_2",
            "positive_3",
            "positive_4",
            "positive_5",
        ];
        this.negativeAnims = [
            "negative_1",
            "negative_2",
            "negative_3",
            "negative_4",
            "negative_5",
        ];
    };
    JockeyController.prototype.callJockey = function (type, onCompleteAction) {
        var _this = this;
        var animArr;
        var audioZone;
        var animNum = this.getRandomIntInRange(0, 4);
        switch (type) {
            case JOCKEY_TYPE.POSITIVE:
                animArr = this.positiveAnims;
                audioZone = this.positiveVos;
                break;
            case JOCKEY_TYPE.NEGATIVE:
                animArr = this.negativeAnims;
                audioZone = this.negativeVos;
                break;
        }
        cc.tween(this.jockey)
            .to(0.5, { x: 450 }, { easing: "sineInOut" })
            .call(function () {
            var comp = _this.jockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, animArr[animNum], false);
            cc.audioEngine.playEffect(audioZone[animNum], false);
        })
            .delay(audioZone[animNum].duration)
            .to(0.5, { x: 1500 }, { easing: "sineInOut" })
            .call(function () {
            var comp = _this.jockey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", false);
            if (onCompleteAction) {
                onCompleteAction();
            }
        })
            .start();
    };
    JockeyController.prototype.getRandomIntInRange = function (min, max) {
        // RNG generator, MIN and MAX inclusive
        if (typeof min !== "number" || typeof max !== "number") {
            throw new Error("Both min and max must be numbers");
        }
        if (min > max) {
            throw new Error("min must be less than or equal to max");
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var JockeyController_1;
    JockeyController.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], JockeyController.prototype, "positiveVos", void 0);
    __decorate([
        property(cc.AudioClip)
    ], JockeyController.prototype, "negativeVos", void 0);
    JockeyController = JockeyController_1 = __decorate([
        ccclass
    ], JockeyController);
    return JockeyController;
}(cc.Component));
exports.default = JockeyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW5Bc3NldHNcXFNjcmlwdHNcXEpvY2tleUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixxREFBUSxDQUFBO0lBQ1IscURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQUdEO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc0ZDO1FBcEZRLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFFakMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFDN0IsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFJNUIsWUFBTSxHQUFZLElBQUksQ0FBQzs7SUEwRWpDLENBQUM7eUJBdEZvQixnQkFBZ0I7SUFjbkMsc0JBQWtCLDBCQUFNO2FBQXhCO1lBQ0UsT0FBTyxrQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFUyxpQ0FBTSxHQUFoQjtRQUNFLGtCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVTLGdDQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNuQixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtTQUNiLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1NBQ2IsQ0FBQztJQUNKLENBQUM7SUFFTSxxQ0FBVSxHQUFqQixVQUFrQixJQUFpQixFQUFFLGdCQUEyQjtRQUFoRSxpQkFrQ0M7UUFqQ0MsSUFBSSxPQUFpQixDQUFDO1FBQ3RCLElBQUksU0FBeUIsQ0FBQztRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM3QixNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM3QixNQUFNO1NBQ1Q7UUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUM1QyxJQUFJLENBQUM7WUFDSixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsTUFBTTtpQkFDbkIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQzthQUNsQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzdDLElBQUksQ0FBQztZQUNKLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNO2lCQUNuQixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixHQUFHLEVBQUUsR0FBRztRQUMxQix1Q0FBdUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNELENBQUM7O0lBM0VjLHlCQUFRLEdBQXFCLElBQUksQ0FBQztJQVJqRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lEQUNpQjtJQUd4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lEQUNpQjtJQUxyQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXNGcEM7SUFBRCx1QkFBQztDQXRGRCxBQXNGQyxDQXRGNkMsRUFBRSxDQUFDLFNBQVMsR0FzRnpEO2tCQXRGb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEpPQ0tFWV9UWVBFIHtcclxuICBQT1NJVElWRSxcclxuICBORUdBVElWRSxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9ja2V5Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgcG9zaXRpdmVWb3M6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIG5lZ2F0aXZlVm9zOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgcG9zaXRpdmVBbmltczogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgbmVnYXRpdmVBbmltczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEpvY2tleUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGpvY2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IEpPQ0tFWSgpIHtcclxuICAgIHJldHVybiBKb2NrZXlDb250cm9sbGVyLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIEpvY2tleUNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5qb2NrZXkgPSB0aGlzLm5vZGU7XHJcbiAgICB0aGlzLnBvc2l0aXZlQW5pbXMgPSBbXHJcbiAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgIF07XHJcbiAgICB0aGlzLm5lZ2F0aXZlQW5pbXMgPSBbXHJcbiAgICAgIFwibmVnYXRpdmVfMVwiLFxyXG4gICAgICBcIm5lZ2F0aXZlXzJcIixcclxuICAgICAgXCJuZWdhdGl2ZV8zXCIsXHJcbiAgICAgIFwibmVnYXRpdmVfNFwiLFxyXG4gICAgICBcIm5lZ2F0aXZlXzVcIixcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbEpvY2tleSh0eXBlOiBKT0NLRVlfVFlQRSwgb25Db21wbGV0ZUFjdGlvbj86IEZ1bmN0aW9uKSB7XHJcbiAgICBsZXQgYW5pbUFycjogc3RyaW5nW107XHJcbiAgICBsZXQgYXVkaW9ab25lOiBjYy5BdWRpb0NsaXBbXTtcclxuICAgIGxldCBhbmltTnVtID0gdGhpcy5nZXRSYW5kb21JbnRJblJhbmdlKDAsIDQpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgSk9DS0VZX1RZUEUuUE9TSVRJVkU6XHJcbiAgICAgICAgYW5pbUFyciA9IHRoaXMucG9zaXRpdmVBbmltcztcclxuICAgICAgICBhdWRpb1pvbmUgPSB0aGlzLnBvc2l0aXZlVm9zO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEpPQ0tFWV9UWVBFLk5FR0FUSVZFOlxyXG4gICAgICAgIGFuaW1BcnIgPSB0aGlzLm5lZ2F0aXZlQW5pbXM7XHJcbiAgICAgICAgYXVkaW9ab25lID0gdGhpcy5uZWdhdGl2ZVZvcztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLmpvY2tleSlcclxuICAgICAgLnRvKDAuNSwgeyB4OiA0NTAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb21wID0gdGhpcy5qb2NrZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1BcnJbYW5pbU51bV0sIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGF1ZGlvWm9uZVthbmltTnVtXSwgZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZGVsYXkoYXVkaW9ab25lW2FuaW1OdW1dLmR1cmF0aW9uKVxyXG4gICAgICAudG8oMC41LCB7IHg6IDE1MDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb21wID0gdGhpcy5qb2NrZXlcclxuICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKG9uQ29tcGxldGVBY3Rpb24pIHtcclxuICAgICAgICAgIG9uQ29tcGxldGVBY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tSW50SW5SYW5nZShtaW4sIG1heCkge1xyXG4gICAgLy8gUk5HIGdlbmVyYXRvciwgTUlOIGFuZCBNQVggaW5jbHVzaXZlXHJcbiAgICBpZiAodHlwZW9mIG1pbiAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWF4ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkJvdGggbWluIGFuZCBtYXggbXVzdCBiZSBudW1iZXJzXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbiA+IG1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtaW4gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gbWF4XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/utils/EventSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b556HJQUBNELTL2lH24bbL', 'EventSystem');
// Games/ArcheryGame/utils/EventSystem.ts

"use strict";
// *INFO: use this instead of the default cocos event system, it never works
Object.defineProperty(exports, "__esModule", { value: true });
var EventSystem = /** @class */ (function () {
    function EventSystem() {
        this.eventMap = new Map();
    }
    // Singleton instance
    EventSystem.getInstance = function () {
        if (!EventSystem.instance) {
            EventSystem.instance = new EventSystem();
        }
        return EventSystem.instance;
    };
    // Register an event listener
    EventSystem.prototype.on = function (eventName, callback, context) {
        if (!this.eventMap.has(eventName)) {
            this.eventMap.set(eventName, []);
        }
        this.eventMap.get(eventName).push({ callback: callback, context: context });
    };
    // Unregister an event listener
    EventSystem.prototype.off = function (eventName, callback, context) {
        var listeners = this.eventMap.get(eventName);
        if (listeners) {
            this.eventMap.set(eventName, listeners.filter(function (listener) {
                return listener.callback !== callback || listener.context !== context;
            }));
        }
    };
    // Emit an event
    EventSystem.prototype.emit = function (eventName, data) {
        var listeners = this.eventMap.get(eventName);
        if (listeners) {
            listeners.forEach(function (listener) {
                listener.callback.call(listener.context, data);
            });
        }
    };
    // Clear all listeners for an event
    EventSystem.prototype.clear = function (eventName) {
        this.eventMap.delete(eventName);
    };
    // Clear all events and listeners
    EventSystem.prototype.clearAll = function () {
        this.eventMap.clear();
    };
    return EventSystem;
}());
var EVENTS = EventSystem.getInstance();
exports.default = EVENTS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFx1dGlsc1xcRXZlbnRTeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUE0RTs7QUFFNUU7SUFJRTtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUJBQXFCO0lBQ1AsdUJBQVcsR0FBekI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN6QixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELDZCQUE2QjtJQUN0Qix3QkFBRSxHQUFULFVBQVUsU0FBaUIsRUFBRSxRQUFrQixFQUFFLE9BQWE7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsK0JBQStCO0lBQ3hCLHlCQUFHLEdBQVYsVUFBVyxTQUFpQixFQUFFLFFBQWtCLEVBQUUsT0FBYTtRQUM3RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNmLFNBQVMsRUFDVCxTQUFTLENBQUMsTUFBTSxDQUNkLFVBQUMsUUFBUTtnQkFDUCxPQUFBLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssT0FBTztZQUE5RCxDQUE4RCxDQUNqRSxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxnQkFBZ0I7SUFDVCwwQkFBSSxHQUFYLFVBQVksU0FBaUIsRUFBRSxJQUFVO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxtQ0FBbUM7SUFDNUIsMkJBQUssR0FBWixVQUFhLFNBQWlCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBaUM7SUFDMUIsOEJBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0F6REEsQUF5REMsSUFBQTtBQUVELElBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUV6QyxrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqSU5GTzogdXNlIHRoaXMgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBjb2NvcyBldmVudCBzeXN0ZW0sIGl0IG5ldmVyIHdvcmtzXHJcblxyXG5jbGFzcyBFdmVudFN5c3RlbSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50U3lzdGVtO1xyXG4gIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxzdHJpbmcsIEFycmF5PHsgY2FsbGJhY2s6IEZ1bmN0aW9uOyBjb250ZXh0OiBhbnkgfT4+O1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ldmVudE1hcCA9IG5ldyBNYXAoKTtcclxuICB9XHJcblxyXG4gIC8vIFNpbmdsZXRvbiBpbnN0YW5jZVxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnRTeXN0ZW0ge1xyXG4gICAgaWYgKCFFdmVudFN5c3RlbS5pbnN0YW5jZSkge1xyXG4gICAgICBFdmVudFN5c3RlbS5pbnN0YW5jZSA9IG5ldyBFdmVudFN5c3RlbSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEV2ZW50U3lzdGVtLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXJcclxuICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY29udGV4dD86IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmV2ZW50TWFwLmhhcyhldmVudE5hbWUpKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KGV2ZW50TmFtZSwgW10pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudE1hcC5nZXQoZXZlbnROYW1lKS5wdXNoKHsgY2FsbGJhY2ssIGNvbnRleHQgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBVbnJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjb250ZXh0PzogYW55KSB7XHJcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TWFwLmdldChldmVudE5hbWUpO1xyXG4gICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICB0aGlzLmV2ZW50TWFwLnNldChcclxuICAgICAgICBldmVudE5hbWUsXHJcbiAgICAgICAgbGlzdGVuZXJzLmZpbHRlcihcclxuICAgICAgICAgIChsaXN0ZW5lcikgPT5cclxuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2sgIT09IGNhbGxiYWNrIHx8IGxpc3RlbmVyLmNvbnRleHQgIT09IGNvbnRleHRcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0IGFuIGV2ZW50XHJcbiAgcHVibGljIGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRNYXAuZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICBpZiAobGlzdGVuZXJzKSB7XHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwobGlzdGVuZXIuY29udGV4dCwgZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2xlYXIgYWxsIGxpc3RlbmVycyBmb3IgYW4gZXZlbnRcclxuICBwdWJsaWMgY2xlYXIoZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZXZlbnRNYXAuZGVsZXRlKGV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDbGVhciBhbGwgZXZlbnRzIGFuZCBsaXN0ZW5lcnNcclxuICBwdWJsaWMgY2xlYXJBbGwoKSB7XHJcbiAgICB0aGlzLmV2ZW50TWFwLmNsZWFyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBFVkVOVFMgPSBFdmVudFN5c3RlbS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRVZFTlRTO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2e3bW8I6hEkIM7HA9hU+qv', 'GameManager');
// Games/ArcheryGame/scripts/GameManager.ts

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
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var JockeyController_1 = require("../../MainAssets/Scripts/JockeyController");
var Constants_1 = require("../utils/Constants");
var EventSystem_1 = require("../utils/EventSystem");
var Target_1 = require("./Target");
var globalVariables_1 = require("./globalVariables");
var AudioType;
(function (AudioType) {
    AudioType[AudioType["POSITIVE"] = 0] = "POSITIVE";
    AudioType[AudioType["NEGATIVE"] = 1] = "NEGATIVE";
})(AudioType || (AudioType = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.runningSFX = null;
        _this.wrongSFX = null;
        _this.targetHitSFX = null;
        _this.playerNode = null;
        _this.upDownAnim = null;
        _this.realArrow = null;
        _this.fakeArrowNode = null;
        _this.inputBlocker = null;
        _this.trajectoryNode = null;
        _this.questionLabel = null;
        _this.targets = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.audioSrc = null;
        _this.spineAnim = null;
        _this.scoreLabel = null;
        _this.trajLimit = null;
        _this.arrowHead = null;
        _this.trajectoryGrav = 1;
        _this.handIdleFrame = null;
        _this.handHoldFrame = null;
        _this.bowSpriteFrames = [];
        _this.arrowSpriteFrames = [];
        _this.backgroundSpriteFrames = [];
        _this.roughAreaNode = null;
        _this.bgNode = null;
        _this.questionSound = [];
        _this.bagPositive = [];
        _this.bagNegative = [];
        _this.cryonPositive = [];
        _this.cryonNegative = [];
        _this.podarPositive = [];
        _this.podarNegative = [];
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.clockTick = null;
        _this.targetNode = null;
        _this.targetInitPos = null;
        _this.tutorialHand = null;
        _this.currLevel = 1;
        _this.questionSum = 0;
        _this.score = 0;
        _this.TotalOptions = 3;
        _this.optionsNode = null;
        _this.maxLevel = 1;
        _this.answerNum = 0;
        _this.tempname = "ABCD";
        _this.canTouch = false;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.defaultTime = 30;
        // @property(cc.Node)
        // public containerNode: cc.Node = null;
        _this.realArrowInstance = null;
        _this.power = 1000; // fixed, can be changed later
        _this.arrowRigidBody = null;
        _this.launch = false;
        _this.mainBgSprite = null;
        _this.playerAnim = null;
        _this.correctAudio = [];
        _this.currentJcokey = null;
        _this.timer = 0;
        _this.levelend = false;
        _this.lives = 3;
        _this.gameStarted = false;
        return _this;
    }
    GameManager_1 = GameManager;
    GameManager.prototype.generateQuestion = function () {
        var num1 = Math.floor(Math.random() * 50);
        var num2 = Math.floor(Math.random() * 50);
        this.questionSum = num1 + num2;
        this.questionLabel.string = num1 + " + " + num2 + " = ?";
        this.createOptions();
    };
    GameManager.prototype.onLoad = function () {
        var _this = this;
        console.log("onload@@@@@@@@@@@@@@");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1, false);
        cc.director.getPhysicsManager().enabled = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.playerAnim = this.playerNode.getComponent(cc.Animation);
        EventSystem_1.default.on(Constants_1.GAME_EVENTS.HIT, this.onHit, this);
        EventSystem_1.default.on(Constants_1.GAME_EVENTS.MISS, this.onMiss, this);
        //this.generateQuestion();
        this.score = 0;
        this.arrowHead.active = false;
        this.tutorialHand = cc.find("Canvas/Gameplay/TutorialHand");
        cc.director.preloadScene("gameEnd");
        this.targetNode = cc.find("Canvas/Gameplay/Target");
        this.targetInitPos = this.targetNode.position;
        this.roughAreaNode.active = false;
        this.mainBgSprite = this.bgNode.getComponent(cc.Sprite);
        this.questionLabel.string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        // new code
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font =
                this.podar_font;
            this.node.getChildByName("Target").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.podar_font;
            });
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("QuestionLabel").getComponent(cc.Label).font =
                this.jaipuria_font;
            this.node.getChildByName("Target").children.forEach(function (element) {
                element.getChildByName("text").getComponent(cc.Label).font =
                    _this.jaipuria_font;
            });
        }
        this.optionsNode = this.node.getChildByName("Target");
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("gameEnd");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        // for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
        //   this.answerArray[i] = startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].correctAnswerNum[i];
        // }
        this.answerNum = parseInt(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
            .correctAnswerNum);
        this.questionSum = this.answerNum;
        console.log("CorrectAnswer : ", this.answerNum, globalVariables_1.default.Instance.currentLevel);
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            var _loop_1 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_1.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_1(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio[0] = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
                console.log("QuestionSound onload: ", _this.questionSound[0]);
            });
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    console.log("for i : ", i);
                    this_2.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_2 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_2(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (AudioClip) {
                _this.correctAudio[0] = AudioClip;
            });
        }
        this.currentJcokey = StartGame_1.default.Instance.JockeyNode.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJcokey.active = true;
    };
    GameManager.prototype.start = function () {
        var _this = this;
        this.startingMovement();
        console.log("start@@@@@@@@@@@@@@");
        this.value = this.node
            .getChildByName("timer")
            .getChildByName("timer1")
            .getComponent(cc.Sprite).fillRange;
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        if (StartGame_1.default.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.positiveAudio = this.podarPositive;
            this.negativeAudio = this.podarNegative;
        }
        //this.playTutorialAnim();
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.questionSound[0], false);
            _this.scheduleOnce(function () {
                _this.schedule(function () {
                    if (!this.levelend) {
                        this.timer += 1;
                    }
                }, 1);
                _this.gameStarted = true;
                _this.clocktick = cc.audioEngine.playEffect(_this.clockTick, true);
                _this.node.getChildByName("TutorialHand").active = true;
            }, _this.questionSound[0].duration);
        }, 1);
    };
    GameManager.prototype.setQuestionScreen = function () {
        var _this = this;
        this.node.getChildByName("Target").children.forEach(function (element) {
            element.getChildByName("text").getComponent(cc.Label).string = "";
            if (element.getChildByName("img").getComponent(cc.Sprite).spriteFrame) {
                element.getChildByName("img").getComponent(cc.Sprite).spriteFrame =
                    null;
            }
        });
        this.questionLabel.string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            var _loop_3 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    this_3.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_3 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_3(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.correctAudio[0] = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_4.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Target")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                }
                else {
                    console.log("for i : ", i);
                    this_4.node
                        .getChildByName("Target")
                        .getChildByName((i + 1).toString())
                        .getChildByName("text")
                        .getComponent(cc.Label).string =
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i];
                }
            };
            var this_4 = this;
            for (var i = 0; i < this.TotalOptions; i++) {
                _loop_4(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
                .correctAudios[0], function (AudioClip) {
                _this.correctAudio[0] = AudioClip;
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@", _this.correctAudio[0]);
            });
        }
        this.currentJcokey = StartGame_1.default.Instance.JockeyNode.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.scheduleOnce(function () {
            cc.audioEngine.playEffect(_this.questionSound[0], false);
            _this.scheduleOnce(function () {
                _this.levelend = false;
                _this.gameStarted = true;
                _this.resetTimer();
                _this.clocktick = cc.audioEngine.playEffect(_this.clockTick, true);
            }, _this.questionSound[0].duration);
        }, 1);
    };
    GameManager.prototype.genRandomNumber = function (low, high) {
        var min = Math.ceil(low);
        var max = Math.floor(high);
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // can define other upper limit here
        return randomNumber;
    };
    GameManager.prototype.startingMovement = function () {
        var _this = this;
        this.node
            .getChildByName("Player")
            .getChildByName("lefthand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("player1")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("RightHand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("arrow")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        var id = cc.audioEngine.playEffect(this.runningSFX, false);
        cc.tween(this.playerNode)
            .to(1, { position: cc.v3(-419, -85, 0) }, { easing: "quartOut" })
            .call(function () {
            cc.audioEngine.stop(id);
        })
            // .by(0.25, { position: cc.v3(-100, 0, 0) }, { easing: "quartOut" })
            .start();
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("Player")
                .getChildByName("lefthand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("player1")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("RightHand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("arrow")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
        }, 0.5);
    };
    GameManager.prototype.movePlayer = function () {
        var _this = this;
        this.node
            .getChildByName("Player")
            .getChildByName("lefthand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("player1")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("RightHand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        this.node
            .getChildByName("Player")
            .getChildByName("arrow")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_2_run", true);
        var id = cc.audioEngine.playEffect(this.runningSFX, false);
        cc.tween(this.playerNode)
            .by(0.25, { position: cc.v3(100, 0, 0) }, { easing: "quartOut" })
            .by(0.25, { position: cc.v3(-100, 0, 0) }, { easing: "quartOut" })
            .call(function () {
            cc.audioEngine.stop(id);
        })
            .start();
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("Player")
                .getChildByName("lefthand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("player1")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("RightHand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("arrow")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
        }, 0.5);
    };
    GameManager.prototype.playSpineAnimAndIdle = function (animName, num, isCorrect) {
        var _this = this;
        this.spineAnim.setAnimation(0, "" + animName + num, false);
        this.spineAnim.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "" + animName + num) {
                // Play the idle animation (e.g., 'idle') once the primary animation completes
                _this.spineAnim.setAnimation(0, "idle", true);
                if (isCorrect) {
                    _this.levelend = true;
                    _this.gameStarted = false;
                    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", _this.levelend);
                    globalVariables_1.default.Instance.currentLevel++;
                    _this.setQuestionScreen();
                    _this.panning(); // contains all panning logic and stuff
                    _this.toggleFakeArrowVisibility(true);
                    //cc.director.loadScene("1");
                }
                // this.inputBlocker.active = false;
                _this.playerAnim.play();
                _this.scheduleOnce(function () {
                    _this.playerAnim.pause();
                }, 0.01);
                _this.toggleFakeArrowVisibility(true);
                if (!isCorrect) {
                    _this.inputBlocker.active = false;
                    _this.resetTargetColors();
                }
                // ideally fake arrow visibility should be toggled here, but let's see
            }
        });
    };
    GameManager.prototype.resetTargetColors = function () {
        this.targets.forEach(function (target) { return target.setDefColor(); });
    };
    GameManager.prototype.updateScore = function () {
        this.score++;
        this.scoreLabel.string = this.score.toFixed();
    };
    GameManager.prototype.createOptions = function () {
        var options = [];
        options[0] = this.questionSum;
        do {
            options[1] = this.genRandomNumber(1, 50);
        } while (options[1] === this.questionSum);
        do {
            options[2] = this.genRandomNumber(1, 50);
        } while (options[2] === options[1] || options[2] === this.questionSum);
        console.log("original array", options);
        var shuffledArr = this.shuffleOptions(__spreadArrays(options));
        console.log("shuffled array", shuffledArr);
        for (var i = 0; i < 3; i++) {
            this.targets[i].setValue(shuffledArr[i]);
        }
    };
    GameManager.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    GameManager.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    GameManager.prototype.openRoughArea = function () {
        this.roughAreaNode.active = true;
        GameManager_1.roughSheetMode = true;
    };
    GameManager.prototype.changeBowAndArrowSprite = function () {
        var bow = this.playerNode.getChildByName("Bow");
        var arrow = this.playerNode.getChildByName("FakeArrow");
        bow.getComponent(cc.Sprite).spriteFrame =
            this.bowSpriteFrames[this.currLevel - 1];
        arrow.getComponent(cc.Sprite).spriteFrame =
            this.arrowSpriteFrames[this.currLevel - 1];
    };
    GameManager.prototype.shuffleOptions = function (arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
        return arr;
    }; // Fisher Yates Shuffle for shuffling the options
    GameManager.prototype.afterReaction = function () {
        var _this = this;
        //console.log("this.node @@@@@@@", this.node)
        this.playerNode = this.node.getChildByName("Player");
        this.playerAnim = this.playerNode.getComponent(cc.Animation);
        this.playerAnim.play();
        this.scheduleOnce(function () {
            _this.playerAnim.pause();
        }, 0.01);
        this.toggleFakeArrowVisibility(true);
        this.inputBlocker.active = false;
        this.resetTargetColors();
    };
    GameManager.prototype.onHit = function (targetNode) {
        var _this = this;
        this.answerNum = parseInt(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1]
            .correctAnswerNum);
        this.questionSum = this.answerNum;
        console.log("onHit targetNode : ", targetNode.value);
        console.log("onHit answerNum : ", this.questionSum);
        // this.commonActions();
        this.toggleLaunch(false);
        this.unschedule(this.changeArrowAngle);
        cc.audioEngine.playEffect(this.targetHitSFX, false);
        if (targetNode.value === this.questionSum) {
            console.log("Hooray, correct answer");
            //this.onRightAnswer();
            // let num = this.genRandomNumber(1, 10);
            // this.playSpineAnimAndIdle("positive_", num, true);
            // this.playAudio(AudioType.POSITIVE, num);
            //console.log("globalVariables.Instance.currentLevel #######", globalVariables.Instance.currentLevel)
            cc.audioEngine.playEffect(this.correctAudio[0], false);
            this.levelend = true;
            this.gameStarted = false;
            cc.audioEngine.stop(this.clocktick);
            this.updateScore();
            targetNode.setColor(cc.Color.GREEN);
            this.scheduleOnce(function () {
                _this.afterReaction();
            }, 2);
            this.scheduleOnce(function () {
                _this.callJockey();
            }, this.correctAudio[0].duration);
        }
        else {
            console.log("oh wrong answer, try again");
            // let num = this.genRandomNumber(1, 7);
            // this.playSpineAnimAndIdle("negative_", num, false);
            // this.playAudio(AudioType.NEGATIVE, num);
            this.canTouch = false;
            targetNode.setColor(cc.Color.RED);
            this.afterReaction();
            this.callNegativeRection();
        }
        this.destroyArrow(1);
    };
    GameManager.prototype.callJockey = function () {
        var _this = this;
        JockeyController_1.default.JOCKEY.callJockey(JockeyController_1.JOCKEY_TYPE.POSITIVE, function () {
            _this.callNextLevel();
        });
        return;
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
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
                "positive_6",
            ];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
        //console.log("characterAppear--Podar_Jumbo");
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idel", true);
        }
        else {
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle", true);
        }
        this.currentJcokey
            .getComponent(sp.Skeleton)
            .setAnimation(0, anim[currentClipNum], false);
        cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
        this.scheduleOnce(function () {
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idel", true);
            }
            else {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            //console.log("characterDisappear--Podar_Jumbo");
            _this.callNextLevel();
        }, this.positiveAudio[currentClipNum].duration);
    };
    GameManager.prototype.callNextLevel = function () {
        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
        this.callStarsEared();
        this.currLevel++;
        globalVariables_1.default.Instance.currentLevel++;
        ProgressBar_1.default.Instance.ProgressFill(this.currLevel - 1, false);
        console.log("this.currLevel : ", this.currLevel);
        if (this.currLevel >= StartGame_1.default.Instance.questions.length + 1) {
            console.log("endgame reached");
            this.inputBlocker.active = true;
            this.scheduleOnce(function () {
                cc.director.loadScene("gameEnd");
            }, 2);
        }
        else {
            this.setQuestionScreen();
            this.panning(); // contains all panning logic and stuff
        }
        this.toggleFakeArrowVisibility(true);
    };
    GameManager.prototype.callStarsEared = function () {
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
    GameManager.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    GameManager.prototype.callNegativeRection = function () {
        var _this = this;
        this.reduceLife();
        this.canTouch = false;
        //_node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        this.scheduleOnce(function () {
            JockeyController_1.default.JOCKEY.callJockey(JockeyController_1.JOCKEY_TYPE.NEGATIVE, function () {
                _this.canTouch = true;
            });
            // let anim: string[] = [];
            // if (startGame.Instance.jockeyName == "Podar") {
            //   anim = [
            //     "negetive",
            //     "negetive2",
            //     "negetive3",
            //     "negetive4",
            //     "negetive5",
            //     "negetive6",
            //   ];
            // } else if (startGame.Instance.jockeyName == "bag") {
            //   anim = ["negative_1", "negative_2", "negative_3"];
            // } else if (startGame.Instance.jockeyName == "cryon") {
            //   anim = ["negative_1", "negative_2", "negative_3"];
            // } else if (startGame.Instance.jockeyName == "Singham") {
            //   anim = ["no"];
            // } else if (startGame.Instance.jockeyName == "Mighty_Raju") {
            //   anim = ["try_again"];
            // } else if (startGame.Instance.jockeyName == "Puzzle") {
            //   anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            // }
            // let currentClipNum: number = this.getRandomNumber(0, anim.length - 1);
            // if (startGame.Instance.jockeyName == "Podar") {
            //   this.currentJcokey
            //     .getComponent(sp.Skeleton)
            //     .setAnimation(0, "idel", true);
            // } else {
            //   this.currentJcokey
            //     .getComponent(sp.Skeleton)
            //     .setAnimation(0, "idle", true);
            // }
            // this.currentJcokey
            //   .getComponent(sp.Skeleton)
            //   .setAnimation(0, anim[currentClipNum], false);
            // cc.audioEngine.playEffect(this.negativeAudio[currentClipNum], false);
            // this.scheduleOnce(() => {
            //   if (startGame.Instance.jockeyName == "Podar") {
            //     this.currentJcokey
            //       .getComponent(sp.Skeleton)
            //       .setAnimation(0, "idel", true);
            //   } else {
            //     this.currentJcokey
            //       .getComponent(sp.Skeleton)
            //       .setAnimation(0, "idle", true);
            //   }
            //   this.canTouch = true;
            // }, this.negativeAudio[currentClipNum].duration);
        }, 0.7);
    };
    GameManager.prototype.onRightAnswer = function () {
        this.currLevel++;
        globalVariables_1.default.Instance.currentLevel++;
        ProgressBar_1.default.Instance.ProgressFill(this.currLevel, false);
        console.log("this.currLevel : ", this.currLevel);
        if (this.currLevel >= StartGame_1.default.Instance.questions.length + 1) {
            console.log("endgame reached");
            this.inputBlocker.active = true;
            this.scheduleOnce(function () {
                cc.director.loadScene("gameEnd");
            }, 2);
        }
        else {
            this.setQuestionScreen();
        }
        this.panning();
        this.toggleFakeArrowVisibility(true);
    };
    GameManager.prototype.destroyArrow = function (offset) {
        var _this = this;
        this.scheduleOnce(function () {
            if (_this.realArrowInstance != null) {
                _this.realArrowInstance.destroy();
                _this.realArrowInstance = null;
            }
        }, offset);
    };
    GameManager.prototype.panning = function () {
        // contains all the panning functions and methods
        var _this = this;
        cc.tween(this.node.getChildByName("Target"))
            .to(0.2, { opacity: 0 }, { easing: "smooth" })
            .start();
        this.node.getChildByName("BridgeComplete").active = true;
        this.node.getChildByName("BridgeComplete").opacity = 0;
        cc.tween(this.node.getChildByName("BridgeComplete"))
            .to(1, { opacity: 255 }, { easing: "smooth" })
            .call(function () {
            _this.panBridge();
            _this.panBackground();
            _this.movePlayer();
            _this.panTarget();
        })
            .start();
        // this.changeBowAndArrowSprite();
    };
    GameManager.prototype.panBridge = function () {
        var bridge = this.node.getChildByName("Bridge");
        var bridge2 = this.node.getChildByName("BridgeComplete");
        var bridge_init_pos = bridge.getPosition();
        var bridge2_init_pos = bridge2.getPosition();
        cc.tween(bridge)
            .to(0.5, { x: -1500 }, { easing: "quartOut" })
            .call(function () {
            bridge.setPosition(bridge_init_pos);
        })
            .start();
        cc.tween(bridge2)
            .to(0.5, { x: bridge_init_pos.x }, { easing: "quartOut" })
            .call(function () {
            bridge2.setPosition(bridge2_init_pos);
            bridge2.active = false;
        })
            .start();
    };
    GameManager.prototype.panBackground = function () {
        var _this = this;
        var clone1 = cc.instantiate(this.bgNode);
        var clone2 = cc.instantiate(this.bgNode);
        this.bgNode.addChild(clone1);
        this.bgNode.addChild(clone2);
        clone2.position = new cc.Vec3(1920, 0);
        var comp2 = clone2.getComponent(cc.Sprite);
        //comp2.spriteFrame = this.backgroundSpriteFrames[this.currLevel - 1];
        comp2.spriteFrame = this.node
            .getChildByName("bg")
            .getComponent(cc.Sprite).spriteFrame;
        cc.tween(clone1)
            .to(0.5, { position: new cc.Vec3(-1920, 0) }, { easing: "quartOut" })
            .call(function () {
            clone1.destroy();
        })
            .start();
        cc.tween(clone2)
            .to(0.5, { position: new cc.Vec3(0, 0) }, { easing: "quartOut" })
            .call(function () {
            _this.mainBgSprite.spriteFrame = _this.node
                .getChildByName("bg")
                .getComponent(cc.Sprite).spriteFrame;
            _this.changeBowAndArrowSprite();
            clone2.destroy();
        })
            .start();
    };
    GameManager.prototype.panTarget = function () {
        var _this = this;
        var TargetEndPos = cc.find("Canvas/Gameplay/TargetEndPos");
        var TargetStartPos = cc.find("Canvas/Gameplay/TargetStartPos");
        cc.tween(this.targetNode)
            .call(function () {
            _this.targets.forEach(function (target) { return (target.node.active = false); });
        })
            .to(0.5, { position: TargetEndPos.position }, { easing: "quartOut" })
            .call(function () {
            _this.node.getChildByName("Target").opacity = 255;
            _this.targetNode.position = TargetStartPos.position;
        })
            .delay(0.2)
            .to(0.5, { position: this.targetInitPos }, { easing: "quartOut" })
            .call(function () {
            _this.node.getChildByName("Target").opacity = 255;
            _this.targets.forEach(function (target) { return (target.node.active = true); });
            _this.inputBlocker.active = false;
        })
            .start();
    };
    // public commonActions() {
    //   this.currLevel++;
    //   // *EXTERNAL
    //   ProgressBar.Instance.ProgressFill(this.currLevel, false);
    //   if (this.currLevel >= startGame.Instance.TotalLevels) {
    //     console.log("endgame reached");
    //     this.inputBlocker.active = true;
    //     this.scheduleOnce(() => {
    //       cc.director.loadScene("gameEnd");
    //     }, 2);
    //   }
    //   // this.scheduleOnce(() => {
    //   //   this.toggleFakeArrowVisibility(true);
    //   //   // this.inputBlocker.active = false;
    //   //   // this.generateQuestion();
    //   // }, 1);
    // }
    GameManager.prototype.onMiss = function () {
        var _this = this;
        // this.commonActions();
        this.scheduleOnce(function () {
            _this.toggleLaunch(false);
            _this.unschedule(_this.changeArrowAngle);
        }, 2);
        var num = this.genRandomNumber(1, 7);
        // this.playSpineAnimAndIdle("negative_", num, false);
        // this.playAudio(AudioType.NEGATIVE, num);
        this.afterReaction();
        this.callNegativeRection();
    };
    GameManager.prototype.changeArrowAngle = function () {
        if (this.realArrowInstance == null)
            return;
        if (this.launch) {
            var velocity = this.arrowRigidBody.linearVelocity;
            // Calculate the angle of the velocity vector
            var angleInRadians = Math.atan2(velocity.y, velocity.x);
            // Convert the angle from radians to degrees
            var angleInDegrees = cc.misc.radiansToDegrees(angleInRadians);
            // Apply the rotation to the arrow
            this.realArrowInstance.angle = angleInDegrees;
        }
    };
    GameManager.prototype.onTouchStart = function () {
        var _this = this;
        this.node.getChildByName("TutorialHand").active = false;
        if (!this.gameStarted) {
            return;
        }
        if (GameManager_1.roughSheetMode)
            return;
        this.stopTutorialAnim();
        this.playDefAnim();
        this.arrowHead.active = true;
        // this.tweenAnimation();
        this.trajectoryNode.active = true;
        this.inputBlocker.active = true;
        this.schedule(function () {
            _this.drawTrajectory();
        }, 0.01);
    };
    GameManager.prototype.onTouchEnd = function () {
        var _this = this;
        if (!this.gameStarted) {
            return;
        }
        if (GameManager_1.roughSheetMode)
            return;
        this.stopAnim();
        this.arrowHead.active = false;
        // this.toggleLaunch(true);
        this.node
            .getChildByName("Player")
            .getChildByName("lefthand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.node
            .getChildByName("Player")
            .getChildByName("player1")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.node
            .getChildByName("Player")
            .getChildByName("RightHand")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.node
            .getChildByName("Player")
            .getChildByName("arrow")
            .getComponent(sp.Skeleton)
            .setAnimation(0, "ch_1_shoot", false);
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("Player")
                .getChildByName("lefthand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("player1")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("RightHand")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            _this.node
                .getChildByName("Player")
                .getChildByName("arrow")
                .getComponent(sp.Skeleton)
                .setAnimation(0, "idle_1", true);
            // this.node.getChildByName("Player").getChildByName("arrow").active = false;
            // this.node.getChildByName("Player").getChildByName("Bow").active = true;
            _this.createNewArrow();
            _this.toggleLaunch(true);
            // this.toggleFakeArrowVisibility(false);
            _this.launchArrow();
            _this.unschedule(_this.drawTrajectory);
            _this.trajectoryNode.active = false;
        }, 0.5);
        // this.launchArrow();
        // this.stopTween();
    };
    GameManager.prototype.toggleLaunch = function (val) {
        this.launch = val;
    };
    GameManager.prototype.playDefAnim = function () {
        this.playerAnim.play(this.upDownAnim.name);
        // this.tweenArrow();
    };
    GameManager.prototype.stopAnim = function () {
        this.playerAnim.stop();
        // this.node.getChildByName("Player").getChildByName("Bow").active = false;
        // this.node.getChildByName("Player").getChildByName("arrow").active = true;
    };
    GameManager.prototype.createNewArrow = function () {
        if (this.realArrowInstance != null) {
            console.log("instance not empty, destroying");
            this.realArrowInstance.destroy();
            this.realArrowInstance = null;
            this.inputBlocker.active = false;
        }
        this.realArrowInstance = cc.instantiate(this.realArrow);
        this.playerNode.addChild(this.realArrowInstance);
        this.realArrowInstance.position = this.fakeArrowNode.position;
        this.realArrowInstance.angle = this.fakeArrowNode.angle;
        this.arrowRigidBody = this.realArrowInstance.getComponent(cc.RigidBody);
        var realArrowSprite = this.realArrowInstance.getComponent(cc.Sprite);
        // realArrowSprite.spriteFrame = this.arrowSpriteFrames[this.currLevel - 1];
    };
    GameManager.prototype.toggleFakeArrowVisibility = function (val) {
        return;
        this.fakeArrowNode.active = val;
    };
    // *INFO: this function is completely hit and trial, so values will have to be changed here
    // to match the projectile path
    GameManager.prototype.drawTrajectory = function () {
        var graphics = this.trajectoryNode.getComponent(cc.Graphics);
        var arrowSprite = this.arrowHead;
        // Clear any previous drawing
        graphics.clear();
        // Set stroke color to red
        graphics.strokeColor = cc.Color.RED;
        graphics.fillColor = cc.Color.RED; // Optional: Set fill color to red
        // Get the angle from the fake arrow node (before launch)
        var angleInRadians = cc.misc.degreesToRadians(this.fakeArrowNode.angle);
        // Calculate the direction vector based on the angle
        var direction = cc
            .v2(Math.cos(angleInRadians), Math.sin(angleInRadians))
            .normalize();
        // Initial velocity based on the direction and power
        var initialVelocity = direction.mul(this.power);
        // Get the starting position of the fake arrow node
        var startPos = this.fakeArrowNode.position;
        // Simulate gravity (as you are using physics, assume gravity is -320 by default)
        var gravity = cc.v2(0, -320 * this.trajectoryGrav); // Adjust gravity scale
        // Time step and total time for simulating the trajectory
        var timeStep = 0.01;
        var simulationTime = (2 * initialVelocity.y) / -gravity.y; // Total time of flight
        simulationTime = Math.max(simulationTime, 2); // Ensure simulation time is at least 2 seconds
        var limitPos = this.node.convertToWorldSpaceAR(this.trajLimit.position);
        // Start drawing the trajectory
        graphics.moveTo(startPos.x, startPos.y);
        var lastPosX = startPos.x;
        var lastPosY = startPos.y;
        var endPosX = startPos.x; // To store the final position of the trajectory
        var endPosY = startPos.y;
        for (var t = 0; t < simulationTime; t += timeStep) {
            // Calculate the position at time t
            var posX = startPos.x + initialVelocity.x * t;
            var posY = startPos.y + initialVelocity.y * t + 0.5 * gravity.y * t * t;
            // Draw a line to the predicted position
            var posExp = this.node.convertToWorldSpaceAR(this.trajLimit.position);
            if (posX >= posExp.x - 150) {
                var overshootX = posX - (limitPos.x - 150);
                var interpolationRatio = 1 - overshootX / (posX - lastPosX);
                var finalPosX = lastPosX + (posX - lastPosX) * interpolationRatio;
                var finalPosY = lastPosY + (posY - lastPosY) * interpolationRatio;
                graphics.lineTo(finalPosX, finalPosY);
                endPosX = finalPosX;
                endPosY = finalPosY;
                break;
            }
            graphics.lineTo(posX, posY);
            lastPosX = posX;
            lastPosY = posY;
            endPosX = posX;
            endPosY = posY;
        }
        graphics.stroke(); // Stroke the line
        // Set the arrow's position to the end of the trajectory
        arrowSprite.setPosition(endPosX, endPosY);
        var arrowAngleRadians = Math.atan2(direction.y, direction.x);
        var angleInDegrees = cc.misc.radiansToDegrees(arrowAngleRadians);
        arrowSprite.angle = angleInDegrees;
    };
    GameManager.prototype.launchArrow = function () {
        var _this = this;
        var angleInRadians = cc.misc.degreesToRadians(this.realArrowInstance.angle);
        var direction = cc.v2(Math.cos(angleInRadians), Math.sin(angleInRadians));
        direction = direction.normalize();
        this.arrowRigidBody.gravityScale = 2;
        this.arrowRigidBody.applyLinearImpulse(direction.mul(this.power), this.arrowRigidBody.getWorldCenter(), true);
        this.schedule(function () {
            _this.changeArrowAngle();
        }, 0.01);
    };
    GameManager.prototype.playTutorialAnim = function () {
        var _this = this;
        var tutorialHandSpriteComp = this.tutorialHand.getComponent(cc.Sprite);
        cc.tween(this.tutorialHand)
            .delay(0.5)
            .call(function () {
            tutorialHandSpriteComp.spriteFrame = _this.handHoldFrame;
        })
            .delay(2)
            .call(function () {
            tutorialHandSpriteComp.spriteFrame = _this.handIdleFrame;
        })
            .union()
            .repeatForever()
            .start();
    };
    GameManager.prototype.stopTutorialAnim = function () {
        cc.Tween.stopAllByTarget(this.tutorialHand);
        this.tutorialHand.active = false;
    };
    GameManager.prototype.playAudio = function (type, num) {
        if (num <= 0)
            return;
        switch (type) {
            case AudioType.POSITIVE:
                this.audioSrc.clip = this.positiveAudio[num - 1];
                break;
            case AudioType.NEGATIVE:
                this.audioSrc.clip = this.negativeAudio[num - 1];
                break;
        }
        this.audioSrc.play();
    };
    GameManager.prototype.playQuestionAudio = function () {
        if (this.questionSound[0]) {
            cc.audioEngine.playEffect(this.questionSound[0], false);
        }
    };
    GameManager.prototype.update = function () {
        if (!this.levelend) {
            this.value = this.timer / this.defaultTime;
            this.node
                .getChildByName("timer")
                .getChildByName("timer1")
                .getComponent(cc.Sprite).fillRange = this.value;
            if (this.timer >= this.defaultTime) {
                this.timer = 0;
                //this.levelend = true;
                this.reduceLife();
                this.resetTimer();
            }
        }
    };
    GameManager.prototype.reduceLife = function () {
        console.log("Reducelife $$$$$$$$$$$$$$$$: ", this.lives);
        var currentLifeNode;
        currentLifeNode = this.node
            .getChildByName("lives")
            .getChildByName(this.lives.toString());
        console.log("currentLifeNode : ", currentLifeNode);
        cc.tween(currentLifeNode)
            .to(0.1, { opacity: 150 })
            .to(0.1, { opacity: 255 })
            .to(0.1, { opacity: 150 })
            .to(0.1, { opacity: 255 })
            .call(function () {
            currentLifeNode.opacity = 0;
        })
            .start();
        this.lives -= 1;
        if (this.lives == 0) {
            this.resetGame();
        }
    };
    GameManager.prototype.resetGame = function () {
        globalVariables_1.default.Instance.currentLevel = 1;
        this.setQuestionScreen();
    };
    GameManager.prototype.resetTimer = function () {
        this.timer = 0;
        this.value = 0;
        this.value = this.timer / this.defaultTime;
        this.node
            .getChildByName("timer")
            .getChildByName("timer1")
            .getComponent(cc.Sprite).fillRange = this.value;
        cc.audioEngine.stop(this.clocktick);
    };
    var GameManager_1;
    GameManager.roughSheetMode = false;
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "runningSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "wrongSFX", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "targetHitSFX", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "playerNode", void 0);
    __decorate([
        property(cc.AnimationClip)
    ], GameManager.prototype, "upDownAnim", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "realArrow", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "fakeArrowNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "inputBlocker", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "trajectoryNode", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "questionLabel", void 0);
    __decorate([
        property(Target_1.default)
    ], GameManager.prototype, "targets", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.AudioSource)
    ], GameManager.prototype, "audioSrc", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GameManager.prototype, "spineAnim", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "trajLimit", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "arrowHead", void 0);
    __decorate([
        property(cc.Integer)
    ], GameManager.prototype, "trajectoryGrav", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "handIdleFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "handHoldFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "bowSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "arrowSpriteFrames", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "backgroundSpriteFrames", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "roughAreaNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "bgNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "questionSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bagNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "cryonNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "podarPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "podarNegative", void 0);
    __decorate([
        property(cc.Font)
    ], GameManager.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], GameManager.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "clockTick", void 0);
    __decorate([
        property(cc.Integer)
    ], GameManager.prototype, "power", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFxzY3JpcHRzXFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCw4RUFFbUQ7QUFDbkQsZ0RBQTJEO0FBQzNELG9EQUEwQztBQUMxQyxtQ0FBOEI7QUFDOUIscURBQWdEO0FBRWhELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNaLGlEQUFRLENBQUE7SUFDUixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTQ5Q0M7UUExOUNRLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBcUIsSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd2QixtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUczQixtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUd2Qyx1QkFBaUIsR0FBcUIsRUFBRSxDQUFDO1FBR3pDLDRCQUFzQixHQUFxQixFQUFFLENBQUM7UUFHOUMsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd0QixtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUdkLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixjQUFRLEdBQVcsTUFBTSxDQUFDO1FBQ2xCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFbEMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDbEIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFakMscUJBQXFCO1FBQ3JCLHdDQUF3QztRQUVoQyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFHbkMsV0FBSyxHQUFXLElBQUksQ0FBQyxDQUFDLDhCQUE4QjtRQUNuRCxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN6QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQVksS0FBSyxDQUFDOztJQW8wQ3ZDLENBQUM7b0JBNTlDb0IsV0FBVztJQTRKdkIsc0NBQWdCLEdBQXZCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFNLElBQUksV0FBTSxJQUFJLFNBQU0sQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFBQSxpQkEyTEM7UUExTEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNqRSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQy9CLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQ3pDLEtBQUssQ0FDTixDQUFDO1FBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QscUJBQU0sQ0FBQyxFQUFFLENBQUMsdUJBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxxQkFBTSxDQUFDLEVBQUUsQ0FBQyx1QkFBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07WUFDdkIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLFlBQVksQ0FBQztRQUVqQixXQUFXO1FBQ1gsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSTtnQkFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDMUQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7b0JBQ3hELEtBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNLElBQ0wsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFDdEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFDeEM7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7Z0JBQ25FLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQzFELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJO29CQUN4RCxLQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQy9DLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDMUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztZQUNoRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFNUIsOEhBQThIO1FBQzlILHVIQUF1SDtRQUN2SCxJQUFJO1FBRUosSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQ3ZCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3BFLGdCQUFnQixDQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQ1Qsa0JBQWtCLEVBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQ2QseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN0QyxDQUFDO1FBRUYsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLGlCQUFpQixFQUNwQixVQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUNiLElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pELE9BQU87aUJBQ1I7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDcEMsQ0FBQyxDQUNGLENBQUM7b0NBRU8sQ0FBQztnQkFDUixJQUNFLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMzQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLFlBQVksRUFDZDtvQkFDQSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDWixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzFCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNaLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQ1gsSUFBSSxHQUFHLEVBQUU7NEJBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDNUMsT0FBTzt5QkFDUjt3QkFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxJQUFJOzZCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7NkJBQ3hCLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs2QkFDbEMsY0FBYyxDQUFDLEtBQUssQ0FBQzs2QkFDckIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUN2RCxDQUFDLENBQ0YsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFLLElBQUk7eUJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzt5QkFDeEIsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNsQyxjQUFjLENBQUMsTUFBTSxDQUFDO3lCQUN0QixZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07d0JBQzlCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDMUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FDMUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCOzs7WUFoQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFO3dCQUFqQyxDQUFDO2FBaUNUO1lBRUQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDbkIsVUFBQyxHQUFHLEVBQUUsU0FBUztnQkFDYixJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNqRCxPQUFPO2lCQUNSO2dCQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ25DLENBQUMsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQ2hCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRSxpQkFBaUIsRUFDcEIsVUFBQyxTQUFTO2dCQUNSLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQ0YsQ0FBQztvQ0FFTyxDQUFDO2dCQUNSLElBQ0UsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzNCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUMsWUFBWSxFQUNkO29CQUNBLE9BQUssZUFBZSxDQUNsQixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzFCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNaLFVBQUMsV0FBVzt3QkFDVixLQUFJLENBQUMsSUFBSTs2QkFDTixjQUFjLENBQUMsUUFBUSxDQUFDOzZCQUN4QixjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7NkJBQ2xDLGNBQWMsQ0FBQyxLQUFLLENBQUM7NkJBQ3JCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDdkQsQ0FBQyxDQUNGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQUssSUFBSTt5QkFDTixjQUFjLENBQUMsUUFBUSxDQUFDO3lCQUN4QixjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ2xDLGNBQWMsQ0FBQyxNQUFNLENBQUM7eUJBQ3RCLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTt3QkFDOUIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMxQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7OztZQTVCSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUU7d0JBQWpDLENBQUM7YUE2QlQ7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUNoQixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztpQkFDcEUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUNuQixVQUFDLFNBQVM7Z0JBQ1IsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDbkMsQ0FBQyxDQUNGLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FDL0QsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUM5QixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQUEsaUJBc0NDO1FBckNDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ25CLGNBQWMsQ0FBQyxPQUFPLENBQUM7YUFDdkIsY0FBYyxDQUFDLFFBQVEsQ0FBQzthQUN4QixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVyQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQy9CLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUM7UUFDRixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFFakUsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDdkM7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN6QzthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3pDO1FBRUQsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDO29CQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztxQkFDakI7Z0JBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2pFLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekQsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELHVDQUFpQixHQUFqQjtRQUFBLGlCQXNJQztRQXJJQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUMxRCxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsRSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JFLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXO29CQUMvRCxJQUFJLENBQUM7YUFDUjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNO1lBQ3ZCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDMUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FDMUMsQ0FBQyxZQUFZLENBQUM7UUFFakIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLGlCQUFpQixFQUNwQixVQUFDLEdBQUcsRUFBRSxTQUFTO2dCQUNiLElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pELE9BQU87aUJBQ1I7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDcEMsQ0FBQyxDQUNGLENBQUM7b0NBRU8sQ0FBQztnQkFDUixJQUNFLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUMzQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUMxQyxDQUFDLFlBQVksRUFDZDtvQkFDQSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDWixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzFCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNaLFVBQUMsR0FBRyxFQUFFLE9BQU87d0JBQ1gsSUFBSSxHQUFHLEVBQUU7NEJBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDNUMsT0FBTzt5QkFDUjt3QkFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxJQUFJOzZCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7NkJBQ3hCLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs2QkFDbEMsY0FBYyxDQUFDLEtBQUssQ0FBQzs2QkFDckIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUN2RCxDQUFDLENBQ0YsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFLLElBQUk7eUJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzt5QkFDeEIsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNsQyxjQUFjLENBQUMsTUFBTSxDQUFDO3lCQUN0QixZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07d0JBQzlCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDMUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FDMUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCOzs7WUFoQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFO3dCQUFqQyxDQUFDO2FBaUNUO1lBRUQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7aUJBQ3BFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDbkIsVUFBQyxHQUFHLEVBQUUsU0FBUztnQkFDYixJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNqRCxPQUFPO2lCQUNSO2dCQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ25DLENBQUMsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQ2hCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRSxpQkFBaUIsRUFDcEIsVUFBQyxTQUFTO2dCQUNSLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLENBQUMsQ0FDRixDQUFDO29DQUVPLENBQUM7Z0JBQ1IsSUFDRSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDM0IseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FDMUMsQ0FBQyxZQUFZLEVBQ2Q7b0JBQ0EsT0FBSyxlQUFlLENBQ2xCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDMUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FDMUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQ1osVUFBQyxXQUFXO3dCQUNWLEtBQUksQ0FBQyxJQUFJOzZCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7NkJBQ3hCLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs2QkFDbEMsY0FBYyxDQUFDLEtBQUssQ0FBQzs2QkFDckIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUN2RCxDQUFDLENBQ0YsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBSyxJQUFJO3lCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7eUJBQ3hCLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDbEMsY0FBYyxDQUFDLE1BQU0sQ0FBQzt5QkFDdEIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO3dCQUM5QixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzFCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQzFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjs7O1lBNUJILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRTt3QkFBakMsQ0FBQzthQTZCVDtZQUVELElBQUksQ0FBQyxhQUFhLENBQ2hCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ25CLFVBQUMsU0FBUztnQkFDUixLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUNGLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FDL0QsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUM5QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVNLHFDQUFlLEdBQXRCLFVBQXVCLEdBQVcsRUFBRSxJQUFZO1FBQzlDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxvQ0FBb0M7UUFDMUcsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUFBLGlCQXNEQztRQXJEQyxJQUFJLENBQUMsSUFBSTthQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7YUFDeEIsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUMxQixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSTthQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7YUFDeEIsY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUN6QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSTthQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7YUFDeEIsY0FBYyxDQUFDLFdBQVcsQ0FBQzthQUMzQixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSTthQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7YUFDeEIsY0FBYyxDQUFDLE9BQU8sQ0FBQzthQUN2QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTNELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN0QixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUNoRSxJQUFJLENBQUM7WUFDSixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7WUFDRixxRUFBcUU7YUFDcEUsS0FBSyxFQUFFLENBQUM7UUFFWCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQyxVQUFVLENBQUM7aUJBQzFCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsSUFBSTtpQkFDTixjQUFjLENBQUMsUUFBUSxDQUFDO2lCQUN4QixjQUFjLENBQUMsU0FBUyxDQUFDO2lCQUN6QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUk7aUJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQztpQkFDeEIsY0FBYyxDQUFDLFdBQVcsQ0FBQztpQkFDM0IsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQyxPQUFPLENBQUM7aUJBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRU0sZ0NBQVUsR0FBakI7UUFBQSxpQkFxREM7UUFwREMsSUFBSSxDQUFDLElBQUk7YUFDTixjQUFjLENBQUMsUUFBUSxDQUFDO2FBQ3hCLGNBQWMsQ0FBQyxVQUFVLENBQUM7YUFDMUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7YUFDTixjQUFjLENBQUMsUUFBUSxDQUFDO2FBQ3hCLGNBQWMsQ0FBQyxTQUFTLENBQUM7YUFDekIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7YUFDTixjQUFjLENBQUMsUUFBUSxDQUFDO2FBQ3hCLGNBQWMsQ0FBQyxXQUFXLENBQUM7YUFDM0IsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7YUFDTixjQUFjLENBQUMsUUFBUSxDQUFDO2FBQ3hCLGNBQWMsQ0FBQyxPQUFPLENBQUM7YUFDdkIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdEIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUNoRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDakUsSUFBSSxDQUFDO1lBQ0osRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFFWCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQyxVQUFVLENBQUM7aUJBQzFCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsSUFBSTtpQkFDTixjQUFjLENBQUMsUUFBUSxDQUFDO2lCQUN4QixjQUFjLENBQUMsU0FBUyxDQUFDO2lCQUN6QixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUk7aUJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQztpQkFDeEIsY0FBYyxDQUFDLFdBQVcsQ0FBQztpQkFDM0IsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQyxPQUFPLENBQUM7aUJBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRU0sMENBQW9CLEdBQTNCLFVBQ0UsUUFBZ0IsRUFDaEIsR0FBVyxFQUNYLFNBQWtCO1FBSHBCLGlCQWtDQztRQTdCQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBRyxRQUFRLEdBQUcsR0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsVUFBQyxVQUErQjtZQUNqRSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEtBQUcsUUFBUSxHQUFHLEdBQUssRUFBRTtnQkFDckQsOEVBQThFO2dCQUM5RSxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLFNBQVMsRUFBRTtvQkFDYixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4RCx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEMsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztvQkFDdkQsS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVyQyw2QkFBNkI7aUJBQzlCO2dCQUNELG9DQUFvQztnQkFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNULEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDZCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUMxQjtnQkFDRCxzRUFBc0U7YUFDdkU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBaUIsR0FBeEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxpQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0UsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzlCLEdBQUc7WUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDMUMsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUMxQyxHQUFHO1lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFDLFFBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUV2RSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXZDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLGdCQUFLLE9BQU8sRUFBRSxDQUFDO1FBRXBELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxxQ0FBZSxHQUFmLFVBQ0UsU0FBaUIsRUFDakIsUUFBK0M7UUFFL0MsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2YsU0FBUyxHQUFHLFNBQVMsRUFDckIsRUFBRSxDQUFDLFdBQVcsRUFDZCxVQUFDLEdBQUcsRUFBRSxXQUFXO1lBQ2YsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1I7WUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBQ0QsbUNBQWEsR0FBYixVQUNFLFNBQWlCLEVBQ2pCLFFBQTZDO1FBRTdDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNmLFNBQVMsR0FBRyxTQUFTLEVBQ3JCLEVBQUUsQ0FBQyxTQUFTLEVBQ1osVUFBQyxHQUFHLEVBQUUsV0FBVztZQUNmLElBQUksR0FBRyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNSO1lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLGFBQVcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFTSw2Q0FBdUIsR0FBOUI7UUFDRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV4RCxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXO1lBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxvQ0FBYyxHQUFyQixVQUFzQixHQUFHOztRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxLQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFBLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFBLENBQXFCO1NBQ3JDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUMsaURBQWlEO0lBRW5ELG1DQUFhLEdBQWI7UUFBQSxpQkFXQztRQVZDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxVQUFrQjtRQUF4QixpQkE4Q0M7UUE3Q0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQ3ZCLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3BFLGdCQUFnQixDQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXBELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFdkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRCxJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsdUJBQXVCO1lBQ3ZCLHlDQUF5QztZQUN6QyxxREFBcUQ7WUFDckQsMkNBQTJDO1lBQzNDLHFHQUFxRztZQUNyRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMxQyx3Q0FBd0M7WUFDeEMsc0RBQXNEO1lBQ3RELDJDQUEyQztZQUUzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUFBLGlCQTZFQztRQTVFQywwQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLDhCQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3ZELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87UUFDUCxJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzVDLElBQUksR0FBRztnQkFDTCxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTthQUNiLENBQUM7U0FDSDthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUNqRCxJQUFJLEdBQUc7Z0JBQ0wsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2FBQ2IsQ0FBQztTQUNIO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQ25ELElBQUksR0FBRztnQkFDTCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7YUFDYixDQUFDO1NBQ0g7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7WUFDckQsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBYSxFQUFFO1lBQ3pELElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsRUFBRTtZQUNwRCxJQUFJLEdBQUc7Z0JBQ0wsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7YUFDYixDQUFDO1NBQ0g7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxjQUFjLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RSxvREFBb0Q7UUFDcEQsSUFBSSxHQUFHLEdBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLFdBQVcsR0FBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLDhDQUE4QztRQUM5QyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWE7aUJBQ2YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYTtpQkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsYUFBYTthQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7Z0JBQzVDLEtBQUksQ0FBQyxhQUFhO3FCQUNmLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxLQUFJLENBQUMsYUFBYTtxQkFDZixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbEM7WUFDRCxpREFBaUQ7WUFDakQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHFCQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsdUNBQXVDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUkseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtZQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQ0UsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNkLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUN0RDtZQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFTyxxQ0FBZSxHQUF2QixVQUF3QixHQUFXLEVBQUUsR0FBVztRQUM5QyxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHlDQUFtQixHQUFuQjtRQUFBLGlCQXlEQztRQXhEQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsMEJBQWdCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBVyxDQUFDLFFBQVEsRUFBRTtnQkFDdkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDSCwyQkFBMkI7WUFDM0Isa0RBQWtEO1lBQ2xELGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixPQUFPO1lBQ1AsdURBQXVEO1lBQ3ZELHVEQUF1RDtZQUN2RCx5REFBeUQ7WUFDekQsdURBQXVEO1lBQ3ZELDJEQUEyRDtZQUMzRCxtQkFBbUI7WUFDbkIsK0RBQStEO1lBQy9ELDBCQUEwQjtZQUMxQiwwREFBMEQ7WUFDMUQscUVBQXFFO1lBQ3JFLElBQUk7WUFFSix5RUFBeUU7WUFDekUsa0RBQWtEO1lBQ2xELHVCQUF1QjtZQUN2QixpQ0FBaUM7WUFDakMsc0NBQXNDO1lBQ3RDLFdBQVc7WUFDWCx1QkFBdUI7WUFDdkIsaUNBQWlDO1lBQ2pDLHNDQUFzQztZQUN0QyxJQUFJO1lBQ0oscUJBQXFCO1lBQ3JCLCtCQUErQjtZQUMvQixtREFBbUQ7WUFDbkQsd0VBQXdFO1lBQ3hFLDRCQUE0QjtZQUM1QixvREFBb0Q7WUFDcEQseUJBQXlCO1lBQ3pCLG1DQUFtQztZQUNuQyx3Q0FBd0M7WUFDeEMsYUFBYTtZQUNiLHlCQUF5QjtZQUN6QixtQ0FBbUM7WUFDbkMsd0NBQXdDO1lBQ3hDLE1BQU07WUFDTiwwQkFBMEI7WUFDMUIsbURBQW1EO1FBQ3JELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQix5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLE1BQWM7UUFBbEMsaUJBT0M7UUFOQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLElBQUksS0FBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksRUFBRTtnQkFDbEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDRSxpREFBaUQ7UUFEbkQsaUJBbUJDO1FBaEJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUM3QyxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFdkQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ2pELEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDN0MsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO1FBQ1gsa0NBQWtDO0lBQ3BDLENBQUM7SUFFTSwrQkFBUyxHQUFoQjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFekQsSUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ2IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzdDLElBQUksQ0FBQztZQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQ3pELElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUFBLGlCQTZCQztRQTVCQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0Msc0VBQXNFO1FBQ3RFLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDMUIsY0FBYyxDQUFDLElBQUksQ0FBQzthQUNwQixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUV2QyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNiLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDcEUsSUFBSSxDQUFDO1lBQ0osTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO1FBRVgsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDYixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUNoRSxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSTtpQkFDdEMsY0FBYyxDQUFDLElBQUksQ0FBQztpQkFDcEIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDL0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVNLCtCQUFTLEdBQWhCO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUMzRCxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFFL0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3RCLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQ3BFLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDakQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDakUsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNqRCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsOERBQThEO0lBQzlELDREQUE0RDtJQUM1RCxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQywwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLE1BQU07SUFDTixpQ0FBaUM7SUFDakMsK0NBQStDO0lBQy9DLDhDQUE4QztJQUM5QyxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLElBQUk7SUFFRyw0QkFBTSxHQUFiO1FBQUEsaUJBV0M7UUFWQyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsc0RBQXNEO1FBQ3RELDJDQUEyQztRQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFBRSxPQUFPO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO1lBRXBELDZDQUE2QztZQUM3QyxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTFELDRDQUE0QztZQUM1QyxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRWhFLGtDQUFrQztZQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFTSxrQ0FBWSxHQUFuQjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUFJLGFBQVcsQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDWixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLGdDQUFVLEdBQWpCO1FBQUEsaUJBNkRDO1FBNURDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksYUFBVyxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxJQUFJO2FBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzthQUN4QixjQUFjLENBQUMsVUFBVSxDQUFDO2FBQzFCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJO2FBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzthQUN4QixjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJO2FBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzthQUN4QixjQUFjLENBQUMsV0FBVyxDQUFDO2FBQzNCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJO2FBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQzthQUN4QixjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsS0FBSSxDQUFDLElBQUk7aUJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQztpQkFDeEIsY0FBYyxDQUFDLFVBQVUsQ0FBQztpQkFDMUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN6QixZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsSUFBSTtpQkFDTixjQUFjLENBQUMsUUFBUSxDQUFDO2lCQUN4QixjQUFjLENBQUMsV0FBVyxDQUFDO2lCQUMzQixZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUk7aUJBQ04sY0FBYyxDQUFDLFFBQVEsQ0FBQztpQkFDeEIsY0FBYyxDQUFDLE9BQU8sQ0FBQztpQkFDdkIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLDZFQUE2RTtZQUM3RSwwRUFBMEU7WUFDMUUsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIseUNBQXlDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN0QixDQUFDO0lBRU0sa0NBQVksR0FBbkIsVUFBb0IsR0FBWTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0saUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLHFCQUFxQjtJQUN2QixDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsMkVBQTJFO1FBQzNFLDRFQUE0RTtJQUM5RSxDQUFDO0lBRU0sb0NBQWMsR0FBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLEVBQUU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSw0RUFBNEU7SUFDOUUsQ0FBQztJQUVNLCtDQUF5QixHQUFoQyxVQUFpQyxHQUFZO1FBQzNDLE9BQU87UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUVELDJGQUEyRjtJQUMzRiwrQkFBK0I7SUFDeEIsb0NBQWMsR0FBckI7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVuQyw2QkFBNkI7UUFDN0IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWpCLDBCQUEwQjtRQUMxQixRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQ0FBa0M7UUFFckUseURBQXlEO1FBQ3pELElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RSxvREFBb0Q7UUFDcEQsSUFBSSxTQUFTLEdBQUcsRUFBRTthQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdEQsU0FBUyxFQUFFLENBQUM7UUFFZixvREFBb0Q7UUFDcEQsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEQsbURBQW1EO1FBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRTNDLGlGQUFpRjtRQUNqRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFFM0UseURBQXlEO1FBQ3pELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBQ2xGLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLCtDQUErQztRQUU3RixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEUsK0JBQStCO1FBQy9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTFCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBZ0Q7UUFDMUUsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUV6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDakQsbUNBQW1DO1lBQ25DLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhFLHdDQUF3QztZQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEUsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQzFCLElBQUksVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFFNUQsSUFBSSxTQUFTLEdBQUcsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO2dCQUNsRSxJQUFJLFNBQVMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsa0JBQWtCLENBQUM7Z0JBRWxFLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUNwQixPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUNwQixNQUFNO2FBQ1A7WUFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU1QixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFaEIsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDaEI7UUFFRCxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxrQkFBa0I7UUFFckMsd0RBQXdEO1FBQ3hELFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFakUsV0FBVyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDckMsQ0FBQztJQUVNLGlDQUFXLEdBQWxCO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFMUUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FDcEMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEVBQ3BDLElBQUksQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxzQ0FBZ0IsR0FBdkI7UUFBQSxpQkFjQztRQWJDLElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDO1lBQ0osc0JBQXNCLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDMUQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLElBQUksQ0FBQztZQUNKLHNCQUFzQixDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO1FBQzFELENBQUMsQ0FBQzthQUNELEtBQUssRUFBRTthQUNQLGFBQWEsRUFBRTthQUNmLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUNFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVNLCtCQUFTLEdBQWhCLFVBQWlCLElBQWUsRUFBRSxHQUFXO1FBQzNDLElBQUksR0FBRyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRXJCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxTQUFTLENBQUMsUUFBUTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxRQUFRO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakQsTUFBTTtTQUNUO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sdUNBQWlCLEdBQXhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJO2lCQUNOLGNBQWMsQ0FBQyxPQUFPLENBQUM7aUJBQ3ZCLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ3hCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFbEQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLHVCQUF1QjtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRjtJQUNILENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxlQUF3QixDQUFDO1FBQzdCLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSTthQUN4QixjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ3ZCLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUN0QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3pCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDekIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN6QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3pCLElBQUksQ0FBQztZQUNKLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNFLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUk7YUFDTixjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ3ZCLGNBQWMsQ0FBQyxRQUFRLENBQUM7YUFDeEIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsRCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7SUF4MkNhLDBCQUFjLEdBQVksS0FBSyxDQUFDO0lBakg5QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNnQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNjO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ2tCO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2dCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7bURBQ2dCO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDbUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDa0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDbUI7SUFHdEM7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQztnREFDYTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNtQjtJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNtQjtJQUcxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNjO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ2U7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDZTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ2E7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDbUI7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDbUI7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFDcUI7SUFHOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswREFDdUI7SUFHaEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrREFDNEI7SUFHckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDbUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNrQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNvQjtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNnQjtJQWdDdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDTztJQTFJVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNDlDL0I7SUFBRCxrQkFBQztDQTU5Q0QsQUE0OUNDLENBNTlDd0MsRUFBRSxDQUFDLFNBQVMsR0E0OUNwRDtrQkE1OUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgSm9ja2V5Q29udHJvbGxlciwge1xyXG4gIEpPQ0tFWV9UWVBFLFxyXG59IGZyb20gXCIuLi8uLi9NYWluQXNzZXRzL1NjcmlwdHMvSm9ja2V5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBHQU1FX0VWRU5UUywgTG9nVHlwZXMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBFVkVOVFMgZnJvbSBcIi4uL3V0aWxzL0V2ZW50U3lzdGVtXCI7XHJcbmltcG9ydCBUYXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5lbnVtIEF1ZGlvVHlwZSB7XHJcbiAgUE9TSVRJVkUsXHJcbiAgTkVHQVRJVkUsXHJcbn1cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgcnVubmluZ1NGWDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwdWJsaWMgd3JvbmdTRlg6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIHRhcmdldEhpdFNGWDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uQ2xpcClcclxuICBwdWJsaWMgdXBEb3duQW5pbTogY2MuQW5pbWF0aW9uQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgcHVibGljIHJlYWxBcnJvdzogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIGZha2VBcnJvd05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgaW5wdXRCbG9ja2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIHRyYWplY3RvcnlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHB1YmxpYyBxdWVzdGlvbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShUYXJnZXQpXHJcbiAgcHVibGljIHRhcmdldHM6IFRhcmdldFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIHBvc2l0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHVibGljIG5lZ2F0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICBwdWJsaWMgYXVkaW9TcmM6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIHB1YmxpYyBzcGluZUFuaW06IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHB1YmxpYyBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyB0cmFqTGltaXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgYXJyb3dIZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgcHVibGljIHRyYWplY3RvcnlHcmF2OiBudW1iZXIgPSAxO1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgcHVibGljIGhhbmRJZGxlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBoYW5kSG9sZEZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBwdWJsaWMgYm93U3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICBwdWJsaWMgYXJyb3dTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kU3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHB1YmxpYyByb3VnaEFyZWFOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHVibGljIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBjcnlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9kYXJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIHBvZGFyTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkZvbnQpXHJcbiAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICBwcml2YXRlIGNsb2NrVGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgdGFyZ2V0SW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyB0dXRvcmlhbEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGN1cnJMZXZlbCA9IDE7XHJcbiAgcHVibGljIHN0YXRpYyByb3VnaFNoZWV0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHF1ZXN0aW9uU3VtID0gMDtcclxuICBwcml2YXRlIHNjb3JlID0gMDtcclxuICBwcml2YXRlIFRvdGFsT3B0aW9ucyA9IDM7XHJcbiAgb3B0aW9uc05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIG1heExldmVsID0gMTtcclxuICBhbnN3ZXJOdW06IG51bWJlciA9IDA7XHJcblxyXG4gIHRlbXBuYW1lOiBzdHJpbmcgPSBcIkFCQ0RcIjtcclxuICBwcml2YXRlIGNhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHN0YXIxTG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc3RhcjJMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzdGFyM0xvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVmYXVsdFRpbWU6IG51bWJlciA9IDMwO1xyXG5cclxuICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAvLyBwdWJsaWMgY29udGFpbmVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcmVhbEFycm93SW5zdGFuY2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICBwdWJsaWMgcG93ZXI6IG51bWJlciA9IDEwMDA7IC8vIGZpeGVkLCBjYW4gYmUgY2hhbmdlZCBsYXRlclxyXG4gIHByaXZhdGUgYXJyb3dSaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBsYXVuY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbWFpbkJnU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHBsYXllckFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIGNvcnJlY3RBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuICBjdXJyZW50SmNva2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBsZXZlbGVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IDM7XHJcbiAgcHJpdmF0ZSBnYW1lU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjbG9ja3RpY2s6IGFueTtcclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUXVlc3Rpb24oKSB7XHJcbiAgICBsZXQgbnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKTtcclxuICAgIGxldCBudW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTApO1xyXG4gICAgdGhpcy5xdWVzdGlvblN1bSA9IG51bTEgKyBudW0yO1xyXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9IGAke251bTF9ICsgJHtudW0yfSA9ID9gO1xyXG4gICAgdGhpcy5jcmVhdGVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9ubG9hZEBAQEBAQEBAQEBAQEBAXCIpO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMSxcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMucGxheWVyQW5pbSA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIEVWRU5UUy5vbihHQU1FX0VWRU5UUy5ISVQsIHRoaXMub25IaXQsIHRoaXMpO1xyXG4gICAgRVZFTlRTLm9uKEdBTUVfRVZFTlRTLk1JU1MsIHRoaXMub25NaXNzLCB0aGlzKTtcclxuICAgIC8vdGhpcy5nZW5lcmF0ZVF1ZXN0aW9uKCk7XHJcbiAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy50dXRvcmlhbEhhbmQgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1R1dG9yaWFsSGFuZFwiKTtcclxuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICB0aGlzLnRhcmdldE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldFwiKTtcclxuICAgIHRoaXMudGFyZ2V0SW5pdFBvcyA9IHRoaXMudGFyZ2V0Tm9kZS5wb3NpdGlvbjtcclxuICAgIHRoaXMucm91Z2hBcmVhTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWFpbkJnU3ByaXRlID0gdGhpcy5iZ05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsLnN0cmluZyA9XHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgXS5xdWVzdGlvblRleHQ7XHJcblxyXG4gICAgLy8gbmV3IGNvZGVcclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgIHRoaXMucG9kYXJfZm9udDtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgICAgdGhpcy5wb2Rhcl9mb250O1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgIHRoaXMuamFpcHVyaWFfZm9udDtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPVxyXG4gICAgICAgICAgdGhpcy5qYWlwdXJpYV9mb250O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wdGlvbnNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpO1xyXG5cclxuICAgIHRoaXMubWF4TGV2ZWwgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7XHJcbiAgICBpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSB0aGlzLm1heExldmVsKSB7XHJcbiAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImdhbWVFbmRcIik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgbGV2ZWxTdGFydGVkLS1gICsgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCk7XHJcblxyXG4gICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICB0aGlzLmFuc3dlckFycmF5W2ldID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29ycmVjdEFuc3dlck51bVtpXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICB0aGlzLmFuc3dlck51bSA9IHBhcnNlSW50KFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgIC5jb3JyZWN0QW5zd2VyTnVtLFxyXG4gICAgKTtcclxuICAgIHRoaXMucXVlc3Rpb25TdW0gPSB0aGlzLmFuc3dlck51bTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJDb3JyZWN0QW5zd2VyIDogXCIsXHJcbiAgICAgIHRoaXMuYW5zd2VyTnVtLFxyXG4gICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldLFxyXG4gICAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXHJcbiAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvblNvdW5kIG9ubG9hZDogXCIsIHRoaXMucXVlc3Rpb25Tb3VuZFswXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3RhbE9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgXS5pc09wdGlvblRleHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXSxcclxuICAgICAgICAgICAgKHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJmb3IgaSA6IFwiLCBpKTtcclxuICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIilcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG4gICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICAgIF0ub3B0aW9uc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb3JyZWN0QXVkaW9bMF0gPSBBdWRpb0NsaXA7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpjb2tleSA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENoaWxkQnlOYW1lKFxyXG4gICAgICBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSxcclxuICAgICk7XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5zdGFydGluZ01vdmVtZW50KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0QEBAQEBAQEBAQEBAQEBcIik7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRpbWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlO1xyXG5cclxuICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDEsXHJcbiAgICApO1xyXG4gICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuYmFnUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XHJcbiAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuY3J5b25OZWdhdGl2ZTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMucG9kYXJQb3NpdGl2ZTtcclxuICAgICAgdGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5wb2Rhck5lZ2F0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5wbGF5VHV0b3JpYWxBbmltKCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5sZXZlbGVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jbG9ja3RpY2sgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xvY2tUaWNrLCB0cnVlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUdXRvcmlhbEhhbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfSwgdGhpcy5xdWVzdGlvblNvdW5kWzBdLmR1cmF0aW9uKTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgc2V0UXVlc3Rpb25TY3JlZW4oKSB7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgIGlmIChlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgZWxlbWVudC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnF1ZXN0aW9uTGFiZWwuc3RyaW5nID1cclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICBdLnF1ZXN0aW9uVGV4dDtcclxuXHJcbiAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuICAgICAgICAoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcbiAgICAgICAgICBdLmlzT3B0aW9uVGV4dFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcbiAgICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgICAgXS5vcHRpb25zW2ldLFxyXG4gICAgICAgICAgICAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlRhcmdldFwiKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYy5sb2FkZXIubG9hZChcclxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICAgICAgLmNvcnJlY3RBdWRpb3NbMF0sXHJcbiAgICAgICAgKGVyciwgYXVkaW9DbGlwKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNvcnJlY3RBdWRpb1swXSA9IGF1ZGlvQ2xpcDtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKFxyXG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgICAucXVlc3Rpb25BdWRpb05hbWUsXHJcbiAgICAgICAgKEF1ZGlvQ2xpcCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvblNvdW5kWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVG90YWxPcHRpb25zOyBpKyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuICAgICAgICAgIF0uaXNPcHRpb25UZXh0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV0sXHJcbiAgICAgICAgICAgIChzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcbiAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9yIGkgOiBcIiwgaSk7XHJcbiAgICAgICAgICB0aGlzLm5vZGVcclxuICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuICAgICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG4gICAgICAgICAgICBdLm9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoXHJcbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgICAgIC5jb3JyZWN0QXVkaW9zWzBdLFxyXG4gICAgICAgIChBdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgIHRoaXMuY29ycmVjdEF1ZGlvWzBdID0gQXVkaW9DbGlwO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcIiwgdGhpcy5jb3JyZWN0QXVkaW9bMF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRKY29rZXkgPSBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDaGlsZEJ5TmFtZShcclxuICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUsXHJcbiAgICApO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sZXZlbGVuZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuY2xvY2t0aWNrID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsb2NrVGljaywgdHJ1ZSk7XHJcbiAgICAgIH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcbiAgICB9LCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5SYW5kb21OdW1iZXIobG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcikge1xyXG4gICAgbGV0IG1pbiA9IE1hdGguY2VpbChsb3cpO1xyXG4gICAgbGV0IG1heCA9IE1hdGguZmxvb3IoaGlnaCk7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8gY2FuIGRlZmluZSBvdGhlciB1cHBlciBsaW1pdCBoZXJlXHJcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0aW5nTW92ZW1lbnQoKSB7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuXHJcbiAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucnVubmluZ1NGWCwgZmFsc2UpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMucGxheWVyTm9kZSlcclxuICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKC00MTksIC04NSwgMCkgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIC5ieSgwLjI1LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICB9LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vdmVQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMl9ydW5cIiwgdHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8yX3J1blwiLCB0cnVlKTtcclxuXHJcbiAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucnVubmluZ1NGWCwgZmFsc2UpO1xyXG4gICAgY2MudHdlZW4odGhpcy5wbGF5ZXJOb2RlKVxyXG4gICAgICAuYnkoMC4yNSwgeyBwb3NpdGlvbjogY2MudjMoMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5ieSgwLjI1LCB7IHBvc2l0aW9uOiBjYy52MygtMTAwLCAwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0aGFuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUmlnaHRIYW5kXCIpXHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV8xXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLm5vZGVcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgIH0sIDAuNSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheVNwaW5lQW5pbUFuZElkbGUoXHJcbiAgICBhbmltTmFtZTogc3RyaW5nLFxyXG4gICAgbnVtOiBudW1iZXIsXHJcbiAgICBpc0NvcnJlY3Q6IGJvb2xlYW4sXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNwaW5lQW5pbS5zZXRBbmltYXRpb24oMCwgYCR7YW5pbU5hbWV9JHtudW19YCwgZmFsc2UpO1xyXG4gICAgdGhpcy5zcGluZUFuaW0uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSkgPT4ge1xyXG4gICAgICBpZiAodHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gYCR7YW5pbU5hbWV9JHtudW19YCkge1xyXG4gICAgICAgIC8vIFBsYXkgdGhlIGlkbGUgYW5pbWF0aW9uIChlLmcuLCAnaWRsZScpIG9uY2UgdGhlIHByaW1hcnkgYW5pbWF0aW9uIGNvbXBsZXRlc1xyXG4gICAgICAgIHRoaXMuc3BpbmVBbmltLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgdGhpcy5sZXZlbGVuZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBcIiwgdGhpcy5sZXZlbGVuZCk7XHJcbiAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XHJcbiAgICAgICAgICB0aGlzLnBhbm5pbmcoKTsgLy8gY29udGFpbnMgYWxsIHBhbm5pbmcgbG9naWMgYW5kIHN0dWZmXHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZha2VBcnJvd1Zpc2liaWxpdHkodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgLy9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllckFuaW0ucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGxheWVyQW5pbS5wYXVzZSgpO1xyXG4gICAgICAgIH0sIDAuMDEpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICAgICAgICBpZiAoIWlzQ29ycmVjdCkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJlc2V0VGFyZ2V0Q29sb3JzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlkZWFsbHkgZmFrZSBhcnJvdyB2aXNpYmlsaXR5IHNob3VsZCBiZSB0b2dnbGVkIGhlcmUsIGJ1dCBsZXQncyBzZWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRUYXJnZXRDb2xvcnMoKSB7XHJcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQuc2V0RGVmQ29sb3IoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU2NvcmUoKSB7XHJcbiAgICB0aGlzLnNjb3JlKys7XHJcbiAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5zY29yZS50b0ZpeGVkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlT3B0aW9ucygpIHtcclxuICAgIGxldCBvcHRpb25zOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgb3B0aW9uc1swXSA9IHRoaXMucXVlc3Rpb25TdW07XHJcbiAgICBkbyB7XHJcbiAgICAgIG9wdGlvbnNbMV0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA1MCk7XHJcbiAgICB9IHdoaWxlIChvcHRpb25zWzFdID09PSB0aGlzLnF1ZXN0aW9uU3VtKTtcclxuICAgIGRvIHtcclxuICAgICAgb3B0aW9uc1syXSA9IHRoaXMuZ2VuUmFuZG9tTnVtYmVyKDEsIDUwKTtcclxuICAgIH0gd2hpbGUgKG9wdGlvbnNbMl0gPT09IG9wdGlvbnNbMV0gfHwgb3B0aW9uc1syXSA9PT0gdGhpcy5xdWVzdGlvblN1bSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJvcmlnaW5hbCBhcnJheVwiLCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgc2h1ZmZsZWRBcnIgPSB0aGlzLnNodWZmbGVPcHRpb25zKFsuLi5vcHRpb25zXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJzaHVmZmxlZCBhcnJheVwiLCBzaHVmZmxlZEFycik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICB0aGlzLnRhcmdldHNbaV0uc2V0VmFsdWUoc2h1ZmZsZWRBcnJbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFNwcml0ZUZyYW1lKFxyXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCxcclxuICApIHtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFxyXG4gICAgICBcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcbiAgbG9hZEF1ZGlvQ2xpcChcclxuICAgIGF1ZGlvTmFtZTogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkLFxyXG4gICkge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXHJcbiAgICAgIFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG4gICAgICBjYy5BdWRpb0NsaXAsXHJcbiAgICAgIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuUm91Z2hBcmVhKCkge1xyXG4gICAgdGhpcy5yb3VnaEFyZWFOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBHYW1lTWFuYWdlci5yb3VnaFNoZWV0TW9kZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlQm93QW5kQXJyb3dTcHJpdGUoKSB7XHJcbiAgICBsZXQgYm93ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiQm93XCIpO1xyXG4gICAgbGV0IGFycm93ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENoaWxkQnlOYW1lKFwiRmFrZUFycm93XCIpO1xyXG5cclxuICAgIGJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgIHRoaXMuYm93U3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgICBhcnJvdy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgIHRoaXMuYXJyb3dTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaHVmZmxlT3B0aW9ucyhhcnIpIHtcclxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9IC8vIEZpc2hlciBZYXRlcyBTaHVmZmxlIGZvciBzaHVmZmxpbmcgdGhlIG9wdGlvbnNcclxuXHJcbiAgYWZ0ZXJSZWFjdGlvbigpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzLm5vZGUgQEBAQEBAQFwiLCB0aGlzLm5vZGUpXHJcbiAgICB0aGlzLnBsYXllck5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIik7XHJcbiAgICB0aGlzLnBsYXllckFuaW0gPSB0aGlzLnBsYXllck5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICB0aGlzLnBsYXllckFuaW0ucGxheSgpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllckFuaW0ucGF1c2UoKTtcclxuICAgIH0sIDAuMDEpO1xyXG4gICAgdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHRydWUpO1xyXG4gICAgdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlc2V0VGFyZ2V0Q29sb3JzKCk7XHJcbiAgfVxyXG5cclxuICBvbkhpdCh0YXJnZXROb2RlOiBUYXJnZXQpIHtcclxuICAgIHRoaXMuYW5zd2VyTnVtID0gcGFyc2VJbnQoXHJcbiAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdXHJcbiAgICAgICAgLmNvcnJlY3RBbnN3ZXJOdW0sXHJcbiAgICApO1xyXG4gICAgdGhpcy5xdWVzdGlvblN1bSA9IHRoaXMuYW5zd2VyTnVtO1xyXG4gICAgY29uc29sZS5sb2coXCJvbkhpdCB0YXJnZXROb2RlIDogXCIsIHRhcmdldE5vZGUudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJvbkhpdCBhbnN3ZXJOdW0gOiBcIiwgdGhpcy5xdWVzdGlvblN1bSk7XHJcblxyXG4gICAgLy8gdGhpcy5jb21tb25BY3Rpb25zKCk7XHJcbiAgICB0aGlzLnRvZ2dsZUxhdW5jaChmYWxzZSk7XHJcbiAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jaGFuZ2VBcnJvd0FuZ2xlKTtcclxuXHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGFyZ2V0SGl0U0ZYLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKHRhcmdldE5vZGUudmFsdWUgPT09IHRoaXMucXVlc3Rpb25TdW0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJIb29yYXksIGNvcnJlY3QgYW5zd2VyXCIpO1xyXG4gICAgICAvL3RoaXMub25SaWdodEFuc3dlcigpO1xyXG4gICAgICAvLyBsZXQgbnVtID0gdGhpcy5nZW5SYW5kb21OdW1iZXIoMSwgMTApO1xyXG4gICAgICAvLyB0aGlzLnBsYXlTcGluZUFuaW1BbmRJZGxlKFwicG9zaXRpdmVfXCIsIG51bSwgdHJ1ZSk7XHJcbiAgICAgIC8vIHRoaXMucGxheUF1ZGlvKEF1ZGlvVHlwZS5QT1NJVElWRSwgbnVtKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgIyMjIyMjI1wiLCBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKVxyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvWzBdLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMubGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jbG9ja3RpY2spO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgIHRhcmdldE5vZGUuc2V0Q29sb3IoY2MuQ29sb3IuR1JFRU4pO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZnRlclJlYWN0aW9uKCk7XHJcbiAgICAgIH0sIDIpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsSm9ja2V5KCk7XHJcbiAgICAgIH0sIHRoaXMuY29ycmVjdEF1ZGlvWzBdLmR1cmF0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib2ggd3JvbmcgYW5zd2VyLCB0cnkgYWdhaW5cIik7XHJcbiAgICAgIC8vIGxldCBudW0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA3KTtcclxuICAgICAgLy8gdGhpcy5wbGF5U3BpbmVBbmltQW5kSWRsZShcIm5lZ2F0aXZlX1wiLCBudW0sIGZhbHNlKTtcclxuICAgICAgLy8gdGhpcy5wbGF5QXVkaW8oQXVkaW9UeXBlLk5FR0FUSVZFLCBudW0pO1xyXG5cclxuICAgICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICB0YXJnZXROb2RlLnNldENvbG9yKGNjLkNvbG9yLlJFRCk7XHJcbiAgICAgIHRoaXMuYWZ0ZXJSZWFjdGlvbigpO1xyXG4gICAgICB0aGlzLmNhbGxOZWdhdGl2ZVJlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGVzdHJveUFycm93KDEpO1xyXG4gIH1cclxuXHJcbiAgY2FsbEpvY2tleSgpIHtcclxuICAgIEpvY2tleUNvbnRyb2xsZXIuSk9DS0VZLmNhbGxKb2NrZXkoSk9DS0VZX1RZUEUuUE9TSVRJVkUsICgpID0+IHtcclxuICAgICAgdGhpcy5jYWxsTmV4dExldmVsKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zc2l0aXZlXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUyXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmUzXCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU0XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU1XCIsXHJcbiAgICAgICAgXCJwb3NzaXRpdmU2XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgYW5pbSA9IFtcclxuICAgICAgICBcInBvc2l0aXZlXzFcIixcclxuICAgICAgICBcInBvc2l0aXZlXzJcIixcclxuICAgICAgICBcInBvc2l0aXZlXzNcIixcclxuICAgICAgICBcInBvc2l0aXZlXzRcIixcclxuICAgICAgICBcInBvc2l0aXZlXzVcIixcclxuICAgICAgXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8xXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8yXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV8zXCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV80XCIsXHJcbiAgICAgICAgXCJwb3NpdGl2ZV81XCIsXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgIGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuICAgIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQdXp6bGVcIikge1xyXG4gICAgICBhbmltID0gW1xyXG4gICAgICAgIFwicG9zaXRpdmVfMVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfMlwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfM1wiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNFwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNVwiLFxyXG4gICAgICAgIFwicG9zaXRpdmVfNlwiLFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJhbmltIGxlbmd0aCA9IFwiLCBhbmltLmxlbmd0aCk7XHJcbiAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIGFuaW0ubGVuZ3RoIC0gMSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnRDbGlwTnVtID0gXCIsIGN1cnJlbnRDbGlwTnVtKTtcclxuICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xMjAwLCAxMjAwXTtcclxuICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQ1MCwgNDUwXTtcclxuICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRKY29rZXlcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgICB0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuICAgIH0sIHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgY2FsbE5leHRMZXZlbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuICAgIHRoaXMuY2FsbFN0YXJzRWFyZWQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJMZXZlbCsrO1xyXG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsIC0gMSwgZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmN1cnJMZXZlbCA6IFwiLCB0aGlzLmN1cnJMZXZlbCk7XHJcbiAgICBpZiAodGhpcy5jdXJyTGV2ZWwgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9ucy5sZW5ndGggKyAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5kZ2FtZSByZWFjaGVkXCIpO1xyXG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAgICAgfSwgMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFF1ZXN0aW9uU2NyZWVuKCk7XHJcbiAgICAgIHRoaXMucGFubmluZygpOyAvLyBjb250YWlucyBhbGwgcGFubmluZyBsb2dpYyBhbmQgc3R1ZmZcclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNhbGxTdGFyc0VhcmVkKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXIxTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG4gICAgICB0aGlzLnN0YXIxTG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMVwiKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5zdGFyMkxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcclxuICAgICAgdGhpcy5zdGFyMkxvZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnN0YXIzTG9nICYmXHJcbiAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc3RhcjNMb2cgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICBfbnVtYmVyID0gTWF0aC5yb3VuZChfbnVtYmVyKTtcclxuICAgIHJldHVybiBfbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgY2FsbE5lZ2F0aXZlUmVjdGlvbigpIHtcclxuICAgIHRoaXMucmVkdWNlTGlmZSgpO1xyXG4gICAgdGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgLy9fbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBKb2NrZXlDb250cm9sbGVyLkpPQ0tFWS5jYWxsSm9ja2V5KEpPQ0tFWV9UWVBFLk5FR0FUSVZFLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAvLyAgIGFuaW0gPSBbXHJcbiAgICAgIC8vICAgICBcIm5lZ2V0aXZlXCIsXHJcbiAgICAgIC8vICAgICBcIm5lZ2V0aXZlMlwiLFxyXG4gICAgICAvLyAgICAgXCJuZWdldGl2ZTNcIixcclxuICAgICAgLy8gICAgIFwibmVnZXRpdmU0XCIsXHJcbiAgICAgIC8vICAgICBcIm5lZ2V0aXZlNVwiLFxyXG4gICAgICAvLyAgICAgXCJuZWdldGl2ZTZcIixcclxuICAgICAgLy8gICBdO1xyXG4gICAgICAvLyB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIpIHtcclxuICAgICAgLy8gICBhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG4gICAgICAvLyB9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG4gICAgICAvLyAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuICAgICAgLy8gICBhbmltID0gW1wibm9cIl07XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcbiAgICAgIC8vICAgYW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcclxuICAgICAgLy8gfSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiKSB7XHJcbiAgICAgIC8vICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG4gICAgICAvLyAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLy8gICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAvLyAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuICAgICAgLy8gICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC8vICAgLnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG4gICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAvLyAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuICAgICAgLy8gICAgIHRoaXMuY3VycmVudEpjb2tleVxyXG4gICAgICAvLyAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAvLyAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAvLyAgICAgdGhpcy5jdXJyZW50SmNva2V5XHJcbiAgICAgIC8vICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC8vICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgLy8gfSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcbiAgICB9LCAwLjcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmlnaHRBbnN3ZXIoKSB7XHJcbiAgICB0aGlzLmN1cnJMZXZlbCsrO1xyXG4gICAgZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCsrO1xyXG4gICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsLCBmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VyckxldmVsIDogXCIsIHRoaXMuY3VyckxldmVsKTtcclxuICAgIGlmICh0aGlzLmN1cnJMZXZlbCA+PSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zLmxlbmd0aCArIDEpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlbmRnYW1lIHJlYWNoZWRcIik7XHJcbiAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lRW5kXCIpO1xyXG4gICAgICB9LCAyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0UXVlc3Rpb25TY3JlZW4oKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFubmluZygpO1xyXG4gICAgdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3lBcnJvdyhvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sIG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFubmluZygpIHtcclxuICAgIC8vIGNvbnRhaW5zIGFsbCB0aGUgcGFubmluZyBmdW5jdGlvbnMgYW5kIG1ldGhvZHNcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikpXHJcbiAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzbW9vdGhcIiB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJyaWRnZUNvbXBsZXRlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VDb21wbGV0ZVwiKS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VDb21wbGV0ZVwiKSlcclxuICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNtb290aFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBhbkJyaWRnZSgpO1xyXG4gICAgICAgIHRoaXMucGFuQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVBsYXllcigpO1xyXG4gICAgICAgIHRoaXMucGFuVGFyZ2V0KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgLy8gdGhpcy5jaGFuZ2VCb3dBbmRBcnJvd1Nwcml0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhbkJyaWRnZSgpIHtcclxuICAgIGxldCBicmlkZ2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCcmlkZ2VcIik7XHJcbiAgICBsZXQgYnJpZGdlMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJyaWRnZUNvbXBsZXRlXCIpO1xyXG5cclxuICAgIGxldCBicmlkZ2VfaW5pdF9wb3MgPSBicmlkZ2UuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCBicmlkZ2UyX2luaXRfcG9zID0gYnJpZGdlMi5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIGNjLnR3ZWVuKGJyaWRnZSlcclxuICAgICAgLnRvKDAuNSwgeyB4OiAtMTUwMCB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBicmlkZ2Uuc2V0UG9zaXRpb24oYnJpZGdlX2luaXRfcG9zKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICBjYy50d2VlbihicmlkZ2UyKVxyXG4gICAgICAudG8oMC41LCB7IHg6IGJyaWRnZV9pbml0X3Bvcy54IH0sIHsgZWFzaW5nOiBcInF1YXJ0T3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGJyaWRnZTIuc2V0UG9zaXRpb24oYnJpZGdlMl9pbml0X3Bvcyk7XHJcbiAgICAgICAgYnJpZGdlMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFuQmFja2dyb3VuZCgpIHtcclxuICAgIGxldCBjbG9uZTEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJnTm9kZSk7XHJcbiAgICBsZXQgY2xvbmUyID0gY2MuaW5zdGFudGlhdGUodGhpcy5iZ05vZGUpO1xyXG4gICAgdGhpcy5iZ05vZGUuYWRkQ2hpbGQoY2xvbmUxKTtcclxuICAgIHRoaXMuYmdOb2RlLmFkZENoaWxkKGNsb25lMik7XHJcbiAgICBjbG9uZTIucG9zaXRpb24gPSBuZXcgY2MuVmVjMygxOTIwLCAwKTtcclxuICAgIGxldCBjb21wMiA9IGNsb25lMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIC8vY29tcDIuc3ByaXRlRnJhbWUgPSB0aGlzLmJhY2tncm91bmRTcHJpdGVGcmFtZXNbdGhpcy5jdXJyTGV2ZWwgLSAxXTtcclxuICAgIGNvbXAyLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuXHJcbiAgICBjYy50d2VlbihjbG9uZTEpXHJcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKC0xOTIwLCAwKSB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBjbG9uZTEuZGVzdHJveSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICBjYy50d2VlbihjbG9uZTIpXHJcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKDAsIDApIH0sIHsgZWFzaW5nOiBcInF1YXJ0T3V0XCIgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFpbkJnU3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQm93QW5kQXJyb3dTcHJpdGUoKTtcclxuICAgICAgICBjbG9uZTIuZGVzdHJveSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYW5UYXJnZXQoKSB7XHJcbiAgICBsZXQgVGFyZ2V0RW5kUG9zID0gY2MuZmluZChcIkNhbnZhcy9HYW1lcGxheS9UYXJnZXRFbmRQb3NcIik7XHJcbiAgICBsZXQgVGFyZ2V0U3RhcnRQb3MgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVwbGF5L1RhcmdldFN0YXJ0UG9zXCIpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMudGFyZ2V0Tm9kZSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+ICh0YXJnZXQubm9kZS5hY3RpdmUgPSBmYWxzZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBUYXJnZXRFbmRQb3MucG9zaXRpb24gfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGFyZ2V0XCIpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy50YXJnZXROb2RlLnBvc2l0aW9uID0gVGFyZ2V0U3RhcnRQb3MucG9zaXRpb247XHJcbiAgICAgIH0pXHJcbiAgICAgIC5kZWxheSgwLjIpXHJcbiAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IHRoaXMudGFyZ2V0SW5pdFBvcyB9LCB7IGVhc2luZzogXCJxdWFydE91dFwiIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUYXJnZXRcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiAodGFyZ2V0Lm5vZGUuYWN0aXZlID0gdHJ1ZSkpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBjb21tb25BY3Rpb25zKCkge1xyXG4gIC8vICAgdGhpcy5jdXJyTGV2ZWwrKztcclxuICAvLyAgIC8vICpFWFRFUk5BTFxyXG4gIC8vICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKHRoaXMuY3VyckxldmVsLCBmYWxzZSk7XHJcbiAgLy8gICBpZiAodGhpcy5jdXJyTGV2ZWwgPj0gc3RhcnRHYW1lLkluc3RhbmNlLlRvdGFsTGV2ZWxzKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kZ2FtZSByZWFjaGVkXCIpO1xyXG4gIC8vICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSB0cnVlO1xyXG4gIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgLy8gICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZUVuZFwiKTtcclxuICAvLyAgICAgfSwgMik7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgLy8gICAvLyAgIHRoaXMudG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh0cnVlKTtcclxuICAvLyAgIC8vICAgLy8gdGhpcy5pbnB1dEJsb2NrZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgLy8gICAvLyAgIC8vIHRoaXMuZ2VuZXJhdGVRdWVzdGlvbigpO1xyXG4gIC8vICAgLy8gfSwgMSk7XHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgb25NaXNzKCkge1xyXG4gICAgLy8gdGhpcy5jb21tb25BY3Rpb25zKCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9nZ2xlTGF1bmNoKGZhbHNlKTtcclxuICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2hhbmdlQXJyb3dBbmdsZSk7XHJcbiAgICB9LCAyKTtcclxuICAgIGxldCBudW0gPSB0aGlzLmdlblJhbmRvbU51bWJlcigxLCA3KTtcclxuICAgIC8vIHRoaXMucGxheVNwaW5lQW5pbUFuZElkbGUoXCJuZWdhdGl2ZV9cIiwgbnVtLCBmYWxzZSk7XHJcbiAgICAvLyB0aGlzLnBsYXlBdWRpbyhBdWRpb1R5cGUuTkVHQVRJVkUsIG51bSk7XHJcbiAgICB0aGlzLmFmdGVyUmVhY3Rpb24oKTtcclxuICAgIHRoaXMuY2FsbE5lZ2F0aXZlUmVjdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZUFycm93QW5nbGUoKSB7XHJcbiAgICBpZiAodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5sYXVuY2gpIHtcclxuICAgICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLmFycm93UmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5O1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yXHJcbiAgICAgIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5hdGFuMih2ZWxvY2l0eS55LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnQgdGhlIGFuZ2xlIGZyb20gcmFkaWFucyB0byBkZWdyZWVzXHJcbiAgICAgIGNvbnN0IGFuZ2xlSW5EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcbiAgICAgIC8vIEFwcGx5IHRoZSByb3RhdGlvbiB0byB0aGUgYXJyb3dcclxuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5hbmdsZSA9IGFuZ2xlSW5EZWdyZWVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVG91Y2hTdGFydCgpIHtcclxuICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlR1dG9yaWFsSGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUpIHJldHVybjtcclxuICAgIHRoaXMuc3RvcFR1dG9yaWFsQW5pbSgpO1xyXG4gICAgdGhpcy5wbGF5RGVmQW5pbSgpO1xyXG4gICAgdGhpcy5hcnJvd0hlYWQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIHRoaXMudHdlZW5BbmltYXRpb24oKTtcclxuICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5wdXRCbG9ja2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3VHJhamVjdG9yeSgpO1xyXG4gICAgfSwgMC4wMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Ub3VjaEVuZCgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoR2FtZU1hbmFnZXIucm91Z2hTaGVldE1vZGUpIHJldHVybjtcclxuICAgIHRoaXMuc3RvcEFuaW0oKTtcclxuICAgIHRoaXMuYXJyb3dIZWFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy50b2dnbGVMYXVuY2godHJ1ZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxlZnRoYW5kXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcclxuICAgIHRoaXMubm9kZVxyXG4gICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwicGxheWVyMVwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiY2hfMV9zaG9vdFwiLCBmYWxzZSk7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJjaF8xX3Nob290XCIsIGZhbHNlKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGVmdGhhbmRcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInBsYXllcjFcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubm9kZVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKVxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0SGFuZFwiKVxyXG4gICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcbiAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImlkbGVfMVwiLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXzFcIiwgdHJ1ZSk7XHJcbiAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllclwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jcmVhdGVOZXdBcnJvdygpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUxhdW5jaCh0cnVlKTtcclxuICAgICAgLy8gdGhpcy50b2dnbGVGYWtlQXJyb3dWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgdGhpcy5sYXVuY2hBcnJvdygpO1xyXG4gICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kcmF3VHJhamVjdG9yeSk7XHJcbiAgICAgIHRoaXMudHJhamVjdG9yeU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LCAwLjUpO1xyXG5cclxuICAgIC8vIHRoaXMubGF1bmNoQXJyb3coKTtcclxuICAgIC8vIHRoaXMuc3RvcFR3ZWVuKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlTGF1bmNoKHZhbDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5sYXVuY2ggPSB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheURlZkFuaW0oKSB7XHJcbiAgICB0aGlzLnBsYXllckFuaW0ucGxheSh0aGlzLnVwRG93bkFuaW0ubmFtZSk7XHJcbiAgICAvLyB0aGlzLnR3ZWVuQXJyb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wQW5pbSgpIHtcclxuICAgIHRoaXMucGxheWVyQW5pbS5zdG9wKCk7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJCb3dcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZU5ld0Fycm93KCkge1xyXG4gICAgaWYgKHRoaXMucmVhbEFycm93SW5zdGFuY2UgIT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluc3RhbmNlIG5vdCBlbXB0eSwgZGVzdHJveWluZ1wiKTtcclxuICAgICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICB0aGlzLmlucHV0QmxvY2tlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMucmVhbEFycm93SW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlYWxBcnJvdyk7XHJcbiAgICB0aGlzLnBsYXllck5vZGUuYWRkQ2hpbGQodGhpcy5yZWFsQXJyb3dJbnN0YW5jZSk7XHJcbiAgICB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLnBvc2l0aW9uID0gdGhpcy5mYWtlQXJyb3dOb2RlLnBvc2l0aW9uO1xyXG4gICAgdGhpcy5yZWFsQXJyb3dJbnN0YW5jZS5hbmdsZSA9IHRoaXMuZmFrZUFycm93Tm9kZS5hbmdsZTtcclxuICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkgPSB0aGlzLnJlYWxBcnJvd0luc3RhbmNlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgbGV0IHJlYWxBcnJvd1Nwcml0ZSA9IHRoaXMucmVhbEFycm93SW5zdGFuY2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAvLyByZWFsQXJyb3dTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmFycm93U3ByaXRlRnJhbWVzW3RoaXMuY3VyckxldmVsIC0gMV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRmFrZUFycm93VmlzaWJpbGl0eSh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybjtcclxuICAgIHRoaXMuZmFrZUFycm93Tm9kZS5hY3RpdmUgPSB2YWw7XHJcbiAgfVxyXG5cclxuICAvLyAqSU5GTzogdGhpcyBmdW5jdGlvbiBpcyBjb21wbGV0ZWx5IGhpdCBhbmQgdHJpYWwsIHNvIHZhbHVlcyB3aWxsIGhhdmUgdG8gYmUgY2hhbmdlZCBoZXJlXHJcbiAgLy8gdG8gbWF0Y2ggdGhlIHByb2plY3RpbGUgcGF0aFxyXG4gIHB1YmxpYyBkcmF3VHJhamVjdG9yeSgpIHtcclxuICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy50cmFqZWN0b3J5Tm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG5cclxuICAgIGNvbnN0IGFycm93U3ByaXRlID0gdGhpcy5hcnJvd0hlYWQ7XHJcblxyXG4gICAgLy8gQ2xlYXIgYW55IHByZXZpb3VzIGRyYXdpbmdcclxuICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgLy8gU2V0IHN0cm9rZSBjb2xvciB0byByZWRcclxuICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuUkVEOyAvLyBPcHRpb25hbDogU2V0IGZpbGwgY29sb3IgdG8gcmVkXHJcblxyXG4gICAgLy8gR2V0IHRoZSBhbmdsZSBmcm9tIHRoZSBmYWtlIGFycm93IG5vZGUgKGJlZm9yZSBsYXVuY2gpXHJcbiAgICBsZXQgYW5nbGVJblJhZGlhbnMgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5mYWtlQXJyb3dOb2RlLmFuZ2xlKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgYmFzZWQgb24gdGhlIGFuZ2xlXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gY2NcclxuICAgICAgLnYyKE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSwgTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKVxyXG4gICAgICAubm9ybWFsaXplKCk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCB2ZWxvY2l0eSBiYXNlZCBvbiB0aGUgZGlyZWN0aW9uIGFuZCBwb3dlclxyXG4gICAgbGV0IGluaXRpYWxWZWxvY2l0eSA9IGRpcmVjdGlvbi5tdWwodGhpcy5wb3dlcik7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgZmFrZSBhcnJvdyBub2RlXHJcbiAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLmZha2VBcnJvd05vZGUucG9zaXRpb247XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgZ3Jhdml0eSAoYXMgeW91IGFyZSB1c2luZyBwaHlzaWNzLCBhc3N1bWUgZ3Jhdml0eSBpcyAtMzIwIGJ5IGRlZmF1bHQpXHJcbiAgICBsZXQgZ3Jhdml0eSA9IGNjLnYyKDAsIC0zMjAgKiB0aGlzLnRyYWplY3RvcnlHcmF2KTsgLy8gQWRqdXN0IGdyYXZpdHkgc2NhbGVcclxuXHJcbiAgICAvLyBUaW1lIHN0ZXAgYW5kIHRvdGFsIHRpbWUgZm9yIHNpbXVsYXRpbmcgdGhlIHRyYWplY3RvcnlcclxuICAgIGxldCB0aW1lU3RlcCA9IDAuMDE7XHJcbiAgICBsZXQgc2ltdWxhdGlvblRpbWUgPSAoMiAqIGluaXRpYWxWZWxvY2l0eS55KSAvIC1ncmF2aXR5Lnk7IC8vIFRvdGFsIHRpbWUgb2YgZmxpZ2h0XHJcbiAgICBzaW11bGF0aW9uVGltZSA9IE1hdGgubWF4KHNpbXVsYXRpb25UaW1lLCAyKTsgLy8gRW5zdXJlIHNpbXVsYXRpb24gdGltZSBpcyBhdCBsZWFzdCAyIHNlY29uZHNcclxuXHJcbiAgICBsZXQgbGltaXRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudHJhakxpbWl0LnBvc2l0aW9uKTtcclxuXHJcbiAgICAvLyBTdGFydCBkcmF3aW5nIHRoZSB0cmFqZWN0b3J5XHJcbiAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcblxyXG4gICAgbGV0IGxhc3RQb3NYID0gc3RhcnRQb3MueDtcclxuICAgIGxldCBsYXN0UG9zWSA9IHN0YXJ0UG9zLnk7XHJcblxyXG4gICAgbGV0IGVuZFBvc1ggPSBzdGFydFBvcy54OyAvLyBUbyBzdG9yZSB0aGUgZmluYWwgcG9zaXRpb24gb2YgdGhlIHRyYWplY3RvcnlcclxuICAgIGxldCBlbmRQb3NZID0gc3RhcnRQb3MueTtcclxuXHJcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHNpbXVsYXRpb25UaW1lOyB0ICs9IHRpbWVTdGVwKSB7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgdGltZSB0XHJcbiAgICAgIGxldCBwb3NYID0gc3RhcnRQb3MueCArIGluaXRpYWxWZWxvY2l0eS54ICogdDtcclxuICAgICAgbGV0IHBvc1kgPSBzdGFydFBvcy55ICsgaW5pdGlhbFZlbG9jaXR5LnkgKiB0ICsgMC41ICogZ3Jhdml0eS55ICogdCAqIHQ7XHJcblxyXG4gICAgICAvLyBEcmF3IGEgbGluZSB0byB0aGUgcHJlZGljdGVkIHBvc2l0aW9uXHJcbiAgICAgIGxldCBwb3NFeHAgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudHJhakxpbWl0LnBvc2l0aW9uKTtcclxuICAgICAgaWYgKHBvc1ggPj0gcG9zRXhwLnggLSAxNTApIHtcclxuICAgICAgICBsZXQgb3ZlcnNob290WCA9IHBvc1ggLSAobGltaXRQb3MueCAtIDE1MCk7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRpb25SYXRpbyA9IDEgLSBvdmVyc2hvb3RYIC8gKHBvc1ggLSBsYXN0UG9zWCk7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbFBvc1ggPSBsYXN0UG9zWCArIChwb3NYIC0gbGFzdFBvc1gpICogaW50ZXJwb2xhdGlvblJhdGlvO1xyXG4gICAgICAgIGxldCBmaW5hbFBvc1kgPSBsYXN0UG9zWSArIChwb3NZIC0gbGFzdFBvc1kpICogaW50ZXJwb2xhdGlvblJhdGlvO1xyXG5cclxuICAgICAgICBncmFwaGljcy5saW5lVG8oZmluYWxQb3NYLCBmaW5hbFBvc1kpO1xyXG4gICAgICAgIGVuZFBvc1ggPSBmaW5hbFBvc1g7XHJcbiAgICAgICAgZW5kUG9zWSA9IGZpbmFsUG9zWTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBncmFwaGljcy5saW5lVG8ocG9zWCwgcG9zWSk7XHJcblxyXG4gICAgICBsYXN0UG9zWCA9IHBvc1g7XHJcbiAgICAgIGxhc3RQb3NZID0gcG9zWTtcclxuXHJcbiAgICAgIGVuZFBvc1ggPSBwb3NYO1xyXG4gICAgICBlbmRQb3NZID0gcG9zWTtcclxuICAgIH1cclxuXHJcbiAgICBncmFwaGljcy5zdHJva2UoKTsgLy8gU3Ryb2tlIHRoZSBsaW5lXHJcblxyXG4gICAgLy8gU2V0IHRoZSBhcnJvdydzIHBvc2l0aW9uIHRvIHRoZSBlbmQgb2YgdGhlIHRyYWplY3RvcnlcclxuICAgIGFycm93U3ByaXRlLnNldFBvc2l0aW9uKGVuZFBvc1gsIGVuZFBvc1kpO1xyXG4gICAgbGV0IGFycm93QW5nbGVSYWRpYW5zID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpO1xyXG4gICAgbGV0IGFuZ2xlSW5EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFycm93QW5nbGVSYWRpYW5zKTtcclxuXHJcbiAgICBhcnJvd1Nwcml0ZS5hbmdsZSA9IGFuZ2xlSW5EZWdyZWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxhdW5jaEFycm93KCkge1xyXG4gICAgbGV0IGFuZ2xlSW5SYWRpYW5zID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKHRoaXMucmVhbEFycm93SW5zdGFuY2UuYW5nbGUpO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGNjLnYyKE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSwgTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKTtcclxuXHJcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5hcnJvd1JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAyO1xyXG5cclxuICAgIHRoaXMuYXJyb3dSaWdpZEJvZHkuYXBwbHlMaW5lYXJJbXB1bHNlKFxyXG4gICAgICBkaXJlY3Rpb24ubXVsKHRoaXMucG93ZXIpLFxyXG4gICAgICB0aGlzLmFycm93UmlnaWRCb2R5LmdldFdvcmxkQ2VudGVyKCksXHJcbiAgICAgIHRydWUsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZUFycm93QW5nbGUoKTtcclxuICAgIH0sIDAuMDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXlUdXRvcmlhbEFuaW0oKSB7XHJcbiAgICBsZXQgdHV0b3JpYWxIYW5kU3ByaXRlQ29tcCA9IHRoaXMudHV0b3JpYWxIYW5kLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgY2MudHdlZW4odGhpcy50dXRvcmlhbEhhbmQpXHJcbiAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0dXRvcmlhbEhhbmRTcHJpdGVDb21wLnNwcml0ZUZyYW1lID0gdGhpcy5oYW5kSG9sZEZyYW1lO1xyXG4gICAgICB9KVxyXG4gICAgICAuZGVsYXkoMilcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHR1dG9yaWFsSGFuZFNwcml0ZUNvbXAuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbmRJZGxlRnJhbWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC51bmlvbigpXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKClcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcFR1dG9yaWFsQW5pbSgpIHtcclxuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnR1dG9yaWFsSGFuZCk7XHJcbiAgICB0aGlzLnR1dG9yaWFsSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5QXVkaW8odHlwZTogQXVkaW9UeXBlLCBudW06IG51bWJlcikge1xyXG4gICAgaWYgKG51bSA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgQXVkaW9UeXBlLlBPU0lUSVZFOlxyXG4gICAgICAgIHRoaXMuYXVkaW9TcmMuY2xpcCA9IHRoaXMucG9zaXRpdmVBdWRpb1tudW0gLSAxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBdWRpb1R5cGUuTkVHQVRJVkU6XHJcbiAgICAgICAgdGhpcy5hdWRpb1NyYy5jbGlwID0gdGhpcy5uZWdhdGl2ZUF1ZGlvW251bSAtIDFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXVkaW9TcmMucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG4gICAgaWYgKHRoaXMucXVlc3Rpb25Tb3VuZFswXSkge1xyXG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmxldmVsZW5kKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRpbWVyIC8gdGhpcy5kZWZhdWx0VGltZTtcclxuICAgICAgdGhpcy5ub2RlXHJcbiAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidGltZXJcIilcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lcjFcIilcclxuICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdGhpcy52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuZGVmYXVsdFRpbWUpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAvL3RoaXMubGV2ZWxlbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVkdWNlTGlmZSgpO1xyXG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWR1Y2VMaWZlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJSZWR1Y2VsaWZlICQkJCQkJCQkJCQkJCQkJCQ6IFwiLCB0aGlzLmxpdmVzKTtcclxuICAgIGxldCBjdXJyZW50TGlmZU5vZGU6IGNjLk5vZGU7XHJcbiAgICBjdXJyZW50TGlmZU5vZGUgPSB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwibGl2ZXNcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKHRoaXMubGl2ZXMudG9TdHJpbmcoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRMaWZlTm9kZSA6IFwiLCBjdXJyZW50TGlmZU5vZGUpO1xyXG4gICAgY2MudHdlZW4oY3VycmVudExpZmVOb2RlKVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDE1MCB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDE1MCB9KVxyXG4gICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudExpZmVOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIHRoaXMubGl2ZXMgLT0gMTtcclxuICAgIGlmICh0aGlzLmxpdmVzID09IDApIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0R2FtZSgpIHtcclxuICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgdGhpcy5zZXRRdWVzdGlvblNjcmVlbigpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRUaW1lcigpIHtcclxuICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy50aW1lciAvIHRoaXMuZGVmYXVsdFRpbWU7XHJcbiAgICB0aGlzLm5vZGVcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidGltZXJcIilcclxuICAgICAgLmdldENoaWxkQnlOYW1lKFwidGltZXIxXCIpXHJcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSB0aGlzLnZhbHVlO1xyXG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmNsb2NrdGljayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/MainAssets/Scripts/GameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85e115BnsdHKq6dnerkVV+O', 'GameEnd');
// Games/MainAssets/Scripts/GameEnd.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
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
// import startGame from "../../Framework/Scripts/StartGame";
// import startGame from "../../../Framework/Scripts/StartGame";
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var closeWindow = function () {
    window.open(location.href, "_self", "");
    window.close();
};
var GameEnd = /** @class */ (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.popSound = null;
        _this.star = null;
        _this.yeah = null;
        _this.fantastic = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GameEnd.prototype.start = function () {
        var _this = this;
        this.fantastic = this.node.getChildByName("Fantastic");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        console.log("showedScreen--Congratulations");
        // this.scheduleOnce(() => {
        //   cc.tween(this.node.getChildByName("Fantastic"))
        //     .to(0.5, { scale: 0.8 }, { easing: "sineInOut" })
        //     .start();
        // }, 0.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star;
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.fantastic.getChildByName("Star1"))
                .to(0.5, { scale: 0.6 }, { easing: "quartOut" })
                .start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star;
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.fantastic.getChildByName("Star2"))
                .to(0.5, { scale: 0.5 }, { easing: "quartOut" })
                .start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star;
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.fantastic.getChildByName("Star3"))
                .to(0.5, { scale: 0.5 }, { easing: "quartOut" })
                .start();
        }, 1.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.yeah;
            _this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--" + true);
        }, 2.5);
        // this.scheduleOnce(() => {
        //   let node = this.node.getChildByName("end");
        //   node.active = true;
        // }, 3);
    };
    GameEnd.prototype.EndButton = function () {
        // cc.audioEngine.playEffect(startGame.Instance.play_audio, false);
        closeWindow();
    };
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "star", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "yeah", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXE1haW5Bc3NldHNcXFNjcmlwdHNcXEdhbWVFbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixrRUFBNkQ7QUFFN0QsNkRBQTZEO0FBRTdELGdFQUFnRTtBQUVoRSxrRkFBa0Y7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBTSxXQUFXLEdBQUc7SUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBR0Y7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFpRUM7UUEvRFMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUF1RHBDLENBQUM7SUFyREMsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMO1FBQUEsaUJBMkNDO1FBMUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3Qyw0QkFBNEI7UUFDNUIsb0RBQW9EO1FBQ3BELHdEQUF3RDtR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QjtJQUFELGNBQUM7Q0FqRUQsQUFpRUMsQ0FqRW9DLEVBQUUsQ0FBQyxTQUFTLEdBaUVoRDtrQkFqRW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcblxyXG4vLyBpbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcbi8vIGltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IGNsb3NlV2luZG93ID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5vcGVuKGxvY2F0aW9uLmhyZWYsIFwiX3NlbGZcIiwgXCJcIik7XHJcbiAgd2luZG93LmNsb3NlKCk7XHJcbn07XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgcG9wU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgcHJpdmF0ZSBzdGFyOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gIHByaXZhdGUgeWVhaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBmYW50YXN0aWM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5mYW50YXN0aWMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGYW50YXN0aWNcIik7XHJcbiAgICBzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAwO1xyXG4gICAgY29uc29sZS5sb2coXCJzaG93ZWRTY3JlZW4tLUNvbmdyYXR1bGF0aW9uc1wiKTtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgIC8vICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiRmFudGFzdGljXCIpKVxyXG4gICAgLy8gICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgLy8gICAgIC5zdGFydCgpO1xyXG4gICAgLy8gfSwgMC4zKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXI7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5mYW50YXN0aWMuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyMVwiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjYgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMC44KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXI7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5mYW50YXN0aWMuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyMlwiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS4zKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXI7XHJcbiAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5mYW50YXN0aWMuZ2V0Q2hpbGRCeU5hbWUoXCJTdGFyM1wiKSlcclxuICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IFwicXVhcnRPdXRcIiB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS44KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMueWVhaDtcclxuICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tXCIgKyB0cnVlKTtcclxuICAgIH0sIDIuNSk7XHJcblxyXG4gICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICBsZXQgbm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZFwiKTtcclxuICAgIC8vICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gfSwgMyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgRW5kQnV0dG9uKCkge1xyXG4gICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzdGFydEdhbWUuSW5zdGFuY2UucGxheV9hdWRpbywgZmFsc2UpO1xyXG4gICAgY2xvc2VXaW5kb3coKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/utils/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c71f7kplnNBnaO4VupVqPAF', 'Constants');
// Games/ArcheryGame/utils/Constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLISION_TAGS = exports.GAME_EVENTS = exports.LogTypes = exports.enableDebuggers = exports.enableLogs = void 0;
// *INFO: use this variable to toggle all logs on or off
exports.enableLogs = true;
exports.enableDebuggers = false;
exports.LogTypes = {
    INFO: "INFO",
    ERROR: "ERROR",
    TRACK: "TRACK",
    CREATION: "CREATION",
    DESTRUCTION: "DESTRUCTION",
};
exports.GAME_EVENTS = {
    HIT: "HIT",
    MISS: "MISS",
};
exports.COLLISION_TAGS = {
    TARGET: 10,
    BOUNDS: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFx1dGlsc1xcQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF3RDtBQUMzQyxRQUFBLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsUUFBQSxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBRXhCLFFBQUEsUUFBUSxHQUFHO0lBQ3RCLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsT0FBTztJQUNkLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFdBQVcsRUFBRSxhQUFhO0NBQzNCLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRztJQUN6QixHQUFHLEVBQUUsS0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKklORk86IHVzZSB0aGlzIHZhcmlhYmxlIHRvIHRvZ2dsZSBhbGwgbG9ncyBvbiBvciBvZmZcclxuZXhwb3J0IGNvbnN0IGVuYWJsZUxvZ3MgPSB0cnVlO1xyXG5leHBvcnQgY29uc3QgZW5hYmxlRGVidWdnZXJzID0gZmFsc2U7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nVHlwZXMgPSB7XHJcbiAgSU5GTzogXCJJTkZPXCIsXHJcbiAgRVJST1I6IFwiRVJST1JcIixcclxuICBUUkFDSzogXCJUUkFDS1wiLFxyXG4gIENSRUFUSU9OOiBcIkNSRUFUSU9OXCIsXHJcbiAgREVTVFJVQ1RJT046IFwiREVTVFJVQ1RJT05cIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHQU1FX0VWRU5UUyA9IHtcclxuICBISVQ6IFwiSElUXCIsXHJcbiAgTUlTUzogXCJNSVNTXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MTElTSU9OX1RBR1MgPSB7XHJcbiAgVEFSR0VUOiAxMCxcclxuICBCT1VORFM6IDUsXHJcbn07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

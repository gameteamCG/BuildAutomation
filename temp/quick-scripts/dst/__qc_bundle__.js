
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
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Games/WhatWillHappenNext/Assets/1_PIET/Jockey1');
require('./assets/Games/WhatWillHappenNext/Assets/1_PIET/Script');
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
cc._RF.push(module, '48531ApPP1NI6u5BXtLd2K5', 'empty');
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        cc.director.preloadScene("2");
        cc.director.preloadScene("3");
        cc.director.preloadScene("4");
        cc.director.preloadScene("5");
        cc.director.preloadScene("6");
        cc.director.preloadScene("7");
    };
    NewClass.prototype.start = function () {
        // this.node.getChildByName("title").getComponent(cc.Animation).play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcVGl0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5QkM7UUF0QkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQWtCdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFqQkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLHVFQUF1RTtJQUMzRSxDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlCNUI7SUFBRCxlQUFDO0NBekJELEFBeUJDLENBekJxQyxFQUFFLENBQUMsU0FBUyxHQXlCakQ7a0JBekJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCIxXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjJcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiM1wiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCI0XCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIjVcIik7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiNlwiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCI3XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxQcmVmYWJzXFxQcm9ncmVzc0JhclxcU2NyaXB0c1xcUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBRzdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ0lDO1FBNUhXLGdCQUFVLEdBQVksS0FBSyxDQUFDOztRQTJIcEMsaUJBQWlCO0lBQ3JCLENBQUM7b0JBaElvQixXQUFXO0lBa0I1QixzQkFBVyx1QkFBUTthQUFuQjtZQUNJLE9BQU8sYUFBVyxDQUFDLFFBQVEsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQ0kseUNBQXlDO1FBQ3pDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxZQUFvQjtRQUM3Qix3Q0FBd0M7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksU0FBUyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBLEVBQUU7UUFDakQsSUFBSSxLQUFLLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxD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REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3VEQUNjO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7cURBQ1k7SUFoQmxCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnSS9CO0lBQUQsa0JBQUM7Q0FoSUQsQUFnSUMsQ0FoSXdDLEVBQUUsQ0FBQyxTQUFTLEdBZ0lwRDtrQkFoSW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFByb2dyZXNzQmFyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgcHJpdmF0ZSBpc1ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBzdGFySW1nOiBjYy5TcHJpdGVGcmFtZTtcclxuICAgIEBwcm9wZXJ0eShjYy5UZXh0dXJlMkQpXHJcbiAgICBwcml2YXRlIHRyYWlsc0ltZzogY2MuVGV4dHVyZTJEO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwcml2YXRlIHRyYWlsU291bmRzOiBjYy5BdWRpb0NsaXA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHJpdmF0ZSBwYXJ0aWNsZVNvdW5kczogY2MuQXVkaW9DbGlwO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHByaXZhdGUgc3RhclBvcFNvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvZ3Jlc3NCYXIuaW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBQcm9ncmVzc0Jhci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUHJvZ3Jlc3NGaWxsKF9jdXJyZW50UXVlczogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVTdGFyVHJhaWxzKDEwLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIGxldCBwYXJ0aWNsZXMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZXNcIiArIDEpO1xyXG4gICAgICAgIGxldCBtYXhMZXZlbHMgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7Ly9cclxuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikpLnRvKDAuNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyUG9wU291bmQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgIGlmIChfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzIC8gMiAmJiBfY3VycmVudFF1ZXMgIT0gMCkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzIC8gMiAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMV0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoX2N1cnJlbnRRdWVzID49IG1heExldmVscykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsyXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIC8vIF9udW1iZXIgPSBfbnVtYmVyICogdGhpcy5zaGFwZXMubGVuZ3RoO1xyXG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTdGFyVHJhaWxzKG51bTogbnVtYmVyLCBfbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBybmdfTnVtT2ZQYXJ0aWNsZXMgPSBudW07XHJcbiAgICAgICAgbGV0IF9vZmZzZXQgPSA1MFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm5nX051bU9mUGFydGljbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IE5vZGVQT1MgPSBfbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBhcmVudC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBybmdYID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoX25vZGUueCAtIF9vZmZzZXQsIF9ub2RlLnggKyBfb2Zmc2V0KTtcclxuICAgICAgICAgICAgbGV0IHJuZ1kgPSB0aGlzLmdldFJhbmRvbU51bWJlcihfbm9kZS55IC0gX29mZnNldCwgX25vZGUueSArIF9vZmZzZXQpO1xyXG4gICAgICAgICAgICBsZXQgcGFydGljbGVzID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgdHJhaWwgPSBjYy5pbnN0YW50aWF0ZShuZXcgY2MuTm9kZSk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICB0cmFpbC5wYXJlbnQgPSBwYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy54ID0gcm5nWDtcclxuICAgICAgICAgICAgcGFydGljbGVzLnkgPSBybmdZO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJJbWc7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnBhcnRpY2xlU291bmRzO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMud2lkdGggPSA2MDA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5oZWlnaHQgPSA2MDA7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5hbmdsZSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDM2MCk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy56SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgcGFydGljbGVzLm5hbWUgPSBgcGFydGljbGVzYCArIGk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdHJhaWwuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykucHJldmlldztcclxuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMudHJhaWxzSW1nO1xyXG4gICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRyYWlsLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1MiwgMjQ0LCAwKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjc1LCB7IHdpZHRoOiAzNSwgaGVpZ2h0OiAzNSB9LCB7IGVhc2luZzogYGJhY2tPdXRgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgYW5nbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjI1LCB7IGFuZ2xlOiAxODAgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpLnRvKDAuMjUsIHsgYW5nbGU6IDM2MCB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS50bygwLjI1LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogYGN1YmljSW5PdXRgIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykubWluU2VnID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLnN0cm9rZSA9IDIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYXN0TW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy50cmFpbFNvdW5kcywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy50cmFpbFNvdW5kcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKDAuNzUsIG5ldyBjYy5WZWMyKHBhcnRpY2xlcy54LCBwYXJ0aWNsZXMueSksIC8vc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueCAtIDEwMCwgcGFydGljbGVzLnggKyAxMDApLCB0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueSAtIDUwMCwgcGFydGljbGVzLnkgKyAyMDApKSwgLy9jdXJ2ZSByYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSAtIChfb2Zmc2V0ICogMikgLSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAvIDIgKyAodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggKiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcykpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLmJlemllclRvKDAuNzUsIG5ldyBjYy5WZWMyKHBhcnRpY2xlcy54LCBwYXJ0aWNsZXMueSksIC8vc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuVmVjMih0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueCAtIDEwMCwgcGFydGljbGVzLnggKyAxMDApLCB0aGlzLmdldFJhbmRvbU51bWJlcihwYXJ0aWNsZXMueSAtIDUwMCwgcGFydGljbGVzLnkgKyAyMDApKSwgLy9jdXJ2ZSByYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54IC0gKF9vZmZzZXQgKiAyKSAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSwgdGhpcy5ub2RlLnkpKSAvL2VuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBhbmdsZTogLXBhcnRpY2xlcy5hbmdsZSAvIDIgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luYCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMSAqIChpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
        _this.playBtn_audio = null;
        // currentHealth: number = 10;
        _this.playButton = null;
        _this.loadingBar = null;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.activateHint = false;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.templateType = "";
        _this.optionLayout = "horizontal";
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
            this.optionLayout = jsonData.additionalData.optionLayout;
            this.templateType = jsonData.additionalData.templateType;
            //console.log("optionLayout @@@@@@@@@@@@@@@@ = ", this.optionLayout);
            // Assign question data to the variable
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
            if (this.templateType != "SimpleTap") {
                this.questions.forEach(function (question) {
                    question.questionImageName = question.questionImageName;
                    // question.option1ImageName = question.option1ImageName
                    // question.option2ImageName = question.option2ImageName
                });
            }
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
                _this.gameID = jsonData.additionalData.GameID;
                var levelCount = jsonData.additionalData.totalLevel;
                _this.totalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                _this.optionLayout = jsonData.additionalData.optionLayout;
                _this.templateType = jsonData.additionalData.templateType;
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
                    if (_this.templateType != "SimpleTap") {
                        question.questionImageName = _this.removeExtension(question.questionImageName);
                    }
                    question.commonOptionImageName = _this.removeExtension(question.commonOptionImageName);
                    question.options = question.options.map(function (option) {
                        return _this.removeExtension(option);
                    });
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
        this.NextSceneName = "1";
        globalVariables_1.default.Instance.currentLevel = 1;
        // if (premium != null) {
        //     this.premiumLevel = parseInt(premium);
        // }
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
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("podar").active = true;
            }
            else if (_this.jockeyName == "tlc") {
                cc
                    .find("Canvas")
                    .getChildByName("bg")
                    .getChildByName("tlc").active = true;
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
            if (_this.jockeyName != "bag" &&
                _this.jockeyName != "cryon" &&
                _this.jockeyName != "girl" &&
                _this.jockeyName != "boy") {
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
        var _this = this;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        this.playButton.active = false;
        this.loadingBar.node.active = true;
        cc.director.preloadScene(this.NextSceneName, function (current, total) {
            _this.loadingBar.progress = current / total;
        }, function () {
            // this.exitTransition.play();
            // this.scheduleOnce(() => {
            cc.director.loadScene(_this.NextSceneName);
            // }, this.exitTransition.defaultClip.duration / this.exitTransition.defaultClip.speed);
        });
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
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "playBtn_audio", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "playButton", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], startGame.prototype, "loadingBar", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxTdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMEZBQXFGO0FBZ0MvRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWdoQkM7UUE5Z0JBLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLDRCQUFzQixHQUFZLEtBQUssQ0FBQztRQUV4QyxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQ0FBb0M7UUFFcEMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUc1QixpQkFBVyxHQUFXLENBQUMs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UUFBUSxDQUFDLE1BQU0sQ0FBQztrREFDTztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNZO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDUztJQS9DZCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ2hCN0I7SUFBRCxnQkFBQztDQWhoQkQsQUFnaEJDLENBaGhCc0MsRUFBRSxDQUFDLFNBQVMsR0FnaEJsRDtrQkFoaEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IGdsb2JhbFZhcmlhYmxlcyBmcm9tIFwiLi4vLi4vR2FtZXMvV2hhdFdpbGxIYXBwZW5OZXh0L1NjcmlwdHMvZ2xvYmFsVmFyaWFibGVzXCI7XHJcbmludGVyZmFjZSBBZGRpdGlvbmFsRGF0YSB7XHJcblx0R2FtZUlEOiBzdHJpbmc7XHJcblx0dG90YWxMZXZlbDogc3RyaW5nO1xyXG5cdFRpdGxlSW1hZ2VOYW1lOiBzdHJpbmc7XHJcblx0aW50cm9CZ05hbWU6IHN0cmluZztcclxuXHRiZ21NdXNpY05hbWU6IHN0cmluZztcclxuXHRtYWluQmdOYW1lOiBzdHJpbmc7XHJcblx0Sm9ja2V5TmFtZTogc3RyaW5nO1xyXG5cdG9wdGlvbkxheW91dDogc3RyaW5nO1xyXG5cdHRlbXBsYXRlVHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVlc3Rpb25EYXRhIHtcclxuXHRxdWVzdGlvblRleHQ6IHN0cmluZztcclxuXHRxdWVzdGlvbkltYWdlTmFtZTogc3RyaW5nO1xyXG5cdHF1ZXN0aW9uQXVkaW9OYW1lOiBzdHJpbmc7XHJcblx0c2hvdWxkUGxheVF1ZXN0aW9uQXVkaW86IGJvb2xlYW47XHJcblx0Y29tbW9uT3B0aW9uSW1hZ2VOYW1lOiBzdHJpbmc7XHJcblx0aXNPcHRpb25UZXh0OiBib29sZWFuO1xyXG5cdGlzT3B0aW9uQkc6IGJvb2xlYW47XHJcblx0bnVtYmVyT2ZPcHRpb25zOiBudW1iZXI7XHJcblx0b3B0aW9uczogc3RyaW5nW107IC8vIFRoaXMgd2lsbCBlaXRoZXIgY29udGFpbiB0ZXh0IG9wdGlvbnMgb3IgaW1hZ2UgbmFtZXMgYmFzZWQgb24gaXNPcHRpb25UZXh0IGZsYWdcclxuXHRjb3JyZWN0QXVkaW9zOiBzdHJpbmdbXTtcclxuXHRjb3JyZWN0QW5zd2VyTnVtOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNeUpTT05EYXRhIHtcclxuXHRhZGRpdGlvbmFsRGF0YTogQWRkaXRpb25hbERhdGE7XHJcblx0cXVlc3Rpb25EYXRhOiBRdWVzdGlvbkRhdGFbXTtcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0R2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRCR01fYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblx0QHByb3BlcnR5KE51bWJlcilcclxuXHR2b2x1bWU6IG51bWJlciA9IDAuMTtcclxuXHRAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG5cdE5leHRTY2VuZU5hbWU6IHN0cmluZyA9IFwiMVwiO1xyXG5cdEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG5cdGlzQWdlUGFyYW1ldGVyTmVlZGVkID0gdHJ1ZTtcclxuXHRAcHJvcGVydHkoTnVtYmVyKVxyXG5cdExldmVsQWdlUGFyYW1ldGVyczogbnVtYmVyW10gPSBbMywgNSwgN107XHJcblx0aXNNdXNpY09uOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblx0bGV2ZWxUeXBlOiBzdHJpbmcgPSBcIjFcIjtcclxuXHRjdXJyZW50TGV2ZWw6IHN0cmluZyA9IFwiMVwiO1xyXG5cdGhhc0FjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdGhhc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdG1vYmlsZU51bWJlcjogc3RyaW5nID0gbnVsbDtcclxuXHRAcHJvcGVydHkoQm9vbGVhbilcclxuXHRpc1ByZW1pdW1HYW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdEBwcm9wZXJ0eShCb29sZWFuKVxyXG5cdGlzTW9iaWxlTnVtYmVyUHJpb3JpdHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRAcHJvcGVydHkoTnVtYmVyKVxyXG5cdHByZW1pdW1MZXZlbDogbnVtYmVyID0gMztcclxuXHQvLyBtb2JOdW1BdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0bWFpbkJnOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdGpvY2tleTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRmaXJzdENsaWNrOiBudW1iZXIgPSAxO1xyXG5cdGNsaWNrRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0QHByb3BlcnR5KE51bWJlcilcclxuXHR0b3RhbExldmVsczogbnVtYmVyID0gNztcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwbGF5QnRuX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cdC8vIGN1cnJlbnRIZWFsdGg6IG51bWJlciA9IDEwO1xyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHBsYXlCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcblx0bG9hZGluZ0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cdHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBpc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRhY3RpdmF0ZUhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0aXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRpbnRyb0JHOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cdHByaXZhdGUgZ2FtZUlEOiBzdHJpbmcgPSBcIlwiO1xyXG5cdC8vIHByaXZhdGUgdG90YWxMZXZlbHM6IHN0cmluZyA9IFwiXCI7XHJcblx0cHJpdmF0ZSB0aXRsZUltYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHRqb2NrZXlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cdHRlbXBsYXRlVHlwZTogc3RyaW5nID0gXCJcIjtcclxuXHRvcHRpb25MYXlvdXQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbFwiO1xyXG5cdHF1ZXN0aW9uczogUXVlc3Rpb25EYXRhW10gPSBbXTtcclxuXHJcblx0c3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuXHRcdHJldHVybiBzdGFydEdhbWUuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Y2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuXHRcdHN0YXJ0R2FtZS5pbnN0YW5jZSA9IHRoaXM7XHJcblx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmctLTEwMFwiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwibG9hZGVyQ29tcGxldGUtLXRydWVcIik7XHJcblx0XHRjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tVGl0bGVcIik7XHJcblx0XHR0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0XHRpZiAoZWxlbWVudC5uYW1lID09IFwiam9ja2V5XCIpIHtcclxuXHRcdFx0XHR0aGlzLkpvY2tleU5vZGUgPSBlbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIGNvbnN0IHN0b3JlZEpTT05EYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lRGF0YScpO1xyXG5cclxuXHRcdC8vIGlmIChzdG9yZWRKU09ORGF0YSkge1xyXG5cdFx0Ly8gICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShzdG9yZWRKU09ORGF0YSk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRsb2dEYXRhKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJHYW1lIElEOlwiLCB0aGlzLmdhbWVJRCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIlRvdGFsIExldmVsczpcIiwgdGhpcy50b3RhbExldmVscyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkJHTSBhdWRpbyBuYW1lOlwiLCB0aGlzLkJHTV9hdWRpby5uYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiVGl0bGUgSW1hZ2UgTmFtZTpcIiwgdGhpcy50aXRsZUltYWdlTmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkpvY2tleSBOYW1lOlwiLCB0aGlzLmpvY2tleU5hbWUpO1xyXG5cclxuXHRcdC8vIExvZyBxdWVzdGlvbiBkYXRhXHJcblx0XHR0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coYFF1ZXN0aW9uICR7aW5kZXggKyAxfTpgKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJRdWVzdGlvbiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gQXVkaW8gTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAxIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAyIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkNvcnJlY3QgQW5zd2VyIE51bWJlcjpcIiwgcXVlc3Rpb24uY29ycmVjdEFuc3dlck51bSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVtb3ZlRXh0ZW5zaW9uKGltYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxyXG5cdFx0cmV0dXJuIGltYWdlTmFtZS5yZXBsYWNlKC9cXC5wbmckL2csIFwiXCIpO1xyXG5cdH1cclxuXHRyZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHQvLyBSZW1vdmUgLnBuZyBleHRlbnNpb25cclxuXHRcdHJldHVybiBhdWRpb05hbWUucmVwbGFjZSgvXFwubXAzJC9nLCBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUpTT05kYXRhKCkge1xyXG5cdFx0aWYgKHRoaXMuaXNEZW1vR2FtZSkge1xyXG5cdFx0XHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuXHRcdFx0Ly8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxyXG5cdFx0XHRjb25zdCBlbmNvZGVkSnNvbiA9IHVybFBhcmFtcy5nZXQoXCJqc29uXCIpO1xyXG5cclxuXHRcdFx0Ly8gRGVjb2RlIHRoZSBVUkwtZW5jb2RlZCBKU09OIGRhdGFcclxuXHRcdFx0Y29uc3QgZGVjb2RlZEpzb25TdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZEpzb24pO1xyXG5cclxuXHRcdFx0Ly8gUGFyc2UgdGhlIEpTT04gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdFxyXG5cdFx0XHRjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZGVjb2RlZEpzb25TdHJpbmcpO1xyXG5cdFx0XHQvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xyXG5cdFx0XHR0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcclxuXHRcdFx0bGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG5cdFx0XHR0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XHJcblx0XHRcdHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcclxuXHRcdFx0dGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHRcdFx0dGhpcy5vcHRpb25MYXlvdXQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5vcHRpb25MYXlvdXQ7XHJcblx0XHRcdHRoaXMudGVtcGxhdGVUeXBlID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEudGVtcGxhdGVUeXBlO1xyXG5cclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIm9wdGlvbkxheW91dCBAQEBAQEBAQEBAQEBAQEBAID0gXCIsIHRoaXMub3B0aW9uTGF5b3V0KTtcclxuXHJcblx0XHRcdC8vIEFzc2lnbiBxdWVzdGlvbiBkYXRhIHRvIHRoZSB2YXJpYWJsZVxyXG5cdFx0XHR0aGlzLnF1ZXN0aW9ucyA9IGpzb25EYXRhLnF1ZXN0aW9uRGF0YTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFwiQkdNIG11c2ljIG5hbWUgPSBcIixcclxuXHRcdFx0XHRqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWVcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGNjLmxvYWRlci5sb2FkKHRoaXMudGl0bGVJbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdGNjXHJcblx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSxcclxuXHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuQkdNX2F1ZGlvID0gYXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0bGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0anNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW50cm9CZ05hbWUsXHJcblx0XHRcdFx0KGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHR0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHRcdGNjLmxvYWRlci5sb2FkKFxyXG5cdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUsXHJcblx0XHRcdFx0KGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdFx0dGhpcy5tYWluQmcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy50ZW1wbGF0ZVR5cGUgIT0gXCJTaW1wbGVUYXBcIikge1xyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSA9IHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lO1xyXG5cdFx0XHRcdFx0Ly8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWVcclxuXHRcdFx0XHRcdC8vIHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWUgPSBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuXHRcdFx0Ly8gdGhpcy5sb2dEYXRhKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjYy5sb2FkZXIubG9hZFJlcyhcImdhbWVfZGF0YVwiLCBjYy5Kc29uQXNzZXQsIChlcnIsIGpzb25Bc3NldCkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zdCBqc29uRGF0YTogTXlKU09ORGF0YSA9IGpzb25Bc3NldC5qc29uIGFzIE15SlNPTkRhdGE7XHJcblxyXG5cdFx0XHRcdC8vIEFzc2lnbiBhZGRpdGlvbmFsIGRhdGEgdG8gdmFyaWFibGVzXHJcblx0XHRcdFx0dGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XHJcblx0XHRcdFx0bGV0IGxldmVsQ291bnQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS50b3RhbExldmVsO1xyXG5cdFx0XHRcdHRoaXMudG90YWxMZXZlbHMgPSBwYXJzZUludChsZXZlbENvdW50KTtcclxuXHRcdFx0XHR0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XHJcblx0XHRcdFx0dGhpcy5qb2NrZXlOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuSm9ja2V5TmFtZTtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbkxheW91dCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm9wdGlvbkxheW91dDtcclxuXHRcdFx0XHR0aGlzLnRlbXBsYXRlVHlwZSA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRlbXBsYXRlVHlwZTtcclxuXHJcblx0XHRcdFx0Ly8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXHJcblx0XHRcdFx0dGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XHJcblx0XHRcdFx0Ly8gdGhpcy50aXRsZUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHRoaXMudGl0bGVJbWFnZU5hbWUpO1xyXG5cdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFeHRlbnNpb24oXHJcblx0XHRcdFx0XHRcdGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0KHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNjXHJcblx0XHRcdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLmxvYWRTcHJpdGVGcmFtZShcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmludHJvQmdOYW1lKSxcclxuXHRcdFx0XHRcdChzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbnRyb0JHID0gc3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLmxvYWRBdWRpb0NsaXAoXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKFxyXG5cdFx0XHRcdFx0XHRqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWVcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQoQXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuQkdNX2F1ZGlvID0gQXVkaW9DbGlwO1xyXG5cdFx0XHRcdFx0XHRsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSksXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYWluQmcgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy50ZW1wbGF0ZVR5cGUgIT0gXCJTaW1wbGVUYXBcIikge1xyXG5cdFx0XHRcdFx0XHRxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKFxyXG5cdFx0XHRcdFx0XHRcdHF1ZXN0aW9uLnF1ZXN0aW9uSW1hZ2VOYW1lXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRxdWVzdGlvbi5jb21tb25PcHRpb25JbWFnZU5hbWUgPSB0aGlzLnJlbW92ZUV4dGVuc2lvbihcclxuXHRcdFx0XHRcdFx0cXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0cXVlc3Rpb24ub3B0aW9ucyA9IHF1ZXN0aW9uLm9wdGlvbnMubWFwKChvcHRpb24pID0+XHJcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlRXh0ZW5zaW9uKG9wdGlvbilcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHQvLyBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSk7XHJcblx0XHRcdFx0XHQvLyBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcclxuXHRcdFx0XHQvLyB0aGlzLmxvZ0RhdGEoKTsgLy8gWW91IGNhbiBjYWxsIGEgZnVuY3Rpb24gdG8gbG9nIHRoZSBkYXRhIG9yIHVzZSBpdCBpbiBvdGhlciBmdW5jdGlvbnNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0XHR2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcclxuXHRcdHZhciBpc0F1ZGlvID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzb3VuZFNldHRpbmdcIik7XHJcblx0XHR2YXIgYWdlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhZ2VcIik7XHJcblx0XHR2YXIgYWNjZXNzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJhY2Nlc3NcIik7XHJcblx0XHR2YXIgbW9iaWxlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJtb2JpbGVcIik7XHJcblx0XHR2YXIgbGV2ZWwgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxldmVsXCIpO1xyXG5cdFx0dmFyIHByZW1pdW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInByZW1pdW1cIik7XHJcblx0XHR2YXIgZGVtbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaXNkZW1vXCIpO1xyXG5cdFx0aWYgKGRlbW8gPT0gXCJ0cnVlXCIpIHtcclxuXHRcdFx0dGhpcy5pc0RlbW9HYW1lID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJdCBpcyBhIGRlbW8gZ2FtZVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnVwZGF0ZUpTT05kYXRhKCk7XHJcblx0XHR0aGlzLk5leHRTY2VuZU5hbWUgPSBcIjFcIjtcclxuXHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG5cdFx0Ly8gaWYgKHByZW1pdW0gIT0gbnVsbCkge1xyXG5cdFx0Ly8gICAgIHRoaXMucHJlbWl1bUxldmVsID0gcGFyc2VJbnQocHJlbWl1bSk7XHJcblx0XHQvLyB9XHJcblx0XHQvLyBpZiAobGV2ZWwgIT0gbnVsbCkge1xyXG5cdFx0Ly8gICAgIHRoaXMuTmV4dFNjZW5lTmFtZSA9IGxldmVsO1xyXG5cdFx0Ly8gICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSBwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpO1xyXG5cdFx0Ly8gICAgIGlmIChwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpID49IDcpIHtcclxuXHRcdC8vICAgICAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gXCI3XCI7XHJcblx0XHQvLyAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSA3O1xyXG5cdFx0Ly8gICAgIH1cclxuXHRcdC8vIH1cclxuXHJcblx0XHRpZiAobW9iaWxlID09IFwiMVwiKSB7XHJcblx0XHRcdHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAoYWNjZXNzID09IFwiMVwiKSB7XHJcblx0XHRcdHRoaXMuaGFzQWNjZXNzID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaGFzQWNjZXNzID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlzUHJlbWl1bUdhbWUpIHtcclxuXHRcdFx0dGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuXHRcdGlmIChpc0F1ZGlvID09IFwiZmFsc2VcIikge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IHRydWU7XHJcblx0XHRcdGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhZ2VWYWx1ZTogbnVtYmVyID0gcGFyc2VJbnQoYWdlKTtcclxuXHJcblx0XHRpZiAodGhpcy5pc0FnZVBhcmFtZXRlck5lZWRlZCkge1xyXG5cdFx0XHRpZiAoYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0pIHtcclxuXHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiMVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdICYmXHJcblx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5sZXZlbFR5cGUgPSBcIjJcIjtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0YWdlVmFsdWUgPiB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1sxXSAmJlxyXG5cdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1syXVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0gJiZcclxuXHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1szXVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxldmVsVHlwZSA9IFwiNFwiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdICYmXHJcblx0XHRcdFx0XHRcdFx0XHRhZ2VWYWx1ZSA8PSB0aGlzLkxldmVsQWdlUGFyYW1ldGVyc1s0XVxyXG5cdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5sZXZlbFR5cGUgPSBcIjVcIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCIxXCIpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJqb2NrZXkgbmFtZSA9IFwiLCB0aGlzLmpvY2tleU5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0XHRjY1xyXG5cdFx0XHRcdFx0LmZpbmQoXCJDYW52YXNcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RhclwiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcblx0XHRcdFx0Y2NcclxuXHRcdFx0XHRcdC5maW5kKFwiQ2FudmFzXCIpXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGxjXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHRcdGNjXHJcblx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN1cGVyY3ViXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdGNjXHJcblx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInN0YWxsaW9uXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgdGhpcy5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xyXG5cdFx0XHRcdGNjXHJcblx0XHRcdFx0XHQuZmluZChcIkNhbnZhc1wiKVxyXG5cdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImphaXB1cmlhXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgIT0gXCJiYWdcIiAmJlxyXG5cdFx0XHRcdHRoaXMuam9ja2V5TmFtZSAhPSBcImNyeW9uXCIgJiZcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgIT0gXCJnaXJsXCIgJiZcclxuXHRcdFx0XHR0aGlzLmpvY2tleU5hbWUgIT0gXCJib3lcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIxXCIpO1xyXG5cdFx0XHRcdH0sIDIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAxKTtcclxuXHJcblx0XHQvLyB0aGlzLk9uVGltZXIoKTtcclxuXHR9XHJcblxyXG5cdE9uTXVzaWMoZXZlbnQ6IGNjLkV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZUluSGllcmFyY2h5KSB7XHJcblx0XHRcdHRoaXMuaXNNdXNpY09uID0gdHJ1ZTtcclxuXHRcdFx0ZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xyXG5cdFx0XHRldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdE9uUGxheUJ0bihfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheUJ0bl9hdWRpbywgZmFsc2UpO1xyXG5cdFx0dGhpcy5wbGF5QnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sb2FkaW5nQmFyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcclxuXHRcdFx0dGhpcy5OZXh0U2NlbmVOYW1lLFxyXG5cdFx0XHQoY3VycmVudCwgdG90YWwpID0+IHtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBjdXJyZW50IC8gdG90YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHQvLyB0aGlzLmV4aXRUcmFuc2l0aW9uLnBsYXkoKTtcclxuXHRcdFx0XHQvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcblx0XHRcdFx0Ly8gfSwgdGhpcy5leGl0VHJhbnNpdGlvbi5kZWZhdWx0Q2xpcC5kdXJhdGlvbiAvIHRoaXMuZXhpdFRyYW5zaXRpb24uZGVmYXVsdENsaXAuc3BlZWQpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0T25CYWNrKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIE9uVGltZXIoKSB7XHJcblx0Ly8gICAgIGxldCBkZWxheSA9IDE7XHJcblx0Ly8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTk5OTsgaSsrKSB7XHJcblx0Ly8gICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0Ly8gICAgICAgICAgICAgaWYgKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSAhPSBcImdhbWVFbmRcIikge1xyXG5cdC8vICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyKys7XHJcblx0Ly8gICAgICAgICAgICAgfVxyXG5cdC8vICAgICAgICAgfSwgZGVsYXkpO1xyXG5cdC8vICAgICAgICAgZGVsYXkgKz0gMTtcclxuXHQvLyAgICAgfVxyXG5cclxuXHQvLyB9XHJcblxyXG5cdGxvYWRTcHJpdGVGcmFtZShcclxuXHRcdGltYWdlTmFtZTogc3RyaW5nLFxyXG5cdFx0Y2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWRcclxuXHQpIHtcclxuXHRcdGNjLmxvYWRlci5sb2FkUmVzKFxyXG5cdFx0XHRcImltYWdlcy9cIiArIGltYWdlTmFtZSxcclxuXHRcdFx0Y2MuU3ByaXRlRnJhbWUsXHJcblx0XHRcdChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHRsb2FkQXVkaW9DbGlwKFxyXG5cdFx0YXVkaW9OYW1lOiBzdHJpbmcsXHJcblx0XHRjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5BdWRpb0NsaXApID0+IHZvaWRcclxuXHQpIHtcclxuXHRcdGNjLmxvYWRlci5sb2FkUmVzKFxyXG5cdFx0XHRcImF1ZGlvcy9cIiArIGF1ZGlvTmFtZSxcclxuXHRcdFx0Y2MuQXVkaW9DbGlwLFxyXG5cdFx0XHQoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhbGxiYWNrKHNwcml0ZUZyYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIGJsb2JUb0RhdGFVUkwoYmxvYlVybCwgY2FsbGJhY2spIHtcclxuXHQvLyAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdC8vICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdC8vICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblx0Ly8gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG5cdC8vICAgICAgICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpO1xyXG5cdC8vICAgICAgICAgfTtcclxuXHQvLyAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XHJcblx0Ly8gICAgIH07XHJcblx0Ly8gICAgIHhoci5vcGVuKCdHRVQnLCBibG9iVXJsKTtcclxuXHQvLyAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuXHQvLyAgICAgeGhyLnNlbmQoKTtcclxuXHQvLyB9XHJcblxyXG5cdC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRnJhbWV3b3JrXFxTY3JpcHRzXFxDdXN0b21XaWRnZXQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQXJENkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFrRHBELENBQUM7SUFoREcsc0JBQVksaUNBQU87YUFBbkI7WUFDSSxPQUFPLENBQUMsZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxrQ0FBUTthQUFwQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxnQ0FBTTthQUFsQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxtQ0FBUzthQUFyQjtZQUNJLE9BQU8sQ0FBQyxlQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFdBQStCLEVBQUUsWUFBZ0MsRUFBRSxVQUE4QixFQUFFLGFBQWlDO1FBQXBJLDRCQUFBLEVBQUEsdUJBQStCO1FBQUUsNkJBQUEsRUFBQSx3QkFBZ0M7UUFBRSwyQkFBQSxFQUFBLHNCQUE4QjtRQUFFLDhCQUFBLEVBQUEseUJBQWlDO1FBQ3ZJLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTVCLElBQUksU0FBUyxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsSUFBSSxNQUFNLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxPQUFPLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5FLElBQUksV0FBVyxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksU0FBUyxFQUFFO1lBQzlDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUNoRCxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEY7UUFDRCxJQUFJLGFBQWEsSUFBSSxDQUFDLElBQUksYUFBYSxJQUFJLFNBQVMsRUFBRTtZQUNsRCxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsSUFBSSxVQUFVLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUU7WUFDNUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3JGO2FBQ0ksSUFBSSxXQUFXLElBQUksQ0FBQyxJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksYUFBYSxJQUFJLENBQUMsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3JGLFNBQVMsR0FBRyxZQUFZLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBcERpQjtRQUFqQixRQUFRLENBQUMsTUFBTSxDQUFDO29EQUFnQztJQUMvQjtRQUFqQixRQUFRLENBQUMsTUFBTSxDQUFDO3FEQUFpQztJQUNoQztRQUFqQixRQUFRLENBQUMsTUFBTSxDQUFDO3NEQUFrQztJQUNqQztRQUFqQixRQUFRLENBQUMsTUFBTSxDQUFDO21EQUErQjtJQUwvQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdURoQztJQUFELG1CQUFDO0NBdkRELEFBdURDLENBdkR5QyxFQUFFLENBQUMsU0FBUyxHQXVEckQ7a0JBdkRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tV2lkZ2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIGxlZnRPZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIHJpZ2h0T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KE51bWJlcikgcHJpdmF0ZSBib3R0b21PZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIHRvcE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGdldCBsZWZ0RW5kKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC1VdGlscy5zY3JlZW5XaWR0aCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgcmlnaHRFbmQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuc2NyZWVuV2lkdGggLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHRvcEVuZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5zY3JlZW5IZWlnaHQgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGJvdHRvbUVuZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtVXRpbHMuc2NyZWVuSGVpZ2h0IC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5VcGRhdGUodGhpcy5sZWZ0T2Zmc2V0LCB0aGlzLnJpZ2h0T2Zmc2V0LCB0aGlzLnRvcE9mZnNldCwgdGhpcy5ib3R0b21PZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZShfbGVmdE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfcmlnaHRPZmZzZXQ6IG51bWJlciA9IHVuZGVmaW5lZCwgX3RvcE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfYm90dG9tT2Zmc2V0OiBudW1iZXIgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgaW5pdFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICBsZXQgX3Bvc2l0aW9uOiBjYy5WZWMyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IF9zY2FsZTogY2MuVmVjMiA9IHRoaXMubm9kZS5nZXRTY2FsZShjYy52MigpKTtcclxuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IF9oZWlnaHQ6IG51bWJlciA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IF9hbmNob3I6IGNjLlZlYzIgPSBjYy52Mih0aGlzLm5vZGUuYW5jaG9yWCwgdGhpcy5ub2RlLmFuY2hvclkpO1xyXG5cclxuICAgICAgICBpZiAoX2xlZnRPZmZzZXQgIT0gMCAmJiBfbGVmdE9mZnNldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLmxlZnRFbmQgKyB0aGlzLmxlZnRPZmZzZXQgKyBfd2lkdGggKiBfYW5jaG9yLnggKiBfc2NhbGUueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9yaWdodE9mZnNldCAhPSAwICYmIF9yaWdodE9mZnNldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLnJpZ2h0RW5kIC0gdGhpcy5yaWdodE9mZnNldCAtIF93aWR0aCAqICgxIC0gX2FuY2hvci54KSAqIF9zY2FsZS54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2JvdHRvbU9mZnNldCAhPSAwICYmIF9ib3R0b21PZmZzZXQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF9wb3NpdGlvbi55ID0gdGhpcy5ib3R0b21FbmQgKyB0aGlzLmJvdHRvbU9mZnNldCArIF9oZWlnaHQgKiBfYW5jaG9yLnkgKiBfc2NhbGUueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF90b3BPZmZzZXQgIT0gMCAmJiBfdG9wT2Zmc2V0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfcG9zaXRpb24ueSA9IHRoaXMudG9wRW5kIC0gdGhpcy50b3BPZmZzZXQgLSBfaGVpZ2h0ICogKDEgLSBfYW5jaG9yLnkpICogX3NjYWxlLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9sZWZ0T2Zmc2V0ID09IDAgJiYgX3JpZ2h0T2Zmc2V0ID09IDAgJiYgX2JvdHRvbU9mZnNldCA9PSAwICYmIF90b3BPZmZzZXQgPT0gMCkge1xyXG4gICAgICAgICAgICBfcG9zaXRpb24gPSBpbml0UG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oX3Bvc2l0aW9uKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
            this.node
                .getChildByName("awesome")
                .getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("awesome")
                .getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node
                .getChildByName("awesome")
                .getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "cryon" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny" ||
            StartGame_1.default.Instance.jockeyName == "boy" ||
            StartGame_1.default.Instance.jockeyName == "girl") {
            // this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
            this.scheduleOnce(function () {
                _this.node.getChildByName("end").active = true;
            }, 2);
        }
        // this.node.getComponent(cc.Sprite).spriteFrame =
        // 	startGame.Instance.introBG;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        this.scheduleOnce(function () {
            _this.node
                .getChildByName("awesome")
                .getComponent(cc.Animation)
                .play();
        }, 0.3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZW5kU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUd2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlHQztRQS9GUSxVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztRQWtGM0MsaUJBQWlCO0lBQ2xCLENBQUM7SUFqRkEsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFBQSxpQkErQkM7UUE5QkEsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJO2lCQUNQLGNBQWMsQ0FBQyxTQUFTLENBQUM7aUJBQ3pCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEQ7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUk7aUJBQ1AsY0FBYyxDQUFDLFNBQVMsQ0FBQztpQkFDekIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwRDthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUN2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V0FBVyxDQUFDOzhDQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ2tCO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NENBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDa0I7SUFkdkIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlHNUI7SUFBRCxlQUFDO0NBakdELEFBaUdDLENBakdxQyxFQUFFLENBQUMsU0FBUyxHQWlHakQ7a0JBakdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvY2tleSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL0pvY2tleXMvU2NyaXB0cy9Kb2NrZXlcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XHJcbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdGFyOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgeWVhaDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG5cdHByaXZhdGUgcG9kYXJFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcblx0cHJpdmF0ZSBqYWlwdXJpYUVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuXHRwcml2YXRlIHRsY0VuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuXHRwcml2YXRlIHN1cGVyY3ViRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG5cdC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvZGFyRW5kO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnRsY0VuZDtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN1cGVyY3ViRW5kO1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJveVwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiZ2lybFwiXHJcblx0XHQpIHtcclxuXHRcdFx0Ly8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXdlc29tZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuamFpcHVyaWFFbmQ7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmRcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fSwgMik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdC8vIFx0c3RhcnRHYW1lLkluc3RhbmNlLmludHJvQkc7XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1Db25ncmF0dWxhdGlvbnNcIik7XHJcblx0XHRzdGFydEdhbWUuSW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLm9wYWNpdHkgPSAwO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0LnBsYXkoKTtcclxuXHRcdH0sIDAuMyk7XHJcblxyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyWzBdO1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXIxXCIpKVxyXG5cdFx0XHRcdC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0fSwgMC44KTtcclxuXHJcblx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJbMF07XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcclxuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcjJcIikpXHJcblx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHR9LCAxLjMpO1xyXG5cclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xyXG5cdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyM1wiKSlcclxuXHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAwLjkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdH0sIDEuOCk7XHJcblxyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy55ZWFoWzBdO1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZ2FtZUVuZGVkLS10cnVlXCIpO1xyXG5cdFx0fSwgMi4zKTtcclxuXHR9XHJcblxyXG5cdE9uRW5kQnRuKF9ldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdHdpbmRvdy5jbG9zZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HorizntalOptionNode = null;
        _this.VerticalOptionNode = null;
        _this.extraImg = null;
        _this.popSound = [];
        _this.popSound2 = [];
        _this.questionSound = [];
        _this.positiveSound = [];
        _this.negativeSound = [];
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
        _this.tlc_birdFlying = null;
        _this.supercub_Pos1 = null;
        _this.supercub_Pos2 = null;
        _this.supercub_Neg1 = null;
        _this.supercub_Neg2 = null;
        _this.defaultMat = null;
        _this.greyMat = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.isFirstClick = false;
        _this.canTouch = false;
        _this.answerArray = [];
        _this.maxLevel = 7;
        _this.wrongAnswerCount = 0;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.currentJcokey = null;
        _this.correctAudio = [];
        _this.optionsNode = null;
        _this.questionBoxPosY = 0;
        _this.totalAnswers = 0;
        _this.correctAnswerCount = 0;
        _this.isOptionBG = false;
        _this.TotalOptions = 0;
        _this.positionArray = [];
        _this.isDone = [];
        _this.isLastTween = false;
        return _this;
    }
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
            StartGame_1.default.Instance.jockeyName == "cryon" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
            this.node
                .getChildByName("template")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
            this.node
                .getChildByName("questionPanel")
                .getChildByName("text")
                .getComponent(cc.Label).font = this.jaipuria_font;
        }
        this.TotalOptions =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions;
        //if (startGame.Instance.optionLayout == "horizontal") {
        //let optionsLayoutNode = cc.instantiate(this.HorizntalOptionNode);
        // optionsLayoutNode.setParent(this.node);
        // optionsLayoutNode.name = "Option"
        // optionsLayoutNode.setSiblingIndex(5);
        // optionsLayoutNode.setPosition(cc.v2(0, 0));
        //}
        // else if (startGame.Instance.optionLayout == "vertical") {
        //     let optionsLayoutNode = cc.instantiate(this.VerticalOptionNode);
        //     optionsLayoutNode.setParent(this.node);
        //     optionsLayoutNode.name = "Option"
        //     optionsLayoutNode.setSiblingIndex(5);
        // }
        this.optionsNode = this.node.getChildByName("Option");
        //console.log("optionsNode--" + this.optionsNode);
        this.node.getChildByName("QuestionBox").zIndex = 1;
        if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionBG) {
            this.isOptionBG = true;
        }
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        if (globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
            cc.director.preloadScene("endScreen");
        }
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            StartGame_1.default.Instance.mainBg;
        for (var i = 0; i <
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length; i++) {
            this.answerArray[i] =
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum[i];
        }
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.questionSound[0] = audioClip;
            });
            if (StartGame_1.default.Instance.templateType != "SimpleTap") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (err, texture) {
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
            }
            // for (let i = 0; i < this.TotalOptions; i++) {
            //     if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
            //         cc.loader.load(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (err, texture) => {
            //             if (err) {
            //                 console.error("Failed to load image:", err);
            //                 return;
            //             }
            //             const spriteFrame = new cc.SpriteFrame(texture);
            //             this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            //         });
            //     }
            // }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    //this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("bg")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
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
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
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
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[i], function (err, audioClip) {
                    if (err) {
                        console.error("Failed to load audio clip:", err);
                        return;
                    }
                    _this.correctAudio[i] = audioClip;
                });
            };
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_2(i);
            }
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.questionSound[0] = AudioClip;
            });
            if (StartGame_1.default.Instance.templateType != "SimpleTap") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function (spriteFrame) {
                    _this.node
                        .getChildByName("QuestionBox")
                        .getChildByName("ThirdObject")
                        .getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            // for (let i = 0; i < startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].numberOfOptions; i++) {
            //     if (!startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].isOptionText) {
            //         this.loadSpriteFrame(startGame.Instance.questions[globalVariables.Instance.currentLevel - 1].options[i], (spriteFrame) => {
            //             this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            //         });
            //     }
            // }
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    //this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    for (var i = 0; i <
                        StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("bg")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
                    }
                });
            }
            var _loop_3 = function (i) {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        _this.node
                            .getChildByName("Option")
                            .getChildByName((i + 1).toString())
                            .getChildByName("img")
                            .getComponent(cc.Sprite).spriteFrame =
                            spriteFrame;
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
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_3(i);
            }
            var _loop_4 = function (i) {
                this_3.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios[i], function (AudioClip) {
                    _this.correctAudio[i] = AudioClip;
                });
            };
            var this_3 = this;
            for (var i = 0; i <
                StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudios.length; i++) {
                _loop_4(i);
            }
        }
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        // this.currentJcokey.active = true;
    };
    NewClass.prototype.start = function () {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        // this.OptionsLayout();
        //console.log("AnswerArray = ", this.answerArray);
        this.totalAnswers =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum.length;
        this.callQuestionBar();
        if (StartGame_1.default.Instance.templateType == "SimpleTap") {
            this.setOptionsLayout("horizontal");
            this.callOptionIn();
        }
        else if (StartGame_1.default.Instance.templateType == "TapToCollect") {
            this.setOptionsLayout("grid");
            this.callThirdObjectIn();
        }
        else if (StartGame_1.default.Instance.templateType == "ObjectsTweenIn") {
            this.setOptionsLayout("horizontal");
            this.callThirdObjectIn();
        }
        if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
    };
    NewClass.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.GenerateOptions = function () {
        //console.log("Total Options : ", this.TotalOptions)
        for (var i = 0; i < this.TotalOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName("template"));
            option.name = (i + 1).toString();
            option.setParent(this.node.getChildByName("Option"));
            option.setPosition(cc.v2(0, 0));
            option.opacity = 0;
            //console.log("isOptionBG--" + this.isOptionBG);
            if (this.isOptionBG) {
                option.getChildByName("bg").active = true;
            }
            else {
                option.getChildByName("bg").active = false;
            }
            this.isDone[i] = false;
        }
        this.node.getChildByName("template").destroy();
        //console.log("isDone : ", this.isDone);
    };
    NewClass.prototype.callQuestionBar = function () {
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        cc.tween(this.node.getChildByName("questionPanel"))
            .to(1, { y: this.questionBoxPosY }, { easing: "sineInOut" })
            .start();
        this.node
            .getChildByName("questionPanel")
            .getChildByName("text")
            .getComponent(cc.Label).string =
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
    };
    NewClass.prototype.setOptionsLayout = function (type) {
        if (type == "horizontal") {
            this.OptionsLayoutHorizontal();
        }
        else if (type == "vertical") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
        }
        else if (type == "grid") {
            this.arrangeGridChildren();
            //this.reverseOptionsLayout();
        }
    };
    NewClass.prototype.callThirdObjectIn = function () {
        var _this = this;
        //console.log("thirdObjectAppear--" + startGame.Instance.thirdObjectType);
        if (StartGame_1.default.Instance.templateType == "TapToCollect") {
            this.node
                .getChildByName("QuestionBox")
                .setPosition(cc.v2(-300, -200));
            this.node
                .getChildByName("QuestionBox1")
                .setPosition(cc.v2(-300, -200));
            this.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(_this.popSound[0], false);
                    cc.tween(_this.node.getChildByName("QuestionBox"))
                        .to(0.5, { scale: 1 }, { easing: "sineInOut" })
                        .start();
                }, 0.1);
                _this.scheduleOnce(function () {
                    _this.callOptionIn();
                }, 0.5);
            }, 1);
        }
        else if (StartGame_1.default.Instance.templateType == "ObjectsTweenIn") {
            this.optionsNode.y = this.optionsNode.y + 100;
            this.node
                .getChildByName("QuestionBox")
                .setPosition(cc.v2(1500, -250));
            this.node.getChildByName("QuestionBox").scale = 1;
            this.scheduleOnce(function () {
                _this.scheduleOnce(function () {
                    cc.tween(_this.node.getChildByName("QuestionBox"))
                        .to(0.5, { x: 0 }, { easing: "sineInOut" })
                        .start();
                    _this.callOptionOutFromObject();
                }, 1);
            }, 1);
        }
    };
    NewClass.prototype.OnVOButton = function () {
        cc.audioEngine.stopAllEffects();
        if (this.questionSound[0])
            cc.audioEngine.playEffect(this.questionSound[0], false);
    };
    NewClass.prototype.callOptionIn = function () {
        var _this = this;
        var delay = 0.5;
        if (StartGame_1.default.Instance.jockeyName == "supercub" ||
            StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node
                .getChildByName("Option")
                .setPosition(this.node.getChildByName("Option").x - 80, this.node.getChildByName("Option").y);
        }
        var _loop_5 = function (i) {
            this_4.node.getChildByName("Option").children[i - 1].scale = 0;
            this_4.node.getChildByName("Option").children[i - 1].opacity = 255;
            this_4.scheduleOnce(function () {
                var objScale = 0;
                cc.audioEngine.playEffect(_this.popSound[0], false);
                if (StartGame_1.default.Instance.templateType == "SimpleTap") {
                    objScale = 1;
                }
                else if (StartGame_1.default.Instance.templateType == "TapToCollect") {
                    objScale = 0.5;
                }
                else {
                    objScale = 0.7;
                }
                //console.log("isOptionBg");
                if (!_this.isOptionBG) {
                    _this.node
                        .getChildByName("Option")
                        .children.forEach(function (element) {
                        element.getChildByName("img").scale = 1.4;
                    });
                }
                cc.tween(_this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString()))
                    .to(0.5, { scale: objScale }, { easing: "sineInOut" })
                    .start();
                if (i == _this.node.getChildByName("Option").children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_4 = this;
        for (var i = 1; i <= this.optionsNode.children.length; i++) {
            _loop_5(i);
        }
        // this.scheduleOnce(() => {
        //     console.log("ABCD.............", this.node.getChildByName("Option").children[0].scale, this.node.getChildByName("Option").children[0].getChildByName("bg").scale, this.node.getChildByName("Option").children[0].getChildByName("img").scale)
        // }, 3);
    };
    NewClass.prototype.callOptionOutFromObject = function () {
        var _this = this;
        // console.log("callOptionOutFromObject--", this.positionArray);
        // for (let i = 0; i < this.node.getChildByName("Option").children.length; i++) {
        //     console.log("name of: " + i + " th children is: " + this.node.getChildByName("Option").children[i].name);
        // }
        var delay = 0.5;
        var _loop_6 = function (i) {
            // console.log("New i", i, this.positionArray.length);
            this_5.node.getChildByName("Option").children[i - 1].scale = 0;
            this_5.node.getChildByName("Option").children[i - 1].opacity = 255;
            this_5.node
                .getChildByName("Option")
                .children[i - 1].setPosition(0 - 100, this_5.node.getChildByName("QuestionBox").getPosition().y -
                100);
            this_5.scheduleOnce(function () {
                var objScale = 0;
                cc.audioEngine.playEffect(_this.popSound[0], false);
                objScale = 0.7;
                if (!_this.isOptionBG) {
                    _this.node
                        .getChildByName("Option")
                        .children.forEach(function (element) {
                        element.getChildByName("img").scale = 1.4;
                    });
                }
                cc.tween(_this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString()))
                    .to(0.5, { scale: objScale }, { easing: "sineInOut" })
                    .start();
                var pos = _this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString())
                    .getPosition();
                cc.tween(_this.node
                    .getChildByName("Option")
                    .getChildByName(i.toString()))
                    .bezierTo(1, cc.v2(pos.x, pos.y + 200), cc.v2(_this.positionArray[i - 1].x / 1.5, pos.y + 400), cc.v2(_this.positionArray[i - 1].x, _this.positionArray[i - 1].y))
                    .start();
                if (i == _this.node.getChildByName("Option").children.length) {
                    _this.scheduleOnce(function () {
                        _this.PlayQuestionAudio();
                    }, 0.5);
                }
            }, delay);
            delay += 0.5;
        };
        var this_5 = this;
        for (var i = 1; i <= this.node.getChildByName("Option").children.length; i++) {
            _loop_6(i);
        }
    };
    NewClass.prototype.PlayQuestionAudio = function () {
        var _this = this;
        this.canTouch = false;
        //console.log("Jockey coming");
        this.currentJcokey.active = true;
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                cc.audioEngine.playEffect(this.questionSound[0], false);
            }
            this.canTouch = true;
            if (globalVariables_1.default.Instance.currentLevel == 1) {
                //console.log("answerArray : ", this.answerArray[0])
                var hand = this.node.getChildByName("hand");
                hand.setParent(this.node
                    .getChildByName("Option")
                    .getChildByName(this.answerArray[0]));
                hand.setPosition(0, -70);
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
            if (StartGame_1.default.Instance.jockeyName == "tlc") {
                cc.audioEngine.playEffect(this.tlc_birdFlying, false);
            }
            this.currentJcokey
                .getComponent(sp.Skeleton)
                .setAnimation(0, intoAnim, false);
            this.scheduleOnce(function () {
                if (!StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
                    _this.canTouch = true;
                    if (globalVariables_1.default.Instance.currentLevel == 1) {
                        var hand = _this.node.getChildByName("hand");
                        hand.setParent(_this.node
                            .getChildByName("Option")
                            .getChildByName(_this.answerArray[0]));
                        hand.setPosition(0, -70);
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
                            _this.canTouch = true;
                            if (globalVariables_1.default.Instance.currentLevel == 1) {
                                var hand = _this.node.getChildByName("hand");
                                hand.setParent(_this.node
                                    .getChildByName("Option")
                                    .getChildByName(_this.answerArray[0]));
                                hand.setPosition(0, -70);
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
        //console.log("canTouch--" + this.canTouch)
        if (!this.canTouch) {
            return;
        }
        if (this.isDone[parseInt(_event.target.name) - 1]) {
            return;
        }
        if (!this.isFirstClick) {
            this.isFirstClick = true;
            console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        if (globalVariables_1.default.Instance.currentLevel == 1) {
            this.node.getChildByName("hand").active = false;
        }
        var _node = _event.target;
        var iscorrect = false;
        for (var i = 0; i < this.answerArray.length; i++) {
            //console.log("this.answerArray[i]--" + this.answerArray[0], _node.name);
            if (_node.name == this.answerArray[i]) {
                iscorrect = true;
                this.isDone[parseInt(_node.name) - 1] = true;
                //console.log("iscorrect--");
                break;
            }
        }
        if (iscorrect) {
            this.canTouch = false;
            cc.audioEngine.stopAllEffects();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            //this.destroyOption();
            cc.audioEngine.playEffect(this.popSound[0], false);
            this.callPositiveFeedback(_node);
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
            }, this.positiveAudio[0].duration - 0.5);
        }
        else {
            this.scheduleOnce(function () {
                globalVariables_1.default.Instance.currentLevel++;
                // cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
                cc.director.loadScene("1");
            }, this.positiveAudio[0].duration - 0.5);
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
    NewClass.prototype.callPositiveRection = function (_node) {
        var _this = this;
        _node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame =
            this.extraImg;
        //console.log("correctAudio--" + this.correctAudio.name);
        cc.audioEngine.playEffect(this.correctAudio[parseInt(_node.name) - 1], false);
        // cc.tween(_node).to(0.5, { scale: 1.5, x: 0, y: 0 }, { easing: "sineInOut" }).start();
        cc.tween(_node)
            .to(0.5, { width: 400, height: 400 }, { easing: "sineInOut" })
            .start();
        cc.tween(_node.children[0])
            .to(0.5, { width: 320, height: 320 }, { easing: "sineInOut" })
            .start();
        cc.tween(_node.children[0])
            .to(0.5, { scale: 1 }, { easing: "sineInOut" })
            .start();
        cc.tween(_node).to(0.5, { y: 0 }, { easing: "sineInOut" }).start();
        this.scheduleOnce(function () {
            _this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
            _this.node
                .getChildByName("confetti")
                .getComponent(cc.Animation)
                .play();
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
    NewClass.prototype.callPositiveFeedback = function (_node) {
        var _this = this;
        var voIndex = this.answerArray.indexOf(_node.name);
        switch (StartGame_1.default.Instance.templateType) {
            case "SimpleTap":
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                _node.getChildByName("img").color = cc.Color.GRAY;
                _node.getChildByName("tick").active = true;
                this.scheduleOnce(function () {
                    _this.node
                        .getChildByName("confetti")
                        .setPosition(_node.x, _node.y);
                    _this.node
                        .getChildByName("confetti")
                        .getComponent(cc.Animation)
                        .play();
                    cc.audioEngine.playEffect(_this.positiveSound[0], false);
                    _this.scheduleOnce(function () {
                        _this.canTouch = true;
                        _this.correctAnswerCount++;
                        if (_this.correctAnswerCount == _this.totalAnswers) {
                            for (var i = 0; i <
                                _this.node.getChildByName("Option").children
                                    .length; i++) {
                                if (_this.isDone[i] == false) {
                                    _this.node
                                        .getChildByName("Option")
                                        .children[i].destroy();
                                }
                            }
                            _this.scheduleOnce(function () {
                                _this.node
                                    .getChildByName("Option")
                                    .children.forEach(function (elem) {
                                    elem.getChildByName("img").color =
                                        cc.Color.WHITE;
                                });
                                _this.isLastTween = true;
                                _this.OptionsLayoutHorizontal();
                                _this.canTouch = false;
                                ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
                                _this.scheduleOnce(function () {
                                    ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                                    _this.scheduleOnce(function () {
                                        cc.tween(_this.node.getChildByName("questionPanel"))
                                            .to(1, { y: 1500 }, { easing: "sineInOut" })
                                            .start();
                                        _this.node
                                            .getChildByName("questionPanel")
                                            .getChildByName("sound")
                                            .getComponent(cc.Button).interactable = false;
                                        // console.log("correctAnswerCount--" + this.correctAnswerCount, this.totalAnswers);
                                        _this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }, 1);
                        }
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            case "TapToCollect":
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                this.scheduleOnce(function () {
                    _this.node.getChildByName("QuestionBox1").zIndex = 1;
                    _this.node.getChildByName("QuestionBox").zIndex = 1;
                    _this.node
                        .getChildByName("confetti")
                        .setPosition(_node.x, _node.y);
                    _this.node
                        .getChildByName("confetti")
                        .getComponent(cc.Animation)
                        .play();
                    cc.audioEngine.playEffect(_this.positiveSound[0], false);
                    _this.scheduleOnce(function () {
                        var imgScale = _node.getChildByName("img").scale / 2;
                        //console.log("Scale : ", imgScale);
                        var imgName = _node.getChildByName("img").name +
                            _this.correctAnswerCount +
                            1;
                        _node.getChildByName("img").name = imgName;
                        _node
                            .getChildByName(imgName)
                            .setParentWithSamePos(_this.node.getChildByName("QuestionBox1"));
                        var pos = _this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName)
                            .getPosition();
                        var thirdBox = _this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName("ThirdObject");
                        var xRandom = _this.getRandomNumber(-thirdBox.width / 4, thirdBox.width / 4);
                        _this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName).scale = imgScale;
                        //cc.tween(this.node.getChildByName("QuestionBox1").getChildByName(imgName)).bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(pos.x / 4, pos.y), cc.v2(xRandom, thirdBox.height / 2 - 50)).start();
                        //cc.tween(this.node.getChildByName("QuestionBox1").getChildByName(imgName)).delay(0.5).to(0.7, { scale: 0 }, { easing: "sineInOut" }).start();
                        cc.tween(_this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName))
                            .bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(xRandom / 2, pos.y + 200), cc.v2(xRandom, thirdBox.height / 2 - 50))
                            .start();
                        cc.tween(_this.node
                            .getChildByName("QuestionBox1")
                            .getChildByName(imgName))
                            .delay(0.5)
                            .to(0.7, { scale: imgScale * 0.5 }, { easing: "sineInOut" })
                            .start();
                        _this.scheduleOnce(function () {
                            _node.destroy();
                            _this.canTouch = true;
                            _this.correctAnswerCount++;
                            if (_this.correctAnswerCount == _this.totalAnswers) {
                                _this.canTouch = false;
                                ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
                                _this.scheduleOnce(function () {
                                    ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                                    _this.scheduleOnce(function () {
                                        cc.tween(_this.node.getChildByName("questionPanel"))
                                            .to(1, { y: 1500 }, { easing: "sineInOut" })
                                            .start();
                                        _this.node
                                            .getChildByName("questionPanel")
                                            .getChildByName("sound")
                                            .getComponent(cc.Button).interactable = false;
                                        // console.log("correctAnswerCount--" + this.correctAnswerCount, this.totalAnswers);
                                        _this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }
                        }, 0.5);
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            case "ObjectsTweenIn":
                //console.log("answer arrray index : ", this.answerArray.indexOf(_node.name));
                cc.audioEngine.playEffect(this.correctAudio[voIndex], false);
                _node.getChildByName("img").color = cc.Color.GRAY;
                _node.getChildByName("tick").active = true;
                this.scheduleOnce(function () {
                    _this.node
                        .getChildByName("confetti")
                        .setPosition(_node.x, _node.y + 100);
                    _this.node
                        .getChildByName("confetti")
                        .getComponent(cc.Animation)
                        .play();
                    cc.audioEngine.playEffect(_this.positiveSound[0], false);
                    _this.scheduleOnce(function () {
                        //_node.destroy();
                        _this.canTouch = true;
                        _this.correctAnswerCount++;
                        if (_this.correctAnswerCount == _this.totalAnswers) {
                            for (var i = 0; i <
                                _this.node.getChildByName("Option").children
                                    .length; i++) {
                                if (_this.isDone[i] == false) {
                                    _this.node
                                        .getChildByName("Option")
                                        .children[i].destroy();
                                }
                            }
                            _this.canTouch = false;
                            _this.scheduleOnce(function () {
                                _this.node
                                    .getChildByName("Option")
                                    .children.forEach(function (elem) {
                                    elem.getChildByName("img").color =
                                        cc.Color.WHITE;
                                });
                                _this.isLastTween = true;
                                _this.OptionsLayoutHorizontal();
                                ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
                                _this.scheduleOnce(function () {
                                    ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
                                    _this.scheduleOnce(function () {
                                        cc.tween(_this.node.getChildByName("questionPanel"))
                                            .to(1, { y: 1500 }, { easing: "sineInOut" })
                                            .start();
                                        _this.node
                                            .getChildByName("questionPanel")
                                            .getChildByName("sound")
                                            .getComponent(cc.Button).interactable = false;
                                        // console.log("correctAnswerCount--" + this.correctAnswerCount, this.totalAnswers);
                                        _this.callJockey();
                                    }, 1);
                                }, 1.5);
                            }, 1);
                        }
                    }, 0.5);
                }, this.correctAudio[voIndex].duration);
                break;
            default:
                break;
        }
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
        else if (StartGame_1.default.Instance.jockeyName == "bag" ||
            StartGame_1.default.Instance.jockeyName == "penguin" ||
            StartGame_1.default.Instance.jockeyName == "tortoise" ||
            StartGame_1.default.Instance.jockeyName == "muskaan" ||
            StartGame_1.default.Instance.jockeyName == "corny") {
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
        else if (StartGame_1.default.Instance.jockeyName == "boy" ||
            StartGame_1.default.Instance.jockeyName == "girl") {
            anim = [
                "positive_1",
                "positive_2",
                "positive_3",
                "positive_4",
                "positive_5",
            ];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1200, 1200];
        var jockeytween = [-450, 450];
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
        }
        if (StartGame_1.default.Instance.jockeyName != "tlc" &&
            StartGame_1.default.Instance.jockeyName != "supercub") {
            this.currentJcokey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], -350);
            cc.tween(this.currentJcokey)
                .to(0.5, {
                x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2],
            }, { easing: "quartInOut" })
                .start();
            this.scheduleOnce(function () {
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJcokey)
                        .to(0.5, {
                        x: pos[globalVariables_1.default.Instance.currentLevel % 2],
                    }, { easing: "quartInOut" })
                        .start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
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
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
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
                //bird flying out sound
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "intro_out", false);
                cc.audioEngine.playEffect(_this.tlc_birdFlying, false);
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
                        if (anim[currentClipNum] == "positive_1") {
                            cc.audioEngine.playEffect(_this.supercub_Pos1, false);
                        }
                        else if (anim[currentClipNum] == "positive_2") {
                            cc.audioEngine.playEffect(_this.supercub_Pos2, false);
                        }
                        _this.currentJcokey
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, anim[currentClipNum] + "_end", false);
                        _this.scheduleOnce(function () {
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "run", false);
                            cc.tween(_this.currentJcokey)
                                .to(2, { x: -1000 })
                                .start();
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
        this.canTouch = false;
        //_node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
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
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag" ||
                StartGame_1.default.Instance.jockeyName == "penguin" ||
                StartGame_1.default.Instance.jockeyName == "tortoise" ||
                StartGame_1.default.Instance.jockeyName == "muskaan" ||
                StartGame_1.default.Instance.jockeyName == "corny") {
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
            else if (StartGame_1.default.Instance.jockeyName == "boy" ||
                StartGame_1.default.Instance.jockeyName == "girl") {
                anim = [
                    "negative_1",
                    "negative_2",
                    "negative_3",
                    "negative_4",
                    "negative_5",
                ];
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
                _this.currentJcokey
                    .getComponent(sp.Skeleton)
                    .setAnimation(0, "idle", true);
            }
            if (StartGame_1.default.Instance.jockeyName != "tlc" &&
                StartGame_1.default.Instance.jockeyName != "supercub") {
                _this.currentJcokey.setPosition(1200, -350);
                cc.tween(_this.currentJcokey)
                    .to(0.5, { x: 400 }, { easing: "quartInOut" })
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
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, "idle", true);
                        }
                        //console.log("characterDisappear--Podar_Jumbo");
                        _this.canTouch = true;
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
                    _this.canTouch = true;
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
                            if (anim[currentClipNum] == "negative_1") {
                                cc.audioEngine.playEffect(_this.supercub_Neg1, false);
                            }
                            else if (anim[currentClipNum] == "negative_2") {
                                cc.audioEngine.playEffect(_this.supercub_Neg2, false);
                            }
                            _this.currentJcokey
                                .getComponent(sp.Skeleton)
                                .setAnimation(0, anim[currentClipNum] + "_end", false);
                            _this.canTouch = true;
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
                        _this.canTouch = true;
                    }, _this.negativeAudio[currentClipNum].duration);
                }
            }
        }, 0.7);
        if (this.isOptionBG) {
            _node.getChildByName("bg").color = cc.Color.RED;
        }
        else {
            _node.getChildByName("img").color = cc.Color.RED;
        }
        cc.tween(_node)
            .to(0.2, { x: _node.x - 10, opacity: 180 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10, opacity: 50 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x - 10, opacity: 255 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x + 10, opacity: 50 }, { easing: "sineInOut" })
            .to(0.2, { x: _node.x, opacity: 255 }, { easing: "sineInOut" })
            .call(function () {
            _node.children[0]
                .getComponent(cc.Sprite)
                .setMaterial(0, _this.defaultMat);
            _node.getChildByName("img").color = cc.Color.WHITE;
            _node.getChildByName("bg").color = cc.Color.WHITE;
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
    NewClass.prototype.OptionsLayoutHorizontal = function () {
        var optionsLayout = this.optionsNode;
        var optionNodes = optionsLayout.children;
        // console.log("optionNodes--" + optionNodes.length, optionsLayout.width);
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
            if (optionNodes.length == 2 &&
                StartGame_1.default.Instance.templateType == "ObjectsTweenIn" &&
                !this.isLastTween) {
                optionScaleFactor = optionScaleFactor * 0.7;
            }
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posX = accumulatedWidth + option.width * option.anchorX;
            if (!this.isLastTween) {
                option.x = posX - optionsLayout.width * optionsLayout.anchorX;
            }
            else {
                var optionX = posX - optionsLayout.width * optionsLayout.anchorX;
                cc.tween(option)
                    .to(0.5, { x: optionX }, { easing: "sineInOut" })
                    .start();
            }
            accumulatedWidth += option.width + paddingBetweenOptions;
            this.positionArray.push(option.getPosition());
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
                //console.log("subChild--", subChild.name);
            }
        }
        optionsLayout.height = maxHeight * scaleFactor;
        if (optionNodes.length == 2) {
            if (!this.isLastTween) {
                var distanceBetweenOptions = optionNodes[1].x - optionNodes[0].x;
                optionNodes[0].x = 0 - distanceBetweenOptions / 2;
                optionNodes[1].x = 0 + distanceBetweenOptions / 2;
                optionNodes[0].y = optionNodes[0].y - 50;
                optionNodes[1].y = optionNodes[1].y - 50;
                this.positionArray = [];
                this.positionArray.push(optionNodes[0].getPosition());
                this.positionArray.push(optionNodes[1].getPosition());
            }
            else {
                var distanceBetweenOptions = optionNodes[1].x - optionNodes[0].x;
                var optionX0 = 0 - distanceBetweenOptions / 2;
                var optionX1 = 0 + distanceBetweenOptions / 2;
                cc.tween(optionNodes[0])
                    .to(0.5, { x: optionX0 }, { easing: "sineInOut" })
                    .start();
                cc.tween(optionNodes[1])
                    .to(0.5, { x: optionX1 }, { easing: "sineInOut" })
                    .start();
                this.positionArray = [];
                this.positionArray.push(optionNodes[0].getPosition());
                this.positionArray.push(optionNodes[1].getPosition());
            }
        }
        else if (optionNodes.length == 1) {
            if (!this.isLastTween) {
                optionNodes[0].x = 0;
            }
            else {
                cc.tween(optionNodes[0])
                    .to(0.5, { x: 0 }, { easing: "sineInOut" })
                    .start();
            }
        }
        // console.log("positionArray--", this.positionArray);
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
            this.positionArray.push(option.getPosition());
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
    NewClass.prototype.arrangeGridChildren = function () {
        var children = this.optionsNode.children;
        var maxColumns = 2;
        var _optionCount = this.totalAnswers;
        var spacing = -200;
        if (_optionCount == 4) {
            maxColumns = 2;
        }
        var totalRows = Math.ceil(children.length / maxColumns);
        var rowHeight = 0;
        if (children.length > 0) {
            rowHeight = children[0].height + spacing; // Assuming all children have the same height
        }
        var startY = ((totalRows - 1) * rowHeight) / 2;
        for (var i = 0; i < children.length; i++) {
            var column = i % maxColumns;
            var row = Math.floor(i / maxColumns);
            var totalWidth = 0;
            // Calculate the total width of the current row
            for (var j = 0; j < maxColumns && row * maxColumns + j < children.length; j++) {
                totalWidth += children[row * maxColumns + j].width;
            }
            totalWidth +=
                spacing *
                    (Math.min(children.length - row * maxColumns, maxColumns) - 1);
            var startX = -totalWidth / 2;
            var child = children[i];
            child.x =
                200 +
                    startX +
                    column * (child.width + spacing) +
                    child.width / 2;
            child.y = startY - row * rowHeight;
            if (this.TotalOptions == 2) {
                child.y = child.y - 30;
            }
            else {
                child.y = child.y - 70;
            }
        }
    };
    NewClass.prototype.OptionsLayoutGrid = function () {
        //console.log("OptionsLayoutGrid");
        var numCols;
        var numRows;
        if (this.TotalOptions == 2) {
            numCols = 2;
            numRows = 1;
        }
        else if (this.TotalOptions == 3) {
            numCols = 2;
            numRows = 2;
        }
        else if (this.TotalOptions == 4) {
            numCols = 2;
            numRows = 2;
        }
        var paddingBetweenOptions = 120;
        var optionNodes = this.optionsNode;
        var optionWidth = 150; // Width of each option
        var optionHeight = 150; // Height of each option
        var gridWidth = optionWidth * numCols + paddingBetweenOptions * (numCols - 1);
        var gridHeight = optionHeight * numRows + paddingBetweenOptions * (numRows - 1);
        var currentRow = 0;
        var currentCol = 0;
        for (var i = 0; i < optionNodes.children.length; i++) {
            var option = this.optionsNode.children[i];
            //console.log(i, optionNodes.children.length);
            // Calculate position based on grid layout
            var posX = currentCol * (optionWidth + paddingBetweenOptions);
            var posY = currentRow * (optionHeight + paddingBetweenOptions);
            // Update position of the option
            if (this.TotalOptions == 2) {
                option.setPosition(cc.v2(posX + 50, posY));
            }
            else if (this.TotalOptions == 3) {
                option.setPosition(cc.v2(posX + 50, posY - 180));
            }
            else if (this.TotalOptions == 4) {
                option.setPosition(cc.v2(posX + 50, posY - 180));
            }
            this.positionArray.push(option.getPosition());
            currentCol++;
            if (currentCol >= numCols) {
                currentCol = 0;
                currentRow++;
            }
            if (this.TotalOptions == 3 && i == 2) {
                option.setPosition(cc.v2(2 * (posX + 100), posY - 180));
            }
        }
        // Set the size of the options container to fit the grid
        this.optionsNode.width = gridWidth;
        this.optionsNode.height = gridHeight;
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
    NewClass.prototype.update = function () { };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "HorizntalOptionNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "VerticalOptionNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "extraImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "popSound2", void 0);
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
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlc_birdFlying", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Pos1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Pos2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Neg1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercub_Neg2", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "defaultMat", void 0);
    __decorate([
        property(cc.Material)
    ], NewClass.prototype, "greyMat", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcU2NyaXB0c1xcZ2FtZXBsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMEZBQXFGO0FBQ3JGLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtK0RDO1FBaitEQSx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBRzlCLGVBQVMsR0FBbUIsRUFBRSxDQUFDO1FBRy9CLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxzQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBR3RDLGlCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFHakMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLG1CQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUduQyxpQkFBVyxHQUFtQixFQUFFLENBQUM7UUFFakMsaUJBQVcsR0FBbUIsRUFBRSxDQUFDO1FBR2pDLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFFdEMsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQUd0QyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFHcEMsbUJBQWEsR0FBaUIsSUFBSSxD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QUMsU0FBUyxDQUFDO29EQUNxQjtJQUc1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO21EQUNvQjtJQUczQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNTO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkNBQ007SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNvQjtJQXJGbEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW0rRDVCO0lBQUQsZUFBQztDQW4rREQsQUFtK0RDLENBbitEcUMsRUFBRSxDQUFDLFNBQVMsR0FtK0RqRDtrQkFuK0RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvY2tleSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL0pvY2tleXMvU2NyaXB0cy9Kb2NrZXlcIjtcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHRAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG5cdEhvcml6bnRhbE9wdGlvbk5vZGU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcblx0VmVydGljYWxPcHRpb25Ob2RlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcblx0cHJpdmF0ZSBleHRyYUltZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgcG9wU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBwb3BTb3VuZDI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBxdWVzdGlvblNvdW5kOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgcG9zaXRpdmVTb3VuZDogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIG5lZ2F0aXZlU291bmQ6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBwb3NpdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgbmVnYXRpdmVBdWRpbzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHN0YWxsaW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBzdGFsbGlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgYmFnUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBiYWdOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcblx0cHJpdmF0ZSBjcnlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgdGxjUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHRsY05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3VwZXJjdWJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3VwZXJjdWJOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwcml2YXRlIHRsY19iaXJkRmx5aW5nOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3VwZXJjdWJfUG9zMTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3VwZXJjdWJfUG9zMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3VwZXJjdWJfTmVnMTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG5cdHByaXZhdGUgc3VwZXJjdWJfTmVnMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG5cdGRlZmF1bHRNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk1hdGVyaWFsKVxyXG5cdGdyZXlNYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkZvbnQpXHJcblx0cHJpdmF0ZSBwb2Rhcl9mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRwcml2YXRlIGphaXB1cmlhX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuRm9udClcclxuXHRwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cclxuXHRwcml2YXRlIGlzRmlyc3RDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgY2FuVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGFuc3dlckFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByaXZhdGUgbWF4TGV2ZWw6IG51bWJlciA9IDc7XHJcblx0d3JvbmdBbnN3ZXJDb3VudDogbnVtYmVyID0gMDtcclxuXHRzdGFyMUxvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHN0YXIyTG9nOiBib29sZWFuID0gZmFsc2U7XHJcblx0c3RhcjNMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRjdXJyZW50SmNva2V5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0Y29ycmVjdEF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIG9wdGlvbnNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0cHJpdmF0ZSBxdWVzdGlvbkJveFBvc1k6IG51bWJlciA9IDA7XHJcblxyXG5cdHRvdGFsQW5zd2VyczogbnVtYmVyID0gMDtcclxuXHRjb3JyZWN0QW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XHJcblx0aXNPcHRpb25CRzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFRvdGFsT3B0aW9uczogbnVtYmVyID0gMDtcclxuXHRwb3NpdGlvbkFycmF5OiBjYy5WZWMyW10gPSBbXTtcclxuXHRpc0RvbmU6IGJvb2xlYW5bXSA9IFtdO1xyXG5cdGlzTGFzdFR3ZWVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMucG9kYXJfZm9udDtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGVtcGxhdGVcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuc3VwZXJjdWJfZm9udDtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5zdXBlcmN1Yl9mb250O1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIlxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IHRoaXMuamFpcHVyaWFfZm9udDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlRvdGFsT3B0aW9ucyA9XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XS5udW1iZXJPZk9wdGlvbnM7XHJcblxyXG5cdFx0Ly9pZiAoc3RhcnRHYW1lLkluc3RhbmNlLm9wdGlvbkxheW91dCA9PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0Ly9sZXQgb3B0aW9uc0xheW91dE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkhvcml6bnRhbE9wdGlvbk5vZGUpO1xyXG5cdFx0Ly8gb3B0aW9uc0xheW91dE5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcblx0XHQvLyBvcHRpb25zTGF5b3V0Tm9kZS5uYW1lID0gXCJPcHRpb25cIlxyXG5cdFx0Ly8gb3B0aW9uc0xheW91dE5vZGUuc2V0U2libGluZ0luZGV4KDUpO1xyXG5cdFx0Ly8gb3B0aW9uc0xheW91dE5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xyXG5cdFx0Ly99XHJcblx0XHQvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uub3B0aW9uTGF5b3V0ID09IFwidmVydGljYWxcIikge1xyXG5cdFx0Ly8gICAgIGxldCBvcHRpb25zTGF5b3V0Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuVmVydGljYWxPcHRpb25Ob2RlKTtcclxuXHRcdC8vICAgICBvcHRpb25zTGF5b3V0Tm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuXHRcdC8vICAgICBvcHRpb25zTGF5b3V0Tm9kZS5uYW1lID0gXCJPcHRpb25cIlxyXG5cdFx0Ly8gICAgIG9wdGlvbnNMYXlvdXROb2RlLnNldFNpYmxpbmdJbmRleCg1KTtcclxuXHRcdC8vIH1cclxuXHRcdHRoaXMub3B0aW9uc05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIik7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwib3B0aW9uc05vZGUtLVwiICsgdGhpcy5vcHRpb25zTm9kZSk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS56SW5kZXggPSAxO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0uaXNPcHRpb25CR1xyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuaXNPcHRpb25CRyA9IHRydWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLkdlbmVyYXRlT3B0aW9ucygpO1xyXG5cdFx0dGhpcy5tYXhMZXZlbCA9IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscztcclxuXHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuXHRcdFx0Y2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coYGxldmVsU3RhcnRlZC0tYCArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xyXG5cclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLm1haW5CZztcclxuXHJcblx0XHRmb3IgKFxyXG5cdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdGkgPFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0uY29ycmVjdEFuc3dlck51bS5sZW5ndGg7XHJcblx0XHRcdGkrK1xyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuYW5zd2VyQXJyYXlbaV0gPVxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uY29ycmVjdEFuc3dlck51bVtpXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzRGVtb0dhbWUpIHtcclxuXHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuXHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMucXVlc3Rpb25Tb3VuZFswXSA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSAhPSBcIlNpbXBsZVRhcFwiKSB7XHJcblx0XHRcdFx0Y2MubG9hZGVyLmxvYWQoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5xdWVzdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiVGhpcmRPYmplY3RcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Ub3RhbE9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHQvLyAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuXHRcdFx0Ly8gICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgfVxyXG5cdFx0XHQvLyAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0Ly8gICAgICAgICB9KTtcclxuXHRcdFx0Ly8gICAgIH1cclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSxcclxuXHRcdFx0XHRcdChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHRcdFx0XHRcdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0Zm9yIChcclxuXHRcdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0aSA8XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdFx0XS5udW1iZXJPZk9wdGlvbnM7XHJcblx0XHRcdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiYmdcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoXHJcblx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdGkgPFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0ubnVtYmVyT2ZPcHRpb25zO1xyXG5cdFx0XHRcdGkrK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0uaXNPcHRpb25UZXh0XHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIm9wdGlvbiBpbWcgPSBcIiwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXSk7XHJcblx0XHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRdLm9wdGlvbnNbaV0sXHJcblx0XHRcdFx0XHRcdChlcnIsIHRleHR1cmUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0c3ByaXRlRnJhbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwib3B0aW9uIHRleHQgPSBcIiwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXSk7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cclxuXHRcdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XHRdLm9wdGlvbnNbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKFxyXG5cdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRpIDxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRdLmNvcnJlY3RBdWRpb3MubGVuZ3RoO1xyXG5cdFx0XHRcdGkrK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5sb2FkZXIubG9hZChcclxuXHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRdLmNvcnJlY3RBdWRpb3NbaV0sXHJcblx0XHRcdFx0XHQoZXJyLCBhdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvcnJlY3RBdWRpb1tpXSA9IGF1ZGlvQ2xpcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmxvYWRBdWRpb0NsaXAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5xdWVzdGlvbkF1ZGlvTmFtZSxcclxuXHRcdFx0XHQoQXVkaW9DbGlwKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uU291bmRbMF0gPSBBdWRpb0NsaXA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUgIT0gXCJTaW1wbGVUYXBcIikge1xyXG5cdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0ucXVlc3Rpb25JbWFnZU5hbWUsXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE9iamVjdFwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHQvLyAgICAgaWYgKCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5pc09wdGlvblRleHQpIHtcclxuXHRcdFx0Ly8gICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuXHRcdFx0Ly8gICAgICAgICB9KTtcclxuXHRcdFx0Ly8gICAgIH1cclxuXHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdF0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lICE9IFwiXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5sb2FkU3ByaXRlRnJhbWUoXHJcblx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5jb21tb25PcHRpb25JbWFnZU5hbWUsXHJcblx0XHRcdFx0XHQoc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRpIDxcclxuXHRcdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XHRdLm51bWJlck9mT3B0aW9ucztcclxuXHRcdFx0XHRcdFx0XHRpKytcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cclxuXHRcdFx0XHRcdFx0XHRcdHNwcml0ZUZyYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0aSA8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5udW1iZXJPZk9wdGlvbnM7XHJcblx0XHRcdFx0aSsrXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5pc09wdGlvblRleHRcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0XHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XHRcdF0ub3B0aW9uc1tpXSxcclxuXHRcdFx0XHRcdFx0KHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRzcHJpdGVGcmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XHJcblx0XHRcdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbXHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdFx0XS5vcHRpb25zW2ldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yIChcclxuXHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0aSA8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5jb3JyZWN0QXVkaW9zLmxlbmd0aDtcclxuXHRcdFx0XHRpKytcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5sb2FkQXVkaW9DbGlwKFxyXG5cdFx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFcclxuXHRcdFx0XHRcdF0uY29ycmVjdEF1ZGlvc1tpXSxcclxuXHRcdFx0XHRcdChBdWRpb0NsaXApID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb3JyZWN0QXVkaW9baV0gPSBBdWRpb0NsaXA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jdXJyZW50SmNva2V5ID0gc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleS5nZXRDaGlsZEJ5TmFtZShcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWVcclxuXHRcdCk7XHJcblx0XHQvLyB0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0UHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG5cdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0KTtcclxuXHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDI1NTtcclxuXHJcblx0XHQvLyB0aGlzLk9wdGlvbnNMYXlvdXQoKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJBbnN3ZXJBcnJheSA9IFwiLCB0aGlzLmFuc3dlckFycmF5KTtcclxuXHRcdHRoaXMudG90YWxBbnN3ZXJzID1cclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRdLmNvcnJlY3RBbnN3ZXJOdW0ubGVuZ3RoO1xyXG5cclxuXHRcdHRoaXMuY2FsbFF1ZXN0aW9uQmFyKCk7XHJcblx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIlNpbXBsZVRhcFwiKSB7XHJcblx0XHRcdHRoaXMuc2V0T3B0aW9uc0xheW91dChcImhvcml6b250YWxcIik7XHJcblx0XHRcdHRoaXMuY2FsbE9wdGlvbkluKCk7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUgPT0gXCJUYXBUb0NvbGxlY3RcIikge1xyXG5cdFx0XHR0aGlzLnNldE9wdGlvbnNMYXlvdXQoXCJncmlkXCIpO1xyXG5cdFx0XHR0aGlzLmNhbGxUaGlyZE9iamVjdEluKCk7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUgPT0gXCJPYmplY3RzVHdlZW5JblwiKSB7XHJcblx0XHRcdHRoaXMuc2V0T3B0aW9uc0xheW91dChcImhvcml6b250YWxcIik7XHJcblx0XHRcdHRoaXMuY2FsbFRoaXJkT2JqZWN0SW4oKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJwZW5ndWluXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0b3J0b2lzZVwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8XHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY29ybnlcIlxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuYmFnUG9zaXRpdmU7XHJcblx0XHRcdHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy50bGNQb3NpdGl2ZTtcclxuXHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy50bGNOZWdhdGl2ZTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdHRoaXMucG9zaXRpdmVBdWRpbyA9IHRoaXMuc3VwZXJjdWJQb3NpdGl2ZTtcclxuXHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvID0gdGhpcy5zdXBlcmN1Yk5lZ2F0aXZlO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5jcnlvblBvc2l0aXZlO1xyXG5cdFx0XHR0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHR0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XHJcblx0XHRcdHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuc3RhbGxpb25OZWdhdGl2ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdF9udW1iZXIgPSBjYy5taXNjLmxlcnAobWluLCBtYXgsIF9udW1iZXIpO1xyXG5cdFx0X251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcblx0XHRyZXR1cm4gX251bWJlcjtcclxuXHR9XHJcblxyXG5cdEdlbmVyYXRlT3B0aW9ucygpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCJUb3RhbCBPcHRpb25zIDogXCIsIHRoaXMuVG90YWxPcHRpb25zKVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlRvdGFsT3B0aW9uczsgaSsrKSB7XHJcblx0XHRcdGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKSk7XHJcblx0XHRcdG9wdGlvbi5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xyXG5cdFx0XHRvcHRpb24uc2V0UGFyZW50KHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKSk7XHJcblx0XHRcdG9wdGlvbi5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcblx0XHRcdG9wdGlvbi5vcGFjaXR5ID0gMDtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImlzT3B0aW9uQkctLVwiICsgdGhpcy5pc09wdGlvbkJHKTtcclxuXHRcdFx0aWYgKHRoaXMuaXNPcHRpb25CRykge1xyXG5cdFx0XHRcdG9wdGlvbi5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3B0aW9uLmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5pc0RvbmVbaV0gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmRlc3Ryb3koKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJpc0RvbmUgOiBcIiwgdGhpcy5pc0RvbmUpO1xyXG5cdH1cclxuXHJcblx0Y2FsbFF1ZXN0aW9uQmFyKCkge1xyXG5cdFx0dGhpcy5xdWVzdGlvbkJveFBvc1kgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLnNldFBvc2l0aW9uKGNjLnYyKDAsIDE1MDApKTtcclxuXHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIikpXHJcblx0XHRcdC50bygxLCB7IHk6IHRoaXMucXVlc3Rpb25Cb3hQb3NZIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0dGhpcy5ub2RlXHJcblx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKVxyXG5cdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdF0ucXVlc3Rpb25UZXh0O1xyXG5cdH1cclxuXHJcblx0c2V0T3B0aW9uc0xheW91dCh0eXBlOiBzdHJpbmcpIHtcclxuXHRcdGlmICh0eXBlID09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRcdHRoaXMuT3B0aW9uc0xheW91dEhvcml6b250YWwoKTtcclxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0dGhpcy5PcHRpb25zTGF5b3V0VmVydGljYWwoKTtcclxuXHRcdFx0dGhpcy5yZXZlcnNlT3B0aW9uc0xheW91dCgpO1xyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09IFwiZ3JpZFwiKSB7XHJcblx0XHRcdHRoaXMuYXJyYW5nZUdyaWRDaGlsZHJlbigpO1xyXG5cdFx0XHQvL3RoaXMucmV2ZXJzZU9wdGlvbnNMYXlvdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNhbGxUaGlyZE9iamVjdEluKCkge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcInRoaXJkT2JqZWN0QXBwZWFyLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS50aGlyZE9iamVjdFR5cGUpO1xyXG5cdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS50ZW1wbGF0ZVR5cGUgPT0gXCJUYXBUb0NvbGxlY3RcIikge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5zZXRQb3NpdGlvbihjYy52MigtMzAwLCAtMjAwKSk7XHJcblx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKVxyXG5cdFx0XHRcdC5zZXRQb3NpdGlvbihjYy52MigtMzAwLCAtMjAwKSk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpKVxyXG5cdFx0XHRcdFx0XHQudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdH0sIDAuMSk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxsT3B0aW9uSW4oKTtcclxuXHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHR9LCAxKTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIk9iamVjdHNUd2VlbkluXCIpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zTm9kZS55ID0gdGhpcy5vcHRpb25zTm9kZS55ICsgMTAwO1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveFwiKVxyXG5cdFx0XHRcdC5zZXRQb3NpdGlvbihjYy52MigxNTAwLCAtMjUwKSk7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLnNjYWxlID0gMTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpKVxyXG5cdFx0XHRcdFx0XHQudG8oMC41LCB7IHg6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxPcHRpb25PdXRGcm9tT2JqZWN0KCk7XHJcblx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdH0sIDEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0T25WT0J1dHRvbigpIHtcclxuXHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcblx0XHRpZiAodGhpcy5xdWVzdGlvblNvdW5kWzBdKVxyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Y2FsbE9wdGlvbkluKCkge1xyXG5cdFx0bGV0IGRlbGF5OiBudW1iZXIgPSAwLjU7XHJcblx0XHRpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0LnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLnggLSA4MCxcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS55XHJcblx0XHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMub3B0aW9uc05vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2kgLSAxXS5zY2FsZSA9IDA7XHJcblx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbltpIC0gMV0ub3BhY2l0eSA9IDI1NTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBvYmpTY2FsZTogbnVtYmVyID0gMDtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9wU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnRlbXBsYXRlVHlwZSA9PSBcIlNpbXBsZVRhcFwiKSB7XHJcblx0XHRcdFx0XHRvYmpTY2FsZSA9IDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiVGFwVG9Db2xsZWN0XCIpIHtcclxuXHRcdFx0XHRcdG9ialNjYWxlID0gMC41O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvYmpTY2FsZSA9IDAuNztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImlzT3B0aW9uQmdcIik7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzT3B0aW9uQkcpIHtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLnNjYWxlID0gMS40O1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogb2JqU2NhbGUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdGlmIChpID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QbGF5UXVlc3Rpb25BdWRpbygpO1xyXG5cdFx0XHRcdFx0fSwgMC41KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdFx0ZGVsYXkgKz0gMC41O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdC8vICAgICBjb25zb2xlLmxvZyhcIkFCQ0QuLi4uLi4uLi4uLi4uXCIsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlblswXS5zY2FsZSwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYmdcIikuc2NhbGUsIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5zY2FsZSlcclxuXHRcdC8vIH0sIDMpO1xyXG5cdH1cclxuXHJcblx0Y2FsbE9wdGlvbk91dEZyb21PYmplY3QoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImNhbGxPcHRpb25PdXRGcm9tT2JqZWN0LS1cIiwgdGhpcy5wb3NpdGlvbkFycmF5KTtcclxuXHRcdC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQvLyAgICAgY29uc29sZS5sb2coXCJuYW1lIG9mOiBcIiArIGkgKyBcIiB0aCBjaGlsZHJlbiBpczogXCIgKyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0ubmFtZSk7XHJcblx0XHQvLyB9XHJcblx0XHRsZXQgZGVsYXk6IG51bWJlciA9IDAuNTtcclxuXHRcdGZvciAoXHJcblx0XHRcdGxldCBpID0gMTtcclxuXHRcdFx0aSA8PSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRpKytcclxuXHRcdCkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIk5ldyBpXCIsIGksIHRoaXMucG9zaXRpb25BcnJheS5sZW5ndGgpO1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baSAtIDFdLnNjYWxlID0gMDtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2kgLSAxXS5vcGFjaXR5ID0gMjU1O1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHQuY2hpbGRyZW5baSAtIDFdLnNldFBvc2l0aW9uKFxyXG5cdFx0XHRcdFx0MCAtIDEwMCxcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94XCIpLmdldFBvc2l0aW9uKCkueSAtXHJcblx0XHRcdFx0XHRcdDEwMFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRsZXQgb2JqU2NhbGU6IG51bWJlciA9IDA7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcFNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdFx0b2JqU2NhbGUgPSAwLjc7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzT3B0aW9uQkcpIHtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0LmNoaWxkcmVuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLnNjYWxlID0gMS40O1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogb2JqU2NhbGUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFx0XHRsZXQgcG9zOiBjYy5WZWMyID0gdGhpcy5ub2RlXHJcblx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShpLnRvU3RyaW5nKCkpXHJcblx0XHRcdFx0XHQuZ2V0UG9zaXRpb24oKTtcclxuXHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGkudG9TdHJpbmcoKSlcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0XHQuYmV6aWVyVG8oXHJcblx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdGNjLnYyKHBvcy54LCBwb3MueSArIDIwMCksXHJcblx0XHRcdFx0XHRcdGNjLnYyKHRoaXMucG9zaXRpb25BcnJheVtpIC0gMV0ueCAvIDEuNSwgcG9zLnkgKyA0MDApLFxyXG5cdFx0XHRcdFx0XHRjYy52MihcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXlbaSAtIDFdLngsXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkFycmF5W2kgLSAxXS55XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoaSA9PSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGxheVF1ZXN0aW9uQXVkaW8oKTtcclxuXHRcdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBkZWxheSk7XHJcblx0XHRcdGRlbGF5ICs9IDAuNTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFBsYXlRdWVzdGlvbkF1ZGlvKCkge1xyXG5cdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIkpvY2tleSBjb21pbmdcIik7XHJcblx0XHR0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuXHRcdCkge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tcclxuXHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXHJcblx0XHRcdFx0XS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpb1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucXVlc3Rpb25Tb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImFuc3dlckFycmF5IDogXCIsIHRoaXMuYW5zd2VyQXJyYXlbMF0pXHJcblx0XHRcdFx0bGV0IGhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpO1xyXG5cdFx0XHRcdGhhbmQuc2V0UGFyZW50KFxyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUodGhpcy5hbnN3ZXJBcnJheVswXSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGhhbmQuc2V0UG9zaXRpb24oMCwgLTcwKTtcclxuXHRcdFx0XHRoYW5kLnNldFBhcmVudFdpdGhTYW1lUG9zKHRoaXMubm9kZSk7XHJcblx0XHRcdFx0aGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiXHJcblx0XHQpIHtcclxuXHRcdFx0bGV0IGludG9BbmltID0gXCJpbnRyb1wiO1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oNDUwLCAtMzcwKTtcclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHRcdGludG9BbmltID0gXCJpbnRyb18xXCI7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5LnNldFBvc2l0aW9uKDg3MCwgLTM3MCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGxjX2JpcmRGbHlpbmcsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgaW50b0FuaW0sIGZhbHNlKTtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCFzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW1xyXG5cdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMVxyXG5cdFx0XHRcdFx0XS5zaG91bGRQbGF5UXVlc3Rpb25BdWRpb1xyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGxldCBoYW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKTtcclxuXHRcdFx0XHRcdFx0aGFuZC5zZXRQYXJlbnQoXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZSh0aGlzLmFuc3dlckFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRoYW5kLnNldFBvc2l0aW9uKDAsIC03MCk7XHJcblx0XHRcdFx0XHRcdGhhbmQuc2V0UGFyZW50V2l0aFNhbWVQb3ModGhpcy5ub2RlKTtcclxuXHRcdFx0XHRcdFx0aGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5xdWVzdGlvblNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImludHJvX2xvb3BcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImludHJvX2VuZFwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgaGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmRcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kLnNldFBhcmVudChcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKHRoaXMuYW5zd2VyQXJyYXlbMF0pXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aGFuZC5zZXRQb3NpdGlvbigwLCAtNzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0aGFuZC5zZXRQYXJlbnRXaXRoU2FtZVBvcyh0aGlzLm5vZGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fZW5kXCIpLmR1cmF0aW9uKTtcclxuXHRcdFx0XHRcdH0sIHRoaXMucXVlc3Rpb25Tb3VuZFswXS5kdXJhdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGludG9BbmltKS5kdXJhdGlvbik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPbkJ1dHRvbkNsaWNrKF9ldmVudDogY2MuRXZlbnQpIHtcclxuXHRcdC8vY29uc29sZS5sb2coXCJjYW5Ub3VjaC0tXCIgKyB0aGlzLmNhblRvdWNoKVxyXG5cdFx0aWYgKCF0aGlzLmNhblRvdWNoKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmlzRG9uZVtwYXJzZUludChfZXZlbnQudGFyZ2V0Lm5hbWUpIC0gMV0pIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLmlzRmlyc3RDbGljaykge1xyXG5cdFx0XHR0aGlzLmlzRmlyc3RDbGljayA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdH1cclxuXHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDEpIHtcclxuXHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGxldCBfbm9kZSA9IF9ldmVudC50YXJnZXQ7XHJcblx0XHRsZXQgaXNjb3JyZWN0OiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zd2VyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInRoaXMuYW5zd2VyQXJyYXlbaV0tLVwiICsgdGhpcy5hbnN3ZXJBcnJheVswXSwgX25vZGUubmFtZSk7XHJcblx0XHRcdGlmIChfbm9kZS5uYW1lID09IHRoaXMuYW5zd2VyQXJyYXlbaV0pIHtcclxuXHRcdFx0XHRpc2NvcnJlY3QgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuaXNEb25lW3BhcnNlSW50KF9ub2RlLm5hbWUpIC0gMV0gPSB0cnVlO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJpc2NvcnJlY3QtLVwiKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGlzY29ycmVjdCkge1xyXG5cdFx0XHR0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFwiY29ycmVjdEFuc3dlci0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsXHJcblx0XHRcdCk7XHJcblx0XHRcdC8vdGhpcy5kZXN0cm95T3B0aW9uKCk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3BTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLmNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMud3JvbmdBbnN3ZXJDb3VudCsrO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcIndyb25nQW5zd2VyLS1cIiArIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKF9ub2RlLCBfZXZlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FsbE5leHRMZXZlbCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwibGV2ZWxDb21wbGV0ZS0tXCIgKyBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKTtcclxuXHRcdHRoaXMuY2FsbFN0YXJzRWFyZWQoKTtcclxuXHRcdGlmIChnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IHRoaXMubWF4TGV2ZWwpIHtcclxuXHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFNjcmVlblwiKTtcclxuXHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUF1ZGlvWzBdLmR1cmF0aW9uIC0gMC41KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsKys7XHJcblx0XHRcdFx0Ly8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKTtcclxuXHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUF1ZGlvWzBdLmR1cmF0aW9uIC0gMC41KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNhbGxTdGFyc0VhcmVkKCkge1xyXG5cdFx0aWYgKCF0aGlzLnN0YXIxTG9nICYmIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gMSkge1xyXG5cdFx0XHR0aGlzLnN0YXIxTG9nID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMVwiKTtcclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5zdGFyMkxvZyAmJiBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID09IDQpIHtcclxuXHRcdFx0dGhpcy5zdGFyMkxvZyA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTJcIik7XHJcblx0XHR9XHJcblx0XHRpZiAoXHJcblx0XHRcdCF0aGlzLnN0YXIzTG9nICYmXHJcblx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPT0gdGhpcy5tYXhMZXZlbFxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuc3RhcjNMb2cgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInN0YXJzRWFybmVkLS0zXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FsbFBvc2l0aXZlUmVjdGlvbihfbm9kZTogY2MuTm9kZSkge1xyXG5cdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcblx0XHRcdHRoaXMuZXh0cmFJbWc7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiY29ycmVjdEF1ZGlvLS1cIiArIHRoaXMuY29ycmVjdEF1ZGlvLm5hbWUpO1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0dGhpcy5jb3JyZWN0QXVkaW9bcGFyc2VJbnQoX25vZGUubmFtZSkgLSAxXSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0XHQvLyBjYy50d2Vlbihfbm9kZSkudG8oMC41LCB7IHNjYWxlOiAxLjUsIHg6IDAsIHk6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKF9ub2RlKVxyXG5cdFx0XHQudG8oMC41LCB7IHdpZHRoOiA0MDAsIGhlaWdodDogNDAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Y2MudHdlZW4oX25vZGUuY2hpbGRyZW5bMF0pXHJcblx0XHRcdC50bygwLjUsIHsgd2lkdGg6IDMyMCwgaGVpZ2h0OiAzMjAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRjYy50d2Vlbihfbm9kZS5jaGlsZHJlblswXSlcclxuXHRcdFx0LnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHRcdGNjLnR3ZWVuKF9ub2RlKS50bygwLjUsIHsgeTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5zZXRQb3NpdGlvbihfbm9kZS54LCBfbm9kZS55KTtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIilcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHQucGxheSgpO1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0UHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuXHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxsSm9ja2V5KCk7XHJcblx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHR9LCAxLjUpO1xyXG5cdFx0XHR9LCAwLjcpO1xyXG5cdFx0fSwgMC41KTtcclxuXHR9XHJcblxyXG5cdGNhbGxQb3NpdGl2ZUZlZWRiYWNrKF9ub2RlOiBjYy5Ob2RlKSB7XHJcblx0XHRsZXQgdm9JbmRleDogbnVtYmVyID0gdGhpcy5hbnN3ZXJBcnJheS5pbmRleE9mKF9ub2RlLm5hbWUpO1xyXG5cdFx0c3dpdGNoIChzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlKSB7XHJcblx0XHRcdGNhc2UgXCJTaW1wbGVUYXBcIjpcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY29ycmVjdEF1ZGlvW3ZvSW5kZXhdLCBmYWxzZSk7XHJcblx0XHRcdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xyXG5cdFx0XHRcdF9ub2RlLmdldENoaWxkQnlOYW1lKFwidGlja1wiKS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdFx0XHQuc2V0UG9zaXRpb24oX25vZGUueCwgX25vZGUueSk7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIilcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0XHRcdC5wbGF5KCk7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb3JyZWN0QW5zd2VyQ291bnQrKztcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID09IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdGkgPFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0XHRpKytcclxuXHRcdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzRG9uZVtpXSA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5jaGlsZHJlbi5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYy5Db2xvci5XSElURTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmlzTGFzdFR3ZWVuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuT3B0aW9uc0xheW91dEhvcml6b250YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLmNyZWF0ZVN0YXJUcmFpbHMoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0UHJvZ3Jlc3NCYXIuSW5zdGFuY2UuUHJvZ3Jlc3NGaWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInF1ZXN0aW9uUGFuZWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC50byhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyB5OiAxNTAwIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwic291bmRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLkJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXJDb3VudC0tXCIgKyB0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCwgdGhpcy50b3RhbEFuc3dlcnMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FsbEpvY2tleSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sIDEuNSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0fSwgdGhpcy5jb3JyZWN0QXVkaW9bdm9JbmRleF0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiVGFwVG9Db2xsZWN0XCI6XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBdWRpb1t2b0luZGV4XSwgZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKS56SW5kZXggPSAxO1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3hcIikuekluZGV4ID0gMTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdFx0XHQuc2V0UG9zaXRpb24oX25vZGUueCwgX25vZGUueSk7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIilcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcblx0XHRcdFx0XHRcdC5wbGF5KCk7XHJcblx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVTb3VuZFswXSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgaW1nU2NhbGU6IG51bWJlciA9XHJcblx0XHRcdFx0XHRcdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuc2NhbGUgLyAyO1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiU2NhbGUgOiBcIiwgaW1nU2NhbGUpO1xyXG5cdFx0XHRcdFx0XHRsZXQgaW1nTmFtZTogc3RyaW5nID1cclxuXHRcdFx0XHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5uYW1lICtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvcnJlY3RBbnN3ZXJDb3VudCArXHJcblx0XHRcdFx0XHRcdFx0MTtcclxuXHRcdFx0XHRcdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikubmFtZSA9IGltZ05hbWU7XHJcblx0XHRcdFx0XHRcdF9ub2RlXHJcblx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKGltZ05hbWUpXHJcblx0XHRcdFx0XHRcdFx0LnNldFBhcmVudFdpdGhTYW1lUG9zKFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0bGV0IHBvczogY2MuVmVjMiA9IHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShpbWdOYW1lKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRQb3NpdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGhpcmRCb3g6IGNjLk5vZGUgPSB0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJUaGlyZE9iamVjdFwiKTtcclxuXHRcdFx0XHRcdFx0bGV0IHhSYW5kb206IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKFxyXG5cdFx0XHRcdFx0XHRcdC10aGlyZEJveC53aWR0aCAvIDQsXHJcblx0XHRcdFx0XHRcdFx0dGhpcmRCb3gud2lkdGggLyA0XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShpbWdOYW1lKS5zY2FsZSA9IGltZ1NjYWxlO1xyXG5cdFx0XHRcdFx0XHQvL2NjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKS5nZXRDaGlsZEJ5TmFtZShpbWdOYW1lKSkuYmV6aWVyVG8oMSwgY2MudjIocG9zLnggLyAyLCBwb3MueSArIDIwMCksIGNjLnYyKHBvcy54IC8gNCwgcG9zLnkpLCBjYy52Mih4UmFuZG9tLCB0aGlyZEJveC5oZWlnaHQgLyAyIC0gNTApKS5zdGFydCgpO1xyXG5cdFx0XHRcdFx0XHQvL2NjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlF1ZXN0aW9uQm94MVwiKS5nZXRDaGlsZEJ5TmFtZShpbWdOYW1lKSkuZGVsYXkoMC41KS50bygwLjcsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0Y2MudHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJRdWVzdGlvbkJveDFcIilcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShpbWdOYW1lKVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0LmJlemllclRvKFxyXG5cdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdGNjLnYyKHBvcy54IC8gMiwgcG9zLnkgKyAyMDApLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2MudjIoeFJhbmRvbSAvIDIsIHBvcy55ICsgMjAwKSxcclxuXHRcdFx0XHRcdFx0XHRcdGNjLnYyKHhSYW5kb20sIHRoaXJkQm94LmhlaWdodCAvIDIgLSA1MClcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdGNjLnR3ZWVuKFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENoaWxkQnlOYW1lKFwiUXVlc3Rpb25Cb3gxXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoaW1nTmFtZSlcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdC5kZWxheSgwLjUpXHJcblx0XHRcdFx0XHRcdFx0LnRvKFxyXG5cdFx0XHRcdFx0XHRcdFx0MC43LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyBzY2FsZTogaW1nU2NhbGUgKiAwLjUgfSxcclxuXHRcdFx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH1cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0X25vZGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY29ycmVjdEFuc3dlckNvdW50Kys7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID09IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5jcmVhdGVTdGFyVHJhaWxzKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJxdWVzdGlvblBhbmVsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgeTogMTUwMCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYy5CdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyQ291bnQtLVwiICsgdGhpcy5jb3JyZWN0QW5zd2VyQ291bnQsIHRoaXMudG90YWxBbnN3ZXJzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNhbGxKb2NrZXkoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LCAxLjUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSwgMC41KTtcclxuXHRcdFx0XHRcdH0sIDAuNSk7XHJcblx0XHRcdFx0fSwgdGhpcy5jb3JyZWN0QXVkaW9bdm9JbmRleF0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiT2JqZWN0c1R3ZWVuSW5cIjpcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiYW5zd2VyIGFycnJheSBpbmRleCA6IFwiLCB0aGlzLmFuc3dlckFycmF5LmluZGV4T2YoX25vZGUubmFtZSkpO1xyXG5cdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QXVkaW9bdm9JbmRleF0sIGZhbHNlKTtcclxuXHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XHJcblx0XHRcdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWNrXCIpLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcImNvbmZldHRpXCIpXHJcblx0XHRcdFx0XHRcdC5zZXRQb3NpdGlvbihfbm9kZS54LCBfbm9kZS55ICsgMTAwKTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuXHRcdFx0XHRcdFx0LnBsYXkoKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3NpdGl2ZVNvdW5kWzBdLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vX25vZGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb3JyZWN0QW5zd2VyQ291bnQrKztcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuY29ycmVjdEFuc3dlckNvdW50ID09IHRoaXMudG90YWxBbnN3ZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdGkgPFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0XHRpKytcclxuXHRcdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzRG9uZVtpXSA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuY29sb3IgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2MuQ29sb3IuV0hJVEU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0xhc3RUd2VlbiA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLk9wdGlvbnNMYXlvdXRIb3Jpem9udGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRQcm9ncmVzc0Jhci5JbnN0YW5jZS5jcmVhdGVTdGFyVHJhaWxzKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYy50d2VlbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJxdWVzdGlvblBhbmVsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgeTogMTUwMCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInF1ZXN0aW9uUGFuZWxcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5nZXRDaGlsZEJ5TmFtZShcInNvdW5kXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYy5CdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJjb3JyZWN0QW5zd2VyQ291bnQtLVwiICsgdGhpcy5jb3JyZWN0QW5zd2VyQ291bnQsIHRoaXMudG90YWxBbnN3ZXJzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNhbGxKb2NrZXkoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LCAxLjUpO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHRcdH0sIHRoaXMuY29ycmVjdEF1ZGlvW3ZvSW5kZXhdLmR1cmF0aW9uKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNhbGxKb2NrZXkoKSB7XHJcblx0XHRsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuXHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc3NpdGl2ZVwiLFxyXG5cdFx0XHRcdFwicG9zc2l0aXZlMlwiLFxyXG5cdFx0XHRcdFwicG9zc2l0aXZlM1wiLFxyXG5cdFx0XHRcdFwicG9zc2l0aXZlNFwiLFxyXG5cdFx0XHRcdFwicG9zc2l0aXZlNVwiLFxyXG5cdFx0XHRcdFwicG9zc2l0aXZlNlwiLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRsY1wiKSB7XHJcblx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8xXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8yXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV80XCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV81XCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV82XCIsXHJcblx0XHRcdF07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHRhbmltID0gW1xyXG5cdFx0XHRcdFwicG9zaXRpdmVfMVwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfMlwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfM1wiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNFwiLFxyXG5cdFx0XHRcdFwicG9zaXRpdmVfNVwiLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInRvcnRvaXNlXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJtdXNrYWFuXCIgfHxcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiXHJcblx0XHQpIHtcclxuXHRcdFx0YW5pbSA9IFtcclxuXHRcdFx0XHRcInBvc2l0aXZlXzFcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzJcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzNcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzRcIixcclxuXHRcdFx0XHRcInBvc2l0aXZlXzVcIixcclxuXHRcdFx0XTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcblx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8xXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8yXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV80XCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV81XCIsXHJcblx0XHRcdF07XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XHJcblx0XHRcdGFuaW0gPSBbXCJkYW5jZVwiLCBcInRodW1ic191cFwiXTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcblx0XHRcdGFuaW0gPSBbXCJjZWxlYnJhdGlvblwiLCBcIndlbGxfZG9uZVwiXTtcclxuXHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XHJcblx0XHRcdGFuaW0gPSBbXCJwb3NpdGl2ZV8xXCIsIFwicG9zaXRpdmVfMlwiLCBcInBvc2l0aXZlXzNcIiwgXCJwb3NpdGl2ZV80XCJdO1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJib3lcIiB8fFxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImdpcmxcIlxyXG5cdFx0KSB7XHJcblx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8xXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8yXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV8zXCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV80XCIsXHJcblx0XHRcdFx0XCJwb3NpdGl2ZV81XCIsXHJcblx0XHRcdF07XHJcblx0XHR9XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcclxuXHRcdGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgYW5pbS5sZW5ndGggLSAxKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiY3VycmVudENsaXBOdW0gPSBcIiwgY3VycmVudENsaXBOdW0pO1xyXG5cdFx0bGV0IHBvczogbnVtYmVyW10gPSBbLTEyMDAsIDEyMDBdO1xyXG5cdFx0bGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDUwLCA0NTBdO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcblx0XHRpZiAoXHJcblx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyID09IDAgJiZcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiXHJcblx0XHQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IC0wLjY1O1xyXG5cdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50SmNva2V5LnNjYWxlWCA9IDAuNjU7XHJcblx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG5cdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuXHRcdCkge1xyXG5cdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChcclxuXHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG5cdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN1cGVyY3ViXCJcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oXHJcblx0XHRcdFx0cG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSxcclxuXHRcdFx0XHQtMzUwXHJcblx0XHRcdCk7XHJcblx0XHRcdGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuXHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHQwLjUsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHg6IGpvY2tleXR3ZWVuW1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH1cclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG5cdFx0XHRcdFx0XHQudG8oXHJcblx0XHRcdFx0XHRcdFx0MC41LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHg6IHBvc1tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJcclxuXHRcdFx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xyXG5cdFx0XHRcdFx0XHRpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxsTmV4dExldmVsKCk7XHJcblx0XHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdH0sIDAuNSk7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRmYWxzZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly9iaXJkIGZseWluZyBvdXQgc291bmRcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaW50cm9fb3V0XCIsIGZhbHNlKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudGxjX2JpcmRGbHlpbmcsIGZhbHNlKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuXHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKFwiaW50cm9fb3V0XCIpLmR1cmF0aW9uKTtcclxuXHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8xXCIgfHxcclxuXHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcInBvc2l0aXZlXzJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfbG9vcFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoYW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJwb3NpdGl2ZV8xXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdXBlcmN1Yl9Qb3MxLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwicG9zaXRpdmVfMlwiKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VwZXJjdWJfUG9zMixcclxuXHRcdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oXHJcblx0XHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9lbmRcIixcclxuXHRcdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJydW5cIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuXHRcdFx0XHRcdFx0XHRcdC50bygyLCB7IHg6IC0xMDAwIH0pXHJcblx0XHRcdFx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNhbGxOZXh0TGV2ZWwoKTtcclxuXHRcdFx0XHRcdFx0fSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiKS5kdXJhdGlvbik7XHJcblx0XHRcdFx0XHR9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuXHRcdFx0XHR9LCB0aGlzLmN1cnJlbnRKY29rZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5maW5kQW5pbWF0aW9uKGFuaW1bY3VycmVudENsaXBOdW1dICsgXCJfc3RhcnRcIikuZHVyYXRpb24pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRjYy50d2Vlbih0aGlzLmN1cnJlbnRKY29rZXkpLnRvKDIsIHsgeDogLTEwMDAgfSkuc3RhcnQoKTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5jYWxsTmV4dExldmVsKCk7XHJcblx0XHRcdFx0fSwgdGhpcy5wb3NpdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNhbGxOZWdhdGl2ZVJlY3Rpb24oX25vZGU6IGNjLk5vZGUsIF9ldmVudCkge1xyXG5cdFx0dGhpcy5jYW5Ub3VjaCA9IGZhbHNlO1xyXG5cdFx0Ly9fbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zZXRNYXRlcmlhbCgwLCB0aGlzLmdyZXlNYXQpO1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlU291bmRbMF0sIGZhbHNlKTtcclxuXHRcdGlmICh0aGlzLndyb25nQW5zd2VyQ291bnQgPj0gNikge1xyXG5cdFx0XHR0aGlzLndyb25nQW5zd2VyQ291bnQgPSAxO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcclxuXHRcdFx0aWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlXCIsXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlMlwiLFxyXG5cdFx0XHRcdFx0XCJuZWdldGl2ZTNcIixcclxuXHRcdFx0XHRcdFwibmVnZXRpdmU0XCIsXHJcblx0XHRcdFx0XHRcIm5lZ2V0aXZlNVwiLFxyXG5cdFx0XHRcdFx0XCJuZWdldGl2ZTZcIixcclxuXHRcdFx0XHRdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIiwgXCJuZWdhdGl2ZV8zXCJdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3VwZXJjdWJcIikge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xyXG5cdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHxcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInBlbmd1aW5cIiB8fFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidG9ydG9pc2VcIiB8fFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwibXVza2FhblwiIHx8XHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjb3JueVwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1wibm9cIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XHJcblx0XHRcdFx0YW5pbSA9IFtcInRyeV9hZ2FpblwiXTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0XHRhbmltID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcblx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJib3lcIiB8fFxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiZ2lybFwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdGFuaW0gPSBbXHJcblx0XHRcdFx0XHRcIm5lZ2F0aXZlXzFcIixcclxuXHRcdFx0XHRcdFwibmVnYXRpdmVfMlwiLFxyXG5cdFx0XHRcdFx0XCJuZWdhdGl2ZV8zXCIsXHJcblx0XHRcdFx0XHRcIm5lZ2F0aXZlXzRcIixcclxuXHRcdFx0XHRcdFwibmVnYXRpdmVfNVwiLFxyXG5cdFx0XHRcdF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBjdXJyZW50Q2xpcE51bTogbnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHRhbmltLmxlbmd0aCAtIDFcclxuXHRcdFx0KTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XHJcblx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2NhbGVYID0gMC42NTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgIT0gXCJ0bGNcIiAmJlxyXG5cdFx0XHRcdHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3VwZXJjdWJcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXkuc2V0UG9zaXRpb24oMTIwMCwgLTM1MCk7XHJcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5jdXJyZW50SmNva2V5KVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiA0MDAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBhbmltW2N1cnJlbnRDbGlwTnVtXSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0dGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXSxcclxuXHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMuY3VycmVudEpjb2tleSlcclxuXHRcdFx0XHRcdFx0XHQudG8oMC41LCB7IHg6IDEyMDAgfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pXHJcblx0XHRcdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHRcdFx0XHR9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcclxuXHRcdFx0XHR9LCAwLjUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5Ub3VjaCA9IHRydWU7XHJcblx0XHRcdFx0fSwgdGhpcy5uZWdhdGl2ZUF1ZGlvW2N1cnJlbnRDbGlwTnVtXS5kdXJhdGlvbik7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gPT0gXCJuZWdhdGl2ZV8xXCIgfHxcclxuXHRcdFx0XHRcdGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMlwiXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHQvL3BsYXkgYnVsYiBicmVhayBpZiBuZWVkZWRcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKFxyXG5cdFx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdFx0YW5pbVtjdXJyZW50Q2xpcE51bV0gKyBcIl9zdGFydFwiLFxyXG5cdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEpjb2tleVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbihcclxuXHRcdFx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2xvb3BcIixcclxuXHRcdFx0XHRcdFx0XHRcdHRydWVcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChhbmltW2N1cnJlbnRDbGlwTnVtXSA9PSBcIm5lZ2F0aXZlXzFcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdXBlcmN1Yl9OZWcxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGFuaW1bY3VycmVudENsaXBOdW1dID09IFwibmVnYXRpdmVfMlwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1cGVyY3ViX05lZzIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdFx0XHQuc2V0QW5pbWF0aW9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX2VuZFwiKS5kdXJhdGlvbik7XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdFx0fSwgdGhpcy5jdXJyZW50SmNva2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZmluZEFuaW1hdGlvbihhbmltW2N1cnJlbnRDbGlwTnVtXSArIFwiX3N0YXJ0XCIpLmR1cmF0aW9uKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SmNva2V5XHJcblx0XHRcdFx0XHRcdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXHJcblx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoXHJcblx0XHRcdFx0XHRcdHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sXHJcblx0XHRcdFx0XHRcdGZhbHNlXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRKY29rZXlcclxuXHRcdFx0XHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0sIHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0uZHVyYXRpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSwgMC43KTtcclxuXHJcblx0XHRpZiAodGhpcy5pc09wdGlvbkJHKSB7XHJcblx0XHRcdF9ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuXHRcdH1cclxuXHRcdGNjLnR3ZWVuKF9ub2RlKVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLnggLSAxMCwgb3BhY2l0eTogMTgwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC50bygwLjIsIHsgeDogX25vZGUueCArIDEwLCBvcGFjaXR5OiA1MCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLnggLSAxMCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdC50bygwLjIsIHsgeDogX25vZGUueCArIDEwLCBvcGFjaXR5OiA1MCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQudG8oMC4yLCB7IHg6IF9ub2RlLngsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHQuY2FsbCgoKSA9PiB7XHJcblx0XHRcdFx0X25vZGUuY2hpbGRyZW5bMF1cclxuXHRcdFx0XHRcdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG5cdFx0XHRcdFx0LnNldE1hdGVyaWFsKDAsIHRoaXMuZGVmYXVsdE1hdCk7XHJcblx0XHRcdFx0X25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuXHRcdFx0XHRfbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveU9wdGlvbigpIHtcclxuXHRcdGZvciAoXHJcblx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0aSA8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIk9wdGlvblwiKS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdGkrK1xyXG5cdFx0KSB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25cIikuY2hpbGRyZW5baV0ubmFtZSAhPVxyXG5cdFx0XHRcdHRoaXMuYW5zd2VyQXJyYXlbMF1cclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiT3B0aW9uXCIpLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9hZFNwcml0ZUZyYW1lKFxyXG5cdFx0aW1hZ2VOYW1lOiBzdHJpbmcsXHJcblx0XHRjYWxsYmFjazogKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiaW1hZ2VzL1wiICsgaW1hZ2VOYW1lLFxyXG5cdFx0XHRjYy5TcHJpdGVGcmFtZSxcclxuXHRcdFx0KGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYWxsYmFjayhzcHJpdGVGcmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGxvYWRBdWRpb0NsaXAoXHJcblx0XHRhdWRpb05hbWU6IHN0cmluZyxcclxuXHRcdGNhbGxiYWNrOiAoc3ByaXRlRnJhbWU6IGNjLkF1ZGlvQ2xpcCkgPT4gdm9pZFxyXG5cdCkge1xyXG5cdFx0Y2MubG9hZGVyLmxvYWRSZXMoXHJcblx0XHRcdFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLFxyXG5cdFx0XHRjYy5BdWRpb0NsaXAsXHJcblx0XHRcdChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FsbGJhY2soc3ByaXRlRnJhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0T3B0aW9uc0xheW91dEhvcml6b250YWwoKSB7XHJcblx0XHRsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMub3B0aW9uc05vZGU7XHJcblx0XHRsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvcHRpb25Ob2Rlcy0tXCIgKyBvcHRpb25Ob2Rlcy5sZW5ndGgsIG9wdGlvbnNMYXlvdXQud2lkdGgpO1xyXG5cclxuXHRcdGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xyXG5cclxuXHRcdGxldCB0b3RhbFdpZHRoID0gMDtcclxuXHRcdGxldCBtYXhIZWlnaHQgPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cdFx0XHRsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcblx0XHRcdGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuXHRcdFx0dG90YWxXaWR0aCArPSBvcHRpb25XaWR0aCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHRcdFx0aWYgKG9wdGlvbkhlaWdodCA+IG1heEhlaWdodCkge1xyXG5cdFx0XHRcdG1heEhlaWdodCA9IG9wdGlvbkhlaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhdmFpbGFibGVXaWR0aCA9IG9wdGlvbnNMYXlvdXQud2lkdGg7XHJcblx0XHRsZXQgdG90YWxXaWR0aFdpdGhQYWRkaW5nID1cclxuXHRcdFx0dG90YWxXaWR0aCArIChvcHRpb25Ob2Rlcy5sZW5ndGggLSAxKSAqIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcclxuXHRcdGxldCBzY2FsZUZhY3RvciA9IE1hdGgubWluKDEsIGF2YWlsYWJsZVdpZHRoIC8gdG90YWxXaWR0aFdpdGhQYWRkaW5nKTtcclxuXHJcblx0XHRsZXQgYWNjdW11bGF0ZWRXaWR0aCA9IDA7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcclxuXHJcblx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgc2NhbGUgZmFjdG9yIGZvciB0aGUgb3B0aW9uXHJcblx0XHRcdGxldCBvcHRpb25TY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yO1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0b3B0aW9uTm9kZXMubGVuZ3RoID09IDIgJiZcclxuXHRcdFx0XHRzdGFydEdhbWUuSW5zdGFuY2UudGVtcGxhdGVUeXBlID09IFwiT2JqZWN0c1R3ZWVuSW5cIiAmJlxyXG5cdFx0XHRcdCF0aGlzLmlzTGFzdFR3ZWVuXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdG9wdGlvblNjYWxlRmFjdG9yID0gb3B0aW9uU2NhbGVGYWN0b3IgKiAwLjc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFNjYWxlIHRoZSBvcHRpb25cclxuXHRcdFx0b3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcclxuXHRcdFx0bGV0IHBvc1ggPSBhY2N1bXVsYXRlZFdpZHRoICsgb3B0aW9uLndpZHRoICogb3B0aW9uLmFuY2hvclg7XHJcblx0XHRcdGlmICghdGhpcy5pc0xhc3RUd2Vlbikge1xyXG5cdFx0XHRcdG9wdGlvbi54ID0gcG9zWCAtIG9wdGlvbnNMYXlvdXQud2lkdGggKiBvcHRpb25zTGF5b3V0LmFuY2hvclg7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IG9wdGlvblggPVxyXG5cdFx0XHRcdFx0cG9zWCAtIG9wdGlvbnNMYXlvdXQud2lkdGggKiBvcHRpb25zTGF5b3V0LmFuY2hvclg7XHJcblx0XHRcdFx0Y2MudHdlZW4ob3B0aW9uKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiBvcHRpb25YIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YWNjdW11bGF0ZWRXaWR0aCArPSBvcHRpb24ud2lkdGggKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XHJcblx0XHRcdHRoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbi5nZXRQb3NpdGlvbigpKTtcclxuXHJcblx0XHRcdC8vIFNjYWxlIGFuZCBwb3NpdGlvbiBjaGlsZHJlbiBub2RlcyBwcm9wb3J0aW9uYWxseVxyXG5cdFx0XHRmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJzdWJDaGlsZC0tXCIsIHN1YkNoaWxkLm5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0b3B0aW9uc0xheW91dC5oZWlnaHQgPSBtYXhIZWlnaHQgKiBzY2FsZUZhY3RvcjtcclxuXHJcblx0XHRpZiAob3B0aW9uTm9kZXMubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlzTGFzdFR3ZWVuKSB7XHJcblx0XHRcdFx0bGV0IGRpc3RhbmNlQmV0d2Vlbk9wdGlvbnMgPVxyXG5cdFx0XHRcdFx0b3B0aW9uTm9kZXNbMV0ueCAtIG9wdGlvbk5vZGVzWzBdLng7XHJcblx0XHRcdFx0b3B0aW9uTm9kZXNbMF0ueCA9IDAgLSBkaXN0YW5jZUJldHdlZW5PcHRpb25zIC8gMjtcclxuXHRcdFx0XHRvcHRpb25Ob2Rlc1sxXS54ID0gMCArIGRpc3RhbmNlQmV0d2Vlbk9wdGlvbnMgLyAyO1xyXG5cdFx0XHRcdG9wdGlvbk5vZGVzWzBdLnkgPSBvcHRpb25Ob2Rlc1swXS55IC0gNTA7XHJcblx0XHRcdFx0b3B0aW9uTm9kZXNbMV0ueSA9IG9wdGlvbk5vZGVzWzFdLnkgLSA1MDtcclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXkgPSBbXTtcclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXkucHVzaChvcHRpb25Ob2Rlc1swXS5nZXRQb3NpdGlvbigpKTtcclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXkucHVzaChvcHRpb25Ob2Rlc1sxXS5nZXRQb3NpdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgZGlzdGFuY2VCZXR3ZWVuT3B0aW9ucyA9XHJcblx0XHRcdFx0XHRvcHRpb25Ob2Rlc1sxXS54IC0gb3B0aW9uTm9kZXNbMF0ueDtcclxuXHRcdFx0XHRsZXQgb3B0aW9uWDAgPSAwIC0gZGlzdGFuY2VCZXR3ZWVuT3B0aW9ucyAvIDI7XHJcblx0XHRcdFx0bGV0IG9wdGlvblgxID0gMCArIGRpc3RhbmNlQmV0d2Vlbk9wdGlvbnMgLyAyO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKG9wdGlvbk5vZGVzWzBdKVxyXG5cdFx0XHRcdFx0LnRvKDAuNSwgeyB4OiBvcHRpb25YMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdFx0Y2MudHdlZW4ob3B0aW9uTm9kZXNbMV0pXHJcblx0XHRcdFx0XHQudG8oMC41LCB7IHg6IG9wdGlvblgxIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXkgPSBbXTtcclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXkucHVzaChvcHRpb25Ob2Rlc1swXS5nZXRQb3NpdGlvbigpKTtcclxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXkucHVzaChvcHRpb25Ob2Rlc1sxXS5nZXRQb3NpdGlvbigpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChvcHRpb25Ob2Rlcy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNMYXN0VHdlZW4pIHtcclxuXHRcdFx0XHRvcHRpb25Ob2Rlc1swXS54ID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjYy50d2VlbihvcHRpb25Ob2Rlc1swXSlcclxuXHRcdFx0XHRcdC50bygwLjUsIHsgeDogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhcInBvc2l0aW9uQXJyYXktLVwiLCB0aGlzLnBvc2l0aW9uQXJyYXkpO1xyXG5cdH1cclxuXHJcblx0T3B0aW9uc0xheW91dFZlcnRpY2FsKCkge1xyXG5cdFx0bGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLm9wdGlvbnNOb2RlO1xyXG5cdFx0bGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcclxuXHJcblx0XHRjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcclxuXHJcblx0XHRsZXQgdG90YWxIZWlnaHQgPSAwO1xyXG5cdFx0bGV0IG1heFdpZHRoID0gMDtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodCBhbmQgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIG9wdGlvbnNcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cdFx0XHRsZXQgb3B0aW9uV2lkdGggPSBvcHRpb24ud2lkdGg7XHJcblx0XHRcdGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xyXG5cclxuXHRcdFx0dG90YWxIZWlnaHQgKz0gb3B0aW9uSGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0XHRpZiAob3B0aW9uV2lkdGggPiBtYXhXaWR0aCkge1xyXG5cdFx0XHRcdG1heFdpZHRoID0gb3B0aW9uV2lkdGg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYXZhaWxhYmxlSGVpZ2h0ID0gb3B0aW9uc0xheW91dC5oZWlnaHQ7XHJcblx0XHRsZXQgdG90YWxIZWlnaHRXaXRoUGFkZGluZyA9XHJcblx0XHRcdHRvdGFsSGVpZ2h0ICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cdFx0bGV0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYXZhaWxhYmxlSGVpZ2h0IC8gdG90YWxIZWlnaHRXaXRoUGFkZGluZyk7XHJcblxyXG5cdFx0bGV0IGFjY3VtdWxhdGVkSGVpZ2h0ID0gMDtcclxuXHJcblx0XHQvLyBQb3NpdGlvbiBlYWNoIG9wdGlvbiBub2RlIHZlcnRpY2FsbHlcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG9wdGlvbiA9IG9wdGlvbk5vZGVzW2ldO1xyXG5cclxuXHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cclxuXHRcdFx0bGV0IG9wdGlvblNjYWxlRmFjdG9yID0gc2NhbGVGYWN0b3I7XHJcblxyXG5cdFx0XHQvLyBTY2FsZSB0aGUgb3B0aW9uXHJcblx0XHRcdG9wdGlvbi53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0b3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHJcblx0XHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhbmNob3IgYW5kIHNjYWxlZCBzaXplXHJcblx0XHRcdGxldCBwb3NZID0gYWNjdW11bGF0ZWRIZWlnaHQgKyBvcHRpb24uaGVpZ2h0ICogb3B0aW9uLmFuY2hvclk7XHJcblx0XHRcdG9wdGlvbi55ID0gcG9zWSAtIG9wdGlvbnNMYXlvdXQuaGVpZ2h0ICogb3B0aW9uc0xheW91dC5hbmNob3JZO1xyXG5cdFx0XHR0aGlzLnBvc2l0aW9uQXJyYXkucHVzaChvcHRpb24uZ2V0UG9zaXRpb24oKSk7XHJcblxyXG5cdFx0XHRhY2N1bXVsYXRlZEhlaWdodCArPSBvcHRpb24uaGVpZ2h0ICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xyXG5cclxuXHRcdFx0Ly8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XHJcblx0XHRcdGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xyXG5cdFx0XHRcdHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdFx0c3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcclxuXHRcdFx0XHRzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRvcHRpb25zTGF5b3V0LndpZHRoID0gbWF4V2lkdGggKiBzY2FsZUZhY3RvcjtcclxuXHR9XHJcblxyXG5cdGFycmFuZ2VHcmlkQ2hpbGRyZW4oKSB7XHJcblx0XHRsZXQgY2hpbGRyZW4gPSB0aGlzLm9wdGlvbnNOb2RlLmNoaWxkcmVuO1xyXG5cdFx0bGV0IG1heENvbHVtbnMgPSAyO1xyXG5cdFx0bGV0IF9vcHRpb25Db3VudDogbnVtYmVyID0gdGhpcy50b3RhbEFuc3dlcnM7XHJcblx0XHRsZXQgc3BhY2luZzogbnVtYmVyID0gLTIwMDtcclxuXHRcdGlmIChfb3B0aW9uQ291bnQgPT0gNCkge1xyXG5cdFx0XHRtYXhDb2x1bW5zID0gMjtcclxuXHRcdH1cclxuXHRcdGxldCB0b3RhbFJvd3MgPSBNYXRoLmNlaWwoY2hpbGRyZW4ubGVuZ3RoIC8gbWF4Q29sdW1ucyk7XHJcblxyXG5cdFx0bGV0IHJvd0hlaWdodCA9IDA7XHJcblx0XHRpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyb3dIZWlnaHQgPSBjaGlsZHJlblswXS5oZWlnaHQgKyBzcGFjaW5nOyAvLyBBc3N1bWluZyBhbGwgY2hpbGRyZW4gaGF2ZSB0aGUgc2FtZSBoZWlnaHRcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc3RhcnRZID0gKCh0b3RhbFJvd3MgLSAxKSAqIHJvd0hlaWdodCkgLyAyO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGNvbHVtbiA9IGkgJSBtYXhDb2x1bW5zO1xyXG5cdFx0XHRsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gbWF4Q29sdW1ucyk7XHJcblxyXG5cdFx0XHRsZXQgdG90YWxXaWR0aCA9IDA7XHJcblx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgd2lkdGggb2YgdGhlIGN1cnJlbnQgcm93XHJcblx0XHRcdGZvciAoXHJcblx0XHRcdFx0bGV0IGogPSAwO1xyXG5cdFx0XHRcdGogPCBtYXhDb2x1bW5zICYmIHJvdyAqIG1heENvbHVtbnMgKyBqIDwgY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdGorK1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR0b3RhbFdpZHRoICs9IGNoaWxkcmVuW3JvdyAqIG1heENvbHVtbnMgKyBqXS53aWR0aDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b3RhbFdpZHRoICs9XHJcblx0XHRcdFx0c3BhY2luZyAqXHJcblx0XHRcdFx0KE1hdGgubWluKGNoaWxkcmVuLmxlbmd0aCAtIHJvdyAqIG1heENvbHVtbnMsIG1heENvbHVtbnMpIC0gMSk7XHJcblxyXG5cdFx0XHRsZXQgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyO1xyXG5cclxuXHRcdFx0bGV0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcblx0XHRcdGNoaWxkLnggPVxyXG5cdFx0XHRcdDIwMCArXHJcblx0XHRcdFx0c3RhcnRYICtcclxuXHRcdFx0XHRjb2x1bW4gKiAoY2hpbGQud2lkdGggKyBzcGFjaW5nKSArXHJcblx0XHRcdFx0Y2hpbGQud2lkdGggLyAyO1xyXG5cdFx0XHRjaGlsZC55ID0gc3RhcnRZIC0gcm93ICogcm93SGVpZ2h0O1xyXG5cdFx0XHRpZiAodGhpcy5Ub3RhbE9wdGlvbnMgPT0gMikge1xyXG5cdFx0XHRcdGNoaWxkLnkgPSBjaGlsZC55IC0gMzA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2hpbGQueSA9IGNoaWxkLnkgLSA3MDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0T3B0aW9uc0xheW91dEdyaWQoKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiT3B0aW9uc0xheW91dEdyaWRcIik7XHJcblx0XHRsZXQgbnVtQ29sczogbnVtYmVyO1xyXG5cdFx0bGV0IG51bVJvd3M6IG51bWJlcjtcclxuXHRcdGlmICh0aGlzLlRvdGFsT3B0aW9ucyA9PSAyKSB7XHJcblx0XHRcdG51bUNvbHMgPSAyO1xyXG5cdFx0XHRudW1Sb3dzID0gMTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5Ub3RhbE9wdGlvbnMgPT0gMykge1xyXG5cdFx0XHRudW1Db2xzID0gMjtcclxuXHRcdFx0bnVtUm93cyA9IDI7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuVG90YWxPcHRpb25zID09IDQpIHtcclxuXHRcdFx0bnVtQ29scyA9IDI7XHJcblx0XHRcdG51bVJvd3MgPSAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMjA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbk5vZGVzID0gdGhpcy5vcHRpb25zTm9kZTtcclxuXHJcblx0XHRjb25zdCBvcHRpb25XaWR0aCA9IDE1MDsgLy8gV2lkdGggb2YgZWFjaCBvcHRpb25cclxuXHRcdGNvbnN0IG9wdGlvbkhlaWdodCA9IDE1MDsgLy8gSGVpZ2h0IG9mIGVhY2ggb3B0aW9uXHJcblxyXG5cdFx0Y29uc3QgZ3JpZFdpZHRoID1cclxuXHRcdFx0b3B0aW9uV2lkdGggKiBudW1Db2xzICsgcGFkZGluZ0JldHdlZW5PcHRpb25zICogKG51bUNvbHMgLSAxKTtcclxuXHRcdGNvbnN0IGdyaWRIZWlnaHQgPVxyXG5cdFx0XHRvcHRpb25IZWlnaHQgKiBudW1Sb3dzICsgcGFkZGluZ0JldHdlZW5PcHRpb25zICogKG51bVJvd3MgLSAxKTtcclxuXHJcblx0XHRsZXQgY3VycmVudFJvdyA9IDA7XHJcblx0XHRsZXQgY3VycmVudENvbCA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25Ob2Rlcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zTm9kZS5jaGlsZHJlbltpXTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhpLCBvcHRpb25Ob2Rlcy5jaGlsZHJlbi5sZW5ndGgpO1xyXG5cdFx0XHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gZ3JpZCBsYXlvdXRcclxuXHRcdFx0bGV0IHBvc1ggPSBjdXJyZW50Q29sICogKG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zKTtcclxuXHRcdFx0bGV0IHBvc1kgPSBjdXJyZW50Um93ICogKG9wdGlvbkhlaWdodCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyk7XHJcblxyXG5cdFx0XHQvLyBVcGRhdGUgcG9zaXRpb24gb2YgdGhlIG9wdGlvblxyXG5cdFx0XHRpZiAodGhpcy5Ub3RhbE9wdGlvbnMgPT0gMikge1xyXG5cdFx0XHRcdG9wdGlvbi5zZXRQb3NpdGlvbihjYy52Mihwb3NYICsgNTAsIHBvc1kpKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLlRvdGFsT3B0aW9ucyA9PSAzKSB7XHJcblx0XHRcdFx0b3B0aW9uLnNldFBvc2l0aW9uKGNjLnYyKHBvc1ggKyA1MCwgcG9zWSAtIDE4MCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuVG90YWxPcHRpb25zID09IDQpIHtcclxuXHRcdFx0XHRvcHRpb24uc2V0UG9zaXRpb24oY2MudjIocG9zWCArIDUwLCBwb3NZIC0gMTgwKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucG9zaXRpb25BcnJheS5wdXNoKG9wdGlvbi5nZXRQb3NpdGlvbigpKTtcclxuXHJcblx0XHRcdGN1cnJlbnRDb2wrKztcclxuXHRcdFx0aWYgKGN1cnJlbnRDb2wgPj0gbnVtQ29scykge1xyXG5cdFx0XHRcdGN1cnJlbnRDb2wgPSAwO1xyXG5cdFx0XHRcdGN1cnJlbnRSb3crKztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5Ub3RhbE9wdGlvbnMgPT0gMyAmJiBpID09IDIpIHtcclxuXHRcdFx0XHRvcHRpb24uc2V0UG9zaXRpb24oY2MudjIoMiAqIChwb3NYICsgMTAwKSwgcG9zWSAtIDE4MCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU2V0IHRoZSBzaXplIG9mIHRoZSBvcHRpb25zIGNvbnRhaW5lciB0byBmaXQgdGhlIGdyaWRcclxuXHRcdHRoaXMub3B0aW9uc05vZGUud2lkdGggPSBncmlkV2lkdGg7XHJcblx0XHR0aGlzLm9wdGlvbnNOb2RlLmhlaWdodCA9IGdyaWRIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRyZXZlcnNlT3B0aW9uc0xheW91dCgpIHtcclxuXHRcdGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5vcHRpb25zTm9kZTtcclxuXHRcdGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIGFuIGFycmF5IHRvIGhvbGQgdGhlIG5ldyBwb3NpdGlvbnNcclxuXHRcdGxldCBuZXdQb3NpdGlvbnMgPSBbXTtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9ucyBpbiByZXZlcnNlIG9yZGVyXHJcblx0XHRmb3IgKGxldCBpID0gb3B0aW9uTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0bmV3UG9zaXRpb25zLnB1c2gob3B0aW9uTm9kZXNbaV0ueSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIG9wdGlvbnNcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0b3B0aW9uTm9kZXNbaV0ueSA9IG5ld1Bvc2l0aW9uc1tpXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHt9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcQXNzZXRzXFwxX1BJRVRcXFNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUE0R0EsQ0FBQztJQTVHb0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRHNUI7SUFBRCxlQUFDO0NBNUdELEFBNEdDLENBNUdxQyxFQUFFLENBQUMsU0FBUyxHQTRHakQ7a0JBNUdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgLy8gbG9hZGluZ0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyBwbGF5X2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAvLyB0aW1lclNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBPblN0YXJ0R2FtZShfZXZlbnQ6IGNjLkV2ZW50KSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlfYXVkaW8sIGZhbHNlKTtcclxuICAgIC8vICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIF9ldmVudC50YXJnZXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkU2NlbmVXaXRoUHJvZ3Jlc3MoKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gbG9hZFNjZW5lV2l0aFByb2dyZXNzKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmxvYWRpbmdCYXIpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkaW5nQmFyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSwgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZGluZ0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgLy8gICAgIH0sICgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcblxyXG5cdC8vdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5kXCIpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgLy8gRW5kQnV0dG9uKCkge1xyXG5cdC8vXHQgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tXCIgKyB0cnVlKTtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5wbGF5X2F1ZGlvLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgY2xvc2VXaW5kb3coKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gY29uc3QgY2xvc2VXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgd2luZG93Lm9wZW4obG9jYXRpb24uaHJlZiwgXCJfc2VsZlwiLCBcIlwiKTtcclxuICAgIC8vICAgICB3aW5kb3cuY2xvc2UoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGN1clRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gdGltZXJTY2hlZHVsZSA9ICgpID0+IHtcclxuICAgIC8vICAgICAtLXRoaXMuY3VyVGltZXI7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGltZXJcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1clRpbWVyLnRvU3RyaW5nKCk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuY3VyVGltZXIgPT0gMTApIHtcclxuICAgIC8vICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRpbWVyU291bmQsIHRydWUpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0aGlzLmN1clRpbWVyID09IDApIHtcclxuICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiMVwiKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdGFydFRpbWVyKHRvdGFsVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lclwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMzBcIjtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lclwiKSlcclxuICAgIC8vICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIHRoaXMuY3VyVGltZXIgPSB0b3RhbFRpbWU7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnRpbWVyU2NoZWR1bGUsIDEsIHRvdGFsVGltZSAtIDEpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHN0b3BUaW1lcigpIHtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lclwiKSlcclxuICAgIC8vICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyU2NoZWR1bGUpXHJcbiAgICAvLyB9O1xyXG5cclxuXHJcbiAgICAvLyB3cm9uZ0Fuc3dlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLy8gY2FsbEpvY2tleSgpIHtcclxuICAgIC8vICAgICBsZXQgcG9zOiBudW1iZXJbXSA9IFstMTIwMCwgMTIwMF07XHJcbiAgICAvLyAgICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDAwLCA0MDBdO1xyXG4gICAgLy8gICAgIGxldCBhbmltOiBzdHJpbmdbXSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyQXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS54ID0gcG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXTtcclxuICAgIC8vICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICBzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBhbmltW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSA1XSwgZmFsc2UpO1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc3RhcnRHYW1lLkluc3RhbmNlLnBvc2l0aXZlVk9bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDVdLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjYy50d2VlbihzdGFydEdhbWUuSW5zdGFuY2UuSm9ja2V5Tm9kZSkudG8oMC41LCB7IHg6IHBvc1tnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsICUgMl0gfSwgeyBlYXNpbmc6IFwicXVhcnRJbk91dFwiIH0pLnN0YXJ0KCk7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyRGlzYXBwZWFyLS1Qb2Rhcl9KdW1ib1wiKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5sZXZlbGNvbXBsZXRlKCk7XHJcbiAgICAvLyAgICAgfSwgc3RhcnRHYW1lLkluc3RhbmNlLnBvc2l0aXZlVk9bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDVdLmR1cmF0aW9uICsgMC41KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGNhbGxOZWdKb2NrZXkoKSB7XHJcbiAgICAvLyAgICAgdGhpcy53cm9uZ0Fuc3dlckNvdW50Kys7XHJcbiAgICAvLyAgICAgbGV0IHBvczogbnVtYmVyW10gPSBbLTEyMDAsIDEyMDBdO1xyXG4gICAgLy8gICAgIGxldCBqb2NrZXl0d2VlbjogbnVtYmVyW10gPSBbLTQwMCwgNDAwXTtcclxuICAgIC8vICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJjaGFyYWN0ZXJBcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLnggPSBwb3NbZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdO1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogam9ja2V5dHdlZW5bZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xyXG4gICAgLy8gICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bdGhpcy53cm9uZ0Fuc3dlckNvdW50ICUgNF0sIGZhbHNlKTtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHN0YXJ0R2FtZS5JbnN0YW5jZS5uZWdhdGl2ZVZPW3RoaXMud3JvbmdBbnN3ZXJDb3VudCAlIDJdLCBmYWxzZSlcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHN0YXJ0R2FtZS5JbnN0YW5jZS5Kb2NrZXlOb2RlKS50bygwLjUsIHsgeDogcG9zW2dsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xyXG4gICAgLy8gICAgIH0sIDEuNSk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WhatWillHappenNext/Assets/1_PIET/Jockey1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f1caKrSCRE+52HavZExzOB', 'Jockey1');
// Games/WhatWillHappenNext/Assets/1_PIET/Jockey1.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inAudio = null;
        _this.positiveVO = [];
        _this.negativeVO = [];
        _this.positiveAnims = [];
        _this.negativeAnims = [];
        return _this;
        // update (dt) {}
    }
    Jockey_1 = Jockey;
    Object.defineProperty(Jockey, "Instance", {
        get: function () {
            return Jockey_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    Jockey.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    // LIFE-CYCLE CALLBACKS:
    Jockey.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        Jockey_1.instance = this;
        this.positiveAnims = ["positive_1", "positive_2"];
        this.negativeAnims = ["negative_1", "negative_2"];
    };
    Jockey.prototype.start = function () { };
    Jockey.prototype.CallJockey = function () {
        var _this = this;
        var num = this.getRandomNumber(0, 1);
        this.node.getComponent(sp.Skeleton).setAnimation(0, "in", false);
        cc.tween(this.node)
            .to(0.3, { x: -350, y: -340 }, { easing: "backOut" })
            .start();
        cc.audioEngine.playEffect(this.inAudio, false);
        //console.log("characterAppear--Puzzle");
        this.scheduleOnce(function () {
            _this.node
                .getComponent(sp.Skeleton)
                .setAnimation(0, _this.positiveAnims[num], false);
            cc.audioEngine.playEffect(_this.positiveVO[num], false);
            _this.scheduleOnce(function () {
                //console.log("characterDisappear--Puzzle");
                cc.tween(_this.node)
                    .to(0.3, { x: -1200 }, { easing: "backIn" })
                    .start();
            }, _this.positiveVO[num].duration);
        }, 0.3);
        return this.positiveVO[num].duration;
    };
    Jockey.prototype.CallJockeyNeg = function () {
        var _this = this;
        var num = this.getRandomNumber(0, 1);
        this.node.getComponent(sp.Skeleton).setAnimation(0, "in", false);
        cc.tween(this.node)
            .to(0.3, { x: -350, y: -340 }, { easing: "backOut" })
            .start();
        //console.log("characterAppear--Puzzle");
        cc.audioEngine.playEffect(this.inAudio, false);
        this.scheduleOnce(function () {
            _this.node
                .getComponent(sp.Skeleton)
                .setAnimation(0, _this.negativeAnims[num], false);
            console.log(_this.negativeAnims[num]);
            cc.audioEngine.playEffect(_this.negativeVO[num], false);
            _this.scheduleOnce(function () {
                //console.log("characterDisappear--Puzzle");
                cc.tween(_this.node)
                    .to(0.3, { x: -1200 }, { easing: "backIn" })
                    .start();
            }, _this.negativeVO[num].duration - 0.3);
        }, 0.3);
        return this.negativeVO[num].duration;
    };
    var Jockey_1;
    // LIFE-CYCLE CALLBACKS:
    Jockey.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], Jockey.prototype, "inAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Jockey.prototype, "positiveVO", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Jockey.prototype, "negativeVO", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXFdoYXRXaWxsSGFwcGVuTmV4dFxcQXNzZXRzXFwxX1BJRVRcXEpvY2tleTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1RkM7UUEvRU8sYUFBTyxHQUFpQixJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBbUIsRUFBRSxDQUFDO1FBR2hDLGdCQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUUvQixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixtQkFBYSxHQUFhLEVBQUUsQ0FBQzs7UUFxRXJDLGlCQUFpQjtJQUNsQixDQUFDO2VBdkZvQixNQUFNO0lBRzFCLHNCQUFXLGtCQUFRO2FBQW5CO1lBQ0MsT0FBTyxRQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBY00sZ0NBQWUsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLEdBQVc7UUFDOUMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUNDLHlDQUF5QztRQUN6QyxRQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FB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bnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb2NrZXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBKb2NrZXkgPSBudWxsO1xyXG5cdHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcblx0XHRyZXR1cm4gSm9ja2V5Lmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwdWJsaWMgaW5BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwdWJsaWMgcG9zaXRpdmVWTzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0QHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuXHRwdWJsaWMgbmVnYXRpdmVWTzogY2MuQXVkaW9DbGlwW10gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBwb3NpdGl2ZUFuaW1zOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByaXZhdGUgbmVnYXRpdmVBbmltczogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0cHVibGljIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0bGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHRfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcclxuXHRcdF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xyXG5cdFx0cmV0dXJuIF9udW1iZXI7XHJcblx0fVxyXG5cclxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Ly8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuXHRcdEpvY2tleS5pbnN0YW5jZSA9IHRoaXM7XHJcblxyXG5cclxuXHRcdHRoaXMucG9zaXRpdmVBbmltcyA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCJdO1xyXG5cdFx0dGhpcy5uZWdhdGl2ZUFuaW1zID0gW1wibmVnYXRpdmVfMVwiLCBcIm5lZ2F0aXZlXzJcIl07XHJcblx0fVxyXG5cclxuXHRzdGFydCgpIHsgfVxyXG5cclxuXHRDYWxsSm9ja2V5KCk6IG51bWJlciB7XHJcblx0XHRsZXQgbnVtID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoMCwgMSk7XHJcblx0XHR0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpblwiLCBmYWxzZSk7XHJcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUpXHJcblx0XHRcdC50bygwLjMsIHsgeDogLTM1MCwgeTogLTM0MCB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcclxuXHRcdFx0LnN0YXJ0KCk7XHJcblx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuaW5BdWRpbywgZmFsc2UpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUHV6emxlXCIpO1xyXG5cdFx0dGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm5vZGVcclxuXHRcdFx0XHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG5cdFx0XHRcdC5zZXRBbmltYXRpb24oMCwgdGhpcy5wb3NpdGl2ZUFuaW1zW251bV0sIGZhbHNlKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvc2l0aXZlVk9bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUHV6emxlXCIpO1xyXG5cdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuXHRcdFx0XHRcdC50bygwLjMsIHsgeDogLTEyMDAgfSwgeyBlYXNpbmc6IFwiYmFja0luXCIgfSlcclxuXHRcdFx0XHRcdC5zdGFydCgpO1xyXG5cdFx0XHR9LCB0aGlzLnBvc2l0aXZlVk9bbnVtXS5kdXJhdGlvbik7XHJcblx0XHR9LCAwLjMpO1xyXG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpdmVWT1tudW1dLmR1cmF0aW9uO1xyXG5cdH1cclxuXHJcblx0Q2FsbEpvY2tleU5lZygpOiBudW1iZXIge1xyXG5cdFx0bGV0IG51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDEpO1xyXG5cdFx0dGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaW5cIiwgZmFsc2UpO1xyXG5cdFx0Y2MudHdlZW4odGhpcy5ub2RlKVxyXG5cdFx0XHQudG8oMC4zLCB7IHg6IC0zNTAsIHk6IC0zNDAgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUHV6emxlXCIpO1xyXG5cdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmluQXVkaW8sIGZhbHNlKTtcclxuXHRcdHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5ub2RlXHJcblx0XHRcdFx0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcclxuXHRcdFx0XHQuc2V0QW5pbWF0aW9uKDAsIHRoaXMubmVnYXRpdmVBbmltc1tudW1dLCBmYWxzZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMubmVnYXRpdmVBbmltc1tudW1dKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5lZ2F0aXZlVk9bbnVtXSwgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUHV6emxlXCIpO1xyXG5cclxuXHRcdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUpXHJcblx0XHRcdFx0XHQudG8oMC4zLCB7IHg6IC0xMjAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pXHJcblx0XHRcdFx0XHQuc3RhcnQoKTtcclxuXHRcdFx0fSwgdGhpcy5uZWdhdGl2ZVZPW251bV0uZHVyYXRpb24gLSAwLjMpO1xyXG5cdFx0fSwgMC4zKTtcclxuXHRcdHJldHVybiB0aGlzLm5lZ2F0aXZlVk9bbnVtXS5kdXJhdGlvbjtcclxuXHR9XHJcblx0Ly8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

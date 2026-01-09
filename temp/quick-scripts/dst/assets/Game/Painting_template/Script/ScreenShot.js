
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
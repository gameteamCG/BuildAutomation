
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9TY3JlZW5TaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDBDQUFxQztBQUUvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRKQztRQXpKRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFDZCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUdaLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1Qiw0QkFBc0IsR0FBRyxJQUFJLENBQUM7O0lBNElsQyxDQUFDO0lBMUlHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUM7UUFDdkUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztJQUM5RSxDQUFDO0lBRUQsb0NBQWUsR0FBZixVQUFnQixNQUFnQjtRQUFoQyxpQkF3QkM7UUF2QkcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDM0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENB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VSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ25DLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzVCLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLHVCQUF1QjtZQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQixPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDMUM7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUF4SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1E7SUFSZCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNEo5QjtJQUFELGlCQUFDO0NBNUpELEFBNEpDLENBNUp1QyxFQUFFLENBQUMsU0FBUyxHQTRKbkQ7a0JBNUpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4vQ29tbW9uL0dsb2JhbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuU2hvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgY3VycmVudFBpYzogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGNhbWVyYUF1ZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHRleHR1cmUgPSBudWxsXG4gICAgX3dpZHRoID0gMDtcbiAgICBfaGVpZ2h0ID0gMDtcbiAgICBfc3ByaXRlOiBjYy5TcHJpdGU7XG5cbiAgICBwZXJzaXN0ZW50U2Nyb2xsTm9kZSA9IG51bGw7XG4gICAgcGVyc2lzdGVudFNjcm9sbFNjcmlwdCA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsU2NyaXB0ID0gR2xvYmFsLmluc3RhbmNlLlBlcnNpc3RlbnRTY3JvbGxJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW50U2Nyb2xsTm9kZSA9IEdsb2JhbC5pbnN0YW5jZS5QZXJzaXN0ZW50U2Nyb2xsSW5zdGFuY2Uubm9kZTtcbiAgICB9XG5cbiAgICBvblNjcmVubkNsaWNrZWQoX2V2ZW50OiBjYy5FdmVudCkge1xuICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2FtZXJhQXVkLCBmYWxzZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWtlU25hcHNob3QtLXRydWVcIik7XG4gICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbE5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGVyc2lzdGVudFNjcm9sbE5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSwgMyk7XG5cblxuICAgICAgICAvLyB0aGlzLmluaXQoKTtcblxuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY2FwdHVyZVxuICAgICAgICAvLyB0aGlzLmNhbWVyYS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgcGljRGF0YSA9IHRoaXMuaW5pdEltYWdlKCk7XG4gICAgICAgIC8vICAgICAvLyB0aGlzLmNyZWF0ZUNhbnZhcyhwaWNEYXRhKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2F2ZUZpbGUocGljRGF0YSk7XG4gICAgICAgIC8vICAgICB0aGlzLnNob3dUZXh0dXJlKHBpY0RhdGEpO1xuICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAvLyB9LCAwLjUsIDApO1xuICAgIH1cblxuICAgIHNob3dUZXh0dXJlKHBpY0RhdGEpIHtcblxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEocGljRGF0YSwgMzIsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xuICAgICAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xuXG4gICAgICAgIC8vIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgLy8gbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIC8vIHRoaXMuX3Nwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50PGNjLlNwcml0ZT4oY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGljLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG5cblxuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTY3JvbGxOb2RlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGljLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAxMDAwICogKDIpKVxuICAgIH1cblxuICAgIHNhdmVGaWxlKHBpY0RhdGEpIHtcbiAgICAgICAgaWYgKENDX0pTQikge1xuICAgICAgICAgICAgbGV0IGZpbGVQYXRoID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArICdyZW5kZXJfdG9fc3ByaXRlX2ltYWdlLnBuZyc7XG5cbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0ganNiLnNhdmVJbWFnZURhdGEocGljRGF0YSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgZmlsZVBhdGgpXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcInNhdmUgaW1hZ2UgZGF0YSBzdWNjZXNzLCBmaWxlOiBcIiArIGZpbGVQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwic2F2ZSBpbWFnZSBkYXRhIGZhaWxlZCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQsIGNjLmdmeC5SQl9GTVRfUzgpO1xuICAgICAgICB0aGlzLmNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICB9XG5cbiAgICAvLyBvdmVycmlkZSBpbml0IHdpdGggRGF0YVxuICAgIGNyZWF0ZUNhbnZhcyhwaWNEYXRhKSB7XG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoRGF0YShwaWNEYXRhLCAzMiwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG5cbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG4gICAgICAgIHNwcml0ZUZyYW1lLnNldFRleHR1cmUodGV4dHVyZSk7XG5cbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG5cbiAgICAgICAgbm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICBub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIC8vIHNldCBwb3NpdGlvblxuICAgICAgICBsZXQgd2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgIG5vZGUueCA9IHdpZHRoIC8gMjtcbiAgICAgICAgbm9kZS55ID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2FwdHVyZUFjdGlvbihub2RlLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBzcHJpdGUgYWN0aW9uXG4gICAgY2FwdHVyZUFjdGlvbihjYXB0dXJlLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBzY2FsZUFjdGlvbiA9IGNjLnNjYWxlVG8oMSwgMC4zKTtcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYyKHdpZHRoIC0gd2lkdGggLyA2LCBoZWlnaHQgLyA0KTtcbiAgICAgICAgbGV0IG1vdmVBY3Rpb24gPSBjYy5tb3ZlVG8oMSwgdGFyZ2V0UG9zKTtcbiAgICAgICAgbGV0IHNwYXduID0gY2Muc3Bhd24oc2NhbGVBY3Rpb24sIG1vdmVBY3Rpb24pO1xuICAgICAgICBjYXB0dXJlLnJ1bkFjdGlvbihzcGF3bik7XG4gICAgICAgIGxldCBibGlua0FjdGlvbiA9IGNjLmJsaW5rKDAuMSwgMSk7XG4gICAgICAgIC8vIHNjZW5lIGFjdGlvblxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGJsaW5rQWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBvdmVycmlkZVxuICAgIGluaXRJbWFnZSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnRleHR1cmUucmVhZFBpeGVscygpO1xuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMudGV4dHVyZS53aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdGhpcy50ZXh0dXJlLmhlaWdodDtcbiAgICAgICAgbGV0IHBpY0RhdGEgPSB0aGlzLmZpbHBZSW1hZ2UoZGF0YSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgICAgIHJldHVybiBwaWNEYXRhO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc29sdXRpb25cbiAgICBmaWxwWUltYWdlKGRhdGEsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBkYXRhIGFycmF5XG4gICAgICAgIGxldCBwaWNEYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICAgICAgbGV0IHJvd0J5dGVzID0gd2lkdGggKiA0O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgc3JvdyA9IGhlaWdodCAtIDEgLSByb3c7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBzcm93ICogd2lkdGggKiA0O1xuICAgICAgICAgICAgbGV0IHJlU3RhcnQgPSByb3cgKiB3aWR0aCAqIDQ7XG4gICAgICAgICAgICAvLyBzYXZlIHRoZSBwaWV4bHMgZGF0YVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dCeXRlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGljRGF0YVtyZVN0YXJ0ICsgaV0gPSBkYXRhW3N0YXJ0ICsgaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpY0RhdGE7XG4gICAgfVxufVxuIl19
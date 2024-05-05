"use strict";
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
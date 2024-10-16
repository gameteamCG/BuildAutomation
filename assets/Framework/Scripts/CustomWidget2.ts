// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Utils from "./Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CustomWidget extends cc.Component {

    @property(Number) private leftOffset: number = 0;
    @property(Number) private rightOffset: number = 0;
    @property(Number) private bottomOffset: number = 0;
    @property(Number) private topOffset: number = 0;

    private get leftEnd(): number {
        return -Utils.screenWidth / 2;
    }

    private get rightEnd(): number {
        return Utils.screenWidth / 2;
    }

    private get topEnd(): number {
        return Utils.screenHeight / 2;
    }

    private get bottomEnd(): number {
        return -Utils.screenHeight / 2;
    }

    onLoad() {
        this.Update(this.leftOffset, this.rightOffset, this.topOffset, this.bottomOffset);
    }

    Update(_leftOffset: number = undefined, _rightOffset: number = undefined, _topOffset: number = undefined, _bottomOffset: number = undefined) {
        let initPosition = this.node.getPosition();
        this.node.setPosition(0, 0);

        let _position: cc.Vec2 = this.node.getPosition();
        let _scale: cc.Vec2 = this.node.getScale(cc.v2());
        let _width: number = this.node.width;
        let _height: number = this.node.height;
        let _anchor: cc.Vec2 = cc.v2(this.node.anchorX, this.node.anchorY);

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
    }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Utils extends cc.Component {

    static get screenWidth(): number {
        if (this._screenWidth == undefined) {
            let _canvas: cc.Node = cc.find("Canvas");

            let _rightEnd: number = _canvas.getContentSize().width / 2
                + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
            this._screenWidth = _rightEnd * 2;
            let _topEnd: number = _canvas.getContentSize().height / 2
                + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
            this._screenHeight = _topEnd * 2;
        }
        return this._screenWidth;
    }

    /**
     * Screen height
     */
    static get screenHeight(): number {
        if (this._screenHeight == undefined) {
            let _canvas: cc.Node = cc.find("Canvas");

            let _rightEnd: number = _canvas.getContentSize().width / 2
                + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
            this._screenWidth = _rightEnd * 2;
            let _topEnd: number = _canvas.getContentSize().height / 2
                + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
            this._screenHeight = _topEnd * 2;
        }
        return this._screenHeight;
    }

    private static _screenWidth: number = undefined;
    private static _screenHeight: number = undefined;


}

const {ccclass, property} = cc._decorator;

@ccclass
export default class scratch extends cc.Component {

    @property({
        type: cc.Prefab
    })
    myMask1: cc.Prefab = null;
    
    @property({
        type: cc.Prefab
    })
    myMask2: cc.Prefab = null;

    
    @property({
        type: cc.Material
    })
    MyMaterial: cc.Material = null;
    @property({
        type: cc.Material
    })
    MyMaterial1: cc.Material = null;

    @property({
        displayName: "刮卡路径大小",
        min: 32
    })
    size: number = 32;

    usedBtn = 1;
    currentMask = null;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    _onTouchBegin (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }

    _onTouchMoved (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }

    onBtnClicked(){
        this.usedBtn *= -1;
        let mask = null;
        if(this.usedBtn == 1)
            mask = cc.instantiate(this.myMask1);
        if(this.usedBtn == -1)
            mask = cc.instantiate(this.myMask2);

        this.node.getChildByName("mask").addChild(mask);
        
        this.currentMask = mask.getComponent(cc.Mask);
    }

    _onTouchEnd (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }

    _addCircle (point) {
        // var stencil = this.myMask._graphics;
        // stencil.circle(point.x, point.y, this.size);
        // stencil.fill();
        

        
        var stencil1 = this.currentMask._graphics;
        stencil1.circle(point.x, point.y, this.size);
        stencil1.fill();

        return;

        if(this.usedBtn == 1)
        {
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
        else
        {
            // var stencil1 = this.myMask1._graphics;
            // stencil1.circle(point.x, point.y, this.size);
            // stencil1.close();

            var stencil2 = this.myMask2._graphics;
            stencil2.circle(point.x, point.y, this.size);
            // stencil2.setMaterial(0,this.MyMaterial1);
            // stencil2.fillColor.a = 255
            stencil2.fill();
        }
        
    }
}

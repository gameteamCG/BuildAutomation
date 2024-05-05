// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Draw extends cc.Component {

    touches: cc.Vec2[] = []
    graphics: cc.Graphics = null;
    
    usedBtn = 1;

    start () {
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
    
    setupDrawingNode(){
        
        // let drawingNode = cc.instantiate(this.drawingPrefab);
        // drawingNode.setPosition(new cc.Vec2(0, 0));
        // this.points[this.currentPos].mask.addChild(drawingNode);

        let graphicsNode = this.node.getChildByName("grap").getComponent(cc.Graphics);
        graphicsNode.moveTo(0, 0);
        graphicsNode.lineTo(0.1, 0);
        graphicsNode.lineTo(-0.11, 0);
        graphicsNode.stroke();

        return graphicsNode;
    }

    onTouchStart (event) {
        this.graphics = this.setupDrawingNode();

        if(this.usedBtn == 1)
        {
            this.touches.length = 0;
            this.touches.push(event.touch.getLocation());
        }
        else
        {
            this.graphics.setMaterial(0, this.graphics.getMaterial(1));
            // this.touches1.length = 0;
            // this.touches1.push(event.touch.getLocation());
        }
    }

    onTouchMove (event) {
        let touches = this.touches;
        touches.push(event.touch.getLocation());

        const MIN_POINT_DISTANCE = 2;

        this.graphics.clear();
        let worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        let lastIndex = 0;
        for (let i = 1, l = touches.length; i < l; i++) {
            if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) {
                continue;
            }
            lastIndex = i;
            this.graphics.lineTo(touches[i].x - worldPos.x, touches[i].y - worldPos.y);
        }
        this.graphics.stroke();
    }

    onTouchEnd (event) {
    }
    onBtnClicked(){
        this.usedBtn *= -1;
    }
}

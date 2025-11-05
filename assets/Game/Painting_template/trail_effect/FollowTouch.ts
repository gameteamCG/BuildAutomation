const { ccclass, property } = cc._decorator;

@ccclass
export default class TrailTouch extends cc.Component {

    @property({
        tooltip: "How fast node follows touch (1 = instant)"
    })
    followSpeed: number = 0.35;

    private targetPos: cc.Vec2 = cc.Vec2.ZERO;
    private following: boolean = false;

    onEnable() {
        const parent = this.node.parent;
        parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        const ps = this.node.getComponent(cc.ParticleSystem);
        if (ps) ps.stopSystem();
    }

    onDisable() {
        const parent = this.node.parent!;
        parent.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        parent.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        parent.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        parent.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    update(dt: number) {
        if (this.following) {
            // Smoothly move towards target position
            const current = this.node.getPosition();
            const newPos = current.lerp(this.targetPos, this.followSpeed);
            this.node.setPosition(newPos);
        }
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        const ps = this.node.getComponent(cc.ParticleSystem);
        if (ps) ps.resetSystem();

        const touchLoc = event.getLocation();
        this.targetPos = this.node.parent.convertToNodeSpaceAR(touchLoc);
        this.node.setPosition(this.targetPos);

        this.following = true;
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        const touchLoc = event.getLocation();
        this.targetPos = this.node.parent.convertToNodeSpaceAR(touchLoc);
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        this.following = false;
        const ps = this.node.getComponent(cc.ParticleSystem);
        if (ps) ps.stopSystem();
    }
}

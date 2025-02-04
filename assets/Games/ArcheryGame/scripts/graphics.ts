import roughArea from "./roughArea";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Graphics extends cc.Component {
  touches: cc.Vec2[] = [];
  graphics: cc.Graphics = null;
  maxPoints: number = 1000;
  isDrawing: boolean = false; // Track if a line is being drawn

  start() {
    var board = this.node.parent.parent.getChildByName("board");

    // Add touch event listeners
    board.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    board.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    board.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

    // Get the single Graphics component for the entire drawing
    this.graphics = this.getComponent(cc.Graphics);
    this.graphics.clear();
    this.touches.length = 0;
  }

  onTouchStart(event) {
    // Start a new path without clearing the previous drawings
    let touchLocation = event.touch.getLocation();
    this.touches.length = 0;
    this.touches.push(touchLocation);

    let worldPos = this.node.convertToWorldSpaceAR(cc.v2());
    this.graphics.moveTo(
      touchLocation.x - worldPos.x,
      touchLocation.y - worldPos.y
    );

    this.isDrawing = true; // Start drawing
  }

  onTouchMove(event) {
    if (!this.isDrawing) return; // Only draw if the touch has started

    let touchLocation = event.touch.getLocation();
    let touches = this.touches;
    touches.push(touchLocation);

    if (touches.length > this.maxPoints) {
      touches.shift();
    }

    let worldPos = this.node.convertToWorldSpaceAR(cc.v2());

    // Continue from the last point and draw to the new point
    this.graphics.lineTo(
      touchLocation.x - worldPos.x,
      touchLocation.y - worldPos.y
    );
    this.graphics.stroke();

    // Set the stroke color
    this.graphics.strokeColor =
      this.node.parent.parent.getComponent(roughArea).currentColor;
  }

  onTouchEnd(event) {
    // Finish drawing when touch ends
    this.isDrawing = false;
  }
}

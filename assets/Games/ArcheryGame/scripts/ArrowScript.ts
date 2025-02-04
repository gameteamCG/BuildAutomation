import { COLLISION_TAGS, GAME_EVENTS } from "../utils/Constants";
import EVENTS from "../utils/EventSystem";
import Target from "./Target";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ArrowScript extends cc.Component {
  private rigidBody: cc.RigidBody = null;

  protected onLoad(): void {
    this.rigidBody = this.node.getComponent(cc.RigidBody);
    this.rigidBody.gravityScale = 0;
  }

  onBeginContact(
    contact: cc.PhysicsContact,
    selfCollider: cc.PhysicsCollider,
    otherCollider: cc.PhysicsCollider
  ) {
    if (otherCollider.tag == COLLISION_TAGS.TARGET) {
      let otherTarget = otherCollider.node.getComponent(Target);
      console.log("collided with target");
      this.scheduleOnce(() => {
        this.rigidBody.type = cc.RigidBodyType.Static;
      }, 0.001);
      EVENTS.emit(GAME_EVENTS.HIT, otherTarget);
    }
    if (otherCollider.tag == COLLISION_TAGS.BOUNDS) {
      console.log("collided with boundary");
      EVENTS.emit(GAME_EVENTS.MISS);
    }
  }
}

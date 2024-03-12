declare namespace cc {
    interface Node {
        /**
        * Plays the given animation on the node.
        * Note: The node should have Animation component along with the animation clip.
        * @param clipName Name of the animation clip to be played.
        * @param repeatCount Number of times the animation should be repeated.
        * @param callback Callback after the animation is completed. Will not be invoked for looping animations.
        * @param wrapMode Updates the wrap mode of the animation.
        * @returns Animation duration. Will be 0 for looping animations. 
        */
        playAnimation(clipName: string, repeatCount?: number, callback?: Function, wrapMode?: cc.WrapMode): number;

        /**
        * Resets the animation to its initial frame.
        * @param animName Name of the animation clip to be reset.
        */
        resetAnim(animName?: string): void;

        /**
        * Blinks the node - Fades Out and Fades In.
        * @param blinkDuration Duration for each blink.
        * @param repeatCount Number of times to blink the node. Pass -1 to repeatForever.
        * @param callback Callback after the node is blinked 'n' number of times. 
        * @returns Tween Instance. Can be used to stop or control the tween. 
        */
        blinkNode(blinkDuration?: number, repeatCount?: number, callback?: Function): Tween;

        /**
        * Pulses the node - Scales Up and Scales Down.
        * @param scaleOffset Scale offset value to add/subtract when scaling up/down respectively.
        * @param pulseDuration Duration for each pulse.
        * @param repeatCount Number of times to pulse the node. Pass -1 to repeatForever.
        * @param callback Callback after the node is pulsed 'n' number of times. 
        * @param interval Interval between each pulse. Default is 0 (Continuous pulsing). 
        * @returns Tween Instance. Can be used to stop or control the tween. 
        */
        pulseNode(scaleOffset?: number, pulseDuration?: number, repeatCount?: number, callback?: Function, interval?: number): Tween;

        /**
        * Enables/Disables the node with a FadeIn/FadeOut effect respectively. 
        * @param isActive Sets the active state of the node.
        * @param duration Fade duration.
        * @param callback Callback after the node is FadedOut/FadedIn. 
        * @param easingType Type of Easing to be used for Tweening. Default - 'cubicOut'
        */
        setActive(isActive: boolean, duration?: number, callback?: Function, easingType?: string): void;

        /**
        * Moves the node to a given local position. 
        * @param finalPos Final position of the node.
        * @param duration Move duration.
        * @param callback Callback after the node has reached the final position. 
        * @param easingType Type of Easing to be used for Tweening. Default - 'smooth'
        */
        moveNode(finalPos: cc.Vec2, duration?: number, callback?: Function, easingType?: string): void;

        /**
        * Moves the node to the given node's position irrespective of their parents. 
        * @param otherNode Move towards this node.
        * @param duration Move duration.
        * @param callback Callback after the node has reached the final position. 
        * @param easingType Type of Easing to be used for Tweening. Default - 'smooth'
        */
        moveToNode(otherNode: cc.Node, duration?: number, callback?: Function, easingType?: string): void;

        /**
        * Moves the node to a given local position in a Curved path. 
        * @param finalPos Final position of the node.
        * @param jumpHeight  Height of the curved path.
        * @param duration Move duration.
        * @param callback Callback after the node has reached the final position. 
        */
        bezierMoveNode(finalPos: cc.Vec2, jumpHeight?: number, duration?: number, callback?: Function): void;

        /**
        * Rotates the node. 
        * @param angleValue Final angle of the node.
        * @param duration Rotation duration.
        * @param callback Callback after the node has rotated. 
        * @param easingType Type of Easing to be used for Tweening. Default - 'smooth' 
        */
        rotateNode(angleValue: number, duration?: number, callback?: Function, easingType?: string): void;

        /**
        * Scales the node. 
        * @param scaleValue Final scale of the node.
        * @param duration Rotation duration.
        * @param callback Callback after the node has scaled. 
        * @param easingType Type of Easing to be used for Tweening. Default - 'smooth' 
        */
        scaleNode(scaleValue: number, duration?: number, callback?: Function, easingType?: string): void;

        /**
        * Gets local position of the node in another node coordinate system.
        * @param otherNode Local position will be calculated based on the node coordinates of this node.
        * @param position Position to be calculated. Default - Current Position. 
        * @returns Local position of the node. 
        */
        inverseTransform(otherNode: cc.Node, position?: cc.Vec2): cc.Vec2;

        /**
        * Sets parent of the node while retaining the same position.
        * @param parentNode The new parent of the node. 
        */
        setParentWithSamePos(parentNode: Node): void;
    }
}

cc.Node.prototype.blinkNode = function (blinkDuration: number = 1, repeatCount: number = 1, callback?: Function) {
    if (this == null) return;

    this.active = true;
    let fadeOut = cc.tween().to(blinkDuration / 2, { opacity: 0 });
    let fadeIn = cc.tween().to(blinkDuration / 2, { opacity: 255 });

    if (repeatCount == -1) {
        return cc.tween(this).sequence(fadeOut, fadeIn).repeatForever().start();
    }
    return cc.tween(this)
        .sequence(fadeOut, fadeIn).repeat(repeatCount)
        .call(callback)
        .start();
}

cc.Node.prototype.pulseNode = function (scaleOffset: number = 0.5, pulseDuration: number = 1, repeatCount: number = 1, callback?: Function, interval: number = 0) {
    if (this == null) return;

    this.active = true;
    let scaleUp = cc.tween().by(pulseDuration / 2, { scale: scaleOffset });
    let scaleDown = cc.tween().by(pulseDuration / 2, { scale: -scaleOffset });
    let intervalDelay = cc.tween().delay(interval);
    let pulseTween = cc.tween(this).sequence(scaleUp, scaleDown, intervalDelay);
    if (repeatCount == -1) {
        return pulseTween.repeatForever().start();
    }
    return pulseTween.repeat(repeatCount)
        .call(callback)
        .start();
}

cc.Node.prototype.playAnimation = function (clipName: string, repeatCount: number = 1, callback?: Function, wrapMode?: cc.WrapMode): number {
    if (this == null) return 0;
    this.active = true;

    let animation = this.getComponent(cc.Animation);
    if (animation == null) return 0;

    let animState = animation.play(clipName);
    if (animState == null) return 0;

    if (wrapMode) animState.wrapMode = wrapMode;
    if (animState.wrapMode == cc.WrapMode.Loop) return 0;

    animState.repeatCount = repeatCount;
    let animDuration = (animState.duration / animState.speed) * repeatCount;

    cc.tween(this).delay(animDuration).call(callback).start();

    return animDuration;
}

cc.Node.prototype.resetAnim = function (animName?: string) {
    if (this == null) return;

    let animation = this.getComponent(cc.Animation);
    if (animation == null) return;

    animation.stop(animName);
    animation.setCurrentTime(0, animName);
}

cc.Node.prototype.setActive = function (isActive: boolean, duration: number = 1, callback?: Function, easingType: string = 'cubicOut') {
    if (this == null || this.active == isActive) return;

    if (isActive) {
        this.opacity = 0;
        this.active = true;
        var opacityValue = 255;
    }
    else {
        this.opacity = 255;
        var opacityValue = 0;
    }

    cc.tween(this).to(duration, { opacity: opacityValue }, { easing: easingType })
        .call(() => {
            if (!isActive) this.active = false;
            if (callback) callback();
        })
        .start();
}

cc.Node.prototype.moveNode = function (finalPos: cc.Vec2, duration: number = 1, callback?: Function, easingType: string = 'smooth') {
    if (this == null) return;

    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
}

cc.Node.prototype.moveToNode = function (otherNode: cc.Node, duration: number = 1, callback?: Function, easingType: string = 'smooth') {
    if (this == null) return;

    let finalPos = otherNode.inverseTransform(this.parent);

    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
}

cc.Node.prototype.bezierMoveNode = function (finalPos: cc.Vec2, jumpHeight: number = 200, duration: number = 1, callback?: Function) {
    if (this == null) return;

    let initPos = this.getPosition();
    let targetVector = finalPos.sub(initPos);

    let firstControlPoint = cc.v2(initPos.x + targetVector.x * 0.4, initPos.y + jumpHeight);
    let secondControlPoint = cc.v2(initPos.x + targetVector.x * 0.8, initPos.y + jumpHeight);

    cc.tween(this)
        .bezierTo(duration, firstControlPoint, secondControlPoint, finalPos)
        .call(callback)
        .start();
}

cc.Node.prototype.rotateNode = function (angleValue: number, duration: number = 1, callback?: Function, easingType: string = 'smooth') {
    if (this == null) return;

    cc.tween(this).to(duration, { angle: angleValue }, { easing: easingType })
        .call(callback)
        .start();
}

cc.Node.prototype.scaleNode = function (scaleValue: number, duration: number = 1, callback?: Function, easingType: string = 'smooth') {
    if (this == null) return;

    cc.tween(this).to(duration, { scale: scaleValue }, { easing: easingType })
        .call(callback)
        .start();
}

cc.Node.prototype.inverseTransform = function (otherNode: cc.Node, position: cc.Vec2 = null) {
    if (this == null) return cc.Vec2.ZERO;

    if (position == null) position = this.getPosition();
    let worldPos = this.parent.convertToWorldSpaceAR(position);
    let localPos = otherNode.convertToNodeSpaceAR(worldPos);
    return localPos;
}

cc.Node.prototype.setParentWithSamePos = function (parentNode: cc.Node) {
    if (this == null) return;

    let localPos = this.inverseTransform(parentNode);
    this.setParent(parentNode);
    this.setPosition(localPos);
}

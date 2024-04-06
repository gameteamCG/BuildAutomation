// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import startGame from "../../../Scripts/StartGame";



const { ccclass, property } = cc._decorator;

@ccclass
export default class ProgressBar extends cc.Component {

    private static instance: ProgressBar = null;
    @property(Boolean)
    private isVertical: boolean = false;

    @property(cc.SpriteFrame)
    private starImg: cc.SpriteFrame;
    @property(cc.Texture2D)
    private trailsImg: cc.Texture2D;

    @property(cc.AudioClip)
    private trailSounds: cc.AudioClip;
    @property(cc.AudioClip)
    private particleSounds: cc.AudioClip;
    @property(cc.AudioClip)
    private starPopSound: cc.AudioClip;

    private starsEarned: Boolean[] = [false, false, false];

    static get Instance() {
        return ProgressBar.instance
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.game.addPersistRootNode(this.node);
        ProgressBar.instance = this;
    }
    start() {

    }

    ProgressFill(_currentQues: number, starLog: boolean = true) {
        // this.createStarTrails(10, this.node);
        let particles = this.node.getChildByName("particles" + 1);
        let maxLevels = startGame.Instance.TotalLevels;//totalLevels
        let value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(0.5, { progress: value }, { easing: "sineInOut" }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (_currentQues != 0 && _currentQues < maxLevels && _currentQues < maxLevels / 2) {
            if (!this.starsEarned[0] && starLog) {
                this.starsEarned[0] = true;
                console.log("starsEarned--1");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels && this.node.getChildByName("stars").children[1].opacity == 0) {
            if (!this.starsEarned[1] && starLog) {
                this.starsEarned[1] = true;
                console.log("starsEarned--2");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels && this.node.getChildByName("stars").children[2].opacity == 0) {
            if (!this.starsEarned[2] && starLog) {
                this.starsEarned[2] = true;
                console.log("starsEarned--3");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[2]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        // _number = _number * this.shapes.length;
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;

    }

    createStarTrails(num: number, _node: cc.Node) {
        let rng_NumOfParticles = num;
        let _offset = 50
        for (let i = 0; i < rng_NumOfParticles; i++) {
            let NodePOS = _node.convertToWorldSpaceAR(this.node.parent.position);
            let rngX = this.getRandomNumber(_node.x - _offset, _node.x + _offset);
            let rngY = this.getRandomNumber(_node.y - _offset, _node.y + _offset);
            let particles = cc.instantiate(new cc.Node);
            let trail = cc.instantiate(new cc.Node);
            particles.parent = this.node.parent;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this.starImg;
            particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 600;
            particles.height = 600;
            particles.angle = this.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = `particles` + i;
            particles.opacity = 0;
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this.trailsImg;
            trail.getComponent(cc.MotionStreak).enabled = false;
            // trail.color = new cc.Color(252, 244, 0);
            this.scheduleOnce(() => {
                particles.getComponent(cc.AudioSource).play();
                cc.tween(particles).to(0.75, { width: 35, height: 35 }, { easing: `backOut` }).start();
                cc.tween(particles).to(0.25, { angle: 0 }, { easing: `cubicInOut` })
                    .to(0.25, { angle: 180 }, { easing: `cubicInOut` }).start().to(0.25, { angle: 360 }, { easing: `cubicInOut` });
                cc.tween(particles).to(0.25, { opacity: 255 }, { easing: `cubicInOut` }).call(() => {
                    this.scheduleOnce(() => {
                        trail.getComponent(cc.MotionStreak).minSeg = 10;
                        trail.getComponent(cc.MotionStreak).stroke = 20;
                        trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                        trail.getComponent(cc.MotionStreak).enabled = true;
                        trail.getComponent(cc.MotionStreak).fastMode = true;
                        cc.audioEngine.playEffect(this.trailSounds, false);
                        // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                        // particles.getComponent(cc.AudioSource).volume = 0.2;
                        // particles.getComponent(cc.AudioSource).play();

                        if (this.isVertical) {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                                new cc.Vec2(this.getRandomNumber(particles.x - 100, particles.x + 100), this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                                new cc.Vec2(this.node.x, this.node.y - this.node.getComponent(cc.ProgressBar).totalLength / 2 + (this.node.getComponent(cc.ProgressBar).totalLength * this.node.getComponent(cc.ProgressBar).progress))) //endpoint
                                .start();
                        }
                        else {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                                new cc.Vec2(this.getRandomNumber(particles.x - 100, particles.x + 100), this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                                new cc.Vec2(this.node.x - this.node.getComponent(cc.ProgressBar).totalLength / 2 + (this.node.getComponent(cc.ProgressBar).totalLength * this.node.getComponent(cc.ProgressBar).progress), this.node.y)) //endpoint
                                .start();
                        }

                        cc.tween(particles).to(0.75, { angle: -particles.angle / 2 }, { easing: `cubicInOut` }).start();
                        cc.tween(particles).to(0.75, { scale: 0 }, { easing: `cubicIn` }).call(() => {
                            particles.destroy();
                        }).start();
                    }, 0.5);
                }).start();
            }, 0.1 * (i + 1));
        }
    }


    // update (dt) {}
}

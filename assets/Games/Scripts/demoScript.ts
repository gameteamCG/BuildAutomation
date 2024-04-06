
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    dustImg: cc.SpriteFrame = null;

    @property(cc.Texture2D)
    dustTrailImg:cc.Texture2D = null;

    @property(String)
    WheelAnimations:String []= [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let _numOfParticles = 15;
        // this.playDustAnim(_numOfParticles, this.node);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim(_numOfParticles, this.node);
        // },0.25);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim2(_numOfParticles,10, this.node);
        // },0.5);
        // this.scheduleOnce(()=>{
        //     this.playDustAnim(_numOfParticles, this.node);
        // },0.75);
    }
    private getRandomNumber(min:number,max:number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
        
    }

    onClickPlayWheelAnim(event){
        let spineNode = this.node.getChildByName(`spine`);
        
        spineNode.getComponent(sp.Skeleton).setAnimation(0, event.target.name, false);
    }

    playDustAnim(num:number, _node:cc.Node){
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        let colorsArray:string [] = [`#ffffff`,`#ffff00`,`#fff00f`,`#ff00ff`,`#f00fff`,`#00ffff`,`#ff0000`,`#f0000f`,`#0000ff`];
        let rng_NumOfParticles = num;
        let _offset = 50
        for(let i = 0; i < rng_NumOfParticles; i++){
            let rngX = this.getRandomNumber(0, cc.winSize.width);
            let rngY = this.getRandomNumber(0, cc.winSize.width);
            let particles = cc.instantiate(new cc.Node);
            let trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = `particles`+i;
            particles.opacity = 0;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this.getRandomNumber(0, colorsArray.length-1)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            // trail.color = new cc.Color(252, 244, 0);
            let rngscale = this.getRandomNumber(10,300);
            let rngEntryTimer = this.getRandomNumber(0.5,1.5);
            let rngTimer1 = this.getRandomNumber(0.1,0.2);
            cc.tween(particles).to(rngTimer1, {width: rngscale, height: rngscale},{easing:`backOut`}).start();
            cc.tween(particles).bezierTo(rngTimer1, new cc.Vec2(300, 300), //start
            new cc.Vec2(this.getRandomNumber(0, cc.winSize.width), this.getRandomNumber(0, cc.winSize.height)), //curve range
            new cc.Vec2(this.getRandomNumber(0, cc.winSize.width), this.getRandomNumber(0, cc.winSize.height))) //endpoint
            .call(()=>{
                
                cc.tween(particles).to(rngEntryTimer+0.5,{angle: 0},{easing:`cubicInOut`})
                .to(0.25,{angle: 180},{easing:`cubicInOut`}).start().to(0.25,{angle: 360},{easing:`cubicInOut`});
                // cc.tween(particles).repeatForever().start();
                cc.tween(particles).to(4,{scaleX: particles.scaleX * -1}).start()
                cc.tween(particles).to(0.25,{opacity: 255},{easing:`cubicInOut`}).call(()=>{
                    this.schedule(()=>{
                        particles.opacity = 255;
                        cc.tween(particles).to(this.getRandomNumber(0.25,0.75), {opacity:this.getRandomNumber(0,50)}).start();
                    },this.getRandomNumber(0.1,0.25));
                    trail.getComponent(cc.MotionStreak).minSeg = this.getRandomNumber(1,5);
                    trail.getComponent(cc.MotionStreak).stroke = this.getRandomNumber(5,10);
                    trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                    trail.getComponent(cc.MotionStreak).color = new cc.Color(255,255,255);
                    trail.getComponent(cc.MotionStreak).enabled = true;
                    trail.getComponent(cc.MotionStreak).fastMode = true;
                    // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                    // particles.getComponent(cc.AudioSource).volume = 0.2;
                    // particles.getComponent(cc.AudioSource).play();
                    let rngTimer2 = this.getRandomNumber(0.1,2);
                    cc.tween(particles).bezierTo(rngTimer2, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(this.getRandomNumber(0, cc.winSize.width), this.getRandomNumber(0, cc.winSize.height)), //curve range
                            new cc.Vec2(this.getRandomNumber(0, cc.winSize.width), this.getRandomNumber(0, cc.winSize.height))) //endpoint
                            .start();
                    cc.tween(particles).to(rngTimer2,{angle: -particles.angle/2},{easing:`cubicInOut`}).start();
                    cc.tween(particles).to(rngTimer2+0.5, {scale: 0},{easing: `cubicIn`}).call(()=>{
                        particles.destroy();
                    }).start();
                    
                }).start();
            }).start();
            
        }
    }

    playDustAnim2(num1:number, num2:number, _node:cc.Node){
        console.log(`deDust2`);
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        let colorsArray:string [] = [`#ffffff`,`#ffff00`,`#fff00f`,`#ff00ff`,`#f00fff`,`#00ffff`,`#ff0000`,`#f0000f`,`#0000ff`];
        let rng_NumOfParticles = num1;
        let _offset = 50
        for(let i = 0; i < num1; i++){
            // let rngX = this.getRandomNumber(0, cc.winSize.width);
            // let rngY = this.getRandomNumber(0, cc.winSize.width);
            let particles = cc.instantiate(new cc.Node);
            let trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = 300;
            particles.y = 300;
            particles.addComponent(cc.Sprite).spriteFrame = this.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this.getRandomNumber(0, 359);
            particles.zIndex = -1;
            particles.name = `particles`+i;
            particles.opacity = 255;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this.getRandomNumber(0, colorsArray.length-1)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).minSeg = 0.1;
            trail.getComponent(cc.MotionStreak).stroke = this.getRandomNumber(10, 25);
            trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
            trail.getComponent(cc.MotionStreak).color = new cc.Color(255,255,255);
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).fastMode = true;
            this.scheduleOnce(()=>{
                cc.tween(particles).to(0.5, {width: 100, height: 100},{easing:`backOut`}).call(()=>{
                    cc.tween(particles).bezierTo(1, new cc.Vec2(particles.x, particles.y), 
                    new cc.Vec2(this.getRandomNumber(particles.x, cc.winSize.width), this.getRandomNumber(particles.y, cc.winSize.height)), 
                    new cc.Vec2(this.getRandomNumber(cc.winSize.width/4, 3* cc.winSize.width/4), this.getRandomNumber(cc.winSize.height/4, 3* cc.winSize.height/4))).call(()=>{
                        for(let j = 0; j < num2; j++){
                            let bullets = cc.instantiate(new cc.Node);
                            let bTrails = cc.instantiate(new cc.Node);
                            bullets.addComponent(cc.Sprite).spriteFrame = this.dustImg;
                            bTrails.parent = bullets;
                            bTrails.addComponent(cc.MotionStreak).preview;
                            bTrails.getComponent(cc.MotionStreak).texture = this.dustTrailImg;
                            bTrails.getComponent(cc.MotionStreak).enabled = true;
                            bTrails.getComponent(cc.MotionStreak).minSeg = 0.1;
                            bTrails.getComponent(cc.MotionStreak).stroke = this.getRandomNumber(10, 25);
                            bTrails.getComponent(cc.MotionStreak).fadeTime = 0.2;
                            bTrails.getComponent(cc.MotionStreak).color = new cc.Color(255,255,255);
                            bTrails.getComponent(cc.MotionStreak).enabled = true;
                            bTrails.getComponent(cc.MotionStreak).fastMode = true;
                            bullets.width = 100;
                            bullets.height = 100;
                            // bullets.angle = this.getRandomNumber(0, 359);
                            bullets.name = `bullets`+j; 
                            bullets.parent = particles;
                            bullets.x = 0;
                            bullets.y = 0;
                            bullets.color = cc.Color.fromHEX(particles.color, colorsArray[this.getRandomNumber(0, colorsArray.length-1)]);
                            let rngDistance = 500;
                            cc.tween(bullets).to(1, {x: this.getRandomNumber(bullets.x - this.getRandomNumber(100,500), bullets.x + this.getRandomNumber(100,500)), y: this.getRandomNumber(bullets.y - this.getRandomNumber(100,500), bullets.y + this.getRandomNumber(100,500))}).start();
                            cc.tween(bullets).to(0.2,{opacity: 100}).to(0.2,{opacity: 255}).to(0.2,{opacity: 100}).to(0.2,{opacity: 255}).to(0.2,{opacity: 100, scale: 0}).call(()=>{
                                bullets.destroy();
                                particles.destroy();
                            }).start();

                        }
                    }).start();
                }).start();
            },0.25*(i+1));            
        }
    }


    // update (dt) {}
}

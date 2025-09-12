const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    introVO: cc.AudioClip = null;

    @property(cc.AudioClip)
    exitVO: cc.AudioClip = null;

    @property(cc.RichText)
    richText: cc.RichText = null;

    @property
    typingSpeed: number = 0.1;
    private currentIndex: number = 0;
    private currentIntro: number = 0;
    private currentText: string = '';
    delay: number[] = [];
    duration: number[] = [];
    text: string;
    TextArray: string[] = []

    onLoad() {
        cc.director.preloadScene("1");
        this.duration = [2.8, 6, 3.9, 6, 6, 4, 5, 2.8, 4.3, 4.5, 2.2, 6.2, 5, 4]
        this.TextArray = [
            "Uses of air",
            "Today we will explore the many ways we use air every day.",
            "Plants need air to make their food.",
            "Air is filled into footballs, balloons, and swimming tubes.",
            "It helps us ride bicycles by filling up the tyres with air.",
            "Air dries our clothes after washing.",
            "It helps things burn — like when we cook food.",
            "Air moves things!",
            "It helps kites and parachutes fly.",
            "Wind pushes boats to sail on water.",
            "Do you know?",
            "A flute and a trumpet make music when we blow air into them!",
            "So, air is really useful in many ways.",
            "It helps us work, play and stay alive!"
        ]
    }

    typeLetter() {
        if (this.currentIndex < this.text.length) {
            this.currentText += this.text[this.currentIndex];
            this.richText.string = this.currentText;
            this.currentIndex++;
        } else {
            this.unschedule(this.typeLetter);
        }
    }

    resetText() {
        this.currentIntro++;
        this.richText.string = "";
        this.currentIndex = 0;
        this.currentText = '';
        this.unschedule(this.typeLetter);
        this.text = this.TextArray[this.currentIntro];
    }

    callCurrentText() {
        this.schedule(this.typeLetter, this.typingSpeed);
        this.node.getChildByName("cryon").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.scheduleOnce(() => {
            this.node.getChildByName("cryon").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            this.resetText();
            if (this.currentIntro == this.duration.length) {
                this.callEnd();
            }
            else {
                this.callCurrentText();
            }
        }, this.duration[this.currentIntro])
    }

    start() {
        this.text = this.TextArray[this.currentIntro];
        this.callCurrentText();
        this.node.getChildByName("spine").active = true;
        cc.audioEngine.playEffect(this.introVO, false);
    }

    callEnd() {
        cc.audioEngine.playEffect(this.exitVO, false);
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(() => {
            this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            this.scheduleOnce(() => {
                cc.director.loadScene("1");
            }, 0.8)
        }, 2.5)
    }

    skipGame() {
        cc.audioEngine.stopAllEffects();
        this.node.getChildByName("cryon").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.unscheduleAllCallbacks();
        this.node.getChildByName("transition").getComponent(cc.Animation).play("anim");
        this.scheduleOnce(() => {
            this.node.getChildByName("transition").getComponent(cc.Animation).play("anim2");
            this.scheduleOnce(() => {
                this.node.getChildByName("spine").active = false;
                this.node.children[0].children[0].active = false;
                cc.director.loadScene("1");
            }, 0.8)
        }, 2.5)
    }
}
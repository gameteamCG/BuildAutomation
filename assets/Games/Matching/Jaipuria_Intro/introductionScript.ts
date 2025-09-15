
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
        this.duration = [7.2, 9.8, 7.8, 5.3, 4.9, 5.6, 8.5, 4.8, 6.4, 8]
        this.TextArray = [
            "Uniforms are special clothes worn by people who do special kinds of work.",
            "These clothes help us know what kind of job they do.\n Can you think of someone who wears a uniform?",
            "Look! A police officer wears a uniform to help keep us safe.",
            "A pilot wears a uniform to fly aeroplanes.",
            "Soldiers wear uniforms to protect our country.",
            "A firefighter wears a uniform to put out fires.",
            "There are many others too!\n A chef wears a uniform while cooking tasty food.",
            "A lawyer wears a black coat to work in court.",
            "A nurse wears a uniform in the hospital to take care of sick people.",
            "And just like all of you —\n a student wears a school uniform to come and learn every day.",
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
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "talk action loop", true);
        this.scheduleOnce(() => {
            this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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
        this.node.getChildByName("jockey").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
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
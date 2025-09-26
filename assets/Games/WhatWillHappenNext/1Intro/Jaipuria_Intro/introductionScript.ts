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
        this.duration = [5.1, 3.7, 4, 3.3, 5.8, 4.2, 4.4, 4.7, 4.8, 4.3, 4.2, 5.5, 4.7, 4.2, 4, 5.2]
        this.TextArray = [
            "Today, we’re going to learn about monuments in Bharat!",
            "Let’s learn about monuments in Bharat!",
            "Monuments are old and special buildings.",
            "They tell us stories from the past.",
            "People built them to remember kings, queens, and great events.",
            "Let’s visit some famous monuments of Bharat:",
            "Qutub Minar in Delhi – a very tall tower.",
            "Hawa Mahal in Jaipur – a palace with many windows.",
            "Charminar in Hyderabad – has four tall towers.",
            "Gwalior Fort in Gwalior – a big fort on a hill.",
            "Rang Ghar in Assam – used for watching games.",
            "Brihadeeswara Temple in Thanjavur – a very old temple.",
            "Bara Imambara in Lucknow – a beautiful building.",
            "Sun Temple in Konark – shaped like a chariot.",
            "These places are part of our proud history!",
            "Let’s learn to know them and keep them clean when we visit."
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
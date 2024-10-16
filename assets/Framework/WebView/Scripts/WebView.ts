import startGame from "../../../Framework/Scripts/StartGame";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WebView extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    webViewContainer: HTMLElement = null;
    @property(String)
    private correctAnswer: string = "600";
    @property(String)
    private webLink: string = "https://plans.littlesingham.me/";
    @property(cc.AudioClip)
    private vo_aud: cc.AudioClip = null;
    private currentAnswer: string = "";
    private currentMobile: string = "";
    private static instance: WebView = null;
    private maxStringLength = 3;
    private MobileNumberNeeded: boolean = false;

    private question: String[] = ["300+250", "200+250", "250+250", "500+250", "600+200",
        "350+350", "450+50", "650+50", "750+50", "850+50", "450+100", "550+100", "100+550", "750+100"];

    static get Instance() {
        return WebView.instance;
    }

    onLoad() {
        WebView.instance = this;
    }

    start() {


    }

    CheckForWebView(isMobileNumberNeeded: boolean = false) {
        let parts: string[] = this.question[this.getRandomNumber(0, this.question.length - 1)].split("+");
        this.node.getChildByName("Captcha").children[0].getChildByName("Context2").getComponent(cc.Label).string = parts[0] + " + " + parts[1];
        this.correctAnswer = ((parseInt(parts[0])) + (parseInt(parts[1]))).toString();
        this.MobileNumberNeeded = isMobileNumberNeeded;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.vo_aud, false);
        //if player has the access captcha screen will be poped up, else game will continue
        if (!startGame.Instance.hasAccess) {
            // console.log("InitiatePaywallCaptcha--true");

            // if (startGame.Instance.mobileNumber != null) {
            //     console.log("mobileNumber--" + startGame.Instance.mobileNumber);
            // }
            if (isMobileNumberNeeded && !startGame.Instance.hasMobile) {
                this.node.getChildByName("Captcha").active = true;
                console.log("logEvent--MobileCaptcha--showed");
                this.PopIn(this.node.getChildByName("Captcha").children[1], 1.5);
                // this.node.getChildByName("Captcha").children[1].active = true;
                this.node.getChildByName("Captcha").children[0].active = false;
                if (startGame.Instance.isMusicOn) {
                    cc.audioEngine.stopMusic();
                }
            }
            else {
                // this.OnContinue();
                this.node.getChildByName("Captcha").active = true;
                console.log("logEvent--PaymentCaptcha--showed");
                this.PopIn(this.node.getChildByName("Captcha").children[0], 1.5);
                // this.node.getChildByName("Captcha").children[0].active = true;
                this.node.getChildByName("Captcha").children[1].active = false;
                if (startGame.Instance.isMusicOn) {
                    cc.audioEngine.stopMusic();
                }
            }
            return;
        }

        // console.log("Player can play the level since he has the access");
    }

    private getRandomNumber(min: number, max: number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;

    }

    PopIn(_node: cc.Node, _scale: number = 1) {
        _node.scale = 0;
        _node.active = true;
        cc.tween(_node).to(0.4, { scale: _scale }, { easing: "backOut" }).start();
    }
    PopOut(_node: cc.Node, _scale: number = 1) {
        _node.scale = _scale;
        cc.tween(_node).to(0.4, { scale: 0 }, { easing: "backIn" }).start();
        this.scheduleOnce(() => {
            _node.getParent().active = false;
        }, 0.4);
    }

    initWebview() {
        const iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        // iframe.src = "http://192.168.1.109:3003";
        iframe.src = this.webLink;
        const webViewContainer = iframe;
        webViewContainer.style["position"] = "absolute";
        webViewContainer.style["top"] = "0";
        webViewContainer.style["left"] = "0";
        webViewContainer.style["width"] = "100%";
        webViewContainer.style["height"] = "100%";
        const resizeIframe = () => { };
        resizeIframe();
        this.webViewContainer = webViewContainer;
    }

    OnClose() {
        console.log("logEvent--captcha--closed");
        cc.audioEngine.stopAllEffects();
        // this.node.children[0].active = false;

        if (this.node.children[0].children[0].activeInHierarchy) {
            this.PopOut(this.node.children[0].children[0], 1.5);
        }
        if (this.node.children[0].children[1].activeInHierarchy) {
            this.PopOut(this.node.children[0].children[1], 1.5);
        }
        this.node.children[0].getChildByName("web").active = false;
        this.currentAnswer = "";
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
        if (startGame.Instance.isMusicOn) {
            let id = cc.audioEngine.playMusic(startGame.Instance.BGM_audio, true);
            cc.audioEngine.setVolume(id, startGame.Instance.volume);
        }
    }

    CheckForMobileNumber(_event: cc.Event) {
        if (this.currentMobile.length < 10 || this.currentMobile == "") {

            if (_event.target.name != "x") {
                if (this.currentMobile.length < 10)
                    this.currentMobile = this.currentMobile + _event.target.name;
            }
            else {
                let len: number = this.currentMobile.length;
                let name: string = "";
                for (let i = 0; i < len - 1; i++) {
                    name += this.currentMobile[i];
                }
                this.currentMobile = name;
            }
            if (this.currentMobile == "") {
                this.node.children[0].children[1].getChildByName("ans").children[1].active = true;
            }
            else {
                this.node.children[0].children[1].getChildByName("ans").children[1].active = false;
            }
            this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
            if (this.currentMobile.length >= 10) {
                startGame.Instance.hasMobile = true;

                startGame.Instance.hasAccess = true;
                console.log("mobileNumber--" + this.currentMobile);
                this.node.children[0].children[0].active = false;
                this.PopOut(this.node.children[0].children[1], 1.5);
                this.scheduleOnce(() => {
                    this.node.children[0].active = false;
                }, 0.4);
            }
        }



    }

    CheckForCorrectAnswer(_event: cc.Event) {
        if (_event.target.name != "x") {
            if (this.currentAnswer.length < 3)
                this.currentAnswer = this.currentAnswer + _event.target.name;
        }
        else {
            let len: number = this.currentAnswer.length;
            let name: string = "";
            for (let i = 0; i < len - 1; i++) {
                name += this.currentAnswer[i];
            }
            this.currentAnswer = name;

        }
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        if (this.currentAnswer == this.correctAnswer) {
            // this.OnContinue();
            console.log("logEvent--captcha--correct");
            console.log("Initiate_payment--true");
            console.log("Restart_level--" + startGame.Instance.currentLevel);
        }
        else {
            let len: number = this.currentAnswer.length;
            let name: string = "";
            for (let i = 0; i < len; i++) {
                if (this.currentAnswer[i] == this.correctAnswer[i]) {
                    name += this.currentAnswer[i];
                }
                else if (_event.target.name != "x") {
                    cc.tween(this.node.children[0].children[0].getChildByName("ans")).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                        .to(0.1, { color: cc.Color.WHITE }).start();
                    console.log("logEvent--captcha--wrong");
                    this.scheduleOnce(() => {
                        this.currentAnswer = name;
                        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
                    }, 0.4);
                    break;
                }
            }
        }
    }

    GameContinues() {

    }

    OnContinue() {
        // this.node.children[0].active = true;
        this.initWebview();
        if (startGame.Instance.isMusicOn) {
            cc.audioEngine.stopMusic();
        }
        window.addEventListener(
            "message",
            (event) => {
                console.log(`onLoad ` + event.data);
                if (event.data == `Subscription--Yes`) {
                    startGame.Instance.hasAccess = true;
                    this.webViewContainer.remove();
                    this.node.children[0].getChildByName("web").active = false;
                    this.node.children[0].active = false;
                    if (startGame.Instance.isMusicOn) {
                        let id = cc.audioEngine.playMusic(startGame.Instance.BGM_audio, true);
                        cc.audioEngine.setVolume(id, startGame.Instance.volume);
                    }
                }
                if (event.data == `Subscription--No`) {
                    startGame.Instance.hasAccess = false;
                    this.webViewContainer.remove();
                    // this.node.children[0].children[0].active = false;
                    // this.node.children[0].children[1].active = true;

                    this.node.children[0].children[0].active = true;
                    this.currentAnswer = "";
                    this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;

                    // if (startGame.Instance.isMusicOn) {
                    //     cc.audioEngine.playMusic(startGame.Instance.BGM_audio, true);
                    //     cc.audioEngine.setVolume(0, 0.2);
                    // }

                }
            },
            false
        );
    }

    // update (dt) {}
}
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import globalVariables from "./globalVariables";
import startGame from "./StartGame";
const {ccclass, property} = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {


    @property(cc.AudioClip)
    private progress:cc.AudioClip;
    // LIFE-CYCLE CALLBACKS:
    private filling1: number = 0;
    private filling2: number = 0;
    private filling3: number = 0;
    private showNum1: number = 0;
    private num1: number = 0;
    private num2: number = 0;
    private currentTween: number = 0;
    private playerScore: number = 0;

    // onLoad () {}

    start () {
        this.node.getChildByName("btn_share").y = globalVariables.Instance.canvasTopY;
        //console.log("timer "+globalVariables.Instance.totalTimer);
        //globalVariables.Instance.totalTimer = 190;
        //globalVariables.Instance.rightAnswerCount = 1;
        this.findPlayerScore();
        this.currentTween = 1;
        this.node.getChildByName("averageParentMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = "0";
        this.node.getChildByName("averageKidsMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = "0";
        this.node.getChildByName("playerMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string = "0";
        this.num1 = this.getRandomNumber(50,75);
        
        this.setFillingRange("1");
        this.num2 = this.getRandomNumber(80,90);
        
        this.setFillingRange("2");
        
        this.setFillingRange("3");

        
        cc.tween(this.node.getChildByName("averageParentMeter").getChildByName("child").getComponent(cc.Sprite)).to(1, { fillRange: this.filling1 }).start();
        //this.node.getComponent(cc.AudioSource).play();

        this.scheduleOnce(() => {
            this.currentTween = 2;
            this.showNum1 = 0;
            //this.node.getComponent(cc.AudioSource).play();
            cc.tween(this.node.getChildByName("averageKidsMeter").getChildByName("child").getComponent(cc.Sprite)).to(1, { fillRange: this.filling2 }).start();
        }, 2);

        this.scheduleOnce(() => {
            this.currentTween = 3;
            this.showNum1 = 0;
            //this.node.getComponent(cc.AudioSource).play();
            cc.tween(this.node.getChildByName("playerMeter").getChildByName("child").getComponent(cc.Sprite)).to(1, { fillRange: this.filling3 }).start();
        }, 4);
        
    }

    private getRandomNumber(min:number,max:number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
        
    }

    update (dt) {
        if(this.showNum1< this.num1 && this.currentTween==1){
            this.showNum1+=1;
            this.node.getChildByName("averageParentMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string=(Math.round(this.showNum1)).toString();
            if(this.showNum1==this.num1){
                
            }
        }
        if(this.showNum1< this.num2 && this.currentTween==2){
            this.showNum1+=1;
            this.node.getChildByName("averageKidsMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string=(Math.round(this.showNum1)).toString();
            if(this.showNum1==this.num2){
                //this.currentTween = 3;
                //this.showNum1 = 0;
            }
        }
        if(this.showNum1< this.playerScore && this.currentTween==3){
            this.showNum1+=1;
            this.node.getChildByName("playerMeter").getChildByName("round").getChildByName("roundNum").getComponent(cc.Label).string=(Math.round(this.showNum1)).toString();
            if(this.showNum1==this.playerScore){
                //this.currentTween = 3;
                //this.showNum1 = 0;
            }
        }
    }

    findPlayerScore(){
        if(globalVariables.Instance.rightAnswerCount==6){
            if(globalVariables.Instance.totalTimer<=10){
                this.playerScore = 100;
            }
            else if(globalVariables.Instance.totalTimer>=11 && globalVariables.Instance.totalTimer<=30){
                this.playerScore = 95;
            }
            else if(globalVariables.Instance.totalTimer>=31 && globalVariables.Instance.totalTimer<=50){
                this.playerScore = 90;
            }
            else if(globalVariables.Instance.totalTimer>=51 && globalVariables.Instance.totalTimer<=60){
                this.playerScore = 90;
            }
            else if(globalVariables.Instance.totalTimer>=61 && globalVariables.Instance.totalTimer<=90){
                this.playerScore = 80;
            }
            else if(globalVariables.Instance.totalTimer>=91 && globalVariables.Instance.totalTimer<=120){
                this.playerScore = 70;
            }
            else if(globalVariables.Instance.totalTimer>=121){
                this.playerScore = 55;
            }
        }
        else if(globalVariables.Instance.rightAnswerCount==5){
            if(globalVariables.Instance.totalTimer<=10){
                this.playerScore = 95;
            }
            else if(globalVariables.Instance.totalTimer>=11 && globalVariables.Instance.totalTimer<=30){
                this.playerScore = 85;
            }
            else if(globalVariables.Instance.totalTimer>=31 && globalVariables.Instance.totalTimer<=50){
                this.playerScore = 75;
            }
            else if(globalVariables.Instance.totalTimer>=51 && globalVariables.Instance.totalTimer<=60){
                this.playerScore = 65;
            }
            else if(globalVariables.Instance.totalTimer>=61 && globalVariables.Instance.totalTimer<=90){
                this.playerScore = 62;
            }
            else if(globalVariables.Instance.totalTimer>=91 && globalVariables.Instance.totalTimer<=120){
                this.playerScore = 60;
            }
            else if(globalVariables.Instance.totalTimer>=121){
                this.playerScore = 35;
            }   
        }
        else if(globalVariables.Instance.rightAnswerCount==4){
            if(globalVariables.Instance.totalTimer<=10){
                this.playerScore = 65;
            }
            else if(globalVariables.Instance.totalTimer>=11 && globalVariables.Instance.totalTimer<=30){
                this.playerScore = 62;
            }
            else if(globalVariables.Instance.totalTimer>=31 && globalVariables.Instance.totalTimer<=50){
                this.playerScore = 60;
            }
            else if(globalVariables.Instance.totalTimer>=51 && globalVariables.Instance.totalTimer<=60){
                this.playerScore = 50;
            }
            else if(globalVariables.Instance.totalTimer>=61 && globalVariables.Instance.totalTimer<=90){
                this.playerScore = 40;
            }
            else if(globalVariables.Instance.totalTimer>=91 && globalVariables.Instance.totalTimer<=120){
                this.playerScore = 20;
            }
            else if(globalVariables.Instance.totalTimer>=121){
                this.playerScore = 18;
            }   
        }
        else if(globalVariables.Instance.rightAnswerCount==3){
            if(globalVariables.Instance.totalTimer<=10){
                this.playerScore = 50;
            }
            else if(globalVariables.Instance.totalTimer>=11 && globalVariables.Instance.totalTimer<=30){
                this.playerScore = 40;
            }
            else if(globalVariables.Instance.totalTimer>=31 && globalVariables.Instance.totalTimer<=50){
                this.playerScore = 30;
            }
            else if(globalVariables.Instance.totalTimer>=51 && globalVariables.Instance.totalTimer<=60){
                this.playerScore = 25;
            }
            else if(globalVariables.Instance.totalTimer>=61 && globalVariables.Instance.totalTimer<=90){
                this.playerScore = 20;
            }
            else if(globalVariables.Instance.totalTimer>=91 && globalVariables.Instance.totalTimer<=120){
                this.playerScore = 12;
            }
            else if(globalVariables.Instance.totalTimer>=121){
                this.playerScore = 10;
            }
        }
        else if(globalVariables.Instance.rightAnswerCount==2){
            if(globalVariables.Instance.totalTimer<=10){
                this.playerScore = 25;
            }
            else if(globalVariables.Instance.totalTimer>=11 && globalVariables.Instance.totalTimer<=30){
                this.playerScore = 20;
            }
            else if(globalVariables.Instance.totalTimer>=31 && globalVariables.Instance.totalTimer<=50){
                this.playerScore = 15;
            }
            else if(globalVariables.Instance.totalTimer>=51 && globalVariables.Instance.totalTimer<=60){
                this.playerScore = 22;
            }
            else if(globalVariables.Instance.totalTimer>=61 && globalVariables.Instance.totalTimer<=90){
                this.playerScore = 18;
            }
            else if(globalVariables.Instance.totalTimer>=91 && globalVariables.Instance.totalTimer<=120){
                this.playerScore = 8;
            }
            else if(globalVariables.Instance.totalTimer>=121){
                this.playerScore = 4;
            }
        }
        else if(globalVariables.Instance.rightAnswerCount==1){
            if(globalVariables.Instance.totalTimer<=10){
                this.playerScore = 12;
            }
            else if(globalVariables.Instance.totalTimer>=11 && globalVariables.Instance.totalTimer<=30){
                this.playerScore = 10;
            }
            else if(globalVariables.Instance.totalTimer>=31 && globalVariables.Instance.totalTimer<=50){
                this.playerScore = 8;
            }
            else if(globalVariables.Instance.totalTimer>=51 && globalVariables.Instance.totalTimer<=60){
                this.playerScore = 4;
            }
            else if(globalVariables.Instance.totalTimer>=61 && globalVariables.Instance.totalTimer<=90){
                this.playerScore = 2;
            }
            else if(globalVariables.Instance.totalTimer>=91 && globalVariables.Instance.totalTimer<=120){
                this.playerScore = 2;
            }
            else if(globalVariables.Instance.totalTimer>=121){
                this.playerScore = 1;
            }
        }
        else{
            this.playerScore = 0;
        }
    }

    setFillingRange(name: string){
        if(name == "1"){
            this.filling1=this.num1 * (0.5/100);
        }
        else if(name == "2"){
            this.filling2=this.num2 * (0.5/100);
        }
        else if(name == "3"){
            this.filling3=this.playerScore * (0.5/100);
            gtag('event', "PlayerScore", {
                'event_category': "Image",
                'event_label': "Player Score",
                'value': this.playerScore
            });
        }
        
        
        
    }

    callMoreQuizes(event:cc.Event){
        let name = event.target.getChildByName("text").getComponent(cc.Label).string;
        console.log(name);
        gtag('event', name, {
            'event_category': "Image",
            'event_label': "More Quiz Selection",
            'value': this.playerScore
        });
        if(event.target.name == "sub1"){
            cc.sys.openURL("https://quiz.littlesingham.me/geography/");
        }
        else if(event.target.name == "sub2"){
            cc.sys.openURL("https://quiz.littlesingham.me/science/");
        }
        else if(event.target.name == "sub3"){
            cc.sys.openURL("https://quiz.littlesingham.me/independenceday/");
        }
        else if(event.target.name == "sub4"){
            cc.sys.openURL("https://quiz.littlesingham.me/countriesandflags/");
        }
        else if(event.target.name == "sub5"){
            cc.sys.openURL("https://quiz.littlesingham.me/nationalsymbols/");
        }
    }

    callShareAPI() {
        //console.log("call  share api$$$$$$");
        let text1 = "Let's see if you can beat my score in this fun trivia?"
        //let text2 = "Take this Science Trivia. If you score 50% and above, take a bow, you are a certified GENIUS!";
        //let text3 = "Take this Science Trivia. If you score 50% and above, take a bow, you are a certified GENIUS!";
        //let text4 = "Take this Science Trivia. If you score 50% and above, take a bow, you are a certified GENIUS!";
        let textArray = [text1];
        //let textArray = [text1, text2, text3, text4];
        let n1 = Math.floor(Math.random() * textArray.length);
        if (navigator.share) {
            navigator.share({
                title: 'How big a science buff are you?',
                text: textArray[n1],
                url: 'https://quiz.littlesingham.me/independenceday',
            })
                .then(() => console.log('Successful share'))
                .
            catch ((error) => console.log('Error sharing', error));
        }
    }

    async shareImage() {

        const response = await fetch("/rectangle");
        const blob = await response.blob();
        const filesArray = [
          new File(
            [blob],
            '/TapToFind/assets/sharepic.jpg',
            {
              type: "image/jpeg",
              lastModified: new Date().getTime()
            }
         )
        ];
        const shareData = {
          files: filesArray,
        };
        navigator.share(shareData);
    }

    
}

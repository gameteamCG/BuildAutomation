// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { IData } from "./IData";
import globalVariables from "./globalVariables";
import { googleAnalytics } from "./ga";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    magicalSound : cc.AudioClip;

    @property(cc.AudioClip)
    popSound : cc.AudioClip;

    @property(cc.AudioClip)
    questionAudio : cc.AudioClip[] = [];

    @property(cc.AudioClip)
    positiveFeedbackSound : cc.AudioClip[]=[];

    @property(cc.AudioClip)
    negativeFeedbackSound : cc.AudioClip[]=[];

    @property(cc.AudioClip)
    ReinforementSound : cc.AudioClip[]=[];

    @property(cc.AudioClip)
    rightSound : cc.AudioClip;

    @property(cc.AudioClip)
    wrongSound : cc.AudioClip;

    @property(cc.AudioClip)
    optionSounds : cc.AudioClip[]=[];

    @property(cc.Material)
    defaultMat : cc.Material;

    @property(cc.Material)
    greyMat : cc.Material;

    @property(cc.SpriteFrame)
    dustImg: cc.SpriteFrame = null;

    @property(cc.Texture2D)
    dustTrailImg:cc.Texture2D = null;

    @property(cc.AudioClip)
    particlesSound: cc.AudioClip = null;

    private data:IData[]=[new IData];
    private answerObject:string;    
    private question: string = "";
    private questionSound:string;
    private textArray:string[]=[];
    private maxOptions:number=7;
    private SubImage:number=0;
    private wrongAnswerLimit:number=7;
    private answers:number[]=[];
    private positionType:string="custom";
    private feedbacktype:string[]=[];
    private scaleArray:number[]=[];


    private optionImages:string[]=[];
    private positiveAudios:cc.AudioClip[]=[];
    private negativeSound:cc.AudioClip;
    private positiveSound:cc.AudioClip;
    
    
    private isClicked: boolean = false;
    private totalAnswers:number = 0;
    private correctAnswerCount:number = 0;
    private wrongAnswerCount:number = 0;
    private isDone:boolean[]=[];

    private createdOptions:cc.Node[]=[];
    private AnswerNode:cc.Node;

    private offsetX: number = 0;
    private totalLevels: number = 5;
    private answerValues: boolean[] = [];

    private viewPortWidth: number = 720;
    private viewPortHeight: number = 1280;

    private canTouch: boolean = true;
    private isChar1: boolean = true;
    private isFirstClick: boolean = false;
    private isWrong: boolean = false;

    private defaultTime: number = 15;

    private value: number;

    private touchDone:string[]=[];
    
    //private negativeAudios:cc.AudioClip[]=[];
    //private optionAnimations:string[]=[];
    //private optionAudios:string[]=[];
    

    //private ga = require("ga");
    


    

    
    


    private getRandomNumber(min:number,max:number): number {
        let _number: number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
        
    }

    Updatedata(){
        
        this.LoadQuestion();
        this.scheduleOnce(() => {
            //console.log("total options/answers = ",this.data[globalVariables.Instance.currentLevel-1].positions);
        }, 0.2);
    }

    LoadQuestion(){
        //console.log(gaData);
        cc.resources.load("storyBoard", Object, (_error, _jsonFile) => {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
            let _jsonData: object = _jsonFile["json"];
            this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
            // this.loadData();
        });
    }

    loadData(){
        for(let i = 0; i < 7; i++){
            cc.resources.load(this.data[i].answerObject);
            cc.resources.load(this.data[i].optionAnimationImages);   
            
        }
    }

    private PlayQuestion(_data: IData): number {
        return 1;
    }

    onLoad () {
        // this.fetchData();
        this.scheduleOnce(()=>{
            this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        },0.5);
        this.node.getChildByName("ThirdNode").active = true;
        //this.answerValues = globalVariables.Instance.answerValues;
        this.Updatedata();

        let jockeyNode = this.node.getChildByName(`podium`).getChildByName(`Puzzle`);
        jockeyNode.getComponent(cc.Animation).play(`titleAnim`);
        jockeyNode.getComponent(cc.Animation).on(`finished`, (()=>{
            // jockeyNode.width = 250;
            // jockeyNode.height = 250;
            this.jockeyReposition(this.node.getChildByName(`podium`));
        }),this);
        
        cc.director.preloadScene("endScreen");
    }

    start () {
        this.scheduleOnce(()=>{
            this.callStartGame();
        },2);
    }

    callStartGame(){
        this.setMultipleAnswerEnvironment();
        // console.log("start : ");
        for(let i=0;i<this.totalLevels;i++){
                this.answerValues[i]=false;
        }
        this.setProgressBar();
        //ga.name;
        

        // ga('event', "Tap", {
        //     'event_category': "Link",
        //     'event_label': "Create Game",
        //     'value': <1>
        // });
        

        
        
        console.log("levelStarted--"+globalVariables.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        //console.log("levelStarted--" + cc.director.getScene().name);
        if(globalVariables.Instance.currentLevel==this.totalLevels){
            //console.log("Congratulations.........!!!!!!!!!!!!!!!!");
            // cc.director.preloadScene("endScreen");
        }
        else{
            //console.log("loaddddddddd@@@@@@@@@@@",parseInt(cc.director.getScene().name));
            //cc.director.preloadScene((parseInt(cc.director.getScene().name)+1).toString());
            
        }

        
        this.scheduleOnce(() => {
            this.fetchData();
        }, 0.2);
      
        this.scheduleOnce(() => {
            //this.node.getChildByName("template").destroy();
            this.setMultipleAnswerEnvironment();
            this.createAnswerObject();
            // cc.tween(this.node.getChildByName("Question"))
            //     .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            
            this.scheduleOnce(() => {
                //this.AnswerNode.x = this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x;
                //this.AnswerNode.y = this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y;
                // cc.tween(this.AnswerNode)
                //     .to(0.5, { x: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x }, { easing: 'sineInOut' }).start();
                // cc.tween(this.AnswerNode)
                //     .to(0.5, { y: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y }, { easing: 'sineInOut' }).start();
                this.createOptionObject(this.maxOptions);
                this.playSound(this.popSound);
                this.scheduleOnce(() => {
                    for(let i=0;i<this.node.getChildByName("Options").children.length;i++){
                        this.isDone[i]=false;
                    }
            
                    this.node.getChildByName("Options").children.forEach(element => {
                        element.on('touchstart', function (event) {
                            if(this.canTouch){
                                this.TouchStart(element, event);
                            }
                        }, this);
                    });
                }, 0.4);
            },0);
        }, 0.3);

        this.scheduleOnce(() => {
            //this.scheduleOnce(() => {
                this.playSound(this.questionAudio[globalVariables.Instance.currentLevel-1]);
            //}, 0.6);
        }, 0.7);

    }

    callJockey(){
        cc.tween(this.node.getChildByName("Jockey"))
            .to(0.5, { x: 475 }, { easing: 'sineInOut' }).start();
        this.scheduleOnce(()=>{
            if(globalVariables.Instance.currentLevel%2==0){
                this.node.getChildByName("Jockey").getComponent(sp.Skeleton).paused = false;
                this.node.getChildByName("Jockey").getComponent(sp.Skeleton).setAnimation(0, `dance`, false);
            }
            else{
                this.node.getChildByName("Jockey").getComponent(sp.Skeleton).paused = false;
                this.node.getChildByName("Jockey").getComponent(sp.Skeleton).setAnimation(0, `thumbs_up`, false);
            }
            this.scheduleOnce(()=>{
                cc.tween(this.node.getChildByName("Jockey"))
                    .to(0.5, { x: 1600 }, { easing: 'sineInOut' }).start();
            },this.positiveFeedbackSound[globalVariables.Instance.currentLevel-2].duration)
        }, 0.5); 
    }

    fetchData(){
        this.correctAnswerCount = 0;
        this.maxOptions = this.data[globalVariables.Instance.currentLevel-1].totalOptions;
        this.SubImage = this.data[globalVariables.Instance.currentLevel-1].SubImage ;
        this.wrongAnswerLimit = this.data[globalVariables.Instance.currentLevel-1].wrongAnswersLimit;
        this.answers = this.data[globalVariables.Instance.currentLevel-1].answers;
        this.scaleArray = this.data[globalVariables.Instance.currentLevel-1].scaleArray;
        this.positionType = this.data[globalVariables.Instance.currentLevel-1].positionType;
        this.feedbacktype = this.data[globalVariables.Instance.currentLevel-1].feedbacktype;
        this.totalAnswers = this.answers.length;
        this.question=this.data[globalVariables.Instance.currentLevel-1].question;
        this.questionSound=this.data[globalVariables.Instance.currentLevel-1].questionSound;
        this.textArray = this.data[globalVariables.Instance.currentLevel-1].textArray;
        this.answerObject = this.data[globalVariables.Instance.currentLevel-1].answerObject;
        this.optionImages = this.data[globalVariables.Instance.currentLevel-1].optionAnimationImages;
    }

    CheckForIsDone(_node:cc.Node){
        for(let i=0;i<this.node.getChildByName("Options").children.length;i++){
            if(this.node.getChildByName("Options").children[i].name==_node.name){
                this.isDone[i]=true;
            }
        }
    }

    TouchStart(_node:cc.Node,_event:any){
        // console.log("Inside touchstart : ")
        if(!this.isFirstClick){
            this.isFirstClick = true;
            console.log("firstClick--"+globalVariables.Instance.currentLevel);
        }
        //console.log("touch start : ");
        let isStop:boolean=false;

        for(let i=0;i<this.node.getChildByName("Options").children.length;i++){
            if(_node.name==this.node.getChildByName("Options").children[i].name&&this.isDone[i]){
                isStop=true;
                break;
            }
        }

        for(let i=0;i<this.node.getChildByName("Options").children.length;i++){
            if(_node.name==this.touchDone[i]){
                isStop=true;
                break;
            }
        }

        if(!isStop){
            let isCorrect:boolean=false;
            for(let i=0;i<this.answers.length;i++){
                if((parseInt(_node.name)-1)==this.answers[i]){
                    isCorrect=true;
                    break;
                }
            }
    
            if(isCorrect){
                // if(globalVariables.Instance.currentLevel==1){ // game specific condition
                //     this.node.getChildByName("extraNode").getChildByName("hand").active=false;
                //     if(_node.name=="1"){
                //         this.scaleTween.stop();
                //     }
                //     else if(_node.name=="2"){
                //         this.scaleTween1.stop();
                //     }
                // }
                let audioSource = this.node.getChildByName(`audioNode`).getComponent(cc.AudioSource);
                audioSource.clip = this.positiveFeedbackSound[globalVariables.Instance.currentLevel-1];
                audioSource.play();
                // this.scheduleOnce(()=>{
                //     audioSource.clip = this.ReinforementSound[globalVariables.Instance.currentLevel-2];
                //     audioSource.play();
                // },this.positiveFeedbackSound[globalVariables.Instance.currentLevel-1].duration);
                
                console.log("correctAnswer--"+globalVariables.Instance.currentLevel);
                this.wrongAnswerCount = 0;
                //console.log("correct is clicked = ",_node.name);
                this.callJockeyAnim(0);
                
                // cc.tween(_node)
                //     .to(0.2, { x: _node.x }, { easing: 'sineInOut' })
                //     .to(0.2, { x: 360 }, { easing: 'sineInOut' }).start();

                // cc.tween(_node)
                //     .to(0.2, { y: _node.y }, { easing: 'sineInOut' })
                //     .to(0.2, { y: 640 }, { easing: 'sineInOut' }).start();

                if(this.feedbacktype.length==1){
                    //this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    //this.node.getComponent(cc.AudioSource).play();
                    //this.playAudio("/sounds/CorrectAnswer");
                    this.playSound(this.rightSound);
                    //this.scheduleOnce(() => {
                        this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    //}, 0.5);
                    
                }
                else if(this.feedbacktype.length==2){
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(() => {
                        this.callPositiveFeedback(_node, this.feedbacktype[1]);
                    }, 0.8);
                }
                else if(this.feedbacktype.length==3){
                    this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
                    this.node.getComponent(cc.AudioSource).play();
                    this.callPositiveFeedback(_node, this.feedbacktype[0]);
                    this.scheduleOnce(() => {
                        this.callPositiveFeedback(_node, this.feedbacktype[1]);
                    }, 0.5);
                    this.scheduleOnce(() => {
                        this.callPositiveFeedback(_node, this.feedbacktype[2]);
                    }, 0.7);
                }

                this.CheckForIsDone(_node);
                this.correctAnswerCount += 1;
            }
            else{
                let audioSource = this.node.getChildByName(`audioNode`).getComponent(cc.AudioSource);
                audioSource.clip = this.negativeFeedbackSound[globalVariables.Instance.currentLevel-1];
                audioSource.play();
                //console.log("wrong is clicked = ",this.isDone);
                console.log("wrongAnswer--"+globalVariables.Instance.currentLevel);
                this.callNegativeFeedback(_node);
                this.callJockeyAnim(1);
            }
    
            //is levelend
            let levelend:boolean=false
    
            // for(let i=0;i<this.answers.length;i++){
            //     if(!this.node.getChildByName("Options").children[this.answers[i]].activeInHierarchy){
            //         levelend=true;
            //     }
            //     else{
            //         levelend=false;
            //         break;
            //     }
            // }

            //for level one specific case
          

            if(this.correctAnswerCount == this.totalAnswers){
                globalVariables.Instance.rightAnswerCount+=1;
                this.answerValues[globalVariables.Instance.currentLevel-1] = true;
                levelend = true;
                this.canTouch = false;
                //console.log("Level Completed...!!!!!!!!!");
                if(globalVariables.Instance.currentLevel==this.totalLevels){
                    this.setProgressBar();
                    // gtag('event', "LevelCompleted_"+globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    // console.log("levelComplete--"+globalVariables.Instance.currentLevel);
                    this.isClicked = false;
                    //console.log("Congratulations.........!!!!!!!!!!!!!!!! game finished");
                    // this.scheduleOnce(() => {
                    //     this.node.getComponent(cc.AudioSource).clip = this.positiveAudios[0];
                    //     this.node.getComponent(cc.AudioSource).play();
                    // }, 3);
                    this.scheduleOnce(() =>{
                        this.setProgressBar();
                        this.scheduleOnce(() => {
                            this.destroyOptions();
                            // this.setReinforsementScreen("positive");
                            this.scheduleOnce(() => {
                                // cc.tween(this.node.getChildByName("podium"))
                                //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                                this.destroyRightOptions();
                                this.destroyAnswers();
                                this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                                this.node.getChildByName("bg").getChildByName("glow").active = false;
                                this.scheduleOnce(()=>{
                                    // this.canTouch = true;
                                    this.isWrong=false;
                                    globalVariables.Instance.answerArray = this.answerValues;
                                    this.scheduleOnce(()=>{
                                        console.log("levelComplete--"+(globalVariables.Instance.currentLevel));
                                        cc.director.loadScene("endScreen");
                                    },2)
                                },0.5)
                            }, this.popupTime+0.5);
                
                        }, 2);
                    }, 1);
                    //this.callPositiveReaction();
                    
                }
                else{
                    // console.log("levelComplete--"+globalVariables.Instance.currentLevel);
                    // gtag('event', "LevelCompleted_"+globalVariables.Instance.currentLevel, {
                    //     'event_category': "Image",
                    //     'event_label': "Level Completed",
                    //     'value': 1
                    // });
                    
                    this.isClicked = false;
                    this.canTouch = false;
                    globalVariables.Instance.currentLevel += 1;
                    this.setProgressBar();
                    this.scheduleOnce(()=>{
                        this.setScreen("positive");
                    },3);
                    //console.log("currentLevel : ",globalVariables.Instance.currentLevel);
                    // this.scheduleOnce(()=>{
                    //     this.callPositiveReaction();
                    // },1);
                }
            }
            

        }

    }


    playSound(name : cc.AudioClip){
        this.node.getComponent(cc.AudioSource).clip = name;
        this.node.getComponent(cc.AudioSource).play();
    }

    playQuestionSound(name : cc.AudioClip){
        this.node.getComponent(cc.AudioSource).clip = this.questionAudio[globalVariables.Instance.currentLevel-1];
        this.node.getComponent(cc.AudioSource).play();
    }

    setScreen(type1:string){
        this.touchDone = [];
        console.log("levelComplete--"+(globalVariables.Instance.currentLevel-1));
        console.log("levelStarted--"+globalVariables.Instance.currentLevel);
        // gtag('event', "LevelStarted_"+globalVariables.Instance.currentLevel, {
        //     'event_category': "Image",
        //     'event_label': "Level Started",
        //     'value': 1
        // });
        this.scheduleOnce(() => {

            //this.node.getChildByName("Question").getComponent(cc.Label).string = "";
            //this.destroyAnswers();
            this.destroyOptions();
            // this.setReinforsementScreen(type1);
            this.scheduleOnce(() => {
                // cc.tween(this.node.getChildByName("podium"))
                //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                this.destroyRightOptions();
                this.destroyAnswers();
                this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                this.node.getChildByName("bg").getChildByName("glow").active = false;
                this.scheduleOnce(()=>{
                    // this.canTouch = true;
                    this.isFirstClick = false;
                    this.isWrong=false;
                    this.fetchData();
                    this.createAnswerObject();
                    this.setMultipleAnswerEnvironment();
                    this.scheduleOnce(()=>{
                        this.createOptionObject(this.maxOptions);
                        this.playSound(this.popSound);
                        // cc.tween(this.AnswerNode)
                        //     .to(0.5, { x: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x }, { easing: 'sineInOut' }).start();
                        // cc.tween(this.AnswerNode)
                        //     .to(0.5, { y: this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y }, { easing: 'sineInOut' }).start();
                        this.scheduleOnce(() => {
                            for(let i=0;i<this.node.getChildByName("Options").children.length;i++){
                                this.isDone[i]=false;
                            }
                    
                            this.node.getChildByName("Options").children.forEach(element => {
                                element.on('touchstart', function (event) {
                                    if(this.canTouch){
                                        this.TouchStart(element, event);
                                    }
                                }, this);
                            });
                            this.scheduleOnce(function() {
                                // Here this refers to component
                                this.isClicked = true;
                            }, 1);
                            this.scheduleOnce(function() {
                                this.playSound(this.questionAudio[globalVariables.Instance.currentLevel-1]);
                            }, this.popSound.duration);
                            
                            
                        }, 0.1);
                    }, 0.4);
                },0.5)
            }, this.popupTime+0.5);

        }, 2);
    }

    private popupTime = 0;

    setReinforsementScreen(type:string){
        if(type=="positive"){
            this.popupTime = this.positiveFeedbackSound[globalVariables.Instance.currentLevel-2].duration+this.magicalSound.duration;
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("podium").getChildByName("Puzzle").getComponent(cc.Animation).play("puzzlePositive");
            this.node.getChildByName("bg").getChildByName("glow").active = true;    
            this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).play();
            
            this.playSound(this.magicalSound);
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: 'sineInOut' }).start();

            for(let i=0;i<this.maxOptions;i++){
                if(this.node.getChildByName("Options").children[i].name&&(this.isDone[i])){
                    this.node.getChildByName("Options").children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: 'sineInOut' }).start();
                }
            } 
            this.scheduleOnce(()=>{
                this.playSound(this.positiveFeedbackSound[globalVariables.Instance.currentLevel-2]);
                this.callJockey();
            },this.magicalSound.duration)
        }
        else if("negative"){
            cc.tween(this.node.getChildByName("podium"))
                .to(0.5, { x: -400 }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("podium").getChildByName("Puzzle").getComponent(cc.Animation).play("puzzleNegative");
            this.popupTime = this.ReinforementSound[globalVariables.Instance.currentLevel-1].duration;
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { x: 0 }, { easing: 'sineInOut' }).start();
            cc.tween(this.node.getChildByName("ThirdNode"))
                .to(0.5, { y: 0 }, { easing: 'sineInOut' }).start();

            for(let i=0;i<this.maxOptions;i++){
                if(this.node.getChildByName("Options").children[i].name&&(this.isDone[i])){
                    this.node.getChildByName("Options").children[i].getChildByName("right").active = false;
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { x: 250 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { y: -200 }, { easing: 'sineInOut' }).start();
                    cc.tween(this.node.getChildByName("Options").children[i])
                        .to(0.5, { scale: 1.2 }, { easing: 'sineInOut' }).start();
                }
            } 
            this.scheduleOnce(()=>{
                this.playSound(this.ReinforementSound[globalVariables.Instance.currentLevel-2]);
            },0.5)
        }
        else if("none"){
            this.popupTime = 0;
        }
    }

    createAnswerObject(){
        // console.log(`winSize: `+(cc.winSize.width/cc.winSize.height));
        //let answerNode = new cc.Node;
        this.AnswerNode = this.node.getChildByName("ThirdNode");
        this.AnswerNode.opacity = 255;
        this.AnswerNode.scale = 0;
        this.AnswerNode.x = this.convertXPos(cc.winSize.width * this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].x);
        this.AnswerNode.y = this.convertYPos(cc.winSize.height * this.data[globalVariables.Instance.currentLevel-1].answerpositions[0].y);
        // this.updateSprites(this.answerObject,this.node.getChildByName("ThirdNode").getChildByName("AnswerNode"));
        this.AnswerNode.getChildByName(`AnswerNode`).getChildByName(`Question`).getComponent(cc.Label).string = this.question;
        // console.log(`QUESTION: `+this.question+`  `+this.AnswerNode.getChildByName(`AnswerNode`).getChildByName(`Question`));
        //this.playSound(this.popSound);
        let _scale = 0.8;
        if(cc.winSize.height < 720){
            _scale = 0.8;
        }
        cc.tween(this.AnswerNode)
            .to(1, { scale: _scale}, { easing: 'sineInOut' }).call(()=>{
                this.canTouch = true;
            }).start();
    }

    createOptionObject(numOfOptions){
        // console.log("optionOBJECT ::",numOfOptions);
        switch(this.positionType) { 
            case "custom": { 
                for(let i=0;i<numOfOptions;i++){
                    
                    this.createdOptions[i]=cc.instantiate(this.node.getChildByName("template"));
                    this.createdOptions[i].name=(i+1).toString();
                    // console.log("created options :::::", this.createdOptions[i].name);
                    this.createdOptions[i].opacity=0;
                    this.createdOptions[i].children[0].getComponent(cc.Label).string=this.data[globalVariables.Instance.currentLevel-1].textArray[i]//(i+1).toString();
                    this.node.getChildByName("Options").insertChild(this.createdOptions[i],i);
                    // this.createdOptions[i].x = 0;
                    this.offsetX = 30;
                    this.createdOptions[i].scale=0;
                    this.createdOptions[i].opacity=255;
                    this.createdOptions[i].x = this.convertXPos(cc.winSize.width * this.data[globalVariables.Instance.currentLevel-1].positions[i].x);
                    this.createdOptions[i].y  = this.convertXPos(cc.winSize.width * this.data[globalVariables.Instance.currentLevel-1].positions[i].y);
                    this.createdOptions[i].active=true;
                    if(this.SubImage==0){
                        this.updateSprites(this.optionImages[i],this.createdOptions[i]);
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = 0;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 90;
                    }
                    else if(this.SubImage==1){
                        this.updateSprites(this.optionImages[i],this.createdOptions[i].getChildByName("image").getChildByName("subSprite"));
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").y = -170;
                        //this.optionImages[i],this.createdOptions[i].getChildByName("1").getComponent(cc.Label).fontSize = 70;
                    }
                    this.optionImages[i],this.createdOptions[i].getChildByName("image").getChildByName("subSprite").width = 550;
                    this.optionImages[i],this.createdOptions[i].getChildByName("image").getChildByName("subSprite").height = 550;

                    cc.tween(this.createdOptions[i])
                    .to(1, { scale: this.data[globalVariables.Instance.currentLevel-1].scaleArray[i] }, { easing: 'sineInOut' }).start();
                    // if(this.answers.length<=1){
                    //     this.createdOptions[i].getChildByName("tick").active = false;
                    // }
                    // else{
                    //     this.createdOptions[i].getChildByName("tick").active = true;
                    // }
                    
                    //this.UpdateAnimations(this.optionImages[i], this.createdOptions[i]);
                    //this.createdOptions[i].getComponent(cc.Sprite).spriteFrame=this.optionImages[i];

                    //console.log("Positions : ",this.createdOptions[i].x,this.createdOptions[i].y);
                    //console.log("created options : *********",this.createdOptions[i].x,this.createdOptions[i].y);
                }   
                break; 
            }
            default: { 
               //statements; 
               break; 
            } 
         } 
    }

    destroyOptions(){
        for(let i=0;i<this.maxOptions;i++){
            if(this.node.getChildByName("Options").children[i].name&&(!this.isDone[i])){
                cc.tween(this.createdOptions[i])
                .to(0.5, { scale: 0 }, { easing: 'sineInOut' }).call(()=>{
                    this.createdOptions[i].destroy();
                }).start();
            }
        } 

        // this.scheduleOnce(() => {
        //     for(let i=0;i<this.maxOptions;i++){
        //         if(this.node.getChildByName("Options").children[i].name&&(!this.isDone[i])){
        //             this.createdOptions[i].destroy();
        //         }
        //     } 
        // }, 0.5);
    }

    destroyRightOptions(){
        for(let i=0;i<this.maxOptions;i++){
            if(this.node.getChildByName("Options").children[i].name&&(this.isDone[i])){
                cc.tween(this.createdOptions[i])
                .to(0.5, { scale: 0 }, { easing: 'sineInOut' }).call(()=>{
                    this.createdOptions[i].destroy();
                }).start();
            }
        } 

        // this.scheduleOnce(() => {
        //     for(let i=0;i<this.maxOptions;i++){
        //         if(this.node.getChildByName("Options").children[i].name&&(this.isDone[i])){
        //             this.createdOptions[i].destroy();
        //         }
        //     } 
        // }, 0.5);
    }
    
    destroyAnswers(){
        if(this.AnswerNode){
            cc.tween(this.AnswerNode)
            .to(0.5, { scale: 0 }, { easing: 'sineInOut' }).start();
            
            this.scheduleOnce(() => {
               // this.AnswerNode.destroy();
            }, 0.5);
        }
        
    }

    setMultipleAnswerEnvironment(){
        this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string = "";
        this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string=this.question;
        // if(this.SubImage==1){
        //     return;
        // }
        // else{
        //     this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string=this.question;
        // }
    }

    callNegativeFeedback(node1:cc.Node){
        this.touchDone.push(node1.name);
        this.wrongAnswerCount += 1;
        this.canTouch = false;
        //let tween1 =  cc.tween(node1)
        //node1.color = new cc.Color(232, 30, 43);
        let optionsNode = node1.parent;
        // optionsNode.children.forEach(element => {
        //     if(element.name == this.answers[0].toString()){
        //         console.log(`RIGHT`);
        //         element.getChildByName("right").active = true;
        //         cc.tween(element.getChildByName("right")).to(0.1,{opacity:0})
        //         .to(0.1,{opacity:255}).to(0.1,{opacity:0}).to(0.1,{opacity:255}).start();
        //     }
        // });
        // console.log(`njnnnn `+(this.answers[0]+1);
        optionsNode.getChildByName((this.answers[0]+1).toString()).getChildByName("right").active = true;
            cc.tween(optionsNode.getChildByName((this.answers[0]+1).toString()).getChildByName("right")).to(0.15,{opacity:0})
            .to(0.15,{opacity:255}).to(0.15,{opacity:0}).to(0.15,{opacity:255}).start();
        // if(node1.name == `1`){
        //     optionsNode.getChildByName(`2`).getChildByName("right").active = true;
        //     cc.tween(optionsNode.getChildByName(`2`).getChildByName("right")).to(0.15,{opacity:0})
        //     .to(0.15,{opacity:255}).to(0.15,{opacity:0}).to(0.15,{opacity:255}).start();
        // }
        // else{
        //     optionsNode.getChildByName(`1`).getChildByName("right").active = true;
        //     cc.tween(optionsNode.getChildByName(`1`).getChildByName("right")).to(0.1,{opacity:0})
        //     .to(0.1,{opacity:255}).to(0.1,{opacity:0}).to(0.1,{opacity:255}).start();
        // }
        node1.getChildByName("right").active = false;
        node1.getChildByName("wrong").active = true;
        node1.getChildByName("image").getChildByName("subSprite").getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        node1.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.tween(node1)
        .to(0.1, { x: node1.x+10 }, { easing: 'sineInOut' })
        .to(0.1, { x: node1.x-10 }, { easing: 'sineInOut' })
        .to(0.1, { x: node1.x }, { easing: 'sineInOut' })
        .to(0.1, { x: node1.x+10 }, { easing: 'sineInOut' })
        .to(0.1, { x: node1.x-10 }, { easing: 'sineInOut' })
        .to(0.1, { x: node1.x }, { easing: 'sineInOut' }).start();  

        

        //call negative audio 
        
        // this.node.getComponent(cc.AudioSource).clip = this.negativeSound;
        // this.node.getComponent(cc.AudioSource).play();
        //this.playAudio("/sounds/incorrectAnswer");

        this.playSound(this.wrongSound);

        // this.scheduleOnce(() => {
        //     //this.playSound(this.negativeFeedback[globalVariables.Instance.currentLevel-1]);
        //     this.canTouch = true;
        // }, 0.8);

        // this.scheduleOnce(() => {
        //     this.canTouch = true;
        // }, this.negativeFeedback[globalVariables.Instance.currentLevel-1].duration);

        this.scheduleOnce(() => {
            //tween1.stop();
            if(this.wrongAnswerCount>=this.wrongAnswerLimit){
                this.wrongAnswerCount = 0;
                this.canTouch = false;
                //this.callNegativeReaction();
                this.hilightLeftAnswers();
                if(globalVariables.Instance.currentLevel==this.totalLevels){
                    this.isClicked = false;
                    this.setProgressBar();
                    //this.node.getChildByName("Options").getChildByName(this.answers[0].toString());
                    this.isDone[this.answers[0]]=true;
                    this.scheduleOnce(() => {
                        this.destroyOptions();
                        // this.setReinforsementScreen("negative");
                        this.scheduleOnce(() => {
                            // cc.tween(this.node.getChildByName("podium"))
                            //     .to(0.5, { x: -1200 }, { easing: 'sineInOut' }).start();
                            this.destroyRightOptions();
                            this.destroyAnswers();
                            this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                            this.node.getChildByName("bg").getChildByName("glow").active = false;
                            this.scheduleOnce(()=>{
                                // this.canTouch = true;
                                this.isWrong=false;
                                globalVariables.Instance.answerArray = this.answerValues;
                                console.log("levelComplete--"+(globalVariables.Instance.currentLevel));
                                cc.director.loadScene("endScreen");
                            },0.5)
                        }, this.popupTime+0.5);
            
                    }, 2);
                }
                else{
                    this.isWrong=true;
                    this.isClicked = false;
                    globalVariables.Instance.currentLevel += 1;
                    this.setProgressBar();
                    this.isDone[this.answers[0]]=true;
                    // this.setScreen("negative"); 
                    this.scheduleOnce(()=>{
                        this.setScreen("negative");
                    },3);
                }
            }
        }, 0.8);
        
    }

    callPositiveFeedback(node1:cc.Node, feedbackName){
        
        switch(feedbackName) { 
            case "confetti": { 
                //this.node.getChildByName("Options").getChildByName("particle").setPosition(node1.x,node1.y);
                //node1.color = new cc.Color(71, 255, 0);
                node1.getChildByName("wrong").active = false;
                node1.getChildByName("right").active = true;
                this.node.getChildByName("Options").getChildByName("Animal").scale=1;
                this.node.getChildByName("Options").getChildByName("Animal").setPosition(node1.x,node1.y);
                this.node.getChildByName("Options").getChildByName("Animal").getComponent(cc.Animation).play();
                this.scheduleOnce(() => {
                    //this.node.getChildByName("Options").getChildByName("particle").destroy;
                    //this.node.getChildByName("Options").getChildByName("particle").setPosition(-500,-500);
                    this.node.getChildByName("Options").getChildByName("Animal").setPosition(-500,-500);
                }, 1);

                //extra code 
                // if(node1.getChildByName("tick").active){
                //     this.updateSprites("/whiteTick",node1.getChildByName("tick"));
                // }
                
                cc.tween(this.node.getChildByName("Options").getChildByName("Animal"))
                    .to(0.5, { opacity: 255 }, { easing: 'sineInOut' })
                    .to(0.5, { opacity: 0 }, { easing: 'sineInOut' }).start();
               break;
            } 
            case "destroy": { 
                    cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: 'sineInOut' })
                    .to(0.9, { opacity: 0 }, { easing: 'sineInOut' }).start();
               break; 
            } 
            case "movement_right": { 
                cc.tween(node1)
                    .to(0.9, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.9, { x: this.viewPortWidth+100 }, { easing: 'sineInOut' }).start();
                break;
            }
            case "movement_left": { 
                cc.tween(node1)
                    .to(0.2, { x: node1.x }, { easing: 'sineInOut' })
                    .to(0.2, { x: -100 }, { easing: 'sineInOut' }).start();
                break; 
            }
            case "movement_top": { 
                cc.tween(node1)
                    .to(2, { y: this.viewPortHeight+100 }, { easing: 'sineInOut' }).start();
                cc.tween(node1)
                .repeatForever(
                        cc.tween().to(0.2, { x: node1.x+30 }, { easing: 'sineInOut' })
                                  .to(0.2, { x: node1.x }, { easing: 'sineInOut' })
                ).start();
                break; 
            } 
            case "movement_bottom": { 
                //game specific code
                if(globalVariables.Instance.currentLevel==4){
                    cc.tween(this.node.getChildByName("bg").getChildByName("plate"))
                    .to(0.5, { x: -280 }, { easing: 'sineInOut' }).start();
                }
                cc.tween(node1)
                    .to(0.5, { y: node1.y + 100 }, { easing: 'sineInOut' })
                    .to(0.5, { y: node1.y-50 }, { easing: 'sineInOut' }).start();
                cc.tween(node1)
                    .to(0.5, { angle: 360 }, { easing: 'sineInOut' }).start();//bounceIn
                break;  
            }
            case "movement_Animation": { 
                //game specific code
                if(globalVariables.Instance.currentLevel==1){
                    node1.x=node1.x+10;
                    node1.y=node1.y+50;
                }
                if(globalVariables.Instance.currentLevel==3){
                    node1.x=node1.x+20;
                    node1.y=node1.y+20;
                    node1.scale=node1.scale-0.2;
                }
                if(globalVariables.Instance.currentLevel==5){
                    // node1.x=node1.x+20;
                    // node1.y=node1.y+20;
                    node1.scale=node1.scale+0.4;
                }
                let animationClip : cc.AnimationClip //= this.optionAnimations[parseInt(node1.name)-1];
                node1.addComponent(cc.Animation);
                node1.getComponent(cc.Animation).addClip(animationClip);
                node1.getComponent(cc.Animation).play(animationClip.name);
                //node1.getComponent(cc.Animation).on('finished',  this.finishedAnim,    this);
                break;
            }
            case "movement_Scale":{
                let outlineScale = node1.scale+(node1.scale*30/100);
                // if(node1.scale<=0.7){
                //     outlineScale = node1.scale+(node1.scale/2);
                // } 
                // else if(node1.scale>=0.7&&node1.scale<=0.9){
                //     outlineScale = node1.scale;
                // } 
                // else{
                //     outlineScale = node1.scale-0.4;
                // }

                //node1.getChildByName("outline").getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                node1.getChildByName("outline").scale = outlineScale;
                cc.tween(node1.getChildByName("outline"))
                    .to(0.3, { scale: outlineScale+0.1 }, { easing: 'sineInOut' })
                    .to(0.3, { scale: outlineScale }, { easing: 'sineInOut' }).start();
                break; 
            }
            case "frameChange": { 
                //node1.getComponent(cc.Sprite).spriteFrame = this.optionImagesFrame2[parseInt(node1.name)-1];
                cc.tween(node1)
                    .to(0.3, { scale: node1.scale+0.1 }, { easing: 'sineInOut' })
                    .to(0.3, { scale: node1.scale }, { easing: 'sineInOut' }).start();
                break; 
            }
            case "shake":{
                let tween1 =  cc.tween(node1)
                .repeatForever(
                    cc.tween().to(0.1, { x: node1.x }, { easing: 'sineInOut' })
                            .to(0.1, { x: node1.x+10 }, { easing: 'sineInOut' })
                )
                .start();

                this.scheduleOnce(() => {
                    tween1.stop();
                }, 1);
                break;
            }
            case "movement_center":{
                this.scheduleOnce(() => {
                    this.destroyOtherOptions();
                },0);
                if(node1.name=="2"){
                    cc.tween(node1)
                    .to(1, { x: node1.x-325 }, { easing: 'sineInOut' }).start();
                }
                else if(node1.name=="1"){
                    cc.tween(node1)
                    .to(1, { x: node1.x+325 }, { easing: 'sineInOut' }).start();
                }
                break;
            }
            default: { 
               //statements; 
               cc.tween(node1)
                    .to(0.9, { opacity: 1 }, { easing: 'sineInOut' })
                    .to(0.9, { opacity: 0 }, { easing: 'sineInOut' }).start();
               break; 
            } 
         } 
    }

    destroyOtherOptions(){
        for(let i=0;i<this.node.getChildByName("Options").children.length;i++){
            if(this.node.getChildByName("Options").children[i].name&&(!this.isDone[i])){
                //this.node.getChildByName("Options").children[i].destroy();
                cc.tween(this.node.getChildByName("Options").children[i])
                    .to(0.4, { opacity: 0 }, { easing: 'sineInOut' }).start();
            }
        }
    }

    update (dt) {
       
        
    }

    finishedAnim(event:cc.Event){
        //this.node.getChildByName("Options").getChildByName("particle").setPosition(this.node.getChildByName("bg").getChildByName("oneMany").x,this.node.getChildByName("bg").getChildByName("oneMany").y);

    }

    callNegativeReaction()
    {
        
        this.canTouch = false;
        let randomnumber = this.getRandomNumber(0,1);
        let currentAudioClip : cc.AudioClip //= this.negativeAudios[randomnumber];
        if(randomnumber==0){
            console.log("characterAppear--Gopal");
            this.isChar1=true;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").x = -475;
            this.node.getChildByName("Jockey").y = -101;
            this.node.getChildByName("Jockey").scaleX = -1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction1");
        }
        else{
            console.log("characterAppear--Mili");
            this.isChar1=false;
            this.node.getChildByName("Jockey").active = true;
            this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
            this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("negativeReaction2");
            this.node.getChildByName("Jockey").x = 939;
            this.node.getChildByName("Jockey").y = -141;
            this.node.getChildByName("Jockey").scaleX = 1.5;
            this.node.getChildByName("Jockey").scaleY = 1.5;
            cc.tween(this.node.getChildByName("Jockey")).to(0.3, { x: 475 }).start();
            this.scheduleOnce(() => {
                this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
            }, 0.4);
        }
        
        this.scheduleOnce(() => {
            this.node.getComponent(cc.AudioSource).clip = currentAudioClip;
            this.node.getComponent(cc.AudioSource).play();
        }, 0.9);
    }

    increaseprogress()
    {
        globalVariables.Instance.fillRange = globalVariables.Instance.currentLevel * (394 / this.totalLevels);
        cc.tween(this.node.getChildByName("progressBar").getChildByName("fill")).to(0.5, { width: globalVariables.Instance.fillRange }).start();
        this.scheduleOnce(() => {
            this.ShowStar();
        }, 0.5);
    }

    ShowStar(){
        if(this.node.getChildByName("progressBar").getChildByName("fill").width == (394 * 1/this.totalLevels)){
            console.log("starsEarned--1");
            this.node.getChildByName("progressBar").getChildByName("star").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star")).to(0.5, { scale: 0.3 }).start();
        }
        else if(this.node.getChildByName("progressBar").getChildByName("fill").width == (394 * Math.ceil(this.totalLevels / 2) / this.totalLevels)){
            console.log("starsEarned--2");
            this.node.getChildByName("progressBar").getChildByName("star2").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star2").active = true;
            this.node.getChildByName("progressBar").getChildByName("star3").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star3").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star2")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star3")).to(0.5, { scale: 0.3 }).start();
        }
        else if(this.node.getChildByName("progressBar").getChildByName("fill").width == 394){
            console.log("starsEarned--3");
            this.node.getChildByName("progressBar").getChildByName("star4").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star5").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star6").scale = 0;
            this.node.getChildByName("progressBar").getChildByName("star4").active = true;
            this.node.getChildByName("progressBar").getChildByName("star5").active = true;
            this.node.getChildByName("progressBar").getChildByName("star6").active = true;
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star4")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star5")).to(0.5, { scale: 0.3 }).start();
            cc.tween(this.node.getChildByName("progressBar").getChildByName("star6")).to(0.5, { scale: 0.3 }).start();
        }
    }

    setProgressBar(){
        let progressBar = this.node.getChildByName("ThirdNode").getChildByName("progressBar");
        // console.log("answerValues : ", this.answerValues)
        for(let i=0; i<this.totalLevels;i++){
            if(this.answerValues[i]==true){
                progressBar.children[i].getChildByName("unattemptedQ").active = false;
                progressBar.children[i].getChildByName("wrongQ").active = false;
                progressBar.children[i].getChildByName("nextQ").active = false;
                progressBar.children[i].getChildByName("rightQ").active = true;
            }
            else{
                if(globalVariables.Instance.currentLevel==i+1){
                    progressBar.children[i].getChildByName("rightQ").active = false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active = true;
                }
                else if(globalVariables.Instance.currentLevel>i+1){
                    progressBar.children[i].getChildByName("rightQ").active = false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active = true;
                }
                else if(globalVariables.Instance.currentLevel<i+1){
                    progressBar.children[i].getChildByName("rightQ").active = false;
                    progressBar.children[i].getChildByName("wrongQ").active = false;
                    progressBar.children[i].getChildByName("nextQ").active = false;
                    progressBar.children[i].getChildByName("unattemptedQ").active = true;
                }
            }
        }
    }

    updateSprites(_spriteName: string, _node: cc.Node) {
        cc.resources.load(_spriteName, cc.SpriteFrame, function (err, spriteFrame: cc.SpriteFrame) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            //console.log(_spriteName);
            _node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
    }

    UpdateAnimations(_spriteName: string, _node: cc.Node) {
        cc.resources.load(_spriteName, cc.AnimationClip, function (err, animation: cc.AnimationClip) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            _node.getComponent(cc.Animation).addClip(animation);
            _node.getComponent(cc.Animation).play(animation.name);
            // _updateFrame = spriteFrame;
        }.bind(this));
    }

    playAudio(_audioPath: string) {
        let clip: cc.AudioClip = null;
        // let audioClip: cc.AudioClip = null;
        cc.resources.load(_audioPath, cc.AudioClip, function (err, audioClip: cc.AudioClip) {
            if (err) {
                cc.warn(err.message || err);
                return;
            }
            // this.audioManager.play(audioClip.name, audioClip, false, "VO");
            // cc.audioEngine.play(audioClip, false, 1);
            cc.audioEngine.playEffect(audioClip, false);
            // console.log("audioClip name = ", audioClip.name);
            clip = audioClip;
        }.bind(this));
    }

    hilightLeftAnswers(){
        for(let i=0;i<this.node.getChildByName("Options").children.length;i++){
            for(let j=0;j<this.answers.length;j++){
                if((parseInt(this.node.getChildByName("Options").children[i].name)-1)==this.answers[j]){
                    //this.node.getChildByName("Options").children[i].color = new cc.Color(71, 255, 0);
                    //console.log("Inside hilightLeftAnswers : "+this.node.getChildByName("Options").children[i].name);
                    // if(this.node.getChildByName("Options").children[i].getChildByName("tick").active){
                    //     this.updateSprites("/whiteTick",this.node.getChildByName("Options").children[i].getChildByName("tick"));
                    // }
                    break;
                }
            }
        }
        // for(let i=0;i<this.answers.length;i++){
        //     if((parseInt(_node.name)-1)==this.answers[i]){
        //         isCorrect=true;
        //         break;
        //     }
        // }
        
    }

    convertXPos(x){
        var val = x - cc.winSize.width / 2;
        return val;
    }

    convertYPos(y){
        var val = y - cc.winSize.height / 2;
        return val;
    }

    jockeyReposition(_node:cc.Node){
        _node.children[0].getComponent(cc.Animation).play();
        cc.tween(_node).to(1, {x: -450,y: -280, scale: 0.9}).start();
    }

    callJockeyAnim(num:number){
        let jockeyNode = this.node.getChildByName(`podium`).getChildByName(`Puzzle`);
        let options2 = this.node.getChildByName(`Options2`);
        if(num == 0){
            // console.log(`GOOD`);
            jockeyNode.getComponent(cc.Animation).play(`puzzleCorrect`);
            jockeyNode.getComponent(cc.Animation).on(`finished`, (()=>{
                jockeyNode.getComponent(cc.Animation).play(`puzzleCorrect`);
            }), this);

            this.scheduleOnce(()=>{
                jockeyNode.getComponent(cc.Animation).play(`puzzleStars`);
                
                jockeyNode.getComponent(cc.Animation).on(`finished`, (()=>{
                    jockeyNode.getComponent(cc.Animation).play(`puzzleIdle`);
                }), this);
                this.playDustAnim2(Math.round(this.getRandomInt(5,8)), this.getRandomInt(15, 20), options2);
            },jockeyNode.getComponent(cc.Animation).getClips()[1].duration+this.positiveFeedbackSound[globalVariables.Instance.currentLevel-1].duration);
        }
        else{
            // console.log(`BAD`);
            jockeyNode.getComponent(cc.Animation).play(`puzzleWrong`);
            jockeyNode.getComponent(cc.Animation).on(`finished`, (()=>{
                jockeyNode.getComponent(cc.Animation).play(`puzzleWrong`);
            }), this);
            this.scheduleOnce(()=>{
                jockeyNode.getComponent(cc.Animation).play(`puzzleStars`);
                jockeyNode.getComponent(cc.Animation).on(`finished`, (()=>{
                    jockeyNode.getComponent(cc.Animation).play(`puzzleIdle`);
                }), this);
                this.playDustAnim2(Math.round(this.getRandomInt(5,8)), this.getRandomInt(15, 20), options2);
            },jockeyNode.getComponent(cc.Animation).getClips()[3].duration+this.negativeFeedbackSound[globalVariables.Instance.currentLevel-1].duration);
        }
        

    }
    
    playDustAnim(num:number){
        // console.log(`playParticles`);
        
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    getRandomFloat(min, max) {
        return Math.random() * (max - min) + min; 
    }

    playDustAnim2(num1:number, num2:number, _node:cc.Node){
        // console.trace(`deDust2`);
        // declare a cc.spriteFrame above for particles img
        // declare a cc.Texture2D above for trail img
        // declare any cc.AudioClip above for particles soundFx
        // declare any cc.AudioClip above for trail soundFx
        let jockey = this.node.getChildByName(`podium`).getChildByName(`Puzzle`);
        jockey.getComponent(cc.AudioSource).clip = this.particlesSound;
        this.scheduleOnce(()=>{
            jockey.getComponent(cc.AudioSource).play();
        },0.75);
        // jockey.getComponent(cc.AudioSource).play();
        // console.log(`POS`+startPos);
        let colorsArray:string [] = [`#C042FF`, `#FF0049`, `#FCC000`];
        let rng_NumOfParticles = num1;
        let _offset = 50
        for(let i = 0; i < num1; i++){
            // let rngX = this.getRandomNumber(0, cc.winSize.width);
            // let rngY = this.getRandomNumber(0, cc.winSize.width);
            let particles = cc.instantiate(new cc.Node);
            let trail = cc.instantiate(new cc.Node);
            particles.parent = _node;
            trail.parent = particles;
            particles.x = (-450 + 640) + 20;
            particles.y = (-280 + 360) + 70;
            // particles.position = jockey.getParent().convertToWorldSpaceAR(jockey.getParent().position);
            // particles.x += 420;
            // particles.y += 220;
            particles.addComponent(cc.Sprite).spriteFrame = this.dustImg;
            // particles.addComponent(cc.AudioSource).clip = this.particleSounds;
            particles.width = 0;
            particles.height = particles.width;
            particles.angle = this.getRandomNumber(0, 359);
            particles.zIndex = -1;
            particles.name = `particles`+i;
            particles.opacity = 255;
            particles.color = cc.Color.fromHEX(particles.color, colorsArray[this.getRandomInt(0, colorsArray.length)]);
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this.dustTrailImg;
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).minSeg = this.getRandomFloat(0.1, 0.5);
            trail.getComponent(cc.MotionStreak).stroke = this.getRandomNumber(10, 25);
            trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
            trail.getComponent(cc.MotionStreak).color = new cc.Color(255,255,255);
            trail.getComponent(cc.MotionStreak).enabled = true;
            trail.getComponent(cc.MotionStreak).fastMode = true;
            // console.log(particles);
            this.scheduleOnce(()=>{
                let rngParticlesSize = this.getRandomInt(75,125);
                
                this.scheduleOnce(()=>{
                    cc.tween(particles).to(0.5, {width: rngParticlesSize, height: rngParticlesSize},{easing:`backOut`}).start();
                },0.5);
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
                            bTrails.getComponent(cc.MotionStreak).minSeg = this.getRandomFloat(0.1, 0.5);
                            bTrails.getComponent(cc.MotionStreak).stroke = this.getRandomNumber(10, 25);
                            bTrails.getComponent(cc.MotionStreak).fadeTime = 0.2;
                            bTrails.getComponent(cc.MotionStreak).color = new cc.Color(255,255,255);
                            bTrails.getComponent(cc.MotionStreak).enabled = true;
                            bTrails.getComponent(cc.MotionStreak).fastMode = true;
                            bullets.width = 0;
                            bullets.height = 0;
                            // bullets.angle = this.getRandomNumber(0, 359);
                            bullets.name = `bullets`+j; 
                            bullets.parent = particles;
                            bullets.x = 0;
                            bullets.y = 0;
                            bullets.color = cc.Color.fromHEX(particles.color, colorsArray[this.getRandomInt(0, colorsArray.length)]);
                            // bullets.color = particles.color;
                            let rngSize = this.getRandomNumber(100, 200);
                            cc.tween(bullets).to(0.25, {width: rngSize, height: rngSize},{easing: `backOut`}).start();
                            cc.tween(bullets).to(0.5, {x: this.getRandomNumber(bullets.x - this.getRandomNumber(100,500), bullets.x + this.getRandomNumber(100,500)), y: this.getRandomNumber(bullets.y - this.getRandomNumber(100,500), bullets.y + this.getRandomNumber(100,500))}).start();
                            cc.tween(bullets).to(0.1,{opacity: 200}).to(0.1,{opacity: 255}).to(0.1,{opacity: 200}).to(0.1,{opacity: 255}).to(0.1,{opacity: 200, scale: 0}).call(()=>{
                                bullets.destroy();
                                particles.destroy();
                            }).start();
                        }
                    }).start();
            },0.1*(i+1));            
        }
    }
}

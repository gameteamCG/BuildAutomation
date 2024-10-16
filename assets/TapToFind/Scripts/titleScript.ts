// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import globalVariables from "./globalVariables";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    private profileSet : boolean = false;
    private userAction : boolean = true;
    private titleProgressDone : boolean = false;
    private timer:number=0;

    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
    }

    start () {
        // globalVariables.Instance.currentLevel = 1;
        // cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        // this.scheduleOnce(() => {
        //     cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        // }, 3);

        //cc.director.loadScene("endScreen");

        this.schedule(function() {
            this.timer+=1;
        }, 1);

        this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string="Pick an Avatar";
        cc.tween(this.node.getChildByName("profiles").getChildByName("subProfiles"))
                .to(1, { x: 0 }, { easing: 'sineInOut' }).start();
        

        

        // this.scheduleOnce(() => {
        //     cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        //     this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string="Pick an Avatar";
        // }, 2.5);

    }

    

    setProfilePic(event: cc.Event){
        
        // ga(
        //     'send',
        //     'event',
        //     ["Image"],
        //     ["Tap"],
        //     ["Select Profile"],
        //     [1]
        // );


        gtag('event', "Profile_Selection", {
            'event_category': "Image",
            'event_label': "Select Profile",
            'value': 1
        });

        if(!this.profileSet){
            this.profileSet = true;
            //console.log(event.target.name);
            globalVariables.Instance.playerID = event.target.name;
            cc.tween(event.target)
                .to(1, { x: this.node.getChildByName("profiles").getChildByName("mainProfile").x }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { y: this.node.getChildByName("profiles").getChildByName("mainProfile").y+266 }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { width: this.node.getChildByName("profiles").getChildByName("mainProfile").width }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { height: this.node.getChildByName("profiles").getChildByName("mainProfile").height }, { easing: 'sineInOut' }).start();

            this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string="Get 4/6 questions correct?";
            
            cc.tween(this.node.getChildByName("titleProgress").getChildByName("progressBar"))
                .to(5, { width: 0 }, { easing: 'sineInOut' }).start();
            
            this.scheduleOnce(() => {
                if(!this.titleProgressDone){
                    this.titleProgressDone = true;
                    cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
                }
            }, 5);
        }
    }

    update (dt) {
        if(this.timer>=5 && this.userAction){
            this.timer=0;
            //this.isClicked = false;
            this.userAction = false;
            cc.tween(this.node.getChildByName("titleProgress").getChildByName("progressBar"))
                .to(3, { width: 0 }, { easing: 'sineInOut' }).start();
            this.scheduleOnce(() => {
                if(!this.titleProgressDone){
                    this.titleProgressDone = true;
                    cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
                }
            }, 5);
            
        }
    }

    callGamePlay(){
        if(!this.titleProgressDone && this.profileSet){
            this.titleProgressDone = true;
            cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        }
    }
}

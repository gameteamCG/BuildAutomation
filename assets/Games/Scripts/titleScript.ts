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
    private data;

    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.preloadScene(`1`);
        // this.LoadQuestion();
        cc.director.loadScene(`1`);
        // this.node.getChildByName("Ch").getComponent(cc.Animation).play();
        
    }

    start () {
        
        this.node.getChildByName("Character").getComponent(cc.Animation).play();
        this.scheduleOnce(()=>{
            
        },0.1);
        
        this.scheduleOnce(()=>{
            this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        },0.5);
        // this.finishedAnim();
        

        

    }

    loadData(){
        cc.resources.load(`/Quiz_01_01_b`);
        cc.resources.load(`/3`);
        cc.resources.load(`/8`);
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
            this.loadData();
        });
    }
    // playNextAnim(){
    //     this.node.getChildByName("curtain").getComponent(cc.Animation).play();
    //     this.node.getChildByName("curtain").on('finished',  this.finishedAnim,    this)
    // }

    // finishedAnim(){
    //     this.scheduleOnce(()=>{
    //         cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
    //     }, 0.5)
    // }

}

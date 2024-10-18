
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TapToFind/Scripts/titleScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b451edfN1IC5ypF1ihK51X', 'titleScript');
// TapToFind/Scripts/titleScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalVariables_1 = require("./globalVariables");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.profileSet = false;
        _this.userAction = true;
        _this.titleProgressDone = false;
        _this.timer = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        //cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
    };
    NewClass.prototype.start = function () {
        // globalVariables.Instance.currentLevel = 1;
        // cc.director.preloadScene(globalVariables.Instance.currentLevel.toString());
        // this.scheduleOnce(() => {
        //     cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        // }, 3);
        //cc.director.loadScene("endScreen");
        this.schedule(function () {
            this.timer += 1;
        }, 1);
        this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string = "Pick an Avatar";
        cc.tween(this.node.getChildByName("profiles").getChildByName("subProfiles"))
            .to(1, { x: 0 }, { easing: 'sineInOut' }).start();
        // this.scheduleOnce(() => {
        //     cc.director.loadScene(globalVariables.Instance.currentLevel.toString());
        //     this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string="Pick an Avatar";
        // }, 2.5);
    };
    NewClass.prototype.setProfilePic = function (event) {
        // ga(
        //     'send',
        //     'event',
        //     ["Image"],
        //     ["Tap"],
        //     ["Select Profile"],
        //     [1]
        // );
        var _this = this;
        gtag('event', "Profile_Selection", {
            'event_category': "Image",
            'event_label': "Select Profile",
            'value': 1
        });
        if (!this.profileSet) {
            this.profileSet = true;
            //console.log(event.target.name);
            globalVariables_1.default.Instance.playerID = event.target.name;
            cc.tween(event.target)
                .to(1, { x: this.node.getChildByName("profiles").getChildByName("mainProfile").x }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { y: this.node.getChildByName("profiles").getChildByName("mainProfile").y + 266 }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { width: this.node.getChildByName("profiles").getChildByName("mainProfile").width }, { easing: 'sineInOut' }).start();
            cc.tween(event.target)
                .to(1, { height: this.node.getChildByName("profiles").getChildByName("mainProfile").height }, { easing: 'sineInOut' }).start();
            this.node.getChildByName("heading").getChildByName("text1").getComponent(cc.Label).string = "Get 4/6 questions correct?";
            cc.tween(this.node.getChildByName("titleProgress").getChildByName("progressBar"))
                .to(5, { width: 0 }, { easing: 'sineInOut' }).start();
            this.scheduleOnce(function () {
                if (!_this.titleProgressDone) {
                    _this.titleProgressDone = true;
                    cc.director.loadScene(globalVariables_1.default.Instance.currentLevel.toString());
                }
            }, 5);
        }
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        if (this.timer >= 5 && this.userAction) {
            this.timer = 0;
            //this.isClicked = false;
            this.userAction = false;
            cc.tween(this.node.getChildByName("titleProgress").getChildByName("progressBar"))
                .to(3, { width: 0 }, { easing: 'sineInOut' }).start();
            this.scheduleOnce(function () {
                if (!_this.titleProgressDone) {
                    _this.titleProgressDone = true;
                    cc.director.loadScene(globalVariables_1.default.Instance.currentLevel.toString());
                }
            }, 5);
        }
    };
    NewClass.prototype.callGamePlay = function () {
        if (!this.titleProgressDone && this.profileSet) {
            this.titleProgressDone = true;
            cc.director.loadScene(globalVariables_1.default.Instance.currentLevel.toString());
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9UYXBUb0ZpbmQvU2NyaXB0cy90aXRsZVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixxREFBZ0Q7QUFFMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzSEM7UUFuSEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWYsZ0JBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsdUJBQWlCLEdBQWEsS0FBSyxDQUFDO1FBQ3BDLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBMkczQixDQUFDO0lBdkdHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksNkVBQTZFO0lBQ2pGLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksNkNBQTZDO1FBQzdDLDhFQUE4RTtRQUM5RSw0QkFBNEI7UUFDNUIsK0VBQStFO1FBQy9FLFNBQVM7UUFFVCxxQ0FBcUM7UUFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxLQUFLLElBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyxnQkFBZ0IsQ0FBQztRQUMzRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJ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LENBQUMsQ0FBQztTQUVUO0lBQ0wsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNMLENBQUM7SUFsSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0g1QjtJQUFELGVBQUM7Q0F0SEQsQUFzSEMsQ0F0SHFDLEVBQUUsQ0FBQyxTQUFTLEdBc0hqRDtrQkF0SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgZ2xvYmFsVmFyaWFibGVzIGZyb20gXCIuL2dsb2JhbFZhcmlhYmxlc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9maWxlU2V0IDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB1c2VyQWN0aW9uIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHRpdGxlUHJvZ3Jlc3NEb25lIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjpudW1iZXI9MDtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gfSwgMyk7XHJcblxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW5kU2NyZWVuXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyKz0xO1xyXG4gICAgICAgIH0sIDEpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFkaW5nXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dDFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9XCJQaWNrIGFuIEF2YXRhclwiO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwic3ViUHJvZmlsZXNcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGVhZGluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwiUGljayBhbiBBdmF0YXJcIjtcclxuICAgICAgICAvLyB9LCAyLjUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBzZXRQcm9maWxlUGljKGV2ZW50OiBjYy5FdmVudCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZ2EoXHJcbiAgICAgICAgLy8gICAgICdzZW5kJyxcclxuICAgICAgICAvLyAgICAgJ2V2ZW50JyxcclxuICAgICAgICAvLyAgICAgW1wiSW1hZ2VcIl0sXHJcbiAgICAgICAgLy8gICAgIFtcIlRhcFwiXSxcclxuICAgICAgICAvLyAgICAgW1wiU2VsZWN0IFByb2ZpbGVcIl0sXHJcbiAgICAgICAgLy8gICAgIFsxXVxyXG4gICAgICAgIC8vICk7XHJcblxyXG5cclxuICAgICAgICBndGFnKCdldmVudCcsIFwiUHJvZmlsZV9TZWxlY3Rpb25cIiwge1xyXG4gICAgICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICdldmVudF9sYWJlbCc6IFwiU2VsZWN0IFByb2ZpbGVcIixcclxuICAgICAgICAgICAgJ3ZhbHVlJzogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZighdGhpcy5wcm9maWxlU2V0KXtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlU2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5wbGF5ZXJJRCA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICBjYy50d2VlbihldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyB4OiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9maWxlc1wiKS5nZXRDaGlsZEJ5TmFtZShcIm1haW5Qcm9maWxlXCIpLnggfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHk6IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwibWFpblByb2ZpbGVcIikueSsyNjYgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHdpZHRoOiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9maWxlc1wiKS5nZXRDaGlsZEJ5TmFtZShcIm1haW5Qcm9maWxlXCIpLndpZHRoIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2VlbihldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBoZWlnaHQ6IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInByb2ZpbGVzXCIpLmdldENoaWxkQnlOYW1lKFwibWFpblByb2ZpbGVcIikuaGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGVhZGluZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHQxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwiR2V0IDQvNiBxdWVzdGlvbnMgY29ycmVjdD9cIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlUHJvZ3Jlc3NcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKSlcclxuICAgICAgICAgICAgICAgIC50byg1LCB7IHdpZHRoOiAwIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudGl0bGVQcm9ncmVzc0RvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMudGltZXI+PTUgJiYgdGhpcy51c2VyQWN0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lcj0wO1xyXG4gICAgICAgICAgICAvL3RoaXMuaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVByb2dyZXNzXCIpLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikpXHJcbiAgICAgICAgICAgICAgICAudG8oMywgeyB3aWR0aDogMCB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMudGl0bGVQcm9ncmVzc0RvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHYW1lUGxheSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRpdGxlUHJvZ3Jlc3NEb25lICYmIHRoaXMucHJvZmlsZVNldCl7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVQcm9ncmVzc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2xvYmFsVmFyaWFibGVzLkluc3RhbmNlLmN1cnJlbnRMZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
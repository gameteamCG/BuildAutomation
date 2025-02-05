
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Framework/Jockeys/Scripts/Jockey');
require('./assets/Framework/Prefabs/Progressbar/ProgressBar/Scripts/ProgressBar');
require('./assets/Framework/Scripts/CustomWidget');
require('./assets/Framework/Scripts/CustomWidget2');
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Games/WordBlend/scripts/GameEnd');
require('./assets/Games/WordBlend/scripts/gameplay');
require('./assets/resources/empty');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/empty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ed58L86ApA2aEJTLxWoeUw', 'empty');
// resources/empty.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXNvdXJjZXMvZW1wdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WordBlend/scripts/GameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e1f3btDWZK0Y+SKD8Hb13X', 'GameEnd');
// Games/WordBlend/scripts/GameEnd.ts

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
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.star = [];
        _this.yeah = [];
        _this.podarEnd = null;
        _this.jaipuriaEnd = null;
        _this.tlcEnd = null;
        _this.supercubEnd = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag" || StartGame_1.default.Instance.jockeyName == "cryon") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
            this.scheduleOnce(function () {
                _this.node.getChildByName("end").active = true;
            }, 2);
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd;
        }
        this.node.getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.introBG;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star1"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 0.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star2"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 1.3);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.node.getChildByName("star3"))
                .to(0.5, { scale: 0.9 }, { easing: "sineInOut" }).start();
        }, 1.8);
        this.scheduleOnce(function () {
            _this.node.getComponent(cc.AudioSource).clip = _this.yeah[0];
            _this.node.getComponent(cc.AudioSource).play();
            console.log("gameEnded--true");
        }, 2.3);
    };
    NewClass.prototype.OnEndBtn = function (_event) {
        window.close();
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "star", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "yeah", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "podarEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "jaipuriaEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "tlcEnd", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "supercubEnd", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9Xb3JkQmxlbmQvc2NyaXB0cy9HYW1lRW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGtFQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThFQztRQTNFVyxVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFtQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztRQThEM0MsaUJBQWlCO0lBQ3JCLENBQUM7SUE3REcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDM0Y7YUFDSSxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FB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USxDQThFNUI7SUFBRCxlQUFDO0NBOUVELEFBOEVDLENBOUVxQyxFQUFFLENBQUMsU0FBUyxHQThFakQ7a0JBOUVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4uLy4uLy4uL0ZyYW1ld29yay9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHN0YXI6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgeWVhaDogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHBvZGFyRW5kOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgamFpcHVyaWFFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSB0bGNFbmQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBzdXBlcmN1YkVuZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBvZGFyRW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiYmFnXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhd2Vzb21lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5qYWlwdXJpYUVuZDtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnRsY0VuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImF3ZXNvbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN1cGVyY3ViRW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3RhcnRHYW1lLkluc3RhbmNlLmludHJvQkc7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd2VkU2NyZWVuLS1Db25ncmF0dWxhdGlvbnNcIik7XG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIikub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMuc3RhclswXTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXIxXCIpKVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICB9LCAwLjgpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJbMF07XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyMlwiKSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgfSwgMS4zKTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5zdGFyWzBdO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcjNcIikpXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIH0sIDEuOCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkuY2xpcCA9IHRoaXMueWVhaFswXTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUVuZGVkLS10cnVlXCIpO1xuICAgICAgICB9LCAyLjMpO1xuXG5cbiAgICB9XG5cbiAgICBPbkVuZEJ0bihfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/CustomWidget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddff1UBeLlMxYLQi9TsUOqT', 'CustomWidget');
// Framework/Scripts/CustomWidget.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomPositioningUI = /** @class */ (function (_super) {
    __extends(CustomPositioningUI, _super);
    function CustomPositioningUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.isLeftCornered = true;
        _this.isRightCornered = false;
        return _this;
        // update (dt) {}
    }
    // @property
    // isTopCornered: boolean = true;
    // @property
    // isBottomCornered: boolean = false;
    CustomPositioningUI.prototype.start = function () {
        if (this.isLeftCornered) {
            this.positionAtLeftCorner();
        }
        else {
            this.positionAtRightCorner();
        }
    };
    CustomPositioningUI.prototype.positionAtLeftCorner = function () {
        var _position = this.node.getPosition();
        var _offSet = 20;
        // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
        //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
        _position.x = -this.canvas.getContentSize().width / 2 + this.node.width / 2
            - cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width + _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2
            + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        // console.log("Position is "+position)
        // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
        this.node.setPosition(_position);
    };
    // positionAtTopCorner() {
    //     let _position = this.node.getPosition();
    //     let _offSet = 20;
    //     // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
    //     //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
    //     _position.x = -this.canvas.getContentSize().height / 2 + this.node.height / 2
    //         - cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height + _offSet;
    //     _position.y = this.canvas.getContentSize().width / 2 - this.node.width / 2
    //         + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
    //     // console.log("Position is "+position)
    //     // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
    //     this.node.setPosition(_position);
    // }
    CustomPositioningUI.prototype.positionAtRightCorner = function () {
        var _position = this.node.getPosition();
        var _offSet = 20;
        // position = -1280/2 + buttonWidth/2 - viewport.x * (1280/viewportWidth);
        //  console.log("this.canvas.getContentSize().width " + this.canvas.getContentSize().width);
        _position.x = this.canvas.getContentSize().width / 2 - this.node.width / 2
            + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2
            + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        // console.log("Position is " + _position)
        // console.log("cc.view.getViewportRect() is "+cc.view.getViewportRect())
        this.node.setPosition(_position);
    };
    __decorate([
        property(cc.Node)
    ], CustomPositioningUI.prototype, "canvas", void 0);
    __decorate([
        property
    ], CustomPositioningUI.prototype, "isLeftCornered", void 0);
    __decorate([
        property
    ], CustomPositioningUI.prototype, "isRightCornered", void 0);
    CustomPositioningUI = __decorate([
        ccclass
    ], CustomPositioningUI);
    return CustomPositioningUI;
}(cc.Component));
exports.default = CustomPositioningUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9DdXN0b21XaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQVk7SUFBN0Q7UUFBQSxxRUF1RUM7UUFwRUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixxQkFBZSxHQUFZLEtBQUssQ0FBQzs7UUE2RGpDLGlCQUFpQjtJQUNyQixDQUFDO0lBNURHLFlBQVk7SUFDWixpQ0FBaUM7SUFFakMsWUFBWTtJQUNaLHFDQUFxQztJQUVyQyxtQ0FBSyxHQUFMO1FBRUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO2FBQ0k7WUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRCxrREFBb0IsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQiwwRUFBMEU7UUFDMUUsNEZBQTRGO1FBQzVGLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNyRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkgsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztjQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckgsdUNBQXVDO1FBQ3ZDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLCtDQUErQztJQUMvQyx3QkFBd0I7SUFDeEIsaUZBQWlGO0lBQ2pGLG1HQUFtRztJQUNuRyxvRkFBb0Y7SUFDcEYsNEhBQTRIO0lBQzVILGlGQUFpRjtJQUNqRiwwSEFBMEg7SUFDMUgsOENBQThDO0lBQzlDLGdGQUFnRjtJQUNoRix3Q0FBd0M7SUFDeEMsSUFBSTtJQUVKLG1EQUFxQixHQUFyQjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDBFQUEwRTtRQUMxRSw0RkFBNEY7UUFDNUYsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztjQUNwRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbkgsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztjQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckgsMENBQTBDO1FBQzFDLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBaEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ0s7SUFHdkI7UUFEQyxRQUFROytEQUNzQjtJQUcvQjtRQURDLFFBQVE7Z0VBQ3dCO0lBVGhCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBdUV2QztJQUFELDBCQUFDO0NBdkVELEFBdUVDLENBdkVnRCxFQUFFLENBQUMsU0FBUyxHQXVFNUQ7a0JBdkVvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBvc2l0aW9uaW5nVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FudmFzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGlzTGVmdENvcm5lcmVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGlzUmlnaHRDb3JuZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gaXNUb3BDb3JuZXJlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBpc0JvdHRvbUNvcm5lcmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzdGFydCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0xlZnRDb3JuZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0TGVmdENvcm5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkF0UmlnaHRDb3JuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc2l0aW9uQXRMZWZ0Q29ybmVyKCkge1xuICAgICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGxldCBfb2ZmU2V0ID0gMjA7XG4gICAgICAgIC8vIHBvc2l0aW9uID0gLTEyODAvMiArIGJ1dHRvbldpZHRoLzIgLSB2aWV3cG9ydC54ICogKDEyODAvdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcbiAgICAgICAgX3Bvc2l0aW9uLnggPSAtdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIDIgKyB0aGlzLm5vZGUud2lkdGggLyAyXG4gICAgICAgICAgICAtIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueCAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLndpZHRoICsgX29mZlNldDtcbiAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxuICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnkgKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkuaGVpZ2h0IC0gX29mZlNldDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQb3NpdGlvbiBpcyBcIitwb3NpdGlvbilcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpIGlzIFwiK2NjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkpXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIHBvc2l0aW9uQXRUb3BDb3JuZXIoKSB7XG4gICAgLy8gICAgIGxldCBfcG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAvLyAgICAgbGV0IF9vZmZTZXQgPSAyMDtcbiAgICAvLyAgICAgLy8gcG9zaXRpb24gPSAtMTI4MC8yICsgYnV0dG9uV2lkdGgvMiAtIHZpZXdwb3J0LnggKiAoMTI4MC92aWV3cG9ydFdpZHRoKTtcbiAgICAvLyAgICAgLy8gIGNvbnNvbGUubG9nKFwidGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCBcIiArIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGgpO1xuICAgIC8vICAgICBfcG9zaXRpb24ueCA9IC10aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIDIgKyB0aGlzLm5vZGUuaGVpZ2h0IC8gMlxuICAgIC8vICAgICAgICAgLSBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnkgKiB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkuaGVpZ2h0ICsgX29mZlNldDtcbiAgICAvLyAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcbiAgICAvLyAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS54ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGggLSBfb2ZmU2V0O1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIlBvc2l0aW9uIGlzIFwiK3Bvc2l0aW9uKVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcbiAgICAvLyAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XG4gICAgLy8gfVxuXG4gICAgcG9zaXRpb25BdFJpZ2h0Q29ybmVyKCkge1xuICAgICAgICBsZXQgX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGxldCBfb2ZmU2V0ID0gMjA7XG4gICAgICAgIC8vIHBvc2l0aW9uID0gLTEyODAvMiArIGJ1dHRvbldpZHRoLzIgLSB2aWV3cG9ydC54ICogKDEyODAvdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcInRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggXCIgKyB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoKTtcbiAgICAgICAgX3Bvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDJcbiAgICAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS54ICogdGhpcy5jYW52YXMuZ2V0Q29udGVudFNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGggLSBfb2ZmU2V0O1xuICAgICAgICBfcG9zaXRpb24ueSA9IHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gMiAtIHRoaXMubm9kZS5oZWlnaHQgLyAyXG4gICAgICAgICAgICArIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkueSAqIHRoaXMuY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQgLSBfb2ZmU2V0O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBvc2l0aW9uIGlzIFwiICsgX3Bvc2l0aW9uKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkgaXMgXCIrY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKSlcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '882009Bux9MSqlp0QNotB13', 'Utils');
// Framework/Scripts/Utils.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Utils, "screenWidth", {
        get: function () {
            if (this._screenWidth == undefined) {
                var _canvas = cc.find("Canvas");
                var _rightEnd = _canvas.getContentSize().width / 2
                    + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
                this._screenWidth = _rightEnd * 2;
                var _topEnd = _canvas.getContentSize().height / 2
                    + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
                this._screenHeight = _topEnd * 2;
            }
            return this._screenWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils, "screenHeight", {
        /**
         * Screen height
         */
        get: function () {
            if (this._screenHeight == undefined) {
                var _canvas = cc.find("Canvas");
                var _rightEnd = _canvas.getContentSize().width / 2
                    + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
                this._screenWidth = _rightEnd * 2;
                var _topEnd = _canvas.getContentSize().height / 2
                    + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
                this._screenHeight = _topEnd * 2;
            }
            return this._screenHeight;
        },
        enumerable: false,
        configurable: true
    });
    Utils._screenWidth = undefined;
    Utils._screenHeight = undefined;
    Utils = __decorate([
        ccclass
    ], Utils);
    return Utils;
}(cc.Component));
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQzs7SUFxQ0EsQ0FBQztJQW5DRyxzQkFBVyxvQkFBVzthQUF0QjtZQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksT0FBTyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXpDLElBQUksU0FBUyxHQUFXLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQztzQkFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLE9BQU8sR0FBVyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUM7c0JBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLHFCQUFZO1FBSHZCOztXQUVHO2FBQ0g7WUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksU0FBUyxFQUFFO2dCQUNqQyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV6QyxJQUFJLFNBQVMsR0FBVyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUM7c0JBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JHLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxPQUFPLEdBQVcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO3NCQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUN2RyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDcEM7WUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFYyxrQkFBWSxHQUFXLFNBQVMsQ0FBQztJQUNqQyxtQkFBYSxHQUFXLFNBQVMsQ0FBQztJQWxDaEMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXFDekI7SUFBRCxZQUFDO0NBckNELEFBcUNDLENBckNrQyxFQUFFLENBQUMsU0FBUyxHQXFDOUM7a0JBckNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHNjcmVlbldpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zY3JlZW5XaWR0aCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBfY2FudmFzOiBjYy5Ob2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTtcblxuICAgICAgICAgICAgbGV0IF9yaWdodEVuZDogbnVtYmVyID0gX2NhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gMlxuICAgICAgICAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS54ICogX2NhbnZhcy5nZXRDb250ZW50U2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlbldpZHRoID0gX3JpZ2h0RW5kICogMjtcbiAgICAgICAgICAgIGxldCBfdG9wRW5kOiBudW1iZXIgPSBfY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gMlxuICAgICAgICAgICAgICAgICsgY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS55ICogX2NhbnZhcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0Vmlld3BvcnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuSGVpZ2h0ID0gX3RvcEVuZCAqIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmVlbldpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcmVlbiBoZWlnaHRcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHNjcmVlbkhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc2NyZWVuSGVpZ2h0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IF9jYW52YXM6IGNjLk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuXG4gICAgICAgICAgICBsZXQgX3JpZ2h0RW5kOiBudW1iZXIgPSBfY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggLyAyXG4gICAgICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnggKiBfY2FudmFzLmdldENvbnRlbnRTaXplKCkud2lkdGggLyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuV2lkdGggPSBfcmlnaHRFbmQgKiAyO1xuICAgICAgICAgICAgbGV0IF90b3BFbmQ6IG51bWJlciA9IF9jYW52YXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyAyXG4gICAgICAgICAgICAgICAgKyBjYy52aWV3LmdldFZpZXdwb3J0UmVjdCgpLnkgKiBfY2FudmFzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRWaWV3cG9ydFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9zY3JlZW5IZWlnaHQgPSBfdG9wRW5kICogMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc2NyZWVuSGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9zY3JlZW5XaWR0aDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgc3RhdGljIF9zY3JlZW5IZWlnaHQ6IG51bWJlciA9IHVuZGVmaW5lZDtcblxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/StartGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd21cdcOFCVMG565duKHxBWs', 'StartGame');
// Framework/Scripts/StartGame.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var startGame = /** @class */ (function (_super) {
    __extends(startGame, _super);
    function startGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = 0.1;
        _this.NextSceneName = "1";
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [3, 5, 7];
        _this.isMusicOn = true;
        _this.playBtn_audio = null;
        _this.levelType = "1";
        _this.currentLevel = 1;
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        // mobNumAvailable: boolean = false;
        _this.mainBg = null;
        _this.jockey = null;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        _this.totalLevels = 7;
        // currentHealth: number = 10;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.activateHint = false;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.gameID = "";
        // private totalLevels: string = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
        return _this;
        // blobToDataURL(blobUrl, callback) {
        //     var xhr = new XMLHttpRequest();
        //     xhr.onload = function () {
        //         var reader = new FileReader();
        //         reader.onloadend = function () {
        //             callback(reader.result);
        //         };
        //         reader.readAsDataURL(xhr.response);
        //     };
        //     xhr.open('GET', blobUrl);
        //     xhr.responseType = 'blob';
        //     xhr.send();
        // }
        // update (dt) {}
    }
    startGame_1 = startGame;
    Object.defineProperty(startGame, "Instance", {
        get: function () {
            return startGame_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    startGame.prototype.onLoad = function () {
        var _this = this;
        cc.game.addPersistRootNode(this.node);
        startGame_1.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
        this.node.children.forEach(function (element) {
            if (element.name == "jockey") {
                _this.JockeyNode = element;
            }
        });
        // const storedJSONData = cc.sys.localStorage.getItem('gameData');
        // if (storedJSONData) {
        //     const jsonData = JSON.parse(storedJSONData);
        // }
    };
    startGame.prototype.logData = function () {
        console.log("Game ID:", this.gameID);
        console.log("Total Levels:", this.totalLevels);
        console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);
        // Log question data
        // this.questions.forEach((question, index) => {
        //     console.log(`Question ${index + 1}:`);
        //     console.log("Question Image Name:", question.questionImageName);
        //     console.log("Question Audio Name:", question.questionAudioName);
        //     // console.log("Option 1 Image Name:", question.option1ImageName);
        //     // console.log("Option 2 Image Name:", question.option2ImageName);
        //     console.log("Correct Answer Number:", question.correctAnswerNum);
        // });
    };
    startGame.prototype.removeExtension = function (imageName) {
        // Remove .png extension
        return imageName.replace(/\.png$/g, '');
    };
    startGame.prototype.removeAudioExtension = function (audioName) {
        // Remove .png extension
        return audioName.replace(/\.mp3$/g, '');
    };
    startGame.prototype.updateJSONdata = function () {
        var _this = this;
        // this.scheduleOnce(() => {
        //     cc.loader.load("https://s3.ap-south-1.amazonaws.com/cgv2-prod-images.creativegalileo.com/HybridLZAssets/BTN-bg-orange.png", (err, texture) => {
        //         if (err) {
        //             console.error("Failed to load image:", err);
        //             return;
        //         }
        //         const spriteFrame = new cc.SpriteFrame(texture);
        //         cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
        //     });
        // }, 1);
        if (this.isDemoGame) {
            var urlParams = new URLSearchParams(window.location.search);
            // Get the 'json' parameter value from the URL
            var encodedJson = urlParams.get('json');
            // Decode the URL-encoded JSON data
            var decodedJsonString = decodeURIComponent(encodedJson);
            // Parse the JSON string into a JavaScript object
            var jsonData = JSON.parse(decodedJsonString);
            // Assign additional data to variables
            this.gameID = jsonData.additionalData.GameID;
            var levelCount = jsonData.additionalData.totalLevel;
            this.totalLevels = parseInt(levelCount);
            this.titleImageName = jsonData.additionalData.TitleImageName;
            this.jockeyName = jsonData.additionalData.JockeyName;
            // Assign question data to the variable
            this.questions = jsonData.questionData;
            console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);
            cc.loader.load(this.titleImageName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.bgmMusicName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.BGM_audio = audioClip;
                var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                cc.audioEngine.setVolume(id, _this.volume);
            });
            cc.loader.load(jsonData.additionalData.introBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                _this.introBG = spriteFrame;
            });
            cc.loader.load(jsonData.additionalData.mainBgName, function (err, texture) {
                if (err) {
                    console.error("Failed to load image:", err);
                    return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.mainBg = spriteFrame;
            });
            this.questions.forEach(function (question) {
                // question.questionImageName = question.questionImageName
                // question.option1ImageName = question.option1ImageName
                // question.option2ImageName = question.option2ImageName
            });
            // Now you can use these variables within this script
            // this.logData();
        }
        else {
            cc.loader.loadRes('game_data', cc.JsonAsset, function (err, jsonAsset) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                var jsonData = jsonAsset.json;
                // Assign additional data to variables
                _this.gameID = jsonData.additionalData.GameID;
                var levelCount = jsonData.additionalData.totalLevel;
                _this.totalLevels = parseInt(levelCount);
                _this.titleImageName = jsonData.additionalData.TitleImageName;
                _this.jockeyName = jsonData.additionalData.JockeyName;
                // Assign question data to the variable
                _this.questions = jsonData.questionData;
                // this.titleImageName = this.removeExtension(this.titleImageName);
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.TitleImageName), function (spriteFrame) {
                    cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function (spriteFrame) {
                    cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    _this.introBG = spriteFrame;
                });
                _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.bgmMusicName), function (AudioClip) {
                    _this.BGM_audio = AudioClip;
                    var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
                    cc.audioEngine.setVolume(id, _this.volume);
                });
                _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.mainBgName), function (spriteFrame) {
                    _this.mainBg = spriteFrame;
                });
                _this.questions.forEach(function (question) {
                    question.commonPuzzleImageName = _this.removeExtension(question.commonPuzzleImageName);
                    question.commonOptionImageName = _this.removeExtension(question.commonOptionImageName);
                    question.puzzles = question.puzzles.map(function (puzzle) { return _this.removeExtension(puzzle); });
                    question.options = question.options.map(function (option) { return _this.removeExtension(option); });
                    question.correctAudioName = _this.removeAudioExtension(question.correctAudioName);
                    question.questionAudioName = _this.removeAudioExtension(question.questionAudioName);
                    question.reiterationAudioName = _this.removeAudioExtension(question.reiterationAudioName);
                    question.questionAudioName2 = _this.removeAudioExtension(question.questionAudioName2);
                    // question.option1ImageName = this.removeExtension(question.option1ImageName);
                    // question.option2ImageName = this.removeExtension(question.option2ImageName);
                });
                // Now you can use these variables within this script
                // this.logData(); // You can call a function to log the data or use it in other functions
            });
        }
    };
    startGame.prototype.start = function () {
        var _this = this;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var access = url.searchParams.get("access");
        var mobile = url.searchParams.get("mobile");
        var level = url.searchParams.get("level");
        var premium = url.searchParams.get("premium");
        var demo = url.searchParams.get("isdemo");
        if (demo == "true") {
            this.isDemoGame = true;
            console.log("It is a demo game");
        }
        this.updateJSONdata();
        if (premium != null) {
            this.premiumLevel = parseInt(premium);
        }
        this.currentLevel = 1;
        // if (level != null) {
        //     this.NextSceneName = level;
        //     globalVariables.Instance.currentLevel = parseInt(this.NextSceneName);
        //     if (parseInt(this.NextSceneName) >= 7) {
        //         this.NextSceneName = "7";
        //         globalVariables.Instance.currentLevel = 7;
        //     }
        // }
        if (mobile == "1") {
            this.hasMobile = true;
        }
        else {
            this.hasMobile = false;
        }
        if (access == "1") {
            this.hasAccess = true;
        }
        else {
            this.hasAccess = false;
        }
        if (!this.isPremiumGame) {
            this.hasAccess = true;
        }
        // let id = cc.audioEngine.playMusic(this.BGM_audio, true);
        // cc.audioEngine.setVolume(id, this.volume);
        if (isAudio == "false") {
            this.node.getChildByName("music").children[0].active = true;
            this.isMusicOn = false;
            cc.audioEngine.stopMusic();
        }
        var ageValue = parseInt(age);
        if (this.isAgeParameterNeeded) {
            if (ageValue <= this.LevelAgeParameters[0]) {
                this.levelType = "1";
            }
            else if (this.LevelAgeParameters.length > 1) {
                if (ageValue > this.LevelAgeParameters[0] && ageValue <= this.LevelAgeParameters[1]) {
                    this.levelType = "2";
                }
                else if (this.LevelAgeParameters.length > 2) {
                    if (ageValue > this.LevelAgeParameters[1] && ageValue <= this.LevelAgeParameters[2]) {
                        this.levelType = "3";
                    }
                    else if (this.LevelAgeParameters.length > 3) {
                        if (ageValue > this.LevelAgeParameters[2] && ageValue <= this.LevelAgeParameters[3]) {
                            this.levelType = "4";
                        }
                        else if (this.LevelAgeParameters.length > 4) {
                            if (ageValue > this.LevelAgeParameters[3] && ageValue <= this.LevelAgeParameters[4]) {
                                this.levelType = "5";
                            }
                        }
                    }
                }
            }
        }
        cc.director.preloadScene(this.NextSceneName);
        this.scheduleOnce(function () {
            console.log("jockey name = ", _this.jockeyName);
            if (_this.jockeyName == "Podar") {
                cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true;
            }
            else if (_this.jockeyName == "tlc") {
                cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active = true;
            }
            else if (_this.jockeyName == "supercub") {
                cc.find("Canvas").getChildByName("bg").getChildByName("supercub").active = true;
            }
            else if (_this.jockeyName == "stallion") {
                cc.find("Canvas").getChildByName("bg").getChildByName("stallion").active = true;
            }
            else if (_this.jockeyName == "bag" || _this.jockeyName == "cryon") {
                cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true;
            }
            if (_this.jockeyName != "bag" && _this.jockeyName != "cryon") {
                _this.scheduleOnce(function () {
                    cc.director.loadScene(_this.NextSceneName);
                }, 2);
            }
        }, 1);
        // this.OnTimer();
    };
    startGame.prototype.OnMusic = function (event) {
        if (event.target.children[0].activeInHierarchy) {
            this.isMusicOn = true;
            event.target.children[0].active = false;
            var id = cc.audioEngine.playMusic(this.BGM_audio, true);
            cc.audioEngine.setVolume(id, this.volume);
            console.log("soundSetting--true");
        }
        else {
            this.isMusicOn = false;
            event.target.children[0].active = true;
            cc.audioEngine.stopMusic();
            console.log("soundSetting--false");
        }
    };
    startGame.prototype.OnPlayBtn = function (_event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        cc.director.loadScene(this.NextSceneName);
    };
    startGame.prototype.OnBack = function () {
        console.log("gameExit--true");
    };
    // OnTimer() {
    //     let delay = 1;
    //     for (let i = 0; i < 9999; i++) {
    //         this.scheduleOnce(() => {
    //             if (cc.director.getScene().name != "gameEnd") {
    //                 this.timer++;
    //             }
    //         }, delay);
    //         delay += 1;
    //     }
    // }
    startGame.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    startGame.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    var startGame_1;
    startGame.instance = null;
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "BGM_audio", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "volume", void 0);
    __decorate([
        property(cc.String)
    ], startGame.prototype, "NextSceneName", void 0);
    __decorate([
        property(cc.Boolean)
    ], startGame.prototype, "isAgeParameterNeeded", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "LevelAgeParameters", void 0);
    __decorate([
        property(cc.AudioClip)
    ], startGame.prototype, "playBtn_audio", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isPremiumGame", void 0);
    __decorate([
        property(Boolean)
    ], startGame.prototype, "isMobileNumberPriority", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "premiumLevel", void 0);
    __decorate([
        property(cc.Node)
    ], startGame.prototype, "jockey", void 0);
    __decorate([
        property(Number)
    ], startGame.prototype, "totalLevels", void 0);
    startGame = startGame_1 = __decorate([
        ccclass
    ], startGame);
    return startGame;
}(cc.Component));
exports.default = startGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQzVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSTVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBK2FDO1FBN2FHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCLHdCQUFrQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUcvQiw0QkFBc0IsR0FBWSxLQUFLLENBQUM7UUFFeEMsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsb0NBQW9DO1FBRXBDLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsaUJBQVcs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Q1AsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQSthN0I7SUFBRCxnQkFBQztDQS9hRCxBQSthQyxDQS9hc0MsRUFBRSxDQUFDLFNBQVMsR0ErYWxEO2tCQS9hb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbnRlcmZhY2UgQWRkaXRpb25hbERhdGEge1xuICAgIEdhbWVJRDogc3RyaW5nO1xuICAgIHRvdGFsTGV2ZWw6IHN0cmluZztcbiAgICBUaXRsZUltYWdlTmFtZTogc3RyaW5nO1xuICAgIGludHJvQmdOYW1lOiBzdHJpbmc7XG4gICAgYmdtTXVzaWNOYW1lOiBzdHJpbmc7XG4gICAgbWFpbkJnTmFtZTogc3RyaW5nO1xuICAgIEpvY2tleU5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFF1ZXN0aW9uRGF0YSB7XG4gICAgcXVlc3Rpb25UZXh0OiBzdHJpbmc7XG4gICAgcXVlc3Rpb25BdWRpb05hbWU6IHN0cmluZztcbiAgICBzaG91bGRQbGF5UXVlc3Rpb25BdWRpbzogYm9vbGVhbjtcbiAgICBjb21tb25QdXp6bGVJbWFnZU5hbWU6IHN0cmluZztcbiAgICBpc0hpbnRSZXF1aXJlZDogYm9vbGVhbjtcbiAgICBudW1iZXJPZlB1enpsZXM6IG51bWJlcjtcbiAgICBwdXp6bGVzOiBzdHJpbmdbXTtcbiAgICBjb3JyZWN0QXVkaW9OYW1lOiBzdHJpbmc7XG4gICAgbmVlZFJlaXRlcmF0aW9uOiBib29sZWFuO1xuICAgIGludGVyYWN0aW9uVHlwZTogc3RyaW5nO1xuICAgIHF1ZXN0aW9uVGV4dDI6IHN0cmluZztcbiAgICBxdWVzdGlvbkF1ZGlvTmFtZTI6IHN0cmluZztcbiAgICBjb21tb25PcHRpb25JbWFnZU5hbWU6IHN0cmluZztcbiAgICBpc09wdGlvblRleHQ6IGJvb2xlYW47XG4gICAgbnVtYmVyT2ZPcHRpb25zOiBudW1iZXI7XG4gICAgb3B0aW9uczogc3RyaW5nW107IC8vIFRoaXMgd2lsbCBlaXRoZXIgY29udGFpbiB0ZXh0IG9wdGlvbnMgb3IgaW1hZ2UgbmFtZXMgYmFzZWQgb24gaXNPcHRpb25UZXh0IGZsYWdcbiAgICBjb3JyZWN0QW5zd2VyOiBzdHJpbmc7XG4gICAgcmVpdGVyYXRpb25BdWRpb05hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE15SlNPTkRhdGEge1xuICAgIGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YTtcbiAgICBxdWVzdGlvbkRhdGE6IFF1ZXN0aW9uRGF0YVtdO1xufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgQkdNX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgdm9sdW1lOiBudW1iZXIgPSAwLjE7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBOZXh0U2NlbmVOYW1lOiBzdHJpbmcgPSBcIjFcIjtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBpc0FnZVBhcmFtZXRlck5lZWRlZCA9IHRydWU7XG4gICAgQHByb3BlcnR5KE51bWJlcilcbiAgICBMZXZlbEFnZVBhcmFtZXRlcnM6IG51bWJlcltdID0gWzMsIDUsIDddO1xuICAgIGlzTXVzaWNPbjogYm9vbGVhbiA9IHRydWU7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwbGF5QnRuX2F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgbGV2ZWxUeXBlOiBzdHJpbmcgPSBcIjFcIjtcbiAgICBjdXJyZW50TGV2ZWw6IG51bWJlciA9IDE7XG4gICAgaGFzQWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgaGFzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbW9iaWxlTnVtYmVyOiBzdHJpbmcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxuICAgIGlzUHJlbWl1bUdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxuICAgIGlzTW9iaWxlTnVtYmVyUHJpb3JpdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxuICAgIHByZW1pdW1MZXZlbDogbnVtYmVyID0gMztcbiAgICAvLyBtb2JOdW1BdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG1haW5CZzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgam9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEpvY2tleU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgZmlyc3RDbGljazogbnVtYmVyID0gMTtcbiAgICBjbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoTnVtYmVyKVxuICAgIHRvdGFsTGV2ZWxzOiBudW1iZXIgPSA3O1xuICAgIC8vIGN1cnJlbnRIZWFsdGg6IG51bWJlciA9IDEwO1xuXG4gICAgdGltZXI6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogc3RhcnRHYW1lID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGFjdGl2YXRlSGludDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaXNEZW1vR2FtZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaW50cm9CRzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIGdhbWVJRDogc3RyaW5nID0gXCJcIjtcbiAgICAvLyBwcml2YXRlIHRvdGFsTGV2ZWxzOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgdGl0bGVJbWFnZU5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgam9ja2V5TmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBxdWVzdGlvbnM6IFF1ZXN0aW9uRGF0YVtdID0gW107XG5cbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gc3RhcnRHYW1lLmluc3RhbmNlXG4gICAgfVxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIHN0YXJ0R2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy0tMTAwXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlckNvbXBsZXRlLS10cnVlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dlZFNjcmVlbi0tVGl0bGVcIik7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBcImpvY2tleVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Kb2NrZXlOb2RlID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnN0IHN0b3JlZEpTT05EYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lRGF0YScpO1xuXG4gICAgICAgIC8vIGlmIChzdG9yZWRKU09ORGF0YSkge1xuICAgICAgICAvLyAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKHN0b3JlZEpTT05EYXRhKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGxvZ0RhdGEoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBJRDpcIiwgdGhpcy5nYW1lSUQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRvdGFsIExldmVsczpcIiwgdGhpcy50b3RhbExldmVscyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQkdNIGF1ZGlvIG5hbWU6XCIsIHRoaXMuQkdNX2F1ZGlvLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlIEltYWdlIE5hbWU6XCIsIHRoaXMudGl0bGVJbWFnZU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkpvY2tleSBOYW1lOlwiLCB0aGlzLmpvY2tleU5hbWUpO1xuXG4gICAgICAgIC8vIExvZyBxdWVzdGlvbiBkYXRhXG4gICAgICAgIC8vIHRoaXMucXVlc3Rpb25zLmZvckVhY2goKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFF1ZXN0aW9uICR7aW5kZXggKyAxfTpgKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gSW1hZ2UgTmFtZTpcIiwgcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJRdWVzdGlvbiBBdWRpbyBOYW1lOlwiLCBxdWVzdGlvbi5xdWVzdGlvbkF1ZGlvTmFtZSk7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIk9wdGlvbiAxIEltYWdlIE5hbWU6XCIsIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJPcHRpb24gMiBJbWFnZSBOYW1lOlwiLCBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ29ycmVjdCBBbnN3ZXIgTnVtYmVyOlwiLCBxdWVzdGlvbi5jb3JyZWN0QW5zd2VyTnVtKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuICAgIHJlbW92ZUV4dGVuc2lvbihpbWFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxuICAgICAgICByZXR1cm4gaW1hZ2VOYW1lLnJlcGxhY2UoL1xcLnBuZyQvZywgJycpO1xuICAgIH1cbiAgICByZW1vdmVBdWRpb0V4dGVuc2lvbihhdWRpb05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIC8vIFJlbW92ZSAucG5nIGV4dGVuc2lvblxuICAgICAgICByZXR1cm4gYXVkaW9OYW1lLnJlcGxhY2UoL1xcLm1wMyQvZywgJycpO1xuICAgIH1cblxuICAgIHVwZGF0ZUpTT05kYXRhKCkge1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBjYy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NndjItcHJvZC1pbWFnZXMuY3JlYXRpdmVnYWxpbGVvLmNvbS9IeWJyaWRMWkFzc2V0cy9CVE4tYmctb3JhbmdlLnBuZ1wiLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgIC8vICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9LCAxKTtcbiAgICAgICAgaWYgKHRoaXMuaXNEZW1vR2FtZSkge1xuICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSAnanNvbicgcGFyYW1ldGVyIHZhbHVlIGZyb20gdGhlIFVSTFxuICAgICAgICAgICAgY29uc3QgZW5jb2RlZEpzb24gPSB1cmxQYXJhbXMuZ2V0KCdqc29uJyk7XG5cbiAgICAgICAgICAgIC8vIERlY29kZSB0aGUgVVJMLWVuY29kZWQgSlNPTiBkYXRhXG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkSnNvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkSnNvbik7XG5cbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBKU09OIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShkZWNvZGVkSnNvblN0cmluZyk7XG4gICAgICAgICAgICAvLyBBc3NpZ24gYWRkaXRpb25hbCBkYXRhIHRvIHZhcmlhYmxlc1xuICAgICAgICAgICAgdGhpcy5nYW1lSUQgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5HYW1lSUQ7XG4gICAgICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XG4gICAgICAgICAgICB0aGlzLnRvdGFsTGV2ZWxzID0gcGFyc2VJbnQobGV2ZWxDb3VudCk7XG4gICAgICAgICAgICB0aGlzLnRpdGxlSW1hZ2VOYW1lID0ganNvbkRhdGEuYWRkaXRpb25hbERhdGEuVGl0bGVJbWFnZU5hbWU7XG4gICAgICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xuXG4gICAgICAgICAgICAvLyBBc3NpZ24gcXVlc3Rpb24gZGF0YSB0byB0aGUgdmFyaWFibGVcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0ganNvbkRhdGEucXVlc3Rpb25EYXRhO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJHTSBtdXNpYyBuYW1lID0gXCIsIGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSk7XG5cbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMudGl0bGVJbWFnZU5hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJUaXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5iZ21NdXNpY05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW50cm9CZ05hbWUsIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLmludHJvQkcgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoanNvbkRhdGEuYWRkaXRpb25hbERhdGEubWFpbkJnTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkJnID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMuZm9yRWFjaChxdWVzdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ucXVlc3Rpb25JbWFnZU5hbWUgPSBxdWVzdGlvbi5xdWVzdGlvbkltYWdlTmFtZVxuICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUgPSBxdWVzdGlvbi5vcHRpb24xSW1hZ2VOYW1lXG4gICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSA9IHF1ZXN0aW9uLm9wdGlvbjJJbWFnZU5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcbiAgICAgICAgICAgIC8vIHRoaXMubG9nRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2dhbWVfZGF0YScsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGE6IE15SlNPTkRhdGEgPSBqc29uQXNzZXQuanNvbiBhcyBNeUpTT05EYXRhO1xuXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGFkZGl0aW9uYWwgZGF0YSB0byB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVJRCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLkdhbWVJRDtcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWxDb3VudCA9IGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLnRvdGFsTGV2ZWw7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbExldmVscyA9IHBhcnNlSW50KGxldmVsQ291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVJbWFnZU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5UaXRsZUltYWdlTmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLmpvY2tleU5hbWUgPSBqc29uRGF0YS5hZGRpdGlvbmFsRGF0YS5Kb2NrZXlOYW1lO1xuXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIHF1ZXN0aW9uIGRhdGEgdG8gdGhlIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBqc29uRGF0YS5xdWVzdGlvbkRhdGE7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy50aXRsZUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHRoaXMudGl0bGVJbWFnZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLlRpdGxlSW1hZ2VOYW1lKSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIlRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUodGhpcy5yZW1vdmVFeHRlbnNpb24oanNvbkRhdGEuYWRkaXRpb25hbERhdGEuaW50cm9CZ05hbWUpLCAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50cm9CRyA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcCh0aGlzLnJlbW92ZUF1ZGlvRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLmJnbU11c2ljTmFtZSksIChBdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CR01fYXVkaW8gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLkJHTV9hdWRpbywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHRoaXMucmVtb3ZlRXh0ZW5zaW9uKGpzb25EYXRhLmFkZGl0aW9uYWxEYXRhLm1haW5CZ05hbWUpLCAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluQmcgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5mb3JFYWNoKHF1ZXN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uY29tbW9uUHV6emxlSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24uY29tbW9uUHV6emxlSW1hZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24uY29tbW9uT3B0aW9uSW1hZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24ucHV6emxlcyA9IHF1ZXN0aW9uLnB1enpsZXMubWFwKHB1enpsZSA9PiB0aGlzLnJlbW92ZUV4dGVuc2lvbihwdXp6bGUpKTtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24ub3B0aW9ucyA9IHF1ZXN0aW9uLm9wdGlvbnMubWFwKG9wdGlvbiA9PiB0aGlzLnJlbW92ZUV4dGVuc2lvbihvcHRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uY29ycmVjdEF1ZGlvTmFtZSA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24ocXVlc3Rpb24uY29ycmVjdEF1ZGlvTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lID0gdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihxdWVzdGlvbi5xdWVzdGlvbkF1ZGlvTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnJlaXRlcmF0aW9uQXVkaW9OYW1lID0gdGhpcy5yZW1vdmVBdWRpb0V4dGVuc2lvbihxdWVzdGlvbi5yZWl0ZXJhdGlvbkF1ZGlvTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uQXVkaW9OYW1lMiA9IHRoaXMucmVtb3ZlQXVkaW9FeHRlbnNpb24ocXVlc3Rpb24ucXVlc3Rpb25BdWRpb05hbWUyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlc3Rpb24ub3B0aW9uMUltYWdlTmFtZSA9IHRoaXMucmVtb3ZlRXh0ZW5zaW9uKHF1ZXN0aW9uLm9wdGlvbjFJbWFnZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBxdWVzdGlvbi5vcHRpb24ySW1hZ2VOYW1lID0gdGhpcy5yZW1vdmVFeHRlbnNpb24ocXVlc3Rpb24ub3B0aW9uMkltYWdlTmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gdXNlIHRoZXNlIHZhcmlhYmxlcyB3aXRoaW4gdGhpcyBzY3JpcHRcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZ0RhdGEoKTsgLy8gWW91IGNhbiBjYWxsIGEgZnVuY3Rpb24gdG8gbG9nIHRoZSBkYXRhIG9yIHVzZSBpdCBpbiBvdGhlciBmdW5jdGlvbnNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIHZhciBpc0F1ZGlvID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzb3VuZFNldHRpbmdcIik7XG4gICAgICAgIHZhciBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImFnZVwiKTtcbiAgICAgICAgdmFyIGFjY2VzcyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiYWNjZXNzXCIpO1xuICAgICAgICB2YXIgbW9iaWxlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJtb2JpbGVcIik7XG4gICAgICAgIHZhciBsZXZlbCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGV2ZWxcIik7XG4gICAgICAgIHZhciBwcmVtaXVtID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJwcmVtaXVtXCIpO1xuICAgICAgICB2YXIgZGVtbyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaXNkZW1vXCIpO1xuICAgICAgICBpZiAoZGVtbyA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgdGhpcy5pc0RlbW9HYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXQgaXMgYSBkZW1vIGdhbWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUpTT05kYXRhKCk7XG4gICAgICAgIGlmIChwcmVtaXVtICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJlbWl1bUxldmVsID0gcGFyc2VJbnQocHJlbWl1bSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICAvLyBpZiAobGV2ZWwgIT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgdGhpcy5OZXh0U2NlbmVOYW1lID0gbGV2ZWw7XG4gICAgICAgIC8vICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gcGFyc2VJbnQodGhpcy5OZXh0U2NlbmVOYW1lKTtcbiAgICAgICAgLy8gICAgIGlmIChwYXJzZUludCh0aGlzLk5leHRTY2VuZU5hbWUpID49IDcpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLk5leHRTY2VuZU5hbWUgPSBcIjdcIjtcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWxWYXJpYWJsZXMuSW5zdGFuY2UuY3VycmVudExldmVsID0gNztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChtb2JpbGUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjY2VzcyA9PSBcIjFcIikge1xuICAgICAgICAgICAgdGhpcy5oYXNBY2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNBY2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc1ByZW1pdW1HYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0FjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5CR01fYXVkaW8sIHRydWUpO1xuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMudm9sdW1lKTtcbiAgICAgICAgaWYgKGlzQXVkaW8gPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY1wiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFnZVZhbHVlOiBudW1iZXIgPSBwYXJzZUludChhZ2UpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQWdlUGFyYW1ldGVyTmVlZGVkKSB7XG4gICAgICAgICAgICBpZiAoYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiMVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzBdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIyXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMV0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCIzXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFnZVZhbHVlID4gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbMl0gJiYgYWdlVmFsdWUgPD0gdGhpcy5MZXZlbEFnZVBhcmFtZXRlcnNbM10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsVHlwZSA9IFwiNFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5MZXZlbEFnZVBhcmFtZXRlcnMubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2VWYWx1ZSA+IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzNdICYmIGFnZVZhbHVlIDw9IHRoaXMuTGV2ZWxBZ2VQYXJhbWV0ZXJzWzRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxUeXBlID0gXCI1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuTmV4dFNjZW5lTmFtZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiam9ja2V5IG5hbWUgPSBcIiwgdGhpcy5qb2NrZXlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwb2RhclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0bGNcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdXBlcmN1YlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInN0YWxsaW9uXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCB0aGlzLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiamFpcHVyaWFcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuam9ja2V5TmFtZSAhPSBcImJhZ1wiICYmIHRoaXMuam9ja2V5TmFtZSAhPSBcImNyeW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLk5leHRTY2VuZU5hbWUpO1xuICAgICAgICAgICAgICAgIH0sIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKTtcblxuXG4gICAgICAgIC8vIHRoaXMuT25UaW1lcigpO1xuXG4gICAgfVxuXG4gICAgT25NdXNpYyhldmVudDogY2MuRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xuICAgICAgICAgICAgdGhpcy5pc011c2ljT24gPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuQkdNX2F1ZGlvLCB0cnVlKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgdGhpcy52b2x1bWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFNldHRpbmctLXRydWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTXVzaWNPbiA9IGZhbHNlO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRTZXR0aW5nLS1mYWxzZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9uUGxheUJ0bihfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5QnRuX2F1ZGlvLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLk5leHRTY2VuZU5hbWUpO1xuICAgIH1cblxuICAgIE9uQmFjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lRXhpdC0tdHJ1ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBPblRpbWVyKCkge1xuICAgIC8vICAgICBsZXQgZGVsYXkgPSAxO1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk5OTk7IGkrKykge1xuICAgIC8vICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgIT0gXCJnYW1lRW5kXCIpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy50aW1lcisrO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAvLyAgICAgICAgIGRlbGF5ICs9IDE7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cblxuICAgIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZEF1ZGlvQ2xpcChhdWRpb05hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvLyBibG9iVG9EYXRhVVJMKGJsb2JVcmwsIGNhbGxiYWNrKSB7XG4gICAgLy8gICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvLyAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIC8vICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcbiAgICAvLyAgICAgICAgIH07XG4gICAgLy8gICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xuICAgIC8vICAgICB9O1xuICAgIC8vICAgICB4aHIub3BlbignR0VUJywgYmxvYlVybCk7XG4gICAgLy8gICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgLy8gICAgIHhoci5zZW5kKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Progress.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8e47+WhWdOJayfFf191hb3', 'Progress');
// Framework/Scripts/Progress.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.isVertical = false;
        _this.totalQuestions = 5;
        _this.progressFill = null;
        return _this;
        // update (dt) {}
    }
    Progress_1 = Progress;
    Object.defineProperty(Progress, "Instance", {
        get: function () {
            return Progress_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    Progress.prototype.onLoad = function () {
        Progress_1.instance = this;
        cc.game.addPersistRootNode(this.node);
    };
    Progress.prototype.IncreaseProgress = function (_questionNumber, _easingType) {
        if (_easingType === void 0) { _easingType = "linear"; }
        var value = _questionNumber / this.totalQuestions;
        cc.tween(this.progressFill).to(0.15, { progress: value }, { easing: _easingType }).start();
        if (_questionNumber == 1) {
            this.node.getComponent(cc.Animation).play("1");
        }
        else if ((this.totalQuestions % 2 == 0 && _questionNumber == this.totalQuestions / 2) || (this.totalQuestions % 2 != 0 && _questionNumber == (this.totalQuestions / 2) + 0.5)) {
            this.node.getComponent(cc.Animation).play("2");
        }
        else if (this.totalQuestions == _questionNumber) {
            this.node.getComponent(cc.Animation).play("3");
        }
    };
    Progress.prototype.start = function () {
    };
    var Progress_1;
    Progress.instance = null;
    __decorate([
        property(Boolean)
    ], Progress.prototype, "isVertical", void 0);
    __decorate([
        property(Number)
    ], Progress.prototype, "totalQuestions", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Progress.prototype, "progressFill", void 0);
    Progress = Progress_1 = __decorate([
        ccclass
    ], Progress);
    return Progress;
}(cc.Component));
exports.default = Progress;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9Qcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdDQztRQXRDRyx3QkFBd0I7UUFFeEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFFbkIsa0JBQVksR0FBbUIsSUFBSSxDQUFDOztRQStCNUMsaUJBQWlCO0lBQ3JCLENBQUM7aUJBeENvQixRQUFRO0lBWXpCLHNCQUFXLG9CQUFRO2FBQW5CO1lBQ0ksT0FBTyxVQUFRLENBQUMsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQseUJBQU0sR0FBTjtRQUNJLFVBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsZUFBdUIsRUFBRSxXQUE4QjtRQUE5Qiw0QkFBQSxFQUFBLHNCQUE4QjtRQUNwRSxJQUFJLEtBQUssR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0YsSUFBSSxlQUFlLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDM0ssSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDthQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxlQUFlLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQzs7SUE1QmMsaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFMekM7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvREFDVTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNtQjtJQVIzQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0M1QjtJQUFELGVBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBd0NqRDtrQkF4Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxuICAgIGlzVmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxuICAgIHRvdGFsUXVlc3Rpb25zOiBudW1iZXIgPSA1O1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBwcml2YXRlIHByb2dyZXNzRmlsbDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9ncmVzcyA9IG51bGw7XG5cblxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiBQcm9ncmVzcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFByb2dyZXNzLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBJbmNyZWFzZVByb2dyZXNzKF9xdWVzdGlvbk51bWJlcjogbnVtYmVyLCBfZWFzaW5nVHlwZTogc3RyaW5nID0gXCJsaW5lYXJcIikge1xuICAgICAgICBsZXQgdmFsdWUgPSBfcXVlc3Rpb25OdW1iZXIgLyB0aGlzLnRvdGFsUXVlc3Rpb25zO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnByb2dyZXNzRmlsbCkudG8oMC4xNSwgeyBwcm9ncmVzczogdmFsdWUgfSwgeyBlYXNpbmc6IF9lYXNpbmdUeXBlIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKF9xdWVzdGlvbk51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIjFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMudG90YWxRdWVzdGlvbnMgJSAyID09IDAgJiYgX3F1ZXN0aW9uTnVtYmVyID09IHRoaXMudG90YWxRdWVzdGlvbnMgLyAyKSB8fCAodGhpcy50b3RhbFF1ZXN0aW9ucyAlIDIgIT0gMCAmJiBfcXVlc3Rpb25OdW1iZXIgPT0gKHRoaXMudG90YWxRdWVzdGlvbnMgLyAyKSArIDAuNSkpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiMlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnRvdGFsUXVlc3Rpb25zID09IF9xdWVzdGlvbk51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCIzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/CustomWidget2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3909dpzo1hPDJb1f4iWWEcf', 'CustomWidget2');
// Framework/Scripts/CustomWidget2.ts

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
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomWidget = /** @class */ (function (_super) {
    __extends(CustomWidget, _super);
    function CustomWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftOffset = 0;
        _this.rightOffset = 0;
        _this.bottomOffset = 0;
        _this.topOffset = 0;
        return _this;
    }
    Object.defineProperty(CustomWidget.prototype, "leftEnd", {
        get: function () {
            return -Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "rightEnd", {
        get: function () {
            return Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "topEnd", {
        get: function () {
            return Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomWidget.prototype, "bottomEnd", {
        get: function () {
            return -Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
    });
    CustomWidget.prototype.onLoad = function () {
        this.Update(this.leftOffset, this.rightOffset, this.topOffset, this.bottomOffset);
    };
    CustomWidget.prototype.Update = function (_leftOffset, _rightOffset, _topOffset, _bottomOffset) {
        if (_leftOffset === void 0) { _leftOffset = undefined; }
        if (_rightOffset === void 0) { _rightOffset = undefined; }
        if (_topOffset === void 0) { _topOffset = undefined; }
        if (_bottomOffset === void 0) { _bottomOffset = undefined; }
        var initPosition = this.node.getPosition();
        this.node.setPosition(0, 0);
        var _position = this.node.getPosition();
        var _scale = this.node.getScale(cc.v2());
        var _width = this.node.width;
        var _height = this.node.height;
        var _anchor = cc.v2(this.node.anchorX, this.node.anchorY);
        if (_leftOffset != 0 && _leftOffset != undefined) {
            _position.x = this.leftEnd + this.leftOffset + _width * _anchor.x * _scale.x;
        }
        if (_rightOffset != 0 && _rightOffset != undefined) {
            _position.x = this.rightEnd - this.rightOffset - _width * (1 - _anchor.x) * _scale.x;
        }
        if (_bottomOffset != 0 && _bottomOffset != undefined) {
            _position.y = this.bottomEnd + this.bottomOffset + _height * _anchor.y * _scale.y;
        }
        if (_topOffset != 0 && _topOffset != undefined) {
            _position.y = this.topEnd - this.topOffset - _height * (1 - _anchor.y) * _scale.y;
        }
        else if (_leftOffset == 0 && _rightOffset == 0 && _bottomOffset == 0 && _topOffset == 0) {
            _position = initPosition;
        }
        this.node.setPosition(_position);
    };
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "leftOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "rightOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "bottomOffset", void 0);
    __decorate([
        property(Number)
    ], CustomWidget.prototype, "topOffset", void 0);
    CustomWidget = __decorate([
        ccclass
    ], CustomWidget);
    return CustomWidget;
}(cc.Component));
exports.default = CustomWidget;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9DdXN0b21XaWRnZXQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlDQUE0QjtBQUV0QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVEQztRQXJENkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFrRHBELENBQUM7SUFoREcsc0JBQVksaUNBQU87YUFBbkI7WUFDSSxPQUFPLENBQUMsZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxrQ0FBUTthQUFwQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxnQ0FBTTthQUFsQjtZQUNJLE9BQU8sZUFBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSxtQ0FBUzthQUFyQjtZQUNJLE9BQU8sQ0FBQyxlQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMs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QUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tV2lkZ2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShOdW1iZXIpIHByaXZhdGUgbGVmdE9mZnNldDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoTnVtYmVyKSBwcml2YXRlIHJpZ2h0T2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShOdW1iZXIpIHByaXZhdGUgYm90dG9tT2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShOdW1iZXIpIHByaXZhdGUgdG9wT2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBnZXQgbGVmdEVuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gLVV0aWxzLnNjcmVlbldpZHRoIC8gMjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCByaWdodEVuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gVXRpbHMuc2NyZWVuV2lkdGggLyAyO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHRvcEVuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gVXRpbHMuc2NyZWVuSGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBib3R0b21FbmQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIC1VdGlscy5zY3JlZW5IZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5VcGRhdGUodGhpcy5sZWZ0T2Zmc2V0LCB0aGlzLnJpZ2h0T2Zmc2V0LCB0aGlzLnRvcE9mZnNldCwgdGhpcy5ib3R0b21PZmZzZXQpO1xuICAgIH1cblxuICAgIFVwZGF0ZShfbGVmdE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfcmlnaHRPZmZzZXQ6IG51bWJlciA9IHVuZGVmaW5lZCwgX3RvcE9mZnNldDogbnVtYmVyID0gdW5kZWZpbmVkLCBfYm90dG9tT2Zmc2V0OiBudW1iZXIgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGluaXRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG5cbiAgICAgICAgbGV0IF9wb3NpdGlvbjogY2MuVmVjMiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgX3NjYWxlOiBjYy5WZWMyID0gdGhpcy5ub2RlLmdldFNjYWxlKGNjLnYyKCkpO1xuICAgICAgICBsZXQgX3dpZHRoOiBudW1iZXIgPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGxldCBfaGVpZ2h0OiBudW1iZXIgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICBsZXQgX2FuY2hvcjogY2MuVmVjMiA9IGNjLnYyKHRoaXMubm9kZS5hbmNob3JYLCB0aGlzLm5vZGUuYW5jaG9yWSk7XG5cbiAgICAgICAgaWYgKF9sZWZ0T2Zmc2V0ICE9IDAgJiYgX2xlZnRPZmZzZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfcG9zaXRpb24ueCA9IHRoaXMubGVmdEVuZCArIHRoaXMubGVmdE9mZnNldCArIF93aWR0aCAqIF9hbmNob3IueCAqIF9zY2FsZS54O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfcmlnaHRPZmZzZXQgIT0gMCAmJiBfcmlnaHRPZmZzZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfcG9zaXRpb24ueCA9IHRoaXMucmlnaHRFbmQgLSB0aGlzLnJpZ2h0T2Zmc2V0IC0gX3dpZHRoICogKDEgLSBfYW5jaG9yLngpICogX3NjYWxlLng7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9ib3R0b21PZmZzZXQgIT0gMCAmJiBfYm90dG9tT2Zmc2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgX3Bvc2l0aW9uLnkgPSB0aGlzLmJvdHRvbUVuZCArIHRoaXMuYm90dG9tT2Zmc2V0ICsgX2hlaWdodCAqIF9hbmNob3IueSAqIF9zY2FsZS55O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdG9wT2Zmc2V0ICE9IDAgJiYgX3RvcE9mZnNldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF9wb3NpdGlvbi55ID0gdGhpcy50b3BFbmQgLSB0aGlzLnRvcE9mZnNldCAtIF9oZWlnaHQgKiAoMSAtIF9hbmNob3IueSkgKiBfc2NhbGUueTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfbGVmdE9mZnNldCA9PSAwICYmIF9yaWdodE9mZnNldCA9PSAwICYmIF9ib3R0b21PZmZzZXQgPT0gMCAmJiBfdG9wT2Zmc2V0ID09IDApIHtcbiAgICAgICAgICAgIF9wb3NpdGlvbiA9IGluaXRQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihfcG9zaXRpb24pO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utilities/TextLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1241sXwmpPE6Sv15qZNtq7', 'TextLoader');
// Framework/Scripts/Utilities/TextLoader.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //This script will be for loading texts from JSON
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9VdGlsaXRpZXMvVGV4dExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFhQSxDQUFDO0lBWEcsaURBQWlEO0lBRWpELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFWZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWE1QjtJQUFELGVBQUM7Q0FiRCxBQWFDLENBYnFDLEVBQUUsQ0FBQyxTQUFTLEdBYWpEO2tCQWJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvL1RoaXMgc2NyaXB0IHdpbGwgYmUgZm9yIGxvYWRpbmcgdGV4dHMgZnJvbSBKU09OXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Jockeys/Scripts/Jockey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a640pa0TNB9oUElOq2DHqb', 'Jockey');
// Framework/Jockeys/Scripts/Jockey.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Jockey = /** @class */ (function (_super) {
    __extends(Jockey, _super);
    function Jockey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jockey_1 = Jockey;
    Object.defineProperty(Jockey, "Instance", {
        get: function () {
            return Jockey_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    Jockey.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        Jockey_1.instance = this;
    };
    Jockey.prototype.start = function () {
    };
    Jockey.prototype.CallJockey = function (_animName, _loop, _isMultipleAnim, _secondAnimName, _isSecondLoop, _waitTime) {
        if (_loop === void 0) { _loop = false; }
        if (_isMultipleAnim === void 0) { _isMultipleAnim = false; }
        if (_secondAnimName === void 0) { _secondAnimName = null; }
        if (_isSecondLoop === void 0) { _isSecondLoop = false; }
        if (_waitTime === void 0) { _waitTime = 0; }
        this.node.getComponent(sp.Skeleton).setAnimation(0, _animName, _loop);
        if (_isMultipleAnim) {
            this.node.getComponent(sp.Skeleton).addAnimation(0, _secondAnimName, _isSecondLoop, 8);
        }
    };
    var Jockey_1;
    // LIFE-CYCLE CALLBACKS:
    Jockey.instance = null;
    Jockey = Jockey_1 = __decorate([
        ccclass
    ], Jockey);
    return Jockey;
}(cc.Component));
exports.default = Jockey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvSm9ja2V5cy9TY3JpcHRzL0pvY2tleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDs7SUEwQkEsQ0FBQztlQTFCb0IsTUFBTTtJQUl2QixzQkFBVyxrQkFBUTthQUFuQjtZQUNJLE9BQU8sUUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHdCQUF3QjtJQUV4Qix1QkFBTSxHQUFOO1FBQ0kseUNBQXlDO1FBQ3pDLFFBQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFVLEdBQVYsVUFBVyxTQUFpQixFQUFFLEtBQXNCLEVBQUUsZUFBZ0MsRUFBRSxlQUE4QixFQUFFLGFBQThCLEVBQUUsU0FBYTtRQUF2SSxzQkFBQSxFQUFBLGFBQXNCO1FBQUUsZ0NBQUEsRUFBQSx1QkFBZ0M7UUFBRSxnQ0FBQSxFQUFBLHNCQUE4QjtRQUFFLDhCQUFBLEVBQUEscUJBQThCO1FBQUUsMEJBQUEsRUFBQSxhQUFhO1FBQ2pLLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLGVBQWUsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFGO0lBQ0wsQ0FBQzs7SUF0QkQsd0JBQXdCO0lBQ1QsZUFBUSxHQUFXLElBQUksQ0FBQztJQUh0QixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMEIxQjtJQUFELGFBQUM7Q0ExQkQsQUEwQkMsQ0ExQm1DLEVBQUUsQ0FBQyxTQUFTLEdBMEIvQztrQkExQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvY2tleSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogSm9ja2V5ID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gSm9ja2V5Lmluc3RhbmNlXG4gICAgfVxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIEpvY2tleS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBDYWxsSm9ja2V5KF9hbmltTmFtZTogc3RyaW5nLCBfbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBfaXNNdWx0aXBsZUFuaW06IGJvb2xlYW4gPSBmYWxzZSwgX3NlY29uZEFuaW1OYW1lOiBzdHJpbmcgPSBudWxsLCBfaXNTZWNvbmRMb29wOiBib29sZWFuID0gZmFsc2UsIF93YWl0VGltZSA9IDApIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIF9hbmltTmFtZSwgX2xvb3ApO1xuICAgICAgICBpZiAoX2lzTXVsdGlwbGVBbmltKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hZGRBbmltYXRpb24oMCwgX3NlY29uZEFuaW1OYW1lLCBfaXNTZWNvbmRMb29wLCA4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/WebView/Scripts/CheckForInitWebView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8ce2AftEZNxa47y59r3/Vg', 'CheckForInitWebView');
// Framework/WebView/Scripts/CheckForInitWebView.ts

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
var StartGame_1 = require("../../Scripts/StartGame");
var WebView_1 = require("./WebView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CheckForInitWebView = /** @class */ (function (_super) {
    __extends(CheckForInitWebView, _super);
    function CheckForInitWebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckForInitWebView.prototype.start = function () {
    };
    CheckForInitWebView.prototype.OnButtonClick = function () {
        //if its a free level
        //.... Write your code to open the level .....
        //if its a premium level then need to call the below conditions,
        WebView_1.default.Instance.CheckForWebView();
        if (StartGame_1.default.Instance.hasAccess) {
            // .... Write your code to open the level .....
            console.log("level opened");
        }
    };
    CheckForInitWebView = __decorate([
        ccclass
    ], CheckForInitWebView);
    return CheckForInitWebView;
}(cc.Component));
exports.default = CheckForInitWebView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvV2ViVmlldy9TY3JpcHRzL0NoZWNrRm9ySW5pdFdlYlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscURBQWdEO0FBQ2hELHFDQUFnQztBQUUxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDs7SUFzQkEsQ0FBQztJQXBCRyxtQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDSSxxQkFBcUI7UUFDckIsOENBQThDO1FBRzlDLGdFQUFnRTtRQUNoRSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM5QiwrQ0FBK0M7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFqQmdCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBc0J2QztJQUFELDBCQUFDO0NBdEJELEFBc0JDLENBdEJnRCxFQUFFLENBQUMsU0FBUyxHQXNCNUQ7a0JBdEJvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9TdGFydEdhbWVcIjtcbmltcG9ydCBXZWJWaWV3IGZyb20gXCIuL1dlYlZpZXdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRm9ySW5pdFdlYlZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBPbkJ1dHRvbkNsaWNrKCkge1xuICAgICAgICAvL2lmIGl0cyBhIGZyZWUgbGV2ZWxcbiAgICAgICAgLy8uLi4uIFdyaXRlIHlvdXIgY29kZSB0byBvcGVuIHRoZSBsZXZlbCAuLi4uLlxuXG5cbiAgICAgICAgLy9pZiBpdHMgYSBwcmVtaXVtIGxldmVsIHRoZW4gbmVlZCB0byBjYWxsIHRoZSBiZWxvdyBjb25kaXRpb25zLFxuICAgICAgICBXZWJWaWV3Lkluc3RhbmNlLkNoZWNrRm9yV2ViVmlldygpO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmhhc0FjY2Vzcykge1xuICAgICAgICAgICAgLy8gLi4uLiBXcml0ZSB5b3VyIGNvZGUgdG8gb3BlbiB0aGUgbGV2ZWwgLi4uLi5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgb3BlbmVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/WebView/Scripts/WebView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd43bCWyrZH4J/MVPf8iNMA', 'WebView');
// Framework/WebView/Scripts/WebView.ts

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
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.webViewContainer = null;
        _this.correctAnswer = "600";
        _this.webLink = "https://plans.littlesingham.me/";
        _this.currentAnswer = "";
        _this.currentMobile = "";
        _this.maxStringLength = 3;
        _this.MobileNumberNeeded = false;
        return _this;
        // update (dt) {}
    }
    WebView_1 = WebView;
    Object.defineProperty(WebView, "Instance", {
        get: function () {
            return WebView_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    WebView.prototype.onLoad = function () {
        WebView_1.instance = this;
    };
    WebView.prototype.start = function () {
    };
    WebView.prototype.CheckForWebView = function (isMobileNumberNeeded) {
        if (isMobileNumberNeeded === void 0) { isMobileNumberNeeded = false; }
        this.MobileNumberNeeded = isMobileNumberNeeded;
        //if player has the access captcha screen will be poped up, else game will continue
        if (!StartGame_1.default.Instance.hasAccess) {
            // console.log("InitiatePaywallCaptcha--true");
            // if (startGame.Instance.mobileNumber != null) {
            //     console.log("mobileNumber--" + startGame.Instance.mobileNumber);
            // }
            if (isMobileNumberNeeded && !StartGame_1.default.Instance.hasMobile) {
                this.node.getChildByName("Captcha").active = true;
                console.log("logEvent--MobileCaptcha--showed");
                this.PopIn(this.node.getChildByName("Captcha").children[1], 1.5);
                // this.node.getChildByName("Captcha").children[1].active = true;
                this.node.getChildByName("Captcha").children[0].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
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
                if (StartGame_1.default.Instance.isMusicOn) {
                    cc.audioEngine.stopMusic();
                }
            }
            return;
        }
        // console.log("Player can play the level since he has the access");
    };
    WebView.prototype.PopIn = function (_node, _scale) {
        if (_scale === void 0) { _scale = 1; }
        _node.scale = 0;
        _node.active = true;
        cc.tween(_node).to(0.4, { scale: _scale }, { easing: "backOut" }).start();
    };
    WebView.prototype.PopOut = function (_node, _scale) {
        if (_scale === void 0) { _scale = 1; }
        _node.scale = _scale;
        cc.tween(_node).to(0.4, { scale: 0 }, { easing: "backIn" }).start();
        this.scheduleOnce(function () {
            _node.getParent().active = false;
        }, 0.4);
    };
    WebView.prototype.initWebview = function () {
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        // iframe.src = "http://192.168.1.109:3003";
        iframe.src = this.webLink;
        var webViewContainer = iframe;
        webViewContainer.style["position"] = "absolute";
        webViewContainer.style["top"] = "0";
        webViewContainer.style["left"] = "0";
        webViewContainer.style["width"] = "100%";
        webViewContainer.style["height"] = "100%";
        var resizeIframe = function () { };
        resizeIframe();
        this.webViewContainer = webViewContainer;
    };
    WebView.prototype.OnClose = function () {
        console.log("logEvent--captcha--closed");
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
        if (StartGame_1.default.Instance.isMusicOn) {
            var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
            cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
        }
    };
    WebView.prototype.CheckForMobileNumber = function (_event) {
        var _this = this;
        if (this.currentMobile.length < 10 || this.currentMobile == "") {
            if (_event.target.name != "x") {
                if (this.currentMobile.length < 10)
                    this.currentMobile = this.currentMobile + _event.target.name;
            }
            else {
                var len = this.currentMobile.length;
                var name = "";
                for (var i = 0; i < len - 1; i++) {
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
                StartGame_1.default.Instance.hasMobile = true;
                StartGame_1.default.Instance.hasAccess = true;
                console.log("mobileNumber--" + this.currentMobile);
                this.node.children[0].children[0].active = false;
                this.PopOut(this.node.children[0].children[1], 1.5);
                this.scheduleOnce(function () {
                    _this.node.children[0].active = false;
                }, 0.4);
            }
        }
    };
    WebView.prototype.CheckForCorrectAnswer = function (_event) {
        var _this = this;
        if (_event.target.name != "x") {
            if (this.currentAnswer.length < 3)
                this.currentAnswer = this.currentAnswer + _event.target.name;
        }
        else {
            var len = this.currentAnswer.length;
            var name = "";
            for (var i = 0; i < len - 1; i++) {
                name += this.currentAnswer[i];
            }
            this.currentAnswer = name;
        }
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        if (this.currentAnswer == this.correctAnswer) {
            // this.OnContinue();
            console.log("logEvent--captcha--correct");
            console.log("Initiate_payment--true");
            console.log("Restart_level--" + StartGame_1.default.Instance.currentLevel);
        }
        else {
            var len = this.currentAnswer.length;
            var name_1 = "";
            for (var i = 0; i < len; i++) {
                if (this.currentAnswer[i] == this.correctAnswer[i]) {
                    name_1 += this.currentAnswer[i];
                }
                else if (_event.target.name != "x") {
                    cc.tween(this.node.children[0].children[0].getChildByName("ans")).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                        .to(0.1, { color: cc.Color.WHITE }).start();
                    console.log("logEvent--captcha--wrong");
                    this.scheduleOnce(function () {
                        _this.currentAnswer = name_1;
                        _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
                    }, 0.4);
                    break;
                }
            }
        }
    };
    WebView.prototype.GameContinues = function () {
    };
    WebView.prototype.OnContinue = function () {
        var _this = this;
        // this.node.children[0].active = true;
        this.initWebview();
        if (StartGame_1.default.Instance.isMusicOn) {
            cc.audioEngine.stopMusic();
        }
        window.addEventListener("message", function (event) {
            console.log("onLoad " + event.data);
            if (event.data == "Subscription--Yes") {
                StartGame_1.default.Instance.hasAccess = true;
                _this.webViewContainer.remove();
                _this.node.children[0].getChildByName("web").active = false;
                _this.node.children[0].active = false;
                if (StartGame_1.default.Instance.isMusicOn) {
                    var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
                    cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
                }
            }
            if (event.data == "Subscription--No") {
                StartGame_1.default.Instance.hasAccess = false;
                _this.webViewContainer.remove();
                // this.node.children[0].children[0].active = false;
                // this.node.children[0].children[1].active = true;
                _this.node.children[0].children[0].active = true;
                _this.currentAnswer = "";
                _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
                // if (startGame.Instance.isMusicOn) {
                //     cc.audioEngine.playMusic(startGame.Instance.BGM_audio, true);
                //     cc.audioEngine.setVolume(0, 0.2);
                // }
            }
        }, false);
    };
    var WebView_1;
    WebView.instance = null;
    __decorate([
        property(String)
    ], WebView.prototype, "correctAnswer", void 0);
    __decorate([
        property(String)
    ], WebView.prototype, "webLink", void 0);
    WebView = WebView_1 = __decorate([
        ccclass
    ], WebView);
    return WebView;
}(cc.Component));
exports.default = WebView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvV2ViVmlldy9TY3JpcHRzL1dlYlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBRUksd0JBQXdCO1FBRjVCLHFFQWdQQztRQTVPRyxzQkFBZ0IsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQVcsS0FBSyxDQUFDO1FBRTlCLGFBQU8sR0FBVyxpQ0FBaUMsQ0FBQztRQUNwRCxtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixtQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQix3QkFBa0IsR0FBWSxLQUFLLENBQUM7O1FBa081QyxpQkFBaUI7SUFDckIsQ0FBQztnQkFoUG9CLE9BQU87SUFleEIsc0JBQVcsbUJBQVE7YUFBbkI7WUFDSSxPQUFPLFNBQU8sQ0FBQyxRQUFRLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksU0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFHQSxDQUFDO0lBRUQsaUNBQWUsR0FBZixVQUFnQixvQkFBcUM7UUFBckMscUNBQUEsRUFBQSw0QkFBcUM7UUFDakQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDO1FBQy9DLG1GQUFtRjtRQUNuRixJQUFJLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQy9CLCtDQUErQztZQUUv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SSxJQUFJLGtCQUFrQixFQUFFO2dCQUNsQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQy9CLG9EQUFvRDtnQkFDcEQsbURBQW1EO2dCQUVuRCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7Z0JBRXZILHNDQUFzQztnQkFDdEMsb0VBQW9FO2dCQUNwRSx3Q0FBd0M7Z0JBQ3hDLElBQUk7YUFFUDtRQUNMLENBQUMsRUFDRCxLQUFLLENBQ1IsQ0FBQztJQUNOLENBQUM7O0lBbE9jLGdCQUFRLEdBQVksSUFBSSxDQUFDO0lBTHhDO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFDcUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzRDQUMyQztJQVIzQyxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBZ1AzQjtJQUFELGNBQUM7Q0FoUEQsQUFnUEMsQ0FoUG9DLEVBQUUsQ0FBQyxTQUFTLEdBZ1BoRDtrQkFoUG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi4vLi4vLi4vRnJhbWV3b3JrL1NjcmlwdHMvU3RhcnRHYW1lXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgd2ViVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTdHJpbmcpXG4gICAgcHJpdmF0ZSBjb3JyZWN0QW5zd2VyOiBzdHJpbmcgPSBcIjYwMFwiO1xuICAgIEBwcm9wZXJ0eShTdHJpbmcpXG4gICAgcHJpdmF0ZSB3ZWJMaW5rOiBzdHJpbmcgPSBcImh0dHBzOi8vcGxhbnMubGl0dGxlc2luZ2hhbS5tZS9cIjtcbiAgICBwcml2YXRlIGN1cnJlbnRBbnN3ZXI6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBjdXJyZW50TW9iaWxlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBXZWJWaWV3ID0gbnVsbDtcbiAgICBwcml2YXRlIG1heFN0cmluZ0xlbmd0aCA9IDM7XG4gICAgcHJpdmF0ZSBNb2JpbGVOdW1iZXJOZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiBXZWJWaWV3Lmluc3RhbmNlO1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgV2ViVmlldy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cblxuICAgIH1cblxuICAgIENoZWNrRm9yV2ViVmlldyhpc01vYmlsZU51bWJlck5lZWRlZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuTW9iaWxlTnVtYmVyTmVlZGVkID0gaXNNb2JpbGVOdW1iZXJOZWVkZWQ7XG4gICAgICAgIC8vaWYgcGxheWVyIGhhcyB0aGUgYWNjZXNzIGNhcHRjaGEgc2NyZWVuIHdpbGwgYmUgcG9wZWQgdXAsIGVsc2UgZ2FtZSB3aWxsIGNvbnRpbnVlXG4gICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLmhhc0FjY2Vzcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbml0aWF0ZVBheXdhbGxDYXB0Y2hhLS10cnVlXCIpO1xuXG4gICAgICAgICAgICAvLyBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLm1vYmlsZU51bWJlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJtb2JpbGVOdW1iZXItLVwiICsgc3RhcnRHYW1lLkluc3RhbmNlLm1vYmlsZU51bWJlcik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAoaXNNb2JpbGVOdW1iZXJOZWVkZWQgJiYgIXN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tTW9iaWxlQ2FwdGNoYS0tc2hvd2VkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuUG9wSW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblsxXSwgMS41KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLk9uQ29udGludWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0Y2hhXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tUGF5bWVudENhcHRjaGEtLXNob3dlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBvcEluKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMF0sIDEuNSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdGNoYVwiKS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHRjaGFcIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5ZXIgY2FuIHBsYXkgdGhlIGxldmVsIHNpbmNlIGhlIGhhcyB0aGUgYWNjZXNzXCIpO1xuICAgIH1cblxuICAgIFBvcEluKF9ub2RlOiBjYy5Ob2RlLCBfc2NhbGU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgX25vZGUuc2NhbGUgPSAwO1xuICAgICAgICBfbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC40LCB7IHNjYWxlOiBfc2NhbGUgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIFBvcE91dChfbm9kZTogY2MuTm9kZSwgX3NjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIF9ub2RlLnNjYWxlID0gX3NjYWxlO1xuICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC40LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIF9ub2RlLmdldFBhcmVudCgpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAwLjQpO1xuICAgIH1cblxuICAgIGluaXRXZWJ2aWV3KCkge1xuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIC8vIGlmcmFtZS5zcmMgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMTA5OjMwMDNcIjtcbiAgICAgICAgaWZyYW1lLnNyYyA9IHRoaXMud2ViTGluaztcbiAgICAgICAgY29uc3Qgd2ViVmlld0NvbnRhaW5lciA9IGlmcmFtZTtcbiAgICAgICAgd2ViVmlld0NvbnRhaW5lci5zdHlsZVtcInBvc2l0aW9uXCJdID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB3ZWJWaWV3Q29udGFpbmVyLnN0eWxlW1widG9wXCJdID0gXCIwXCI7XG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJsZWZ0XCJdID0gXCIwXCI7XG4gICAgICAgIHdlYlZpZXdDb250YWluZXIuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICB3ZWJWaWV3Q29udGFpbmVyLnN0eWxlW1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgIGNvbnN0IHJlc2l6ZUlmcmFtZSA9ICgpID0+IHsgfTtcbiAgICAgICAgcmVzaXplSWZyYW1lKCk7XG4gICAgICAgIHRoaXMud2ViVmlld0NvbnRhaW5lciA9IHdlYlZpZXdDb250YWluZXI7XG4gICAgfVxuXG4gICAgT25DbG9zZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dFdmVudC0tY2FwdGNoYS0tY2xvc2VkXCIpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmVJbkhpZXJhcmNoeSkge1xuICAgICAgICAgICAgdGhpcy5Qb3BPdXQodGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLCAxLjUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uYWN0aXZlSW5IaWVyYXJjaHkpIHtcbiAgICAgICAgICAgIHRoaXMuUG9wT3V0KHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXSwgMS41KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEFuc3dlciA9IFwiXCI7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY3VycmVudEFuc3dlcjtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50TW9iaWxlO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmlzTXVzaWNPbikge1xuICAgICAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHN0YXJ0R2FtZS5JbnN0YW5jZS5CR01fYXVkaW8sIHRydWUpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGlkLCBzdGFydEdhbWUuSW5zdGFuY2Uudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIENoZWNrRm9yTW9iaWxlTnVtYmVyKF9ldmVudDogY2MuRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZS5sZW5ndGggPCAxMCB8fCB0aGlzLmN1cnJlbnRNb2JpbGUgPT0gXCJcIikge1xuXG4gICAgICAgICAgICBpZiAoX2V2ZW50LnRhcmdldC5uYW1lICE9IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZS5sZW5ndGggPCAxMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iaWxlID0gdGhpcy5jdXJyZW50TW9iaWxlICsgX2V2ZW50LnRhcmdldC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50TW9iaWxlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHRoaXMuY3VycmVudE1vYmlsZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9iaWxlID0gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb2JpbGUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50TW9iaWxlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vYmlsZS5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzTW9iaWxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9iaWxlTnVtYmVyLS1cIiArIHRoaXMuY3VycmVudE1vYmlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuUG9wT3V0KHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXSwgMS41KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAwLjQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgQ2hlY2tGb3JDb3JyZWN0QW5zd2VyKF9ldmVudDogY2MuRXZlbnQpIHtcbiAgICAgICAgaWYgKF9ldmVudC50YXJnZXQubmFtZSAhPSBcInhcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGggPCAzKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuc3dlciA9IHRoaXMuY3VycmVudEFuc3dlciArIF9ldmVudC50YXJnZXQubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMuY3VycmVudEFuc3dlci5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmFtZSArPSB0aGlzLmN1cnJlbnRBbnN3ZXJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBuYW1lO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jdXJyZW50QW5zd2VyO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5zd2VyID09IHRoaXMuY29ycmVjdEFuc3dlcikge1xuICAgICAgICAgICAgLy8gdGhpcy5PbkNvbnRpbnVlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1jYXB0Y2hhLS1jb3JyZWN0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0aWF0ZV9wYXltZW50LS10cnVlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN0YXJ0X2xldmVsLS1cIiArIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdGhpcy5jdXJyZW50QW5zd2VyLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbnN3ZXJbaV0gPT0gdGhpcy5jb3JyZWN0QW5zd2VyW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gdGhpcy5jdXJyZW50QW5zd2VyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfZXZlbnQudGFyZ2V0Lm5hbWUgIT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiYW5zXCIpKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ0V2ZW50LS1jYXB0Y2hhLS13cm9uZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDaGlsZEJ5TmFtZShcImFuc1wiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY3VycmVudEFuc3dlcjtcbiAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgR2FtZUNvbnRpbnVlcygpIHtcblxuICAgIH1cblxuICAgIE9uQ29udGludWUoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmluaXRXZWJ2aWV3KCk7XG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNNdXNpY09uKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTG9hZCBgICsgZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gYFN1YnNjcmlwdGlvbi0tWWVzYCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuaGFzQWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShpZCwgc3RhcnRHYW1lLkluc3RhbmNlLnZvbHVtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT0gYFN1YnNjcmlwdGlvbi0tTm9gKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5oYXNBY2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbnN3ZXIgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q2hpbGRCeU5hbWUoXCJhbnNcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmN1cnJlbnRBbnN3ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5pc011c2ljT24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhzdGFydEdhbWUuSW5zdGFuY2UuQkdNX2F1ZGlvLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSgwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Utilities/Utility.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b460wWVY1FqIXpChY3bYbX', 'Utility');
// Framework/Scripts/Utilities/Utility.ts

cc.Node.prototype.blinkNode = function (blinkDuration, repeatCount, callback) {
    if (blinkDuration === void 0) { blinkDuration = 1; }
    if (repeatCount === void 0) { repeatCount = 1; }
    if (this == null)
        return;
    this.active = true;
    var fadeOut = cc.tween().to(blinkDuration / 2, { opacity: 0 });
    var fadeIn = cc.tween().to(blinkDuration / 2, { opacity: 255 });
    if (repeatCount == -1) {
        return cc.tween(this).sequence(fadeOut, fadeIn).repeatForever().start();
    }
    return cc.tween(this)
        .sequence(fadeOut, fadeIn).repeat(repeatCount)
        .call(callback)
        .start();
};
cc.Node.prototype.pulseNode = function (scaleOffset, pulseDuration, repeatCount, callback, interval) {
    if (scaleOffset === void 0) { scaleOffset = 0.5; }
    if (pulseDuration === void 0) { pulseDuration = 1; }
    if (repeatCount === void 0) { repeatCount = 1; }
    if (interval === void 0) { interval = 0; }
    if (this == null)
        return;
    this.active = true;
    var scaleUp = cc.tween().by(pulseDuration / 2, { scale: scaleOffset });
    var scaleDown = cc.tween().by(pulseDuration / 2, { scale: -scaleOffset });
    var intervalDelay = cc.tween().delay(interval);
    var pulseTween = cc.tween(this).sequence(scaleUp, scaleDown, intervalDelay);
    if (repeatCount == -1) {
        return pulseTween.repeatForever().start();
    }
    return pulseTween.repeat(repeatCount)
        .call(callback)
        .start();
};
cc.Node.prototype.playAnimation = function (clipName, repeatCount, callback, wrapMode) {
    if (repeatCount === void 0) { repeatCount = 1; }
    if (this == null)
        return 0;
    this.active = true;
    var animation = this.getComponent(cc.Animation);
    if (animation == null)
        return 0;
    var animState = animation.play(clipName);
    if (animState == null)
        return 0;
    if (wrapMode)
        animState.wrapMode = wrapMode;
    if (animState.wrapMode == cc.WrapMode.Loop)
        return 0;
    animState.repeatCount = repeatCount;
    var animDuration = (animState.duration / animState.speed) * repeatCount;
    cc.tween(this).delay(animDuration).call(callback).start();
    return animDuration;
};
cc.Node.prototype.resetAnim = function (animName) {
    if (this == null)
        return;
    var animation = this.getComponent(cc.Animation);
    if (animation == null)
        return;
    animation.stop(animName);
    animation.setCurrentTime(0, animName);
};
cc.Node.prototype.setActive = function (isActive, duration, callback, easingType) {
    var _this = this;
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'cubicOut'; }
    if (this == null || this.active == isActive)
        return;
    if (isActive) {
        this.opacity = 0;
        this.active = true;
        var opacityValue = 255;
    }
    else {
        this.opacity = 255;
        var opacityValue = 0;
    }
    cc.tween(this).to(duration, { opacity: opacityValue }, { easing: easingType })
        .call(function () {
        if (!isActive)
            _this.active = false;
        if (callback)
            callback();
    })
        .start();
};
cc.Node.prototype.moveNode = function (finalPos, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.moveToNode = function (otherNode, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    var finalPos = otherNode.inverseTransform(this.parent);
    cc.tween(this).to(duration, { position: finalPos }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.bezierMoveNode = function (finalPos, jumpHeight, duration, callback) {
    if (jumpHeight === void 0) { jumpHeight = 200; }
    if (duration === void 0) { duration = 1; }
    if (this == null)
        return;
    var initPos = this.getPosition();
    var targetVector = finalPos.sub(initPos);
    var firstControlPoint = cc.v2(initPos.x + targetVector.x * 0.4, initPos.y + jumpHeight);
    var secondControlPoint = cc.v2(initPos.x + targetVector.x * 0.8, initPos.y + jumpHeight);
    cc.tween(this)
        .bezierTo(duration, firstControlPoint, secondControlPoint, finalPos)
        .call(callback)
        .start();
};
cc.Node.prototype.rotateNode = function (angleValue, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { angle: angleValue }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.scaleNode = function (scaleValue, duration, callback, easingType) {
    if (duration === void 0) { duration = 1; }
    if (easingType === void 0) { easingType = 'smooth'; }
    if (this == null)
        return;
    cc.tween(this).to(duration, { scale: scaleValue }, { easing: easingType })
        .call(callback)
        .start();
};
cc.Node.prototype.inverseTransform = function (otherNode, position) {
    if (position === void 0) { position = null; }
    if (this == null)
        return cc.Vec2.ZERO;
    if (position == null)
        position = this.getPosition();
    var worldPos = this.parent.convertToWorldSpaceAR(position);
    var localPos = otherNode.convertToNodeSpaceAR(worldPos);
    return localPos;
};
cc.Node.prototype.setParentWithSamePos = function (parentNode) {
    if (this == null)
        return;
    var localPos = this.inverseTransform(parentNode);
    this.setParent(parentNode);
    this.setPosition(localPos);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9VdGlsaXRpZXMvVXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUE2R0EsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsYUFBeUIsRUFBRSxXQUF1QixFQUFFLFFBQW1CO0lBQXZFLDhCQUFBLEVBQUEsaUJBQXlCO0lBQUUsNEJBQUEsRUFBQSxlQUF1QjtJQUN0RixJQUFJLElBQUksSUFBSSxJQUFJO1FBQUUsT0FBTztJQUV6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVoRSxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNuQixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUMzRTtJQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDaEIsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQzdDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDZCxLQUFLLEVBQUUsQ0FBQztBQUNqQixDQUFDLENBQUE7QUFFRCxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxXQUF5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Qy9CLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgbmFtZXNwYWNlIGNjIHtcbiAgICBpbnRlcmZhY2UgTm9kZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAqIFBsYXlzIHRoZSBnaXZlbiBhbmltYXRpb24gb24gdGhlIG5vZGUuXG4gICAgICAgICogTm90ZTogVGhlIG5vZGUgc2hvdWxkIGhhdmUgQW5pbWF0aW9uIGNvbXBvbmVudCBhbG9uZyB3aXRoIHRoZSBhbmltYXRpb24gY2xpcC5cbiAgICAgICAgKiBAcGFyYW0gY2xpcE5hbWUgTmFtZSBvZiB0aGUgYW5pbWF0aW9uIGNsaXAgdG8gYmUgcGxheWVkLlxuICAgICAgICAqIEBwYXJhbSByZXBlYXRDb3VudCBOdW1iZXIgb2YgdGltZXMgdGhlIGFuaW1hdGlvbiBzaG91bGQgYmUgcmVwZWF0ZWQuXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkLiBXaWxsIG5vdCBiZSBpbnZva2VkIGZvciBsb29waW5nIGFuaW1hdGlvbnMuXG4gICAgICAgICogQHBhcmFtIHdyYXBNb2RlIFVwZGF0ZXMgdGhlIHdyYXAgbW9kZSBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAgICAqIEByZXR1cm5zIEFuaW1hdGlvbiBkdXJhdGlvbi4gV2lsbCBiZSAwIGZvciBsb29waW5nIGFuaW1hdGlvbnMuIFxuICAgICAgICAqL1xuICAgICAgICBwbGF5QW5pbWF0aW9uKGNsaXBOYW1lOiBzdHJpbmcsIHJlcGVhdENvdW50PzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCB3cmFwTW9kZT86IGNjLldyYXBNb2RlKTogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAqIFJlc2V0cyB0aGUgYW5pbWF0aW9uIHRvIGl0cyBpbml0aWFsIGZyYW1lLlxuICAgICAgICAqIEBwYXJhbSBhbmltTmFtZSBOYW1lIG9mIHRoZSBhbmltYXRpb24gY2xpcCB0byBiZSByZXNldC5cbiAgICAgICAgKi9cbiAgICAgICAgcmVzZXRBbmltKGFuaW1OYW1lPzogc3RyaW5nKTogdm9pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgKiBCbGlua3MgdGhlIG5vZGUgLSBGYWRlcyBPdXQgYW5kIEZhZGVzIEluLlxuICAgICAgICAqIEBwYXJhbSBibGlua0R1cmF0aW9uIER1cmF0aW9uIGZvciBlYWNoIGJsaW5rLlxuICAgICAgICAqIEBwYXJhbSByZXBlYXRDb3VudCBOdW1iZXIgb2YgdGltZXMgdG8gYmxpbmsgdGhlIG5vZGUuIFBhc3MgLTEgdG8gcmVwZWF0Rm9yZXZlci5cbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaXMgYmxpbmtlZCAnbicgbnVtYmVyIG9mIHRpbWVzLiBcbiAgICAgICAgKiBAcmV0dXJucyBUd2VlbiBJbnN0YW5jZS4gQ2FuIGJlIHVzZWQgdG8gc3RvcCBvciBjb250cm9sIHRoZSB0d2Vlbi4gXG4gICAgICAgICovXG4gICAgICAgIGJsaW5rTm9kZShibGlua0R1cmF0aW9uPzogbnVtYmVyLCByZXBlYXRDb3VudD86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbik6IFR3ZWVuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAqIFB1bHNlcyB0aGUgbm9kZSAtIFNjYWxlcyBVcCBhbmQgU2NhbGVzIERvd24uXG4gICAgICAgICogQHBhcmFtIHNjYWxlT2Zmc2V0IFNjYWxlIG9mZnNldCB2YWx1ZSB0byBhZGQvc3VidHJhY3Qgd2hlbiBzY2FsaW5nIHVwL2Rvd24gcmVzcGVjdGl2ZWx5LlxuICAgICAgICAqIEBwYXJhbSBwdWxzZUR1cmF0aW9uIER1cmF0aW9uIGZvciBlYWNoIHB1bHNlLlxuICAgICAgICAqIEBwYXJhbSByZXBlYXRDb3VudCBOdW1iZXIgb2YgdGltZXMgdG8gcHVsc2UgdGhlIG5vZGUuIFBhc3MgLTEgdG8gcmVwZWF0Rm9yZXZlci5cbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaXMgcHVsc2VkICduJyBudW1iZXIgb2YgdGltZXMuIFxuICAgICAgICAqIEBwYXJhbSBpbnRlcnZhbCBJbnRlcnZhbCBiZXR3ZWVuIGVhY2ggcHVsc2UuIERlZmF1bHQgaXMgMCAoQ29udGludW91cyBwdWxzaW5nKS4gXG4gICAgICAgICogQHJldHVybnMgVHdlZW4gSW5zdGFuY2UuIENhbiBiZSB1c2VkIHRvIHN0b3Agb3IgY29udHJvbCB0aGUgdHdlZW4uIFxuICAgICAgICAqL1xuICAgICAgICBwdWxzZU5vZGUoc2NhbGVPZmZzZXQ/OiBudW1iZXIsIHB1bHNlRHVyYXRpb24/OiBudW1iZXIsIHJlcGVhdENvdW50PzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBpbnRlcnZhbD86IG51bWJlcik6IFR3ZWVuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAqIEVuYWJsZXMvRGlzYWJsZXMgdGhlIG5vZGUgd2l0aCBhIEZhZGVJbi9GYWRlT3V0IGVmZmVjdCByZXNwZWN0aXZlbHkuIFxuICAgICAgICAqIEBwYXJhbSBpc0FjdGl2ZSBTZXRzIHRoZSBhY3RpdmUgc3RhdGUgb2YgdGhlIG5vZGUuXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIEZhZGUgZHVyYXRpb24uXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGlzIEZhZGVkT3V0L0ZhZGVkSW4uIFxuICAgICAgICAqIEBwYXJhbSBlYXNpbmdUeXBlIFR5cGUgb2YgRWFzaW5nIHRvIGJlIHVzZWQgZm9yIFR3ZWVuaW5nLiBEZWZhdWx0IC0gJ2N1YmljT3V0J1xuICAgICAgICAqL1xuICAgICAgICBzZXRBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4sIGR1cmF0aW9uPzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlPzogc3RyaW5nKTogdm9pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgKiBNb3ZlcyB0aGUgbm9kZSB0byBhIGdpdmVuIGxvY2FsIHBvc2l0aW9uLiBcbiAgICAgICAgKiBAcGFyYW0gZmluYWxQb3MgRmluYWwgcG9zaXRpb24gb2YgdGhlIG5vZGUuXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIE1vdmUgZHVyYXRpb24uXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGhhcyByZWFjaGVkIHRoZSBmaW5hbCBwb3NpdGlvbi4gXG4gICAgICAgICogQHBhcmFtIGVhc2luZ1R5cGUgVHlwZSBvZiBFYXNpbmcgdG8gYmUgdXNlZCBmb3IgVHdlZW5pbmcuIERlZmF1bHQgLSAnc21vb3RoJ1xuICAgICAgICAqL1xuICAgICAgICBtb3ZlTm9kZShmaW5hbFBvczogY2MuVmVjMiwgZHVyYXRpb24/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU/OiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAqIE1vdmVzIHRoZSBub2RlIHRvIHRoZSBnaXZlbiBub2RlJ3MgcG9zaXRpb24gaXJyZXNwZWN0aXZlIG9mIHRoZWlyIHBhcmVudHMuIFxuICAgICAgICAqIEBwYXJhbSBvdGhlck5vZGUgTW92ZSB0b3dhcmRzIHRoaXMgbm9kZS5cbiAgICAgICAgKiBAcGFyYW0gZHVyYXRpb24gTW92ZSBkdXJhdGlvbi5cbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHJlYWNoZWQgdGhlIGZpbmFsIHBvc2l0aW9uLiBcbiAgICAgICAgKiBAcGFyYW0gZWFzaW5nVHlwZSBUeXBlIG9mIEVhc2luZyB0byBiZSB1c2VkIGZvciBUd2VlbmluZy4gRGVmYXVsdCAtICdzbW9vdGgnXG4gICAgICAgICovXG4gICAgICAgIG1vdmVUb05vZGUob3RoZXJOb2RlOiBjYy5Ob2RlLCBkdXJhdGlvbj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZT86IHN0cmluZyk6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICogTW92ZXMgdGhlIG5vZGUgdG8gYSBnaXZlbiBsb2NhbCBwb3NpdGlvbiBpbiBhIEN1cnZlZCBwYXRoLiBcbiAgICAgICAgKiBAcGFyYW0gZmluYWxQb3MgRmluYWwgcG9zaXRpb24gb2YgdGhlIG5vZGUuXG4gICAgICAgICogQHBhcmFtIGp1bXBIZWlnaHQgIEhlaWdodCBvZiB0aGUgY3VydmVkIHBhdGguXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIE1vdmUgZHVyYXRpb24uXG4gICAgICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIGFmdGVyIHRoZSBub2RlIGhhcyByZWFjaGVkIHRoZSBmaW5hbCBwb3NpdGlvbi4gXG4gICAgICAgICovXG4gICAgICAgIGJlemllck1vdmVOb2RlKGZpbmFsUG9zOiBjYy5WZWMyLCBqdW1wSGVpZ2h0PzogbnVtYmVyLCBkdXJhdGlvbj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICogUm90YXRlcyB0aGUgbm9kZS4gXG4gICAgICAgICogQHBhcmFtIGFuZ2xlVmFsdWUgRmluYWwgYW5nbGUgb2YgdGhlIG5vZGUuXG4gICAgICAgICogQHBhcmFtIGR1cmF0aW9uIFJvdGF0aW9uIGR1cmF0aW9uLlxuICAgICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBhZnRlciB0aGUgbm9kZSBoYXMgcm90YXRlZC4gXG4gICAgICAgICogQHBhcmFtIGVhc2luZ1R5cGUgVHlwZSBvZiBFYXNpbmcgdG8gYmUgdXNlZCBmb3IgVHdlZW5pbmcuIERlZmF1bHQgLSAnc21vb3RoJyBcbiAgICAgICAgKi9cbiAgICAgICAgcm90YXRlTm9kZShhbmdsZVZhbHVlOiBudW1iZXIsIGR1cmF0aW9uPzogbnVtYmVyLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlPzogc3RyaW5nKTogdm9pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgKiBTY2FsZXMgdGhlIG5vZGUuIFxuICAgICAgICAqIEBwYXJhbSBzY2FsZVZhbHVlIEZpbmFsIHNjYWxlIG9mIHRoZSBub2RlLlxuICAgICAgICAqIEBwYXJhbSBkdXJhdGlvbiBSb3RhdGlvbiBkdXJhdGlvbi5cbiAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgYWZ0ZXIgdGhlIG5vZGUgaGFzIHNjYWxlZC4gXG4gICAgICAgICogQHBhcmFtIGVhc2luZ1R5cGUgVHlwZSBvZiBFYXNpbmcgdG8gYmUgdXNlZCBmb3IgVHdlZW5pbmcuIERlZmF1bHQgLSAnc21vb3RoJyBcbiAgICAgICAgKi9cbiAgICAgICAgc2NhbGVOb2RlKHNjYWxlVmFsdWU6IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU/OiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAqIEdldHMgbG9jYWwgcG9zaXRpb24gb2YgdGhlIG5vZGUgaW4gYW5vdGhlciBub2RlIGNvb3JkaW5hdGUgc3lzdGVtLlxuICAgICAgICAqIEBwYXJhbSBvdGhlck5vZGUgTG9jYWwgcG9zaXRpb24gd2lsbCBiZSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBub2RlIGNvb3JkaW5hdGVzIG9mIHRoaXMgbm9kZS5cbiAgICAgICAgKiBAcGFyYW0gcG9zaXRpb24gUG9zaXRpb24gdG8gYmUgY2FsY3VsYXRlZC4gRGVmYXVsdCAtIEN1cnJlbnQgUG9zaXRpb24uIFxuICAgICAgICAqIEByZXR1cm5zIExvY2FsIHBvc2l0aW9uIG9mIHRoZSBub2RlLiBcbiAgICAgICAgKi9cbiAgICAgICAgaW52ZXJzZVRyYW5zZm9ybShvdGhlck5vZGU6IGNjLk5vZGUsIHBvc2l0aW9uPzogY2MuVmVjMik6IGNjLlZlYzI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICogU2V0cyBwYXJlbnQgb2YgdGhlIG5vZGUgd2hpbGUgcmV0YWluaW5nIHRoZSBzYW1lIHBvc2l0aW9uLlxuICAgICAgICAqIEBwYXJhbSBwYXJlbnROb2RlIFRoZSBuZXcgcGFyZW50IG9mIHRoZSBub2RlLiBcbiAgICAgICAgKi9cbiAgICAgICAgc2V0UGFyZW50V2l0aFNhbWVQb3MocGFyZW50Tm9kZTogTm9kZSk6IHZvaWQ7XG4gICAgfVxufVxuXG5jYy5Ob2RlLnByb3RvdHlwZS5ibGlua05vZGUgPSBmdW5jdGlvbiAoYmxpbmtEdXJhdGlvbjogbnVtYmVyID0gMSwgcmVwZWF0Q291bnQ6IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgbGV0IGZhZGVPdXQgPSBjYy50d2VlbigpLnRvKGJsaW5rRHVyYXRpb24gLyAyLCB7IG9wYWNpdHk6IDAgfSk7XG4gICAgbGV0IGZhZGVJbiA9IGNjLnR3ZWVuKCkudG8oYmxpbmtEdXJhdGlvbiAvIDIsIHsgb3BhY2l0eTogMjU1IH0pO1xuXG4gICAgaWYgKHJlcGVhdENvdW50ID09IC0xKSB7XG4gICAgICAgIHJldHVybiBjYy50d2Vlbih0aGlzKS5zZXF1ZW5jZShmYWRlT3V0LCBmYWRlSW4pLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xuICAgIH1cbiAgICByZXR1cm4gY2MudHdlZW4odGhpcylcbiAgICAgICAgLnNlcXVlbmNlKGZhZGVPdXQsIGZhZGVJbikucmVwZWF0KHJlcGVhdENvdW50KVxuICAgICAgICAuY2FsbChjYWxsYmFjaylcbiAgICAgICAgLnN0YXJ0KCk7XG59XG5cbmNjLk5vZGUucHJvdG90eXBlLnB1bHNlTm9kZSA9IGZ1bmN0aW9uIChzY2FsZU9mZnNldDogbnVtYmVyID0gMC41LCBwdWxzZUR1cmF0aW9uOiBudW1iZXIgPSAxLCByZXBlYXRDb3VudDogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgaW50ZXJ2YWw6IG51bWJlciA9IDApIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgbGV0IHNjYWxlVXAgPSBjYy50d2VlbigpLmJ5KHB1bHNlRHVyYXRpb24gLyAyLCB7IHNjYWxlOiBzY2FsZU9mZnNldCB9KTtcbiAgICBsZXQgc2NhbGVEb3duID0gY2MudHdlZW4oKS5ieShwdWxzZUR1cmF0aW9uIC8gMiwgeyBzY2FsZTogLXNjYWxlT2Zmc2V0IH0pO1xuICAgIGxldCBpbnRlcnZhbERlbGF5ID0gY2MudHdlZW4oKS5kZWxheShpbnRlcnZhbCk7XG4gICAgbGV0IHB1bHNlVHdlZW4gPSBjYy50d2Vlbih0aGlzKS5zZXF1ZW5jZShzY2FsZVVwLCBzY2FsZURvd24sIGludGVydmFsRGVsYXkpO1xuICAgIGlmIChyZXBlYXRDb3VudCA9PSAtMSkge1xuICAgICAgICByZXR1cm4gcHVsc2VUd2Vlbi5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHB1bHNlVHdlZW4ucmVwZWF0KHJlcGVhdENvdW50KVxuICAgICAgICAuY2FsbChjYWxsYmFjaylcbiAgICAgICAgLnN0YXJ0KCk7XG59XG5cbmNjLk5vZGUucHJvdG90eXBlLnBsYXlBbmltYXRpb24gPSBmdW5jdGlvbiAoY2xpcE5hbWU6IHN0cmluZywgcmVwZWF0Q291bnQ6IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24sIHdyYXBNb2RlPzogY2MuV3JhcE1vZGUpOiBudW1iZXIge1xuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybiAwO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgIGxldCBhbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIGlmIChhbmltYXRpb24gPT0gbnVsbCkgcmV0dXJuIDA7XG5cbiAgICBsZXQgYW5pbVN0YXRlID0gYW5pbWF0aW9uLnBsYXkoY2xpcE5hbWUpO1xuICAgIGlmIChhbmltU3RhdGUgPT0gbnVsbCkgcmV0dXJuIDA7XG5cbiAgICBpZiAod3JhcE1vZGUpIGFuaW1TdGF0ZS53cmFwTW9kZSA9IHdyYXBNb2RlO1xuICAgIGlmIChhbmltU3RhdGUud3JhcE1vZGUgPT0gY2MuV3JhcE1vZGUuTG9vcCkgcmV0dXJuIDA7XG5cbiAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSByZXBlYXRDb3VudDtcbiAgICBsZXQgYW5pbUR1cmF0aW9uID0gKGFuaW1TdGF0ZS5kdXJhdGlvbiAvIGFuaW1TdGF0ZS5zcGVlZCkgKiByZXBlYXRDb3VudDtcblxuICAgIGNjLnR3ZWVuKHRoaXMpLmRlbGF5KGFuaW1EdXJhdGlvbikuY2FsbChjYWxsYmFjaykuc3RhcnQoKTtcblxuICAgIHJldHVybiBhbmltRHVyYXRpb247XG59XG5cbmNjLk5vZGUucHJvdG90eXBlLnJlc2V0QW5pbSA9IGZ1bmN0aW9uIChhbmltTmFtZT86IHN0cmluZykge1xuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcblxuICAgIGxldCBhbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIGlmIChhbmltYXRpb24gPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgYW5pbWF0aW9uLnN0b3AoYW5pbU5hbWUpO1xuICAgIGFuaW1hdGlvbi5zZXRDdXJyZW50VGltZSgwLCBhbmltTmFtZSk7XG59XG5cbmNjLk5vZGUucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uIChpc0FjdGl2ZTogYm9vbGVhbiwgZHVyYXRpb246IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU6IHN0cmluZyA9ICdjdWJpY091dCcpIHtcbiAgICBpZiAodGhpcyA9PSBudWxsIHx8IHRoaXMuYWN0aXZlID09IGlzQWN0aXZlKSByZXR1cm47XG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB2YXIgb3BhY2l0eVZhbHVlID0gMjU1O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB2YXIgb3BhY2l0eVZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBvcGFjaXR5OiBvcGFjaXR5VmFsdWUgfSwgeyBlYXNpbmc6IGVhc2luZ1R5cGUgfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0FjdGl2ZSkgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG59XG5cbmNjLk5vZGUucHJvdG90eXBlLm1vdmVOb2RlID0gZnVuY3Rpb24gKGZpbmFsUG9zOiBjYy5WZWMyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm47XG5cbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBwb3NpdGlvbjogZmluYWxQb3MgfSwgeyBlYXNpbmc6IGVhc2luZ1R5cGUgfSlcbiAgICAgICAgLmNhbGwoY2FsbGJhY2spXG4gICAgICAgIC5zdGFydCgpO1xufVxuXG5jYy5Ob2RlLnByb3RvdHlwZS5tb3ZlVG9Ob2RlID0gZnVuY3Rpb24gKG90aGVyTm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGVhc2luZ1R5cGU6IHN0cmluZyA9ICdzbW9vdGgnKSB7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbmFsUG9zID0gb3RoZXJOb2RlLmludmVyc2VUcmFuc2Zvcm0odGhpcy5wYXJlbnQpO1xuXG4gICAgY2MudHdlZW4odGhpcykudG8oZHVyYXRpb24sIHsgcG9zaXRpb246IGZpbmFsUG9zIH0sIHsgZWFzaW5nOiBlYXNpbmdUeXBlIH0pXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxuICAgICAgICAuc3RhcnQoKTtcbn1cblxuY2MuTm9kZS5wcm90b3R5cGUuYmV6aWVyTW92ZU5vZGUgPSBmdW5jdGlvbiAoZmluYWxQb3M6IGNjLlZlYzIsIGp1bXBIZWlnaHQ6IG51bWJlciA9IDIwMCwgZHVyYXRpb246IG51bWJlciA9IDEsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm47XG5cbiAgICBsZXQgaW5pdFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICBsZXQgdGFyZ2V0VmVjdG9yID0gZmluYWxQb3Muc3ViKGluaXRQb3MpO1xuXG4gICAgbGV0IGZpcnN0Q29udHJvbFBvaW50ID0gY2MudjIoaW5pdFBvcy54ICsgdGFyZ2V0VmVjdG9yLnggKiAwLjQsIGluaXRQb3MueSArIGp1bXBIZWlnaHQpO1xuICAgIGxldCBzZWNvbmRDb250cm9sUG9pbnQgPSBjYy52Mihpbml0UG9zLnggKyB0YXJnZXRWZWN0b3IueCAqIDAuOCwgaW5pdFBvcy55ICsganVtcEhlaWdodCk7XG5cbiAgICBjYy50d2Vlbih0aGlzKVxuICAgICAgICAuYmV6aWVyVG8oZHVyYXRpb24sIGZpcnN0Q29udHJvbFBvaW50LCBzZWNvbmRDb250cm9sUG9pbnQsIGZpbmFsUG9zKVxuICAgICAgICAuY2FsbChjYWxsYmFjaylcbiAgICAgICAgLnN0YXJ0KCk7XG59XG5cbmNjLk5vZGUucHJvdG90eXBlLnJvdGF0ZU5vZGUgPSBmdW5jdGlvbiAoYW5nbGVWYWx1ZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgZWFzaW5nVHlwZTogc3RyaW5nID0gJ3Ntb290aCcpIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSByZXR1cm47XG5cbiAgICBjYy50d2Vlbih0aGlzKS50byhkdXJhdGlvbiwgeyBhbmdsZTogYW5nbGVWYWx1ZSB9LCB7IGVhc2luZzogZWFzaW5nVHlwZSB9KVxuICAgICAgICAuY2FsbChjYWxsYmFjaylcbiAgICAgICAgLnN0YXJ0KCk7XG59XG5cbmNjLk5vZGUucHJvdG90eXBlLnNjYWxlTm9kZSA9IGZ1bmN0aW9uIChzY2FsZVZhbHVlOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAxLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCBlYXNpbmdUeXBlOiBzdHJpbmcgPSAnc21vb3RoJykge1xuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcblxuICAgIGNjLnR3ZWVuKHRoaXMpLnRvKGR1cmF0aW9uLCB7IHNjYWxlOiBzY2FsZVZhbHVlIH0sIHsgZWFzaW5nOiBlYXNpbmdUeXBlIH0pXG4gICAgICAgIC5jYWxsKGNhbGxiYWNrKVxuICAgICAgICAuc3RhcnQoKTtcbn1cblxuY2MuTm9kZS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIChvdGhlck5vZGU6IGNjLk5vZGUsIHBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbCkge1xuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybiBjYy5WZWMyLlpFUk87XG5cbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgbGV0IHdvcmxkUG9zID0gdGhpcy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc2l0aW9uKTtcbiAgICBsZXQgbG9jYWxQb3MgPSBvdGhlck5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgIHJldHVybiBsb2NhbFBvcztcbn1cblxuY2MuTm9kZS5wcm90b3R5cGUuc2V0UGFyZW50V2l0aFNhbWVQb3MgPSBmdW5jdGlvbiAocGFyZW50Tm9kZTogY2MuTm9kZSkge1xuICAgIGlmICh0aGlzID09IG51bGwpIHJldHVybjtcblxuICAgIGxldCBsb2NhbFBvcyA9IHRoaXMuaW52ZXJzZVRyYW5zZm9ybShwYXJlbnROb2RlKTtcbiAgICB0aGlzLnNldFBhcmVudChwYXJlbnROb2RlKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKGxvY2FsUG9zKTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Prefabs/Progressbar/ProgressBar/Scripts/ProgressBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e08b0tRP5pPcZvun88UXG3h', 'ProgressBar');
// Framework/Prefabs/Progressbar/ProgressBar/Scripts/ProgressBar.ts

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
var StartGame_1 = require("../../../../Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isVertical = false;
        _this.starsEarned = [false, false, false];
        return _this;
        // update (dt) {}
    }
    ProgressBar_1 = ProgressBar;
    Object.defineProperty(ProgressBar, "Instance", {
        get: function () {
            return ProgressBar_1.instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    ProgressBar.prototype.onLoad = function () {
        // cc.game.addPersistRootNode(this.node);
        ProgressBar_1.instance = this;
    };
    ProgressBar.prototype.start = function () {
    };
    ProgressBar.prototype.ProgressFill = function (_currentQues, starLog) {
        if (starLog === void 0) { starLog = true; }
        // this.createStarTrails(10, this.node);
        var particles = this.node.getChildByName("particles" + 1);
        var maxLevels = StartGame_1.default.Instance.totalLevels; //totalLevels
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(0.5, { progress: value }, { easing: "sineInOut" }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (_currentQues != 0 && _currentQues < maxLevels && _currentQues < maxLevels / 2) {
            if (!this.starsEarned[0] && starLog) {
                this.starsEarned[0] = true;
                console.log("starsEarned--1");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels && this.node.getChildByName("stars").children[1].opacity == 0) {
            if (!this.starsEarned[1] && starLog) {
                this.starsEarned[1] = true;
                console.log("starsEarned--2");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
        else if (_currentQues >= maxLevels && this.node.getChildByName("stars").children[2].opacity == 0) {
            if (!this.starsEarned[2] && starLog) {
                this.starsEarned[2] = true;
                console.log("starsEarned--3");
            }
            cc.tween(this.node.getChildByName("stars").children[0]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[1]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
            cc.tween(this.node.getChildByName("stars").children[2]).to(0.5, { opacity: 255 }, { easing: "sineInOut" }).start();
        }
    };
    ProgressBar.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        // _number = _number * this.shapes.length;
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    ProgressBar.prototype.createStarTrails = function (num, _node) {
        var _this = this;
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function (i) {
            var NodePOS = _node.convertToWorldSpaceAR(this_1.node.parent.position);
            var rngX = this_1.getRandomNumber(_node.x - _offset, _node.x + _offset);
            var rngY = this_1.getRandomNumber(_node.y - _offset, _node.y + _offset);
            var particles = cc.instantiate(new cc.Node);
            var trail = cc.instantiate(new cc.Node);
            particles.parent = this_1.node.parent;
            trail.parent = particles;
            particles.x = rngX;
            particles.y = rngY;
            particles.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
            particles.addComponent(cc.AudioSource).clip = this_1.particleSounds;
            particles.width = 600;
            particles.height = 600;
            particles.angle = this_1.getRandomNumber(0, 360);
            particles.zIndex = -1;
            particles.name = "particles" + i;
            particles.opacity = 0;
            trail.addComponent(cc.MotionStreak).preview;
            trail.getComponent(cc.MotionStreak).texture = this_1.trailsImg;
            trail.getComponent(cc.MotionStreak).enabled = false;
            // trail.color = new cc.Color(252, 244, 0);
            this_1.scheduleOnce(function () {
                particles.getComponent(cc.AudioSource).play();
                cc.tween(particles).to(0.75, { width: 35, height: 35 }, { easing: "backOut" }).start();
                cc.tween(particles).to(0.25, { angle: 0 }, { easing: "cubicInOut" })
                    .to(0.25, { angle: 180 }, { easing: "cubicInOut" }).start().to(0.25, { angle: 360 }, { easing: "cubicInOut" });
                cc.tween(particles).to(0.25, { opacity: 255 }, { easing: "cubicInOut" }).call(function () {
                    _this.scheduleOnce(function () {
                        trail.getComponent(cc.MotionStreak).minSeg = 10;
                        trail.getComponent(cc.MotionStreak).stroke = 20;
                        trail.getComponent(cc.MotionStreak).fadeTime = 0.2;
                        trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                        trail.getComponent(cc.MotionStreak).enabled = true;
                        trail.getComponent(cc.MotionStreak).fastMode = true;
                        cc.audioEngine.playEffect(_this.trailSounds, false);
                        // particles.getComponent(cc.AudioSource).clip = this.trailSounds;
                        // particles.getComponent(cc.AudioSource).volume = 0.2;
                        // particles.getComponent(cc.AudioSource).play();
                        if (_this.isVertical) {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x, _this.node.y - (_offset * 2) - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress))) //endpoint
                                .start();
                        }
                        else {
                            cc.tween(particles).bezierTo(0.75, new cc.Vec2(particles.x, particles.y), //start
                            new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), //curve range
                            new cc.Vec2(_this.node.x - (_offset * 2) - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + (_this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress), _this.node.y)) //endpoint
                                .start();
                        }
                        cc.tween(particles).to(0.75, { angle: -particles.angle / 2 }, { easing: "cubicInOut" }).start();
                        cc.tween(particles).to(0.75, { scale: 0 }, { easing: "cubicIn" }).call(function () {
                            particles.destroy();
                        }).start();
                    }, 0.5);
                }).start();
            }, 0.1 * (i + 1));
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) {
            _loop_1(i);
        }
    };
    var ProgressBar_1;
    ProgressBar.instance = null;
    __decorate([
        property(Boolean)
    ], ProgressBar.prototype, "isVertical", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ProgressBar.prototype, "starImg", void 0);
    __decorate([
        property(cc.Texture2D)
    ], ProgressBar.prototype, "trailsImg", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "trailSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "particleSounds", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ProgressBar.prototype, "starPopSound", void 0);
    ProgressBar = ProgressBar_1 = __decorate([
        ccclass
    ], ProgressBar);
    return ProgressBar;
}(cc.Component));
exports.default = ProgressBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc2Jhci9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJEQUFzRDtBQUdoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9KQztRQWhKVyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQWM1QixpQkFBVyxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFpSXZELGlCQUFpQjtJQUNyQixDQUFDO29CQXBKb0IsV0FBVztJQW9CNUIsc0JBQVcsdUJBQVE7YUFBbkI7WUFDSSxPQUFPLGFBQVcsQ0FBQyxRQUFRLENBQUE7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLHlDQUF5QztRQUN6QyxhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0QsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsWUFBb0IsRUFBRSxPQUF1QjtRQUF2Qix3QkFBQSxFQUFBLGNBQXVCO1FBQ3RELHdDQUF3QztRQUN4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxTQUFTLEdBQUcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUEsYUFBYTtRQUM1RCxJQUFJLEtBQUssR0FBRyxZQUFZ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O3dCQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDZixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7OztRQTNEdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLENBQUMsRUFBRTtvQkFBbEMsQ0FBQztTQTREVDtJQUNMLENBQUM7O0lBOUljLG9CQUFRLEdBQWdCLElBQUksQ0FBQztJQUU1QztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7bURBQ2tCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDUztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7dURBQ2M7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDWTtJQWhCbEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW9KL0I7SUFBRCxrQkFBQztDQXBKRCxBQW9KQyxDQXBKd0MsRUFBRSxDQUFDLFNBQVMsR0FvSnBEO2tCQXBKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHRzL1N0YXJ0R2FtZVwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxuICAgIHByaXZhdGUgaXNWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgc3RhckltZzogY2MuU3ByaXRlRnJhbWU7XG4gICAgQHByb3BlcnR5KGNjLlRleHR1cmUyRClcbiAgICBwcml2YXRlIHRyYWlsc0ltZzogY2MuVGV4dHVyZTJEO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHRyYWlsU291bmRzOiBjYy5BdWRpb0NsaXA7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHBhcnRpY2xlU291bmRzOiBjYy5BdWRpb0NsaXA7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIHN0YXJQb3BTb3VuZDogY2MuQXVkaW9DbGlwO1xuXG4gICAgcHJpdmF0ZSBzdGFyc0Vhcm5lZDogQm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb2dyZXNzQmFyLmluc3RhbmNlXG4gICAgfVxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIFByb2dyZXNzQmFyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBQcm9ncmVzc0ZpbGwoX2N1cnJlbnRRdWVzOiBudW1iZXIsIHN0YXJMb2c6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIC8vIHRoaXMuY3JlYXRlU3RhclRyYWlscygxMCwgdGhpcy5ub2RlKTtcbiAgICAgICAgbGV0IHBhcnRpY2xlcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlc1wiICsgMSk7XG4gICAgICAgIGxldCBtYXhMZXZlbHMgPSBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHM7Ly90b3RhbExldmVsc1xuICAgICAgICBsZXQgdmFsdWUgPSBfY3VycmVudFF1ZXMgLyBtYXhMZXZlbHM7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpKS50bygwLjUsIHsgcHJvZ3Jlc3M6IHZhbHVlIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnN0YXJQb3BTb3VuZDtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICBpZiAoX2N1cnJlbnRRdWVzICE9IDAgJiYgX2N1cnJlbnRRdWVzIDwgbWF4TGV2ZWxzICYmIF9jdXJyZW50UXVlcyA8IG1heExldmVscyAvIDIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGFyc0Vhcm5lZFswXSAmJiBzdGFyTG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFswXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tMVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfY3VycmVudFF1ZXMgPj0gbWF4TGV2ZWxzIC8gMiAmJiBfY3VycmVudFF1ZXMgPCBtYXhMZXZlbHMgJiYgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMV0ub3BhY2l0eSA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnNFYXJuZWRbMV0gJiYgc3RhckxvZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnNFYXJuZWRbMV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnNFYXJuZWQtLTJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblswXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMV0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2N1cnJlbnRRdWVzID49IG1heExldmVscyAmJiB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsyXS5vcGFjaXR5ID09IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGFyc0Vhcm5lZFsyXSAmJiBzdGFyTG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFyc0Vhcm5lZFsyXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyc0Vhcm5lZC0tM1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJzXCIpLmNoaWxkcmVuWzBdKS50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyc1wiKS5jaGlsZHJlblsxXSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIikuY2hpbGRyZW5bMl0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAvLyBfbnVtYmVyID0gX251bWJlciAqIHRoaXMuc2hhcGVzLmxlbmd0aDtcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xuICAgICAgICByZXR1cm4gX251bWJlcjtcblxuICAgIH1cblxuICAgIGNyZWF0ZVN0YXJUcmFpbHMobnVtOiBudW1iZXIsIF9ub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBybmdfTnVtT2ZQYXJ0aWNsZXMgPSBudW07XG4gICAgICAgIGxldCBfb2Zmc2V0ID0gNTBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBybmdfTnVtT2ZQYXJ0aWNsZXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IE5vZGVQT1MgPSBfbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLnBhcmVudC5wb3NpdGlvbik7XG4gICAgICAgICAgICBsZXQgcm5nWCA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9ub2RlLnggLSBfb2Zmc2V0LCBfbm9kZS54ICsgX29mZnNldCk7XG4gICAgICAgICAgICBsZXQgcm5nWSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKF9ub2RlLnkgLSBfb2Zmc2V0LCBfbm9kZS55ICsgX29mZnNldCk7XG4gICAgICAgICAgICBsZXQgcGFydGljbGVzID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xuICAgICAgICAgICAgbGV0IHRyYWlsID0gY2MuaW5zdGFudGlhdGUobmV3IGNjLk5vZGUpO1xuICAgICAgICAgICAgcGFydGljbGVzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB0cmFpbC5wYXJlbnQgPSBwYXJ0aWNsZXM7XG4gICAgICAgICAgICBwYXJ0aWNsZXMueCA9IHJuZ1g7XG4gICAgICAgICAgICBwYXJ0aWNsZXMueSA9IHJuZ1k7XG4gICAgICAgICAgICBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnN0YXJJbWc7XG4gICAgICAgICAgICBwYXJ0aWNsZXMuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5jbGlwID0gdGhpcy5wYXJ0aWNsZVNvdW5kcztcbiAgICAgICAgICAgIHBhcnRpY2xlcy53aWR0aCA9IDYwMDtcbiAgICAgICAgICAgIHBhcnRpY2xlcy5oZWlnaHQgPSA2MDA7XG4gICAgICAgICAgICBwYXJ0aWNsZXMuYW5nbGUgPSB0aGlzLmdldFJhbmRvbU51bWJlcigwLCAzNjApO1xuICAgICAgICAgICAgcGFydGljbGVzLnpJbmRleCA9IC0xO1xuICAgICAgICAgICAgcGFydGljbGVzLm5hbWUgPSBgcGFydGljbGVzYCArIGk7XG4gICAgICAgICAgICBwYXJ0aWNsZXMub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0cmFpbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5wcmV2aWV3O1xuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykudGV4dHVyZSA9IHRoaXMudHJhaWxzSW1nO1xuICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdHJhaWwuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjUyLCAyNDQsIDApO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgd2lkdGg6IDM1LCBoZWlnaHQ6IDM1IH0sIHsgZWFzaW5nOiBgYmFja091dGAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgYW5nbGU6IDAgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBhbmdsZTogMTgwIH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuc3RhcnQoKS50bygwLjI1LCB7IGFuZ2xlOiAzNjAgfSwgeyBlYXNpbmc6IGBjdWJpY0luT3V0YCB9KTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuMjUsIHsgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLm1pblNlZyA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuc3Ryb2tlID0gMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYWRlVGltZSA9IDAuMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsLmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWwuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhaykuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbC5nZXRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKS5mYXN0TW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMudHJhaWxTb3VuZHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlcy5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLmNsaXAgPSB0aGlzLnRyYWlsU291bmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkudm9sdW1lID0gMC4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbygwLjc1LCBuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLCAvL3N0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSAtIChfb2Zmc2V0ICogMikgLSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAvIDIgKyAodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikudG90YWxMZW5ndGggKiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcykpKSAvL2VuZHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocGFydGljbGVzKS5iZXppZXJUbygwLjc1LCBuZXcgY2MuVmVjMihwYXJ0aWNsZXMueCwgcGFydGljbGVzLnkpLCAvL3N0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy54IC0gMTAwLCBwYXJ0aWNsZXMueCArIDEwMCksIHRoaXMuZ2V0UmFuZG9tTnVtYmVyKHBhcnRpY2xlcy55IC0gNTAwLCBwYXJ0aWNsZXMueSArIDIwMCkpLCAvL2N1cnZlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5WZWMyKHRoaXMubm9kZS54IC0gKF9vZmZzZXQgKiAyKSAtIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnRvdGFsTGVuZ3RoIC8gMiArICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS50b3RhbExlbmd0aCAqIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzKSwgdGhpcy5ub2RlLnkpKSAvL2VuZHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihwYXJ0aWNsZXMpLnRvKDAuNzUsIHsgYW5nbGU6IC1wYXJ0aWNsZXMuYW5nbGUgLyAyIH0sIHsgZWFzaW5nOiBgY3ViaWNJbk91dGAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHBhcnRpY2xlcykudG8oMC43NSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogYGN1YmljSW5gIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9LCAwLjEgKiAoaSArIDEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/WordBlend/scripts/gameplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b0c1F+W1KLotXneaw3WMc', 'gameplay');
// Games/WordBlend/scripts/gameplay.ts

"use strict";
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
var ProgressBar_1 = require("../../../Framework/Prefabs/Progressbar/ProgressBar/Scripts/ProgressBar");
var StartGame_1 = require("../../../Framework/Scripts/StartGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.options = null;
        _this.wordsNode = null;
        _this.myOptions = null;
        _this.correctAnswer = "1";
        _this.correctAction = null;
        _this.incorrectButton = [];
        _this.rotateAction = null;
        _this.swipeAction = null;
        _this.puzzleQuestionVo = null;
        _this.puzzleVoIteration = null;
        _this.wordVoQuestion = null;
        _this.wordVoIteration = null;
        _this.jockeyCorrect2 = null;
        _this.wrongAnswer = null;
        // @property(cc.SpriteFrame)
        _this.temporarySprites = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.stallionPositive = [];
        _this.stallionNegative = [];
        _this.bagPositive = [];
        _this.bagNegative = [];
        _this.cryonPositive = [];
        _this.cryonNegative = [];
        _this.tlcPositive = [];
        _this.tlcNegative = [];
        _this.supercubPositive = [];
        _this.supercubNegative = [];
        _this.isSecondInteraction = true;
        _this.interactionType = "1";
        _this.currentJockey = null;
        _this.selectable = false;
        _this.questionPlaying = false;
        _this.correctWordSeq = ["132"];
        _this.currWordSeq = "";
        _this.currScene = 1;
        _this.colorValue = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // if (startGame.Instance.jockeyName == "Podar") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        // }
        // else if (startGame.Instance.jockeyName == "tlc") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        // }
        // else if (startGame.Instance.jockeyName == "supercub") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        // }
        // else if (startGame.Instance.jockeyName == "bag" || startGame.Instance.jockeyName == "cryon") {
        //     this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        //     this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        // }
        this.isSecondInteraction = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].needReiteration;
        this.interactionType = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].interactionType;
        if (this.isSecondInteraction) {
            // for (let i = 0; startGame.Instance.questions[startGame.Instance.currentLevel - 1].numberOfOptions; i++) {
            //     this.currWordSeq += (i + 1).toString();
            // }
            if (this.interactionType == "1") {
                this.GenerateOptions(this.myOptions, "template1");
                this.correctAnswer = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
            else {
                this.GenerateOptions(this.wordsNode, "template2");
                this.correctWordSeq[0] = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswer;
            }
        }
    };
    NewClass.prototype.resetInteraction = function () {
        this.unschedule(this.sheduleQuestionClip);
        this.scheduleOnce(this.sheduleQuestionClip, 10);
    };
    NewClass.prototype.start = function () {
        var _this = this;
        if (StartGame_1.default.Instance.jockeyName == "bag") {
            this.positiveAudio = this.bagPositive;
            this.negativeAudio = this.bagNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            this.positiveAudio = this.cryonPositive;
            this.negativeAudio = this.cryonNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.positiveAudio = this.stallionPositive;
            this.negativeAudio = this.stallionNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            this.positiveAudio = this.tlcPositive;
            this.negativeAudio = this.tlcNegative;
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            this.positiveAudio = this.supercubPositive;
            this.negativeAudio = this.supercubNegative;
        }
        this.UpdateJsonData();
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.colorValue = this.options.color;
        this.currScene = StartGame_1.default.Instance.currentLevel;
        ProgressBar_1.default.Instance.ProgressFill(this.currScene - 1, false);
        console.log("levelStarted--" + this.currScene);
        if (this.currScene >= StartGame_1.default.Instance.totalLevels) {
            cc.director.preloadScene("GameEnd");
        }
        else {
            cc.director.preloadScene((this.currScene + 1).toString());
        }
        StartGame_1.default.Instance.clickEvent = false;
        var canvas = cc.find("Canvas");
        canvas.on('touchstart', function (event) {
            if (!StartGame_1.default.Instance.clickEvent) {
                {
                    StartGame_1.default.Instance.clickEvent = true;
                    console.log("firstClick--" + this.currScene);
                }
            }
        }, this);
        this.scheduleOnce(function () {
            _this.InitiateGame();
        }, 1);
    };
    NewClass.prototype.UpdateJsonData = function () {
        var _this = this;
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleQuestionVo = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_1 = function (i) {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    _this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                _loop_1(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.puzzleVoIteration = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName2, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoQuestion = audioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName, function (err, texture) {
                    if (err) {
                        console.error("Failed to load image:", err);
                        return;
                    }
                    var spriteFrame = new cc.SpriteFrame(texture);
                    for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_2 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (err, texture) {
                        if (err) {
                            console.error("Failed to load image:", err);
                            return;
                        }
                        var spriteFrame = new cc.SpriteFrame(texture);
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this_1.interactionType == "1") {
                        this_1.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_1.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_2(i);
            }
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName, function (err, audioClip) {
                if (err) {
                    console.error("Failed to load audio clip:", err);
                    return;
                }
                _this.wordVoIteration = audioClip;
            });
        }
        else {
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function (AudioClip) {
                _this.puzzleQuestionVo = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonPuzzleImageName, function (spriteFrame) {
                    _this.node.getChildByName("frame").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            }
            var _loop_3 = function (i) {
                this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].puzzles[i], function (spriteFrame) {
                    _this.node.getChildByName("frame").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
            };
            var this_2 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles; i++) {
                _loop_3(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function (AudioClip) {
                _this.puzzleVoIteration = AudioClip;
            });
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName2, function (AudioClip) {
                _this.wordVoQuestion = AudioClip;
            });
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName != "") {
                this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].commonOptionImageName, function (spriteFrame) {
                    for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.currWordSeq += (i + 1).toString();
                            _this.wordsNode.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        // console.log("currWordSeq--" + this.currWordSeq);
                    }
                });
            }
            var _loop_4 = function (i) {
                if (!StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText) {
                    this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function (spriteFrame) {
                        if (_this.interactionType == "1") {
                            _this.myOptions.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                        else {
                            _this.wordsNode.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        }
                    });
                }
                else {
                    if (this_3.interactionType == "1") {
                        this_3.myOptions.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                    else {
                        this_3.wordsNode.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i];
                    }
                }
            };
            var this_3 = this;
            for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
                _loop_4(i);
            }
            this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName, function (AudioClip) {
                _this.wordVoIteration = AudioClip;
            });
        }
        this.currentJockey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJockey.active = true;
    };
    NewClass.prototype.UpdateOptions = function () {
        this.options.active = false;
        this.node.getChildByName("hint").active = false;
        var _width = 250;
        var _height = 250;
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles == 4) {
            _width = 250;
            _height = 250;
        }
        else if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles == 9) {
            _width = 166;
            _height = 166;
        }
        for (var i = 0; i < this.options.children.length; i++) {
            this.options.children[i].width = _width;
            this.options.children[i].height = _height;
            if (i >= StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfPuzzles) {
                this.options.children[i].destroy();
            }
        }
    };
    NewClass.prototype.InitiateGame = function () {
        var _this = this;
        //repeat method
        this.UpdateOptions();
        this.sheduleQuestionClip = function () {
            if (_this.interactable) {
                cc.audioEngine.playEffect(_this.puzzleQuestionVo, false);
            }
            _this.options.children.forEach(function (_child) {
                if (_child.angle % 360 != 0) {
                    cc.tween(_child)
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .to(0.1, { opacity: 100 })
                        .to(0.1, { opacity: 255 })
                        .start();
                }
            });
            _this.scheduleOnce(function () { _this.resetInteraction(); }, 0);
        };
        this.scheduleOnce(function () {
            _this.SetFrameOptions();
        }, 0.1);
        this.wordsNode.children.forEach(function (element) {
            element.on('touchstart', function (_event) { _this.wordTouchStart(_event); });
            element.on('touchmove', function (_event) { _this.wordTouchMove(_event); });
            element.on('touchend', function (_event) { _this.wordTouchEnd(_event); });
        });
    };
    NewClass.prototype.SetFrameOptions = function () {
        var _this = this;
        this.options.active = true;
        if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isHintRequired) {
            this.node.getChildByName("hint").active = true;
        }
        if (this.options.childrenCount == 4) {
            this.options.children[0].setPosition(-this.options.children[0].width / 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(this.options.children[1].width / 2, this.options.children[1].height / 2);
            this.options.children[2].setPosition(-this.options.children[2].width / 2, -this.options.children[2].height / 2);
            this.options.children[3].setPosition(this.options.children[3].width / 2, -this.options.children[3].height / 2);
        }
        else if (this.options.childrenCount == 9) {
            var threshHold_1 = 1;
            this.options.children[0].setPosition(-(this.options.children[0].width) + threshHold_1, this.options.children[0].height - threshHold_1);
            this.options.children[1].setPosition(0, this.options.children[1].height - threshHold_1);
            this.options.children[2].setPosition(this.options.children[2].width - threshHold_1, this.options.children[2].height - threshHold_1);
            this.options.children[3].setPosition(-(this.options.children[3].width) + threshHold_1, 0);
            this.options.children[4].setPosition(0, 0);
            this.options.children[5].setPosition(this.options.children[5].width - threshHold_1, 0);
            this.options.children[6].setPosition(-(this.options.children[6].width) + threshHold_1, -(this.options.children[6].height) + threshHold_1);
            this.options.children[7].setPosition(0, -(this.options.children[7].height) + threshHold_1);
            this.options.children[8].setPosition(this.options.children[8].width - threshHold_1, -(this.options.children[8].height) + threshHold_1);
        }
        else if (this.options.childrenCount == 6) {
            this.options.children[0].setPosition(-this.options.children[0].width + 2, this.options.children[0].height / 2);
            this.options.children[1].setPosition(0, this.options.children[1].height / 2);
            this.options.children[2].setPosition(this.options.children[2].width - 2, this.options.children[2].height / 2);
            this.options.children[3].setPosition(-this.options.children[3].width + 2, -this.options.children[3].height / 2);
            this.options.children[4].setPosition(0, -this.options.children[4].height / 2);
            this.options.children[5].setPosition(this.options.children[3].width - 2, -this.options.children[3].height / 2);
        }
        else if (this.options.childrenCount == 16) {
            var threshHold = 62.5;
            this.options.children[0].setPosition(-this.options.children[0].width - threshHold, this.options.children[0].height + threshHold);
            this.options.children[1].setPosition(-this.options.children[1].width / 2, this.options.children[1].height + threshHold);
            this.options.children[2].setPosition(this.options.children[2].width / 2, this.options.children[2].height + threshHold);
            this.options.children[3].setPosition(this.options.children[3].width + threshHold, this.options.children[3].height + threshHold);
            this.options.children[4].setPosition(-this.options.children[4].width - threshHold, this.options.children[4].height / 2);
            this.options.children[5].setPosition(-this.options.children[5].width / 2, this.options.children[5].height / 2);
            this.options.children[6].setPosition(this.options.children[6].width / 2, this.options.children[6].height / 2);
            this.options.children[7].setPosition(this.options.children[7].width + threshHold, this.options.children[7].height / 2);
            this.options.children[8].setPosition(-(this.options.children[8].width + threshHold), -this.options.children[8].height / 2);
            this.options.children[9].setPosition(-(this.options.children[9].width / 2), -this.options.children[9].height / 2);
            this.options.children[10].setPosition((this.options.children[10].width / 2), -this.options.children[10].height / 2);
            this.options.children[11].setPosition((this.options.children[11].width + threshHold), -this.options.children[11].height / 2);
            this.options.children[12].setPosition(-(this.options.children[12].width + threshHold), -this.options.children[12].height - threshHold);
            this.options.children[13].setPosition(-(this.options.children[13].width / 2), -this.options.children[13].height - threshHold);
            this.options.children[14].setPosition((this.options.children[14].width / 2), -this.options.children[14].height - threshHold);
            this.options.children[15].setPosition((this.options.children[15].width + threshHold), -this.options.children[15].height - threshHold);
        }
        for (var i = 0; i < this.options.childrenCount; i++) {
            var clone = cc.instantiate(this.options.children[i]);
            clone.setParent(this.node.getChildByName("hint").getChildByName("hint"));
            clone.setPosition(this.options.children[i].getPosition());
        }
        var _randomNumber = 1;
        this.options.children.forEach(function (element) {
            element.active = true;
            _randomNumber = _this.getRandomNumber(_randomNumber);
            element.angle = -(90 * _randomNumber);
        });
        this.options.scale = 0.8;
        this.options.opacity = 100;
        this.node.getChildByName("hint").opacity = 100;
        this.node.getChildByName("hint").scale = 0;
        cc.tween(this.options)
            .to(0.8, { scale: 1, opacity: 255 })
            .call(function () {
            cc.tween(_this.node.getChildByName("hint"))
                .to(0.5, { scale: 0.3, opacity: 255 })
                .call(function () {
                var duration = 0;
                if (_this.puzzleQuestionVo) {
                    duration = _this.puzzleQuestionVo.duration - 0.3;
                    cc.audioEngine.playEffect(_this.puzzleQuestionVo, false);
                }
                var handNode = _this.node.getChildByName("handClick");
                if (_this.currScene <= 3) {
                    handNode.active = true;
                    handNode.getComponent(cc.Animation).play();
                    handNode.getComponent(cc.Animation).on("finished", function () {
                    });
                }
                _this.scheduleOnce(function () {
                    _this.scheduleOnce(function () {
                        _this.interactable = true;
                        _this.scheduleOnce(_this.sheduleQuestionClip, 10);
                        _this.resetInteraction();
                        if (_this.currScene < 4)
                            _this.rotatePuzzleImage(_this.options.getChildByName("1"));
                    }, 0.2);
                }, duration);
            })
                .start();
        })
            .start();
    };
    NewClass.prototype.optionClicked = function (_event) {
        this.resetInteraction();
        var handNode = this.node.getChildByName("handClick");
        handNode.active = false;
        if (!StartGame_1.default.Instance.clickEvent) {
            {
                StartGame_1.default.Instance.clickEvent = true;
                console.log("firstClick--" + this.currScene);
            }
        }
        if (this.interactable) {
            this.rotatePuzzleImage(_event.target);
        }
    };
    NewClass.prototype.repeatQuestionClicked = function (_event) {
        var _this = this;
        if (!this.questionPlaying) {
            _event.target.getComponent(cc.Button).interactable = false;
            this.questionPlaying = true;
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(function () {
                _this.questionPlaying = false;
                _event.target.getComponent(cc.Button).interactable = true;
            }, this.wordVoIteration.duration);
        }
    };
    NewClass.prototype.rotatePuzzleImage = function (_node) {
        var _this = this;
        this.interactable = false;
        var child = _node;
        var angle = child.angle;
        cc.audioEngine.playEffect(this.rotateAction, false);
        cc.tween(child)
            .to(0.2, { angle: angle - 90 })
            .call(function () { _this.optionsAligned(); })
            .start();
    };
    NewClass.prototype.optionsAligned = function () {
        var _this = this;
        var levelPassed = true;
        this.options.children.forEach(function (_child) {
            if (_child.angle % 360 != 0) {
                levelPassed = false;
            }
        });
        if (levelPassed) {
            //if the items have been aligned 
            this.options.color = cc.Color.GREEN;
            cc.audioEngine.playEffect(this.correctAction, false);
            this.scheduleOnce(function () {
                // cc.audioEngine.playEffect(this.jockeyCorrect2, false);
            }, this.correctAction.duration - 1);
            this.node.getChildByName("hint").active = false;
            this.node.getChildByName("confetti").getComponent(cc.Animation).play();
            console.log("correctAnswer--" + this.currScene);
            cc.tween(this.options).to(0.3, { x: 0, y: 0, scaleX: 1, scaleY: 1 }).start();
            this.scheduleOnce(function () {
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(_this.puzzleVoIteration, false);
                _this.scheduleOnce(function () {
                    _this.options.color = cc.Color.WHITE;
                    // this.wordAppear();
                    if (_this.isSecondInteraction) {
                        //check what interaction it is and call the respective function
                        //show question panel
                        cc.audioEngine.playEffect(_this.wordVoQuestion, false);
                        _this.interactionType == "1" ? _this.OptionsAppear() : _this.wordAppear();
                    }
                    else {
                        _this.CallJockey();
                    }
                }, _this.puzzleVoIteration.duration);
            }, 0.5);
        }
        else {
            this.interactable = true;
        }
    };
    NewClass.prototype.CallJockey = function () {
        var _this = this;
        var anim = [];
        if (StartGame_1.default.Instance.jockeyName == "Podar") {
            anim = ["possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Puzzle" || StartGame_1.default.Instance.jockeyName == "hindi") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6", "positive_7", "positive_8", "positive_9", "positive_10"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "tlc") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "supercub") {
            anim = ["positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "bag") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "cryon") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4", "positive_5"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Singham") {
            anim = ["dance", "thumbs_up"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
            anim = ["celebration", "well_done"];
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            anim = ["positive_1", "positive_2", "positive_3", "positive_4"];
        }
        // console.log("anim length = ", anim.length);
        var currentClipNum = this.getRandomNumberp(0, anim.length - 1);
        // console.log("currentClipNum = ", currentClipNum);
        var pos = [-1600, 1600];
        var jockeytween = [-450, 450];
        if (StartGame_1.default.Instance.jockeyName == "supercub") {
            pos = [1900, 1900];
            jockeytween = [870, 870];
        }
        //console.log("characterAppear--Podar_Jumbo");
        this.currentJockey.setPosition(pos[StartGame_1.default.Instance.currentLevel % 2], this.currentJockey.y);
        if (StartGame_1.default.Instance.currentLevel % 2 == 0 && StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = -0.65;
        }
        else if (StartGame_1.default.Instance.jockeyName == "stallion") {
            this.currentJockey.scaleX = 0.65;
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        }
        else if (StartGame_1.default.Instance.jockeyName == "Podar") {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
        }
        else {
            this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        }
        cc.tween(this.currentJockey).to(0.5, { x: jockeytween[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
        this.scheduleOnce(function () {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function () {
                cc.tween(_this.currentJockey).to(0.5, { x: pos[StartGame_1.default.Instance.currentLevel % 2] }, { easing: "quartInOut" }).start();
                if (StartGame_1.default.Instance.jockeyName != "stallion") {
                    if (StartGame_1.default.Instance.jockeyName == "Podar") {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                    }
                    else {
                        _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    }
                }
                //console.log("characterDisappear--Podar_Jumbo");
                _this.levelFinished();
            }, _this.positiveAudio[currentClipNum].duration);
        }, 0.5);
    };
    NewClass.prototype.callNegativeRection = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var anim = [];
            if (StartGame_1.default.Instance.jockeyName == "Podar") {
                anim = ["negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Puzzle" || StartGame_1.default.Instance.jockeyName == "hindi") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4", "negative_5", "negative_6", "negative_7"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "tlc") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "supercub") {
                anim = ["negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "bag") {
                anim = ["negative_1", "negative_2", "negative_3"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "cryon") {
                anim = ["negative_1", "negative_2", "negative_3", "negative_4"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Singham") {
                anim = ["no"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "Mighty_Raju") {
                anim = ["try_again"];
            }
            else if (StartGame_1.default.Instance.jockeyName == "stallion") {
                anim = ["negative_1", "negative_2"];
            }
            var currentClipNum = _this.getRandomNumberp(0, anim.length - 1);
            //console.log("characterAppear--Podar_Jumbo");
            if (StartGame_1.default.Instance.jockeyName == "stallion") {
                _this.currentJockey.scaleX = 0.65;
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            }
            else if (StartGame_1.default.Instance.jockeyName == "Podar") {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
            }
            else {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            }
            var pos = 1600;
            var jockeytween = 450;
            if (StartGame_1.default.Instance.jockeyName == "supercub") {
                pos = 1900;
                jockeytween = 870;
            }
            _this.currentJockey.setPosition(pos, -350);
            cc.tween(_this.currentJockey).to(0.5, { x: jockeytween }, { easing: "quartInOut" }).start();
            _this.scheduleOnce(function () {
                _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
                cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
                _this.scheduleOnce(function () {
                    cc.tween(_this.currentJockey).to(0.5, { x: pos }, { easing: "quartInOut" }).start();
                    if (StartGame_1.default.Instance.jockeyName != "stallion") {
                        if (StartGame_1.default.Instance.jockeyName != "Podar") {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                        }
                        else {
                            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true);
                        }
                    }
                    //console.log("characterDisappear--Podar_Jumbo");
                    _this.myOptions.children.forEach(function (elem) {
                        elem.getComponent(cc.Button).interactable = true;
                    });
                }, _this.negativeAudio[currentClipNum].duration);
            }, 0.5);
        }, 0.7);
    };
    NewClass.prototype.OptionsAppear = function () {
        var _this = this;
        cc.tween(this.options).to(0.3, { x: this.options.x - 200, y: 0, scaleX: 1, scaleY: 1 }).start();
        cc.tween(this.myOptions).to(0.3, { y: 0 }).start();
        this.scheduleOnce(function () {
            _this.myOptions.active = true;
        }, 0.5);
        this.wordsNode.children.forEach(function (_child, index) {
            _child.scale = 0;
            _this.scheduleOnce(function () {
                cc.tween(_child).to(0.8, { scale: 1 }).start();
            }, 0.5 * index);
        });
    };
    NewClass.prototype.onButtonClick = function (_event) {
        var _this = this;
        var _node = _event.target;
        if (_node.name === this.correctAnswer) {
            this.myOptions.children.forEach(function (element) {
                if (element.name != _node.name) {
                    element.active = false;
                }
            });
            cc.tween(_node).to(1, { y: 0 }, { easing: "sineInOut" }).start();
            console.log("correctAnswer--" + this.currScene);
            // console.log("correctAnswer--" + this.currScene);
            // cc.audioEngine.playEffect(this.correctButton, false);
            this.options.color = cc.Color.GREEN;
            _node.color = cc.Color.GREEN;
            cc.tween(_node).to(0.1, { scaleX: 0.7, scaleY: 0.8, color: cc.Color.GREEN }).to(0.1, { scaleX: 1, scaleY: 1, color: this.colorValue }).start();
            this.myOptions.children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.playEffect(this.wordVoIteration, false);
            this.scheduleOnce(function () {
                _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
                _this.CallJockey();
            }, this.wordVoIteration.duration);
        }
        else {
            console.log("wrongAnswer--" + this.currScene);
            cc.audioEngine.playEffect(this.wrongAnswer, false);
            this.callNegativeRection();
            this.myOptions.children.forEach(function (element) {
                element.getComponent(cc.Button).interactable = false;
            });
            cc.tween(_node).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).to(0.1, { angle: -10 })
                .to(0.1, { angle: 0 }).to(0.1, { angle: 10 }).to(0.1, { angle: 0 }).start();
            cc.tween(_node).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: cc.Color.WHITE }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: cc.Color.WHITE }).start();
            cc.tween(this.options).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED })
                .to(0.1, { color: this.colorValue }).to(0.1, { color: cc.Color.RED }).to(0.1, { color: this.colorValue }).start();
        }
    };
    NewClass.prototype.wordAppear = function () {
        var _this = this;
        this.selectable = false;
        cc.tween(this.options).to(1, { scale: this.options.scale - 0.2 }, { easing: "sineInOut" }).start();
        cc.tween(this.options).to(1, { x: 0, y: 100 }, { easing: "sineInOut" }).start();
        this.wordsNode.children.forEach(function (_child, index) {
            _child.scale = 0;
            _this.scheduleOnce(function () {
                cc.tween(_child).to(0.3, { scale: 1 }).start();
            }, 0.5 * index);
        });
        this.wordsNode.active = true;
        // cc.audioEngine.playEffect(this.wordVoQuestion, false);
        this.scheduleOnce(function () {
            var pos = cc.v2(_this.wordsNode.children[0].getPosition().x, _this.wordsNode.children[0].getPosition().y - 250);
            var pos2 = cc.v2(_this.wordsNode.children[1].getPosition().x, _this.wordsNode.children[1].getPosition().y - 250);
            var handNode = _this.node.getChildByName("handClick1");
            handNode.setPosition(pos);
            handNode.active = true;
            handNode.getComponent(cc.Animation).play();
            cc.tween(handNode).to(1, { x: pos2.x, y: pos2.y }, { easing: "sineInOut" }).start();
            _this.scheduleOnce(function () {
                handNode.active = false;
                // this.selectable= true;
                // this.scheduleOnce(() => {
                //     this.wordSwap(this.node.getChildByName("words").children[0], this.node.getChildByName("words").children[1], -250, 0);
                // }, 0);
                _this.EndDrag();
            }, 1);
        }, this.wordVoQuestion.duration - 1);
    };
    NewClass.prototype.wordSwap = function (_node1, _node2, x1, x2) {
        var _this = this;
        this.EndDrag();
        this.currWordSeq = this.currWordSeq.replace(_node1.name, "x");
        this.currWordSeq = this.currWordSeq.replace(_node2.name, _node1.name);
        this.currWordSeq = this.currWordSeq.replace("x", _node2.name);
        cc.audioEngine.playEffect(this.swipeAction, false);
        var word = "";
        for (var i = 0; i < this.currWordSeq.length; i++) {
            word += this.wordsNode.getChildByName(this.currWordSeq[i]).children[0].getComponent(cc.Label).string;
        }
        // console.log("word--" + word);
        cc.tween(_node1)
            .to(0.1, { x: x2 })
            .start();
        cc.tween(_node2)
            .to(0.1, { x: x1 })
            .call(function () {
            // console.log(this.currWordSeq, this.correctWordSeq[0], this.currScene);
            if (word == _this.correctWordSeq[0]) {
                // console.log("words aligned");
                _this.selectable = false;
                _this.scheduleOnce(function () {
                    // this.levelFinished();
                    cc.audioEngine.playEffect(_this.wordVoIteration, false);
                    _this.scheduleOnce(function () {
                        _this.CallJockey();
                    }, _this.wordVoIteration.duration);
                }, _this.swipeAction.duration);
            }
        })
            .start();
    };
    NewClass.prototype.EndDrag = function () {
        this.wordCurrentSeleced = null;
        this.wordCurrentSelecedPos = null;
        this.selectable = true;
    };
    NewClass.prototype.wordTouchStart = function (_event) {
        // console.log(this.selectable);
        if (this.selectable) {
            // console.log("start event");
            this.wordCurrentSeleced = _event.target;
            this.wordCurrentSelecedPos = this.wordCurrentSeleced.getPosition(cc.v2());
            this.selectable = false;
        }
    };
    NewClass.prototype.wordTouchMove = function (_event) {
        var _this = this;
        //check if the same object is moving which started first
        if (this.wordCurrentSeleced && _event.target.name == this.wordCurrentSeleced.name) {
            this.wordCurrentSeleced.x += _event.touch.getDelta().x;
            if (this.wordCurrentSeleced.x > 800 || this.wordCurrentSeleced.x < -800) {
                // console.log("reset position");
                cc.tween(this.wordCurrentSeleced)
                    .to(0.1, { x: this.wordCurrentSelecedPos.x })
                    .call(function () {
                    _this.EndDrag();
                })
                    .start();
            }
            var collisionWith_1 = null;
            this.wordsNode.children.forEach(function (_child) {
                if (_child.name == _event.target.name) {
                    return;
                }
                if (_child.getBoundingBox().contains(_event.target.getPosition())) {
                    collisionWith_1 = _child;
                }
            });
            if (collisionWith_1) {
                // console.log("collision with ", collisionWith.name);
                this.wordSwap(collisionWith_1, this.wordCurrentSeleced, collisionWith_1.x, this.wordCurrentSelecedPos.x);
            }
        }
    };
    NewClass.prototype.wordTouchEnd = function (_event) {
        var _a;
        if (_event.target.name == ((_a = this.wordCurrentSeleced) === null || _a === void 0 ? void 0 : _a.name)) {
            // console.log("End event");
            cc.tween(this.wordCurrentSeleced)
                .to(0.2, { x: this.wordCurrentSelecedPos.x })
                .start();
            this.selectable = true;
        }
    };
    NewClass.prototype.levelFinished = function () {
        var _this = this;
        cc.audioEngine.playEffect(this.correctAction, false);
        this.node.getChildByName("confetti").active = true;
        this.node.getChildByName("confetti").getComponent(cc.Animation).play();
        console.log('levelComplete--' + this.currScene);
        StartGame_1.default.Instance.currentLevel++;
        this.scheduleOnce(function () {
            ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
            _this.scheduleOnce(function () {
                ProgressBar_1.default.Instance.ProgressFill(_this.currScene);
                _this.scheduleOnce(function () {
                    if (_this.currScene < StartGame_1.default.Instance.totalLevels) {
                        cc.director.loadScene("1");
                    }
                    else {
                        cc.director.loadScene("GameEnd");
                    }
                }, 0.8);
            }, 1.2);
        }, 1.5);
    };
    NewClass.prototype.getRandomNumber = function (_number) {
        _number = Math.random();
        _number = cc.misc.lerp(1, 3, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.getRandomNumberp = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    NewClass.prototype.loadSpriteFrame = function (imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    NewClass.prototype.loadAudioClip = function (audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function (err, spriteFrame) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            callback(spriteFrame);
        });
    };
    NewClass.prototype.GenerateOptions = function (_node, _template) {
        var _this = this;
        if (_node === void 0) { _node = this.myOptions; }
        if (_template === void 0) { _template = "template1"; }
        for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
            var option = cc.instantiate(this.node.getChildByName(_template));
            option.name = (i + 1).toString();
            option.setParent(_node);
            option.setPosition(cc.v2(0, 0));
            option.opacity = 255;
            option.active = true;
        }
        this.node.getChildByName(_template).destroy();
        if (_template == "template1") {
            this.OptionsLayoutVertical();
            this.reverseOptionsLayout();
            if (StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions == 2) {
                this.myOptions.children[0].setPosition(0, 120);
                this.myOptions.children[1].setPosition(0, -120);
            }
        }
        else {
            this.scheduleOnce(function () {
                _this.OptionsLayout();
                _this.arrangeChildren(_this.wordsNode, 30);
            }, 1);
        }
    };
    NewClass.prototype.OptionsLayout = function () {
        var optionsLayout = this.wordsNode;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalWidth = 0;
        var maxHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionWidth = option.width;
            var optionHeight = option.height;
            totalWidth += optionWidth + paddingBetweenOptions;
            if (optionHeight > maxHeight) {
                maxHeight = optionHeight;
            }
        }
        var availableWidth = optionsLayout.width;
        var totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);
        var accumulatedWidth = 0;
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            // Calculate the scale factor for the option
            var optionScaleFactor = scaleFactor;
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posX = accumulatedWidth + (option.width * option.anchorX);
            option.x = posX - (optionsLayout.width * optionsLayout.anchorX);
            accumulatedWidth += option.width + paddingBetweenOptions;
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }
        optionsLayout.height = maxHeight * scaleFactor;
    };
    NewClass.prototype.arrangeChildren = function (centerNode, spacing) {
        var children = centerNode.children;
        var totalWidth = 0;
        // Calculate total width required
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            totalWidth += child.width;
        }
        totalWidth += spacing * (children.length - 1); // Add spaces between children
        // Starting X position
        var startX = -totalWidth / 2;
        // Arrange children
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.x = startX + child.width / 2;
            startX += child.width + spacing;
        }
    };
    NewClass.prototype.OptionsLayoutVertical = function () {
        var optionsLayout = this.myOptions;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalHeight = 0;
        var maxWidth = 0;
        // Calculate the total height and the maximum width of the options
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            var optionWidth = option.width;
            var optionHeight = option.height;
            totalHeight += optionHeight + paddingBetweenOptions;
            if (optionWidth > maxWidth) {
                maxWidth = optionWidth;
            }
        }
        var availableHeight = optionsLayout.height;
        var totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableHeight / totalHeightWithPadding);
        var accumulatedHeight = 0;
        // Position each option node vertically
        for (var i = 0; i < optionNodes.length; i++) {
            var option = optionNodes[i];
            // Calculate the scale factor for the option
            var optionScaleFactor = scaleFactor;
            // Scale the option
            option.width *= optionScaleFactor;
            option.height *= optionScaleFactor;
            // Calculate position based on anchor and scaled size
            var posY = accumulatedHeight + (option.height * option.anchorY);
            option.y = posY - (optionsLayout.height * optionsLayout.anchorY);
            accumulatedHeight += option.height + paddingBetweenOptions;
            // Scale and position children nodes proportionally
            for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
                var subChild = _a[_i];
                subChild.x *= optionScaleFactor;
                subChild.y *= optionScaleFactor;
                subChild.width *= optionScaleFactor;
                subChild.height *= optionScaleFactor;
            }
        }
        optionsLayout.width = maxWidth * scaleFactor;
    };
    NewClass.prototype.reverseOptionsLayout = function () {
        var optionsLayout = this.myOptions;
        var optionNodes = optionsLayout.children;
        // Create an array to hold the new positions
        var newPositions = [];
        // Calculate new positions in reverse order
        for (var i = optionNodes.length - 1; i >= 0; i--) {
            newPositions.push(optionNodes[i].y);
        }
        // Update the positions of the options
        for (var i = 0; i < optionNodes.length; i++) {
            optionNodes[i].y = newPositions[i];
        }
    };
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "podar_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "jaipuria_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "tlc_font", void 0);
    __decorate([
        property(cc.Font)
    ], NewClass.prototype, "supercub_font", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "options", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "wordsNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "myOptions", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "correctAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "incorrectButton", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "rotateAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "swipeAction", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jockeyCorrect2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "wrongAnswer", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "positiveAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "negativeAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "stallionPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "stallionNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bagPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "bagNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "cryonPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "cryonNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlcPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "tlcNegative", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercubPositive", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "supercubNegative", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9Xb3JkQmxlbmQvc2NyaXB0cy9nYW1lcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzR0FBaUc7QUFDakcsa0VBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMHFDQztRQXZxQ1csZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUd0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMscUJBQWUsR0FBbUIsRUFBRSxDQUFDO1FBRXJDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFakMsc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0Qyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUNwQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFFckMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyw0QkFBNEI7UUFDNUIsc0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQUloQyxtQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLHNCQUFnQixHQUFtQixFQUFFLENBQUM7UUFHdEMsc0JBQWdCLEdBQW1C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QUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLFlBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBVSxDQUFDLENBQUM7WUFDbkksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBVSxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBRWhJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3RJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFVLENBQUMsQ0FBQztTQUN0STthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9HLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5RyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FLbEg7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtZQUl6QyxJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUE7WUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFakksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFeEgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztZQUVoSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4SCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUvRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFOUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXZILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTNILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWxILElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUdwSCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFdkksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMs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RUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBR2hGLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUMvRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVwSCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDdkgsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBR3pIO0lBRUwsQ0FBQztJQUlELDZCQUFVLEdBQVY7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1lBQzFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbEQsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3Qix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksR0FBRyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN2SCxJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDeEgsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN2QixRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEYsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDeEIseUJBQXlCO2dCQUN6Qiw0QkFBNEI7Z0JBQzVCLDRIQUE0SDtnQkFDNUgsU0FBUztnQkFDVCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsTUFBZSxFQUFFLE1BQWUsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUFqRSxpQkFtQ0M7UUFsQ0csSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbkQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3hHO1FBQ0QsZ0NBQWdDO1FBRWhDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ1gsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUNsQixLQUFLLEVBQUUsQ0FBQTtRQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ1gsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUNsQixJQUFJLENBQUM7WUFDRix5RUFBeUU7WUFDekUsSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsZ0NBQWdDO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCx3QkFBd0I7b0JBRXhCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3ZELEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ2QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QixDQUFDLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLE1BQWdCO1FBQzNCLGdDQUFnQztRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNELGdDQUFhLEdBQWIsVUFBYyxNQUFNO1FBQXBCLGlCQXVCQztRQXRCRyx3REFBd0Q7UUFDeEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTtZQUMvRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDckUsaUNBQWlDO2dCQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztxQkFDNUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQzVDLElBQUksQ0FBQztvQkFDRixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQztxQkFDRCxLQUFLLEVBQUUsQ0FBQzthQUNoQjtZQUNELElBQUksZUFBYSxHQUFZLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO2dCQUNuQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQUUsT0FBTztpQkFBRTtnQkFDbEQsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtvQkFBRSxlQUFhLEdBQUcsTUFBTSxDQUFDO2lCQUFFO1lBQ2xHLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxlQUFhLEVBQUU7Z0JBQ2Ysc0RBQXNEO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsZUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEc7U0FDSjtJQUNMLENBQUM7SUFDRCwrQkFBWSxHQUFaLFVBQWEsTUFBTTs7UUFDZixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFJLElBQUksQ0FBQyxrQkFBa0IsMENBQUUsSUFBSSxDQUFBLEVBQUU7WUFDckQsNEJBQTRCO1lBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2lCQUM1QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDNUMsS0FBSyxFQUFFLENBQUE7WUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFDTyxnQ0FBYSxHQUFyQjtRQUFBLGlCQXlCQztRQXhCRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUd2RSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QscUJBQVcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLHFCQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xELEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsSUFBSSxLQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTt3QkFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzlCO3lCQUFNO3dCQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNwQztnQkFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDWixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFWixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFJWixDQUFDO0lBRU8sa0NBQWUsR0FBdkIsVUFBd0IsT0FBZTtRQUNuQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTyxtQ0FBZ0IsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLEdBQVc7UUFDN0MsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBZSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsUUFBK0M7UUFDOUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDdEUsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsZ0NBQWEsR0FBYixVQUFjLFNBQWlCLEVBQUUsUUFBNkM7UUFDMUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDcEUsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixLQUErQixFQUFFLFNBQStCO1FBQWhGLGlCQXdCQztRQXhCZSxzQkFBQSxFQUFBLFFBQWlCLElBQUksQ0FBQyxTQUFTO1FBQUUsMEJBQUEsRUFBQSx1QkFBK0I7UUFDNUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hHLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsSUFBSSxTQUFTLElBQUksV0FBVyxFQUFFO1lBQzFCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxFQUFFO2dCQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkQ7U0FDSjthQUNJO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDtJQUNMLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQU0scUJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRWpDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUVqQyxVQUFVLElBQUksV0FBVyxHQUFHLHFCQUFxQixDQUFDO1lBQ2xELElBQUksWUFBWSxHQUFHLFNBQVMsRUFBRTtnQkFDMUIsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUM1QjtTQUNKO1FBRUQsSUFBSSxjQUFjLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLHFCQUFxQixHQUFHLFVBQVUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLENBQUM7UUFDMUYsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsY0FBYyxHQUFHLHFCQUFxQixDQUFDLENBQUM7UUFFdEUsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVCLDRDQUE0QztZQUM1QyxJQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQztZQUVwQyxtQkFBbUI7WUFDbkIsTUFBTSxDQUFDLEtBQUssSUFBSSxpQkFBaUIsQ0FBQztZQUNsQyxNQUFNLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDO1lBRW5DLHFEQUFxRDtZQUNyRCxJQUFJLElBQUksR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFaEUsZ0JBQWdCLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztZQUV6RCxtREFBbUQ7WUFDbkQsS0FBcUIsVUFBZSxFQUFmLEtBQUEsTUFBTSxDQUFDLFFBQVEsRUFBZixjQUFlLEVBQWYsSUFBZSxFQUFFO2dCQUFqQyxJQUFJLFFBQVEsU0FBQTtnQkFDYixRQUFRLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO2dCQUNoQyxRQUFRLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO2dCQUNoQyxRQUFRLENBQUMsS0FBSyxJQUFJLGlCQUFpQixDQUFDO2dCQUNwQyxRQUFRLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDO2FBQ3hDO1NBQ0o7UUFFRCxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFDbkQsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsVUFBbUIsRUFBRSxPQUFlO1FBQ2hELElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLGlDQUFpQztRQUNqQyxLQUFrQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtZQUF2QixJQUFJLEtBQUssaUJBQUE7WUFDVixVQUFVLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUNELFVBQVUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsOEJBQThCO1FBRTdFLHNCQUFzQjtRQUN0QixJQUFJLE1BQU0sR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFN0IsbUJBQW1CO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsd0NBQXFCLEdBQXJCO1FBQ0ksSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQU0scUJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRWpDLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFakIsa0VBQWtFO1FBQ2xFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFakMsV0FBVyxJQUFJLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztZQUNwRCxJQUFJLFdBQVcsR0FBRyxRQUFRLEVBQUU7Z0JBQ3hCLFFBQVEsR0FBRyxXQUFXLENBQUM7YUFDMUI7U0FDSjtRQUVELElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBSSxzQkFBc0IsR0FBRyxXQUFXLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLHFCQUFxQixDQUFDO1FBQzVGLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXhFLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLHVDQUF1QztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUIsNENBQTRDO1lBQzVDLElBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDO1lBRXBDLG1CQUFtQjtZQUNuQixNQUFNLENBQUMsS0FBSyxJQUFJLGlCQUFpQixDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLElBQUksaUJBQWlCLENBQUM7WUFFbkMscURBQXFEO1lBQ3JELElBQUksSUFBSSxHQUFHLGlCQUFpQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqRSxpQkFBaUIsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDO1lBRTNELG1EQUFtRDtZQUNuRCxLQUFxQixVQUFlLEVBQWYsS0FBQSxNQUFNLENBQUMsUUFBUSxFQUFmLGNBQWUsRUFBZixJQUFlLEVBQUU7Z0JBQWpDLElBQUksUUFBUSxTQUFBO2dCQUNiLFFBQVEsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxLQUFLLElBQUksaUJBQWlCLENBQUM7Z0JBQ3BDLFFBQVEsQ0FBQyxNQUFNLElBQUksaUJBQWlCLENBQUM7YUFDeEM7U0FDSjtRQUVELGFBQWEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUNqRCxDQUFDO0lBRUQsdUNBQW9CLEdBQXBCO1FBQ0ksSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRXpDLDRDQUE0QztRQUM1QyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdEIsMkNBQTJDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUVELHNDQUFzQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFycUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ29CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDb0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFLMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDWTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNjO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDVTtJQU9qQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNhO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1U7SUFPakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFHOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFHOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDb0I7SUFHM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDa0I7SUFHekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUFFOUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDdUI7SUExRTdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwcUM1QjtJQUFELGVBQUM7Q0ExcUNELEFBMHFDQyxDQTFxQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMHFDakQ7a0JBMXFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvUHJlZmFicy9Qcm9ncmVzc2Jhci9Qcm9ncmVzc0Jhci9TY3JpcHRzL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuLi8uLi8uLi9GcmFtZXdvcmsvU2NyaXB0cy9TdGFydEdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxuICAgIHByaXZhdGUgcG9kYXJfZm9udDogY2MuRm9udCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgcHJpdmF0ZSBqYWlwdXJpYV9mb250OiBjYy5Gb250ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRm9udClcbiAgICBwcml2YXRlIHRsY19mb250OiBjYy5Gb250ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRm9udClcbiAgICBwcml2YXRlIHN1cGVyY3ViX2ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3B0aW9uczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd29yZHNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBteU9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY29ycmVjdEFuc3dlcjogc3RyaW5nID0gXCIxXCI7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGNvcnJlY3RBY3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBpbmNvcnJlY3RCdXR0b246IGNjLkF1ZGlvQ2xpcFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICByb3RhdGVBY3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBzd2lwZUFjdGlvbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHB1enpsZVF1ZXN0aW9uVm86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgcHV6emxlVm9JdGVyYXRpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgd29yZFZvUXVlc3Rpb246IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgd29yZFZvSXRlcmF0aW9uOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgam9ja2V5Q29ycmVjdDI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICB3cm9uZ0Fuc3dlcjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICB0ZW1wb3JhcnlTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBwb3NpdGl2ZUF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIG5lZ2F0aXZlQXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgc3RhbGxpb25Qb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBzdGFsbGlvbk5lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGJhZ1Bvc2l0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGJhZ05lZ2F0aXZlOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGNyeW9uUG9zaXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgY3J5b25OZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB0bGNQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgdGxjTmVnYXRpdmU6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgc3VwZXJjdWJQb3NpdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHByaXZhdGUgc3VwZXJjdWJOZWdhdGl2ZTogY2MuQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIHByaXZhdGUgaXNTZWNvbmRJbnRlcmFjdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBpbnRlcmFjdGlvblR5cGU6IHN0cmluZyA9IFwiMVwiO1xuXG5cbiAgICBjdXJyZW50Sm9ja2V5OiBjYy5Ob2RlID0gbnVsbDtcblxuXG5cbiAgICBwcml2YXRlIGludGVyYWN0YWJsZTtcbiAgICBwcml2YXRlIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICBwcml2YXRlIHdvcmRDdXJyZW50U2VsZWNlZDogY2MuTm9kZTtcbiAgICBwcml2YXRlIHdvcmRDdXJyZW50U2VsZWNlZFBvczogY2MuVmVjMjtcblxuICAgIHByaXZhdGUgcXVlc3Rpb25QbGF5aW5nID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGNvcnJlY3RXb3JkU2VxOiBzdHJpbmdbXSA9IFtcIjEzMlwiXTtcbiAgICBwcml2YXRlIGN1cnJXb3JkU2VxOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJpdmF0ZSBjdXJyU2NlbmU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBjb2xvclZhbHVlOiBjYy5Db2xvciA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNoZWR1bGVRdWVzdGlvbkNsaXA7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJQb2RhclwiKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wbGF0ZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy5wb2Rhcl9mb250O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwidGxjXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnRsY19mb250O1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicXVlc3Rpb25QYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250ID0gdGhpcy50bGNfZm9udDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLnN1cGVyY3ViX2ZvbnQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIiB8fCBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImNyeW9uXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBsYXRlXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxdWVzdGlvblBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmphaXB1cmlhX2ZvbnQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICB0aGlzLmlzU2Vjb25kSW50ZXJhY3Rpb24gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5uZWVkUmVpdGVyYXRpb247XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25UeXBlID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaW50ZXJhY3Rpb25UeXBlO1xuICAgICAgICBpZiAodGhpcy5pc1NlY29uZEludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJXb3JkU2VxICs9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuR2VuZXJhdGVPcHRpb25zKHRoaXMubXlPcHRpb25zLCBcInRlbXBsYXRlMVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5HZW5lcmF0ZU9wdGlvbnModGhpcy53b3Jkc05vZGUsIFwidGVtcGxhdGUyXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFdvcmRTZXFbMF0gPSBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXNldEludGVyYWN0aW9uKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaGVkdWxlUXVlc3Rpb25DbGlwLCAxMCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy5iYWdQb3NpdGl2ZTtcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMuYmFnTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJjcnlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLmNyeW9uUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLmNyeW9uTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN0YWxsaW9uTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUF1ZGlvID0gdGhpcy50bGNQb3NpdGl2ZTtcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVBdWRpbyA9IHRoaXMudGxjTmVnYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViUG9zaXRpdmU7XG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlQXVkaW8gPSB0aGlzLnN1cGVyY3ViTmVnYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlVwZGF0ZUpzb25EYXRhKCk7XG5cbiAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgIHRoaXMuY29sb3JWYWx1ZSA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdXJyU2NlbmUgPSBzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsO1xuICAgICAgICBQcm9ncmVzc0Jhci5JbnN0YW5jZS5Qcm9ncmVzc0ZpbGwodGhpcy5jdXJyU2NlbmUgLSAxLCBmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcbiAgICAgICAgaWYgKHRoaXMuY3VyclNjZW5lID49IHN0YXJ0R2FtZS5JbnN0YW5jZS50b3RhbExldmVscykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZUVuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgodGhpcy5jdXJyU2NlbmUgKyAxKS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEdhbWUuSW5zdGFuY2UuY2xpY2tFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RDbGljay0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhdGVHYW1lKCk7XG4gICAgICAgIH0sIDEpO1xuXG5cbiAgICB9XG5cbiAgICBVcGRhdGVKc29uRGF0YSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzdGFydEdhbWUuSW5zdGFuY2UubWFpbkJnO1xuXG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuaXNEZW1vR2FtZSkge1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChlcnIsIGF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGF1ZGlvIGNsaXA6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wdXp6bGVRdWVzdGlvblZvID0gYXVkaW9DbGlwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vblB1enpsZUltYWdlTmFtZSwgKGVyciwgdGV4dHVyZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5wdXp6bGVzW2ldLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9OYW1lLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHV6emxlVm9JdGVyYXRpb24gPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUyLCAoZXJyLCBhdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBhdWRpbyBjbGlwOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud29yZFZvUXVlc3Rpb24gPSBhdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uY29tbW9uT3B0aW9uSW1hZ2VOYW1lLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV29yZFNlcSArPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jkc05vZGUuZ2V0Q2hpbGRCeU5hbWUoKGkgKyAxKS50b1N0cmluZygpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyV29yZFNlcS0tXCIgKyB0aGlzLmN1cnJXb3JkU2VxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNPcHRpb25UZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV0sIChlcnIsIHRleHR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25UeXBlID09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5nZXRDaGlsZEJ5TmFtZSgoaSArIDEpLnRvU3RyaW5nKCkpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5yZWl0ZXJhdGlvbkF1ZGlvTmFtZSwgKGVyciwgYXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgYXVkaW8gY2xpcDpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLndvcmRWb0l0ZXJhdGlvbiA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRBdWRpb0NsaXAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucXVlc3Rpb25BdWRpb05hbWUsIChBdWRpb0NsaXApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1enpsZVF1ZXN0aW9uVm8gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25QdXp6bGVJbWFnZU5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vblB1enpsZUltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ucHV6emxlc1tpXSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvQ2xpcChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb3JyZWN0QXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXp6bGVWb0l0ZXJhdGlvbiA9IEF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnF1ZXN0aW9uQXVkaW9OYW1lMiwgKEF1ZGlvQ2xpcCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud29yZFZvUXVlc3Rpb24gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5jb21tb25PcHRpb25JbWFnZU5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwcml0ZUZyYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmNvbW1vbk9wdGlvbkltYWdlTmFtZSwgKHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldvcmRTZXEgKz0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycldvcmRTZXEtLVwiICsgdGhpcy5jdXJyV29yZFNlcSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLmlzT3B0aW9uVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcHJpdGVGcmFtZShzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5vcHRpb25zW2ldLCAoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uVHlwZSA9PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKChpICsgMSkudG9TdHJpbmcoKSkuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ub3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9DbGlwKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLnJlaXRlcmF0aW9uQXVkaW9OYW1lLCAoQXVkaW9DbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JkVm9JdGVyYXRpb24gPSBBdWRpb0NsaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkgPSBzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5LmdldENoaWxkQnlOYW1lKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgVXBkYXRlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX3dpZHRoID0gMjUwO1xuICAgICAgICBsZXQgX2hlaWdodCA9IDI1MDtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlcyA9PSA0KSB7XG4gICAgICAgICAgICBfd2lkdGggPSAyNTA7XG4gICAgICAgICAgICBfaGVpZ2h0ID0gMjUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5xdWVzdGlvbnNbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAtIDFdLm51bWJlck9mUHV6emxlcyA9PSA5KSB7XG4gICAgICAgICAgICBfd2lkdGggPSAxNjY7XG4gICAgICAgICAgICBfaGVpZ2h0ID0gMTY2O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbltpXS53aWR0aCA9IF93aWR0aDtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbltpXS5oZWlnaHQgPSBfaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0ubnVtYmVyT2ZQdXp6bGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgSW5pdGlhdGVHYW1lKCkge1xuICAgICAgICAvL3JlcGVhdCBtZXRob2RcbiAgICAgICAgdGhpcy5VcGRhdGVPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuc2hlZHVsZVF1ZXN0aW9uQ2xpcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0YWJsZSkgeyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHV6emxlUXVlc3Rpb25WbywgZmFsc2UpOyB9XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGlsZC5hbmdsZSAlIDM2MCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMTAwIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAxMDAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDEwMCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7IH0sIDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2V0RnJhbWVPcHRpb25zKCk7XG4gICAgICAgIH0sIDAuMSk7XG5cbiAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hzdGFydCcsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hTdGFydChfZXZlbnQpOyB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQub24oJ3RvdWNobW92ZScsIChfZXZlbnQpID0+IHsgdGhpcy53b3JkVG91Y2hNb3ZlKF9ldmVudCk7IH0pO1xuICAgICAgICAgICAgZWxlbWVudC5vbigndG91Y2hlbmQnLCAoX2V2ZW50KSA9PiB7IHRoaXMud29yZFRvdWNoRW5kKF9ldmVudCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTZXRGcmFtZU9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLnF1ZXN0aW9uc1tzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsIC0gMV0uaXNIaW50UmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLndpZHRoIC8gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0ud2lkdGggLyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS53aWR0aCAvIDIsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQgPT0gOSkge1xuICAgICAgICAgICAgbGV0IHRocmVzaEhvbGQ6IG51bWJlciA9IDFcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzBdLndpZHRoKSArIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5zZXRQb3NpdGlvbigwLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCAtIHRocmVzaEhvbGQpO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGgpICsgdGhyZXNoSG9sZCwgMCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLndpZHRoIC0gdGhyZXNoSG9sZCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS53aWR0aCkgKyB0aHJlc2hIb2xkLCAtKHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5oZWlnaHQpICsgdGhyZXNoSG9sZCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uc2V0UG9zaXRpb24oMCwgLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uaGVpZ2h0KSArIHRocmVzaEhvbGQpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLnNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5jaGlsZHJlbls4XS53aWR0aCAtIHRocmVzaEhvbGQsIC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLmhlaWdodCkgKyB0aHJlc2hIb2xkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2hpbGRyZW5Db3VudCA9PSA2KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCArIDIsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxXS5zZXRQb3NpdGlvbigwLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLndpZHRoIC0gMiwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzJdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyAyLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLnNldFBvc2l0aW9uKDAsIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bNF0uaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmNoaWxkcmVuWzNdLndpZHRoIC0gMiwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5oZWlnaHQgLyAyKTtcblxuXG5cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jaGlsZHJlbkNvdW50ID09IDE2KSB7XG5cblxuXG4gICAgICAgICAgICB2YXIgdGhyZXNoSG9sZDogbnVtYmVyID0gNjIuNVxuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oLXRoaXMub3B0aW9ucy5jaGlsZHJlblswXS53aWR0aCAtIHRocmVzaEhvbGQsIHRoaXMub3B0aW9ucy5jaGlsZHJlblswXS5oZWlnaHQgKyB0aHJlc2hIb2xkKTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzFdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMV0uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsyXS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMl0uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblszXS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10ud2lkdGggKyB0aHJlc2hIb2xkLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bM10uaGVpZ2h0ICsgdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls0XS5zZXRQb3NpdGlvbigtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLndpZHRoIC0gdGhyZXNoSG9sZCwgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzRdLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzVdLnNldFBvc2l0aW9uKC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNV0uaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls2XS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0ud2lkdGggLyAyLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bNl0uaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls3XS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10ud2lkdGggKyB0aHJlc2hIb2xkLCB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bN10uaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbls4XS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlbls4XS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzhdLmhlaWdodCAvIDIpO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0uc2V0UG9zaXRpb24oLSh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bOV0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlbls5XS5oZWlnaHQgLyAyKTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS5zZXRQb3NpdGlvbigodGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS53aWR0aCAvIDIpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEwXS5oZWlnaHQgLyAyKTtcblxuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLnNldFBvc2l0aW9uKCh0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLndpZHRoICsgdGhyZXNoSG9sZCksIC10aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTFdLmhlaWdodCAvIDIpO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hpbGRyZW5bMTJdLnNldFBvc2l0aW9uKC0odGhpcy5vcHRpb25zLmNoaWxkcmVuWzEyXS53aWR0aCArIHRocmVzaEhvbGQpLCAtdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEyXS5oZWlnaHQgLSB0aHJlc2hIb2xkKTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuWzEzXS5zZXRQb3NpdGlvbigtKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxM10uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0uc2V0UG9zaXRpb24oKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0ud2lkdGggLyAyKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxNF0uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0uc2V0UG9zaXRpb24oKHRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0ud2lkdGggKyB0aHJlc2hIb2xkKSwgLXRoaXMub3B0aW9ucy5jaGlsZHJlblsxNV0uaGVpZ2h0IC0gdGhyZXNoSG9sZCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNsb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5vcHRpb25zLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIGNsb25lLnNldFBhcmVudCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLmdldENoaWxkQnlOYW1lKFwiaGludFwiKSk7XG4gICAgICAgICAgICBjbG9uZS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuY2hpbGRyZW5baV0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX3JhbmRvbU51bWJlcjogbnVtYmVyID0gMTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBfcmFuZG9tTnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW1iZXIoX3JhbmRvbU51bWJlcik7XG4gICAgICAgICAgICBlbGVtZW50LmFuZ2xlID0gLSg5MCAqIF9yYW5kb21OdW1iZXIpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMuc2NhbGUgPSAwLjg7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vcGFjaXR5ID0gMTAwO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpLm9wYWNpdHkgPSAxMDA7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuc2NhbGUgPSAwO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICAudG8oMC44LCB7IHNjYWxlOiAxLCBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoaW50XCIpKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjMsIG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHV6emxlUXVlc3Rpb25Wbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5wdXp6bGVRdWVzdGlvblZvLmR1cmF0aW9uIC0gMC4zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wdXp6bGVRdWVzdGlvblZvLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyU2NlbmUgPD0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmROb2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9uKFwiZmluaXNoZWRcIiwgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNoZWR1bGVRdWVzdGlvbkNsaXAsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJTY2VuZSA8IDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVB1enpsZUltYWdlKHRoaXMub3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIjFcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb3B0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbigpO1xuICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2tcIik7XG4gICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXN0YXJ0R2FtZS5JbnN0YW5jZS5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnRHYW1lLkluc3RhbmNlLmNsaWNrRXZlbnQgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0Q2xpY2stLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmludGVyYWN0YWJsZSkge1xuXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVB1enpsZUltYWdlKF9ldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcGVhdFF1ZXN0aW9uQ2xpY2tlZChfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvblBsYXlpbmcpIHtcbiAgICAgICAgICAgIF9ldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvblBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCB0aGlzLndvcmRWb0l0ZXJhdGlvbi5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcm90YXRlUHV6emxlSW1hZ2UoX25vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNoaWxkID0gX25vZGU7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gY2hpbGQuYW5nbGU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yb3RhdGVBY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgY2MudHdlZW4oY2hpbGQpXG4gICAgICAgICAgICAudG8oMC4yLCB7IGFuZ2xlOiBhbmdsZSAtIDkwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IHRoaXMub3B0aW9uc0FsaWduZWQoKSB9KVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG4gICAgb3B0aW9uc0FsaWduZWQoKSB7XG4gICAgICAgIGxldCBsZXZlbFBhc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChfY2hpbGQuYW5nbGUgJSAzNjAgIT0gMCkge1xuICAgICAgICAgICAgICAgIGxldmVsUGFzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChsZXZlbFBhc3NlZCkge1xuICAgICAgICAgICAgLy9pZiB0aGUgaXRlbXMgaGF2ZSBiZWVuIGFsaWduZWQgXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0QWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmpvY2tleUNvcnJlY3QyLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCB0aGlzLmNvcnJlY3RBY3Rpb24uZHVyYXRpb24gLSAxKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhpbnRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25mZXR0aVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25zKS50bygwLjMsIHsgeDogMCwgeTogMCwgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSkuc3RhcnQoKTtcblxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnB1enpsZVZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy53b3JkQXBwZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWNvbmRJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayB3aGF0IGludGVyYWN0aW9uIGl0IGlzIGFuZCBjYWxsIHRoZSByZXNwZWN0aXZlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Nob3cgcXVlc3Rpb24gcGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9RdWVzdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblR5cGUgPT0gXCIxXCIgPyB0aGlzLk9wdGlvbnNBcHBlYXIoKSA6IHRoaXMud29yZEFwcGVhcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DYWxsSm9ja2V5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLnB1enpsZVZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDYWxsSm9ja2V5KCkge1xuICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc3NpdGl2ZVwiLCBcInBvc3NpdGl2ZTJcIiwgXCJwb3NzaXRpdmUzXCIsIFwicG9zc2l0aXZlNFwiLCBcInBvc3NpdGl2ZTVcIiwgXCJwb3NzaXRpdmU2XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUHV6emxlXCIgfHwgc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJoaW5kaVwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIiwgXCJwb3NpdGl2ZV82XCIsIFwicG9zaXRpdmVfN1wiLCBcInBvc2l0aXZlXzhcIiwgXCJwb3NpdGl2ZV85XCIsIFwicG9zaXRpdmVfMTBcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCIsIFwicG9zaXRpdmVfNlwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgIGFuaW0gPSBbXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiLCBcInBvc2l0aXZlXzVcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJiYWdcIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgICAgICAgYW5pbSA9IFtcInBvc2l0aXZlXzFcIiwgXCJwb3NpdGl2ZV8yXCIsIFwicG9zaXRpdmVfM1wiLCBcInBvc2l0aXZlXzRcIiwgXCJwb3NpdGl2ZV81XCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiU2luZ2hhbVwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wiZGFuY2VcIiwgXCJ0aHVtYnNfdXBcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJNaWdodHlfUmFqdVwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wiY2VsZWJyYXRpb25cIiwgXCJ3ZWxsX2RvbmVcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICBhbmltID0gW1wicG9zaXRpdmVfMVwiLCBcInBvc2l0aXZlXzJcIiwgXCJwb3NpdGl2ZV8zXCIsIFwicG9zaXRpdmVfNFwiXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFuaW0gbGVuZ3RoID0gXCIsIGFuaW0ubGVuZ3RoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRDbGlwTnVtOiBudW1iZXIgPSB0aGlzLmdldFJhbmRvbU51bWJlcnAoMCwgYW5pbS5sZW5ndGggLSAxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50Q2xpcE51bSA9IFwiLCBjdXJyZW50Q2xpcE51bSk7XG4gICAgICAgIGxldCBwb3M6IG51bWJlcltdID0gWy0xNjAwLCAxNjAwXTtcbiAgICAgICAgbGV0IGpvY2tleXR3ZWVuOiBudW1iZXJbXSA9IFstNDUwLCA0NTBdO1xuICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdXBlcmN1YlwiKSB7XG4gICAgICAgICAgICBwb3MgPSBbMTkwMCwgMTkwMF07XG4gICAgICAgICAgICBqb2NrZXl0d2VlbiA9IFs4NzAsIDg3MF07XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5zZXRQb3NpdGlvbihwb3Nbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdLCB0aGlzLmN1cnJlbnRKb2NrZXkueSk7XG4gICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UuY3VycmVudExldmVsICUgMiA9PSAwICYmIHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IC0wLjY1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkZWxcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IGpvY2tleXR3ZWVuW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgJSAyXSB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucG9zaXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBwb3Nbc3RhcnRHYW1lLkluc3RhbmNlLmN1cnJlbnRMZXZlbCAlIDJdIH0sIHsgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSAhPSBcInN0YWxsaW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRlbFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckRpc2FwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCB0aGlzLnBvc2l0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG5cbiAgICBjYWxsTmVnYXRpdmVSZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYW5pbTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnZXRpdmVcIiwgXCJuZWdldGl2ZTJcIiwgXCJuZWdldGl2ZTNcIiwgXCJuZWdldGl2ZTRcIiwgXCJuZWdldGl2ZTVcIiwgXCJuZWdldGl2ZTZcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlB1enpsZVwiIHx8IHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiaGluZGlcIikge1xuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCIsIFwibmVnYXRpdmVfNVwiLCBcIm5lZ2F0aXZlXzZcIiwgXCJuZWdhdGl2ZV83XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJ0bGNcIikge1xuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibmVnYXRpdmVfM1wiLCBcIm5lZ2F0aXZlXzRcIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcImJhZ1wiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCIsIFwibmVnYXRpdmVfM1wiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lID09IFwiY3J5b25cIikge1xuICAgICAgICAgICAgICAgIGFuaW0gPSBbXCJuZWdhdGl2ZV8xXCIsIFwibmVnYXRpdmVfMlwiLCBcIm5lZ2F0aXZlXzNcIiwgXCJuZWdhdGl2ZV80XCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJTaW5naGFtXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1wibm9cIl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIk1pZ2h0eV9SYWp1XCIpIHtcbiAgICAgICAgICAgICAgICBhbmltID0gW1widHJ5X2FnYWluXCJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbSA9IFtcIm5lZ2F0aXZlXzFcIiwgXCJuZWdhdGl2ZV8yXCJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudENsaXBOdW06IG51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVycCgwLCBhbmltLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoYXJhY3RlckFwcGVhci0tUG9kYXJfSnVtYm9cIik7XG4gICAgICAgICAgICBpZiAoc3RhcnRHYW1lLkluc3RhbmNlLmpvY2tleU5hbWUgPT0gXCJzdGFsbGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNjYWxlWCA9IDAuNjU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGFuaW1bY3VycmVudENsaXBOdW1dLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcIlBvZGFyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb3M6IG51bWJlciA9IDE2MDA7XG4gICAgICAgICAgICBsZXQgam9ja2V5dHdlZW46IG51bWJlciA9IDQ1MDtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2Uuam9ja2V5TmFtZSA9PSBcInN1cGVyY3ViXCIpIHtcbiAgICAgICAgICAgICAgICBwb3MgPSAxOTAwO1xuICAgICAgICAgICAgICAgIGpvY2tleXR3ZWVuID0gODcwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Sm9ja2V5LnNldFBvc2l0aW9uKHBvcywgLTM1MCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRKb2NrZXkpLnRvKDAuNSwgeyB4OiBqb2NrZXl0d2VlbiB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgYW5pbVtjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmVnYXRpdmVBdWRpb1tjdXJyZW50Q2xpcE51bV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY3VycmVudEpvY2tleSkudG8oMC41LCB7IHg6IHBvcyB9LCB7IGVhc2luZzogXCJxdWFydEluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwic3RhbGxpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0R2FtZS5JbnN0YW5jZS5qb2NrZXlOYW1lICE9IFwiUG9kYXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEpvY2tleS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRKb2NrZXkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGVsXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGFyYWN0ZXJEaXNhcHBlYXItLVBvZGFyX0p1bWJvXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm5lZ2F0aXZlQXVkaW9bY3VycmVudENsaXBOdW1dLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH0sIDAuNyk7XG4gICAgfVxuXG5cbiAgICBPcHRpb25zQXBwZWFyKCkge1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMC4zLCB7IHg6IHRoaXMub3B0aW9ucy54IC0gMjAwLCB5OiAwLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9KS5zdGFydCgpO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubXlPcHRpb25zKS50bygwLjMsIHsgeTogMCB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sIDAuNSk7XG5cblxuICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBfY2hpbGQuc2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKF9jaGlsZCkudG8oMC44LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIDAuNSAqIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgb25CdXR0b25DbGljayhfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIGxldCBfbm9kZTogY2MuTm9kZSA9IF9ldmVudC50YXJnZXQ7XG5cbiAgICAgICAgaWYgKF9ub2RlLm5hbWUgPT09IHRoaXMuY29ycmVjdEFuc3dlcikge1xuXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgIT0gX25vZGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdEFuc3dlci0tXCIgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvcnJlY3RBbnN3ZXItLVwiICsgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RCdXR0b24sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgICAgICAgICAgX25vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcblxuXG4gICAgICAgICAgICBjYy50d2Vlbihfbm9kZSkudG8oMC4xLCB7IHNjYWxlWDogMC43LCBzY2FsZVk6IDAuOCwgY29sb3I6IGNjLkNvbG9yLkdSRUVOIH0pLnRvKDAuMSwgeyBzY2FsZVg6IDEsIHNjYWxlWTogMSwgY29sb3I6IHRoaXMuY29sb3JWYWx1ZSB9KS5zdGFydCgpO1xuXG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud29yZFZvSXRlcmF0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuQ2FsbEpvY2tleSgpO1xuICAgICAgICAgICAgfSwgdGhpcy53b3JkVm9JdGVyYXRpb24uZHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb25nQW5zd2VyLS1cIiArIHRoaXMuY3VyclNjZW5lKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53cm9uZ0Fuc3dlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5jYWxsTmVnYXRpdmVSZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm15T3B0aW9ucy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2MudHdlZW4oX25vZGUpLnRvKDAuMSwgeyBhbmdsZTogMTAgfSkudG8oMC4xLCB7IGFuZ2xlOiAwIH0pLnRvKDAuMSwgeyBhbmdsZTogLTEwIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMCB9KS50bygwLjEsIHsgYW5nbGU6IDEwIH0pLnRvKDAuMSwgeyBhbmdsZTogMCB9KS5zdGFydCgpO1xuXG5cbiAgICAgICAgICAgIGNjLnR3ZWVuKF9ub2RlKS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLlJFRCB9KS50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5SRUQgfSkudG8oMC4xLCB7IGNvbG9yOiBjYy5Db2xvci5XSElURSB9KS5zdGFydCgpO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm9wdGlvbnMpLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuUkVEIH0pLnRvKDAuMSwgeyBjb2xvcjogdGhpcy5jb2xvclZhbHVlIH0pLnN0YXJ0KCk7XG5cblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgd29yZEFwcGVhcigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMSwgeyBzY2FsZTogdGhpcy5vcHRpb25zLnNjYWxlIC0gMC4yIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9ucykudG8oMSwgeyB4OiAwLCB5OiAxMDAgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgdGhpcy53b3Jkc05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoX2NoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgX2NoaWxkLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihfY2hpbGQpLnRvKDAuMywgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCAwLjUgKiBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMud29yZHNOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9RdWVzdGlvbiwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zOiBjYy5WZWMyID0gY2MudjIodGhpcy53b3Jkc05vZGUuY2hpbGRyZW5bMF0uZ2V0UG9zaXRpb24oKS54LCB0aGlzLndvcmRzTm9kZS5jaGlsZHJlblswXS5nZXRQb3NpdGlvbigpLnkgLSAyNTApO1xuICAgICAgICAgICAgbGV0IHBvczI6IGNjLlZlYzIgPSBjYy52Mih0aGlzLndvcmRzTm9kZS5jaGlsZHJlblsxXS5nZXRQb3NpdGlvbigpLngsIHRoaXMud29yZHNOb2RlLmNoaWxkcmVuWzFdLmdldFBvc2l0aW9uKCkueSAtIDI1MCk7XG4gICAgICAgICAgICBsZXQgaGFuZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kQ2xpY2sxXCIpO1xuICAgICAgICAgICAgaGFuZE5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBoYW5kTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgICAgICBjYy50d2VlbihoYW5kTm9kZSkudG8oMSwgeyB4OiBwb3MyLngsIHk6IHBvczIueSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0YWJsZT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMud29yZFN3YXAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid29yZHNcIikuY2hpbGRyZW5bMF0sIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndvcmRzXCIpLmNoaWxkcmVuWzFdLCAtMjUwLCAwKTtcbiAgICAgICAgICAgICAgICAvLyB9LCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLkVuZERyYWcoKTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9LCB0aGlzLndvcmRWb1F1ZXN0aW9uLmR1cmF0aW9uIC0gMSk7XG4gICAgfVxuXG4gICAgd29yZFN3YXAoX25vZGUxOiBjYy5Ob2RlLCBfbm9kZTI6IGNjLk5vZGUsIHgxOiBudW1iZXIsIHgyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5FbmREcmFnKCk7XG4gICAgICAgIHRoaXMuY3VycldvcmRTZXEgPSB0aGlzLmN1cnJXb3JkU2VxLnJlcGxhY2UoX25vZGUxLm5hbWUsIFwieFwiKTtcbiAgICAgICAgdGhpcy5jdXJyV29yZFNlcSA9IHRoaXMuY3VycldvcmRTZXEucmVwbGFjZShfbm9kZTIubmFtZSwgX25vZGUxLm5hbWUpO1xuICAgICAgICB0aGlzLmN1cnJXb3JkU2VxID0gdGhpcy5jdXJyV29yZFNlcS5yZXBsYWNlKFwieFwiLCBfbm9kZTIubmFtZSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zd2lwZUFjdGlvbiwgZmFsc2UpO1xuXG4gICAgICAgIGxldCB3b3JkID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJXb3JkU2VxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB3b3JkICs9IHRoaXMud29yZHNOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuY3VycldvcmRTZXFbaV0pLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid29yZC0tXCIgKyB3b3JkKTtcblxuICAgICAgICBjYy50d2Vlbihfbm9kZTEpXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IHgyIH0pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICBjYy50d2Vlbihfbm9kZTIpXG4gICAgICAgICAgICAudG8oMC4xLCB7IHg6IHgxIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyV29yZFNlcSwgdGhpcy5jb3JyZWN0V29yZFNlcVswXSwgdGhpcy5jdXJyU2NlbmUpO1xuICAgICAgICAgICAgICAgIGlmICh3b3JkID09IHRoaXMuY29ycmVjdFdvcmRTZXFbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3b3JkcyBhbGlnbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sZXZlbEZpbmlzaGVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53b3JkVm9JdGVyYXRpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNhbGxKb2NrZXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMud29yZFZvSXRlcmF0aW9uLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5zd2lwZUFjdGlvbi5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgfVxuICAgIEVuZERyYWcoKSB7XG4gICAgICAgIHRoaXMud29yZEN1cnJlbnRTZWxlY2VkID0gbnVsbDtcbiAgICAgICAgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSB0cnVlO1xuICAgIH1cbiAgICB3b3JkVG91Y2hTdGFydChfZXZlbnQ6IGNjLkV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0YWJsZSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgZXZlbnRcIik7XG4gICAgICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZCA9IF9ldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZFBvcyA9IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkLmdldFBvc2l0aW9uKGNjLnYyKCkpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgd29yZFRvdWNoTW92ZShfZXZlbnQpIHtcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgc2FtZSBvYmplY3QgaXMgbW92aW5nIHdoaWNoIHN0YXJ0ZWQgZmlyc3RcbiAgICAgICAgaWYgKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkICYmIF9ldmVudC50YXJnZXQubmFtZSA9PSB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54ICs9IF9ldmVudC50b3VjaC5nZXREZWx0YSgpLng7XG4gICAgICAgICAgICBpZiAodGhpcy53b3JkQ3VycmVudFNlbGVjZWQueCA+IDgwMCB8fCB0aGlzLndvcmRDdXJyZW50U2VsZWNlZC54IDwgLTgwMCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzZXQgcG9zaXRpb25cIik7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy53b3JkQ3VycmVudFNlbGVjZWQpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgeDogdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MueCB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkVuZERyYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sbGlzaW9uV2l0aDogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLndvcmRzTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChfY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX2NoaWxkLm5hbWUgPT0gX2V2ZW50LnRhcmdldC5uYW1lKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmIChfY2hpbGQuZ2V0Qm91bmRpbmdCb3goKS5jb250YWlucyhfZXZlbnQudGFyZ2V0LmdldFBvc2l0aW9uKCkpKSB7IGNvbGxpc2lvbldpdGggPSBfY2hpbGQ7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbldpdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxpc2lvbiB3aXRoIFwiLCBjb2xsaXNpb25XaXRoLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMud29yZFN3YXAoY29sbGlzaW9uV2l0aCwgdGhpcy53b3JkQ3VycmVudFNlbGVjZWQsIGNvbGxpc2lvbldpdGgueCwgdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MueCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgd29yZFRvdWNoRW5kKF9ldmVudCkge1xuICAgICAgICBpZiAoX2V2ZW50LnRhcmdldC5uYW1lID09IHRoaXMud29yZEN1cnJlbnRTZWxlY2VkPy5uYW1lKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVuZCBldmVudFwiKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMud29yZEN1cnJlbnRTZWxlY2VkKVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeDogdGhpcy53b3JkQ3VycmVudFNlbGVjZWRQb3MueCB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgbGV2ZWxGaW5pc2hlZCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNvcnJlY3RBY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uZmV0dGlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuXG5cbiAgICAgICAgY29uc29sZS5sb2coJ2xldmVsQ29tcGxldGUtLScgKyB0aGlzLmN1cnJTY2VuZSk7XG4gICAgICAgIHN0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwrKztcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgUHJvZ3Jlc3NCYXIuSW5zdGFuY2UuY3JlYXRlU3RhclRyYWlscyg2LCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFByb2dyZXNzQmFyLkluc3RhbmNlLlByb2dyZXNzRmlsbCh0aGlzLmN1cnJTY2VuZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyU2NlbmUgPCBzdGFydEdhbWUuSW5zdGFuY2UudG90YWxMZXZlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIjFcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lRW5kXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMC44KTtcbiAgICAgICAgICAgIH0sIDEuMik7XG5cbiAgICAgICAgfSwgMS41KTtcblxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihfbnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgX251bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIF9udW1iZXIgPSBjYy5taXNjLmxlcnAoMSwgMywgX251bWJlcik7XG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xuICAgICAgICByZXR1cm4gX251bWJlcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRSYW5kb21OdW1iZXJwKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBfbnVtYmVyOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBfbnVtYmVyID0gY2MubWlzYy5sZXJwKG1pbiwgbWF4LCBfbnVtYmVyKTtcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XG4gICAgICAgIHJldHVybiBfbnVtYmVyO1xuICAgIH1cblxuICAgIGxvYWRTcHJpdGVGcmFtZShpbWFnZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHZvaWQpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvXCIgKyBpbWFnZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3ByaXRlRnJhbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZEF1ZGlvQ2xpcChhdWRpb05hbWU6IHN0cmluZywgY2FsbGJhY2s6IChzcHJpdGVGcmFtZTogY2MuQXVkaW9DbGlwKSA9PiB2b2lkKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYXVkaW9zL1wiICsgYXVkaW9OYW1lLCBjYy5BdWRpb0NsaXAsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEdlbmVyYXRlT3B0aW9ucyhfbm9kZTogY2MuTm9kZSA9IHRoaXMubXlPcHRpb25zLCBfdGVtcGxhdGU6IHN0cmluZyA9IFwidGVtcGxhdGUxXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShfdGVtcGxhdGUpKTtcbiAgICAgICAgICAgIG9wdGlvbi5uYW1lID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgb3B0aW9uLnNldFBhcmVudChfbm9kZSk7XG4gICAgICAgICAgICBvcHRpb24uc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgb3B0aW9uLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBvcHRpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoX3RlbXBsYXRlKS5kZXN0cm95KCk7XG4gICAgICAgIGlmIChfdGVtcGxhdGUgPT0gXCJ0ZW1wbGF0ZTFcIikge1xuICAgICAgICAgICAgdGhpcy5PcHRpb25zTGF5b3V0VmVydGljYWwoKTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZU9wdGlvbnNMYXlvdXQoKTtcbiAgICAgICAgICAgIGlmIChzdGFydEdhbWUuSW5zdGFuY2UucXVlc3Rpb25zW3N0YXJ0R2FtZS5JbnN0YW5jZS5jdXJyZW50TGV2ZWwgLSAxXS5udW1iZXJPZk9wdGlvbnMgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMubXlPcHRpb25zLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKDAsIDEyMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5teU9wdGlvbnMuY2hpbGRyZW5bMV0uc2V0UG9zaXRpb24oMCwgLTEyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5PcHRpb25zTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJhbmdlQ2hpbGRyZW4odGhpcy53b3Jkc05vZGUsIDMwKTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT3B0aW9uc0xheW91dCgpIHtcbiAgICAgICAgbGV0IG9wdGlvbnNMYXlvdXQgPSB0aGlzLndvcmRzTm9kZTtcbiAgICAgICAgbGV0IG9wdGlvbk5vZGVzID0gb3B0aW9uc0xheW91dC5jaGlsZHJlbjtcblxuICAgICAgICBjb25zdCBwYWRkaW5nQmV0d2Vlbk9wdGlvbnMgPSAxMDtcblxuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcbiAgICAgICAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcbiAgICAgICAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xuXG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IG9wdGlvbldpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xuICAgICAgICAgICAgaWYgKG9wdGlvbkhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IG9wdGlvbkhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhdmFpbGFibGVXaWR0aCA9IG9wdGlvbnNMYXlvdXQud2lkdGg7XG4gICAgICAgIGxldCB0b3RhbFdpZHRoV2l0aFBhZGRpbmcgPSB0b3RhbFdpZHRoICsgKG9wdGlvbk5vZGVzLmxlbmd0aCAtIDEpICogcGFkZGluZ0JldHdlZW5PcHRpb25zO1xuICAgICAgICBsZXQgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBhdmFpbGFibGVXaWR0aCAvIHRvdGFsV2lkdGhXaXRoUGFkZGluZyk7XG5cbiAgICAgICAgbGV0IGFjY3VtdWxhdGVkV2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTm9kZXNbaV07XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2NhbGUgZmFjdG9yIGZvciB0aGUgb3B0aW9uXG4gICAgICAgICAgICBsZXQgb3B0aW9uU2NhbGVGYWN0b3IgPSBzY2FsZUZhY3RvcjtcblxuICAgICAgICAgICAgLy8gU2NhbGUgdGhlIG9wdGlvblxuICAgICAgICAgICAgb3B0aW9uLndpZHRoICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgb3B0aW9uLmhlaWdodCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFuY2hvciBhbmQgc2NhbGVkIHNpemVcbiAgICAgICAgICAgIGxldCBwb3NYID0gYWNjdW11bGF0ZWRXaWR0aCArIChvcHRpb24ud2lkdGggKiBvcHRpb24uYW5jaG9yWCk7XG4gICAgICAgICAgICBvcHRpb24ueCA9IHBvc1ggLSAob3B0aW9uc0xheW91dC53aWR0aCAqIG9wdGlvbnNMYXlvdXQuYW5jaG9yWCk7XG5cbiAgICAgICAgICAgIGFjY3VtdWxhdGVkV2lkdGggKz0gb3B0aW9uLndpZHRoICsgcGFkZGluZ0JldHdlZW5PcHRpb25zO1xuXG4gICAgICAgICAgICAvLyBTY2FsZSBhbmQgcG9zaXRpb24gY2hpbGRyZW4gbm9kZXMgcHJvcG9ydGlvbmFsbHlcbiAgICAgICAgICAgIGZvciAobGV0IHN1YkNoaWxkIG9mIG9wdGlvbi5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkLnggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQueSAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC53aWR0aCAqPSBvcHRpb25TY2FsZUZhY3RvcjtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC5oZWlnaHQgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zTGF5b3V0LmhlaWdodCA9IG1heEhlaWdodCAqIHNjYWxlRmFjdG9yO1xuICAgIH1cbiAgICBhcnJhbmdlQ2hpbGRyZW4oY2VudGVyTm9kZTogY2MuTm9kZSwgc3BhY2luZzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGNlbnRlck5vZGUuY2hpbGRyZW47XG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdG90YWwgd2lkdGggcmVxdWlyZWRcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gY2hpbGQud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdG90YWxXaWR0aCArPSBzcGFjaW5nICogKGNoaWxkcmVuLmxlbmd0aCAtIDEpOyAvLyBBZGQgc3BhY2VzIGJldHdlZW4gY2hpbGRyZW5cblxuICAgICAgICAvLyBTdGFydGluZyBYIHBvc2l0aW9uXG4gICAgICAgIGxldCBzdGFydFggPSAtdG90YWxXaWR0aCAvIDI7XG5cbiAgICAgICAgLy8gQXJyYW5nZSBjaGlsZHJlblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkLnggPSBzdGFydFggKyBjaGlsZC53aWR0aCAvIDI7XG4gICAgICAgICAgICBzdGFydFggKz0gY2hpbGQud2lkdGggKyBzcGFjaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT3B0aW9uc0xheW91dFZlcnRpY2FsKCkge1xuICAgICAgICBsZXQgb3B0aW9uc0xheW91dCA9IHRoaXMubXlPcHRpb25zO1xuICAgICAgICBsZXQgb3B0aW9uTm9kZXMgPSBvcHRpb25zTGF5b3V0LmNoaWxkcmVuO1xuXG4gICAgICAgIGNvbnN0IHBhZGRpbmdCZXR3ZWVuT3B0aW9ucyA9IDEwO1xuXG4gICAgICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhXaWR0aCA9IDA7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0b3RhbCBoZWlnaHQgYW5kIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcbiAgICAgICAgICAgIGxldCBvcHRpb25XaWR0aCA9IG9wdGlvbi53aWR0aDtcbiAgICAgICAgICAgIGxldCBvcHRpb25IZWlnaHQgPSBvcHRpb24uaGVpZ2h0O1xuXG4gICAgICAgICAgICB0b3RhbEhlaWdodCArPSBvcHRpb25IZWlnaHQgKyBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG4gICAgICAgICAgICBpZiAob3B0aW9uV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoID0gb3B0aW9uV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXZhaWxhYmxlSGVpZ2h0ID0gb3B0aW9uc0xheW91dC5oZWlnaHQ7XG4gICAgICAgIGxldCB0b3RhbEhlaWdodFdpdGhQYWRkaW5nID0gdG90YWxIZWlnaHQgKyAob3B0aW9uTm9kZXMubGVuZ3RoIC0gMSkgKiBwYWRkaW5nQmV0d2Vlbk9wdGlvbnM7XG4gICAgICAgIGxldCBzY2FsZUZhY3RvciA9IE1hdGgubWluKDEsIGF2YWlsYWJsZUhlaWdodCAvIHRvdGFsSGVpZ2h0V2l0aFBhZGRpbmcpO1xuXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZEhlaWdodCA9IDA7XG5cbiAgICAgICAgLy8gUG9zaXRpb24gZWFjaCBvcHRpb24gbm9kZSB2ZXJ0aWNhbGx5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25Ob2Rlc1tpXTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgZm9yIHRoZSBvcHRpb25cbiAgICAgICAgICAgIGxldCBvcHRpb25TY2FsZUZhY3RvciA9IHNjYWxlRmFjdG9yO1xuXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgb3B0aW9uXG4gICAgICAgICAgICBvcHRpb24ud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICBvcHRpb24uaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gYW5jaG9yIGFuZCBzY2FsZWQgc2l6ZVxuICAgICAgICAgICAgbGV0IHBvc1kgPSBhY2N1bXVsYXRlZEhlaWdodCArIChvcHRpb24uaGVpZ2h0ICogb3B0aW9uLmFuY2hvclkpO1xuICAgICAgICAgICAgb3B0aW9uLnkgPSBwb3NZIC0gKG9wdGlvbnNMYXlvdXQuaGVpZ2h0ICogb3B0aW9uc0xheW91dC5hbmNob3JZKTtcblxuICAgICAgICAgICAgYWNjdW11bGF0ZWRIZWlnaHQgKz0gb3B0aW9uLmhlaWdodCArIHBhZGRpbmdCZXR3ZWVuT3B0aW9ucztcblxuICAgICAgICAgICAgLy8gU2NhbGUgYW5kIHBvc2l0aW9uIGNoaWxkcmVuIG5vZGVzIHByb3BvcnRpb25hbGx5XG4gICAgICAgICAgICBmb3IgKGxldCBzdWJDaGlsZCBvZiBvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZC54ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkLnkgKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQud2lkdGggKj0gb3B0aW9uU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQuaGVpZ2h0ICo9IG9wdGlvblNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uc0xheW91dC53aWR0aCA9IG1heFdpZHRoICogc2NhbGVGYWN0b3I7XG4gICAgfVxuXG4gICAgcmV2ZXJzZU9wdGlvbnNMYXlvdXQoKSB7XG4gICAgICAgIGxldCBvcHRpb25zTGF5b3V0ID0gdGhpcy5teU9wdGlvbnM7XG4gICAgICAgIGxldCBvcHRpb25Ob2RlcyA9IG9wdGlvbnNMYXlvdXQuY2hpbGRyZW47XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IHRvIGhvbGQgdGhlIG5ldyBwb3NpdGlvbnNcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9ucyA9IFtdO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25zIGluIHJldmVyc2Ugb3JkZXJcbiAgICAgICAgZm9yIChsZXQgaSA9IG9wdGlvbk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbnMucHVzaChvcHRpb25Ob2Rlc1tpXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb25zIG9mIHRoZSBvcHRpb25zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9wdGlvbk5vZGVzW2ldLnkgPSBuZXdQb3NpdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

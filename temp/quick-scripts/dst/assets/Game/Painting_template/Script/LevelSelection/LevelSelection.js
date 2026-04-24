
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/LevelSelection/LevelSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c423iHn9JGn5NIhCMbGh9d', 'LevelSelection');
// Game/Painting_template/Script/LevelSelection/LevelSelection.ts

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
var CommonFun_1 = require("../Common/CommonFun");
var Constant_1 = require("../Common/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelSelection = /** @class */ (function (_super) {
    __extends(LevelSelection, _super);
    function LevelSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lvlArray = [];
        _this.clickAud = null;
        _this.DrawingDataArray = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LevelSelection.prototype.start = function () {
        var _this = this;
        this.addDrawing();
        this.scheduleOnce(function () {
            _this.PlayEffects();
        }, 1);
        this.schedule(function () {
            _this.PlayEffects();
        }, 7);
    };
    // update (dt) {}
    LevelSelection.prototype.addDrawing = function () {
        var _loop_1 = function (i) {
            var currentDrawing = cc.instantiate(this_1.DrawingDataArray[i]);
            this_1.lvlArray[i].addChild(currentDrawing);
            currentDrawing.setPosition(new cc.Vec2(0, 0));
            var currentDrawingeClassRef = CommonFun_1.default.instance.getDrawingTableClassRef(currentDrawing);
            currentDrawingeClassRef.initialiseRef(this_1);
            setTimeout(function () {
                var data = Constant_1.Constant.getLevelData(i);
                currentDrawingeClassRef.drawData(data);
            }, 10);
            currentDrawing.setScale(0.2);
        };
        var this_1 = this;
        for (var i = 0; i < this.lvlArray.length; i++) {
            _loop_1(i);
        }
    };
    LevelSelection.prototype.onLvlClicked = function (ref, tag) {
        cc.audioEngine.playEffect(this.clickAud, false);
        CommonFun_1.default.instance.currentLvl = parseInt(tag);
        console.log("levelStarted--" + (CommonFun_1.default.instance.currentLvl + 1));
        // console.log("current level = ", CommonFun.instance.currentLvl);
        cc.director.loadScene("GamePlay");
    };
    LevelSelection.prototype.PlayEffects = function () {
        // console.log("islogging");
        for (var i = 0; i < this.lvlArray.length; i++) {
            var delay = this.getRandomNumber(3, 9);
            delay *= 0.1;
            cc.tween(this.lvlArray[i]).to(delay, { scale: 1.2 }, { easing: "backInOut" })
                .to(delay, { scale: 1 }, { easing: "backInOut" }).start();
        }
    };
    LevelSelection.prototype.getRandomNumber = function (min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
    };
    LevelSelection.prototype.OnBackButton = function () {
        console.log("gameEnded--true");
        console.log("gameExit--true");
    };
    __decorate([
        property(cc.Node)
    ], LevelSelection.prototype, "lvlArray", void 0);
    __decorate([
        property(cc.AudioClip)
    ], LevelSelection.prototype, "clickAud", void 0);
    __decorate([
        property(cc.Prefab)
    ], LevelSelection.prototype, "DrawingDataArray", void 0);
    LevelSelection = __decorate([
        ccclass
    ], LevelSelection);
    return LevelSelection;
}(cc.Component));
exports.default = LevelSelection;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcTGV2ZWxTZWxlY3Rpb25cXExldmVsU2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGlEQUE0QztBQUM1QywrQ0FBOEM7QUFJeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE4RUM7UUEzRUcsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLHNCQUFnQixHQUFnQixFQUFFLENBQUM7O0lBc0V2QyxDQUFDO0lBcEVHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsOEJBQUssR0FBTDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLG1DQUFVLEdBQVY7Z0NBRWEsQ0FBQztZQUNOLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELE9BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMs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QUFDOzREQUNlO0lBUmxCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E4RWxDO0lBQUQscUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RTJDLEVBQUUsQ0FBQyxTQUFTLEdBOEV2RDtrQkE5RW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ29tbW9uRnVuIGZyb20gXCIuLi9Db21tb24vQ29tbW9uRnVuXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9Db21tb24vR2xvYmFsXCI7XHJcbmltcG9ydCBQZXJzaXN0ZW50U2Nyb2xsIGZyb20gXCIuLi9HYW1lUGxheS9QZXJzaXN0ZW50L1BlcnNpc3RlbnRTY3JvbGxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFNlbGVjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsdmxBcnJheSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGNsaWNrQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBEcmF3aW5nRGF0YUFycmF5OiBjYy5QcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWRkRHJhd2luZygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5QbGF5RWZmZWN0cygpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlBsYXlFZmZlY3RzKCk7XHJcbiAgICAgICAgfSwgNyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIGFkZERyYXdpbmcoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sdmxBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERyYXdpbmcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkRyYXdpbmdEYXRhQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLmx2bEFycmF5W2ldLmFkZENoaWxkKGN1cnJlbnREcmF3aW5nKTtcclxuICAgICAgICAgICAgY3VycmVudERyYXdpbmcuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoMCwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERyYXdpbmdlQ2xhc3NSZWYgPSBDb21tb25GdW4uaW5zdGFuY2UuZ2V0RHJhd2luZ1RhYmxlQ2xhc3NSZWYoY3VycmVudERyYXdpbmcpO1xyXG4gICAgICAgICAgICBjdXJyZW50RHJhd2luZ2VDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gQ29uc3RhbnQuZ2V0TGV2ZWxEYXRhKGkpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudERyYXdpbmdlQ2xhc3NSZWYuZHJhd0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgY3VycmVudERyYXdpbmcuc2V0U2NhbGUoMC4yKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkx2bENsaWNrZWQocmVmLCB0YWcpIHtcclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrQXVkLCBmYWxzZSk7XHJcbiAgICAgICAgQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwgPSBwYXJzZUludCh0YWcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIChDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCArIDEpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWwgPSBcIiwgQ29tbW9uRnVuLmluc3RhbmNlLmN1cnJlbnRMdmwpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lUGxheVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFBsYXlFZmZlY3RzKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXNsb2dnaW5nXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sdmxBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSB0aGlzLmdldFJhbmRvbU51bWJlcigzLCA5KTtcclxuICAgICAgICAgICAgZGVsYXkgKj0gMC4xO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmx2bEFycmF5W2ldKS50byhkZWxheSwgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oZGVsYXksIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwiYmFja0luT3V0XCIgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IF9udW1iZXI6IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XHJcbiAgICAgICAgX251bWJlciA9IE1hdGgucm91bmQoX251bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIF9udW1iZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE9uQmFja0J1dHRvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFbmRlZC0tdHJ1ZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVFeGl0LS10cnVlXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9MZXZlbFNlbGVjdGlvbi9MZXZlbFNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpREFBNEM7QUFDNUMsK0NBQThDO0FBSXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOEVDO1FBM0VHLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixzQkFBZ0IsR0FBZ0IsRUFBRSxDQUFDOztJQXNFdkMsQ0FBQztJQXBFRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDhCQUFLLEdBQUw7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixtQ0FBVSxHQUFWO2dDQUVhLENBQUM7WUFDTixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxPQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7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REFDZTtJQVJsQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBOEVsQztJQUFELHFCQUFDO0NBOUVELEFBOEVDLENBOUUyQyxFQUFFLENBQUMsU0FBUyxHQThFdkQ7a0JBOUVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25GdW5cIjtcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4uL0NvbW1vbi9Db25zdGFudFwiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQ29tbW9uL0dsb2JhbFwiO1xuaW1wb3J0IFBlcnNpc3RlbnRTY3JvbGwgZnJvbSBcIi4uL0dhbWVQbGF5L1BlcnNpc3RlbnQvUGVyc2lzdGVudFNjcm9sbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxTZWxlY3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbHZsQXJyYXkgPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGNsaWNrQXVkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBEcmF3aW5nRGF0YUFycmF5OiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZERyYXdpbmcoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5QbGF5RWZmZWN0cygpO1xuICAgICAgICB9LCAxKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlBsYXlFZmZlY3RzKCk7XG4gICAgICAgIH0sIDcpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgYWRkRHJhd2luZygpIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubHZsQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RHJhd2luZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRHJhd2luZ0RhdGFBcnJheVtpXSk7XG4gICAgICAgICAgICB0aGlzLmx2bEFycmF5W2ldLmFkZENoaWxkKGN1cnJlbnREcmF3aW5nKTtcbiAgICAgICAgICAgIGN1cnJlbnREcmF3aW5nLnNldFBvc2l0aW9uKG5ldyBjYy5WZWMyKDAsIDApKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RHJhd2luZ2VDbGFzc1JlZiA9IENvbW1vbkZ1bi5pbnN0YW5jZS5nZXREcmF3aW5nVGFibGVDbGFzc1JlZihjdXJyZW50RHJhd2luZyk7XG4gICAgICAgICAgICBjdXJyZW50RHJhd2luZ2VDbGFzc1JlZi5pbml0aWFsaXNlUmVmKHRoaXMpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBDb25zdGFudC5nZXRMZXZlbERhdGEoaSk7XG4gICAgICAgICAgICAgICAgY3VycmVudERyYXdpbmdlQ2xhc3NSZWYuZHJhd0RhdGEoZGF0YSk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICBjdXJyZW50RHJhd2luZy5zZXRTY2FsZSgwLjIpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uTHZsQ2xpY2tlZChyZWYsIHRhZykge1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZCwgZmFsc2UpO1xuICAgICAgICBDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCA9IHBhcnNlSW50KHRhZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWxTdGFydGVkLS1cIiArIChDb21tb25GdW4uaW5zdGFuY2UuY3VycmVudEx2bCArIDEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50IGxldmVsID0gXCIsIENvbW1vbkZ1bi5pbnN0YW5jZS5jdXJyZW50THZsKTtcblxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lUGxheVwiKTtcbiAgICB9XG5cblxuXG4gICAgUGxheUVmZmVjdHMoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXNsb2dnaW5nXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubHZsQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWxheSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDMsIDkpO1xuICAgICAgICAgICAgZGVsYXkgKj0gMC4xO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5sdmxBcnJheVtpXSkudG8oZGVsYXksIHsgc2NhbGU6IDEuMiB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KVxuICAgICAgICAgICAgICAgIC50byhkZWxheSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJiYWNrSW5PdXRcIiB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgX251bWJlcjogbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgX251bWJlciA9IGNjLm1pc2MubGVycChtaW4sIG1heCwgX251bWJlcik7XG4gICAgICAgIF9udW1iZXIgPSBNYXRoLnJvdW5kKF9udW1iZXIpO1xuICAgICAgICByZXR1cm4gX251bWJlcjtcblxuICAgIH1cblxuICAgIE9uQmFja0J1dHRvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lRW5kZWQtLXRydWVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUV4aXQtLXRydWVcIik7XG4gICAgfVxufVxuIl19
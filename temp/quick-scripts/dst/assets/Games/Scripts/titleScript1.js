
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/Scripts/titleScript1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77fe26jbH5NorU508z3jPET', 'titleScript1');
// Games/Scripts/titleScript1.ts

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
        _this.profileSet = false;
        _this.userAction = true;
        _this.titleProgressDone = false;
        _this.timer = 0;
        return _this;
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
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.director.preloadScene("1");
        // this.LoadQuestion();
        cc.director.loadScene("1");
        // this.node.getChildByName("Ch").getComponent(cc.Animation).play();
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.getChildByName("Character").getComponent(cc.Animation).play();
        this.scheduleOnce(function () {
        }, 0.1);
        this.scheduleOnce(function () {
            _this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        }, 0.5);
        // this.finishedAnim();
    };
    NewClass.prototype.loadData = function () {
        cc.resources.load("/Quiz_01_01_b");
        cc.resources.load("/3");
        cc.resources.load("/8");
    };
    NewClass.prototype.LoadQuestion = function () {
        var _this = this;
        //console.log(gaData);
        cc.resources.load("storyBoard", Object, function (_error, _jsonFile) {
            if (_error) {
                console.error(_error.message || _error);
                return;
            }
            var _jsonData = _jsonFile["json"];
            _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
            _this.loadData();
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9TY3JpcHRzL3RpdGxlU2NyaXB0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdFQztRQXJFRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFZixnQkFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1Qix1QkFBaUIsR0FBYSxLQUFLLENBQUM7UUFDcEMsV0FBSyxHQUFRLENBQUMsQ0FBQzs7UUFrRHZCLGtCQUFrQjtRQUNsQiw2RUFBNkU7UUFDN0Usc0ZBQXNGO1FBQ3RGLElBQUk7UUFFSixrQkFBa0I7UUFDbEIsOEJBQThCO1FBQzlCLG1GQUFtRjtRQUNuRixjQUFjO1FBQ2QsSUFBSTtJQUVSLENBQUM7SUF4REcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5Qix1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0Isb0VBQW9FO0lBRXhFLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBZUM7UUFiRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFbEIsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUUsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsdUJBQXVCO0lBSzNCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFBQSxpQkFXQztRQVZHLHNCQUFzQjtRQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFFLFNBQVM7WUFDdEQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPO2FBQ1Y7WUFDRCxJQUFJLFNBQVMsR0FBVyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdFNUI7SUFBRCxlQUFDO0NBeEVELEFBd0VDLENBeEVxQyxFQUFFLENBQUMsU0FBUyxHQXdFakQ7a0JBeEVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBnbG9iYWxWYXJpYWJsZXMgZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgcHJpdmF0ZSBwcm9maWxlU2V0IDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgdXNlckFjdGlvbiA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgdGl0bGVQcm9ncmVzc0RvbmUgOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0aW1lcjpudW1iZXI9MDtcbiAgICBwcml2YXRlIGRhdGE7XG5cbiAgICBcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKGAxYCk7XG4gICAgICAgIC8vIHRoaXMuTG9hZFF1ZXN0aW9uKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShgMWApO1xuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDaFwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNoYXJhY3RlclwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICBcbiAgICAgICAgfSwwLjEpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuICAgICAgICB9LDAuNSk7XG4gICAgICAgIC8vIHRoaXMuZmluaXNoZWRBbmltKCk7XG4gICAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgbG9hZERhdGEoKXtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYC9RdWl6XzAxXzAxX2JgKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYC8zYCk7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGAvOGApO1xuICAgIH1cblxuICAgIExvYWRRdWVzdGlvbigpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKGdhRGF0YSk7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwic3RvcnlCb2FyZFwiLCBPYmplY3QsIChfZXJyb3IsIF9qc29uRmlsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKF9lcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoX2Vycm9yLm1lc3NhZ2UgfHwgX2Vycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgX2pzb25EYXRhOiBvYmplY3QgPSBfanNvbkZpbGVbXCJqc29uXCJdO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfanNvbkRhdGFbXCJkYXRhXCJdKSk7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBwbGF5TmV4dEFuaW0oKXtcbiAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY3VydGFpblwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImN1cnRhaW5cIikub24oJ2ZpbmlzaGVkJywgIHRoaXMuZmluaXNoZWRBbmltLCAgICB0aGlzKVxuICAgIC8vIH1cblxuICAgIC8vIGZpbmlzaGVkQW5pbSgpe1xuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdsb2JhbFZhcmlhYmxlcy5JbnN0YW5jZS5jdXJyZW50TGV2ZWwudG9TdHJpbmcoKSk7XG4gICAgLy8gICAgIH0sIDAuNSlcbiAgICAvLyB9XG5cbn1cbiJdfQ==
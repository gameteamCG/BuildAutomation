
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/scratch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbb86E7QbtLxqVXFMHsAE7u', 'scratch');
// Game/Painting_template/Script/scratch.ts

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
var scratch = /** @class */ (function (_super) {
    __extends(scratch, _super);
    function scratch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myMask1 = null;
        _this.myMask2 = null;
        _this.MyMaterial = null;
        _this.MyMaterial1 = null;
        _this.size = 32;
        _this.usedBtn = 1;
        _this.currentMask = null;
        return _this;
    }
    scratch.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    };
    scratch.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype.onBtnClicked = function () {
        this.usedBtn *= -1;
        var mask = null;
        if (this.usedBtn == 1)
            mask = cc.instantiate(this.myMask1);
        if (this.usedBtn == -1)
            mask = cc.instantiate(this.myMask2);
        this.node.getChildByName("mask").addChild(mask);
        this.currentMask = mask.getComponent(cc.Mask);
    };
    scratch.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    };
    scratch.prototype._addCircle = function (point) {
        // var stencil = this.myMask._graphics;
        // stencil.circle(point.x, point.y, this.size);
        // stencil.fill();
        var stencil1 = this.currentMask._graphics;
        stencil1.circle(point.x, point.y, this.size);
        stencil1.fill();
        return;
        if (this.usedBtn == 1) {
            var stencil1 = this.myMask1._graphics;
            stencil1.circle(point.x, point.y, this.size);
            stencil1.fillColor = cc.Color.GREEN;
            stencil1.fill();
            // var stencil2 = this.myMask2._graphics;
            // stencil2.circle(point.x, point.y, 20);
            // stencil2.setMaterial(0,this.MyMaterial);
            // stencil2.fillColor.a = 0
            // stencil2.srcBlendFactor = cc.BlendFunc.BlendFactor.ZERO;
            // stencil2.dstBlendFactor = cc.BlendFunc.BlendFactor.ONE_MINUS_SRC_ALPHA;
            // stencil2.fill();
        }
        else {
            // var stencil1 = this.myMask1._graphics;
            // stencil1.circle(point.x, point.y, this.size);
            // stencil1.close();
            var stencil2 = this.myMask2._graphics;
            stencil2.circle(point.x, point.y, this.size);
            // stencil2.setMaterial(0,this.MyMaterial1);
            // stencil2.fillColor.a = 255
            stencil2.fill();
        }
    };
    __decorate([
        property({
            type: cc.Prefab
        })
    ], scratch.prototype, "myMask1", void 0);
    __decorate([
        property({
            type: cc.Prefab
        })
    ], scratch.prototype, "myMask2", void 0);
    __decorate([
        property({
            type: cc.Material
        })
    ], scratch.prototype, "MyMaterial", void 0);
    __decorate([
        property({
            type: cc.Material
        })
    ], scratch.prototype, "MyMaterial1", void 0);
    __decorate([
        property({
            displayName: "刮卡路径大小",
            min: 32
        })
    ], scratch.prototype, "size", void 0);
    scratch = __decorate([
        ccclass
    ], scratch);
    return scratch;
}(cc.Component));
exports.default = scratch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9zY3JhdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBaUhDO1FBNUdHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFLMUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQU0xQixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFJL0IsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBTWhDLFVBQUksR0FBVyxFQUFFLENBQUM7UUFFbEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGlCQUFXLEdBQUcsSUFBSSxDQUFDOztJQW9GdkIsQ0FBQztJQWxGRyx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELCtCQUFhLEdBQWIsVUFBZSxLQUFLO1FBQ2hCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsS0FBSyxHQUFHLElBQUks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QUM7SUEzR0Q7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07U0FDbEIsQ0FBQzs0Q0FDd0I7SUFLMUI7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07U0FDbEIsQ0FBQzs0Q0FDd0I7SUFNMUI7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVE7U0FDcEIsQ0FBQzsrQ0FDNkI7SUFJL0I7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVE7U0FDcEIsQ0FBQztnREFDOEI7SUFNaEM7UUFKQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsUUFBUTtZQUNyQixHQUFHLEVBQUUsRUFBRTtTQUNWLENBQUM7eUNBQ2dCO0lBMUJELE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FpSDNCO0lBQUQsY0FBQztDQWpIRCxBQWlIQyxDQWpIb0MsRUFBRSxDQUFDLFNBQVMsR0FpSGhEO2tCQWpIb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NyYXRjaCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICB9KVxuICAgIG15TWFzazE6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgfSlcbiAgICBteU1hc2syOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTWF0ZXJpYWxcbiAgICB9KVxuICAgIE15TWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5NYXRlcmlhbFxuICAgIH0pXG4gICAgTXlNYXRlcmlhbDE6IGNjLk1hdGVyaWFsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWIruWNoei3r+W+hOWkp+Wwj1wiLFxuICAgICAgICBtaW46IDMyXG4gICAgfSlcbiAgICBzaXplOiBudW1iZXIgPSAzMjtcblxuICAgIHVzZWRCdG4gPSAxO1xuICAgIGN1cnJlbnRNYXNrID0gbnVsbDtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaEJlZ2luLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIF9vblRvdWNoQmVnaW4gKGV2ZW50KSB7XG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcbiAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcbiAgICB9XG5cbiAgICBfb25Ub3VjaE1vdmVkIChldmVudCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XG4gICAgICAgIHRoaXMuX2FkZENpcmNsZShwb2ludCk7XG4gICAgfVxuXG4gICAgb25CdG5DbGlja2VkKCl7XG4gICAgICAgIHRoaXMudXNlZEJ0biAqPSAtMTtcbiAgICAgICAgbGV0IG1hc2sgPSBudWxsO1xuICAgICAgICBpZih0aGlzLnVzZWRCdG4gPT0gMSlcbiAgICAgICAgICAgIG1hc2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm15TWFzazEpO1xuICAgICAgICBpZih0aGlzLnVzZWRCdG4gPT0gLTEpXG4gICAgICAgICAgICBtYXNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5teU1hc2syKTtcblxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmFkZENoaWxkKG1hc2spO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzayA9IG1hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xuICAgIH1cblxuICAgIF9vblRvdWNoRW5kIChldmVudCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XG4gICAgICAgIHRoaXMuX2FkZENpcmNsZShwb2ludCk7XG4gICAgfVxuXG4gICAgX2FkZENpcmNsZSAocG9pbnQpIHtcbiAgICAgICAgLy8gdmFyIHN0ZW5jaWwgPSB0aGlzLm15TWFzay5fZ3JhcGhpY3M7XG4gICAgICAgIC8vIHN0ZW5jaWwuY2lyY2xlKHBvaW50LngsIHBvaW50LnksIHRoaXMuc2l6ZSk7XG4gICAgICAgIC8vIHN0ZW5jaWwuZmlsbCgpO1xuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgdmFyIHN0ZW5jaWwxID0gdGhpcy5jdXJyZW50TWFzay5fZ3JhcGhpY3M7XG4gICAgICAgIHN0ZW5jaWwxLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xuICAgICAgICBzdGVuY2lsMS5maWxsKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmKHRoaXMudXNlZEJ0biA9PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3RlbmNpbDEgPSB0aGlzLm15TWFzazEuX2dyYXBoaWNzO1xuICAgICAgICAgICAgc3RlbmNpbDEuY2lyY2xlKHBvaW50LngsIHBvaW50LnksIHRoaXMuc2l6ZSk7XG4gICAgICAgICAgICBzdGVuY2lsMS5maWxsQ29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgICAgICAgICAgIHN0ZW5jaWwxLmZpbGwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdmFyIHN0ZW5jaWwyID0gdGhpcy5teU1hc2syLl9ncmFwaGljcztcbiAgICAgICAgICAgIC8vIHN0ZW5jaWwyLmNpcmNsZShwb2ludC54LCBwb2ludC55LCAyMCk7XG5cbiAgICAgICAgICAgIC8vIHN0ZW5jaWwyLnNldE1hdGVyaWFsKDAsdGhpcy5NeU1hdGVyaWFsKTtcbiAgICAgICAgICAgIC8vIHN0ZW5jaWwyLmZpbGxDb2xvci5hID0gMFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5zcmNCbGVuZEZhY3RvciA9IGNjLkJsZW5kRnVuYy5CbGVuZEZhY3Rvci5aRVJPO1xuICAgICAgICAgICAgLy8gc3RlbmNpbDIuZHN0QmxlbmRGYWN0b3IgPSBjYy5CbGVuZEZ1bmMuQmxlbmRGYWN0b3IuT05FX01JTlVTX1NSQ19BTFBIQTtcblxuICAgICAgICAgICAgLy8gc3RlbmNpbDIuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdmFyIHN0ZW5jaWwxID0gdGhpcy5teU1hc2sxLl9ncmFwaGljcztcbiAgICAgICAgICAgIC8vIHN0ZW5jaWwxLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xuICAgICAgICAgICAgLy8gc3RlbmNpbDEuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIHN0ZW5jaWwyID0gdGhpcy5teU1hc2syLl9ncmFwaGljcztcbiAgICAgICAgICAgIHN0ZW5jaWwyLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xuICAgICAgICAgICAgLy8gc3RlbmNpbDIuc2V0TWF0ZXJpYWwoMCx0aGlzLk15TWF0ZXJpYWwxKTtcbiAgICAgICAgICAgIC8vIHN0ZW5jaWwyLmZpbGxDb2xvci5hID0gMjU1XG4gICAgICAgICAgICBzdGVuY2lsMi5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuIl19
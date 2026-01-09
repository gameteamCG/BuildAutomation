
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcc2NyYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWlIQztRQTVHRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBSzFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFNMUIsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBSS9CLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQU1oQyxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUFvRnZCLENBQUM7SUFsRkcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCwrQkFBYSxHQUFiLFVBQWUsS0FBSztRQUNoQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLEtBQUssR0FBRyxJ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TCxDQUFDO0lBM0dEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7NENBQ3dCO0lBSzFCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1NBQ2xCLENBQUM7NENBQ3dCO0lBTTFCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRO1NBQ3BCLENBQUM7K0NBQzZCO0lBSS9CO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRO1NBQ3BCLENBQUM7Z0RBQzhCO0lBTWhDO1FBSkMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLFFBQVE7WUFDckIsR0FBRyxFQUFFLEVBQUU7U0FDVixDQUFDO3lDQUNnQjtJQTFCRCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUgzQjtJQUFELGNBQUM7Q0FqSEQsQUFpSEMsQ0FqSG9DLEVBQUUsQ0FBQyxTQUFTLEdBaUhoRDtrQkFqSG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNjcmF0Y2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICB9KVxyXG4gICAgbXlNYXNrMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgIH0pXHJcbiAgICBteU1hc2syOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5NYXRlcmlhbFxyXG4gICAgfSlcclxuICAgIE15TWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTWF0ZXJpYWxcclxuICAgIH0pXHJcbiAgICBNeU1hdGVyaWFsMTogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5Yiu5Y2h6Lev5b6E5aSn5bCPXCIsXHJcbiAgICAgICAgbWluOiAzMlxyXG4gICAgfSlcclxuICAgIHNpemU6IG51bWJlciA9IDMyO1xyXG5cclxuICAgIHVzZWRCdG4gPSAxO1xyXG4gICAgY3VycmVudE1hc2sgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoQmVnaW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoQmVnaW4gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaE1vdmVkIChldmVudCkge1xyXG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xyXG4gICAgICAgIHRoaXMuX2FkZENpcmNsZShwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbGlja2VkKCl7XHJcbiAgICAgICAgdGhpcy51c2VkQnRuICo9IC0xO1xyXG4gICAgICAgIGxldCBtYXNrID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLnVzZWRCdG4gPT0gMSlcclxuICAgICAgICAgICAgbWFzayA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXlNYXNrMSk7XHJcbiAgICAgICAgaWYodGhpcy51c2VkQnRuID09IC0xKVxyXG4gICAgICAgICAgICBtYXNrID0gY2MuaW5zdGFudGlhdGUodGhpcy5teU1hc2syKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5hZGRDaGlsZChtYXNrKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gbWFzay5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hFbmQgKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2lyY2xlKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfYWRkQ2lyY2xlIChwb2ludCkge1xyXG4gICAgICAgIC8vIHZhciBzdGVuY2lsID0gdGhpcy5teU1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgIC8vIHN0ZW5jaWwuY2lyY2xlKHBvaW50LngsIHBvaW50LnksIHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgLy8gc3RlbmNpbC5maWxsKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzdGVuY2lsMSA9IHRoaXMuY3VycmVudE1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgIHN0ZW5jaWwxLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xyXG4gICAgICAgIHN0ZW5jaWwxLmZpbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLnVzZWRCdG4gPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGVuY2lsMSA9IHRoaXMubXlNYXNrMS5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgIHN0ZW5jaWwxLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xyXG4gICAgICAgICAgICBzdGVuY2lsMS5maWxsQ29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICAgICAgc3RlbmNpbDEuZmlsbCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdmFyIHN0ZW5jaWwyID0gdGhpcy5teU1hc2syLl9ncmFwaGljcztcclxuICAgICAgICAgICAgLy8gc3RlbmNpbDIuY2lyY2xlKHBvaW50LngsIHBvaW50LnksIDIwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0ZW5jaWwyLnNldE1hdGVyaWFsKDAsdGhpcy5NeU1hdGVyaWFsKTtcclxuICAgICAgICAgICAgLy8gc3RlbmNpbDIuZmlsbENvbG9yLmEgPSAwXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5zcmNCbGVuZEZhY3RvciA9IGNjLkJsZW5kRnVuYy5CbGVuZEZhY3Rvci5aRVJPO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5kc3RCbGVuZEZhY3RvciA9IGNjLkJsZW5kRnVuYy5CbGVuZEZhY3Rvci5PTkVfTUlOVVNfU1JDX0FMUEhBO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RlbmNpbDIuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB2YXIgc3RlbmNpbDEgPSB0aGlzLm15TWFzazEuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMS5jaXJjbGUocG9pbnQueCwgcG9pbnQueSwgdGhpcy5zaXplKTtcclxuICAgICAgICAgICAgLy8gc3RlbmNpbDEuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGVuY2lsMiA9IHRoaXMubXlNYXNrMi5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgIHN0ZW5jaWwyLmNpcmNsZShwb2ludC54LCBwb2ludC55LCB0aGlzLnNpemUpO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5zZXRNYXRlcmlhbCgwLHRoaXMuTXlNYXRlcmlhbDEpO1xyXG4gICAgICAgICAgICAvLyBzdGVuY2lsMi5maWxsQ29sb3IuYSA9IDI1NVxyXG4gICAgICAgICAgICBzdGVuY2lsMi5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
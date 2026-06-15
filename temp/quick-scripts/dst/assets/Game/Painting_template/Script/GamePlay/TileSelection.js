
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/GamePlay/TileSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e87e4A2+tCgoW+6DQz4w3i', 'TileSelection');
// Game/Painting_template/Script/GamePlay/TileSelection.ts

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
var Constant_1 = require("../Common/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TileSelection = /** @class */ (function (_super) {
    __extends(TileSelection, _super);
    function TileSelection() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.parentRef = null;
        _this.parentNode = null;
        _this.patternFrame = null;
        _this.currentTimeout = null;
        _this.index = 0;
        _this.isLocked = false;
        return _this;
    }
    TileSelection.prototype.start = function () {
    };
    TileSelection.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
    };
    TileSelection.prototype._onTouchBegin = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    TileSelection.prototype._onTouchMoved = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
    };
    TileSelection.prototype._onTouchEnd = function (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.parentRef.onTileSelected(this);
    };
    // update (dt) {}
    TileSelection.prototype.initialiseRef = function (ParentRef) {
        this.parentRef = ParentRef;
        this.parentNode = this.parentRef.node;
    };
    TileSelection.prototype.initialiseData = function (data, index) {
        this.index = index;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.patternFrame = data.color;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            this.patternFrame = data.PatternFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.patternFrame = data.SparkleFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.COLOR)
            this.node.color = this.patternFrame; //CommonFun.instance.hexToRgb(this.patternFrame);
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.PATTERN)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
        if (this.parentRef.currentTileIndex == Constant_1.Constant.COLORTAG.SPARKLE)
            this.getComponent(cc.Sprite).spriteFrame = this.patternFrame;
    };
    TileSelection.prototype.setLocked = function (value) {
        this.isLocked = value;
        this.node.getChildByName("lockNode").active = value;
    };
    TileSelection = __decorate([
        ccclass
    ], TileSelection);
    return TileSelection;
}(cc.Component));
exports.default = TileSelection;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcR2FtZVBsYXlcXFRpbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBRUksd0JBQXdCO1FBRjVCLHFFQXdFQztRQXBFRyxlQUFlO1FBRWYsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUEwRHJCLENBQUM7SUF4REcsNkJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVB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eEQsQ0FBQztJQXZFZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXdFakM7SUFBRCxvQkFBQztDQXhFRCxBQXdFQyxDQXhFMEMsRUFBRSxDQUFDLFNBQVMsR0F3RXREO2tCQXhFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDb21tb25GdW4gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25GdW5cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVTZWxlY3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHBhcmVudFJlZiA9IG51bGw7XHJcbiAgICBwYXJlbnROb2RlID0gbnVsbDtcclxuXHJcbiAgICBwYXR0ZXJuRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIGN1cnJlbnRUaW1lb3V0ID0gbnVsbDtcclxuICAgIGluZGV4ID0gMDtcclxuXHJcbiAgICBpc0xvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fb25Ub3VjaEJlZ2luLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIF9vblRvdWNoQmVnaW4gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hNb3ZlZCAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Ub3VjaEVuZCAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRSZWYub25UaWxlU2VsZWN0ZWQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBpbml0aWFsaXNlUmVmKFBhcmVudFJlZil7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRSZWYgPSBQYXJlbnRSZWY7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gdGhpcy5wYXJlbnRSZWYubm9kZTtcclxuICAgIH1cclxuICAgIGluaXRpYWxpc2VEYXRhKGRhdGEsaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBpZih0aGlzLnBhcmVudFJlZi5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SKVxyXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GcmFtZSA9IGRhdGEuY29sb3I7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKVxyXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GcmFtZSA9IGRhdGEuUGF0dGVybkZyYW1lO1xyXG4gICAgICAgIGlmKHRoaXMucGFyZW50UmVmLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuU1BBUktMRSlcclxuICAgICAgICAgICAgdGhpcy5wYXR0ZXJuRnJhbWUgPSBkYXRhLlNwYXJrbGVGcmFtZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5DT0xPUilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5wYXR0ZXJuRnJhbWUvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLnBhdHRlcm5GcmFtZSk7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5QQVRURVJOKVxyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wYXR0ZXJuRnJhbWU7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFKVxyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5wYXR0ZXJuRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9ja2VkKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmlzTG9ja2VkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibG9ja05vZGVcIikuYWN0aXZlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIl19
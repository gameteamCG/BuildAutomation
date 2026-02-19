
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9HYW1lUGxheS9UaWxlU2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLCtDQUE4QztBQUV4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUVJLHdCQUF3QjtRQUY1QixxRUF3RUM7UUFwRUcsZUFBZTtRQUVmLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGNBQVEsR0FBRyxLQUFLLENBQUM7O0lBMERyQixDQUFDO0lBeERHLDZCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElB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QUM7SUF2RWdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F3RWpDO0lBQUQsb0JBQUM7Q0F4RUQsQUF3RUMsQ0F4RTBDLEVBQUUsQ0FBQyxTQUFTLEdBd0V0RDtrQkF4RW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvbW1vbkZ1biBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vbkZ1blwiO1xuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi4vQ29tbW9uL0NvbnN0YW50XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZVNlbGVjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgcGFyZW50UmVmID0gbnVsbDtcbiAgICBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIHBhdHRlcm5GcmFtZSA9IG51bGw7XG5cbiAgICBjdXJyZW50VGltZW91dCA9IG51bGw7XG4gICAgaW5kZXggPSAwO1xuXG4gICAgaXNMb2NrZWQgPSBmYWxzZTtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hCZWdpbiwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuICAgIFxuXG4gICAgX29uVG91Y2hCZWdpbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xuICAgIH1cblxuICAgIF9vblRvdWNoTW92ZWQgKGV2ZW50KSB7XG4gICAgICAgIHZhciBwb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIHBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcbiAgICB9XG5cbiAgICBfb25Ub3VjaEVuZCAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgcG9pbnQgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xuXG4gICAgICAgIHRoaXMucGFyZW50UmVmLm9uVGlsZVNlbGVjdGVkKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBpbml0aWFsaXNlUmVmKFBhcmVudFJlZil7XG4gICAgICAgIHRoaXMucGFyZW50UmVmID0gUGFyZW50UmVmO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB0aGlzLnBhcmVudFJlZi5ub2RlO1xuICAgIH1cbiAgICBpbml0aWFsaXNlRGF0YShkYXRhLGluZGV4KXtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICBpZih0aGlzLnBhcmVudFJlZi5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SKVxuICAgICAgICAgICAgdGhpcy5wYXR0ZXJuRnJhbWUgPSBkYXRhLmNvbG9yO1xuICAgICAgICBpZih0aGlzLnBhcmVudFJlZi5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlBBVFRFUk4pXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GcmFtZSA9IGRhdGEuUGF0dGVybkZyYW1lO1xuICAgICAgICBpZih0aGlzLnBhcmVudFJlZi5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLlNQQVJLTEUpXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GcmFtZSA9IGRhdGEuU3BhcmtsZUZyYW1lO1xuXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnBhcmVudFJlZi5jdXJyZW50VGlsZUluZGV4ID09IENvbnN0YW50LkNPTE9SVEFHLkNPTE9SKVxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5wYXR0ZXJuRnJhbWUvL0NvbW1vbkZ1bi5pbnN0YW5jZS5oZXhUb1JnYih0aGlzLnBhdHRlcm5GcmFtZSk7XG4gICAgICAgIGlmKHRoaXMucGFyZW50UmVmLmN1cnJlbnRUaWxlSW5kZXggPT0gQ29uc3RhbnQuQ09MT1JUQUcuUEFUVEVSTilcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnBhdHRlcm5GcmFtZTtcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWYuY3VycmVudFRpbGVJbmRleCA9PSBDb25zdGFudC5DT0xPUlRBRy5TUEFSS0xFKVxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucGF0dGVybkZyYW1lO1xuICAgIH1cblxuICAgIHNldExvY2tlZCh2YWx1ZSl7XG4gICAgICAgIHRoaXMuaXNMb2NrZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibG9ja05vZGVcIikuYWN0aXZlID0gdmFsdWU7XG4gICAgfVxufVxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/CommonFun.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04f51fxUhpNXKW0151wPJGJ', 'CommonFun');
// Game/Painting_template/Script/Common/CommonFun.ts

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
var Drawingmask_1 = require("../GamePlay/Drawingmask");
var DrawingTable_1 = require("../GamePlay/DrawingTable");
var TileSelection_1 = require("../GamePlay/TileSelection");
var audioManager_1 = require("./audioManager");
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonFun = /** @class */ (function (_super) {
    __extends(CommonFun, _super);
    function CommonFun() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentLvl = 0;
        _this.isSymetryEnabled = false;
        return _this;
    }
    CommonFun_1 = CommonFun;
    Object.defineProperty(CommonFun, "instance", {
        get: function () {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new CommonFun_1;
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    CommonFun.prototype.start = function () {
        this.currentLvl = 0;
    };
    CommonFun.prototype.convertToCenterXPos = function (x) {
        var val = x + cc.winSize.width / 2;
        return val;
    };
    CommonFun.prototype.convertToCenterYPos = function (y) {
        var val = y + cc.winSize.height / 2;
        return val;
    };
    CommonFun.prototype.convertXPos = function (x, node) {
        var val = x - node.width / 2;
        return val;
    };
    CommonFun.prototype.convertYPos = function (y, node) {
        var val = y - node.height / 2;
        return val;
    };
    CommonFun.prototype.convertXPosWithNode = function (x, node) {
        var val = x - node.width / 2;
        return val;
    };
    CommonFun.prototype.convertYPosWithNode = function (y, node) {
        var val = y - node.height / 2;
        return val;
    };
    CommonFun.prototype.showScaleAnimation = function (node, scale, time) {
        cc.tween(node)
            .to(time, {
            scale: scale
        })
            .start();
    };
    CommonFun.prototype.angle = function (originX, originY, targetX, targetY) {
        var dx = originX - targetX;
        var dy = originY - targetY;
        var theta = Math.atan2(-dy, -dx); // [0, Ⲡ] then [-Ⲡ, 0]; clockwise; 0° = east
        theta *= 180 / Math.PI; // [0, 180] then [-180, 0]; clockwise; 0° = east
        if (theta < 0)
            theta += 360; // [0, 360]; clockwise; 0° = east
        return theta;
    };
    CommonFun.prototype.removeArrayValue = function (array, val) {
        var index = array.indexOf(val);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    CommonFun.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    CommonFun.prototype.getDistance = function (xA, yA, xB, yB) {
        var xDiff = xA - xB;
        var yDiff = yA - yB;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    CommonFun.prototype.getRndInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    CommonFun.prototype.generateRect = function (p1) {
        var val = 20;
        var left = p1.x - val;
        var right = p1.x + val;
        var top = p1.y + val;
        var bottom = p1.y - val;
        var width = right - left;
        var height = top - bottom;
        return cc.rect(left, p1.y, width, height);
    };
    CommonFun.prototype.checkInPolygon = function (p1, p3) {
        var rect = this.generateRect(p1);
        var inside = rect.contains(p3);
        return inside;
    };
    CommonFun.prototype.splitNumIntoXRandomComponents = function (num, x, min_num) {
        var components = [];
        var count = 1;
        var cumulative = 0;
        var balance = num;
        for (var i = 0; i < x - 1; i++) {
            //max num for this spot
            var max_num = balance - ((x - count) * min_num);
            //to avoid big numbers in the beginning and min numbers at the end
            if (Math.random() > 0.3) { //0.5 can be tuned to your liking
                max_num = Math.floor(max_num / 2) + min_num;
            }
            //generate the number for the spot at 'count'
            var c = Math.floor(Math.random() * (max_num - min_num + 1) + min_num);
            //adjust balances
            cumulative += c;
            balance -= c;
            count++;
            //store this number
            components.push(c);
        }
        //push remaining balance into the last spot
        components.push(balance);
        //print numbers
        return components;
    };
    CommonFun.prototype.pointOnLine = function (pt1, pt2, pt3) {
        var result = {
            on_projected_line: true,
            on_line: false,
            between_both: false,
            between_x: false,
            between_y: false,
        };
        // Determine if on line interior or exterior
        var x = (pt3.x - pt1.x) / (pt2.x - pt1.x);
        var y = (pt3.y - pt1.y) / (pt2.y - pt1.y);
        // Check if on line equation
        result.on_projected_line = x === y;
        // Check within x bounds
        if ((pt1.x <= pt3.x && pt3.x <= pt2.x) ||
            (pt2.x <= pt3.x && pt3.x <= pt1.x)) {
            result.between_x = true;
        }
        // Check within y bounds
        if ((pt1.y <= pt3.y && pt3.y <= pt2.y) ||
            (pt2.y <= pt3.y && pt3.y <= pt1.y)) {
            result.between_y = true;
        }
        result.between_both = result.between_x && result.between_y;
        result.on_line = result.on_projected_line && result.between_both;
        return result;
    };
    CommonFun.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new cc.Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 255) : new cc.Color(0, 0, 0, 255);
    };
    CommonFun.prototype.getTileSelectionClassRef = function (node) {
        if (node.getComponent(TileSelection_1.default) != null)
            return node.getComponent(TileSelection_1.default);
        return null;
    };
    CommonFun.prototype.getDrawingmaskClassRef = function (node) {
        if (node.getComponent(Drawingmask_1.default) != null)
            return node.getComponent(Drawingmask_1.default);
        return null;
    };
    CommonFun.prototype.getDrawingTableClassRef = function (node) {
        if (node.getComponent(DrawingTable_1.default) != null)
            return node.getComponent(DrawingTable_1.default);
        return null;
    };
    CommonFun.prototype.loadAllAudios = function () {
        for (var i = 0; i < Object.keys(Constant_1.Constant.AUDIO_SOUND.correct).length; i++) {
            audioManager_1.default.instance.loadAuido(Constant_1.Constant.AUDIO_SOUND.correct[Object.keys(Constant_1.Constant.AUDIO_SOUND.correct)[i]]);
        }
    };
    CommonFun.prototype.circleCoordinates = function (radius, steps, centerX, centerY) {
        var pos = [];
        for (var i = 0; i < steps; i++) {
            pos.push(new cc.Vec2(centerX + radius * Math.cos(2 * Math.PI * (i / steps)), centerY + radius * Math.sin(2 * Math.PI * (i / steps))));
        }
        return pos;
    };
    CommonFun.prototype.getAlphabet = function (num) {
        return (num + 10).toString(36);
    };
    CommonFun.prototype.ifFirstTimePlayer = function () {
        // window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1")
        if (window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == null || window.localStorage.getItem("smallAlphabetifFirstTimePlayer") == undefined)
            window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "1");
        return parseInt(window.localStorage.getItem("smallAlphabetifFirstTimePlayer"));
    };
    CommonFun.prototype.updateifFirstTimePlayer = function () {
        window.localStorage.setItem("smallAlphabetifFirstTimePlayer", "0");
    };
    CommonFun.prototype.logData = function (txt) {
        console.log(txt);
    };
    CommonFun.prototype.getTotalLvlPlayed = function () {
        if (window.localStorage.getItem("totalLvlPlayeda-z") == null || window.localStorage.getItem("totalLvlPlayeda-z") == undefined)
            window.localStorage.setItem("totalLvlPlayeda-z", "-1");
        var array = [];
        var lvl = window.localStorage.getItem("totalLvlPlayeda-z");
        array = lvl.split("/");
        return array;
    };
    CommonFun.prototype.updateLvlPlayed = function (lvlNo) {
        var currentLvls = this.getTotalLvlPlayed();
        var lvlExist = this.checkLvlExist(lvlNo);
        if (!lvlExist) {
            currentLvls.push(lvlNo);
            var str = "";
            for (var i = 0; i < currentLvls.length; i++) {
                str = str + currentLvls[i];
                if (i < currentLvls.length - 1)
                    str = str + "/";
            }
            window.localStorage.setItem("totalLvlPlayeda-z", str);
        }
    };
    CommonFun.prototype.checkLvlExist = function (lvlNo) {
        var currentLvls = this.getTotalLvlPlayed();
        var lvlExist = false;
        for (var i = 0; i < currentLvls.length; i++) {
            if (lvlNo.toString() == currentLvls[i]) {
                lvlExist = true;
                break;
            }
        }
        return lvlExist;
    };
    var CommonFun_1;
    CommonFun = CommonFun_1 = __decorate([
        ccclass
    ], CommonFun);
    return CommonFun;
}(cc.Component));
exports.default = CommonFun;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9Db21tb24vQ29tbW9uRnVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFrRDtBQUNsRCx5REFBb0Q7QUFDcEQsMkRBQXNEO0FBQ3RELCtDQUEwQztBQUMxQyx1Q0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUE4UkM7UUExUlUsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBeVJwQyxDQUFDO2tCQTlSb0IsU0FBUztJQU8xQixzQkFBVyxxQkFBUTthQUFuQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVMsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsdUNBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxH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Q0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsTUFBTTthQUNUO1NBQ0o7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOztJQTdSZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQThSN0I7SUFBRCxnQkFBQztDQTlSRCxBQThSQyxDQTlSc0MsRUFBRSxDQUFDLFNBQVMsR0E4UmxEO2tCQTlSb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgRHJhd2luZ21hc2sgZnJvbSBcIi4uL0dhbWVQbGF5L0RyYXdpbmdtYXNrXCI7XG5pbXBvcnQgRHJhd2luZ1RhYmxlIGZyb20gXCIuLi9HYW1lUGxheS9EcmF3aW5nVGFibGVcIjtcbmltcG9ydCBUaWxlU2VsZWN0aW9uIGZyb20gXCIuLi9HYW1lUGxheS9UaWxlU2VsZWN0aW9uXCI7XG5pbXBvcnQgYXVkaW9NYW5hZ2VyIGZyb20gXCIuL2F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25GdW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDb21tb25GdW47XG5cbiAgICBwdWJsaWMgY3VycmVudEx2bCA9IDA7XG4gICAgcHVibGljIGlzU3ltZXRyeUVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ29tbW9uRnVuO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEx2bCA9IDA7XG4gICAgfVxuXG4gICAgY29udmVydFRvQ2VudGVyWFBvcyh4KSB7XG4gICAgICAgIHZhciB2YWwgPSB4ICsgY2Mud2luU2l6ZS53aWR0aCAvIDI7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgY29udmVydFRvQ2VudGVyWVBvcyh5KSB7XG4gICAgICAgIHZhciB2YWwgPSB5ICsgY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGNvbnZlcnRYUG9zKHgsIG5vZGUpIHtcbiAgICAgICAgdmFyIHZhbCA9IHggLSBub2RlLndpZHRoIC8gMjtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBjb252ZXJ0WVBvcyh5LCBub2RlKSB7XG4gICAgICAgIHZhciB2YWwgPSB5IC0gbm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGNvbnZlcnRYUG9zV2l0aE5vZGUoeCwgbm9kZSkge1xuICAgICAgICB2YXIgdmFsID0geCAtIG5vZGUud2lkdGggLyAyO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGNvbnZlcnRZUG9zV2l0aE5vZGUoeSwgbm9kZSkge1xuICAgICAgICB2YXIgdmFsID0geSAtIG5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cblxuICAgIHNob3dTY2FsZUFuaW1hdGlvbihub2RlLCBzY2FsZSwgdGltZSkge1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKHRpbWUsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogc2NhbGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuXG4gICAgYW5nbGUob3JpZ2luWCwgb3JpZ2luWSwgdGFyZ2V0WCwgdGFyZ2V0WSkge1xuICAgICAgICB2YXIgZHggPSBvcmlnaW5YIC0gdGFyZ2V0WDtcbiAgICAgICAgdmFyIGR5ID0gb3JpZ2luWSAtIHRhcmdldFk7XG5cbiAgICAgICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMigtZHksIC1keCk7IC8vIFswLCDisqBdIHRoZW4gWy3isqAsIDBdOyBjbG9ja3dpc2U7IDDCsCA9IGVhc3RcbiAgICAgICAgdGhldGEgKj0gMTgwIC8gTWF0aC5QSTsgICAgICAgICAgIC8vIFswLCAxODBdIHRoZW4gWy0xODAsIDBdOyBjbG9ja3dpc2U7IDDCsCA9IGVhc3RcbiAgICAgICAgaWYgKHRoZXRhIDwgMCkgdGhldGEgKz0gMzYwOyAgICAgIC8vIFswLCAzNjBdOyBjbG9ja3dpc2U7IDDCsCA9IGVhc3RcblxuICAgICAgICByZXR1cm4gdGhldGE7XG4gICAgfVxuXG5cbiAgICByZW1vdmVBcnJheVZhbHVlKGFycmF5LCB2YWwpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKHZhbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBnZXREaXN0YW5jZSh4QSwgeUEsIHhCLCB5Qikge1xuICAgICAgICB2YXIgeERpZmYgPSB4QSAtIHhCO1xuICAgICAgICB2YXIgeURpZmYgPSB5QSAtIHlCO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeERpZmYgKiB4RGlmZiArIHlEaWZmICogeURpZmYpO1xuICAgIH1cblxuICAgIGdldFJuZEludGVnZXIobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVJlY3QocDEpIHtcblxuICAgICAgICBsZXQgdmFsID0gMjA7XG5cbiAgICAgICAgbGV0IGxlZnQgPSBwMS54IC0gdmFsO1xuICAgICAgICBsZXQgcmlnaHQgPSBwMS54ICsgdmFsO1xuICAgICAgICBsZXQgdG9wID0gcDEueSArIHZhbDtcbiAgICAgICAgbGV0IGJvdHRvbSA9IHAxLnkgLSB2YWw7XG4gICAgICAgIGxldCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRvcCAtIGJvdHRvbTtcbiAgICAgICAgcmV0dXJuIGNjLnJlY3QobGVmdCwgcDEueSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgY2hlY2tJblBvbHlnb24ocDEsIHAzKSB7XG4gICAgICAgIGxldCByZWN0ID0gdGhpcy5nZW5lcmF0ZVJlY3QocDEpO1xuICAgICAgICBsZXQgaW5zaWRlID0gcmVjdC5jb250YWlucyhwMyk7XG4gICAgICAgIHJldHVybiBpbnNpZGU7XG4gICAgfVxuXG4gICAgc3BsaXROdW1JbnRvWFJhbmRvbUNvbXBvbmVudHMobnVtLCB4LCBtaW5fbnVtKSB7XG5cbiAgICAgICAgdmFyIGNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgdmFyIGN1bXVsYXRpdmUgPSAwO1xuICAgICAgICB2YXIgYmFsYW5jZSA9IG51bTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIC8vbWF4IG51bSBmb3IgdGhpcyBzcG90XG4gICAgICAgICAgICB2YXIgbWF4X251bSA9IGJhbGFuY2UgLSAoKHggLSBjb3VudCkgKiBtaW5fbnVtKTtcblxuICAgICAgICAgICAgLy90byBhdm9pZCBiaWcgbnVtYmVycyBpbiB0aGUgYmVnaW5uaW5nIGFuZCBtaW4gbnVtYmVycyBhdCB0aGUgZW5kXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuMykgeyAvLzAuNSBjYW4gYmUgdHVuZWQgdG8geW91ciBsaWtpbmdcbiAgICAgICAgICAgICAgICBtYXhfbnVtID0gTWF0aC5mbG9vcihtYXhfbnVtIC8gMikgKyBtaW5fbnVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2dlbmVyYXRlIHRoZSBudW1iZXIgZm9yIHRoZSBzcG90IGF0ICdjb3VudCdcbiAgICAgICAgICAgIHZhciBjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heF9udW0gLSBtaW5fbnVtICsgMSkgKyBtaW5fbnVtKTtcblxuICAgICAgICAgICAgLy9hZGp1c3QgYmFsYW5jZXNcbiAgICAgICAgICAgIGN1bXVsYXRpdmUgKz0gYztcbiAgICAgICAgICAgIGJhbGFuY2UgLT0gYztcbiAgICAgICAgICAgIGNvdW50Kys7XG5cbiAgICAgICAgICAgIC8vc3RvcmUgdGhpcyBudW1iZXJcbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHVzaCByZW1haW5pbmcgYmFsYW5jZSBpbnRvIHRoZSBsYXN0IHNwb3RcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGJhbGFuY2UpO1xuXG4gICAgICAgIC8vcHJpbnQgbnVtYmVyc1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG5cbiAgICBwb2ludE9uTGluZShwdDEsIHB0MiwgcHQzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIG9uX3Byb2plY3RlZF9saW5lOiB0cnVlLFxuICAgICAgICAgICAgb25fbGluZTogZmFsc2UsXG4gICAgICAgICAgICBiZXR3ZWVuX2JvdGg6IGZhbHNlLFxuICAgICAgICAgICAgYmV0d2Vlbl94OiBmYWxzZSxcbiAgICAgICAgICAgIGJldHdlZW5feTogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIG9uIGxpbmUgaW50ZXJpb3Igb3IgZXh0ZXJpb3JcbiAgICAgICAgY29uc3QgeCA9IChwdDMueCAtIHB0MS54KSAvIChwdDIueCAtIHB0MS54KTtcbiAgICAgICAgY29uc3QgeSA9IChwdDMueSAtIHB0MS55KSAvIChwdDIueSAtIHB0MS55KTtcblxuICAgICAgICAvLyBDaGVjayBpZiBvbiBsaW5lIGVxdWF0aW9uXG4gICAgICAgIHJlc3VsdC5vbl9wcm9qZWN0ZWRfbGluZSA9IHggPT09IHk7XG5cbiAgICAgICAgLy8gQ2hlY2sgd2l0aGluIHggYm91bmRzXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChwdDEueCA8PSBwdDMueCAmJiBwdDMueCA8PSBwdDIueCkgfHxcbiAgICAgICAgICAgIChwdDIueCA8PSBwdDMueCAmJiBwdDMueCA8PSBwdDEueClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXN1bHQuYmV0d2Vlbl94ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHdpdGhpbiB5IGJvdW5kc1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHQxLnkgPD0gcHQzLnkgJiYgcHQzLnkgPD0gcHQyLnkpIHx8XG4gICAgICAgICAgICAocHQyLnkgPD0gcHQzLnkgJiYgcHQzLnkgPD0gcHQxLnkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmVzdWx0LmJldHdlZW5feSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuYmV0d2Vlbl9ib3RoID0gcmVzdWx0LmJldHdlZW5feCAmJiByZXN1bHQuYmV0d2Vlbl95O1xuICAgICAgICByZXN1bHQub25fbGluZSA9IHJlc3VsdC5vbl9wcm9qZWN0ZWRfbGluZSAmJiByZXN1bHQuYmV0d2Vlbl9ib3RoO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGhleFRvUmdiKGhleCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgICAgIHJldHVybiByZXN1bHQgPyBuZXcgY2MuQ29sb3IocGFyc2VJbnQocmVzdWx0WzFdLCAxNiksIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLCBwYXJzZUludChyZXN1bHRbM10sIDE2KSwgMjU1KSA6IG5ldyBjYy5Db2xvcigwLCAwLCAwLCAyNTUpO1xuICAgIH1cblxuICAgIGdldFRpbGVTZWxlY3Rpb25DbGFzc1JlZihub2RlKSB7XG4gICAgICAgIGlmICgobm9kZS5nZXRDb21wb25lbnQoVGlsZVNlbGVjdGlvbikgYXMgVGlsZVNlbGVjdGlvbikgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiAobm9kZS5nZXRDb21wb25lbnQoVGlsZVNlbGVjdGlvbikgYXMgVGlsZVNlbGVjdGlvbik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldERyYXdpbmdtYXNrQ2xhc3NSZWYobm9kZSkge1xuICAgICAgICBpZiAoKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdtYXNrKSBhcyBEcmF3aW5nbWFzaykgIT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiAobm9kZS5nZXRDb21wb25lbnQoRHJhd2luZ21hc2spIGFzIERyYXdpbmdtYXNrKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0RHJhd2luZ1RhYmxlQ2xhc3NSZWYobm9kZSkge1xuICAgICAgICBpZiAoKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdUYWJsZSkgYXMgRHJhd2luZ1RhYmxlKSAhPSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIChub2RlLmdldENvbXBvbmVudChEcmF3aW5nVGFibGUpIGFzIERyYXdpbmdUYWJsZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxvYWRBbGxBdWRpb3MoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoQ29uc3RhbnQuQVVESU9fU09VTkQuY29ycmVjdCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF1ZGlvTWFuYWdlci5pbnN0YW5jZS5sb2FkQXVpZG8oQ29uc3RhbnQuQVVESU9fU09VTkQuY29ycmVjdFtPYmplY3Qua2V5cyhDb25zdGFudC5BVURJT19TT1VORC5jb3JyZWN0KVtpXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2lyY2xlQ29vcmRpbmF0ZXMocmFkaXVzLCBzdGVwcywgY2VudGVyWCwgY2VudGVyWSkge1xuICAgICAgICBsZXQgcG9zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykge1xuICAgICAgICAgICAgcG9zLnB1c2gobmV3IGNjLlZlYzIoY2VudGVyWCArIHJhZGl1cyAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogKGkgLyBzdGVwcykpLFxuICAgICAgICAgICAgICAgIGNlbnRlclkgKyByYWRpdXMgKiBNYXRoLnNpbigyICogTWF0aC5QSSAqIChpIC8gc3RlcHMpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfVxuXG4gICAgZ2V0QWxwaGFiZXQobnVtKSB7XG4gICAgICAgIHJldHVybiAobnVtICsgMTApLnRvU3RyaW5nKDM2KTtcbiAgICB9XG5cbiAgICBpZkZpcnN0VGltZVBsYXllcigpIHtcbiAgICAgICAgLy8gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic21hbGxBbHBoYWJldGlmRmlyc3RUaW1lUGxheWVyXCIsIFwiMVwiKVxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic21hbGxBbHBoYWJldGlmRmlyc3RUaW1lUGxheWVyXCIpID09IG51bGwgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic21hbGxBbHBoYWJldGlmRmlyc3RUaW1lUGxheWVyXCIpID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiLCBcIjFcIilcblxuICAgICAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic21hbGxBbHBoYWJldGlmRmlyc3RUaW1lUGxheWVyXCIpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVpZkZpcnN0VGltZVBsYXllcigpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic21hbGxBbHBoYWJldGlmRmlyc3RUaW1lUGxheWVyXCIsIFwiMFwiKVxuICAgIH1cblxuXG4gICAgbG9nRGF0YSh0eHQpIHtcbiAgICAgICAgY29uc29sZS5sb2codHh0KTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEx2bFBsYXllZCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsTHZsUGxheWVkYS16XCIpID09IG51bGwgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxMdmxQbGF5ZWRhLXpcIikgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxMdmxQbGF5ZWRhLXpcIiwgXCItMVwiKVxuXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgbHZsID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxMdmxQbGF5ZWRhLXpcIik7XG5cbiAgICAgICAgYXJyYXkgPSBsdmwuc3BsaXQoXCIvXCIpO1xuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICB1cGRhdGVMdmxQbGF5ZWQobHZsTm8pIHtcbiAgICAgICAgbGV0IGN1cnJlbnRMdmxzID0gdGhpcy5nZXRUb3RhbEx2bFBsYXllZCgpO1xuICAgICAgICBsZXQgbHZsRXhpc3QgPSB0aGlzLmNoZWNrTHZsRXhpc3QobHZsTm8pO1xuICAgICAgICBpZiAoIWx2bEV4aXN0KSB7XG4gICAgICAgICAgICBjdXJyZW50THZscy5wdXNoKGx2bE5vKTtcbiAgICAgICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50THZscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIGN1cnJlbnRMdmxzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgY3VycmVudEx2bHMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gc3RyICsgXCIvXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbEx2bFBsYXllZGEtelwiLCBzdHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tMdmxFeGlzdChsdmxObykge1xuICAgICAgICBsZXQgY3VycmVudEx2bHMgPSB0aGlzLmdldFRvdGFsTHZsUGxheWVkKCk7XG4gICAgICAgIGxldCBsdmxFeGlzdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMdmxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobHZsTm8udG9TdHJpbmcoKSA9PSBjdXJyZW50THZsc1tpXSkge1xuICAgICAgICAgICAgICAgIGx2bEV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbHZsRXhpc3Q7XG4gICAgfVxufVxuIl19
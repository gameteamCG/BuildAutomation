
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxDb21tb25GdW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsdURBQWtEO0FBQ2xELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsK0NBQTBDO0FBQzFDLHVDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQThSQztRQTFSVSxnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLHNCQUFnQixHQUFHLEtBQUssQ0FBQzs7SUF5UnBDLENBQUM7a0JBOVJvQixTQUFTO0lBTzFCLHNCQUFXLHFCQUFRO2FBQW5CO1lBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDekI7WUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBUyxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCx1Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNqQixJQUFJLEdBQUcsR0FBRyxD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V0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNO2FBQ1Q7U0FDSjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7O0lBN1JnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOFI3QjtJQUFELGdCQUFDO0NBOVJELEFBOFJDLENBOVJzQyxFQUFFLENBQUMsU0FBUyxHQThSbEQ7a0JBOVJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IERyYXdpbmdtYXNrIGZyb20gXCIuLi9HYW1lUGxheS9EcmF3aW5nbWFza1wiO1xyXG5pbXBvcnQgRHJhd2luZ1RhYmxlIGZyb20gXCIuLi9HYW1lUGxheS9EcmF3aW5nVGFibGVcIjtcclxuaW1wb3J0IFRpbGVTZWxlY3Rpb24gZnJvbSBcIi4uL0dhbWVQbGF5L1RpbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9hdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25GdW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ29tbW9uRnVuO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50THZsID0gMDtcclxuICAgIHB1YmxpYyBpc1N5bWV0cnlFbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ29tbW9uRnVuO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMdmwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRUb0NlbnRlclhQb3MoeCkge1xyXG4gICAgICAgIHZhciB2YWwgPSB4ICsgY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0VG9DZW50ZXJZUG9zKHkpIHtcclxuICAgICAgICB2YXIgdmFsID0geSArIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRYUG9zKHgsIG5vZGUpIHtcclxuICAgICAgICB2YXIgdmFsID0geCAtIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFlQb3MoeSwgbm9kZSkge1xyXG4gICAgICAgIHZhciB2YWwgPSB5IC0gbm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFhQb3NXaXRoTm9kZSh4LCBub2RlKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IHggLSBub2RlLndpZHRoIC8gMjtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRZUG9zV2l0aE5vZGUoeSwgbm9kZSkge1xyXG4gICAgICAgIHZhciB2YWwgPSB5IC0gbm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dTY2FsZUFuaW1hdGlvbihub2RlLCBzY2FsZSwgdGltZSkge1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC50byh0aW1lLCB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogc2NhbGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcblxyXG4gICAgYW5nbGUob3JpZ2luWCwgb3JpZ2luWSwgdGFyZ2V0WCwgdGFyZ2V0WSkge1xyXG4gICAgICAgIHZhciBkeCA9IG9yaWdpblggLSB0YXJnZXRYO1xyXG4gICAgICAgIHZhciBkeSA9IG9yaWdpblkgLSB0YXJnZXRZO1xyXG5cclxuICAgICAgICB2YXIgdGhldGEgPSBNYXRoLmF0YW4yKC1keSwgLWR4KTsgLy8gWzAsIOKyoF0gdGhlbiBbLeKyoCwgMF07IGNsb2Nrd2lzZTsgMMKwID0gZWFzdFxyXG4gICAgICAgIHRoZXRhICo9IDE4MCAvIE1hdGguUEk7ICAgICAgICAgICAvLyBbMCwgMTgwXSB0aGVuIFstMTgwLCAwXTsgY2xvY2t3aXNlOyAwwrAgPSBlYXN0XHJcbiAgICAgICAgaWYgKHRoZXRhIDwgMCkgdGhldGEgKz0gMzYwOyAgICAgIC8vIFswLCAzNjBdOyBjbG9ja3dpc2U7IDDCsCA9IGVhc3RcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoZXRhO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW1vdmVBcnJheVZhbHVlKGFycmF5LCB2YWwpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YodmFsKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXN0YW5jZSh4QSwgeUEsIHhCLCB5Qikge1xyXG4gICAgICAgIHZhciB4RGlmZiA9IHhBIC0geEI7XHJcbiAgICAgICAgdmFyIHlEaWZmID0geUEgLSB5QjtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4RGlmZiAqIHhEaWZmICsgeURpZmYgKiB5RGlmZik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um5kSW50ZWdlcihtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSZWN0KHAxKSB7XHJcblxyXG4gICAgICAgIGxldCB2YWwgPSAyMDtcclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSBwMS54IC0gdmFsO1xyXG4gICAgICAgIGxldCByaWdodCA9IHAxLnggKyB2YWw7XHJcbiAgICAgICAgbGV0IHRvcCA9IHAxLnkgKyB2YWw7XHJcbiAgICAgICAgbGV0IGJvdHRvbSA9IHAxLnkgLSB2YWw7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0b3AgLSBib3R0b207XHJcbiAgICAgICAgcmV0dXJuIGNjLnJlY3QobGVmdCwgcDEueSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJblBvbHlnb24ocDEsIHAzKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmdlbmVyYXRlUmVjdChwMSk7XHJcbiAgICAgICAgbGV0IGluc2lkZSA9IHJlY3QuY29udGFpbnMocDMpO1xyXG4gICAgICAgIHJldHVybiBpbnNpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BsaXROdW1JbnRvWFJhbmRvbUNvbXBvbmVudHMobnVtLCB4LCBtaW5fbnVtKSB7XHJcblxyXG4gICAgICAgIHZhciBjb21wb25lbnRzID0gW107XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMTtcclxuICAgICAgICB2YXIgY3VtdWxhdGl2ZSA9IDA7XHJcbiAgICAgICAgdmFyIGJhbGFuY2UgPSBudW07XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAvL21heCBudW0gZm9yIHRoaXMgc3BvdFxyXG4gICAgICAgICAgICB2YXIgbWF4X251bSA9IGJhbGFuY2UgLSAoKHggLSBjb3VudCkgKiBtaW5fbnVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vdG8gYXZvaWQgYmlnIG51bWJlcnMgaW4gdGhlIGJlZ2lubmluZyBhbmQgbWluIG51bWJlcnMgYXQgdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuMykgeyAvLzAuNSBjYW4gYmUgdHVuZWQgdG8geW91ciBsaWtpbmdcclxuICAgICAgICAgICAgICAgIG1heF9udW0gPSBNYXRoLmZsb29yKG1heF9udW0gLyAyKSArIG1pbl9udW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgdGhlIG51bWJlciBmb3IgdGhlIHNwb3QgYXQgJ2NvdW50J1xyXG4gICAgICAgICAgICB2YXIgYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhfbnVtIC0gbWluX251bSArIDEpICsgbWluX251bSk7XHJcblxyXG4gICAgICAgICAgICAvL2FkanVzdCBiYWxhbmNlc1xyXG4gICAgICAgICAgICBjdW11bGF0aXZlICs9IGM7XHJcbiAgICAgICAgICAgIGJhbGFuY2UgLT0gYztcclxuICAgICAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgICAgIC8vc3RvcmUgdGhpcyBudW1iZXJcclxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9wdXNoIHJlbWFpbmluZyBiYWxhbmNlIGludG8gdGhlIGxhc3Qgc3BvdFxyXG4gICAgICAgIGNvbXBvbmVudHMucHVzaChiYWxhbmNlKTtcclxuXHJcbiAgICAgICAgLy9wcmludCBudW1iZXJzXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9pbnRPbkxpbmUocHQxLCBwdDIsIHB0Mykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgb25fcHJvamVjdGVkX2xpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uX2xpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBiZXR3ZWVuX2JvdGg6IGZhbHNlLFxyXG4gICAgICAgICAgICBiZXR3ZWVuX3g6IGZhbHNlLFxyXG4gICAgICAgICAgICBiZXR3ZWVuX3k6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIERldGVybWluZSBpZiBvbiBsaW5lIGludGVyaW9yIG9yIGV4dGVyaW9yXHJcbiAgICAgICAgY29uc3QgeCA9IChwdDMueCAtIHB0MS54KSAvIChwdDIueCAtIHB0MS54KTtcclxuICAgICAgICBjb25zdCB5ID0gKHB0My55IC0gcHQxLnkpIC8gKHB0Mi55IC0gcHQxLnkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBvbiBsaW5lIGVxdWF0aW9uXHJcbiAgICAgICAgcmVzdWx0Lm9uX3Byb2plY3RlZF9saW5lID0geCA9PT0geTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgd2l0aGluIHggYm91bmRzXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAocHQxLnggPD0gcHQzLnggJiYgcHQzLnggPD0gcHQyLngpIHx8XHJcbiAgICAgICAgICAgIChwdDIueCA8PSBwdDMueCAmJiBwdDMueCA8PSBwdDEueClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmVzdWx0LmJldHdlZW5feCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayB3aXRoaW4geSBib3VuZHNcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChwdDEueSA8PSBwdDMueSAmJiBwdDMueSA8PSBwdDIueSkgfHxcclxuICAgICAgICAgICAgKHB0Mi55IDw9IHB0My55ICYmIHB0My55IDw9IHB0MS55KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXN1bHQuYmV0d2Vlbl95ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5iZXR3ZWVuX2JvdGggPSByZXN1bHQuYmV0d2Vlbl94ICYmIHJlc3VsdC5iZXR3ZWVuX3k7XHJcbiAgICAgICAgcmVzdWx0Lm9uX2xpbmUgPSByZXN1bHQub25fcHJvamVjdGVkX2xpbmUgJiYgcmVzdWx0LmJldHdlZW5fYm90aDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGhleFRvUmdiKGhleCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ID8gbmV3IGNjLkNvbG9yKHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLCBwYXJzZUludChyZXN1bHRbMl0sIDE2KSwgcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksIDI1NSkgOiBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlU2VsZWN0aW9uQ2xhc3NSZWYobm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZS5nZXRDb21wb25lbnQoVGlsZVNlbGVjdGlvbikgYXMgVGlsZVNlbGVjdGlvbikgIT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIChub2RlLmdldENvbXBvbmVudChUaWxlU2VsZWN0aW9uKSBhcyBUaWxlU2VsZWN0aW9uKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREcmF3aW5nbWFza0NsYXNzUmVmKG5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdtYXNrKSBhcyBEcmF3aW5nbWFzaykgIT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIChub2RlLmdldENvbXBvbmVudChEcmF3aW5nbWFzaykgYXMgRHJhd2luZ21hc2spO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyYXdpbmdUYWJsZUNsYXNzUmVmKG5vZGUpIHtcclxuICAgICAgICBpZiAoKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdUYWJsZSkgYXMgRHJhd2luZ1RhYmxlKSAhPSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gKG5vZGUuZ2V0Q29tcG9uZW50KERyYXdpbmdUYWJsZSkgYXMgRHJhd2luZ1RhYmxlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWxsQXVkaW9zKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoQ29uc3RhbnQuQVVESU9fU09VTkQuY29ycmVjdCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXVkaW9NYW5hZ2VyLmluc3RhbmNlLmxvYWRBdWlkbyhDb25zdGFudC5BVURJT19TT1VORC5jb3JyZWN0W09iamVjdC5rZXlzKENvbnN0YW50LkFVRElPX1NPVU5ELmNvcnJlY3QpW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNpcmNsZUNvb3JkaW5hdGVzKHJhZGl1cywgc3RlcHMsIGNlbnRlclgsIGNlbnRlclkpIHtcclxuICAgICAgICBsZXQgcG9zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvcy5wdXNoKG5ldyBjYy5WZWMyKGNlbnRlclggKyByYWRpdXMgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIChpIC8gc3RlcHMpKSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclkgKyByYWRpdXMgKiBNYXRoLnNpbigyICogTWF0aC5QSSAqIChpIC8gc3RlcHMpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFscGhhYmV0KG51bSkge1xyXG4gICAgICAgIHJldHVybiAobnVtICsgMTApLnRvU3RyaW5nKDM2KTtcclxuICAgIH1cclxuXHJcbiAgICBpZkZpcnN0VGltZVBsYXllcigpIHtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzbWFsbEFscGhhYmV0aWZGaXJzdFRpbWVQbGF5ZXJcIiwgXCIxXCIpXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiKSA9PSBudWxsIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiKSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiLCBcIjFcIilcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNtYWxsQWxwaGFiZXRpZkZpcnN0VGltZVBsYXllclwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlaWZGaXJzdFRpbWVQbGF5ZXIoKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic21hbGxBbHBoYWJldGlmRmlyc3RUaW1lUGxheWVyXCIsIFwiMFwiKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dEYXRhKHR4dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG90YWxMdmxQbGF5ZWQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsTHZsUGxheWVkYS16XCIpID09IG51bGwgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxMdmxQbGF5ZWRhLXpcIikgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbEx2bFBsYXllZGEtelwiLCBcIi0xXCIpXHJcblxyXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBsdmwgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b3RhbEx2bFBsYXllZGEtelwiKTtcclxuXHJcbiAgICAgICAgYXJyYXkgPSBsdmwuc3BsaXQoXCIvXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTHZsUGxheWVkKGx2bE5vKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMdmxzID0gdGhpcy5nZXRUb3RhbEx2bFBsYXllZCgpO1xyXG4gICAgICAgIGxldCBsdmxFeGlzdCA9IHRoaXMuY2hlY2tMdmxFeGlzdChsdmxObyk7XHJcbiAgICAgICAgaWYgKCFsdmxFeGlzdCkge1xyXG4gICAgICAgICAgICBjdXJyZW50THZscy5wdXNoKGx2bE5vKTtcclxuICAgICAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEx2bHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIGN1cnJlbnRMdmxzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBjdXJyZW50THZscy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIFwiL1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsTHZsUGxheWVkYS16XCIsIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTHZsRXhpc3QobHZsTm8pIHtcclxuICAgICAgICBsZXQgY3VycmVudEx2bHMgPSB0aGlzLmdldFRvdGFsTHZsUGxheWVkKCk7XHJcbiAgICAgICAgbGV0IGx2bEV4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50THZscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobHZsTm8udG9TdHJpbmcoKSA9PSBjdXJyZW50THZsc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgbHZsRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGx2bEV4aXN0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
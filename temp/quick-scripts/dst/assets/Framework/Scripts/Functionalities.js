
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framework/Scripts/Functionalities.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37a18WDawNEQ6/8nTbtHCDd', 'Functionalities');
// Framework/Scripts/Functionalities.ts

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
var Functionalities = /** @class */ (function (_super) {
    __extends(Functionalities, _super);
    function Functionalities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioTimeOut = false;
        return _this;
    }
    Functionalities.prototype.StartAudioTimeOut = function (_audio, _time) {
        var _this = this;
        if (_audio === void 0) { _audio = null; }
        if (_time === void 0) { _time = 5; }
        this.isAudioTimeOut = true;
        cc.audioEngine.playEffect(_audio, false);
        this.scheduleOnce(function () {
            _this.RepeatAudio(_audio, _time);
        }, _time);
    };
    Functionalities.prototype.RepeatAudio = function (_audio, _time) {
        var _this = this;
        if (_time === void 0) { _time = 5; }
        if (this.isAudioTimeOut) {
            cc.audioEngine.playEffect(_audio, false);
            this.scheduleOnce(function () {
                if (_this.isAudioTimeOut) {
                    _this.RepeatAudio(_audio, _time);
                    cc.audioEngine.playEffect(_audio, false);
                }
            }, _time);
        }
    };
    Functionalities.prototype.StopAudioTimeOut = function () {
        this.isAudioTimeOut = false;
    };
    Functionalities.prototype.update = function (dt) {
    };
    Functionalities = __decorate([
        ccclass
    ], Functionalities);
    return Functionalities;
}(cc.Component));
exports.default = Functionalities;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtZXdvcmsvU2NyaXB0cy9GdW5jdGlvbmFsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE4QkM7UUE1Qlcsb0JBQWMsR0FBWSxLQUFLLENBQUM7O0lBNEI1QyxDQUFDO0lBMUJHLDJDQUFpQixHQUFqQixVQUFrQixNQUEyQixFQUFFLEtBQWlCO1FBQWhFLGlCQU1DO1FBTmlCLHVCQUFBLEVBQUEsYUFBMkI7UUFBRSxzQkFBQSxFQUFBLFNBQWlCO1FBQzVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUNPLHFDQUFXLEdBQW5CLFVBQW9CLE1BQW9CLEVBQUUsS0FBaUI7UUFBM0QsaUJBVUM7UUFWeUMsc0JBQUEsRUFBQSxTQUFpQjtRQUN2RCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO29CQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM1QztZQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUdELDBDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sRUFBRTtJQUNULENBQUM7SUE3QmdCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E4Qm5DO0lBQUQsc0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjRDLEVBQUUsQ0FBQyxTQUFTLEdBOEJ4RDtrQkE5Qm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25hbGl0aWVzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgaXNBdWRpb1RpbWVPdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIFN0YXJ0QXVkaW9UaW1lT3V0KF9hdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbCwgX3RpbWU6IG51bWJlciA9IDUpIHtcbiAgICAgICAgdGhpcy5pc0F1ZGlvVGltZU91dCA9IHRydWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoX2F1ZGlvLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUmVwZWF0QXVkaW8oX2F1ZGlvLCBfdGltZSk7XG4gICAgICAgIH0sIF90aW1lKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBSZXBlYXRBdWRpbyhfYXVkaW86IGNjLkF1ZGlvQ2xpcCwgX3RpbWU6IG51bWJlciA9IDUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdWRpb1RpbWVPdXQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoX2F1ZGlvLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdWRpb1RpbWVPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZXBlYXRBdWRpbyhfYXVkaW8sIF90aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChfYXVkaW8sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBfdGltZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIFN0b3BBdWRpb1RpbWVPdXQoKSB7XG4gICAgICAgIHRoaXMuaXNBdWRpb1RpbWVPdXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICB9XG59XG4iXX0=
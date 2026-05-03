
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/utils/Helpers.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '559c1Hu6CdCw7Ml+E/YGsbe', 'Helpers');
// Games/ArcheryGame/utils/Helpers.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Constants");
var DebugHelpers = /** @class */ (function () {
    function DebugHelpers() {
    }
    /* *INFO: write debug and utility functions here, for docs, search with HELPER
    you can add more log types when the project becomes complex */
    DebugHelpers.prototype.log = function (msg, type) {
        if (!Constants_1.enableLogs) {
            return;
        }
        var background = "";
        var typeName = "";
        switch (type) {
            case Constants_1.LogTypes.INFO:
                background = "background: green;";
                typeName = Constants_1.LogTypes.INFO;
                break;
            case Constants_1.LogTypes.ERROR:
                background = "background: red;";
                typeName = Constants_1.LogTypes.ERROR;
                break;
            case Constants_1.LogTypes.TRACK:
                background = "background: purple;";
                typeName = Constants_1.LogTypes.TRACK;
                break;
            case Constants_1.LogTypes.CREATION:
                background = "background: teal;";
                typeName = Constants_1.LogTypes.CREATION;
                break;
            case Constants_1.LogTypes.DESTRUCTION:
                background = "background: orange;";
                typeName = Constants_1.LogTypes.DESTRUCTION;
                break;
            default:
                background = "";
                break;
        }
        console.log("%c" + typeName, "font-weight: bold; " + background);
        console.log("%c" + msg, "" + background);
        if (typeName == Constants_1.LogTypes.ERROR) {
            console.trace("Error Stack Trace: ");
        }
    };
    DebugHelpers.prototype.customDebugger = function () {
        if (Constants_1.enableDebuggers) {
            debugger;
        }
    };
    return DebugHelpers;
}());
var debug = new DebugHelpers();
exports.default = debug;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFx1dGlsc1xcSGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvRTtBQUVwRTtJQUFBO0lBK0NBLENBQUM7SUE5Q0M7a0VBQzhEO0lBQ3ZELDBCQUFHLEdBQVYsVUFBVyxHQUFRLEVBQUUsSUFBWTtRQUMvQixJQUFJLENBQUMsc0JBQVUsRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLG9CQUFRLENBQUMsSUFBSTtnQkFDaEIsVUFBVSxHQUFHLG9CQUFvQixDQUFDO2dCQUNsQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsS0FBSztnQkFDakIsVUFBVSxHQUFHLGtCQUFrQixDQUFDO2dCQUNoQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsS0FBSztnQkFDakIsVUFBVSxHQUFHLHFCQUFxQixDQUFDO2dCQUNuQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsUUFBUTtnQkFDcEIsVUFBVSxHQUFHLG1CQUFtQixDQUFDO2dCQUNqQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQzdCLE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsV0FBVztnQkFDdkIsVUFBVSxHQUFHLHFCQUFxQixDQUFDO2dCQUNuQyxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDUjtnQkFDRSxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixNQUFNO1NBQ1Q7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssUUFBVSxFQUFFLHdCQUFzQixVQUFZLENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssR0FBSyxFQUFFLEtBQUcsVUFBWSxDQUFDLENBQUM7UUFFekMsSUFBSSxRQUFRLElBQUksb0JBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVNLHFDQUFjLEdBQXJCO1FBQ0UsSUFBSSwyQkFBZSxFQUFFO1lBQ25CLFFBQVEsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQUVELElBQU0sS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFFakMsa0JBQWUsS0FBSyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5hYmxlRGVidWdnZXJzLCBlbmFibGVMb2dzLCBMb2dUeXBlcyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgRGVidWdIZWxwZXJzIHtcclxuICAvKiAqSU5GTzogd3JpdGUgZGVidWcgYW5kIHV0aWxpdHkgZnVuY3Rpb25zIGhlcmUsIGZvciBkb2NzLCBzZWFyY2ggd2l0aCBIRUxQRVJcclxuICB5b3UgY2FuIGFkZCBtb3JlIGxvZyB0eXBlcyB3aGVuIHRoZSBwcm9qZWN0IGJlY29tZXMgY29tcGxleCAqL1xyXG4gIHB1YmxpYyBsb2cobXNnOiBhbnksIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKCFlbmFibGVMb2dzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBiYWNrZ3JvdW5kID0gXCJcIjtcclxuICAgIGxldCB0eXBlTmFtZSA9IFwiXCI7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBMb2dUeXBlcy5JTkZPOlxyXG4gICAgICAgIGJhY2tncm91bmQgPSBcImJhY2tncm91bmQ6IGdyZWVuO1wiO1xyXG4gICAgICAgIHR5cGVOYW1lID0gTG9nVHlwZXMuSU5GTztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dUeXBlcy5FUlJPUjpcclxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kOiByZWQ7XCI7XHJcbiAgICAgICAgdHlwZU5hbWUgPSBMb2dUeXBlcy5FUlJPUjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dUeXBlcy5UUkFDSzpcclxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kOiBwdXJwbGU7XCI7XHJcbiAgICAgICAgdHlwZU5hbWUgPSBMb2dUeXBlcy5UUkFDSztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dUeXBlcy5DUkVBVElPTjpcclxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kOiB0ZWFsO1wiO1xyXG4gICAgICAgIHR5cGVOYW1lID0gTG9nVHlwZXMuQ1JFQVRJT047XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9nVHlwZXMuREVTVFJVQ1RJT046XHJcbiAgICAgICAgYmFja2dyb3VuZCA9IFwiYmFja2dyb3VuZDogb3JhbmdlO1wiO1xyXG4gICAgICAgIHR5cGVOYW1lID0gTG9nVHlwZXMuREVTVFJVQ1RJT047XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYmFja2dyb3VuZCA9IFwiXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgJWMke3R5cGVOYW1lfWAsIGBmb250LXdlaWdodDogYm9sZDsgJHtiYWNrZ3JvdW5kfWApO1xyXG4gICAgY29uc29sZS5sb2coYCVjJHttc2d9YCwgYCR7YmFja2dyb3VuZH1gKTtcclxuXHJcbiAgICBpZiAodHlwZU5hbWUgPT0gTG9nVHlwZXMuRVJST1IpIHtcclxuICAgICAgY29uc29sZS50cmFjZShcIkVycm9yIFN0YWNrIFRyYWNlOiBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3VzdG9tRGVidWdnZXIoKSB7XHJcbiAgICBpZiAoZW5hYmxlRGVidWdnZXJzKSB7XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVidWcgPSBuZXcgRGVidWdIZWxwZXJzKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWJ1ZztcclxuIl19
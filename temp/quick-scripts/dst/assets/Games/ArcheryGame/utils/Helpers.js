
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9BcmNoZXJ5R2FtZS91dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9FO0FBRXBFO0lBQUE7SUErQ0EsQ0FBQztJQTlDQztrRUFDOEQ7SUFDdkQsMEJBQUcsR0FBVixVQUFXLEdBQVEsRUFBRSxJQUFZO1FBQy9CLElBQUksQ0FBQyxzQkFBVSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssb0JBQVEsQ0FBQyxJQUFJO2dCQUNoQixVQUFVLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ2xDLFFBQVEsR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssb0JBQVEsQ0FBQyxLQUFLO2dCQUNqQixVQUFVLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ2hDLFFBQVEsR0FBRyxvQkFBUSxDQUFDLEtBQUssQ0FBQztnQkFDMUIsTUFBTTtZQUNSLEtBQUssb0JBQVEsQ0FBQyxLQUFLO2dCQUNqQixVQUFVLEdBQUcscUJBQXFCLENBQUM7Z0JBQ25DLFFBQVEsR0FBRyxvQkFBUSxDQUFDLEtBQUssQ0FBQztnQkFDMUIsTUFBTTtZQUNSLEtBQUssb0JBQVEsQ0FBQyxRQUFRO2dCQUNwQixVQUFVLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ2pDLFFBQVEsR0FBRyxvQkFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDN0IsTUFBTTtZQUNSLEtBQUssb0JBQVEsQ0FBQyxXQUFXO2dCQUN2QixVQUFVLEdBQUcscUJBQXFCLENBQUM7Z0JBQ25DLFFBQVEsR0FBRyxvQkFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNSO2dCQUNFLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07U0FDVDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxRQUFVLEVBQUUsd0JBQXNCLFVBQVksQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxHQUFLLEVBQUUsS0FBRyxVQUFZLENBQUMsQ0FBQztRQUV6QyxJQUFJLFFBQVEsSUFBSSxvQkFBUSxDQUFDLEtBQUssRUFBRTtZQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRU0scUNBQWMsR0FBckI7UUFDRSxJQUFJLDJCQUFlLEVBQUU7WUFDbkIsUUFBUSxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUVqQyxrQkFBZSxLQUFLLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbmFibGVEZWJ1Z2dlcnMsIGVuYWJsZUxvZ3MsIExvZ1R5cGVzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmNsYXNzIERlYnVnSGVscGVycyB7XG4gIC8qICpJTkZPOiB3cml0ZSBkZWJ1ZyBhbmQgdXRpbGl0eSBmdW5jdGlvbnMgaGVyZSwgZm9yIGRvY3MsIHNlYXJjaCB3aXRoIEhFTFBFUlxuICB5b3UgY2FuIGFkZCBtb3JlIGxvZyB0eXBlcyB3aGVuIHRoZSBwcm9qZWN0IGJlY29tZXMgY29tcGxleCAqL1xuICBwdWJsaWMgbG9nKG1zZzogYW55LCB0eXBlOiBzdHJpbmcpIHtcbiAgICBpZiAoIWVuYWJsZUxvZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGJhY2tncm91bmQgPSBcIlwiO1xuICAgIGxldCB0eXBlTmFtZSA9IFwiXCI7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIExvZ1R5cGVzLklORk86XG4gICAgICAgIGJhY2tncm91bmQgPSBcImJhY2tncm91bmQ6IGdyZWVuO1wiO1xuICAgICAgICB0eXBlTmFtZSA9IExvZ1R5cGVzLklORk87XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlcy5FUlJPUjpcbiAgICAgICAgYmFja2dyb3VuZCA9IFwiYmFja2dyb3VuZDogcmVkO1wiO1xuICAgICAgICB0eXBlTmFtZSA9IExvZ1R5cGVzLkVSUk9SO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZXMuVFJBQ0s6XG4gICAgICAgIGJhY2tncm91bmQgPSBcImJhY2tncm91bmQ6IHB1cnBsZTtcIjtcbiAgICAgICAgdHlwZU5hbWUgPSBMb2dUeXBlcy5UUkFDSztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGVzLkNSRUFUSU9OOlxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kOiB0ZWFsO1wiO1xuICAgICAgICB0eXBlTmFtZSA9IExvZ1R5cGVzLkNSRUFUSU9OO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZXMuREVTVFJVQ1RJT046XG4gICAgICAgIGJhY2tncm91bmQgPSBcImJhY2tncm91bmQ6IG9yYW5nZTtcIjtcbiAgICAgICAgdHlwZU5hbWUgPSBMb2dUeXBlcy5ERVNUUlVDVElPTjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBiYWNrZ3JvdW5kID0gXCJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAlYyR7dHlwZU5hbWV9YCwgYGZvbnQtd2VpZ2h0OiBib2xkOyAke2JhY2tncm91bmR9YCk7XG4gICAgY29uc29sZS5sb2coYCVjJHttc2d9YCwgYCR7YmFja2dyb3VuZH1gKTtcblxuICAgIGlmICh0eXBlTmFtZSA9PSBMb2dUeXBlcy5FUlJPUikge1xuICAgICAgY29uc29sZS50cmFjZShcIkVycm9yIFN0YWNrIFRyYWNlOiBcIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGN1c3RvbURlYnVnZ2VyKCkge1xuICAgIGlmIChlbmFibGVEZWJ1Z2dlcnMpIHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWJ1ZyA9IG5ldyBEZWJ1Z0hlbHBlcnMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVidWc7XG4iXX0=
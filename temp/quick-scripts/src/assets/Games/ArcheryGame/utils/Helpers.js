"use strict";
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
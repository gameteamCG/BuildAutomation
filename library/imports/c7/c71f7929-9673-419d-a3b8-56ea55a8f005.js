"use strict";
cc._RF.push(module, 'c71f7kplnNBnaO4VupVqPAF', 'Constants');
// Games/ArcheryGame/utils/Constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLISION_TAGS = exports.GAME_EVENTS = exports.LogTypes = exports.enableDebuggers = exports.enableLogs = void 0;
// *INFO: use this variable to toggle all logs on or off
exports.enableLogs = true;
exports.enableDebuggers = false;
exports.LogTypes = {
    INFO: "INFO",
    ERROR: "ERROR",
    TRACK: "TRACK",
    CREATION: "CREATION",
    DESTRUCTION: "DESTRUCTION",
};
exports.GAME_EVENTS = {
    HIT: "HIT",
    MISS: "MISS",
};
exports.COLLISION_TAGS = {
    TARGET: 10,
    BOUNDS: 5,
};

cc._RF.pop();
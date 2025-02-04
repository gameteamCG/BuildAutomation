
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/utils/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9BcmNoZXJ5R2FtZS91dGlscy9Db25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXdEO0FBQzNDLFFBQUEsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNsQixRQUFBLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFFeEIsUUFBQSxRQUFRLEdBQUc7SUFDdEIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0lBQ2QsUUFBUSxFQUFFLFVBQVU7SUFDcEIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUc7SUFDNUIsTUFBTSxFQUFFLEVBQUU7SUFDVixNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqSU5GTzogdXNlIHRoaXMgdmFyaWFibGUgdG8gdG9nZ2xlIGFsbCBsb2dzIG9uIG9yIG9mZlxuZXhwb3J0IGNvbnN0IGVuYWJsZUxvZ3MgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IGVuYWJsZURlYnVnZ2VycyA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgTG9nVHlwZXMgPSB7XG4gIElORk86IFwiSU5GT1wiLFxuICBFUlJPUjogXCJFUlJPUlwiLFxuICBUUkFDSzogXCJUUkFDS1wiLFxuICBDUkVBVElPTjogXCJDUkVBVElPTlwiLFxuICBERVNUUlVDVElPTjogXCJERVNUUlVDVElPTlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IEdBTUVfRVZFTlRTID0ge1xuICBISVQ6IFwiSElUXCIsXG4gIE1JU1M6IFwiTUlTU1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IENPTExJU0lPTl9UQUdTID0ge1xuICBUQVJHRVQ6IDEwLFxuICBCT1VORFM6IDUsXG59O1xuIl19
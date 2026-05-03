
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFx1dGlsc1xcQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF3RDtBQUMzQyxRQUFBLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsUUFBQSxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBRXhCLFFBQUEsUUFBUSxHQUFHO0lBQ3RCLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsT0FBTztJQUNkLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFdBQVcsRUFBRSxhQUFhO0NBQzNCLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRztJQUN6QixHQUFHLEVBQUUsS0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKklORk86IHVzZSB0aGlzIHZhcmlhYmxlIHRvIHRvZ2dsZSBhbGwgbG9ncyBvbiBvciBvZmZcclxuZXhwb3J0IGNvbnN0IGVuYWJsZUxvZ3MgPSB0cnVlO1xyXG5leHBvcnQgY29uc3QgZW5hYmxlRGVidWdnZXJzID0gZmFsc2U7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nVHlwZXMgPSB7XHJcbiAgSU5GTzogXCJJTkZPXCIsXHJcbiAgRVJST1I6IFwiRVJST1JcIixcclxuICBUUkFDSzogXCJUUkFDS1wiLFxyXG4gIENSRUFUSU9OOiBcIkNSRUFUSU9OXCIsXHJcbiAgREVTVFJVQ1RJT046IFwiREVTVFJVQ1RJT05cIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHQU1FX0VWRU5UUyA9IHtcclxuICBISVQ6IFwiSElUXCIsXHJcbiAgTUlTUzogXCJNSVNTXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MTElTSU9OX1RBR1MgPSB7XHJcbiAgVEFSR0VUOiAxMCxcclxuICBCT1VORFM6IDUsXHJcbn07XHJcbiJdfQ==
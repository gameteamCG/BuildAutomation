
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/ArcheryGame/utils/EventSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b556HJQUBNELTL2lH24bbL', 'EventSystem');
// Games/ArcheryGame/utils/EventSystem.ts

"use strict";
// *INFO: use this instead of the default cocos event system, it never works
Object.defineProperty(exports, "__esModule", { value: true });
var EventSystem = /** @class */ (function () {
    function EventSystem() {
        this.eventMap = new Map();
    }
    // Singleton instance
    EventSystem.getInstance = function () {
        if (!EventSystem.instance) {
            EventSystem.instance = new EventSystem();
        }
        return EventSystem.instance;
    };
    // Register an event listener
    EventSystem.prototype.on = function (eventName, callback, context) {
        if (!this.eventMap.has(eventName)) {
            this.eventMap.set(eventName, []);
        }
        this.eventMap.get(eventName).push({ callback: callback, context: context });
    };
    // Unregister an event listener
    EventSystem.prototype.off = function (eventName, callback, context) {
        var listeners = this.eventMap.get(eventName);
        if (listeners) {
            this.eventMap.set(eventName, listeners.filter(function (listener) {
                return listener.callback !== callback || listener.context !== context;
            }));
        }
    };
    // Emit an event
    EventSystem.prototype.emit = function (eventName, data) {
        var listeners = this.eventMap.get(eventName);
        if (listeners) {
            listeners.forEach(function (listener) {
                listener.callback.call(listener.context, data);
            });
        }
    };
    // Clear all listeners for an event
    EventSystem.prototype.clear = function (eventName) {
        this.eventMap.delete(eventName);
    };
    // Clear all events and listeners
    EventSystem.prototype.clearAll = function () {
        this.eventMap.clear();
    };
    return EventSystem;
}());
var EVENTS = EventSystem.getInstance();
exports.default = EVENTS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lcy9BcmNoZXJ5R2FtZS91dGlscy9FdmVudFN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTRFOztBQUU1RTtJQUlFO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQkFBcUI7SUFDUCx1QkFBVyxHQUF6QjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3pCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQTZCO0lBQ3RCLHdCQUFFLEdBQVQsVUFBVSxTQUFpQixFQUFFLFFBQWtCLEVBQUUsT0FBYTtRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwrQkFBK0I7SUFDeEIseUJBQUcsR0FBVixVQUFXLFNBQWlCLEVBQUUsUUFBa0IsRUFBRSxPQUFhO1FBQzdELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ2YsU0FBUyxFQUNULFNBQVMsQ0FBQyxNQUFNLENBQ2QsVUFBQyxRQUFRO2dCQUNQLE9BQUEsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxPQUFPO1lBQTlELENBQThELENBQ2pFLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELGdCQUFnQjtJQUNULDBCQUFJLEdBQVgsVUFBWSxTQUFpQixFQUFFLElBQVU7UUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELG1DQUFtQztJQUM1QiwyQkFBSyxHQUFaLFVBQWEsU0FBaUI7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFpQztJQUMxQiw4QkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQXpEQSxBQXlEQyxJQUFBO0FBRUQsSUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRXpDLGtCQUFlLE1BQU0sQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vICpJTkZPOiB1c2UgdGhpcyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGNvY29zIGV2ZW50IHN5c3RlbSwgaXQgbmV2ZXIgd29ya3NcblxuY2xhc3MgRXZlbnRTeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRTeXN0ZW07XG4gIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxzdHJpbmcsIEFycmF5PHsgY2FsbGJhY2s6IEZ1bmN0aW9uOyBjb250ZXh0OiBhbnkgfT4+O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudE1hcCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIC8vIFNpbmdsZXRvbiBpbnN0YW5jZVxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEV2ZW50U3lzdGVtIHtcbiAgICBpZiAoIUV2ZW50U3lzdGVtLmluc3RhbmNlKSB7XG4gICAgICBFdmVudFN5c3RlbS5pbnN0YW5jZSA9IG5ldyBFdmVudFN5c3RlbSgpO1xuICAgIH1cbiAgICByZXR1cm4gRXZlbnRTeXN0ZW0uaW5zdGFuY2U7XG4gIH1cblxuICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lclxuICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY29udGV4dD86IGFueSkge1xuICAgIGlmICghdGhpcy5ldmVudE1hcC5oYXMoZXZlbnROYW1lKSkge1xuICAgICAgdGhpcy5ldmVudE1hcC5zZXQoZXZlbnROYW1lLCBbXSk7XG4gICAgfVxuICAgIHRoaXMuZXZlbnRNYXAuZ2V0KGV2ZW50TmFtZSkucHVzaCh7IGNhbGxiYWNrLCBjb250ZXh0IH0pO1xuICB9XG5cbiAgLy8gVW5yZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lclxuICBwdWJsaWMgb2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIGNvbnRleHQ/OiBhbnkpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TWFwLmdldChldmVudE5hbWUpO1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KFxuICAgICAgICBldmVudE5hbWUsXG4gICAgICAgIGxpc3RlbmVycy5maWx0ZXIoXG4gICAgICAgICAgKGxpc3RlbmVyKSA9PlxuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2sgIT09IGNhbGxiYWNrIHx8IGxpc3RlbmVyLmNvbnRleHQgIT09IGNvbnRleHRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbWl0IGFuIGV2ZW50XG4gIHB1YmxpYyBlbWl0KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5ldmVudE1hcC5nZXQoZXZlbnROYW1lKTtcbiAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5jb250ZXh0LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIENsZWFyIGFsbCBsaXN0ZW5lcnMgZm9yIGFuIGV2ZW50XG4gIHB1YmxpYyBjbGVhcihldmVudE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZXZlbnRNYXAuZGVsZXRlKGV2ZW50TmFtZSk7XG4gIH1cblxuICAvLyBDbGVhciBhbGwgZXZlbnRzIGFuZCBsaXN0ZW5lcnNcbiAgcHVibGljIGNsZWFyQWxsKCkge1xuICAgIHRoaXMuZXZlbnRNYXAuY2xlYXIoKTtcbiAgfVxufVxuXG5jb25zdCBFVkVOVFMgPSBFdmVudFN5c3RlbS5nZXRJbnN0YW5jZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFVkVOVFM7XG4iXX0=
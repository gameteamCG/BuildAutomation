"use strict";
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
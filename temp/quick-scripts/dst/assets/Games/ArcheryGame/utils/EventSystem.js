
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXEFyY2hlcnlHYW1lXFx1dGlsc1xcRXZlbnRTeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUE0RTs7QUFFNUU7SUFJRTtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUJBQXFCO0lBQ1AsdUJBQVcsR0FBekI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN6QixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELDZCQUE2QjtJQUN0Qix3QkFBRSxHQUFULFVBQVUsU0FBaUIsRUFBRSxRQUFrQixFQUFFLE9BQWE7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsK0JBQStCO0lBQ3hCLHlCQUFHLEdBQVYsVUFBVyxTQUFpQixFQUFFLFFBQWtCLEVBQUUsT0FBYTtRQUM3RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNmLFNBQVMsRUFDVCxTQUFTLENBQUMsTUFBTSxDQUNkLFVBQUMsUUFBUTtnQkFDUCxPQUFBLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssT0FBTztZQUE5RCxDQUE4RCxDQUNqRSxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxnQkFBZ0I7SUFDVCwwQkFBSSxHQUFYLFVBQVksU0FBaUIsRUFBRSxJQUFVO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxtQ0FBbUM7SUFDNUIsMkJBQUssR0FBWixVQUFhLFNBQWlCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBaUM7SUFDMUIsOEJBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0F6REEsQUF5REMsSUFBQTtBQUVELElBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUV6QyxrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqSU5GTzogdXNlIHRoaXMgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBjb2NvcyBldmVudCBzeXN0ZW0sIGl0IG5ldmVyIHdvcmtzXHJcblxyXG5jbGFzcyBFdmVudFN5c3RlbSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50U3lzdGVtO1xyXG4gIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxzdHJpbmcsIEFycmF5PHsgY2FsbGJhY2s6IEZ1bmN0aW9uOyBjb250ZXh0OiBhbnkgfT4+O1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ldmVudE1hcCA9IG5ldyBNYXAoKTtcclxuICB9XHJcblxyXG4gIC8vIFNpbmdsZXRvbiBpbnN0YW5jZVxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnRTeXN0ZW0ge1xyXG4gICAgaWYgKCFFdmVudFN5c3RlbS5pbnN0YW5jZSkge1xyXG4gICAgICBFdmVudFN5c3RlbS5pbnN0YW5jZSA9IG5ldyBFdmVudFN5c3RlbSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEV2ZW50U3lzdGVtLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXJcclxuICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY29udGV4dD86IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmV2ZW50TWFwLmhhcyhldmVudE5hbWUpKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KGV2ZW50TmFtZSwgW10pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudE1hcC5nZXQoZXZlbnROYW1lKS5wdXNoKHsgY2FsbGJhY2ssIGNvbnRleHQgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBVbnJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgcHVibGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjb250ZXh0PzogYW55KSB7XHJcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TWFwLmdldChldmVudE5hbWUpO1xyXG4gICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICB0aGlzLmV2ZW50TWFwLnNldChcclxuICAgICAgICBldmVudE5hbWUsXHJcbiAgICAgICAgbGlzdGVuZXJzLmZpbHRlcihcclxuICAgICAgICAgIChsaXN0ZW5lcikgPT5cclxuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2sgIT09IGNhbGxiYWNrIHx8IGxpc3RlbmVyLmNvbnRleHQgIT09IGNvbnRleHRcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0IGFuIGV2ZW50XHJcbiAgcHVibGljIGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRNYXAuZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICBpZiAobGlzdGVuZXJzKSB7XHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwobGlzdGVuZXIuY29udGV4dCwgZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2xlYXIgYWxsIGxpc3RlbmVycyBmb3IgYW4gZXZlbnRcclxuICBwdWJsaWMgY2xlYXIoZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZXZlbnRNYXAuZGVsZXRlKGV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDbGVhciBhbGwgZXZlbnRzIGFuZCBsaXN0ZW5lcnNcclxuICBwdWJsaWMgY2xlYXJBbGwoKSB7XHJcbiAgICB0aGlzLmV2ZW50TWFwLmNsZWFyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBFVkVOVFMgPSBFdmVudFN5c3RlbS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRVZFTlRTO1xyXG4iXX0=
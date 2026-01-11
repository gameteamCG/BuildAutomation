
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MainAssets/Scripts/FontChanger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f44e17bZ5BMq9g2JQtk7rb', 'FontChanger');
// Game/MainAssets/Scripts/FontChanger.ts

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
var TextComponentFontChanger = /** @class */ (function (_super) {
    __extends(TextComponentFontChanger, _super);
    function TextComponentFontChanger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newFont = null;
        _this.richTextFont = null; // Optional separate font for RichText
        _this.excludedNodes = [];
        _this.applyOnLoad = true;
        _this.targetRootNode = null;
        _this.debugMode = true;
        // Delay in seconds before applying changes
        _this.initialDelay = 0.1;
        return _this;
    }
    TextComponentFontChanger.prototype.onLoad = function () {
        var _this = this;
        if (this.applyOnLoad) {
            this.scheduleOnce(function () { return _this.changeAllTextFonts(); }, this.initialDelay);
        }
    };
    TextComponentFontChanger.prototype.changeAllTextFonts = function () {
        if (!this.newFont && !this.richTextFont) {
            this.logError("No fonts assigned for either Label or RichText!");
            return;
        }
        var rootNode = this.targetRootNode || this.node;
        this.log("Starting font change from root: " + rootNode.name);
        this.processNode(rootNode);
        this.log("Font change operation completed");
    };
    TextComponentFontChanger.prototype.processNode = function (node) {
        var _this = this;
        if (this.isNodeExcluded(node)) {
            this.log("Skipping excluded node: " + node.name);
            return;
        }
        // Process Label component if exists
        var label = node.getComponent(cc.Label);
        if (label && this.newFont) {
            this.changeLabelFont(node, label);
        }
        // Process RichText component if exists
        var richText = node.getComponent(cc.RichText);
        if (richText && this.richTextFont) {
            this.changeRichTextFont(node, richText);
        }
        // Process children recursively
        node.children.forEach(function (child) { return _this.processNode(child); });
    };
    TextComponentFontChanger.prototype.changeLabelFont = function (node, label) {
        var _a;
        if (!label.enabled) {
            this.log("Skipping disabled Label on node: " + node.name);
            return;
        }
        try {
            this.log("Changing Label font on " + node.name + " from " + (((_a = label.font) === null || _a === void 0 ? void 0 : _a.name) || 'default') + " to " + this.newFont.name);
            label.font = this.newFont;
            this.forceLabelUpdate(label);
        }
        catch (error) {
            this.logError("Failed to change Label font on " + node.name + ": " + error);
        }
    };
    TextComponentFontChanger.prototype.changeRichTextFont = function (node, richText) {
        var _a;
        if (!richText.enabled) {
            this.log("Skipping disabled RichText on node: " + node.name);
            return;
        }
        try {
            var fontToUse = this.richTextFont || this.newFont;
            this.log("Changing RichText font on " + node.name + " to " + fontToUse.name);
            richText.font = fontToUse;
            (_a = richText['_updateRenderData']) === null || _a === void 0 ? void 0 : _a.call(richText);
        }
        catch (error) {
            this.logError("Failed to change RichText font on " + node.name + ": " + error);
        }
    };
    TextComponentFontChanger.prototype.forceLabelUpdate = function (label) {
        var _a, _b, _c;
        // Multiple update methods for different Cocos versions
        (_a = label['_updateRenderData']) === null || _a === void 0 ? void 0 : _a.call(label);
        label['_renderData'] = null;
        (_b = label['_forceUpdateRenderData']) === null || _b === void 0 ? void 0 : _b.call(label);
        (_c = label['_activateMaterial']) === null || _c === void 0 ? void 0 : _c.call(label);
    };
    TextComponentFontChanger.prototype.isNodeExcluded = function (node) {
        return this.excludedNodes.some(function (excludedNode) {
            return excludedNode === node || node.isChildOf(excludedNode);
        });
    };
    // Debug utilities
    TextComponentFontChanger.prototype.log = function (message) {
        if (this.debugMode)
            cc.log("[FontChanger] " + message);
    };
    TextComponentFontChanger.prototype.logError = function (message) {
        cc.error("[FontChanger] ERROR: " + message);
    };
    // Public API
    TextComponentFontChanger.prototype.addExclusion = function (node) {
        if (!this.excludedNodes.includes(node)) {
            this.excludedNodes.push(node);
            this.log("Added exclusion: " + node.name);
        }
    };
    TextComponentFontChanger.prototype.removeExclusion = function (node) {
        var index = this.excludedNodes.indexOf(node);
        if (index >= 0) {
            this.excludedNodes.splice(index, 1);
            this.log("Removed exclusion: " + node.name);
        }
    };
    __decorate([
        property(cc.Font)
    ], TextComponentFontChanger.prototype, "newFont", void 0);
    __decorate([
        property(cc.Font)
    ], TextComponentFontChanger.prototype, "richTextFont", void 0);
    __decorate([
        property({
            type: [cc.Node],
            tooltip: "Nodes to exclude from font changes"
        })
    ], TextComponentFontChanger.prototype, "excludedNodes", void 0);
    __decorate([
        property({
            tooltip: "Apply changes automatically when scene loads"
        })
    ], TextComponentFontChanger.prototype, "applyOnLoad", void 0);
    __decorate([
        property(cc.Node)
    ], TextComponentFontChanger.prototype, "targetRootNode", void 0);
    __decorate([
        property({
            tooltip: "Show detailed processing logs"
        })
    ], TextComponentFontChanger.prototype, "debugMode", void 0);
    __decorate([
        property({
            tooltip: "Initial delay before applying changes",
            min: 0
        })
    ], TextComponentFontChanger.prototype, "initialDelay", void 0);
    TextComponentFontChanger = __decorate([
        ccclass
    ], TextComponentFontChanger);
    return TextComponentFontChanger;
}(cc.Component));
exports.default = TextComponentFontChanger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcTWFpbkFzc2V0c1xcU2NyaXB0c1xcRm9udENoYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0QsNENBQVk7SUFBbEU7UUFBQSxxRUFvSkM7UUFsSkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFZLElBQUksQ0FBQyxDQUFFLHNDQUFzQztRQU1yRSxtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUs5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUsvQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLDJDQUEyQztRQUszQyxrQkFBWSxHQUFXLEdBQUcsQ0FBQzs7SUFxSC9CLENBQUM7SUFuSEcseUNBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUF6QixDQUF5QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6RTtJQUNMLENBQUM7SUFFRCxxREFBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1lBQ2pFLE9BQU87U0FDVjtRQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLHFDQUFtQyxRQUFRLENBQUMsSUFBTSxDQUFDLENBQUM7UUFFN0Qs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QUNaLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUFzQixJQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBakpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrRUFDVztJQU03QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLEVBQUUsb0NBQW9DO1NBQ2hELENBQUM7bUVBQzRCO0lBSzlCO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLDhDQUE4QztTQUMxRCxDQUFDO2lFQUMwQjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29FQUNhO0lBSy9CO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLCtCQUErQjtTQUMzQyxDQUFDOytEQUN3QjtJQU8xQjtRQUpDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSx1Q0FBdUM7WUFDaEQsR0FBRyxFQUFFLENBQUM7U0FDVCxDQUFDO2tFQUN5QjtJQS9CVix3QkFBd0I7UUFENUMsT0FBTztPQUNhLHdCQUF3QixDQW9KNUM7SUFBRCwrQkFBQztDQXBKRCxBQW9KQyxDQXBKcUQsRUFBRSxDQUFDLFNBQVMsR0FvSmpFO2tCQXBKb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRDb21wb25lbnRGb250Q2hhbmdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuRm9udClcclxuICAgIG5ld0ZvbnQ6IGNjLkZvbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Gb250KVxyXG4gICAgcmljaFRleHRGb250OiBjYy5Gb250ID0gbnVsbDsgIC8vIE9wdGlvbmFsIHNlcGFyYXRlIGZvbnQgZm9yIFJpY2hUZXh0XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBbY2MuTm9kZV0sXHJcbiAgICAgICAgdG9vbHRpcDogXCJOb2RlcyB0byBleGNsdWRlIGZyb20gZm9udCBjaGFuZ2VzXCJcclxuICAgIH0pXHJcbiAgICBleGNsdWRlZE5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IFwiQXBwbHkgY2hhbmdlcyBhdXRvbWF0aWNhbGx5IHdoZW4gc2NlbmUgbG9hZHNcIlxyXG4gICAgfSlcclxuICAgIGFwcGx5T25Mb2FkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldFJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IFwiU2hvdyBkZXRhaWxlZCBwcm9jZXNzaW5nIGxvZ3NcIlxyXG4gICAgfSlcclxuICAgIGRlYnVnTW9kZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gRGVsYXkgaW4gc2Vjb25kcyBiZWZvcmUgYXBwbHlpbmcgY2hhbmdlc1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBcIkluaXRpYWwgZGVsYXkgYmVmb3JlIGFwcGx5aW5nIGNoYW5nZXNcIixcclxuICAgICAgICBtaW46IDBcclxuICAgIH0pXHJcbiAgICBpbml0aWFsRGVsYXk6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXBwbHlPbkxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5jaGFuZ2VBbGxUZXh0Rm9udHMoKSwgdGhpcy5pbml0aWFsRGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VBbGxUZXh0Rm9udHMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5ld0ZvbnQgJiYgIXRoaXMucmljaFRleHRGb250KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nRXJyb3IoXCJObyBmb250cyBhc3NpZ25lZCBmb3IgZWl0aGVyIExhYmVsIG9yIFJpY2hUZXh0IVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm9vdE5vZGUgPSB0aGlzLnRhcmdldFJvb3ROb2RlIHx8IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLmxvZyhgU3RhcnRpbmcgZm9udCBjaGFuZ2UgZnJvbSByb290OiAke3Jvb3ROb2RlLm5hbWV9YCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc05vZGUocm9vdE5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZyhcIkZvbnQgY2hhbmdlIG9wZXJhdGlvbiBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzTm9kZShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOb2RlRXhjbHVkZWQobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2coYFNraXBwaW5nIGV4Y2x1ZGVkIG5vZGU6ICR7bm9kZS5uYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIExhYmVsIGNvbXBvbmVudCBpZiBleGlzdHNcclxuICAgICAgICBjb25zdCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBpZiAobGFiZWwgJiYgdGhpcy5uZXdGb250KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGFiZWxGb250KG5vZGUsIGxhYmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgUmljaFRleHQgY29tcG9uZW50IGlmIGV4aXN0c1xyXG4gICAgICAgIGNvbnN0IHJpY2hUZXh0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xyXG4gICAgICAgIGlmIChyaWNoVGV4dCAmJiB0aGlzLnJpY2hUZXh0Rm9udCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVJpY2hUZXh0Rm9udChub2RlLCByaWNoVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5XHJcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHRoaXMucHJvY2Vzc05vZGUoY2hpbGQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZUxhYmVsRm9udChub2RlOiBjYy5Ob2RlLCBsYWJlbDogY2MuTGFiZWwpIHtcclxuICAgICAgICBpZiAoIWxhYmVsLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2coYFNraXBwaW5nIGRpc2FibGVkIExhYmVsIG9uIG5vZGU6ICR7bm9kZS5uYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyhgQ2hhbmdpbmcgTGFiZWwgZm9udCBvbiAke25vZGUubmFtZX0gZnJvbSAke2xhYmVsLmZvbnQ/Lm5hbWUgfHwgJ2RlZmF1bHQnfSB0byAke3RoaXMubmV3Rm9udC5uYW1lfWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwuZm9udCA9IHRoaXMubmV3Rm9udDtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZUxhYmVsVXBkYXRlKGxhYmVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dFcnJvcihgRmFpbGVkIHRvIGNoYW5nZSBMYWJlbCBmb250IG9uICR7bm9kZS5uYW1lfTogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VSaWNoVGV4dEZvbnQobm9kZTogY2MuTm9kZSwgcmljaFRleHQ6IGNjLlJpY2hUZXh0KSB7XHJcbiAgICAgICAgaWYgKCFyaWNoVGV4dC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nKGBTa2lwcGluZyBkaXNhYmxlZCBSaWNoVGV4dCBvbiBub2RlOiAke25vZGUubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZm9udFRvVXNlID0gdGhpcy5yaWNoVGV4dEZvbnQgfHwgdGhpcy5uZXdGb250O1xyXG4gICAgICAgICAgICB0aGlzLmxvZyhgQ2hhbmdpbmcgUmljaFRleHQgZm9udCBvbiAke25vZGUubmFtZX0gdG8gJHtmb250VG9Vc2UubmFtZX1gKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJpY2hUZXh0LmZvbnQgPSBmb250VG9Vc2U7XHJcbiAgICAgICAgICAgIHJpY2hUZXh0WydfdXBkYXRlUmVuZGVyRGF0YSddPy4oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dFcnJvcihgRmFpbGVkIHRvIGNoYW5nZSBSaWNoVGV4dCBmb250IG9uICR7bm9kZS5uYW1lfTogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JjZUxhYmVsVXBkYXRlKGxhYmVsOiBjYy5MYWJlbCkge1xyXG4gICAgICAgIC8vIE11bHRpcGxlIHVwZGF0ZSBtZXRob2RzIGZvciBkaWZmZXJlbnQgQ29jb3MgdmVyc2lvbnNcclxuICAgICAgICBsYWJlbFsnX3VwZGF0ZVJlbmRlckRhdGEnXT8uKCk7XHJcbiAgICAgICAgbGFiZWxbJ19yZW5kZXJEYXRhJ10gPSBudWxsO1xyXG4gICAgICAgIGxhYmVsWydfZm9yY2VVcGRhdGVSZW5kZXJEYXRhJ10/LigpO1xyXG4gICAgICAgIGxhYmVsWydfYWN0aXZhdGVNYXRlcmlhbCddPy4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTm9kZUV4Y2x1ZGVkKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGNsdWRlZE5vZGVzLnNvbWUoZXhjbHVkZWROb2RlID0+IFxyXG4gICAgICAgICAgICBleGNsdWRlZE5vZGUgPT09IG5vZGUgfHwgbm9kZS5pc0NoaWxkT2YoZXhjbHVkZWROb2RlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVidWcgdXRpbGl0aWVzXHJcbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z01vZGUpIGNjLmxvZyhgW0ZvbnRDaGFuZ2VyXSAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5lcnJvcihgW0ZvbnRDaGFuZ2VyXSBFUlJPUjogJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBBUElcclxuICAgIHB1YmxpYyBhZGRFeGNsdXNpb24obm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5leGNsdWRlZE5vZGVzLmluY2x1ZGVzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhjbHVkZWROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZyhgQWRkZWQgZXhjbHVzaW9uOiAke25vZGUubmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUV4Y2x1c2lvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV4Y2x1ZGVkTm9kZXMuaW5kZXhPZihub2RlKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4Y2x1ZGVkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5sb2coYFJlbW92ZWQgZXhjbHVzaW9uOiAke25vZGUubmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
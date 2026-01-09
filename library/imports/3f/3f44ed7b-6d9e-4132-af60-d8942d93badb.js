"use strict";
cc._RF.push(module, '3f44e17bZ5BMq9g2JQtk7rb', 'FontChanger');
// Games/MainAssets/Scripts/FontChanger.ts

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
"use strict";
cc._RF.push(module, '09d54EY9qlIFrZBCgFaPshF', 'ConfigController');
// Game/Painting_template/Script/Common/ConfigController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var configData = {
    currentConfig: {
        "levelDetails": [{
                "shape": "lettera",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterb",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterc",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterd",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettere",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterf",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterg",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterh",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letteri",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterj",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterk",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterl",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterm",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettern",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettero",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterp",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterq",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterr",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letters",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettert",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letteru",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterv",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterw",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterx",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "lettery",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            }, {
                "shape": "letterz",
                "patternColor": "#8c898b",
                "strokeColor": "#8c898b",
                "totalIdleTime": 6,
                "maxDistance": 50,
            },
        ]
    },
    updateConfigData: function (newData) {
        this.currentConfig = newData;
        window.localStorage.setItem("a-zJson", JSON.stringify(this.currentConfig));
    },
    getConfig: function () {
        if (!Constant_1.Constant.DEBUG_ENABLED)
            this.updateConfigData(this.currentConfig);
        if (window.localStorage.getItem("a-zJson") == null || window.localStorage.getItem("a-zJson") == undefined)
            window.localStorage.setItem("a-zJson", JSON.stringify(this.currentConfig));
        return JSON.parse(window.localStorage.getItem("a-zJson"));
        return this.currentConfig;
    }
};
exports.default = configData;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Painting_template/Script/Common/ConfigController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcUGFpbnRpbmdfdGVtcGxhdGVcXFNjcmlwdFxcQ29tbW9uXFxDb25maWdDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7QUFFbEYsdUNBQXNDO0FBRXRDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLGFBQWEsRUFBRTtRQUNiLGNBQWMsRUFBRSxDQUFDO2dCQUNmLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQixFQUFFO2dCQUNELE9BQU8sRUFBRSxTQUFTO2dCQUNsQixjQUFjLEVBQUUsU0FBUztnQkFDekIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTthQUNsQjtTQUNBO0tBQ0Y7SUFFRCxnQkFBZ0IsRUFBRSxVQUFVLE9BQU87UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELFNBQVMsRUFBRTtRQUVULElBQUksQ0FBQyxtQkFBUSxDQUFDLGFBQWE7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUc1QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTO1lBQ3ZHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRzFELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQUVELGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ0RhdGEgPSB7XHJcbiAgY3VycmVudENvbmZpZzoge1xyXG4gICAgXCJsZXZlbERldGFpbHNcIjogW3tcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmFcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyYlwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJjXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmRcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyZVwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJmXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmdcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyaFwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJpXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmpcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVya1wiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJsXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcm1cIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyblwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJvXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnBcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVycVwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJyXCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnNcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVydFwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJ1XCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnZcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyd1wiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJ4XCIsXHJcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxyXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcclxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcclxuICAgIH0sIHtcclxuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnlcIixcclxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXHJcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxyXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxyXG4gICAgfSwge1xyXG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyelwiLFxyXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcclxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXHJcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXHJcbiAgICB9LFxyXG4gICAgXVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZUNvbmZpZ0RhdGE6IGZ1bmN0aW9uIChuZXdEYXRhKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRDb25maWcgPSBuZXdEYXRhO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYS16SnNvblwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRDb25maWcpKTtcclxuICB9LFxyXG5cclxuICBnZXRDb25maWc6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIUNvbnN0YW50LkRFQlVHX0VOQUJMRUQpXHJcbiAgICAgIHRoaXMudXBkYXRlQ29uZmlnRGF0YSh0aGlzLmN1cnJlbnRDb25maWcpO1xyXG5cclxuXHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYS16SnNvblwiKSA9PSBudWxsIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImEtekpzb25cIikgPT0gdW5kZWZpbmVkKVxyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhLXpKc29uXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudENvbmZpZykpO1xyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImEtekpzb25cIikpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29uZmlnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnRGF0YTsiXX0=
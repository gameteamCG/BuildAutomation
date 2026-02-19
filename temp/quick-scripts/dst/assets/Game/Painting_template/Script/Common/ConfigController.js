
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9HYW1lL1BhaW50aW5nX3RlbXBsYXRlL1NjcmlwdC9Db21tb24vQ29uZmlnQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRWxGLHVDQUFzQztBQUV0QyxJQUFNLFVBQVUsR0FBRztJQUNqQixhQUFhLEVBQUU7UUFDYixjQUFjLEVBQUUsQ0FBQztnQkFDZixPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7YUFDbEI7U0FDQTtLQUNGO0lBRUQsZ0JBQWdCLEVBQUUsVUFBVSxPQUFPO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFFVCxJQUFJLENBQUMsbUJBQVEsQ0FBQyxhQUFhO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHNUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUztZQUN2RyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUU3RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUcxRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7QUFFRCxrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xuXG5jb25zdCBjb25maWdEYXRhID0ge1xuICBjdXJyZW50Q29uZmlnOiB7XG4gICAgXCJsZXZlbERldGFpbHNcIjogW3tcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJhXCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmJcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyY1wiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJkXCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmVcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyZlwiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJnXCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmhcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyaVwiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJqXCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcmtcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVybFwiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJtXCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcm5cIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyb1wiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJwXCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnFcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyclwiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJzXCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnRcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVydVwiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJ2XCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcndcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LCB7XG4gICAgICBcInNoYXBlXCI6IFwibGV0dGVyeFwiLFxuICAgICAgXCJwYXR0ZXJuQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInN0cm9rZUNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJ0b3RhbElkbGVUaW1lXCI6IDYsXG4gICAgICBcIm1heERpc3RhbmNlXCI6IDUwLFxuICAgIH0sIHtcbiAgICAgIFwic2hhcGVcIjogXCJsZXR0ZXJ5XCIsXG4gICAgICBcInBhdHRlcm5Db2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwic3Ryb2tlQ29sb3JcIjogXCIjOGM4OThiXCIsXG4gICAgICBcInRvdGFsSWRsZVRpbWVcIjogNixcbiAgICAgIFwibWF4RGlzdGFuY2VcIjogNTAsXG4gICAgfSwge1xuICAgICAgXCJzaGFwZVwiOiBcImxldHRlcnpcIixcbiAgICAgIFwicGF0dGVybkNvbG9yXCI6IFwiIzhjODk4YlwiLFxuICAgICAgXCJzdHJva2VDb2xvclwiOiBcIiM4Yzg5OGJcIixcbiAgICAgIFwidG90YWxJZGxlVGltZVwiOiA2LFxuICAgICAgXCJtYXhEaXN0YW5jZVwiOiA1MCxcbiAgICB9LFxuICAgIF1cbiAgfSxcblxuICB1cGRhdGVDb25maWdEYXRhOiBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgIHRoaXMuY3VycmVudENvbmZpZyA9IG5ld0RhdGE7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYS16SnNvblwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRDb25maWcpKTtcbiAgfSxcblxuICBnZXRDb25maWc6IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICghQ29uc3RhbnQuREVCVUdfRU5BQkxFRClcbiAgICAgIHRoaXMudXBkYXRlQ29uZmlnRGF0YSh0aGlzLmN1cnJlbnRDb25maWcpO1xuXG5cbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYS16SnNvblwiKSA9PSBudWxsIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImEtekpzb25cIikgPT0gdW5kZWZpbmVkKVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYS16SnNvblwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRDb25maWcpKTtcblxuICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImEtekpzb25cIikpO1xuXG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29uZmlnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ0RhdGE7Il19
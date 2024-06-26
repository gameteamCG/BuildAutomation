
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Framework/Jockeys/Scripts/Jockey');
require('./assets/Framework/Prefabs/ProgressBar/Scripts/ProgressBar');
require('./assets/Framework/Scripts/CustomWidget');
require('./assets/Framework/Scripts/CustomWidget2');
require('./assets/Framework/Scripts/Functionalities');
require('./assets/Framework/Scripts/Progress');
require('./assets/Framework/Scripts/StartGame');
require('./assets/Framework/Scripts/Utilities/TextLoader');
require('./assets/Framework/Scripts/Utilities/Utility');
require('./assets/Framework/Scripts/Utils');
require('./assets/Framework/WebView/Scripts/CheckForInitWebView');
require('./assets/Framework/WebView/Scripts/WebView');
require('./assets/Game/Painting_template/Script/Common/CommonFun');
require('./assets/Game/Painting_template/Script/Common/ConfigController');
require('./assets/Game/Painting_template/Script/Common/Constant');
require('./assets/Game/Painting_template/Script/Common/Global');
require('./assets/Game/Painting_template/Script/Common/audioManager');
require('./assets/Game/Painting_template/Script/Draw');
require('./assets/Game/Painting_template/Script/GamePlay/DrawingTable');
require('./assets/Game/Painting_template/Script/GamePlay/Drawingmask');
require('./assets/Game/Painting_template/Script/GamePlay/GamePlay');
require('./assets/Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll');
require('./assets/Game/Painting_template/Script/GamePlay/TileSelection');
require('./assets/Game/Painting_template/Script/LevelSelection/LevelSelection');
require('./assets/Game/Painting_template/Script/ScreenShot');
require('./assets/Game/Painting_template/Script/endScreen');
require('./assets/Game/Painting_template/Script/globalVariables');
require('./assets/Game/Painting_template/Script/scratch');
require('./assets/resources/empty');

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
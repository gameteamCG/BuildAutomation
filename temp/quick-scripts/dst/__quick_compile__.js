
(function () {
var scripts = [{"deps":{"./assets/resources/empty":1,"./assets/Framework/Scripts/Utilities/Utility":2,"./assets/Framework/Prefabs/Progressbar/Scripts/ProgressBar":3,"./assets/Framework/WebView/Scripts/WebView":4,"./assets/Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll":5,"./assets/Game/Painting_template/Script/Common/ConfigController":6,"./assets/Framework/Jockeys/Scripts/Jockey":7,"./assets/Framework/Scripts/Progress":8,"./assets/Game/Painting_template/Script/scratch":9,"./assets/Framework/Scripts/CustomWidget":10,"./assets/Framework/Scripts/Utils":11,"./assets/Framework/Scripts/Functionalities":12,"./assets/Framework/Scripts/StartGame":13,"./assets/Framework/Scripts/Utilities/TextLoader":14,"./assets/Game/Painting_template/Script/Common/audioManager":15,"./assets/Game/Painting_template/Script/Draw":16,"./assets/Game/Painting_template/Script/Common/CommonFun":17,"./assets/Game/Painting_template/Script/Common/Global":18,"./assets/Game/Painting_template/Script/GamePlay/TileSelection":19,"./assets/Framework/WebView/Scripts/CheckForInitWebView":20,"./assets/Game/Painting_template/Script/ScreenShot":21,"./assets/Game/Painting_template/Script/GamePlay/Drawingmask":22,"./assets/Game/Painting_template/Script/GamePlay/GamePlay":23,"./assets/Framework/Scripts/CustomWidget2":24,"./assets/Game/Painting_template/Script/endScreen":25,"./assets/Game/Painting_template/Script/globalVariables":26,"./assets/Game/Painting_template/Script/LevelSelection/LevelSelection":27,"./assets/Game/Painting_template/Script/Common/Constant":28,"./assets/Game/Painting_template/Script/GamePlay/DrawingTable":29},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/resources/empty.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Scripts/Utilities/Utility.js"},{"deps":{"../../../Scripts/StartGame":13},"path":"preview-scripts/assets/Framework/Prefabs/Progressbar/Scripts/ProgressBar.js"},{"deps":{"../../../Framework/Scripts/StartGame":13},"path":"preview-scripts/assets/Framework/WebView/Scripts/WebView.js"},{"deps":{"../../Common/CommonFun":17,"../../Common/Constant":28,"../../Common/Global":18,"../TileSelection":19},"path":"preview-scripts/assets/Game/Painting_template/Script/GamePlay/Persistent/PersistentScroll.js"},{"deps":{"./Constant":28},"path":"preview-scripts/assets/Game/Painting_template/Script/Common/ConfigController.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Jockeys/Scripts/Jockey.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Scripts/Progress.js"},{"deps":{},"path":"preview-scripts/assets/Game/Painting_template/Script/scratch.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Scripts/CustomWidget.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Scripts/Utils.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Scripts/Functionalities.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Scripts/StartGame.js"},{"deps":{},"path":"preview-scripts/assets/Framework/Scripts/Utilities/TextLoader.js"},{"deps":{"./Constant":28},"path":"preview-scripts/assets/Game/Painting_template/Script/Common/audioManager.js"},{"deps":{},"path":"preview-scripts/assets/Game/Painting_template/Script/Draw.js"},{"deps":{"../GamePlay/Drawingmask":22,"../GamePlay/DrawingTable":29,"../GamePlay/TileSelection":19,"./audioManager":15,"./Constant":28},"path":"preview-scripts/assets/Game/Painting_template/Script/Common/CommonFun.js"},{"deps":{},"path":"preview-scripts/assets/Game/Painting_template/Script/Common/Global.js"},{"deps":{"../Common/Constant":28},"path":"preview-scripts/assets/Game/Painting_template/Script/GamePlay/TileSelection.js"},{"deps":{"../../Scripts/StartGame":13,"./WebView":4},"path":"preview-scripts/assets/Framework/WebView/Scripts/CheckForInitWebView.js"},{"deps":{"./Common/Global":18},"path":"preview-scripts/assets/Game/Painting_template/Script/ScreenShot.js"},{"deps":{"../Common/Constant":28},"path":"preview-scripts/assets/Game/Painting_template/Script/GamePlay/Drawingmask.js"},{"deps":{"../Common/CommonFun":17,"../Common/Constant":28,"../globalVariables":26},"path":"preview-scripts/assets/Game/Painting_template/Script/GamePlay/GamePlay.js"},{"deps":{"./Utils":11},"path":"preview-scripts/assets/Framework/Scripts/CustomWidget2.js"},{"deps":{"./globalVariables":26},"path":"preview-scripts/assets/Game/Painting_template/Script/endScreen.js"},{"deps":{"./GamePlay/GamePlay":23},"path":"preview-scripts/assets/Game/Painting_template/Script/globalVariables.js"},{"deps":{"../Common/CommonFun":17,"../Common/Constant":28},"path":"preview-scripts/assets/Game/Painting_template/Script/LevelSelection/LevelSelection.js"},{"deps":{},"path":"preview-scripts/assets/Game/Painting_template/Script/Common/Constant.js"},{"deps":{"../Common/CommonFun":17,"../Common/Constant":28,"../Common/Global":18,"./Persistent/PersistentScroll":5},"path":"preview-scripts/assets/Game/Painting_template/Script/GamePlay/DrawingTable.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    
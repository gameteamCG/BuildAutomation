window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  CheckForInitWebView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8ce2AftEZNxa47y59r3/Vg", "CheckForInitWebView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StartGame_1 = require("../../Scripts/StartGame");
    var WebView_1 = require("./WebView");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CheckForInitWebView = function(_super) {
      __extends(CheckForInitWebView, _super);
      function CheckForInitWebView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      CheckForInitWebView.prototype.start = function() {};
      CheckForInitWebView.prototype.OnButtonClick = function() {
        WebView_1.default.Instance.CheckForWebView();
        StartGame_1.default.Instance.hasAccess && console.log("level opened");
      };
      CheckForInitWebView = __decorate([ ccclass ], CheckForInitWebView);
      return CheckForInitWebView;
    }(cc.Component);
    exports.default = CheckForInitWebView;
    cc._RF.pop();
  }, {
    "../../Scripts/StartGame": "StartGame",
    "./WebView": "WebView"
  } ],
  CustomWidget0: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "456cfoyhJpKLrlITHmDrQCk", "CustomWidget0");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var globalVariables_1 = require("./globalVariables");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CustomPositioningUI = function(_super) {
      __extends(CustomPositioningUI, _super);
      function CustomPositioningUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.isLeftCornered = true;
        _this.isRightCornered = false;
        return _this;
      }
      CustomPositioningUI.prototype.start = function() {
        this.isLeftCornered ? this.positionAtLeftCorner() : this.positionAtRightCorner();
      };
      CustomPositioningUI.prototype.positionAtLeftCorner = function() {
        var _position = this.node.getPosition();
        var _offSet = 20;
        _position.x = -this.canvas.getContentSize().width / 2 + this.node.width / 2 - cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width + _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2 + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        globalVariables_1.default.Instance.canvasTopY = _position.y;
        globalVariables_1.default.Instance.canvasLeftX = _position.x;
        this.node.setPosition(_position);
      };
      CustomPositioningUI.prototype.positionAtRightCorner = function() {
        var _position = this.node.getPosition();
        var _offSet = 20;
        _position.x = this.canvas.getContentSize().width / 2 - this.node.width / 2 + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2 + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        this.node.setPosition(_position);
      };
      CustomPositioningUI.prototype.update = function(dt) {
        "Title" == cc.director.getScene().name && (this.isLeftCornered ? this.positionAtLeftCorner() : this.positionAtRightCorner());
      };
      __decorate([ property(cc.Node) ], CustomPositioningUI.prototype, "canvas", void 0);
      __decorate([ property ], CustomPositioningUI.prototype, "isLeftCornered", void 0);
      __decorate([ property ], CustomPositioningUI.prototype, "isRightCornered", void 0);
      CustomPositioningUI = __decorate([ ccclass ], CustomPositioningUI);
      return CustomPositioningUI;
    }(cc.Component);
    exports.default = CustomPositioningUI;
    cc._RF.pop();
  }, {
    "./globalVariables": "globalVariables"
  } ],
  CustomWidget2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3909dpzo1hPDJb1f4iWWEcf", "CustomWidget2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("./Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CustomWidget = function(_super) {
      __extends(CustomWidget, _super);
      function CustomWidget() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.leftOffset = 0;
        _this.rightOffset = 0;
        _this.bottomOffset = 0;
        _this.topOffset = 0;
        return _this;
      }
      Object.defineProperty(CustomWidget.prototype, "leftEnd", {
        get: function() {
          return -Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CustomWidget.prototype, "rightEnd", {
        get: function() {
          return Utils_1.default.screenWidth / 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CustomWidget.prototype, "topEnd", {
        get: function() {
          return Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CustomWidget.prototype, "bottomEnd", {
        get: function() {
          return -Utils_1.default.screenHeight / 2;
        },
        enumerable: false,
        configurable: true
      });
      CustomWidget.prototype.onLoad = function() {
        this.Update(this.leftOffset, this.rightOffset, this.topOffset, this.bottomOffset);
      };
      CustomWidget.prototype.Update = function(_leftOffset, _rightOffset, _topOffset, _bottomOffset) {
        void 0 === _leftOffset && (_leftOffset = void 0);
        void 0 === _rightOffset && (_rightOffset = void 0);
        void 0 === _topOffset && (_topOffset = void 0);
        void 0 === _bottomOffset && (_bottomOffset = void 0);
        var initPosition = this.node.getPosition();
        this.node.setPosition(0, 0);
        var _position = this.node.getPosition();
        var _scale = this.node.getScale(cc.v2());
        var _width = this.node.width;
        var _height = this.node.height;
        var _anchor = cc.v2(this.node.anchorX, this.node.anchorY);
        0 != _leftOffset && void 0 != _leftOffset && (_position.x = this.leftEnd + this.leftOffset + _width * _anchor.x * _scale.x);
        0 != _rightOffset && void 0 != _rightOffset && (_position.x = this.rightEnd - this.rightOffset - _width * (1 - _anchor.x) * _scale.x);
        0 != _bottomOffset && void 0 != _bottomOffset && (_position.y = this.bottomEnd + this.bottomOffset + _height * _anchor.y * _scale.y);
        0 != _topOffset && void 0 != _topOffset ? _position.y = this.topEnd - this.topOffset - _height * (1 - _anchor.y) * _scale.y : 0 == _leftOffset && 0 == _rightOffset && 0 == _bottomOffset && 0 == _topOffset && (_position = initPosition);
        this.node.setPosition(_position);
      };
      __decorate([ property(Number) ], CustomWidget.prototype, "leftOffset", void 0);
      __decorate([ property(Number) ], CustomWidget.prototype, "rightOffset", void 0);
      __decorate([ property(Number) ], CustomWidget.prototype, "bottomOffset", void 0);
      __decorate([ property(Number) ], CustomWidget.prototype, "topOffset", void 0);
      CustomWidget = __decorate([ ccclass ], CustomWidget);
      return CustomWidget;
    }(cc.Component);
    exports.default = CustomWidget;
    cc._RF.pop();
  }, {
    "./Utils": "Utils"
  } ],
  CustomWidget: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ddff1UBeLlMxYLQi9TsUOqT", "CustomWidget");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CustomPositioningUI = function(_super) {
      __extends(CustomPositioningUI, _super);
      function CustomPositioningUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.isLeftCornered = true;
        _this.isRightCornered = false;
        return _this;
      }
      CustomPositioningUI.prototype.start = function() {
        this.isLeftCornered ? this.positionAtLeftCorner() : this.positionAtRightCorner();
      };
      CustomPositioningUI.prototype.positionAtLeftCorner = function() {
        var _position = this.node.getPosition();
        var _offSet = 20;
        _position.x = -this.canvas.getContentSize().width / 2 + this.node.width / 2 - cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width + _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2 + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        this.node.setPosition(_position);
      };
      CustomPositioningUI.prototype.positionAtRightCorner = function() {
        var _position = this.node.getPosition();
        var _offSet = 20;
        _position.x = this.canvas.getContentSize().width / 2 - this.node.width / 2 + cc.view.getViewportRect().x * this.canvas.getContentSize().width / cc.view.getViewportRect().width - _offSet;
        _position.y = this.canvas.getContentSize().height / 2 - this.node.height / 2 + cc.view.getViewportRect().y * this.canvas.getContentSize().height / cc.view.getViewportRect().height - _offSet;
        this.node.setPosition(_position);
      };
      __decorate([ property(cc.Node) ], CustomPositioningUI.prototype, "canvas", void 0);
      __decorate([ property ], CustomPositioningUI.prototype, "isLeftCornered", void 0);
      __decorate([ property ], CustomPositioningUI.prototype, "isRightCornered", void 0);
      CustomPositioningUI = __decorate([ ccclass ], CustomPositioningUI);
      return CustomPositioningUI;
    }(cc.Component);
    exports.default = CustomPositioningUI;
    cc._RF.pop();
  }, {} ],
  Functionalities: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37a18WDawNEQ6/8nTbtHCDd", "Functionalities");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Functionalities = function(_super) {
      __extends(Functionalities, _super);
      function Functionalities() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isAudioTimeOut = false;
        return _this;
      }
      Functionalities.prototype.StartAudioTimeOut = function(_audio, _time) {
        var _this = this;
        void 0 === _audio && (_audio = null);
        void 0 === _time && (_time = 5);
        this.isAudioTimeOut = true;
        cc.audioEngine.playEffect(_audio, false);
        this.scheduleOnce(function() {
          _this.RepeatAudio(_audio, _time);
        }, _time);
      };
      Functionalities.prototype.RepeatAudio = function(_audio, _time) {
        var _this = this;
        void 0 === _time && (_time = 5);
        if (this.isAudioTimeOut) {
          cc.audioEngine.playEffect(_audio, false);
          this.scheduleOnce(function() {
            if (_this.isAudioTimeOut) {
              _this.RepeatAudio(_audio, _time);
              cc.audioEngine.playEffect(_audio, false);
            }
          }, _time);
        }
      };
      Functionalities.prototype.StopAudioTimeOut = function() {
        this.isAudioTimeOut = false;
      };
      Functionalities.prototype.update = function(dt) {};
      Functionalities = __decorate([ ccclass ], Functionalities);
      return Functionalities;
    }(cc.Component);
    exports.default = Functionalities;
    cc._RF.pop();
  }, {} ],
  IData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74606DA4ldPDYqRa0tppnfF", "IData");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IData = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var IData = function() {
      function IData() {
        this.totalOptions = 0;
        this.SubImage = 0;
        this.wrongAnswersLimit = 0;
        this.question = "";
        this.questionSound = "";
        this.answerObject = "";
        this.positionType = "";
        this.feedbacktype = [];
        this.scaleArray = [];
        this.answers = [];
        this.positions = [];
        this.answerpositions = [];
        this.optionAnimationImages = [];
        this.textArray = [];
      }
      IData = __decorate([ ccclass ], IData);
      return IData;
    }();
    exports.IData = IData;
    cc._RF.pop();
  }, {} ],
  Jockey: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a640pa0TNB9oUElOq2DHqb", "Jockey");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Jockey = function(_super) {
      __extends(Jockey, _super);
      function Jockey() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Jockey_1 = Jockey;
      Object.defineProperty(Jockey, "Instance", {
        get: function() {
          return Jockey_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      Jockey.prototype.onLoad = function() {
        Jockey_1.instance = this;
      };
      Jockey.prototype.start = function() {};
      Jockey.prototype.CallJockey = function(_animName, _loop, _isMultipleAnim, _secondAnimName, _isSecondLoop, _waitTime) {
        void 0 === _loop && (_loop = false);
        void 0 === _isMultipleAnim && (_isMultipleAnim = false);
        void 0 === _secondAnimName && (_secondAnimName = null);
        void 0 === _isSecondLoop && (_isSecondLoop = false);
        void 0 === _waitTime && (_waitTime = 0);
        this.node.getComponent(sp.Skeleton).setAnimation(0, _animName, _loop);
        _isMultipleAnim && this.node.getComponent(sp.Skeleton).addAnimation(0, _secondAnimName, _isSecondLoop, 8);
      };
      var Jockey_1;
      Jockey.instance = null;
      Jockey = Jockey_1 = __decorate([ ccclass ], Jockey);
      return Jockey;
    }(cc.Component);
    exports.default = Jockey;
    cc._RF.pop();
  }, {} ],
  PlayVideo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e226RQIFZPJ4naQvPXF+Fd", "PlayVideo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StartGame_1 = require("../../Framework/Scripts/StartGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.videoPlayerNode = null;
        _this.videoPlayerTools = null;
        _this.curtain = null;
        _this.helloAudio = null;
        _this.voAudio = null;
        _this.btnClick = null;
        _this.jockeyName = null;
        _this.anim1Name = "hello Everyone";
        _this.anim2Name = "talk action loop";
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        this.scheduleOnce(function() {
          "tlc" == StartGame_1.default.Instance.jockeyName && (_this.node.getChildByName("tlc").active = true);
        }, .5);
      };
      NewClass.prototype.playAnimation = function() {
        var _this = this;
        cc.tween(this.node.children[0]).to(.5, {
          x: 0
        }, {
          easing: "backInOut"
        }).start();
        var jockeyNode = this.node.children[0].getChildByName(this.jockeyName);
        jockeyNode.active = true;
        this.scheduleOnce(function() {
          jockeyNode.getComponent(sp.Skeleton).setAnimation(0, _this.anim1Name, false);
          cc.audioEngine.playEffect(StartGame_1.default.Instance.introAudio1, false);
          _this.scheduleOnce(function() {
            jockeyNode.getComponent(sp.Skeleton).setAnimation(0, _this.anim2Name, true);
            cc.audioEngine.playEffect(StartGame_1.default.Instance.introAudio2, false);
            _this.scheduleOnce(function() {
              jockeyNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              cc.tween(_this.node.children[0]).to(.5, {
                opacity: 0
              }, {
                easing: "sineInOut"
              }).start();
              _this.scheduleOnce(function() {
                _this.curtain.getComponent(cc.Animation).play();
                _this.videoPlayerNode.active = true;
                _this.videoPlayerTools.active = true;
                _this.node.active = false;
              }, .5);
            }, StartGame_1.default.Instance.introAudio2.duration);
          }, StartGame_1.default.Instance.introAudio1.duration + .5);
        }, .5);
      };
      NewClass.prototype.Play = function() {
        var _this = this;
        this.videoPlayerNode.getComponent(cc.VideoPlayer).remoteURL = StartGame_1.default.Instance.videoLink;
        this.jockeyName = StartGame_1.default.Instance.jockeyName;
        this.node.getChildByName("tlc").active = false;
        cc.audioEngine.playEffect(this.btnClick, false);
        this.node.getChildByName("play").getComponent(cc.Button).interactable = false;
        cc.tween(this.node.getChildByName("title")).to(1, {
          y: 800
        }, {
          easing: "backInOut"
        }).start();
        cc.tween(this.node.getChildByName("play")).to(1, {
          y: -800
        }, {
          easing: "backInOut"
        }).start();
        StartGame_1.default.Instance.introAudio1 && StartGame_1.default.Instance.introAudio2 ? this.scheduleOnce(function() {
          _this.playAnimation();
        }, .5) : this.scheduleOnce(function() {
          _this.curtain.getComponent(cc.Animation).play();
          _this.videoPlayerNode.active = true;
          _this.videoPlayerTools.active = true;
          _this.node.active = false;
        }, .5);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "videoPlayerNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "videoPlayerTools", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "curtain", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "helloAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "voAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "btnClick", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../Framework/Scripts/StartGame": "StartGame"
  } ],
  ProgressBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e08b0tRP5pPcZvun88UXG3h", "ProgressBar");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StartGame_1 = require("../../../Scripts/StartGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ProgressBar = function(_super) {
      __extends(ProgressBar, _super);
      function ProgressBar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isVertical = false;
        _this.starsEarned = [ false, false, false ];
        return _this;
      }
      ProgressBar_1 = ProgressBar;
      Object.defineProperty(ProgressBar, "Instance", {
        get: function() {
          return ProgressBar_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      ProgressBar.prototype.onLoad = function() {
        ProgressBar_1.instance = this;
      };
      ProgressBar.prototype.start = function() {};
      ProgressBar.prototype.ProgressFill = function(_currentQues, starLog) {
        void 0 === starLog && (starLog = true);
        var particles = this.node.getChildByName("particles1");
        var maxLevels = StartGame_1.default.Instance.TotalLevels;
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(.5, {
          progress: value
        }, {
          easing: "sineInOut"
        }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        if (0 != _currentQues && _currentQues < maxLevels && _currentQues < maxLevels / 2) {
          if (!this.starsEarned[0] && starLog) {
            this.starsEarned[0] = true;
            console.log("starsEarned--1");
          }
          cc.tween(this.node.getChildByName("stars").children[0]).to(.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).start();
        } else if (_currentQues >= maxLevels / 2 && _currentQues < maxLevels && 0 == this.node.getChildByName("stars").children[1].opacity) {
          if (!this.starsEarned[1] && starLog) {
            this.starsEarned[1] = true;
            console.log("starsEarned--2");
          }
          cc.tween(this.node.getChildByName("stars").children[0]).to(.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(this.node.getChildByName("stars").children[1]).to(.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).start();
        } else if (_currentQues >= maxLevels && 0 == this.node.getChildByName("stars").children[2].opacity) {
          if (!this.starsEarned[2] && starLog) {
            this.starsEarned[2] = true;
            console.log("starsEarned--3");
          }
          cc.tween(this.node.getChildByName("stars").children[0]).to(.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(this.node.getChildByName("stars").children[1]).to(.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(this.node.getChildByName("stars").children[2]).to(.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).start();
        }
      };
      ProgressBar.prototype.getRandomNumber = function(min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
      };
      ProgressBar.prototype.createStarTrails = function(num, _node) {
        var _this = this;
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function(i) {
          var NodePOS = _node.convertToWorldSpaceAR(this_1.node.parent.position);
          var rngX = this_1.getRandomNumber(_node.x - _offset, _node.x + _offset);
          var rngY = this_1.getRandomNumber(_node.y - _offset, _node.y + _offset);
          var particles = cc.instantiate(new cc.Node());
          var trail = cc.instantiate(new cc.Node());
          particles.parent = this_1.node.parent;
          trail.parent = particles;
          particles.x = rngX;
          particles.y = rngY;
          particles.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
          particles.addComponent(cc.AudioSource).clip = this_1.particleSounds;
          particles.width = 600;
          particles.height = 600;
          particles.angle = this_1.getRandomNumber(0, 360);
          particles.zIndex = -1;
          particles.name = "particles" + i;
          particles.opacity = 0;
          trail.addComponent(cc.MotionStreak).preview;
          trail.getComponent(cc.MotionStreak).texture = this_1.trailsImg;
          trail.getComponent(cc.MotionStreak).enabled = false;
          this_1.scheduleOnce(function() {
            particles.getComponent(cc.AudioSource).play();
            cc.tween(particles).to(.75, {
              width: 35,
              height: 35
            }, {
              easing: "backOut"
            }).start();
            cc.tween(particles).to(.25, {
              angle: 0
            }, {
              easing: "cubicInOut"
            }).to(.25, {
              angle: 180
            }, {
              easing: "cubicInOut"
            }).start().to(.25, {
              angle: 360
            }, {
              easing: "cubicInOut"
            });
            cc.tween(particles).to(.25, {
              opacity: 255
            }, {
              easing: "cubicInOut"
            }).call(function() {
              _this.scheduleOnce(function() {
                trail.getComponent(cc.MotionStreak).minSeg = 10;
                trail.getComponent(cc.MotionStreak).stroke = 20;
                trail.getComponent(cc.MotionStreak).fadeTime = .2;
                trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                trail.getComponent(cc.MotionStreak).enabled = true;
                trail.getComponent(cc.MotionStreak).fastMode = true;
                cc.audioEngine.playEffect(_this.trailSounds, false);
                _this.isVertical ? cc.tween(particles).bezierTo(.75, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), new cc.Vec2(_this.node.x, _this.node.y - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + _this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress)).start() : cc.tween(particles).bezierTo(.75, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), new cc.Vec2(_this.node.x - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + _this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress, _this.node.y)).start();
                cc.tween(particles).to(.75, {
                  angle: -particles.angle / 2
                }, {
                  easing: "cubicInOut"
                }).start();
                cc.tween(particles).to(.75, {
                  scale: 0
                }, {
                  easing: "cubicIn"
                }).call(function() {
                  particles.destroy();
                }).start();
              }, .5);
            }).start();
          }, .1 * (i + 1));
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) _loop_1(i);
      };
      var ProgressBar_1;
      ProgressBar.instance = null;
      __decorate([ property(Boolean) ], ProgressBar.prototype, "isVertical", void 0);
      __decorate([ property(cc.SpriteFrame) ], ProgressBar.prototype, "starImg", void 0);
      __decorate([ property(cc.Texture2D) ], ProgressBar.prototype, "trailsImg", void 0);
      __decorate([ property(cc.AudioClip) ], ProgressBar.prototype, "trailSounds", void 0);
      __decorate([ property(cc.AudioClip) ], ProgressBar.prototype, "particleSounds", void 0);
      __decorate([ property(cc.AudioClip) ], ProgressBar.prototype, "starPopSound", void 0);
      ProgressBar = ProgressBar_1 = __decorate([ ccclass ], ProgressBar);
      return ProgressBar;
    }(cc.Component);
    exports.default = ProgressBar;
    cc._RF.pop();
  }, {
    "../../../Scripts/StartGame": "StartGame"
  } ],
  Progress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8e47+WhWdOJayfFf191hb3", "Progress");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Progress = function(_super) {
      __extends(Progress, _super);
      function Progress() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isVertical = false;
        _this.totalQuestions = 5;
        _this.progressFill = null;
        return _this;
      }
      Progress_1 = Progress;
      Object.defineProperty(Progress, "Instance", {
        get: function() {
          return Progress_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      Progress.prototype.onLoad = function() {
        Progress_1.instance = this;
        cc.game.addPersistRootNode(this.node);
      };
      Progress.prototype.IncreaseProgress = function(_questionNumber, _easingType) {
        void 0 === _easingType && (_easingType = "linear");
        var value = _questionNumber / this.totalQuestions;
        cc.tween(this.progressFill).to(.15, {
          progress: value
        }, {
          easing: _easingType
        }).start();
        1 == _questionNumber ? this.node.getComponent(cc.Animation).play("1") : this.totalQuestions % 2 == 0 && _questionNumber == this.totalQuestions / 2 || this.totalQuestions % 2 != 0 && _questionNumber == this.totalQuestions / 2 + .5 ? this.node.getComponent(cc.Animation).play("2") : this.totalQuestions == _questionNumber && this.node.getComponent(cc.Animation).play("3");
      };
      Progress.prototype.start = function() {};
      var Progress_1;
      Progress.instance = null;
      __decorate([ property(Boolean) ], Progress.prototype, "isVertical", void 0);
      __decorate([ property(Number) ], Progress.prototype, "totalQuestions", void 0);
      __decorate([ property(cc.ProgressBar) ], Progress.prototype, "progressFill", void 0);
      Progress = Progress_1 = __decorate([ ccclass ], Progress);
      return Progress;
    }(cc.Component);
    exports.default = Progress;
    cc._RF.pop();
  }, {} ],
  StartGame0: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86ce8/R5uZKp6N43HE2XR9U", "StartGame0");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var globalVariables_1 = require("./globalVariables");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var startGame = function(_super) {
      __extends(startGame, _super);
      function startGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.isMusicOn = true;
        _this.levelType = "1";
        _this.currentScore = 0;
        _this.currentHealth = 10;
        _this.isLoaded = false;
        return _this;
      }
      startGame_1 = startGame;
      Object.defineProperty(startGame, "Instance", {
        get: function() {
          return startGame_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      startGame.prototype.onLoad = function() {
        cc.resources.load("storyBoard", Object, function(_error, _jsonFile) {
          if (_error) {
            console.error(_error.message || _error);
            return;
          }
        });
        cc.game.addPersistRootNode(this.node);
        startGame_1.instance = this;
      };
      startGame.prototype.start = function() {
        console.log("logEvent--showedScreen--Title");
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var level = url.searchParams.get("level");
        var id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, .1);
        if ("false" == isAudio) {
          this.node.getChildByName("music").children[0].active = true;
          this.isMusicOn = false;
          cc.audioEngine.stopMusic();
        } else {
          this.node.getChildByName("music").children[0].active = false;
          this.isMusicOn = true;
          var id_1 = cc.audioEngine.playMusic(this.BGM_audio, true);
          cc.audioEngine.setVolume(id_1, .1);
        }
        var ageValue = parseInt(age);
        this.levelType = ageValue >= 6 ? "4" : 5 == ageValue ? "3" : 4 == ageValue ? "2" : "1";
        parseInt(level) ? globalVariables_1.default.Instance.currentLevel = parseInt(level) : globalVariables_1.default.Instance.currentLevel = 1;
        cc.director.preloadScene(globalVariables_1.default.Instance.currentLevel.toString());
      };
      startGame.prototype.OnMusic = function(event) {
        if (event.target.children[0].activeInHierarchy) {
          this.isMusicOn = true;
          event.target.children[0].active = false;
          var id = cc.audioEngine.playMusic(this.BGM_audio, true);
          cc.audioEngine.setVolume(id, .1);
          console.log("soundSetting--true");
        } else {
          this.isMusicOn = false;
          event.target.children[0].active = true;
          cc.audioEngine.stopMusic();
          console.log("soundSetting--false");
        }
      };
      startGame.prototype.OnBack = function() {
        console.log("gameExit--true");
      };
      var startGame_1;
      startGame.instance = null;
      __decorate([ property(cc.AudioClip) ], startGame.prototype, "BGM_audio", void 0);
      startGame = startGame_1 = __decorate([ ccclass ], startGame);
      return startGame;
    }(cc.Component);
    exports.default = startGame;
    cc._RF.pop();
  }, {
    "./globalVariables": "globalVariables"
  } ],
  StartGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d21cdcOFCVMG565duKHxBWs", "StartGame");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var startGame = function(_super) {
      __extends(startGame, _super);
      function startGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = 1;
        _this.NextSceneName = "1";
        _this.TotalLevels = 7;
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [ 3, 5, 7 ];
        _this.isMusicOn = true;
        _this.levelType = "1";
        _this.currentLevel = "1";
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.isDemoGame = false;
        _this.introAudio1 = null;
        _this.introAudio2 = null;
        _this.mainBg = null;
        _this.titleImageName = "";
        _this.videoLink = "";
        _this.activateHint = false;
        _this.jockeyName = "";
        _this.questions = [];
        _this.questionTime = 0;
        return _this;
      }
      startGame_1 = startGame;
      Object.defineProperty(startGame, "Instance", {
        get: function() {
          return startGame_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      startGame.prototype.onLoad = function() {
        var _this = this;
        cc.game.addPersistRootNode(this.node);
        startGame_1.instance = this;
        console.log("loading--100");
        console.log("loaderComplete--true");
        console.log("showedScreen--Title");
        this.node.children.forEach(function(element) {
          "jockey" == element.name && (_this.JockeyNode = element);
        });
      };
      startGame.prototype.logData = function() {
        console.log("Total Levels:", this.TotalLevels);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);
        this.questions.forEach(function(question, index) {
          console.log("Question " + (index + 1) + ":");
        });
      };
      startGame.prototype.removeExtension = function(imageName) {
        return imageName.replace(/\.png$/g, "");
      };
      startGame.prototype.removeAudioExtension = function(audioName) {
        return audioName.replace(/\.mp3$/g, "");
      };
      startGame.prototype.updateJSONdata = function() {
        var _this = this;
        if (this.isDemoGame) {
          var urlParams = new URLSearchParams(window.location.search);
          var encodedJson = urlParams.get("json");
          var decodedJsonString = decodeURIComponent(encodedJson);
          var jsonData = JSON.parse(decodedJsonString);
          var levelCount = jsonData.AdditionalData.TotalLevel;
          this.TotalLevels = parseInt(levelCount);
          this.titleImageName = jsonData.AdditionalData.TitleImageName;
          this.jockeyName = jsonData.AdditionalData.JockeyName;
          this.videoLink = jsonData.AdditionalData.VideoLink;
          var _introAudio1 = jsonData.AdditionalData.IntroAudio1Name;
          var _introAudio2 = jsonData.AdditionalData.IntroAudio2Name;
          this.questions = jsonData.QuestionData;
          cc.loader.load(this.titleImageName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            cc.find("Canvas").getChildByName("play").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          cc.loader.load(_introAudio1, function(err, audio) {
            if (err) {
              console.error("Failed to load audio:", err);
              return;
            }
            _this.introAudio1 = audio;
          });
          cc.loader.load(_introAudio2, function(err, audio) {
            if (err) {
              console.error("Failed to load audio:", err);
              return;
            }
            _this.introAudio2 = audio;
          });
          this.questions.forEach(function(question) {
            question.Options = question.Options.map(function(option) {
              return option;
            });
          });
          this.logData();
        } else cc.loader.loadRes("game_data", cc.JsonAsset, function(err, jsonAsset) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          var jsonData = jsonAsset.json;
          var levelCount = jsonData.AdditionalData.TotalLevel;
          _this.TotalLevels = parseInt(levelCount);
          _this.titleImageName = jsonData.AdditionalData.TitleImageName;
          _this.jockeyName = jsonData.AdditionalData.JockeyName;
          _this.videoLink = jsonData.AdditionalData.VideoLink;
          console.log("jockey name = ", _this.jockeyName);
          var _introAudio1 = _this.removeAudioExtension(jsonData.AdditionalData.IntroAudio1Name);
          var _introAudio2 = _this.removeAudioExtension(jsonData.AdditionalData.IntroAudio2Name);
          _this.questions = jsonData.QuestionData;
          _this.loadSpriteFrame(_this.removeExtension(jsonData.AdditionalData.TitleImageName), function(spriteFrame) {
            spriteFrame && (cc.find("Canvas").getChildByName("play").getChildByName("title").getComponent(cc.Sprite).spriteFrame = spriteFrame);
          });
          _this.loadAudioClip(_introAudio1, function(audio) {
            audio && (_this.introAudio1 = audio);
          });
          _this.loadAudioClip(_introAudio2, function(audio) {
            audio && (_this.introAudio2 = audio);
          });
          _this.questions.forEach(function(question) {
            question.QuestionImageName = _this.removeExtension(question.QuestionImageName);
            question.QuestionAudioName = _this.removeAudioExtension(question.QuestionAudioName);
            question.ReiterationAudioName = _this.removeAudioExtension(question.ReiterationAudioName);
            question.CorrectAudioName = _this.removeAudioExtension(question.CorrectAudioName);
            question.WrongAudioName = _this.removeAudioExtension(question.WrongAudioName);
            question.Options = question.Options.map(function(option) {
              return _this.removeExtension(option);
            });
          });
          _this.logData();
        });
      };
      startGame.prototype.start = function() {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var access = url.searchParams.get("access");
        var mobile = url.searchParams.get("mobile");
        var level = url.searchParams.get("level");
        var premium = url.searchParams.get("premium");
        var demo = url.searchParams.get("isdemo");
        if ("true" == demo) {
          this.isDemoGame = true;
          console.log("It is a demo game");
        }
        this.updateJSONdata();
        null != premium && (this.premiumLevel = parseInt(premium));
        null != level && (this.NextSceneName = level);
        this.hasMobile = "1" == mobile;
        this.hasAccess = "1" == access;
        this.isPremiumGame || (this.hasAccess = true);
        if ("false" == isAudio) {
          this.node.getChildByName("music").children[0].active = true;
          this.isMusicOn = false;
        } else {
          this.node.getChildByName("music").children[0].active = false;
          this.isMusicOn = true;
        }
        var ageValue = parseInt(age);
        this.isAgeParameterNeeded && (ageValue <= this.LevelAgeParameters[0] ? this.levelType = "1" : this.LevelAgeParameters.length > 1 && (ageValue > this.LevelAgeParameters[0] && ageValue <= this.LevelAgeParameters[1] ? this.levelType = "2" : this.LevelAgeParameters.length > 2 && (ageValue > this.LevelAgeParameters[1] && ageValue <= this.LevelAgeParameters[2] ? this.levelType = "3" : this.LevelAgeParameters.length > 3 && (ageValue > this.LevelAgeParameters[2] && ageValue <= this.LevelAgeParameters[3] ? this.levelType = "4" : this.LevelAgeParameters.length > 4 && ageValue > this.LevelAgeParameters[3] && ageValue <= this.LevelAgeParameters[4] && (this.levelType = "5")))));
      };
      startGame.prototype.OnMusic = function(event) {
        if (event.target.children[0].activeInHierarchy && null != this.BGM_audio) {
          this.isMusicOn = true;
          event.target.children[0].active = false;
          var id = cc.audioEngine.playMusic(this.BGM_audio, true);
          cc.audioEngine.setVolume(id, this.volume);
          console.log("soundSetting--true");
        } else {
          this.isMusicOn = false;
          event.target.children[0].active = true;
          cc.audioEngine.stopMusic();
          console.log("soundSetting--false");
        }
      };
      startGame.prototype.OnBack = function() {
        console.log("gameExit--true");
      };
      startGame.prototype.loadSpriteFrame = function(imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function(err, spriteFrame) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(spriteFrame);
        });
      };
      startGame.prototype.loadAudioClip = function(audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function(err, spriteFrame) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(spriteFrame);
        });
      };
      var startGame_1;
      startGame.instance = null;
      __decorate([ property(cc.AudioClip) ], startGame.prototype, "BGM_audio", void 0);
      __decorate([ property(Number) ], startGame.prototype, "volume", void 0);
      __decorate([ property(cc.String) ], startGame.prototype, "NextSceneName", void 0);
      __decorate([ property(Number) ], startGame.prototype, "TotalLevels", void 0);
      __decorate([ property(cc.Boolean) ], startGame.prototype, "isAgeParameterNeeded", void 0);
      __decorate([ property(Number) ], startGame.prototype, "LevelAgeParameters", void 0);
      __decorate([ property(Boolean) ], startGame.prototype, "isPremiumGame", void 0);
      __decorate([ property(Boolean) ], startGame.prototype, "isMobileNumberPriority", void 0);
      __decorate([ property(Number) ], startGame.prototype, "premiumLevel", void 0);
      startGame = startGame_1 = __decorate([ ccclass ], startGame);
      return startGame;
    }(cc.Component);
    exports.default = startGame;
    cc._RF.pop();
  }, {} ],
  TextLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1241sXwmpPE6Sv15qZNtq7", "TextLoader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Utility: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b460wWVY1FqIXpChY3bYbX", "Utility");
    cc.Node.prototype.blinkNode = function(blinkDuration, repeatCount, callback) {
      void 0 === blinkDuration && (blinkDuration = 1);
      void 0 === repeatCount && (repeatCount = 1);
      if (null == this) return;
      this.active = true;
      var fadeOut = cc.tween().to(blinkDuration / 2, {
        opacity: 0
      });
      var fadeIn = cc.tween().to(blinkDuration / 2, {
        opacity: 255
      });
      if (-1 == repeatCount) return cc.tween(this).sequence(fadeOut, fadeIn).repeatForever().start();
      return cc.tween(this).sequence(fadeOut, fadeIn).repeat(repeatCount).call(callback).start();
    };
    cc.Node.prototype.pulseNode = function(scaleOffset, pulseDuration, repeatCount, callback, interval) {
      void 0 === scaleOffset && (scaleOffset = .5);
      void 0 === pulseDuration && (pulseDuration = 1);
      void 0 === repeatCount && (repeatCount = 1);
      void 0 === interval && (interval = 0);
      if (null == this) return;
      this.active = true;
      var scaleUp = cc.tween().by(pulseDuration / 2, {
        scale: scaleOffset
      });
      var scaleDown = cc.tween().by(pulseDuration / 2, {
        scale: -scaleOffset
      });
      var intervalDelay = cc.tween().delay(interval);
      var pulseTween = cc.tween(this).sequence(scaleUp, scaleDown, intervalDelay);
      if (-1 == repeatCount) return pulseTween.repeatForever().start();
      return pulseTween.repeat(repeatCount).call(callback).start();
    };
    cc.Node.prototype.playAnimation = function(clipName, repeatCount, callback, wrapMode) {
      void 0 === repeatCount && (repeatCount = 1);
      if (null == this) return 0;
      this.active = true;
      var animation = this.getComponent(cc.Animation);
      if (null == animation) return 0;
      var animState = animation.play(clipName);
      if (null == animState) return 0;
      wrapMode && (animState.wrapMode = wrapMode);
      if (animState.wrapMode == cc.WrapMode.Loop) return 0;
      animState.repeatCount = repeatCount;
      var animDuration = animState.duration / animState.speed * repeatCount;
      cc.tween(this).delay(animDuration).call(callback).start();
      return animDuration;
    };
    cc.Node.prototype.resetAnim = function(animName) {
      if (null == this) return;
      var animation = this.getComponent(cc.Animation);
      if (null == animation) return;
      animation.stop(animName);
      animation.setCurrentTime(0, animName);
    };
    cc.Node.prototype.setActive = function(isActive, duration, callback, easingType) {
      var _this = this;
      void 0 === duration && (duration = 1);
      void 0 === easingType && (easingType = "cubicOut");
      if (null == this || this.active == isActive) return;
      if (isActive) {
        this.opacity = 0;
        this.active = true;
        var opacityValue = 255;
      } else {
        this.opacity = 255;
        var opacityValue = 0;
      }
      cc.tween(this).to(duration, {
        opacity: opacityValue
      }, {
        easing: easingType
      }).call(function() {
        isActive || (_this.active = false);
        callback && callback();
      }).start();
    };
    cc.Node.prototype.moveNode = function(finalPos, duration, callback, easingType) {
      void 0 === duration && (duration = 1);
      void 0 === easingType && (easingType = "smooth");
      if (null == this) return;
      cc.tween(this).to(duration, {
        position: finalPos
      }, {
        easing: easingType
      }).call(callback).start();
    };
    cc.Node.prototype.moveToNode = function(otherNode, duration, callback, easingType) {
      void 0 === duration && (duration = 1);
      void 0 === easingType && (easingType = "smooth");
      if (null == this) return;
      var finalPos = otherNode.inverseTransform(this.parent);
      cc.tween(this).to(duration, {
        position: finalPos
      }, {
        easing: easingType
      }).call(callback).start();
    };
    cc.Node.prototype.bezierMoveNode = function(finalPos, jumpHeight, duration, callback) {
      void 0 === jumpHeight && (jumpHeight = 200);
      void 0 === duration && (duration = 1);
      if (null == this) return;
      var initPos = this.getPosition();
      var targetVector = finalPos.sub(initPos);
      var firstControlPoint = cc.v2(initPos.x + .4 * targetVector.x, initPos.y + jumpHeight);
      var secondControlPoint = cc.v2(initPos.x + .8 * targetVector.x, initPos.y + jumpHeight);
      cc.tween(this).bezierTo(duration, firstControlPoint, secondControlPoint, finalPos).call(callback).start();
    };
    cc.Node.prototype.rotateNode = function(angleValue, duration, callback, easingType) {
      void 0 === duration && (duration = 1);
      void 0 === easingType && (easingType = "smooth");
      if (null == this) return;
      cc.tween(this).to(duration, {
        angle: angleValue
      }, {
        easing: easingType
      }).call(callback).start();
    };
    cc.Node.prototype.scaleNode = function(scaleValue, duration, callback, easingType) {
      void 0 === duration && (duration = 1);
      void 0 === easingType && (easingType = "smooth");
      if (null == this) return;
      cc.tween(this).to(duration, {
        scale: scaleValue
      }, {
        easing: easingType
      }).call(callback).start();
    };
    cc.Node.prototype.inverseTransform = function(otherNode, position) {
      void 0 === position && (position = null);
      if (null == this) return cc.Vec2.ZERO;
      null == position && (position = this.getPosition());
      var worldPos = this.parent.convertToWorldSpaceAR(position);
      var localPos = otherNode.convertToNodeSpaceAR(worldPos);
      return localPos;
    };
    cc.Node.prototype.setParentWithSamePos = function(parentNode) {
      if (null == this) return;
      var localPos = this.inverseTransform(parentNode);
      this.setParent(parentNode);
      this.setPosition(localPos);
    };
    cc._RF.pop();
  }, {} ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "882009Bux9MSqlp0QNotB13", "Utils");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Utils = function(_super) {
      __extends(Utils, _super);
      function Utils() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(Utils, "screenWidth", {
        get: function() {
          if (void 0 == this._screenWidth) {
            var _canvas = cc.find("Canvas");
            var _rightEnd = _canvas.getContentSize().width / 2 + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
            this._screenWidth = 2 * _rightEnd;
            var _topEnd = _canvas.getContentSize().height / 2 + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
            this._screenHeight = 2 * _topEnd;
          }
          return this._screenWidth;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Utils, "screenHeight", {
        get: function() {
          if (void 0 == this._screenHeight) {
            var _canvas = cc.find("Canvas");
            var _rightEnd = _canvas.getContentSize().width / 2 + cc.view.getViewportRect().x * _canvas.getContentSize().width / cc.view.getViewportRect().width;
            this._screenWidth = 2 * _rightEnd;
            var _topEnd = _canvas.getContentSize().height / 2 + cc.view.getViewportRect().y * _canvas.getContentSize().height / cc.view.getViewportRect().height;
            this._screenHeight = 2 * _topEnd;
          }
          return this._screenHeight;
        },
        enumerable: false,
        configurable: true
      });
      Utils._screenWidth = void 0;
      Utils._screenHeight = void 0;
      Utils = __decorate([ ccclass ], Utils);
      return Utils;
    }(cc.Component);
    exports.default = Utils;
    cc._RF.pop();
  }, {} ],
  WebView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd43bCWyrZH4J/MVPf8iNMA", "WebView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StartGame_1 = require("../../../Framework/Scripts/StartGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WebView = function(_super) {
      __extends(WebView, _super);
      function WebView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.webViewContainer = null;
        _this.correctAnswer = "600";
        _this.webLink = "https://plans.littlesingham.me/";
        _this.vo_aud = null;
        _this.currentAnswer = "";
        _this.currentMobile = "";
        _this.maxStringLength = 3;
        _this.MobileNumberNeeded = false;
        _this.question = [ "300+250", "200+250", "250+250", "500+250", "600+200", "350+350", "450+50", "650+50", "750+50", "850+50", "450+100", "550+100", "100+550", "750+100" ];
        return _this;
      }
      WebView_1 = WebView;
      Object.defineProperty(WebView, "Instance", {
        get: function() {
          return WebView_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      WebView.prototype.onLoad = function() {
        WebView_1.instance = this;
      };
      WebView.prototype.start = function() {};
      WebView.prototype.CheckForWebView = function(isMobileNumberNeeded) {
        void 0 === isMobileNumberNeeded && (isMobileNumberNeeded = false);
        var parts = this.question[this.getRandomNumber(0, this.question.length - 1)].split("+");
        this.node.getChildByName("Captcha").children[0].getChildByName("Context2").getComponent(cc.Label).string = parts[0] + " + " + parts[1];
        this.correctAnswer = (parseInt(parts[0]) + parseInt(parts[1])).toString();
        this.MobileNumberNeeded = isMobileNumberNeeded;
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.vo_aud, false);
        if (!StartGame_1.default.Instance.hasAccess) {
          if (isMobileNumberNeeded && !StartGame_1.default.Instance.hasMobile) {
            this.node.getChildByName("Captcha").active = true;
            console.log("logEvent--MobileCaptcha--showed");
            this.PopIn(this.node.getChildByName("Captcha").children[1], 1.5);
            this.node.getChildByName("Captcha").children[0].active = false;
            StartGame_1.default.Instance.isMusicOn && cc.audioEngine.stopMusic();
          } else {
            this.node.getChildByName("Captcha").active = true;
            console.log("logEvent--PaymentCaptcha--showed");
            this.PopIn(this.node.getChildByName("Captcha").children[0], 1.5);
            this.node.getChildByName("Captcha").children[1].active = false;
            StartGame_1.default.Instance.isMusicOn && cc.audioEngine.stopMusic();
          }
          return;
        }
      };
      WebView.prototype.getRandomNumber = function(min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
      };
      WebView.prototype.PopIn = function(_node, _scale) {
        void 0 === _scale && (_scale = 1);
        _node.scale = 0;
        _node.active = true;
        cc.tween(_node).to(.4, {
          scale: _scale
        }, {
          easing: "backOut"
        }).start();
      };
      WebView.prototype.PopOut = function(_node, _scale) {
        void 0 === _scale && (_scale = 1);
        _node.scale = _scale;
        cc.tween(_node).to(.4, {
          scale: 0
        }, {
          easing: "backIn"
        }).start();
        this.scheduleOnce(function() {
          _node.getParent().active = false;
        }, .4);
      };
      WebView.prototype.initWebview = function() {
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        iframe.src = this.webLink;
        var webViewContainer = iframe;
        webViewContainer.style["position"] = "absolute";
        webViewContainer.style["top"] = "0";
        webViewContainer.style["left"] = "0";
        webViewContainer.style["width"] = "100%";
        webViewContainer.style["height"] = "100%";
        var resizeIframe = function() {};
        resizeIframe();
        this.webViewContainer = webViewContainer;
      };
      WebView.prototype.OnClose = function() {
        console.log("logEvent--captcha--closed");
        cc.audioEngine.stopAllEffects();
        this.node.children[0].children[0].activeInHierarchy && this.PopOut(this.node.children[0].children[0], 1.5);
        this.node.children[0].children[1].activeInHierarchy && this.PopOut(this.node.children[0].children[1], 1.5);
        this.node.children[0].getChildByName("web").active = false;
        this.currentAnswer = "";
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
        if (StartGame_1.default.Instance.isMusicOn) {
          var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
          cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
        }
      };
      WebView.prototype.CheckForMobileNumber = function(_event) {
        var _this = this;
        if (this.currentMobile.length < 10 || "" == this.currentMobile) {
          if ("x" != _event.target.name) this.currentMobile.length < 10 && (this.currentMobile = this.currentMobile + _event.target.name); else {
            var len = this.currentMobile.length;
            var name = "";
            for (var i = 0; i < len - 1; i++) name += this.currentMobile[i];
            this.currentMobile = name;
          }
          "" == this.currentMobile ? this.node.children[0].children[1].getChildByName("ans").children[1].active = true : this.node.children[0].children[1].getChildByName("ans").children[1].active = false;
          this.node.children[0].children[1].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentMobile;
          if (this.currentMobile.length >= 10) {
            StartGame_1.default.Instance.hasMobile = true;
            StartGame_1.default.Instance.hasAccess = true;
            console.log("mobileNumber--" + this.currentMobile);
            this.node.children[0].children[0].active = false;
            this.PopOut(this.node.children[0].children[1], 1.5);
            this.scheduleOnce(function() {
              _this.node.children[0].active = false;
            }, .4);
          }
        }
      };
      WebView.prototype.CheckForCorrectAnswer = function(_event) {
        var _this = this;
        if ("x" != _event.target.name) this.currentAnswer.length < 3 && (this.currentAnswer = this.currentAnswer + _event.target.name); else {
          var len = this.currentAnswer.length;
          var name = "";
          for (var i = 0; i < len - 1; i++) name += this.currentAnswer[i];
          this.currentAnswer = name;
        }
        this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = this.currentAnswer;
        if (this.currentAnswer == this.correctAnswer) {
          console.log("logEvent--captcha--correct");
          console.log("Initiate_payment--true");
          console.log("Restart_level--" + StartGame_1.default.Instance.currentLevel);
        } else {
          var len = this.currentAnswer.length;
          var name_1 = "";
          for (var i = 0; i < len; i++) if (this.currentAnswer[i] == this.correctAnswer[i]) name_1 += this.currentAnswer[i]; else if ("x" != _event.target.name) {
            cc.tween(this.node.children[0].children[0].getChildByName("ans")).to(.1, {
              color: cc.Color.RED
            }).to(.1, {
              color: cc.Color.WHITE
            }).to(.1, {
              color: cc.Color.RED
            }).to(.1, {
              color: cc.Color.WHITE
            }).start();
            console.log("logEvent--captcha--wrong");
            this.scheduleOnce(function() {
              _this.currentAnswer = name_1;
              _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
            }, .4);
            break;
          }
        }
      };
      WebView.prototype.GameContinues = function() {};
      WebView.prototype.OnContinue = function() {
        var _this = this;
        this.initWebview();
        StartGame_1.default.Instance.isMusicOn && cc.audioEngine.stopMusic();
        window.addEventListener("message", function(event) {
          console.log("onLoad " + event.data);
          if ("Subscription--Yes" == event.data) {
            StartGame_1.default.Instance.hasAccess = true;
            _this.webViewContainer.remove();
            _this.node.children[0].getChildByName("web").active = false;
            _this.node.children[0].active = false;
            if (StartGame_1.default.Instance.isMusicOn) {
              var id = cc.audioEngine.playMusic(StartGame_1.default.Instance.BGM_audio, true);
              cc.audioEngine.setVolume(id, StartGame_1.default.Instance.volume);
            }
          }
          if ("Subscription--No" == event.data) {
            StartGame_1.default.Instance.hasAccess = false;
            _this.webViewContainer.remove();
            _this.node.children[0].children[0].active = true;
            _this.currentAnswer = "";
            _this.node.children[0].children[0].getChildByName("ans").children[0].getComponent(cc.Label).string = _this.currentAnswer;
          }
        }, false);
      };
      var WebView_1;
      WebView.instance = null;
      __decorate([ property(String) ], WebView.prototype, "correctAnswer", void 0);
      __decorate([ property(String) ], WebView.prototype, "webLink", void 0);
      __decorate([ property(cc.AudioClip) ], WebView.prototype, "vo_aud", void 0);
      WebView = WebView_1 = __decorate([ ccclass ], WebView);
      return WebView;
    }(cc.Component);
    exports.default = WebView;
    cc._RF.pop();
  }, {
    "../../../Framework/Scripts/StartGame": "StartGame"
  } ],
  demoScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5da6dvS/yhOPqzefDN8xJgO", "demoScript");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dustImg = null;
        _this.dustTrailImg = null;
        _this.WheelAnimations = [];
        return _this;
      }
      NewClass.prototype.start = function() {
        var _numOfParticles = 15;
      };
      NewClass.prototype.getRandomNumber = function(min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
      };
      NewClass.prototype.onClickPlayWheelAnim = function(event) {
        var spineNode = this.node.getChildByName("spine");
        spineNode.getComponent(sp.Skeleton).setAnimation(0, event.target.name, false);
      };
      NewClass.prototype.playDustAnim = function(num, _node) {
        var _this = this;
        var colorsArray = [ "#ffffff", "#ffff00", "#fff00f", "#ff00ff", "#f00fff", "#00ffff", "#ff0000", "#f0000f", "#0000ff" ];
        var rng_NumOfParticles = num;
        var _offset = 50;
        var _loop_1 = function(i) {
          var rngX = this_1.getRandomNumber(0, cc.winSize.width);
          var rngY = this_1.getRandomNumber(0, cc.winSize.width);
          var particles = cc.instantiate(new cc.Node());
          var trail = cc.instantiate(new cc.Node());
          particles.parent = _node;
          trail.parent = particles;
          particles.x = rngX;
          particles.y = rngY;
          particles.addComponent(cc.Sprite).spriteFrame = this_1.dustImg;
          particles.width = 0;
          particles.height = particles.width;
          particles.angle = this_1.getRandomNumber(0, 360);
          particles.zIndex = -1;
          particles.name = "particles" + i;
          particles.opacity = 0;
          particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_1.getRandomNumber(0, colorsArray.length - 1)]);
          trail.addComponent(cc.MotionStreak).preview;
          trail.getComponent(cc.MotionStreak).texture = this_1.dustTrailImg;
          trail.getComponent(cc.MotionStreak).enabled = true;
          var rngscale = this_1.getRandomNumber(10, 300);
          var rngEntryTimer = this_1.getRandomNumber(.5, 1.5);
          var rngTimer1 = this_1.getRandomNumber(.1, .2);
          cc.tween(particles).to(rngTimer1, {
            width: rngscale,
            height: rngscale
          }, {
            easing: "backOut"
          }).start();
          cc.tween(particles).bezierTo(rngTimer1, new cc.Vec2(300, 300), new cc.Vec2(this_1.getRandomNumber(0, cc.winSize.width), this_1.getRandomNumber(0, cc.winSize.height)), new cc.Vec2(this_1.getRandomNumber(0, cc.winSize.width), this_1.getRandomNumber(0, cc.winSize.height))).call(function() {
            cc.tween(particles).to(rngEntryTimer + .5, {
              angle: 0
            }, {
              easing: "cubicInOut"
            }).to(.25, {
              angle: 180
            }, {
              easing: "cubicInOut"
            }).start().to(.25, {
              angle: 360
            }, {
              easing: "cubicInOut"
            });
            cc.tween(particles).to(4, {
              scaleX: -1 * particles.scaleX
            }).start();
            cc.tween(particles).to(.25, {
              opacity: 255
            }, {
              easing: "cubicInOut"
            }).call(function() {
              _this.schedule(function() {
                particles.opacity = 255;
                cc.tween(particles).to(_this.getRandomNumber(.25, .75), {
                  opacity: _this.getRandomNumber(0, 50)
                }).start();
              }, _this.getRandomNumber(.1, .25));
              trail.getComponent(cc.MotionStreak).minSeg = _this.getRandomNumber(1, 5);
              trail.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(5, 10);
              trail.getComponent(cc.MotionStreak).fadeTime = .2;
              trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
              trail.getComponent(cc.MotionStreak).enabled = true;
              trail.getComponent(cc.MotionStreak).fastMode = true;
              var rngTimer2 = _this.getRandomNumber(.1, 2);
              cc.tween(particles).bezierTo(rngTimer2, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(0, cc.winSize.width), _this.getRandomNumber(0, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(0, cc.winSize.width), _this.getRandomNumber(0, cc.winSize.height))).start();
              cc.tween(particles).to(rngTimer2, {
                angle: -particles.angle / 2
              }, {
                easing: "cubicInOut"
              }).start();
              cc.tween(particles).to(rngTimer2 + .5, {
                scale: 0
              }, {
                easing: "cubicIn"
              }).call(function() {
                particles.destroy();
              }).start();
            }).start();
          }).start();
        };
        var this_1 = this;
        for (var i = 0; i < rng_NumOfParticles; i++) _loop_1(i);
      };
      NewClass.prototype.playDustAnim2 = function(num1, num2, _node) {
        var _this = this;
        console.log("deDust2");
        var colorsArray = [ "#ffffff", "#ffff00", "#fff00f", "#ff00ff", "#f00fff", "#00ffff", "#ff0000", "#f0000f", "#0000ff" ];
        var rng_NumOfParticles = num1;
        var _offset = 50;
        var _loop_2 = function(i) {
          var particles = cc.instantiate(new cc.Node());
          var trail = cc.instantiate(new cc.Node());
          particles.parent = _node;
          trail.parent = particles;
          particles.x = 300;
          particles.y = 300;
          particles.addComponent(cc.Sprite).spriteFrame = this_2.dustImg;
          particles.width = 0;
          particles.height = particles.width;
          particles.angle = this_2.getRandomNumber(0, 359);
          particles.zIndex = -1;
          particles.name = "particles" + i;
          particles.opacity = 255;
          particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_2.getRandomNumber(0, colorsArray.length - 1)]);
          trail.addComponent(cc.MotionStreak).preview;
          trail.getComponent(cc.MotionStreak).texture = this_2.dustTrailImg;
          trail.getComponent(cc.MotionStreak).enabled = true;
          trail.getComponent(cc.MotionStreak).minSeg = .1;
          trail.getComponent(cc.MotionStreak).stroke = this_2.getRandomNumber(10, 25);
          trail.getComponent(cc.MotionStreak).fadeTime = .2;
          trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
          trail.getComponent(cc.MotionStreak).enabled = true;
          trail.getComponent(cc.MotionStreak).fastMode = true;
          this_2.scheduleOnce(function() {
            cc.tween(particles).to(.5, {
              width: 100,
              height: 100
            }, {
              easing: "backOut"
            }).call(function() {
              cc.tween(particles).bezierTo(1, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x, cc.winSize.width), _this.getRandomNumber(particles.y, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(cc.winSize.width / 4, 3 * cc.winSize.width / 4), _this.getRandomNumber(cc.winSize.height / 4, 3 * cc.winSize.height / 4))).call(function() {
                var _loop_3 = function(j) {
                  var bullets = cc.instantiate(new cc.Node());
                  var bTrails = cc.instantiate(new cc.Node());
                  bullets.addComponent(cc.Sprite).spriteFrame = _this.dustImg;
                  bTrails.parent = bullets;
                  bTrails.addComponent(cc.MotionStreak).preview;
                  bTrails.getComponent(cc.MotionStreak).texture = _this.dustTrailImg;
                  bTrails.getComponent(cc.MotionStreak).enabled = true;
                  bTrails.getComponent(cc.MotionStreak).minSeg = .1;
                  bTrails.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(10, 25);
                  bTrails.getComponent(cc.MotionStreak).fadeTime = .2;
                  bTrails.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                  bTrails.getComponent(cc.MotionStreak).enabled = true;
                  bTrails.getComponent(cc.MotionStreak).fastMode = true;
                  bullets.width = 100;
                  bullets.height = 100;
                  bullets.name = "bullets" + j;
                  bullets.parent = particles;
                  bullets.x = 0;
                  bullets.y = 0;
                  bullets.color = cc.Color.fromHEX(particles.color, colorsArray[_this.getRandomNumber(0, colorsArray.length - 1)]);
                  var rngDistance = 500;
                  cc.tween(bullets).to(1, {
                    x: _this.getRandomNumber(bullets.x - _this.getRandomNumber(100, 500), bullets.x + _this.getRandomNumber(100, 500)),
                    y: _this.getRandomNumber(bullets.y - _this.getRandomNumber(100, 500), bullets.y + _this.getRandomNumber(100, 500))
                  }).start();
                  cc.tween(bullets).to(.2, {
                    opacity: 100
                  }).to(.2, {
                    opacity: 255
                  }).to(.2, {
                    opacity: 100
                  }).to(.2, {
                    opacity: 255
                  }).to(.2, {
                    opacity: 100,
                    scale: 0
                  }).call(function() {
                    bullets.destroy();
                    particles.destroy();
                  }).start();
                };
                for (var j = 0; j < num2; j++) _loop_3(j);
              }).start();
            }).start();
          }, .25 * (i + 1));
        };
        var this_2 = this;
        for (var i = 0; i < num1; i++) _loop_2(i);
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "dustImg", void 0);
      __decorate([ property(cc.Texture2D) ], NewClass.prototype, "dustTrailImg", void 0);
      __decorate([ property(String) ], NewClass.prototype, "WheelAnimations", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  endScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1734yGyoRLAJc6pq/Ly4ow", "endScreen");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var globalVariables_1 = require("./globalVariables");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wheelIntroAudio = null;
        _this.wheelSpinAudio = null;
        _this.wheelRetryAudio = null;
        _this.wheelWinAudio = null;
        _this.starsAudio = null;
        _this.changeAudio = null;
        _this.starImg = null;
        _this.scoreLabelNode = null;
        _this.filling1 = 0;
        _this.filling2 = 0;
        _this.filling3 = 0;
        _this.showNum1 = 0;
        _this.num1 = 0;
        _this.num2 = 0;
        _this.currentTween = 0;
        _this.playerScore = 0;
        _this.totalLevels = 7;
        _this.spinStateAnim = [ "wheel_result_1_x5", "wheel_result_2_x20", "wheel_result_3_x8", "wheel_result_4_x10", "wheel_result_5_x15", "wheel_result_6_again" ];
        _this.spinStateMultiplier = [ "5", "20", "8", "10", "15", "again" ];
        _this.rngAnimIndex = 0;
        return _this;
      }
      NewClass.prototype.getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.animationPlaybackSequence = function() {
        var spinWheelNode = this.node.getChildByName("spineWheel");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        audioSource.clip = this.wheelIntroAudio;
        audioSource.play();
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_intro", false);
        this.scheduleOnce(function() {
          spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_loop", true);
          playButtonNode.children[0].getComponent(cc.Button).interactable = true;
        }, .75);
      };
      NewClass.prototype.update = function(dt) {};
      NewClass.prototype.onPlayButtonClicked = function() {
        var _this = this;
        console.log("buttonClicked");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        this.rngAnimIndex = this.getRandomInt(0, this.spinStateAnim.length);
        playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_tapped", false);
        playButtonNode.children[0].getComponent(cc.Button).interactable = false;
        this.scheduleOnce(function() {
          _this.spinWheelRotate(_this.rngAnimIndex);
        }, .25);
      };
      NewClass.prototype.spinWheelRotate = function(animNum) {
        var _this = this;
        var spinWheelNode = this.node.getChildByName("spineWheel");
        var playButtonNode = this.node.getChildByName("spinePlayButton");
        var audioSource = this.node.getComponent(cc.AudioSource);
        spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, this.spinStateAnim[animNum], false);
        audioSource.clip = this.wheelSpinAudio;
        audioSource.loop = true;
        audioSource.play();
        this.scheduleOnce(function() {
          if (_this.rngAnimIndex == _this.spinStateAnim.length - 1) {
            playButtonNode.children[0].getComponent(cc.Button).interactable = true;
            spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_loop", true);
            playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_demanding_atention", true);
            audioSource.clip = _this.wheelRetryAudio;
            audioSource.play();
          } else {
            audioSource.loop = false;
            spinWheelNode.getComponent(sp.Skeleton).setAnimation(0, "wheel_win_" + (_this.rngAnimIndex + 1), false);
            playButtonNode.getComponent(sp.Skeleton).setAnimation(0, "play_ending", false);
            audioSource.clip = _this.wheelWinAudio;
            _this.node.getChildByName("character").getComponent(cc.Animation).play("puzzleJump");
            audioSource.play();
            _this.scheduleOnce(function() {
              _this.showStarsMultiplier(_this.playerScore);
            }, 3);
          }
        }, 3.25);
      };
      NewClass.prototype.setEndProgressBar = function() {
        var progressBar = this.node.getChildByName("Popup").getChildByName("progressBar");
        for (var i = 0; i < this.totalLevels; i++) if (true == globalVariables_1.default.Instance.answerArray[i]) {
          progressBar.children[i].getChildByName("unattemptedQ").active = false;
          progressBar.children[i].getChildByName("wrongQ").active = false;
          progressBar.children[i].getChildByName("nextQ").active = false;
          progressBar.children[i].getChildByName("rightQ").active = true;
          this.playerScore++;
        } else {
          progressBar.children[i].getChildByName("rightQ").active = false;
          progressBar.children[i].getChildByName("unattemptedQ").active = false;
          progressBar.children[i].getChildByName("nextQ").active = false;
          progressBar.children[i].getChildByName("wrongQ").active = true;
        }
      };
      NewClass.prototype.showStarsMultiplier = function(num) {
        var _this = this;
        this.scoreLabelNode.scale = 0;
        this.scoreLabelNode.getComponent(cc.Label).string = "x" + this.spinStateMultiplier[this.rngAnimIndex];
        this.node.getChildByName("Popup").active = false;
        cc.tween(this.scoreLabelNode).to(1, {
          scale: 1
        }, {
          easing: "backOut"
        }).call(function() {
          _this.scheduleOnce(function() {
            _this.scoreLabelNode.getComponent(cc.Label).string = num + " x " + _this.spinStateMultiplier[_this.rngAnimIndex];
            _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
            _this.node.getComponent(cc.AudioSource).play();
            cc.tween(_this.scoreLabelNode).to(1, {
              scale: 2
            }, {
              easing: "backIn"
            }).call(function() {
              _this.scoreLabelNode.getComponent(cc.Label).string = (num * parseInt(_this.spinStateMultiplier[_this.rngAnimIndex])).toString();
              _this.node.getComponent(cc.AudioSource).clip = _this.changeAudio;
              _this.node.getComponent(cc.AudioSource).play();
              cc.tween(_this.scoreLabelNode).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
            }).start();
          }, .1);
        }).start();
        var max = parseInt(this.spinStateMultiplier[this.rngAnimIndex]);
        var _loop_1 = function(i) {
          var starNodes = new cc.Node("stars" + (i + 1));
          starNodes.parent = this_1.node;
          starNodes.x = 0;
          starNodes.y = 0;
          starNodes.addComponent(cc.Sprite).spriteFrame = this_1.starImg;
          starNodes.addComponent(cc.AudioSource).clip = this_1.starsAudio;
          starNodes.getComponent(cc.AudioSource).volume = .5;
          var posX = this_1.getRandomInt(-320, 320);
          var posY = this_1.getRandomInt(-220, 220);
          starNodes.scale = 0;
          this_1.scheduleOnce(function() {
            _this.scheduleOnce(function() {
              cc.tween(starNodes).to(1, {
                scale: 1,
                x: posX,
                y: posY
              }, {
                easing: "backOut"
              }).call(function() {
                cc.tween(starNodes).to(1, {
                  scale: .5,
                  x: posX / 1.5,
                  y: posY / 1.5
                }, {
                  easing: "backIn"
                }).call(function() {}).start();
              }).start();
              starNodes.getComponent(cc.AudioSource).play();
              i == max - 1 && console.log("gameEnded--true");
            }, (i + 1) / 50);
          }, 2.5);
        };
        var this_1 = this;
        for (var i = 0; i < max; i++) _loop_1(i);
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wheelIntroAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wheelSpinAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wheelRetryAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wheelWinAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "starsAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "changeAudio", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "starImg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "scoreLabelNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./globalVariables": "globalVariables"
  } ],
  gameplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa156p3gAtEIKy7RL2BRjec", "gameplay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IData_1 = require("./IData");
    var globalVariables_1 = require("./globalVariables");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.questionAudio = [];
        _this.positiveFeedbackSound = [];
        _this.negativeFeedbackSound = [];
        _this.ReinforementSound = [];
        _this.optionSounds = [];
        _this.dustImg = null;
        _this.dustTrailImg = null;
        _this.particlesSound = null;
        _this.data = [ new IData_1.IData() ];
        _this.question = "";
        _this.textArray = [];
        _this.maxOptions = 7;
        _this.SubImage = 0;
        _this.wrongAnswerLimit = 7;
        _this.answers = [];
        _this.positionType = "custom";
        _this.feedbacktype = [];
        _this.scaleArray = [];
        _this.optionImages = [];
        _this.positiveAudios = [];
        _this.isClicked = false;
        _this.totalAnswers = 0;
        _this.correctAnswerCount = 0;
        _this.wrongAnswerCount = 0;
        _this.isDone = [];
        _this.createdOptions = [];
        _this.offsetX = 0;
        _this.totalLevels = 5;
        _this.answerValues = [];
        _this.viewPortWidth = 720;
        _this.viewPortHeight = 1280;
        _this.canTouch = true;
        _this.isChar1 = true;
        _this.isFirstClick = false;
        _this.isWrong = false;
        _this.defaultTime = 15;
        _this.touchDone = [];
        _this.popupTime = 0;
        return _this;
      }
      NewClass.prototype.getRandomNumber = function(min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
      };
      NewClass.prototype.Updatedata = function() {
        this.LoadQuestion();
        this.scheduleOnce(function() {}, .2);
      };
      NewClass.prototype.LoadQuestion = function() {
        var _this = this;
        cc.resources.load("storyBoard", Object, function(_error, _jsonFile) {
          if (_error) {
            console.error(_error.message || _error);
            return;
          }
          var _jsonData = _jsonFile["json"];
          _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
        });
      };
      NewClass.prototype.loadData = function() {
        for (var i = 0; i < 7; i++) {
          cc.resources.load(this.data[i].answerObject);
          cc.resources.load(this.data[i].optionAnimationImages);
        }
      };
      NewClass.prototype.PlayQuestion = function(_data) {
        return 1;
      };
      NewClass.prototype.onLoad = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        }, .5);
        this.node.getChildByName("ThirdNode").active = true;
        this.Updatedata();
        var jockeyNode = this.node.getChildByName("podium").getChildByName("Puzzle");
        jockeyNode.getComponent(cc.Animation).play("titleAnim");
        jockeyNode.getComponent(cc.Animation).on("finished", function() {
          _this.jockeyReposition(_this.node.getChildByName("podium"));
        }, this);
        cc.director.preloadScene("endScreen");
      };
      NewClass.prototype.start = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.callStartGame();
        }, 2);
      };
      NewClass.prototype.callStartGame = function() {
        var _this = this;
        this.setMultipleAnswerEnvironment();
        for (var i = 0; i < this.totalLevels; i++) this.answerValues[i] = false;
        this.setProgressBar();
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        globalVariables_1.default.Instance.currentLevel == this.totalLevels;
        this.scheduleOnce(function() {
          _this.fetchData();
        }, .2);
        this.scheduleOnce(function() {
          _this.setMultipleAnswerEnvironment();
          _this.createAnswerObject();
          _this.scheduleOnce(function() {
            _this.createOptionObject(_this.maxOptions);
            _this.playSound(_this.popSound);
            _this.scheduleOnce(function() {
              for (var i = 0; i < _this.node.getChildByName("Options").children.length; i++) _this.isDone[i] = false;
              _this.node.getChildByName("Options").children.forEach(function(element) {
                element.on("touchstart", function(event) {
                  this.canTouch && this.TouchStart(element, event);
                }, _this);
              });
            }, .4);
          }, 0);
        }, .3);
        this.scheduleOnce(function() {
          _this.playSound(_this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1]);
        }, .7);
      };
      NewClass.prototype.callJockey = function() {
        var _this = this;
        cc.tween(this.node.getChildByName("Jockey")).to(.5, {
          x: 475
        }, {
          easing: "sineInOut"
        }).start();
        this.scheduleOnce(function() {
          if (globalVariables_1.default.Instance.currentLevel % 2 == 0) {
            _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).paused = false;
            _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).setAnimation(0, "dance", false);
          } else {
            _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).paused = false;
            _this.node.getChildByName("Jockey").getComponent(sp.Skeleton).setAnimation(0, "thumbs_up", false);
          }
          _this.scheduleOnce(function() {
            cc.tween(_this.node.getChildByName("Jockey")).to(.5, {
              x: 1600
            }, {
              easing: "sineInOut"
            }).start();
          }, _this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration);
        }, .5);
      };
      NewClass.prototype.fetchData = function() {
        this.correctAnswerCount = 0;
        this.maxOptions = this.data[globalVariables_1.default.Instance.currentLevel - 1].totalOptions;
        this.SubImage = this.data[globalVariables_1.default.Instance.currentLevel - 1].SubImage;
        this.wrongAnswerLimit = this.data[globalVariables_1.default.Instance.currentLevel - 1].wrongAnswersLimit;
        this.answers = this.data[globalVariables_1.default.Instance.currentLevel - 1].answers;
        this.scaleArray = this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray;
        this.positionType = this.data[globalVariables_1.default.Instance.currentLevel - 1].positionType;
        this.feedbacktype = this.data[globalVariables_1.default.Instance.currentLevel - 1].feedbacktype;
        this.totalAnswers = this.answers.length;
        this.question = this.data[globalVariables_1.default.Instance.currentLevel - 1].question;
        this.questionSound = this.data[globalVariables_1.default.Instance.currentLevel - 1].questionSound;
        this.textArray = this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray;
        this.answerObject = this.data[globalVariables_1.default.Instance.currentLevel - 1].answerObject;
        this.optionImages = this.data[globalVariables_1.default.Instance.currentLevel - 1].optionAnimationImages;
      };
      NewClass.prototype.CheckForIsDone = function(_node) {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) this.node.getChildByName("Options").children[i].name == _node.name && (this.isDone[i] = true);
      };
      NewClass.prototype.TouchStart = function(_node, _event) {
        var _this = this;
        if (!this.isFirstClick) {
          this.isFirstClick = true;
          console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        var isStop = false;
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) if (_node.name == this.node.getChildByName("Options").children[i].name && this.isDone[i]) {
          isStop = true;
          break;
        }
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) if (_node.name == this.touchDone[i]) {
          isStop = true;
          break;
        }
        if (!isStop) {
          var isCorrect = false;
          for (var i = 0; i < this.answers.length; i++) if (parseInt(_node.name) - 1 == this.answers[i]) {
            isCorrect = true;
            break;
          }
          if (isCorrect) {
            var audioSource = this.node.getChildByName("audioNode").getComponent(cc.AudioSource);
            audioSource.clip = this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
            audioSource.play();
            console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.wrongAnswerCount = 0;
            this.callJockeyAnim(0);
            if (1 == this.feedbacktype.length) {
              this.playSound(this.rightSound);
              this.callPositiveFeedback(_node, this.feedbacktype[0]);
            } else if (2 == this.feedbacktype.length) {
              this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
              this.node.getComponent(cc.AudioSource).play();
              this.callPositiveFeedback(_node, this.feedbacktype[0]);
              this.scheduleOnce(function() {
                _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
              }, .8);
            } else if (3 == this.feedbacktype.length) {
              this.node.getComponent(cc.AudioSource).clip = this.positiveSound;
              this.node.getComponent(cc.AudioSource).play();
              this.callPositiveFeedback(_node, this.feedbacktype[0]);
              this.scheduleOnce(function() {
                _this.callPositiveFeedback(_node, _this.feedbacktype[1]);
              }, .5);
              this.scheduleOnce(function() {
                _this.callPositiveFeedback(_node, _this.feedbacktype[2]);
              }, .7);
            }
            this.CheckForIsDone(_node);
            this.correctAnswerCount += 1;
          } else {
            var audioSource = this.node.getChildByName("audioNode").getComponent(cc.AudioSource);
            audioSource.clip = this.negativeFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1];
            audioSource.play();
            console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
            this.callNegativeFeedback(_node);
            this.callJockeyAnim(1);
          }
          var levelend = false;
          if (this.correctAnswerCount == this.totalAnswers) {
            globalVariables_1.default.Instance.rightAnswerCount += 1;
            this.answerValues[globalVariables_1.default.Instance.currentLevel - 1] = true;
            levelend = true;
            this.canTouch = false;
            if (globalVariables_1.default.Instance.currentLevel == this.totalLevels) {
              this.setProgressBar();
              this.isClicked = false;
              this.scheduleOnce(function() {
                _this.setProgressBar();
                _this.scheduleOnce(function() {
                  _this.destroyOptions();
                  _this.scheduleOnce(function() {
                    _this.destroyRightOptions();
                    _this.destroyAnswers();
                    _this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                    _this.node.getChildByName("bg").getChildByName("glow").active = false;
                    _this.scheduleOnce(function() {
                      _this.isWrong = false;
                      globalVariables_1.default.Instance.answerArray = _this.answerValues;
                      _this.scheduleOnce(function() {
                        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
                        cc.director.loadScene("endScreen");
                      }, 2);
                    }, .5);
                  }, _this.popupTime + .5);
                }, 2);
              }, 1);
            } else {
              this.isClicked = false;
              this.canTouch = false;
              globalVariables_1.default.Instance.currentLevel += 1;
              this.setProgressBar();
              this.scheduleOnce(function() {
                _this.setScreen("positive");
              }, 3);
            }
          }
        }
      };
      NewClass.prototype.playSound = function(name) {
        this.node.getComponent(cc.AudioSource).clip = name;
        this.node.getComponent(cc.AudioSource).play();
      };
      NewClass.prototype.playQuestionSound = function(name) {
        this.node.getComponent(cc.AudioSource).clip = this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1];
        this.node.getComponent(cc.AudioSource).play();
      };
      NewClass.prototype.setScreen = function(type1) {
        var _this = this;
        this.touchDone = [];
        console.log("levelComplete--" + (globalVariables_1.default.Instance.currentLevel - 1));
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.scheduleOnce(function() {
          _this.destroyOptions();
          _this.scheduleOnce(function() {
            _this.destroyRightOptions();
            _this.destroyAnswers();
            _this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
            _this.node.getChildByName("bg").getChildByName("glow").active = false;
            _this.scheduleOnce(function() {
              _this.isFirstClick = false;
              _this.isWrong = false;
              _this.fetchData();
              _this.createAnswerObject();
              _this.setMultipleAnswerEnvironment();
              _this.scheduleOnce(function() {
                _this.createOptionObject(_this.maxOptions);
                _this.playSound(_this.popSound);
                _this.scheduleOnce(function() {
                  for (var i = 0; i < _this.node.getChildByName("Options").children.length; i++) _this.isDone[i] = false;
                  _this.node.getChildByName("Options").children.forEach(function(element) {
                    element.on("touchstart", function(event) {
                      this.canTouch && this.TouchStart(element, event);
                    }, _this);
                  });
                  _this.scheduleOnce(function() {
                    this.isClicked = true;
                  }, 1);
                  _this.scheduleOnce(function() {
                    this.playSound(this.questionAudio[globalVariables_1.default.Instance.currentLevel - 1]);
                  }, _this.popSound.duration);
                }, .1);
              }, .4);
            }, .5);
          }, _this.popupTime + .5);
        }, 2);
      };
      NewClass.prototype.setReinforsementScreen = function(type) {
        var _this = this;
        if ("positive" == type) {
          this.popupTime = this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2].duration + this.magicalSound.duration;
          cc.tween(this.node.getChildByName("podium")).to(.5, {
            x: -400
          }, {
            easing: "sineInOut"
          }).start();
          this.node.getChildByName("podium").getChildByName("Puzzle").getComponent(cc.Animation).play("puzzlePositive");
          this.node.getChildByName("bg").getChildByName("glow").active = true;
          this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).play();
          this.playSound(this.magicalSound);
          cc.tween(this.node.getChildByName("ThirdNode")).to(.5, {
            x: 0
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(this.node.getChildByName("ThirdNode")).to(.5, {
            y: 0
          }, {
            easing: "sineInOut"
          }).start();
          for (var i = 0; i < this.maxOptions; i++) if (this.node.getChildByName("Options").children[i].name && this.isDone[i]) {
            this.node.getChildByName("Options").children[i].getChildByName("right").active = false;
            cc.tween(this.node.getChildByName("Options").children[i]).to(.5, {
              x: 250
            }, {
              easing: "sineInOut"
            }).start();
            cc.tween(this.node.getChildByName("Options").children[i]).to(.5, {
              y: -200
            }, {
              easing: "sineInOut"
            }).start();
            cc.tween(this.node.getChildByName("Options").children[i]).to(.5, {
              scale: 1.2
            }, {
              easing: "sineInOut"
            }).start();
          }
          this.scheduleOnce(function() {
            _this.playSound(_this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 2]);
            _this.callJockey();
          }, this.magicalSound.duration);
        } else {
          "negative";
          cc.tween(this.node.getChildByName("podium")).to(.5, {
            x: -400
          }, {
            easing: "sineInOut"
          }).start();
          this.node.getChildByName("podium").getChildByName("Puzzle").getComponent(cc.Animation).play("puzzleNegative");
          this.popupTime = this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 1].duration;
          cc.tween(this.node.getChildByName("ThirdNode")).to(.5, {
            x: 0
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(this.node.getChildByName("ThirdNode")).to(.5, {
            y: 0
          }, {
            easing: "sineInOut"
          }).start();
          for (var i = 0; i < this.maxOptions; i++) if (this.node.getChildByName("Options").children[i].name && this.isDone[i]) {
            this.node.getChildByName("Options").children[i].getChildByName("right").active = false;
            cc.tween(this.node.getChildByName("Options").children[i]).to(.5, {
              x: 250
            }, {
              easing: "sineInOut"
            }).start();
            cc.tween(this.node.getChildByName("Options").children[i]).to(.5, {
              y: -200
            }, {
              easing: "sineInOut"
            }).start();
            cc.tween(this.node.getChildByName("Options").children[i]).to(.5, {
              scale: 1.2
            }, {
              easing: "sineInOut"
            }).start();
          }
          this.scheduleOnce(function() {
            _this.playSound(_this.ReinforementSound[globalVariables_1.default.Instance.currentLevel - 2]);
          }, .5);
        }
      };
      NewClass.prototype.createAnswerObject = function() {
        var _this = this;
        this.AnswerNode = this.node.getChildByName("ThirdNode");
        this.AnswerNode.opacity = 255;
        this.AnswerNode.scale = 0;
        this.AnswerNode.x = this.convertXPos(cc.winSize.width * this.data[globalVariables_1.default.Instance.currentLevel - 1].answerpositions[0].x);
        this.AnswerNode.y = this.convertYPos(cc.winSize.height * this.data[globalVariables_1.default.Instance.currentLevel - 1].answerpositions[0].y);
        this.AnswerNode.getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string = this.question;
        var _scale = .8;
        cc.winSize.height < 720 && (_scale = .8);
        cc.tween(this.AnswerNode).to(1, {
          scale: _scale
        }, {
          easing: "sineInOut"
        }).call(function() {
          _this.canTouch = true;
        }).start();
      };
      NewClass.prototype.createOptionObject = function(numOfOptions) {
        switch (this.positionType) {
         case "custom":
          for (var i = 0; i < numOfOptions; i++) {
            this.createdOptions[i] = cc.instantiate(this.node.getChildByName("template"));
            this.createdOptions[i].name = (i + 1).toString();
            this.createdOptions[i].opacity = 0;
            this.createdOptions[i].children[0].getComponent(cc.Label).string = this.data[globalVariables_1.default.Instance.currentLevel - 1].textArray[i];
            this.node.getChildByName("Options").insertChild(this.createdOptions[i], i);
            this.offsetX = 30;
            this.createdOptions[i].scale = 0;
            this.createdOptions[i].opacity = 255;
            this.createdOptions[i].x = this.convertXPos(cc.winSize.width * this.data[globalVariables_1.default.Instance.currentLevel - 1].positions[i].x);
            this.createdOptions[i].y = this.convertXPos(cc.winSize.width * this.data[globalVariables_1.default.Instance.currentLevel - 1].positions[i].y);
            this.createdOptions[i].active = true;
            0 == this.SubImage ? this.updateSprites(this.optionImages[i], this.createdOptions[i]) : 1 == this.SubImage && this.updateSprites(this.optionImages[i], this.createdOptions[i].getChildByName("image").getChildByName("subSprite"));
            this.optionImages[i], this.createdOptions[i].getChildByName("image").getChildByName("subSprite").width = 550;
            this.optionImages[i], this.createdOptions[i].getChildByName("image").getChildByName("subSprite").height = 550;
            cc.tween(this.createdOptions[i]).to(1, {
              scale: this.data[globalVariables_1.default.Instance.currentLevel - 1].scaleArray[i]
            }, {
              easing: "sineInOut"
            }).start();
          }
        }
      };
      NewClass.prototype.destroyOptions = function() {
        var _this = this;
        var _loop_1 = function(i) {
          this_1.node.getChildByName("Options").children[i].name && !this_1.isDone[i] && cc.tween(this_1.createdOptions[i]).to(.5, {
            scale: 0
          }, {
            easing: "sineInOut"
          }).call(function() {
            _this.createdOptions[i].destroy();
          }).start();
        };
        var this_1 = this;
        for (var i = 0; i < this.maxOptions; i++) _loop_1(i);
      };
      NewClass.prototype.destroyRightOptions = function() {
        var _this = this;
        var _loop_2 = function(i) {
          this_2.node.getChildByName("Options").children[i].name && this_2.isDone[i] && cc.tween(this_2.createdOptions[i]).to(.5, {
            scale: 0
          }, {
            easing: "sineInOut"
          }).call(function() {
            _this.createdOptions[i].destroy();
          }).start();
        };
        var this_2 = this;
        for (var i = 0; i < this.maxOptions; i++) _loop_2(i);
      };
      NewClass.prototype.destroyAnswers = function() {
        if (this.AnswerNode) {
          cc.tween(this.AnswerNode).to(.5, {
            scale: 0
          }, {
            easing: "sineInOut"
          }).start();
          this.scheduleOnce(function() {}, .5);
        }
      };
      NewClass.prototype.setMultipleAnswerEnvironment = function() {
        this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string = "";
        this.node.getChildByName("ThirdNode").getChildByName("AnswerNode").getChildByName("Question").getComponent(cc.Label).string = this.question;
      };
      NewClass.prototype.callNegativeFeedback = function(node1) {
        var _this = this;
        this.touchDone.push(node1.name);
        this.wrongAnswerCount += 1;
        this.canTouch = false;
        var optionsNode = node1.parent;
        optionsNode.getChildByName((this.answers[0] + 1).toString()).getChildByName("right").active = true;
        cc.tween(optionsNode.getChildByName((this.answers[0] + 1).toString()).getChildByName("right")).to(.15, {
          opacity: 0
        }).to(.15, {
          opacity: 255
        }).to(.15, {
          opacity: 0
        }).to(.15, {
          opacity: 255
        }).start();
        node1.getChildByName("right").active = false;
        node1.getChildByName("wrong").active = true;
        node1.getChildByName("image").getChildByName("subSprite").getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        node1.getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.tween(node1).to(.1, {
          x: node1.x + 10
        }, {
          easing: "sineInOut"
        }).to(.1, {
          x: node1.x - 10
        }, {
          easing: "sineInOut"
        }).to(.1, {
          x: node1.x
        }, {
          easing: "sineInOut"
        }).to(.1, {
          x: node1.x + 10
        }, {
          easing: "sineInOut"
        }).to(.1, {
          x: node1.x - 10
        }, {
          easing: "sineInOut"
        }).to(.1, {
          x: node1.x
        }, {
          easing: "sineInOut"
        }).start();
        this.playSound(this.wrongSound);
        this.scheduleOnce(function() {
          if (_this.wrongAnswerCount >= _this.wrongAnswerLimit) {
            _this.wrongAnswerCount = 0;
            _this.canTouch = false;
            _this.hilightLeftAnswers();
            if (globalVariables_1.default.Instance.currentLevel == _this.totalLevels) {
              _this.isClicked = false;
              _this.setProgressBar();
              _this.isDone[_this.answers[0]] = true;
              _this.scheduleOnce(function() {
                _this.destroyOptions();
                _this.scheduleOnce(function() {
                  _this.destroyRightOptions();
                  _this.destroyAnswers();
                  _this.node.getChildByName("bg").getChildByName("glow").getComponent(cc.Animation).stop();
                  _this.node.getChildByName("bg").getChildByName("glow").active = false;
                  _this.scheduleOnce(function() {
                    _this.isWrong = false;
                    globalVariables_1.default.Instance.answerArray = _this.answerValues;
                    console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
                    cc.director.loadScene("endScreen");
                  }, .5);
                }, _this.popupTime + .5);
              }, 2);
            } else {
              _this.isWrong = true;
              _this.isClicked = false;
              globalVariables_1.default.Instance.currentLevel += 1;
              _this.setProgressBar();
              _this.isDone[_this.answers[0]] = true;
              _this.scheduleOnce(function() {
                _this.setScreen("negative");
              }, 3);
            }
          }
        }, .8);
      };
      NewClass.prototype.callPositiveFeedback = function(node1, feedbackName) {
        var _this = this;
        switch (feedbackName) {
         case "confetti":
          node1.getChildByName("wrong").active = false;
          node1.getChildByName("right").active = true;
          this.node.getChildByName("Options").getChildByName("Animal").scale = 1;
          this.node.getChildByName("Options").getChildByName("Animal").setPosition(node1.x, node1.y);
          this.node.getChildByName("Options").getChildByName("Animal").getComponent(cc.Animation).play();
          this.scheduleOnce(function() {
            _this.node.getChildByName("Options").getChildByName("Animal").setPosition(-500, -500);
          }, 1);
          cc.tween(this.node.getChildByName("Options").getChildByName("Animal")).to(.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).to(.5, {
            opacity: 0
          }, {
            easing: "sineInOut"
          }).start();
          break;

         case "destroy":
          cc.tween(node1).to(.9, {
            opacity: 1
          }, {
            easing: "sineInOut"
          }).to(.9, {
            opacity: 0
          }, {
            easing: "sineInOut"
          }).start();
          break;

         case "movement_right":
          cc.tween(node1).to(.9, {
            x: node1.x
          }, {
            easing: "sineInOut"
          }).to(.9, {
            x: this.viewPortWidth + 100
          }, {
            easing: "sineInOut"
          }).start();
          break;

         case "movement_left":
          cc.tween(node1).to(.2, {
            x: node1.x
          }, {
            easing: "sineInOut"
          }).to(.2, {
            x: -100
          }, {
            easing: "sineInOut"
          }).start();
          break;

         case "movement_top":
          cc.tween(node1).to(2, {
            y: this.viewPortHeight + 100
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(node1).repeatForever(cc.tween().to(.2, {
            x: node1.x + 30
          }, {
            easing: "sineInOut"
          }).to(.2, {
            x: node1.x
          }, {
            easing: "sineInOut"
          })).start();
          break;

         case "movement_bottom":
          4 == globalVariables_1.default.Instance.currentLevel && cc.tween(this.node.getChildByName("bg").getChildByName("plate")).to(.5, {
            x: -280
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(node1).to(.5, {
            y: node1.y + 100
          }, {
            easing: "sineInOut"
          }).to(.5, {
            y: node1.y - 50
          }, {
            easing: "sineInOut"
          }).start();
          cc.tween(node1).to(.5, {
            angle: 360
          }, {
            easing: "sineInOut"
          }).start();
          break;

         case "movement_Animation":
          if (1 == globalVariables_1.default.Instance.currentLevel) {
            node1.x = node1.x + 10;
            node1.y = node1.y + 50;
          }
          if (3 == globalVariables_1.default.Instance.currentLevel) {
            node1.x = node1.x + 20;
            node1.y = node1.y + 20;
            node1.scale = node1.scale - .2;
          }
          5 == globalVariables_1.default.Instance.currentLevel && (node1.scale = node1.scale + .4);
          var animationClip = void 0;
          node1.addComponent(cc.Animation);
          node1.getComponent(cc.Animation).addClip(animationClip);
          node1.getComponent(cc.Animation).play(animationClip.name);
          break;

         case "movement_Scale":
          var outlineScale = node1.scale + 30 * node1.scale / 100;
          node1.getChildByName("outline").scale = outlineScale;
          cc.tween(node1.getChildByName("outline")).to(.3, {
            scale: outlineScale + .1
          }, {
            easing: "sineInOut"
          }).to(.3, {
            scale: outlineScale
          }, {
            easing: "sineInOut"
          }).start();
          break;

         case "frameChange":
          cc.tween(node1).to(.3, {
            scale: node1.scale + .1
          }, {
            easing: "sineInOut"
          }).to(.3, {
            scale: node1.scale
          }, {
            easing: "sineInOut"
          }).start();
          break;

         case "shake":
          var tween1_1 = cc.tween(node1).repeatForever(cc.tween().to(.1, {
            x: node1.x
          }, {
            easing: "sineInOut"
          }).to(.1, {
            x: node1.x + 10
          }, {
            easing: "sineInOut"
          })).start();
          this.scheduleOnce(function() {
            tween1_1.stop();
          }, 1);
          break;

         case "movement_center":
          this.scheduleOnce(function() {
            _this.destroyOtherOptions();
          }, 0);
          "2" == node1.name ? cc.tween(node1).to(1, {
            x: node1.x - 325
          }, {
            easing: "sineInOut"
          }).start() : "1" == node1.name && cc.tween(node1).to(1, {
            x: node1.x + 325
          }, {
            easing: "sineInOut"
          }).start();
          break;

         default:
          cc.tween(node1).to(.9, {
            opacity: 1
          }, {
            easing: "sineInOut"
          }).to(.9, {
            opacity: 0
          }, {
            easing: "sineInOut"
          }).start();
        }
      };
      NewClass.prototype.destroyOtherOptions = function() {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) this.node.getChildByName("Options").children[i].name && !this.isDone[i] && cc.tween(this.node.getChildByName("Options").children[i]).to(.4, {
          opacity: 0
        }, {
          easing: "sineInOut"
        }).start();
      };
      NewClass.prototype.update = function(dt) {};
      NewClass.prototype.finishedAnim = function(event) {};
      NewClass.prototype.callNegativeReaction = function() {
        var _this = this;
        this.canTouch = false;
        var randomnumber = this.getRandomNumber(0, 1);
        var currentAudioClip;
        if (0 == randomnumber) {
          console.log("characterAppear--Gopal");
          this.isChar1 = true;
          this.node.getChildByName("Jockey").active = true;
          this.node.getChildByName("Jockey").x = -475;
          this.node.getChildByName("Jockey").y = -101;
          this.node.getChildByName("Jockey").scaleX = -1.5;
          this.node.getChildByName("Jockey").scaleY = 1.5;
          this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction1");
        } else {
          console.log("characterAppear--Mili");
          this.isChar1 = false;
          this.node.getChildByName("Jockey").active = true;
          this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
          this.node.getChildByName("Jockey").getComponent(cc.Animation).pause("negativeReaction2");
          this.node.getChildByName("Jockey").x = 939;
          this.node.getChildByName("Jockey").y = -141;
          this.node.getChildByName("Jockey").scaleX = 1.5;
          this.node.getChildByName("Jockey").scaleY = 1.5;
          cc.tween(this.node.getChildByName("Jockey")).to(.3, {
            x: 475
          }).start();
          this.scheduleOnce(function() {
            _this.node.getChildByName("Jockey").getComponent(cc.Animation).play("negativeReaction2");
          }, .4);
        }
        this.scheduleOnce(function() {
          _this.node.getComponent(cc.AudioSource).clip = currentAudioClip;
          _this.node.getComponent(cc.AudioSource).play();
        }, .9);
      };
      NewClass.prototype.increaseprogress = function() {
        var _this = this;
        globalVariables_1.default.Instance.fillRange = globalVariables_1.default.Instance.currentLevel * (394 / this.totalLevels);
        cc.tween(this.node.getChildByName("progressBar").getChildByName("fill")).to(.5, {
          width: globalVariables_1.default.Instance.fillRange
        }).start();
        this.scheduleOnce(function() {
          _this.ShowStar();
        }, .5);
      };
      NewClass.prototype.ShowStar = function() {
        if (this.node.getChildByName("progressBar").getChildByName("fill").width == 394 / this.totalLevels) {
          console.log("starsEarned--1");
          this.node.getChildByName("progressBar").getChildByName("star").scale = 0;
          this.node.getChildByName("progressBar").getChildByName("star").active = true;
          cc.tween(this.node.getChildByName("progressBar").getChildByName("star")).to(.5, {
            scale: .3
          }).start();
        } else if (this.node.getChildByName("progressBar").getChildByName("fill").width == 394 * Math.ceil(this.totalLevels / 2) / this.totalLevels) {
          console.log("starsEarned--2");
          this.node.getChildByName("progressBar").getChildByName("star2").scale = 0;
          this.node.getChildByName("progressBar").getChildByName("star2").active = true;
          this.node.getChildByName("progressBar").getChildByName("star3").scale = 0;
          this.node.getChildByName("progressBar").getChildByName("star3").active = true;
          cc.tween(this.node.getChildByName("progressBar").getChildByName("star2")).to(.5, {
            scale: .3
          }).start();
          cc.tween(this.node.getChildByName("progressBar").getChildByName("star3")).to(.5, {
            scale: .3
          }).start();
        } else if (394 == this.node.getChildByName("progressBar").getChildByName("fill").width) {
          console.log("starsEarned--3");
          this.node.getChildByName("progressBar").getChildByName("star4").scale = 0;
          this.node.getChildByName("progressBar").getChildByName("star5").scale = 0;
          this.node.getChildByName("progressBar").getChildByName("star6").scale = 0;
          this.node.getChildByName("progressBar").getChildByName("star4").active = true;
          this.node.getChildByName("progressBar").getChildByName("star5").active = true;
          this.node.getChildByName("progressBar").getChildByName("star6").active = true;
          cc.tween(this.node.getChildByName("progressBar").getChildByName("star4")).to(.5, {
            scale: .3
          }).start();
          cc.tween(this.node.getChildByName("progressBar").getChildByName("star5")).to(.5, {
            scale: .3
          }).start();
          cc.tween(this.node.getChildByName("progressBar").getChildByName("star6")).to(.5, {
            scale: .3
          }).start();
        }
      };
      NewClass.prototype.setProgressBar = function() {
        var progressBar = this.node.getChildByName("ThirdNode").getChildByName("progressBar");
        for (var i = 0; i < this.totalLevels; i++) if (true == this.answerValues[i]) {
          progressBar.children[i].getChildByName("unattemptedQ").active = false;
          progressBar.children[i].getChildByName("wrongQ").active = false;
          progressBar.children[i].getChildByName("nextQ").active = false;
          progressBar.children[i].getChildByName("rightQ").active = true;
        } else if (globalVariables_1.default.Instance.currentLevel == i + 1) {
          progressBar.children[i].getChildByName("rightQ").active = false;
          progressBar.children[i].getChildByName("unattemptedQ").active = false;
          progressBar.children[i].getChildByName("wrongQ").active = false;
          progressBar.children[i].getChildByName("nextQ").active = true;
        } else if (globalVariables_1.default.Instance.currentLevel > i + 1) {
          progressBar.children[i].getChildByName("rightQ").active = false;
          progressBar.children[i].getChildByName("unattemptedQ").active = false;
          progressBar.children[i].getChildByName("nextQ").active = false;
          progressBar.children[i].getChildByName("wrongQ").active = true;
        } else if (globalVariables_1.default.Instance.currentLevel < i + 1) {
          progressBar.children[i].getChildByName("rightQ").active = false;
          progressBar.children[i].getChildByName("wrongQ").active = false;
          progressBar.children[i].getChildByName("nextQ").active = false;
          progressBar.children[i].getChildByName("unattemptedQ").active = true;
        }
      };
      NewClass.prototype.updateSprites = function(_spriteName, _node) {
        cc.resources.load(_spriteName, cc.SpriteFrame, function(err, spriteFrame) {
          if (err) {
            cc.warn(err.message || err);
            return;
          }
          _node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
      };
      NewClass.prototype.UpdateAnimations = function(_spriteName, _node) {
        cc.resources.load(_spriteName, cc.AnimationClip, function(err, animation) {
          if (err) {
            cc.warn(err.message || err);
            return;
          }
          _node.getComponent(cc.Animation).addClip(animation);
          _node.getComponent(cc.Animation).play(animation.name);
        }.bind(this));
      };
      NewClass.prototype.playAudio = function(_audioPath) {
        var clip = null;
        cc.resources.load(_audioPath, cc.AudioClip, function(err, audioClip) {
          if (err) {
            cc.warn(err.message || err);
            return;
          }
          cc.audioEngine.playEffect(audioClip, false);
          clip = audioClip;
        }.bind(this));
      };
      NewClass.prototype.hilightLeftAnswers = function() {
        for (var i = 0; i < this.node.getChildByName("Options").children.length; i++) for (var j = 0; j < this.answers.length; j++) if (parseInt(this.node.getChildByName("Options").children[i].name) - 1 == this.answers[j]) break;
      };
      NewClass.prototype.convertXPos = function(x) {
        var val = x - cc.winSize.width / 2;
        return val;
      };
      NewClass.prototype.convertYPos = function(y) {
        var val = y - cc.winSize.height / 2;
        return val;
      };
      NewClass.prototype.jockeyReposition = function(_node) {
        _node.children[0].getComponent(cc.Animation).play();
        cc.tween(_node).to(1, {
          x: -450,
          y: -280,
          scale: .9
        }).start();
      };
      NewClass.prototype.callJockeyAnim = function(num) {
        var _this = this;
        var jockeyNode = this.node.getChildByName("podium").getChildByName("Puzzle");
        var options2 = this.node.getChildByName("Options2");
        if (0 == num) {
          jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
          jockeyNode.getComponent(cc.Animation).on("finished", function() {
            jockeyNode.getComponent(cc.Animation).play("puzzleCorrect");
          }, this);
          this.scheduleOnce(function() {
            jockeyNode.getComponent(cc.Animation).play("puzzleStars");
            jockeyNode.getComponent(cc.Animation).on("finished", function() {
              jockeyNode.getComponent(cc.Animation).play("puzzleIdle");
            }, _this);
            _this.playDustAnim2(Math.round(_this.getRandomInt(5, 8)), _this.getRandomInt(15, 20), options2);
          }, jockeyNode.getComponent(cc.Animation).getClips()[1].duration + this.positiveFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1].duration);
        } else {
          jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
          jockeyNode.getComponent(cc.Animation).on("finished", function() {
            jockeyNode.getComponent(cc.Animation).play("puzzleWrong");
          }, this);
          this.scheduleOnce(function() {
            jockeyNode.getComponent(cc.Animation).play("puzzleStars");
            jockeyNode.getComponent(cc.Animation).on("finished", function() {
              jockeyNode.getComponent(cc.Animation).play("puzzleIdle");
            }, _this);
            _this.playDustAnim2(Math.round(_this.getRandomInt(5, 8)), _this.getRandomInt(15, 20), options2);
          }, jockeyNode.getComponent(cc.Animation).getClips()[3].duration + this.negativeFeedbackSound[globalVariables_1.default.Instance.currentLevel - 1].duration);
        }
      };
      NewClass.prototype.playDustAnim = function(num) {};
      NewClass.prototype.getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      };
      NewClass.prototype.getRandomFloat = function(min, max) {
        return Math.random() * (max - min) + min;
      };
      NewClass.prototype.playDustAnim2 = function(num1, num2, _node) {
        var _this = this;
        var jockey = this.node.getChildByName("podium").getChildByName("Puzzle");
        jockey.getComponent(cc.AudioSource).clip = this.particlesSound;
        this.scheduleOnce(function() {
          jockey.getComponent(cc.AudioSource).play();
        }, .75);
        var colorsArray = [ "#C042FF", "#FF0049", "#FCC000" ];
        var rng_NumOfParticles = num1;
        var _offset = 50;
        var _loop_3 = function(i) {
          var particles = cc.instantiate(new cc.Node());
          var trail = cc.instantiate(new cc.Node());
          particles.parent = _node;
          trail.parent = particles;
          particles.x = 210;
          particles.y = 150;
          particles.addComponent(cc.Sprite).spriteFrame = this_3.dustImg;
          particles.width = 0;
          particles.height = particles.width;
          particles.angle = this_3.getRandomNumber(0, 359);
          particles.zIndex = -1;
          particles.name = "particles" + i;
          particles.opacity = 255;
          particles.color = cc.Color.fromHEX(particles.color, colorsArray[this_3.getRandomInt(0, colorsArray.length)]);
          trail.addComponent(cc.MotionStreak).preview;
          trail.getComponent(cc.MotionStreak).texture = this_3.dustTrailImg;
          trail.getComponent(cc.MotionStreak).enabled = true;
          trail.getComponent(cc.MotionStreak).minSeg = this_3.getRandomFloat(.1, .5);
          trail.getComponent(cc.MotionStreak).stroke = this_3.getRandomNumber(10, 25);
          trail.getComponent(cc.MotionStreak).fadeTime = .2;
          trail.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
          trail.getComponent(cc.MotionStreak).enabled = true;
          trail.getComponent(cc.MotionStreak).fastMode = true;
          this_3.scheduleOnce(function() {
            var rngParticlesSize = _this.getRandomInt(75, 125);
            _this.scheduleOnce(function() {
              cc.tween(particles).to(.5, {
                width: rngParticlesSize,
                height: rngParticlesSize
              }, {
                easing: "backOut"
              }).start();
            }, .5);
            cc.tween(particles).bezierTo(1, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x, cc.winSize.width), _this.getRandomNumber(particles.y, cc.winSize.height)), new cc.Vec2(_this.getRandomNumber(cc.winSize.width / 4, 3 * cc.winSize.width / 4), _this.getRandomNumber(cc.winSize.height / 4, 3 * cc.winSize.height / 4))).call(function() {
              var _loop_4 = function(j) {
                var bullets = cc.instantiate(new cc.Node());
                var bTrails = cc.instantiate(new cc.Node());
                bullets.addComponent(cc.Sprite).spriteFrame = _this.dustImg;
                bTrails.parent = bullets;
                bTrails.addComponent(cc.MotionStreak).preview;
                bTrails.getComponent(cc.MotionStreak).texture = _this.dustTrailImg;
                bTrails.getComponent(cc.MotionStreak).enabled = true;
                bTrails.getComponent(cc.MotionStreak).minSeg = _this.getRandomFloat(.1, .5);
                bTrails.getComponent(cc.MotionStreak).stroke = _this.getRandomNumber(10, 25);
                bTrails.getComponent(cc.MotionStreak).fadeTime = .2;
                bTrails.getComponent(cc.MotionStreak).color = new cc.Color(255, 255, 255);
                bTrails.getComponent(cc.MotionStreak).enabled = true;
                bTrails.getComponent(cc.MotionStreak).fastMode = true;
                bullets.width = 0;
                bullets.height = 0;
                bullets.name = "bullets" + j;
                bullets.parent = particles;
                bullets.x = 0;
                bullets.y = 0;
                bullets.color = cc.Color.fromHEX(particles.color, colorsArray[_this.getRandomInt(0, colorsArray.length)]);
                var rngSize = _this.getRandomNumber(100, 200);
                cc.tween(bullets).to(.25, {
                  width: rngSize,
                  height: rngSize
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(bullets).to(.5, {
                  x: _this.getRandomNumber(bullets.x - _this.getRandomNumber(100, 500), bullets.x + _this.getRandomNumber(100, 500)),
                  y: _this.getRandomNumber(bullets.y - _this.getRandomNumber(100, 500), bullets.y + _this.getRandomNumber(100, 500))
                }).start();
                cc.tween(bullets).to(.1, {
                  opacity: 200
                }).to(.1, {
                  opacity: 255
                }).to(.1, {
                  opacity: 200
                }).to(.1, {
                  opacity: 255
                }).to(.1, {
                  opacity: 200,
                  scale: 0
                }).call(function() {
                  bullets.destroy();
                  particles.destroy();
                }).start();
              };
              for (var j = 0; j < num2; j++) _loop_4(j);
            }).start();
          }, .1 * (i + 1));
        };
        var this_3 = this;
        for (var i = 0; i < num1; i++) _loop_3(i);
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "magicalSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "popSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "questionAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "positiveFeedbackSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "negativeFeedbackSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "ReinforementSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "rightSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "wrongSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "optionSounds", void 0);
      __decorate([ property(cc.Material) ], NewClass.prototype, "defaultMat", void 0);
      __decorate([ property(cc.Material) ], NewClass.prototype, "greyMat", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "dustImg", void 0);
      __decorate([ property(cc.Texture2D) ], NewClass.prototype, "dustTrailImg", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "particlesSound", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./IData": "IData",
    "./globalVariables": "globalVariables"
  } ],
  globalVariables: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92529e0bmlFg4etSHkGHN2l", "globalVariables");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var globalVariables = function(_super) {
      __extends(globalVariables, _super);
      function globalVariables() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.animationEntry = "";
        _this.animationStayEffect = "";
        _this.animationExit = "";
        _this.currentLevel = 1;
        _this.canvasTopY = 0;
        _this.canvasLeftX = 0;
        _this.rightAnswerCount = 0;
        _this.totalTimer = 0;
        _this.playerID = "ID_default";
        _this.answerArray = [];
        _this.fillRange = 1;
        return _this;
      }
      globalVariables_1 = globalVariables;
      globalVariables.prototype.onLoad = function() {
        globalVariables_1.instance = this;
      };
      Object.defineProperty(globalVariables, "Instance", {
        get: function() {
          return globalVariables_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      globalVariables.prototype.start = function() {};
      globalVariables.prototype.update = function(dt) {};
      var globalVariables_1;
      globalVariables.instance = null;
      __decorate([ property(cc.Label) ], globalVariables.prototype, "label", void 0);
      __decorate([ property ], globalVariables.prototype, "text", void 0);
      globalVariables = globalVariables_1 = __decorate([ ccclass ], globalVariables);
      return globalVariables;
    }(cc.Component);
    exports.default = globalVariables;
    cc._RF.pop();
  }, {} ],
  questionData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14c22o3rANHuK6U/y0kdlcu", "questionData");
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var questionData = function() {
      function questionData() {
        this.questionTime = 0;
        this.isoptionText = false;
        this.isquestionText = false;
        this.questionImg = null;
        this.questionText = "";
        this.optionImgs = [];
        this.optionTexts = [];
        this.correctAnswer = 1;
      }
      __decorate([ property(Number) ], questionData.prototype, "questionTime", void 0);
      __decorate([ property(Boolean) ], questionData.prototype, "isoptionText", void 0);
      __decorate([ property(Boolean) ], questionData.prototype, "isquestionText", void 0);
      __decorate([ property(cc.SpriteFrame) ], questionData.prototype, "questionImg", void 0);
      __decorate([ property(String) ], questionData.prototype, "questionText", void 0);
      __decorate([ property(cc.SpriteFrame) ], questionData.prototype, "optionImgs", void 0);
      __decorate([ property(String) ], questionData.prototype, "optionTexts", void 0);
      __decorate([ property(Number) ], questionData.prototype, "correctAnswer", void 0);
      questionData = __decorate([ ccclass ], questionData);
      return questionData;
    }();
    cc._RF.pop();
  }, {} ],
  questionManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16b5cNzEfVPT4gC4z4qvMqL", "questionManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  titleScript1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77fe26jbH5NorU508z3jPET", "titleScript1");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.profileSet = false;
        _this.userAction = true;
        _this.titleProgressDone = false;
        _this.timer = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        cc.director.preloadScene("1");
        cc.director.loadScene("1");
      };
      NewClass.prototype.start = function() {
        var _this = this;
        this.node.getChildByName("Character").getComponent(cc.Animation).play();
        this.scheduleOnce(function() {}, .1);
        this.scheduleOnce(function() {
          _this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        }, .5);
      };
      NewClass.prototype.loadData = function() {
        cc.resources.load("/Quiz_01_01_b");
        cc.resources.load("/3");
        cc.resources.load("/8");
      };
      NewClass.prototype.LoadQuestion = function() {
        var _this = this;
        cc.resources.load("storyBoard", Object, function(_error, _jsonFile) {
          if (_error) {
            console.error(_error.message || _error);
            return;
          }
          var _jsonData = _jsonFile["json"];
          _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
          _this.loadData();
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  titleScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b451edfN1IC5ypF1ihK51X", "titleScript");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.profileSet = false;
        _this.userAction = true;
        _this.titleProgressDone = false;
        _this.timer = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        cc.director.preloadScene("1");
        cc.director.loadScene("1");
      };
      NewClass.prototype.start = function() {
        var _this = this;
        this.node.getChildByName("Character").getComponent(cc.Animation).play();
        this.scheduleOnce(function() {}, .1);
        this.scheduleOnce(function() {
          _this.node.getChildByName("curtain").getComponent(cc.Animation).play();
        }, .5);
      };
      NewClass.prototype.loadData = function() {
        cc.resources.load("/Quiz_01_01_b");
        cc.resources.load("/3");
        cc.resources.load("/8");
      };
      NewClass.prototype.LoadQuestion = function() {
        var _this = this;
        cc.resources.load("storyBoard", Object, function(_error, _jsonFile) {
          if (_error) {
            console.error(_error.message || _error);
            return;
          }
          var _jsonData = _jsonFile["json"];
          _this.data = JSON.parse(JSON.stringify(_jsonData["data"]));
          _this.loadData();
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  video: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "959f7A5jptMGpxTvBXeyZrl", "video");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StartGame_1 = require("../../Framework/Scripts/StartGame");
    cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuestionData = function() {
      function QuestionData() {
        this.questionTime = 0;
        this.isoptionText = false;
        this.isquestionText = false;
        this.questionImg = null;
        this.questionAudio = null;
        this.questionText = "";
        this.optionImgs = [];
        this.optionTexts = [];
        this.reiterationAudio = null;
        this.correctAudio = null;
        this.wrongAudio = null;
        this.correctAnswer = 1;
      }
      QuestionData = __decorate([ ccclass("QuestionData") ], QuestionData);
      return QuestionData;
    }();
    var video = function(_super) {
      __extends(video, _super);
      function video() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tools = null;
        _this.questionNode = null;
        _this.character = null;
        _this.starsPanel = null;
        _this.bgMusic = null;
        _this.correctSound = null;
        _this.starSprites = [];
        _this.jaipuria_font = null;
        _this.podar_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.positiveVO = [];
        _this.duration = 0;
        _this.slider = null;
        _this.toolActivater = null;
        _this.questions = [];
        _this.isSliding = false;
        _this.currentTime = 0;
        _this.timers = [];
        _this.totalQuestions = 0;
        _this.questionAppeared = [];
        _this.currentQuestion = 0;
        _this.answeredQuestion = [];
        _this.isPause = false;
        _this.isPlay = true;
        _this.isOnSlider = false;
        _this.canNextQuestion = true;
        _this.attemps = 0;
        _this.videoCompleted = false;
        _this.gameStarted = false;
        _this.correctAnim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_1", "positive_2", "positive_3", "positive_4", "positive_5" ];
        _this.wrongAnim = [ "negative_1", "negative_2", "negative_3", "negative_1", "negative_2", "negative_3", "negative_1", "negative_2", "negative_3" ];
        _this.puzzleCorrectAnim = [ "positive_1", "positive_2", "positive_3", "positive_1", "positive_2", "positive_3", "positive_1", "positive_2", "positive_3" ];
        _this.puzzleNegativeAnim = [ "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1", "negative_1" ];
        _this.supercubCorrectAnim = [ "positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5", "positive_3", "positive_4", "positive_5" ];
        _this.supercubNegativeAnim = [ "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4", "negative_3", "negative_4" ];
        _this.podarCorrectAnim = [ "possitive1", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6", "possitive1", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6" ];
        _this.podarNegativeAnim = [ "negetive1", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6", "negetive1", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6" ];
        return _this;
      }
      video.prototype.onLoad = function() {
        var _this = this;
        this.UpdateQuestions();
        this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
        this.scheduleOnce(function() {
          for (var i = 0; i < _this.questions.length; i++) {
            _this.timers[i] = _this.questions[i].questionTime;
            console.log("question timer = ", _this.timers[i]);
            _this.totalQuestions++;
            _this.questionAppeared[i] = false;
            _this.answeredQuestion[i] = false;
          }
        }, 1);
        this.slider.children[2].on("touchstart", function() {
          this.isSliding = false;
          this.isOnSlider = true;
        }, this);
        this.slider.children[2].on("touchmove", function() {
          this.isSliding = false;
          this.isOnSlider = true;
        }, this);
        this.slider.children[2].on("touchend", function() {
          this.UpdateSlider();
          this.isOnSlider = false;
        }, this);
        this.slider.children[2].on("touchcancel", function() {
          this.UpdateSlider();
          this.isOnSlider = false;
        }, this);
        this.slider.children[0].on("touchstart", function() {
          this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchmove", function() {
          this.isSliding = false;
        }, this);
        this.slider.children[0].on("touchend", function() {
          this.UpdateSlider();
        }, this);
      };
      video.prototype.UpdateQuestions = function() {
        var _this = this;
        if ("Podar" == StartGame_1.default.Instance.jockeyName) {
          this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
          this.questionNode.getChildByName("options1").children.forEach(function(element) {
            element.getChildByName("text").getComponent(cc.Label).font = _this.podar_font;
          });
        } else if ("tlc" == StartGame_1.default.Instance.jockeyName) {
          this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
          this.questionNode.getChildByName("options1").children.forEach(function(element) {
            element.getChildByName("text").getComponent(cc.Label).font = _this.tlc_font;
          });
        } else if ("supercub" == StartGame_1.default.Instance.jockeyName) {
          this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
          this.questionNode.getChildByName("options1").children.forEach(function(element) {
            element.getChildByName("text").getComponent(cc.Label).font = _this.supercub_font;
          });
        } else if ("bag" == StartGame_1.default.Instance.jockeyName || "cryon" == StartGame_1.default.Instance.jockeyName) {
          this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
          this.questionNode.getChildByName("options1").children.forEach(function(element) {
            element.getChildByName("text").getComponent(cc.Label).font = _this.jaipuria_font;
          });
        }
        var _loop_1 = function(i) {
          this_1.questions[i] = new QuestionData();
          this_1.questions[i].questionTime = parseInt(StartGame_1.default.Instance.questions[i].QuestionAppearTime);
          this_1.questions[i].isoptionText = StartGame_1.default.Instance.questions[i].IsOptionText;
          this_1.questions[i].isquestionText = StartGame_1.default.Instance.questions[i].IsQuestionText;
          this_1.questions[i].correctAnswer = parseInt(StartGame_1.default.Instance.questions[i].CorrectAnswer);
          this_1.questions[i].isquestionText ? this_1.questions[i].questionText = StartGame_1.default.Instance.questions[i].QuestionText : StartGame_1.default.Instance.isDemoGame ? cc.loader.load(StartGame_1.default.Instance.questions[i].QuestionImageName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            _this.questions[i].questionImg = spriteFrame;
          }) : this_1.loadSpriteFrame(StartGame_1.default.Instance.questions[i].QuestionImageName, function(spriteFrame) {
            _this.questions[i].questionImg = spriteFrame;
          });
          if (this_1.questions[i].isoptionText) for (var j = 0; j < StartGame_1.default.Instance.questions[i].Options.length; j++) this_1.questions[i].optionTexts[j] = StartGame_1.default.Instance.questions[i].Options[j]; else {
            var _loop_2 = function(j) {
              StartGame_1.default.Instance.isDemoGame ? cc.loader.load(StartGame_1.default.Instance.questions[i].Options[j], function(err, texture) {
                if (err) {
                  console.error("Failed to load image:", err);
                  return;
                }
                var spriteFrame = new cc.SpriteFrame(texture);
                _this.questions[i].optionImgs[j] = spriteFrame;
              }) : this_1.loadSpriteFrame(StartGame_1.default.Instance.questions[i].Options[j], function(spriteFrame) {
                _this.questions[i].optionImgs[j] = spriteFrame;
              });
            };
            for (var j = 0; j < StartGame_1.default.Instance.questions[i].Options.length; j++) _loop_2(j);
          }
          if (StartGame_1.default.Instance.isDemoGame) {
            cc.loader.load(StartGame_1.default.Instance.questions[i].QuestionAudioName, function(err, audioClip) {
              if (err) {
                console.error("Failed to load audio:", err);
                return;
              }
              _this.questions[i].questionAudio = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[i].ReiterationAudioName, function(err, audioClip) {
              if (err) {
                console.error("Failed to load audio:", err);
                return;
              }
              _this.questions[i].reiterationAudio = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[i].CorrectAudioName, function(err, audioClip) {
              if (err) {
                console.error("Failed to load audio:", err);
                return;
              }
              _this.questions[i].correctAudio = audioClip;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[i].WrongAudioName, function(err, audioClip) {
              if (err) {
                console.error("Failed to load audio:", err);
                return;
              }
              _this.questions[i].wrongAudio = audioClip;
            });
          } else {
            this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].QuestionAudioName, function(audioClip) {
              _this.questions[i].questionAudio = audioClip;
            });
            this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].ReiterationAudioName, function(audioClip) {
              _this.questions[i].reiterationAudio = audioClip;
            });
            this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].CorrectAudioName, function(audioClip) {
              _this.questions[i].correctAudio = audioClip;
            });
            this_1.loadAudioClip(StartGame_1.default.Instance.questions[i].WrongAudioName, function(audioClip) {
              _this.questions[i].wrongAudio = audioClip;
            });
          }
        };
        var this_1 = this;
        for (var i = 0; i < StartGame_1.default.Instance.TotalLevels; i++) _loop_1(i);
      };
      video.prototype.start = function() {
        this.playVideo1();
        for (var i = 2; i <= StartGame_1.default.Instance.questions.length; i++) {
          var star = cc.instantiate(this.starsPanel.children[0]);
          star.parent = this.starsPanel;
          star.name = i.toString();
          star.setPosition(0, 0);
        }
        this.OptionsLayout();
        if ("puzzle" == StartGame_1.default.Instance.jockeyName) {
          this.correctAnim = this.puzzleCorrectAnim;
          this.wrongAnim = this.puzzleNegativeAnim;
        } else if ("supercub" == StartGame_1.default.Instance.jockeyName) {
          this.correctAnim = this.supercubCorrectAnim;
          this.wrongAnim = this.supercubNegativeAnim;
        } else if ("Podar" == StartGame_1.default.Instance.jockeyName) {
          this.correctAnim = this.podarCorrectAnim;
          this.wrongAnim = this.podarNegativeAnim;
        }
      };
      video.prototype.playVideo1 = function() {
        var _this = this;
        this.node.on("completed", function() {
          if (this.gameStarted) {
            this.checkOnMissingQuestions();
            console.log("video completed");
            this.tools.active = false;
            this.videoCompleted = true;
          }
        }, this);
        this.node.on("playing", function() {
          var _this = this;
          this.isPlay = true;
          this.isPause = false;
          this.scheduleOnce(function() {
            _this.ActivateTools(false);
          }, 2);
        }, this);
        this.node.getComponent(cc.VideoPlayer).volume = 0;
        this.node.getComponent(cc.VideoPlayer).play();
        this.scheduleOnce(function() {
          _this.node.getComponent(cc.VideoPlayer).volume = 1;
          _this.UpdateSlider();
          _this.scheduleOnce(function() {
            _this.gameStarted = true;
          }, 1);
        }, 1);
      };
      video.prototype.ActivateTools = function(_activate) {
        var _this = this;
        void 0 === _activate && (_activate = true);
        if (_activate) {
          this.toolActivater.active = false;
          this.tools.opacity = 255;
          this.scheduleOnce(function() {
            255 != _this.tools.opacity || _this.isPause || _this.isOnSlider || _this.ActivateTools(false);
          }, 2);
        } else {
          this.toolActivater.active = true;
          this.tools.opacity = 0;
        }
      };
      video.prototype.starUpdate = function(_current, _answered, _correct) {
        void 0 === _answered && (_answered = false);
        void 0 === _correct && (_correct = true);
        for (var i = 0; i < this.starsPanel.children.length; i++) if (i == _current) {
          this.starsPanel.children[i].opacity = 255;
          _answered ? _answered && (this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = _correct ? this.starSprites[2] : this.starSprites[1]) : this.starsPanel.children[i].getComponent(cc.Sprite).spriteFrame = this.starSprites[0];
          break;
        }
      };
      video.prototype.ResumePlayButton = function() {
        cc.audioEngine.stopMusic();
        this.isPlay = true;
        this.isPause = false;
        this.node.getComponent(cc.VideoPlayer).resume();
        this.tools.getChildByName("resume").active = false;
        this.tools.getChildByName("pause").active = true;
      };
      video.prototype.PauseButton = function() {
        this.isPlay = false;
        this.isPause = true;
        this.node.getComponent(cc.VideoPlayer).pause();
        this.tools.getChildByName("resume").active = true;
        this.tools.getChildByName("pause").active = false;
        this.ActivateTools();
      };
      video.prototype.UpdateSlider = function() {
        var _this = this;
        this.isSliding = false;
        this.currentTime = this.node.getComponent(cc.VideoPlayer).getDuration() * this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        console.log("updateslider : ", Math.round(this.node.getComponent(cc.VideoPlayer).currentTime));
        this.scheduleOnce(function() {
          _this.isSliding = true;
          _this.node.getComponent(cc.VideoPlayer).pause();
          _this.node.getComponent(cc.VideoPlayer).resume();
          _this.tools.getChildByName("resume").active = false;
          _this.tools.getChildByName("pause").active = true;
        }, .2);
      };
      video.prototype.UpdateSlider2 = function() {
        var _this = this;
        this.isSliding = false;
        this.currentTime = this.node.getComponent(cc.VideoPlayer).getDuration() * this.slider.getComponent(cc.Slider).progress;
        this.node.getComponent(cc.VideoPlayer).stop();
        this.node.getComponent(cc.VideoPlayer).currentTime = this.currentTime;
        this.node.getComponent(cc.VideoPlayer).play();
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        this.scheduleOnce(function() {
          _this.node.getComponent(cc.VideoPlayer).resume();
        }, .2);
      };
      video.prototype.SliderButton = function() {
        this.isOnSlider = true;
        this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
      };
      video.prototype.OnQuestionAnswered = function(_event) {
        var _this = this;
        var input = _event.target.name;
        this.attemps++;
        if (parseInt(input) == this.questions[this.currentQuestion - 1].correctAnswer) {
          _event.target.getChildByName("green").active = true;
          cc.audioEngine.stopAllEffects();
          cc.audioEngine.playEffect(this.correctSound, false);
          null != this.questions[this.currentQuestion - 1].reiterationAudio && this.scheduleOnce(function() {
            cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1].reiterationAudio, false);
          }, .5);
          _event.target.getParent().children.forEach(function(element) {
            element.getComponent(cc.Button).interactable = false;
          });
          var num_1 = this.currentQuestion - 1;
          if (num_1 > this.correctAnim.length - 1) {
            num_1 -= this.correctAnim.length - 1;
            if (num_1 > this.correctAnim.length - 1) {
              num_1 -= this.correctAnim.length - 1;
              num_1 > this.correctAnim.length - 1 && (num_1 -= this.correctAnim.length - 1);
            }
          }
          this.scheduleOnce(function() {
            cc.audioEngine.playEffect(_this.questions[_this.currentQuestion - 1].correctAudio, false);
            _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, _this.correctAnim[num_1], false);
            _this.attemps <= 1 ? _this.starUpdate(_this.currentQuestion - 1, true, true) : _this.starUpdate(_this.currentQuestion - 1, true, false);
            _this.scheduleOnce(function() {
              _this.attemps = 0;
              _this.questionNode.active = false;
              _event.target.getParent().children.forEach(function(element) {
                cc.tween(_this.character.getChildByName("anim")).to(.5, {
                  x: -600
                }, {
                  easing: "backInOut"
                }).start();
                element.getChildByName("green").active = false;
                element.getChildByName("red").active = false;
                element.getComponent(cc.Button).interactable = true;
              });
              _this.canNextQuestion = true;
              _this.videoCompleted ? _this.checkOnMissingQuestions() : _this.ResumePlayButton();
            }, _this.getAnimDuration(_this.correctAnim[num_1]));
          }, this.questions[this.currentQuestion - 1].reiterationAudio.duration + .5);
        } else {
          cc.audioEngine.stopAllEffects();
          cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].wrongAudio, false);
          var num = this.currentQuestion - 1;
          num > this.wrongAnim.length - 1 && (num -= this.wrongAnim.length - 1);
          this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, this.wrongAnim[num], false);
          this.scheduleOnce(function() {
            _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          }, this.getAnimDuration(this.wrongAnim[num]));
          _event.target.getChildByName("red").active = true;
          _event.target.getComponent(cc.Button).interactable = false;
        }
      };
      video.prototype.OnSoundButton = function() {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(this.questions[this.currentQuestion - 1].questionAudio, false);
      };
      video.prototype.checkOnMissingQuestions = function() {
        var _this = this;
        var isEnd = true;
        for (var i = 0; i < this.questionAppeared.length; i++) if (!this.questionAppeared[i]) {
          isEnd = false;
          this.currentQuestion = i;
          console.log("activate the question");
          this.canNextQuestion = false;
          this.questionAppeared[this.currentQuestion] = true;
          this.PauseButton();
          this.questionSetup();
          this.currentQuestion++;
          this.questionNode.active = true;
          break;
        }
        if (isEnd) {
          this.character.active = false;
          this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).play().wrapMode = cc.WrapMode.Reverse;
          this.scheduleOnce(function() {
            _this.node.getParent().getChildByName("gameEnd").active = true;
            console.log("showedScreen--Excellent");
            console.log("gameEnded--true");
            "bag" == StartGame_1.default.Instance.jockeyName || "crayon" == StartGame_1.default.Instance.jockeyName ? _this.node.getParent().getChildByName("gameEnd").getChildByName("jaipuria").active = true : _this.node.getParent().getChildByName("gameEnd").getChildByName(StartGame_1.default.Instance.jockeyName).active = true;
            _this.scheduleOnce(function() {
              _this.node.active = false;
              "bag" != StartGame_1.default.Instance.jockeyName && "crayon" != StartGame_1.default.Instance.jockeyName || (_this.node.getParent().getChildByName("gameEnd").getChildByName("end").active = true);
            }, 2);
          }, this.node.getParent().getChildByName("curtain").getComponent(cc.Animation).currentClip.duration);
        }
      };
      video.prototype.questionSetup = function() {
        var _this = this;
        var current = this.currentQuestion;
        this.starUpdate(this.currentQuestion);
        this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        cc.tween(this.character.getChildByName("anim")).to(.5, {
          x: 0
        }, {
          easing: "backInOut"
        }).start();
        var id = cc.audioEngine.playMusic(this.bgMusic, true);
        this.questionNode.getChildByName("options1").active = false;
        this.questionNode.getChildByName("questionBox").active = false;
        cc.audioEngine.setVolume(id, .1);
        if (this.questions[this.currentQuestion].isquestionText) {
          this.questionNode.getChildByName("questionBox").getChildByName("text").getComponent(cc.Label).string = this.questions[this.currentQuestion].questionText;
          this.questionNode.getChildByName("questionBox").getChildByName("img").active = false;
          this.questionNode.getChildByName("questionBox").getChildByName("text").active = true;
        } else {
          this.questionNode.getChildByName("questionBox").getChildByName("text").active = false;
          this.questionNode.getChildByName("questionBox").getChildByName("img").active = true;
          this.questionNode.getChildByName("questionBox").getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.questions[this.currentQuestion].questionImg;
        }
        if (this.questions[this.currentQuestion].isoptionText) {
          var i_1 = 0;
          this.questionNode.getChildByName("options1").children.forEach(function(element) {
            element.active = false;
            if (i_1 <= _this.questions[_this.currentQuestion].optionTexts.length - 1) {
              element.active = true;
              element.getChildByName("text").getComponent(cc.Label).string = _this.questions[_this.currentQuestion].optionTexts[i_1];
              element.getChildByName("img").active = false;
              element.getChildByName("text").active = true;
            }
            i_1++;
          });
        } else {
          var i_2 = 0;
          this.questionNode.getChildByName("options1").children.forEach(function(element) {
            element.active = false;
            if (i_2 <= _this.questions[_this.currentQuestion].optionImgs.length - 1) {
              element.active = true;
              element.getChildByName("img").getComponent(cc.Sprite).spriteFrame = _this.questions[_this.currentQuestion].optionImgs[i_2];
              element.getChildByName("text").active = false;
              element.getChildByName("img").active = true;
            }
            i_2++;
          });
        }
        this.scheduleOnce(function() {
          cc.audioEngine.playEffect(_this.questions[current].questionAudio, false);
          _this.character.getComponent(cc.Animation).play("Idle");
          _this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          _this.questionNode.getChildByName("options1").active = true;
          _this.questionNode.getChildByName("questionBox").active = true;
        }, .5);
      };
      video.prototype.update = function() {
        if (this.isSliding) {
          var currentTime = this.node.getComponent(cc.VideoPlayer).currentTime;
          var duration = this.node.getComponent(cc.VideoPlayer).getDuration();
          var value = currentTime / duration;
          this.slider.getComponent(cc.Slider).progress = value;
          this.slider.getChildByName("high").width = this.slider.getChildByName("Handle").getPosition().x + 472.5;
        }
        for (var i = 0; i < this.questions.length; i++) if (Math.round(this.node.getComponent(cc.VideoPlayer).currentTime) == this.timers[i] && !this.questionAppeared[i] && this.canNextQuestion && this.gameStarted) {
          this.currentQuestion = i;
          console.log("activate the question");
          this.canNextQuestion = false;
          this.questionAppeared[this.currentQuestion] = true;
          this.PauseButton();
          this.questionSetup();
          this.currentQuestion++;
          this.questionNode.active = true;
        }
      };
      video.prototype.getAnimDuration = function(animName) {
        console.log("animation name = ", animName);
        var num = this.character.getChildByName("anim").getChildByName(StartGame_1.default.Instance.jockeyName).getComponent(sp.Skeleton).findAnimation(animName).duration;
        return num;
      };
      video.prototype.getRandomNumber = function(min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
      };
      video.prototype.OnEnd = function() {
        window.close();
      };
      video.prototype.OptionsLayout = function() {
        var optionsLayout = this.starsPanel;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalWidth = 0;
        var maxHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
          var option = optionNodes[i];
          var optionWidth = option.width;
          var optionHeight = option.height;
          totalWidth += optionWidth + paddingBetweenOptions;
          optionHeight > maxHeight && (maxHeight = optionHeight);
        }
        var availableWidth = optionsLayout.width;
        var totalWidthWithPadding = totalWidth + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableWidth / totalWidthWithPadding);
        var accumulatedWidth = 0;
        for (var i = 0; i < optionNodes.length; i++) {
          var option = optionNodes[i];
          var optionScaleFactor = scaleFactor;
          option.width *= optionScaleFactor;
          option.height *= optionScaleFactor;
          var posX = accumulatedWidth + option.width * option.anchorX;
          option.x = posX - optionsLayout.width * optionsLayout.anchorX;
          accumulatedWidth += option.width + paddingBetweenOptions;
          for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
            var subChild = _a[_i];
            subChild.x *= optionScaleFactor;
            subChild.y *= optionScaleFactor;
            subChild.width *= optionScaleFactor;
            subChild.height *= optionScaleFactor;
          }
        }
        optionsLayout.height = maxHeight * scaleFactor;
      };
      video.prototype.loadSpriteFrame = function(imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function(err, spriteFrame) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(spriteFrame);
        });
      };
      video.prototype.loadAudioClip = function(audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function(err, audioClip) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(audioClip);
        });
      };
      __decorate([ property(cc.Node) ], video.prototype, "tools", void 0);
      __decorate([ property(cc.Node) ], video.prototype, "questionNode", void 0);
      __decorate([ property(cc.Node) ], video.prototype, "character", void 0);
      __decorate([ property(cc.Node) ], video.prototype, "starsPanel", void 0);
      __decorate([ property(cc.AudioClip) ], video.prototype, "bgMusic", void 0);
      __decorate([ property(cc.AudioClip) ], video.prototype, "correctSound", void 0);
      __decorate([ property(cc.SpriteFrame) ], video.prototype, "starSprites", void 0);
      __decorate([ property(cc.Font) ], video.prototype, "jaipuria_font", void 0);
      __decorate([ property(cc.Font) ], video.prototype, "podar_font", void 0);
      __decorate([ property(cc.Font) ], video.prototype, "tlc_font", void 0);
      __decorate([ property(cc.Font) ], video.prototype, "supercub_font", void 0);
      __decorate([ property(cc.AudioClip) ], video.prototype, "positiveVO", void 0);
      __decorate([ property(cc.Node) ], video.prototype, "slider", void 0);
      __decorate([ property(cc.Node) ], video.prototype, "toolActivater", void 0);
      __decorate([ property(QuestionData) ], video.prototype, "questions", void 0);
      video = __decorate([ ccclass ], video);
      return video;
    }(cc.Component);
    exports.default = video;
    cc._RF.pop();
  }, {
    "../../Framework/Scripts/StartGame": "StartGame"
  } ]
}, {}, [ "Jockey", "ProgressBar", "CustomWidget", "CustomWidget2", "Functionalities", "Progress", "StartGame", "TextLoader", "Utility", "Utils", "CheckForInitWebView", "WebView", "CustomWidget0", "IData", "PlayVideo", "StartGame0", "demoScript", "endScreen", "gameplay", "globalVariables", "titleScript", "titleScript1", "video", "questionData", "questionManager" ]);
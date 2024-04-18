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
  EndScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "181c5Rvw5FMRYBHMOQUimbu", "EndScreen");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.star = [];
        _this.yeah = [];
        _this.podarEnd = null;
        _this.jaipuriaEnd = null;
        _this.supercubEnd = null;
        _this.tlcEnd = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        if ("Podar" == StartGame_1.default.Instance.jockeyName) this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd; else if ("supercub" == StartGame_1.default.Instance.jockeyName) this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd; else if ("tlc" == StartGame_1.default.Instance.jockeyName) this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd; else if ("bag" == StartGame_1.default.Instance.jockeyName || "cryon" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
          this.scheduleOnce(function() {
            _this.node.getChildByName("end").active = true;
          }, 2);
        }
        this.node.getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.introBG;
      };
      NewClass.prototype.start = function() {
        var _this = this;
        console.log("showedScreen--Congratulations");
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 0;
        this.scheduleOnce(function() {
          _this.node.getChildByName("awesome").getComponent(cc.Animation).play();
        }, .3);
        this.scheduleOnce(function() {
          _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
          _this.node.getComponent(cc.AudioSource).play();
          cc.tween(_this.node.getChildByName("star1")).to(.5, {
            scale: .9
          }, {
            easing: "sineInOut"
          }).start();
        }, .8);
        this.scheduleOnce(function() {
          _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
          _this.node.getComponent(cc.AudioSource).play();
          cc.tween(_this.node.getChildByName("star2")).to(.5, {
            scale: .9
          }, {
            easing: "sineInOut"
          }).start();
        }, 1.3);
        this.scheduleOnce(function() {
          _this.node.getComponent(cc.AudioSource).clip = _this.star[0];
          _this.node.getComponent(cc.AudioSource).play();
          cc.tween(_this.node.getChildByName("star3")).to(.5, {
            scale: .9
          }, {
            easing: "sineInOut"
          }).start();
        }, 1.8);
        this.scheduleOnce(function() {
          _this.node.getComponent(cc.AudioSource).clip = _this.yeah[0];
          _this.node.getComponent(cc.AudioSource).play();
          console.log("gameEnded--true");
        }, 2.3);
      };
      NewClass.prototype.OnEndBtn = function(_event) {
        window.close();
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "star", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "yeah", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "podarEnd", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "jaipuriaEnd", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "supercubEnd", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "tlcEnd", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Framework/Scripts/StartGame": "StartGame"
  } ],
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
  Gameplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9a049SRptFP5H77C66Ty44", "Gameplay");
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
    var ProgressBar_1 = require("../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar");
    var StartGame_1 = require("../../../Framework/Scripts/StartGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Gameplay = function(_super) {
      __extends(Gameplay, _super);
      function Gameplay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.supercub_font = null;
        _this.tlc_font = null;
        _this.options = null;
        _this.optionsLayout = "layout3";
        _this.correctAnswer = [];
        _this.canTouch = true;
        _this.correctCounter = 0;
        _this.numberofOptions = 5;
        _this.pop_audio = null;
        _this.positive_audio = null;
        _this.negative_audio = null;
        _this.questionAudio = null;
        _this.correctAudio = null;
        _this.wrongAudio = null;
        _this.reiterationAudio = [];
        _this.currentJockey = null;
        _this.maxLevel = 0;
        return _this;
      }
      Gameplay.prototype.onLoad = function() {};
      Gameplay.prototype.LoadQuestion = function() {
        var _this = this;
        if ("Podar" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
          this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
          this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        } else if ("tlc" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
          this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
          this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        } else if ("supercub" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
          this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
          this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        } else if ("bag" == StartGame_1.default.Instance.jockeyName || "cryon" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("layout1_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
          this.node.getChildByName("layout2_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
          this.node.getChildByName("layout3_template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
        var str = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAnswerNum;
        this.correctAnswer = str.split("").map(function(char) {
          return parseInt(char);
        });
        this.optionsLayout = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionLayout;
        this.numberofOptions = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions;
        this.options = this.node.getChildByName(this.optionsLayout);
        this.generateOptions(this.node.getChildByName(this.optionsLayout + "_template"), this.options, this.numberofOptions);
        this.maxLevel = StartGame_1.default.Instance.TotalLevels;
        StartGame_1.default.Instance.currentLevel == this.maxLevel && cc.director.preloadScene("gameEnd");
        console.log("levelStarted--" + StartGame_1.default.Instance.currentLevel);
        if (StartGame_1.default.Instance.isDemoGame) {
          cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionBgName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            _this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function(err, audioClip) {
            if (err) {
              console.error("Failed to load audio clip:", err);
              return;
            }
            _this.questionAudio = audioClip;
          });
          cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function(err, audioClip) {
            if (err) {
              console.error("Failed to load audio clip:", err);
              return;
            }
            _this.correctAudio = audioClip;
          });
          cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].wrongAudioName, function(err, audioClip) {
            if (err) {
              console.error("Failed to load audio clip:", err);
              return;
            }
            _this.wrongAudio = audioClip;
          });
          var _loop_1 = function(i) {
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName[i], function(err, audioClip) {
              if (err) {
                console.error("Failed to load audio clip:", err);
                return;
              }
              _this.reiterationAudio[i] = audioClip;
            });
          };
          for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName.length; i++) _loop_1(i);
          var _loop_2 = function(i) {
            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText ? this_1.options.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i] : cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function(err, texture) {
              if (err) {
                console.error("Failed to load image:", err);
                return;
              }
              var spriteFrame = new cc.SpriteFrame(texture);
              _this.options.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            cc.loader.load(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].optionsBg[i], function(err, texture) {
              if (err) {
                console.error("Failed to load image:", err);
                return;
              }
              var spriteFrame = new cc.SpriteFrame(texture);
              _this.options.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
          };
          var this_1 = this;
          for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) _loop_2(i);
        } else {
          this.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionBgName, function(spriteFrame) {
            _this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].questionAudioName, function(AudioClip) {
            _this.questionAudio = AudioClip;
          });
          this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].correctAudioName, function(AudioClip) {
            _this.correctAudio = AudioClip;
          });
          this.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].wrongAudioName, function(AudioClip) {
            _this.wrongAudio = AudioClip;
          });
          var _loop_3 = function(i) {
            this_2.loadAudioClip(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName[i], function(AudioClip) {
              _this.reiterationAudio[i] = AudioClip;
            });
          };
          var this_2 = this;
          for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].reiterationAudioName.length; i++) _loop_3(i);
          var _loop_4 = function(i) {
            StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].isOptionText ? this_3.options.getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i] : this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].options[i], function(spriteFrame) {
              _this.options.getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            this_3.loadSpriteFrame(StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].optionsBg[i], function(spriteFrame) {
              _this.options.getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
          };
          var this_3 = this;
          for (var i = 0; i < StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].numberOfOptions; i++) _loop_4(i);
        }
        this.currentJockey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
        this.currentJockey.active = true;
      };
      Gameplay.prototype.start = function() {
        var _this = this;
        this.LoadQuestion();
        ProgressBar_1.default.Instance.ProgressFill(StartGame_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.scheduleOnce(function() {
          _this.questionAudio && StartGame_1.default.Instance.questions[StartGame_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio && cc.audioEngine.playEffect(_this.questionAudio, false);
          if ("layout1" == _this.optionsLayout) {
            var delay = 0;
            var _loop_5 = function(i) {
              _this.options.children[i].active = false;
              _this.options.children[i].opacity = 255;
              _this.options.setPosition(0, 0);
              _this.scheduleOnce(function() {
                var element = _this.options.children[i];
                var pos = element.getPosition();
                element.setPosition(pos.x, pos.y - 850);
                element.active = true;
                cc.audioEngine.playEffect(_this.pop_audio, false);
                cc.tween(element).to(.65, {
                  y: pos.y
                }, {
                  easing: "sineInOut"
                }).start();
              }, delay);
              delay += .35;
            };
            for (var i = 0; i < _this.options.children.length; i++) _loop_5(i);
            _this.options.children.forEach(function(element) {
              element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout1, _this);
            });
          } else if ("layout2" == _this.optionsLayout) {
            _this.node.getChildByName("basket").active = true;
            _this.node.getChildByName("rope").active = true;
            var delay = 0;
            var _loop_6 = function(i) {
              _this.scheduleOnce(function() {
                cc.audioEngine.playEffect(_this.pop_audio, false);
                cc.tween(_this.options.children[i]).to(.5, {
                  opacity: 255
                }, {
                  easing: "sineInOut"
                }).start();
              }, delay);
              delay += .25;
            };
            for (var i = 0; i < _this.options.children.length; i++) _loop_6(i);
            _this.options.children.forEach(function(element) {
              element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout2, _this);
            });
          } else if ("layout3" == _this.optionsLayout) {
            var delay = 0;
            var _loop_7 = function(i) {
              _this.scheduleOnce(function() {
                cc.audioEngine.playEffect(_this.pop_audio, false);
                cc.tween(_this.options.children[i]).to(.5, {
                  opacity: 255
                }, {
                  easing: "sineInOut"
                }).start();
              }, delay);
              delay += .25;
            };
            for (var i = 0; i < _this.options.children.length; i++) _loop_7(i);
            _this.options.children.forEach(function(element) {
              element.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart_layout3, _this);
            });
          }
          _this.scheduleOnce(function() {
            if (1 == StartGame_1.default.Instance.currentLevel) {
              var hand = _this.node.getChildByName("hand");
              hand.setParent(_this.options.getChildByName(_this.correctAnswer[0].toString()));
              hand.setPosition(50, -100);
              hand.angle = 40;
              hand.setParentWithSamePos(_this.node);
              hand.active = true;
              hand.getComponent(cc.Animation).play();
            }
          }, 1);
        }, 1);
      };
      Gameplay.prototype.generateOptions = function(_template, _optionParent, _optionCount) {
        for (var i = 0; i < _optionCount; i++) {
          var _option = cc.instantiate(_template);
          _option.parent = _optionParent;
          _option.setPosition(0, 0);
          _option.active = true;
          _option.opacity = 0;
          _option.name = (i + 1).toString();
        }
        "layout3" == this.optionsLayout ? this.arrangeGridChildren(this.options, 80, _optionCount) : this.arrangeChildren(this.options, 80);
        if ("layout1" == this.optionsLayout) {
          var _laypout1posY = [ -150, 100, -100, 0, 50 ];
          for (var i = 0; i < _optionParent.children.length; i++) _optionParent.children[i].setPosition(_optionParent.children[i].x, _laypout1posY[i]);
        }
        _template.destroy();
      };
      Gameplay.prototype.onTouchStart_layout1 = function(event) {
        var _this = this;
        if (!this.canTouch) return;
        this.node.getChildByName("hand").active = false;
        this.canTouch = false;
        var node = event.target;
        var correct = false;
        var audioNum = 0;
        for (var i = 0; i < this.correctAnswer.length; i++) if (node.name == this.correctAnswer[i].toString()) {
          correct = true;
          audioNum = i;
          break;
        }
        if (correct) {
          cc.audioEngine.playEffect(this.positive_audio, false);
          console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
          this.correctCounter++;
          cc.tween(node).to(1, {
            y: 1200
          }, {
            easing: "sineInOut"
          }).call(function() {
            _this.reiterationAudio[audioNum] ? cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false) : _this.reiterationAudio[0] && cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
            node.active = false;
            if (_this.correctCounter == _this.correctAnswer.length) {
              console.log("all the options are answered correctly");
              cc.tween(_this.options).bezierTo(1, cc.v2(-100, 300), cc.v2(0, 0), cc.v2(100, -1200)).start();
              _this.LoadNextQuestion();
            } else _this.canTouch = true;
          }).start();
        } else {
          this.callNegativeRection();
          console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
          var posX = node.getPosition().x;
          cc.tween(node).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).start();
          cc.tween(node).to(.1, {
            x: posX - 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX + 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX - 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX + 20
          }).to(.1, {
            x: posX
          }).call(function() {}).start();
        }
      };
      Gameplay.prototype.onTouchStart_layout2 = function(event) {
        var _this = this;
        if (!this.canTouch) return;
        this.node.getChildByName("hand").active = false;
        this.canTouch = false;
        var node = event.target;
        var correct = false;
        var audioNum = 0;
        for (var i = 0; i < this.correctAnswer.length; i++) if (node.name == this.correctAnswer[i].toString()) {
          correct = true;
          audioNum = i;
          break;
        }
        if (correct) {
          cc.audioEngine.playEffect(this.positive_audio, false);
          console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
          node.getComponent(cc.Animation).stop();
          node.angle = 0;
          this.correctCounter++;
          var _clone_1 = cc.instantiate(node);
          _clone_1.parent = node;
          _clone_1.setPosition(0, 0);
          var _parentNode = this.node.getChildByName("basket").getChildByName("answered").getChildByName(this.correctCounter.toString());
          _clone_1.setParentWithSamePos(_parentNode);
          node.active = false;
          _clone_1.getComponent(cc.Animation).stop();
          _clone_1.angle = 0;
          var pos = _clone_1.getPosition();
          cc.tween(_clone_1).bezierTo(1, cc.v2(pos.x / 2, pos.y + 200), cc.v2(pos.x / 4, pos.y), cc.v2(0, 0)).start();
          this.scheduleOnce(function() {
            _clone_1.getComponent(cc.Animation).stop();
            _clone_1.angle = 0;
            _this.reiterationAudio[audioNum] ? cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false) : _this.reiterationAudio[0] && cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
            if (_this.correctCounter == _this.correctAnswer.length) {
              console.log("all the options are answered correctly");
              cc.tween(_this.options).to(1, {
                x: -1500
              }, {
                easing: "backInOut"
              }).start();
              _this.LoadNextQuestion();
            } else _this.canTouch = true;
          }, 1);
        } else {
          this.callNegativeRection();
          console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
          var posX = node.getPosition().x;
          cc.tween(node).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).start();
          cc.tween(node).to(.1, {
            x: posX - 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX + 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX - 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX + 20
          }).to(.1, {
            x: posX
          }).call(function() {}).start();
        }
      };
      Gameplay.prototype.onTouchStart_layout3 = function(event) {
        var _this = this;
        if (!this.canTouch) return;
        this.node.getChildByName("hand").active = false;
        this.canTouch = false;
        var node = event.target;
        var correct = false;
        var audioNum = 0;
        for (var i = 0; i < this.correctAnswer.length; i++) if (node.name == this.correctAnswer[i].toString()) {
          correct = true;
          audioNum = i;
          break;
        }
        if (correct) {
          cc.audioEngine.playEffect(this.positive_audio, false);
          console.log("correctAnswer--" + StartGame_1.default.Instance.currentLevel);
          this.correctCounter++;
          var _clone = cc.instantiate(node);
          _clone.parent = node;
          _clone.setPosition(0, 0);
          _clone.setParentWithSamePos(this.node);
          _clone.children[0].active = true;
          _clone.children[0].opacity = 0;
          node.active = false;
          cc.tween(_clone.children[0]).to(1, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).call(function() {
            _this.reiterationAudio[audioNum] ? cc.audioEngine.playEffect(_this.reiterationAudio[audioNum], false) : _this.reiterationAudio[0] && cc.audioEngine.playEffect(_this.reiterationAudio[0], false);
            if (_this.correctCounter == _this.correctAnswer.length) {
              console.log("all the options are answered correctly");
              _this.LoadNextQuestion();
            } else _this.canTouch = true;
          }).start();
        } else {
          this.callNegativeRection();
          console.log("wrongAnswer--" + StartGame_1.default.Instance.currentLevel);
          var posX = node.getPosition().x;
          cc.tween(node).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).to(.1, {
            color: cc.Color.RED
          }).to(.1, {
            color: cc.Color.WHITE
          }).start();
          cc.tween(node).to(.1, {
            x: posX - 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX + 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX - 20
          }).to(.1, {
            x: posX
          }).to(.1, {
            x: posX + 20
          }).to(.1, {
            x: posX
          }).call(function() {}).start();
        }
      };
      Gameplay.prototype.LoadNextQuestion = function() {
        var _this = this;
        this.node.getChildByName("confetti").active = true;
        ProgressBar_1.default.Instance.createStarTrails(6, this.node);
        this.scheduleOnce(function() {
          ProgressBar_1.default.Instance.ProgressFill(StartGame_1.default.Instance.currentLevel);
          _this.scheduleOnce(function() {
            _this.callJockey();
          }, 1);
        }, 1.5);
      };
      Gameplay.prototype.callNextLevel = function() {
        console.log("levelComplete--" + StartGame_1.default.Instance.currentLevel);
        if (StartGame_1.default.Instance.currentLevel >= StartGame_1.default.Instance.TotalLevels) cc.director.loadScene("gameEnd"); else {
          StartGame_1.default.Instance.currentLevel++;
          cc.director.loadScene("1");
        }
      };
      Gameplay.prototype.callJockey = function() {
        var _this = this;
        var anim = [];
        "Podar" == StartGame_1.default.Instance.jockeyName ? anim = [ "possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6" ] : "tlc" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6" ] : "supercub" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_3", "positive_4", "positive_3", "positive_4", "positive_5" ] : "bag" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5" ] : "cryon" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5" ] : "Singham" == StartGame_1.default.Instance.jockeyName ? anim = [ "dance", "thumbs_up" ] : "Mighty_Raju" == StartGame_1.default.Instance.jockeyName ? anim = [ "celebration", "well_done" ] : "stallion" == StartGame_1.default.Instance.jockeyName && (anim = [ "positive_1", "positive_2", "positive_3", "positive_4" ]);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        var pos = [ -1600, 1600 ];
        var jockeytween = [ -450, 450 ];
        if ("supercub" == StartGame_1.default.Instance.jockeyName) {
          pos = [ 1900, 1900 ];
          jockeytween = [ 870, 870 ];
        }
        this.currentJockey.setPosition(pos[StartGame_1.default.Instance.currentLevel % 2], this.currentJockey.y);
        if (StartGame_1.default.Instance.currentLevel % 2 == 0 && "stallion" == StartGame_1.default.Instance.jockeyName) this.currentJockey.scaleX = -.65; else if ("stallion" == StartGame_1.default.Instance.jockeyName) {
          this.currentJockey.scaleX = .65;
          this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        } else "Podar" == StartGame_1.default.Instance.jockeyName ? this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true) : this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        cc.tween(this.currentJockey).to(.5, {
          x: jockeytween[StartGame_1.default.Instance.currentLevel % 2]
        }, {
          easing: "quartInOut"
        }).start();
        this.scheduleOnce(function() {
          _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
          cc.audioEngine.playEffect(_this.correctAudio, false);
          _this.scheduleOnce(function() {
            cc.tween(_this.currentJockey).to(.5, {
              x: pos[StartGame_1.default.Instance.currentLevel % 2]
            }, {
              easing: "quartInOut"
            }).start();
            "stallion" != StartGame_1.default.Instance.jockeyName && ("Podar" == StartGame_1.default.Instance.jockeyName ? _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true) : _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true));
            _this.callNextLevel();
          }, _this.correctAudio.duration);
        }, .5);
      };
      Gameplay.prototype.callNegativeRection = function() {
        var _this = this;
        cc.audioEngine.playEffect(this.negative_audio, false);
        this.scheduleOnce(function() {
          var anim = [];
          "Podar" == StartGame_1.default.Instance.jockeyName ? anim = [ "negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6" ] : "tlc" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_1", "negative_2", "negative_3" ] : "supercub" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_3", "negative_4", "negative_3", "negative_4" ] : "bag" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_1", "negative_2", "negative_3" ] : "cryon" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_1", "negative_2", "negative_3", "negative_4" ] : "Singham" == StartGame_1.default.Instance.jockeyName ? anim = [ "no" ] : "Mighty_Raju" == StartGame_1.default.Instance.jockeyName ? anim = [ "try_again" ] : "stallion" == StartGame_1.default.Instance.jockeyName && (anim = [ "negative_1", "negative_2" ]);
          var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
          _this.currentJockey.setPosition(1600, _this.currentJockey.y);
          var posX = 400;
          var posX_init = 1600;
          if ("supercub" == StartGame_1.default.Instance.jockeyName) {
            _this.currentJockey.setPosition(1900, _this.currentJockey.y);
            posX = 870;
            posX_init = 1900;
          }
          if ("stallion" == StartGame_1.default.Instance.jockeyName) {
            _this.currentJockey.scaleX = .65;
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
          } else "Podar" == StartGame_1.default.Instance.jockeyName ? _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true) : _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          cc.tween(_this.currentJockey).to(.5, {
            x: posX
          }, {
            easing: "quartInOut"
          }).start();
          _this.scheduleOnce(function() {
            _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.wrongAudio, false);
            _this.scheduleOnce(function() {
              cc.tween(_this.currentJockey).to(.5, {
                x: posX_init
              }, {
                easing: "quartInOut"
              }).start();
              "stallion" != StartGame_1.default.Instance.jockeyName && ("Podar" == StartGame_1.default.Instance.jockeyName ? _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idel", true) : _this.currentJockey.getComponent(sp.Skeleton).setAnimation(0, "idle", true));
              _this.canTouch = true;
              _this.questionAudio && cc.audioEngine.playEffect(_this.questionAudio, false);
            }, _this.wrongAudio.duration);
          }, .5);
        }, .7);
      };
      Gameplay.prototype.arrangeChildren = function(centerNode, spacing) {
        var children = centerNode.children;
        var totalWidth = 0;
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
          var child = children_1[_i];
          totalWidth += child.width;
        }
        totalWidth += spacing * (children.length - 1);
        var startX = -totalWidth / 2;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          child.x = startX + child.width / 2;
          startX += child.width + spacing;
        }
      };
      Gameplay.prototype.arrangeGridChildren = function(centerNode, spacing, _optionCount) {
        var children = centerNode.children;
        var maxColumns = 3;
        4 == _optionCount && (maxColumns = 2);
        var totalRows = Math.ceil(children.length / maxColumns);
        var rowHeight = 0;
        children.length > 0 && (rowHeight = children[0].height + spacing);
        var startY = (totalRows - 1) * rowHeight / 2;
        for (var i = 0; i < children.length; i++) {
          var column = i % maxColumns;
          var row = Math.floor(i / maxColumns);
          var totalWidth = 0;
          for (var j = 0; j < maxColumns && row * maxColumns + j < children.length; j++) totalWidth += children[row * maxColumns + j].width;
          totalWidth += spacing * (Math.min(children.length - row * maxColumns, maxColumns) - 1);
          var startX = -totalWidth / 2;
          var child = children[i];
          child.x = startX + column * (child.width + spacing) + child.width / 2;
          child.y = startY - row * rowHeight;
        }
      };
      Gameplay.prototype.getRandomNumber = function(min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
      };
      Gameplay.prototype.loadSpriteFrame = function(imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function(err, spriteFrame) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(spriteFrame);
        });
      };
      Gameplay.prototype.loadAudioClip = function(audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function(err, audioClip) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(audioClip);
        });
      };
      __decorate([ property(cc.Font) ], Gameplay.prototype, "podar_font", void 0);
      __decorate([ property(cc.Font) ], Gameplay.prototype, "jaipuria_font", void 0);
      __decorate([ property(cc.Font) ], Gameplay.prototype, "supercub_font", void 0);
      __decorate([ property(cc.Font) ], Gameplay.prototype, "tlc_font", void 0);
      __decorate([ property(cc.AudioClip) ], Gameplay.prototype, "pop_audio", void 0);
      __decorate([ property(cc.AudioClip) ], Gameplay.prototype, "positive_audio", void 0);
      __decorate([ property(cc.AudioClip) ], Gameplay.prototype, "negative_audio", void 0);
      Gameplay = __decorate([ ccclass ], Gameplay);
      return Gameplay;
    }(cc.Component);
    exports.default = Gameplay;
    cc._RF.pop();
  }, {
    "../../../Framework/Prefabs/Progressbar/Scripts/ProgressBar": "ProgressBar",
    "../../../Framework/Scripts/StartGame": "StartGame"
  } ],
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
        _this.currentLevel = 1;
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        _this.jockey = null;
        _this.playBtn_audio = null;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        _this.timer = 0;
        _this.isLoaded = false;
        _this.activateHint = false;
        _this.isDemoGame = false;
        _this.introBG = null;
        _this.gameID = "";
        _this.titleImageName = "";
        _this.jockeyName = "";
        _this.questions = [];
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
          console.log("Question Image Name:", question.questionBgName);
          console.log("Question Audio Name:", question.questionAudioName);
          console.log("Correct Answer Number:", question.correctAnswerNum);
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
          this.gameID = jsonData.additionalData.GameID;
          var levelCount = jsonData.additionalData.totalLevel;
          this.TotalLevels = parseInt(levelCount);
          this.titleImageName = jsonData.additionalData.TitleImageName;
          this.jockeyName = jsonData.additionalData.JockeyName;
          this.questions = jsonData.questionData;
          console.log("BGM music name = ", jsonData.additionalData.bgmMusicName);
          cc.loader.load(this.titleImageName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          cc.loader.load(jsonData.additionalData.bgmMusicName, function(err, audioClip) {
            if (err) {
              console.error("Failed to load audio clip:", err);
              return;
            }
            _this.BGM_audio = audioClip;
            var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
            cc.audioEngine.setVolume(id, _this.volume);
          });
          cc.loader.load(jsonData.additionalData.introBgName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            _this.introBG = spriteFrame;
          });
          this.questions.forEach(function(question) {});
          this.logData();
        } else cc.loader.loadRes("game_data", cc.JsonAsset, function(err, jsonAsset) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          var jsonData = jsonAsset.json;
          _this.gameID = jsonData.additionalData.GameID;
          var levelCount = jsonData.additionalData.totalLevel;
          _this.TotalLevels = parseInt(levelCount);
          _this.titleImageName = jsonData.additionalData.TitleImageName;
          _this.jockeyName = jsonData.additionalData.JockeyName;
          _this.questions = jsonData.questionData;
          _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.TitleImageName), function(spriteFrame) {
            cc.find("Canvas").getChildByName("bg").getChildByName("Title").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.introBgName), function(spriteFrame) {
            cc.find("Canvas").getChildByName("bg").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            _this.introBG = spriteFrame;
          });
          _this.loadAudioClip(_this.removeAudioExtension(jsonData.additionalData.bgmMusicName), function(AudioClip) {
            _this.BGM_audio = AudioClip;
            var id = cc.audioEngine.playMusic(_this.BGM_audio, true);
            cc.audioEngine.setVolume(id, _this.volume);
          });
          _this.questions.forEach(function(question) {
            question.questionBgName = _this.removeExtension(question.questionBgName);
            question.options = question.options.map(function(option) {
              return _this.removeExtension(option);
            });
            question.optionsBg = question.optionsBg.map(function(optionsBg) {
              return _this.removeExtension(optionsBg);
            });
            question.questionAudioName = _this.removeAudioExtension(question.questionAudioName);
            question.correctAudioName = _this.removeAudioExtension(question.correctAudioName);
            question.wrongAudioName = _this.removeAudioExtension(question.wrongAudioName);
            question.reiterationAudioName = question.reiterationAudioName.map(function(reiterationAudioName) {
              return _this.removeAudioExtension(reiterationAudioName);
            });
          });
          _this.logData();
        });
      };
      startGame.prototype.start = function() {
        var _this = this;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var isAudio = url.searchParams.get("soundSetting");
        var age = url.searchParams.get("age");
        var access = url.searchParams.get("access");
        var mobile = url.searchParams.get("mobile");
        var level = url.searchParams.get("level");
        var premium = url.searchParams.get("premium");
        var isPremium = url.searchParams.get("isPremium");
        var demo = url.searchParams.get("isdemo");
        if ("true" == demo) {
          this.isDemoGame = true;
          console.log("It is a demo game");
        }
        this.updateJSONdata();
        null != premium && (this.premiumLevel = parseInt(premium));
        if (null != level) {
          this.NextSceneName = level;
          parseInt(this.NextSceneName) >= this.TotalLevels && (this.NextSceneName = this.TotalLevels.toString());
        }
        this.hasMobile = "1" == mobile;
        this.hasAccess = "1" == access;
        this.isPremiumGame || (this.hasAccess = true);
        "1" == isPremium ? this.isMusicOn = true : "0" == isPremium && (this.isMusicOn = false);
        var ageValue = parseInt(age);
        this.isAgeParameterNeeded && (ageValue <= this.LevelAgeParameters[0] ? this.levelType = "1" : this.LevelAgeParameters.length > 1 && (ageValue > this.LevelAgeParameters[0] && ageValue <= this.LevelAgeParameters[1] ? this.levelType = "2" : this.LevelAgeParameters.length > 2 && (ageValue > this.LevelAgeParameters[1] && ageValue <= this.LevelAgeParameters[2] ? this.levelType = "3" : this.LevelAgeParameters.length > 3 && (ageValue > this.LevelAgeParameters[2] && ageValue <= this.LevelAgeParameters[3] ? this.levelType = "4" : this.LevelAgeParameters.length > 4 && ageValue > this.LevelAgeParameters[3] && ageValue <= this.LevelAgeParameters[4] && (this.levelType = "5")))));
        cc.director.preloadScene(this.NextSceneName);
        this.scheduleOnce(function() {
          console.log("jockey name = ", _this.jockeyName);
          "Podar" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true : "stallion" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("stallion").active = true : "tlc" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active = true : "supercub" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("supercub").active = true : "bag" != _this.jockeyName && "cryon" != _this.jockeyName || (cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true);
          "bag" != _this.jockeyName && "cryon" != _this.jockeyName && _this.scheduleOnce(function() {
            cc.director.loadScene(_this.NextSceneName);
          }, 2);
        }, 1);
      };
      startGame.prototype.OnMusic = function(event) {
        if (event.target.children[0].activeInHierarchy) {
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
      startGame.prototype.OnPlayBtn = function(_event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        cc.director.loadScene(this.NextSceneName);
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
      __decorate([ property(cc.Node) ], startGame.prototype, "jockey", void 0);
      __decorate([ property(cc.AudioClip) ], startGame.prototype, "playBtn_audio", void 0);
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
  } ]
}, {}, [ "Jockey", "ProgressBar", "CustomWidget", "CustomWidget2", "Functionalities", "Progress", "StartGame", "TextLoader", "Utility", "Utils", "CheckForInitWebView", "WebView", "EndScreen", "Gameplay" ]);
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
      ProgressBar.prototype.ProgressFill = function(_currentQues) {
        var particles = this.node.getChildByName("particles1");
        var maxLevels = StartGame_1.default.Instance.totalLevels;
        var value = _currentQues / maxLevels;
        cc.tween(this.node.getComponent(cc.ProgressBar)).to(.5, {
          progress: value
        }, {
          easing: "sineInOut"
        }).start();
        this.node.addComponent(cc.AudioSource).clip = this.starPopSound;
        this.node.addComponent(cc.AudioSource).play();
        _currentQues < maxLevels && _currentQues < maxLevels / 2 && 0 != _currentQues ? cc.tween(this.node.getChildByName("stars").children[0]).to(.5, {
          opacity: 255
        }, {
          easing: "sineInOut"
        }).start() : _currentQues >= maxLevels / 2 && _currentQues < maxLevels ? cc.tween(this.node.getChildByName("stars").children[1]).to(.5, {
          opacity: 255
        }, {
          easing: "sineInOut"
        }).start() : _currentQues >= maxLevels && cc.tween(this.node.getChildByName("stars").children[2]).to(.5, {
          opacity: 255
        }, {
          easing: "sineInOut"
        }).start();
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
                _this.isVertical ? cc.tween(particles).bezierTo(.75, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), new cc.Vec2(_this.node.x, _this.node.y - 2 * _offset - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + _this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress)).start() : cc.tween(particles).bezierTo(.75, new cc.Vec2(particles.x, particles.y), new cc.Vec2(_this.getRandomNumber(particles.x - 100, particles.x + 100), _this.getRandomNumber(particles.y - 500, particles.y + 200)), new cc.Vec2(_this.node.x - 2 * _offset - _this.node.getComponent(cc.ProgressBar).totalLength / 2 + _this.node.getComponent(cc.ProgressBar).totalLength * _this.node.getComponent(cc.ProgressBar).progress, _this.node.y)).start();
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
    var globalVariables_1 = require("../../Games/WhatWillHappenNext/Scripts/globalVariables");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var startGame = function(_super) {
      __extends(startGame, _super);
      function startGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.BGM_audio = null;
        _this.volume = .1;
        _this.NextSceneName = "1";
        _this.isAgeParameterNeeded = true;
        _this.LevelAgeParameters = [ 3, 5, 7 ];
        _this.isMusicOn = true;
        _this.playBtn_audio = null;
        _this.levelType = "1";
        _this.currentLevel = "1";
        _this.hasAccess = false;
        _this.hasMobile = false;
        _this.mobileNumber = null;
        _this.isPremiumGame = false;
        _this.isMobileNumberPriority = false;
        _this.premiumLevel = 3;
        _this.mainBg = null;
        _this.jockey = null;
        _this.JockeyNode = null;
        _this.firstClick = 1;
        _this.clickEvent = false;
        _this.totalLevels = 7;
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
        console.log("Game ID:", this.gameID);
        console.log("Total Levels:", this.totalLevels);
        console.log("BGM audio name:", this.BGM_audio.name);
        console.log("Title Image Name:", this.titleImageName);
        console.log("Jockey Name:", this.jockeyName);
        this.questions.forEach(function(question, index) {
          console.log("Question " + (index + 1) + ":");
          console.log("Question Image Name:", question.questionImageName);
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
          this.totalLevels = parseInt(levelCount);
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
          cc.loader.load(jsonData.additionalData.mainBgName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            _this.mainBg = spriteFrame;
          });
          this.questions.forEach(function(question) {
            question.questionImageName = question.questionImageName;
          });
        } else cc.loader.loadRes("game_data", cc.JsonAsset, function(err, jsonAsset) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          var jsonData = jsonAsset.json;
          _this.gameID = jsonData.additionalData.GameID;
          var levelCount = jsonData.additionalData.totalLevel;
          _this.totalLevels = parseInt(levelCount);
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
          _this.loadSpriteFrame(_this.removeExtension(jsonData.additionalData.mainBgName), function(spriteFrame) {
            _this.mainBg = spriteFrame;
          });
          _this.questions.forEach(function(question) {
            question.questionImageName = _this.removeExtension(question.questionImageName);
            question.commonOptionImageName = _this.removeExtension(question.commonOptionImageName);
            question.options = question.options.map(function(option) {
              return _this.removeExtension(option);
            });
          });
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
        var demo = url.searchParams.get("isdemo");
        if ("true" == demo) {
          this.isDemoGame = true;
          console.log("It is a demo game");
        }
        this.updateJSONdata();
        null != premium && (this.premiumLevel = parseInt(premium));
        globalVariables_1.default.Instance.currentLevel = 1;
        this.hasMobile = "1" == mobile;
        this.hasAccess = "1" == access;
        this.isPremiumGame || (this.hasAccess = true);
        var id = cc.audioEngine.playMusic(this.BGM_audio, true);
        cc.audioEngine.setVolume(id, this.volume);
        if ("false" == isAudio) {
          this.node.getChildByName("music").children[0].active = true;
          this.isMusicOn = false;
          cc.audioEngine.stopMusic();
        } else {
          this.node.getChildByName("music").children[0].active = false;
          this.isMusicOn = true;
          var id_1 = cc.audioEngine.playMusic(this.BGM_audio, true);
          cc.audioEngine.setVolume(id_1, this.volume);
        }
        var ageValue = parseInt(age);
        this.isAgeParameterNeeded && (ageValue <= this.LevelAgeParameters[0] ? this.levelType = "1" : this.LevelAgeParameters.length > 1 && (ageValue > this.LevelAgeParameters[0] && ageValue <= this.LevelAgeParameters[1] ? this.levelType = "2" : this.LevelAgeParameters.length > 2 && (ageValue > this.LevelAgeParameters[1] && ageValue <= this.LevelAgeParameters[2] ? this.levelType = "3" : this.LevelAgeParameters.length > 3 && (ageValue > this.LevelAgeParameters[2] && ageValue <= this.LevelAgeParameters[3] ? this.levelType = "4" : this.LevelAgeParameters.length > 4 && ageValue > this.LevelAgeParameters[3] && ageValue <= this.LevelAgeParameters[4] && (this.levelType = "5")))));
        cc.director.preloadScene("1");
        this.scheduleOnce(function() {
          console.log("jockey name = ", _this.jockeyName);
          "Podar" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("podar").active = true : "tlc" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("tlc").active = true : "supercub" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("supercub").active = true : "stallion" == _this.jockeyName ? cc.find("Canvas").getChildByName("bg").getChildByName("stallion").active = true : "bag" != _this.jockeyName && "cryon" != _this.jockeyName || (cc.find("Canvas").getChildByName("bg").getChildByName("jaipuria").active = true);
          "bag" != _this.jockeyName && "cryon" != _this.jockeyName && _this.scheduleOnce(function() {
            cc.director.loadScene("1");
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
      startGame.prototype.OnPlayBtn = function(_event) {
        _event.target.getComponent(cc.Button).interactable = false;
        cc.audioEngine.playEffect(this.playBtn_audio, false);
        cc.director.loadScene("1");
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
      __decorate([ property(cc.Boolean) ], startGame.prototype, "isAgeParameterNeeded", void 0);
      __decorate([ property(Number) ], startGame.prototype, "LevelAgeParameters", void 0);
      __decorate([ property(cc.AudioClip) ], startGame.prototype, "playBtn_audio", void 0);
      __decorate([ property(Boolean) ], startGame.prototype, "isPremiumGame", void 0);
      __decorate([ property(Boolean) ], startGame.prototype, "isMobileNumberPriority", void 0);
      __decorate([ property(Number) ], startGame.prototype, "premiumLevel", void 0);
      __decorate([ property(cc.Node) ], startGame.prototype, "jockey", void 0);
      __decorate([ property(Number) ], startGame.prototype, "totalLevels", void 0);
      startGame = startGame_1 = __decorate([ ccclass ], startGame);
      return startGame;
    }(cc.Component);
    exports.default = startGame;
    cc._RF.pop();
  }, {
    "../../Games/WhatWillHappenNext/Scripts/globalVariables": "globalVariables"
  } ],
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
  Title: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0033ekDx7dHMarG9YUqBQup", "Title");
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
      NewClass.prototype.onLoad = function() {
        cc.director.preloadScene("1");
      };
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
        _this.currentAnswer = "";
        _this.currentMobile = "";
        _this.maxStringLength = 3;
        _this.MobileNumberNeeded = false;
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
        this.MobileNumberNeeded = isMobileNumberNeeded;
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
      WebView = WebView_1 = __decorate([ ccclass ], WebView);
      return WebView;
    }(cc.Component);
    exports.default = WebView;
    cc._RF.pop();
  }, {
    "../../../Framework/Scripts/StartGame": "StartGame"
  } ],
  endScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12188wrDUtGT6+DUikGtBfF", "endScreen");
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
        _this.tlcEnd = null;
        _this.supercubEnd = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        if ("Podar" == StartGame_1.default.Instance.jockeyName) this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.podarEnd; else if ("bag" == StartGame_1.default.Instance.jockeyName || "cryon" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.jaipuriaEnd;
          this.scheduleOnce(function() {
            _this.node.getChildByName("end").active = true;
          }, 2);
        } else "tlc" == StartGame_1.default.Instance.jockeyName ? this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.tlcEnd : "supercub" == StartGame_1.default.Instance.jockeyName && (this.node.getChildByName("awesome").getComponent(cc.Sprite).spriteFrame = this.supercubEnd);
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
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "tlcEnd", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "supercubEnd", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Framework/Scripts/StartGame": "StartGame"
  } ],
  gameplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad4e51CcXJH24gA96gBaxOm", "gameplay");
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
    var ProgressBar_1 = require("../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar");
    var StartGame_1 = require("../../../Framework/Scripts/StartGame");
    var globalVariables_1 = require("./globalVariables");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.extraImg = null;
        _this.podar_font = null;
        _this.jaipuria_font = null;
        _this.tlc_font = null;
        _this.supercub_font = null;
        _this.popSound = [];
        _this.popSound2 = [];
        _this.questionSound = [];
        _this.positiveSound = [];
        _this.negativeSound = [];
        _this.positiveAudio = [];
        _this.negativeAudio = [];
        _this.stallionPositive = [];
        _this.stallionNegative = [];
        _this.bagPositive = [];
        _this.bagNegative = [];
        _this.cryonPositive = [];
        _this.cryonNegative = [];
        _this.tlcPositive = [];
        _this.tlcNegative = [];
        _this.supercubPositive = [];
        _this.supercubNegative = [];
        _this.tlc_birdFlying = null;
        _this.supercub_Pos1 = null;
        _this.supercub_Pos2 = null;
        _this.supercub_Neg1 = null;
        _this.supercub_Neg2 = null;
        _this.defaultMat = null;
        _this.greyMat = null;
        _this.isFirstClick = false;
        _this.canTouch = false;
        _this.answerArray = [];
        _this.maxLevel = 7;
        _this.wrongAnswerCount = 0;
        _this.star1Log = false;
        _this.star2Log = false;
        _this.star3Log = false;
        _this.currentJcokey = null;
        _this.correctAudio = null;
        _this.optionsNode = null;
        _this.questionBoxPosY = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        if ("Podar" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
          this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.podar_font;
        } else if ("tlc" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
          this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.tlc_font;
        } else if ("supercub" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
          this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.supercub_font;
        } else if ("bag" == StartGame_1.default.Instance.jockeyName || "cryon" == StartGame_1.default.Instance.jockeyName) {
          this.node.getChildByName("template").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
          this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).font = this.jaipuria_font;
        }
        this.optionsNode = this.node.getChildByName("Option");
        this.GenerateOptions();
        this.maxLevel = StartGame_1.default.Instance.totalLevels;
        globalVariables_1.default.Instance.currentLevel == this.maxLevel && cc.director.preloadScene("endScreen");
        console.log("levelStarted--" + globalVariables_1.default.Instance.currentLevel);
        this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = StartGame_1.default.Instance.mainBg;
        if (StartGame_1.default.Instance.isDemoGame) {
          cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function(err, audioClip) {
            if (err) {
              console.error("Failed to load audio clip:", err);
              return;
            }
            _this.questionSound[0] = audioClip;
          });
          cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudioName, function(err, audioClip) {
            if (err) {
              console.error("Failed to load audio clip:", err);
              return;
            }
            _this.correctAudio = audioClip;
          });
          "" != StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName && cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            _this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) _this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function(err, texture) {
            if (err) {
              console.error("Failed to load image:", err);
              return;
            }
            var spriteFrame = new cc.SpriteFrame(texture);
            _this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          var _loop_1 = function(i) {
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText ? this_1.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i] : cc.loader.load(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function(err, texture) {
              if (err) {
                console.error("Failed to load image:", err);
                return;
              }
              var spriteFrame = new cc.SpriteFrame(texture);
              _this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
          };
          var this_1 = this;
          for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) _loop_1(i);
        } else {
          this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionAudioName, function(AudioClip) {
            _this.questionSound[0] = AudioClip;
          });
          this.loadAudioClip(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAudioName, function(AudioClip) {
            _this.correctAudio = AudioClip;
          });
          "" != StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName && this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].commonOptionImageName, function(spriteFrame) {
            _this.node.getChildByName("QuestionBox").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) _this.node.getChildByName("Option").getChildByName((i + 1).toString()).getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          this.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionImageName, function(spriteFrame) {
            _this.node.getChildByName("QuestionBox").getChildByName("ThirdObject").getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
          var _loop_2 = function(i) {
            StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].isOptionText ? this_2.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i] : this_2.loadSpriteFrame(StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].options[i], function(spriteFrame) {
              _this.node.getChildByName("Option").getChildByName((i + 1).toString()).getChildByName("img").getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
          };
          var this_2 = this;
          for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) _loop_2(i);
        }
        this.currentJcokey = StartGame_1.default.Instance.jockey.getChildByName(StartGame_1.default.Instance.jockeyName);
      };
      NewClass.prototype.start = function() {
        ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel - 1);
        StartGame_1.default.Instance.node.getChildByName("progress").opacity = 255;
        this.answerArray = [ StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].correctAnswerNum ];
        this.callThirdObjectIn();
        if ("bag" == StartGame_1.default.Instance.jockeyName) {
          this.positiveAudio = this.bagPositive;
          this.negativeAudio = this.bagNegative;
        } else if ("cryon" == StartGame_1.default.Instance.jockeyName) {
          this.positiveAudio = this.cryonPositive;
          this.negativeAudio = this.cryonNegative;
        } else if ("stallion" == StartGame_1.default.Instance.jockeyName) {
          this.positiveAudio = this.stallionPositive;
          this.negativeAudio = this.stallionNegative;
        } else if ("tlc" == StartGame_1.default.Instance.jockeyName) {
          this.positiveAudio = this.tlcPositive;
          this.negativeAudio = this.tlcNegative;
        } else if ("supercub" == StartGame_1.default.Instance.jockeyName) {
          this.positiveAudio = this.supercubPositive;
          this.negativeAudio = this.supercubNegative;
        }
      };
      NewClass.prototype.getRandomNumber = function(min, max) {
        var _number = Math.random();
        _number = cc.misc.lerp(min, max, _number);
        _number = Math.round(_number);
        return _number;
      };
      NewClass.prototype.GenerateOptions = function() {
        for (var i = 0; i < StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].numberOfOptions; i++) {
          var option = cc.instantiate(this.node.getChildByName("template"));
          option.name = (i + 1).toString();
          option.setParent(this.node.getChildByName("Option"));
          option.setPosition(cc.v2(0, 0));
          option.opacity = 0;
        }
        this.node.getChildByName("template").destroy();
      };
      NewClass.prototype.callThirdObjectIn = function() {
        var _this = this;
        this.questionBoxPosY = this.node.getChildByName("questionPanel").y;
        this.node.getChildByName("questionPanel").setPosition(cc.v2(0, 1500));
        cc.tween(this.node.getChildByName("questionPanel")).to(1, {
          y: this.questionBoxPosY
        }, {
          easing: "sineInOut"
        }).start();
        this.node.getChildByName("questionPanel").getChildByName("text").getComponent(cc.Label).string = StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].questionText;
        this.OptionsLayoutVertical();
        this.reverseOptionsLayout();
        var posX = -237;
        "tlc" != StartGame_1.default.Instance.jockeyName && "supercub" != StartGame_1.default.Instance.jockeyName || (posX = -300);
        this.scheduleOnce(function() {
          _this.scheduleOnce(function() {
            cc.audioEngine.playEffect(_this.popSound[0], false);
            cc.tween(_this.node.getChildByName("QuestionBox")).to(1, {
              scale: 1
            }, {
              easing: "sineInOut"
            }).start();
          }, .1);
          _this.scheduleOnce(function() {
            cc.tween(_this.node.getChildByName("QuestionBox")).to(.5, {
              x: posX
            }, {
              easing: "sineInOut"
            }).start();
            _this.canTouch = true;
            _this.callOptionIn();
          }, 1);
        }, 1);
      };
      NewClass.prototype.OnVOButton = function() {
        cc.audioEngine.stopAllEffects();
        this.questionSound[0] && cc.audioEngine.playEffect(this.questionSound[0], false);
      };
      NewClass.prototype.callOptionIn = function() {
        var _this = this;
        var delay = .5;
        "tlc" != StartGame_1.default.Instance.jockeyName && "supercub" != StartGame_1.default.Instance.jockeyName || this.node.getChildByName("Option").setPosition(150, -70);
        var _loop_3 = function(i) {
          this_3.node.getChildByName("Option").children[i - 1].scale = 0;
          this_3.node.getChildByName("Option").children[i - 1].opacity = 255;
          this_3.scheduleOnce(function() {
            cc.audioEngine.playEffect(_this.popSound[0], false);
            cc.tween(_this.node.getChildByName("Option").getChildByName(i.toString())).to(.5, {
              scale: 1
            }, {
              easing: "sineInOut"
            }).start();
            i == _this.node.getChildByName("Option").children.length && _this.scheduleOnce(function() {
              _this.PlayQuestionAudio();
            }, .5);
          }, delay);
          delay += .5;
        };
        var this_3 = this;
        for (var i = 1; i <= this.node.getChildByName("Option").children.length; i++) _loop_3(i);
      };
      NewClass.prototype.PlayQuestionAudio = function() {
        var _this = this;
        this.node.getChildByName("Option").children.forEach(function(element) {
          element.getComponent(cc.Button).interactable = false;
        });
        this.currentJcokey.active = true;
        if ("tlc" != StartGame_1.default.Instance.jockeyName && "supercub" != StartGame_1.default.Instance.jockeyName) {
          StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio && cc.audioEngine.playEffect(this.questionSound[0], false);
          this.node.getChildByName("Option").children.forEach(function(element) {
            element.getComponent(cc.Button).interactable = true;
          });
          if (1 == globalVariables_1.default.Instance.currentLevel) {
            var hand = this.node.getChildByName("hand");
            console.log("answer array num = ", this.answerArray[0]);
            hand.setParent(this.node.getChildByName("Option").getChildByName(this.answerArray[0]));
            hand.setPosition(50, -50);
            hand.angle = 30;
            hand.setParentWithSamePos(this.node);
            hand.getComponent(cc.Animation).play();
          }
        } else if ("tlc" == StartGame_1.default.Instance.jockeyName || "supercub" == StartGame_1.default.Instance.jockeyName) {
          var intoAnim = "intro";
          this.currentJcokey.setPosition(450, -370);
          if ("supercub" == StartGame_1.default.Instance.jockeyName) {
            intoAnim = "intro_1";
            this.currentJcokey.setPosition(870, -370);
          }
          "tlc" == StartGame_1.default.Instance.jockeyName && cc.audioEngine.playEffect(this.tlc_birdFlying, false);
          this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, intoAnim, false);
          this.scheduleOnce(function() {
            if (StartGame_1.default.Instance.questions[globalVariables_1.default.Instance.currentLevel - 1].shouldPlayQuestionAudio) {
              cc.audioEngine.playEffect(_this.questionSound[0], false);
              _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_loop", true);
              _this.scheduleOnce(function() {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_end", false);
                _this.scheduleOnce(function() {
                  _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                  _this.node.getChildByName("Option").children.forEach(function(element) {
                    element.getComponent(cc.Button).interactable = true;
                  });
                  if (1 == globalVariables_1.default.Instance.currentLevel) {
                    var hand = _this.node.getChildByName("hand");
                    console.log("answer array num = ", _this.answerArray[0]);
                    hand.setParent(_this.node.getChildByName("Option").getChildByName(_this.answerArray[0]));
                    hand.setPosition(50, -50);
                    hand.angle = 30;
                    hand.setParentWithSamePos(_this.node);
                    hand.getComponent(cc.Animation).play();
                  }
                }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_end").duration);
              }, _this.questionSound[0].duration);
            } else {
              _this.node.getChildByName("Option").children.forEach(function(element) {
                element.getComponent(cc.Button).interactable = true;
              });
              if (1 == globalVariables_1.default.Instance.currentLevel) {
                var hand = _this.node.getChildByName("hand");
                console.log("answer array num = ", _this.answerArray[0]);
                hand.setParent(_this.node.getChildByName("Option").getChildByName(_this.answerArray[0]));
                hand.setPosition(50, -50);
                hand.angle = 30;
                hand.setParentWithSamePos(_this.node);
                hand.getComponent(cc.Animation).play();
              }
            }
          }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(intoAnim).duration);
        }
      };
      NewClass.prototype.OnButtonClick = function(_event) {
        var _this = this;
        this.node.getChildByName("Option").children.forEach(function(elem) {
          elem.getComponent(cc.Button).interactable = false;
        });
        if (!this.canTouch) return;
        if (!this.isFirstClick) {
          this.isFirstClick = true;
          console.log("firstClick--" + globalVariables_1.default.Instance.currentLevel);
        }
        1 == globalVariables_1.default.Instance.currentLevel && (this.node.getChildByName("hand").active = false);
        var _node = _event.target;
        if (_node.name == this.answerArray[0]) {
          cc.audioEngine.stopAllEffects();
          console.log("correctAnswer--" + globalVariables_1.default.Instance.currentLevel);
          cc.tween(this.node.getChildByName("questionPanel")).to(1, {
            y: 1500
          }, {
            easing: "sineInOut"
          }).start();
          this.node.getChildByName("questionPanel").getChildByName("sound").getComponent(cc.Button).interactable = false;
          this.destroyOption();
          cc.audioEngine.playEffect(this.popSound[0], false);
          this.scheduleOnce(function() {
            _this.callPositiveRection(_node);
          }, 0);
        } else {
          this.wrongAnswerCount++;
          console.log("wrongAnswer--" + globalVariables_1.default.Instance.currentLevel);
          this.callNegativeRection(_node, _event);
        }
      };
      NewClass.prototype.callNextLevel = function() {
        console.log("levelComplete--" + globalVariables_1.default.Instance.currentLevel);
        this.callStarsEared();
        globalVariables_1.default.Instance.currentLevel == this.maxLevel ? this.scheduleOnce(function() {
          cc.director.loadScene("endScreen");
        }, 1) : this.scheduleOnce(function() {
          globalVariables_1.default.Instance.currentLevel++;
          cc.director.loadScene("1");
        }, 1);
      };
      NewClass.prototype.callStarsEared = function() {
        if (!this.star1Log && 1 == globalVariables_1.default.Instance.currentLevel) {
          this.star1Log = true;
          console.log("starsEarned--1");
        }
        if (!this.star2Log && 4 == globalVariables_1.default.Instance.currentLevel) {
          this.star2Log = true;
          console.log("starsEarned--2");
        }
        if (!this.star3Log && globalVariables_1.default.Instance.currentLevel == this.maxLevel) {
          this.star3Log = true;
          console.log("starsEarned--3");
        }
      };
      NewClass.prototype.setAnswerArray = function() {
        1 == globalVariables_1.default.Instance.currentLevel ? this.answerArray = [ "1" ] : 2 == globalVariables_1.default.Instance.currentLevel ? this.answerArray = [ "2" ] : 3 == globalVariables_1.default.Instance.currentLevel ? this.answerArray = [ "1" ] : 4 == globalVariables_1.default.Instance.currentLevel ? this.answerArray = [ "1" ] : 5 == globalVariables_1.default.Instance.currentLevel ? this.answerArray = [ "2" ] : 6 == globalVariables_1.default.Instance.currentLevel ? this.answerArray = [ "1" ] : 7 == globalVariables_1.default.Instance.currentLevel && (this.answerArray = [ "2" ]);
      };
      NewClass.prototype.callPositiveRection = function(_node) {
        var _this = this;
        cc.audioEngine.playEffect(this.correctAudio, false);
        cc.tween(_node).to(.5, {
          width: 400,
          height: 400
        }, {
          easing: "sineInOut"
        }).start();
        cc.tween(_node.children[0]).to(.5, {
          width: 320,
          height: 320
        }, {
          easing: "sineInOut"
        }).start();
        cc.tween(_node.children[0]).to(.5, {
          scale: 1
        }, {
          easing: "sineInOut"
        }).start();
        cc.tween(_node).to(.5, {
          y: 0
        }, {
          easing: "sineInOut"
        }).start();
        this.scheduleOnce(function() {
          _this.node.getChildByName("confetti").setPosition(_node.x, _node.y);
          _this.node.getChildByName("confetti").getComponent(cc.Animation).play();
          cc.audioEngine.playEffect(_this.positiveSound[0], false);
          _this.scheduleOnce(function() {
            ProgressBar_1.default.Instance.createStarTrails(6, _this.node);
            _this.scheduleOnce(function() {
              ProgressBar_1.default.Instance.ProgressFill(globalVariables_1.default.Instance.currentLevel);
              _this.scheduleOnce(function() {
                _this.callJockey();
              }, 1);
            }, 1.5);
          }, .7);
        }, .5);
      };
      NewClass.prototype.callJockey = function() {
        var _this = this;
        var anim = [];
        "Podar" == StartGame_1.default.Instance.jockeyName ? anim = [ "possitive", "possitive2", "possitive3", "possitive4", "possitive5", "possitive6" ] : "tlc" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5", "positive_6" ] : "supercub" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5" ] : "bag" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5" ] : "cryon" == StartGame_1.default.Instance.jockeyName ? anim = [ "positive_1", "positive_2", "positive_3", "positive_4", "positive_5" ] : "Singham" == StartGame_1.default.Instance.jockeyName ? anim = [ "dance", "thumbs_up" ] : "Mighty_Raju" == StartGame_1.default.Instance.jockeyName ? anim = [ "celebration", "well_done" ] : "stallion" == StartGame_1.default.Instance.jockeyName && (anim = [ "positive_1", "positive_2", "positive_3", "positive_4" ]);
        var currentClipNum = this.getRandomNumber(0, anim.length - 1);
        var pos = [ -1200, 1200 ];
        var jockeytween = [ -450, 450 ];
        if (globalVariables_1.default.Instance.currentLevel % 2 == 0 && "stallion" == StartGame_1.default.Instance.jockeyName) this.currentJcokey.scaleX = -.65; else if ("stallion" == StartGame_1.default.Instance.jockeyName) {
          this.currentJcokey.scaleX = .65;
          this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
        } else "tlc" != StartGame_1.default.Instance.jockeyName && "supercub" != StartGame_1.default.Instance.jockeyName && ("Podar" != StartGame_1.default.Instance.jockeyName ? this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true) : this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true));
        if ("tlc" != StartGame_1.default.Instance.jockeyName && "supercub" != StartGame_1.default.Instance.jockeyName) {
          this.currentJcokey.setPosition(pos[globalVariables_1.default.Instance.currentLevel % 2], -350);
          cc.tween(this.currentJcokey).to(.5, {
            x: jockeytween[globalVariables_1.default.Instance.currentLevel % 2]
          }, {
            easing: "quartInOut"
          }).start();
          this.scheduleOnce(function() {
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function() {
              cc.tween(_this.currentJcokey).to(.5, {
                x: pos[globalVariables_1.default.Instance.currentLevel % 2]
              }, {
                easing: "quartInOut"
              }).start();
              "stallion" != StartGame_1.default.Instance.jockeyName && ("Podar" != StartGame_1.default.Instance.jockeyName ? _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true) : _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true));
              _this.callNextLevel();
            }, _this.positiveAudio[currentClipNum].duration);
          }, .5);
        } else if ("tlc" == StartGame_1.default.Instance.jockeyName) {
          this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
          cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
          this.scheduleOnce(function() {
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "intro_out", false);
            cc.audioEngine.playEffect(_this.tlc_birdFlying, false);
            _this.scheduleOnce(function() {
              _this.currentJcokey.active = false;
              _this.callNextLevel();
            }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation("intro_out").duration);
          }, this.positiveAudio[currentClipNum].duration);
        } else if ("supercub" == StartGame_1.default.Instance.jockeyName) if ("positive_1" == anim[currentClipNum] || "positive_2" == anim[currentClipNum]) {
          this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
          this.scheduleOnce(function() {
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
            cc.audioEngine.playEffect(_this.positiveAudio[currentClipNum], false);
            _this.scheduleOnce(function() {
              "positive_1" == anim[currentClipNum] ? cc.audioEngine.playEffect(_this.supercub_Pos1, false) : "positive_2" == anim[currentClipNum] && cc.audioEngine.playEffect(_this.supercub_Pos2, false);
              _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
              _this.scheduleOnce(function() {
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
                cc.tween(_this.currentJcokey).to(2, {
                  x: -1e3
                }).start();
                _this.callNextLevel();
              }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
            }, _this.positiveAudio[currentClipNum].duration);
          }, this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
        } else {
          this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
          cc.audioEngine.playEffect(this.positiveAudio[currentClipNum], false);
          this.scheduleOnce(function() {
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "run", false);
            cc.tween(_this.currentJcokey).to(2, {
              x: -1e3
            }).start();
            _this.callNextLevel();
          }, this.positiveAudio[currentClipNum].duration);
        }
      };
      NewClass.prototype.callNegativeRection = function(_node, _event) {
        var _this = this;
        _node.children[0].getComponent(cc.Sprite).setMaterial(0, this.greyMat);
        cc.audioEngine.playEffect(this.negativeSound[0], false);
        this.wrongAnswerCount >= 6 && (this.wrongAnswerCount = 1);
        this.scheduleOnce(function() {
          var anim = [];
          "Podar" == StartGame_1.default.Instance.jockeyName ? anim = [ "negetive", "negetive2", "negetive3", "negetive4", "negetive5", "negetive6" ] : "tlc" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_1", "negative_2", "negative_3" ] : "supercub" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_1", "negative_2", "negative_3", "negative_4" ] : "bag" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_1", "negative_2", "negative_3" ] : "cryon" == StartGame_1.default.Instance.jockeyName ? anim = [ "negative_1", "negative_2", "negative_3", "negative_4" ] : "Singham" == StartGame_1.default.Instance.jockeyName ? anim = [ "no" ] : "Mighty_Raju" == StartGame_1.default.Instance.jockeyName ? anim = [ "try_again" ] : "stallion" == StartGame_1.default.Instance.jockeyName && (anim = [ "negative_1", "negative_2" ]);
          var currentClipNum = _this.getRandomNumber(0, anim.length - 1);
          if ("stallion" == StartGame_1.default.Instance.jockeyName) {
            _this.currentJcokey.scaleX = .65;
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
          } else "tlc" != StartGame_1.default.Instance.jockeyName && "supercub" != StartGame_1.default.Instance.jockeyName && ("Podar" != StartGame_1.default.Instance.jockeyName ? _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true) : _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true));
          if ("tlc" != StartGame_1.default.Instance.jockeyName && "supercub" != StartGame_1.default.Instance.jockeyName) {
            _this.currentJcokey.setPosition(1200, -350);
            cc.tween(_this.currentJcokey).to(.5, {
              x: 400
            }, {
              easing: "quartInOut"
            }).start();
            _this.scheduleOnce(function() {
              _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
              cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
              _this.scheduleOnce(function() {
                cc.tween(_this.currentJcokey).to(.5, {
                  x: 1200
                }, {
                  easing: "quartInOut"
                }).start();
                "stallion" != StartGame_1.default.Instance.jockeyName && ("Podar" != StartGame_1.default.Instance.jockeyName ? _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true) : _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idel", true));
                _this.node.getChildByName("Option").children.forEach(function(elem) {
                  elem.getComponent(cc.Button).interactable = true;
                });
              }, _this.negativeAudio[currentClipNum].duration);
            }, .5);
          } else if ("tlc" == StartGame_1.default.Instance.jockeyName) {
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
            _this.scheduleOnce(function() {
              _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              _this.node.getChildByName("Option").children.forEach(function(elem) {
                elem.getComponent(cc.Button).interactable = true;
              });
            }, _this.negativeAudio[currentClipNum].duration);
          } else if ("supercub" == StartGame_1.default.Instance.jockeyName) if ("negative_1" == anim[currentClipNum] || "negative_2" == anim[currentClipNum]) {
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_start", false);
            _this.scheduleOnce(function() {
              _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_loop", true);
              cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
              _this.scheduleOnce(function() {
                "negative_1" == anim[currentClipNum] ? cc.audioEngine.playEffect(_this.supercub_Neg1, false) : "negative_2" == anim[currentClipNum] && cc.audioEngine.playEffect(_this.supercub_Neg2, false);
                _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum] + "_end", false);
                _this.node.getChildByName("Option").children.forEach(function(elem) {
                  elem.getComponent(cc.Button).interactable = true;
                });
                _this.scheduleOnce(function() {
                  _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_end").duration);
              }, _this.negativeAudio[currentClipNum].duration);
            }, _this.currentJcokey.getComponent(sp.Skeleton).findAnimation(anim[currentClipNum] + "_start").duration);
          } else {
            _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, anim[currentClipNum], false);
            cc.audioEngine.playEffect(_this.negativeAudio[currentClipNum], false);
            _this.scheduleOnce(function() {
              _this.currentJcokey.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              _this.node.getChildByName("Option").children.forEach(function(elem) {
                elem.getComponent(cc.Button).interactable = true;
              });
            }, _this.negativeAudio[currentClipNum].duration);
          }
        }, .7);
        cc.tween(_node).to(.2, {
          x: _node.x - 10
        }, {
          easing: "sineInOut"
        }).to(.2, {
          x: _node.x + 10
        }, {
          easing: "sineInOut"
        }).to(.2, {
          x: _node.x - 10
        }, {
          easing: "sineInOut"
        }).to(.2, {
          x: _node.x + 10
        }, {
          easing: "sineInOut"
        }).to(.2, {
          x: _node.x
        }, {
          easing: "sineInOut"
        }).call(function() {
          _node.children[0].getComponent(cc.Sprite).setMaterial(0, _this.defaultMat);
        }).start();
      };
      NewClass.prototype.destroyOption = function() {
        for (var i = 0; i < this.node.getChildByName("Option").children.length; i++) this.node.getChildByName("Option").children[i].name != this.answerArray[0] && this.node.getChildByName("Option").children[i].destroy();
      };
      NewClass.prototype.loadSpriteFrame = function(imageName, callback) {
        cc.loader.loadRes("images/" + imageName, cc.SpriteFrame, function(err, spriteFrame) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(spriteFrame);
        });
      };
      NewClass.prototype.loadAudioClip = function(audioName, callback) {
        cc.loader.loadRes("audios/" + audioName, cc.AudioClip, function(err, spriteFrame) {
          if (err) {
            cc.error(err.message || err);
            return;
          }
          callback(spriteFrame);
        });
      };
      NewClass.prototype.OptionsLayoutVertical = function() {
        var optionsLayout = this.optionsNode;
        var optionNodes = optionsLayout.children;
        var paddingBetweenOptions = 10;
        var totalHeight = 0;
        var maxWidth = 0;
        for (var i = 0; i < optionNodes.length; i++) {
          var option = optionNodes[i];
          var optionWidth = option.width;
          var optionHeight = option.height;
          totalHeight += optionHeight + paddingBetweenOptions;
          optionWidth > maxWidth && (maxWidth = optionWidth);
        }
        var availableHeight = optionsLayout.height;
        var totalHeightWithPadding = totalHeight + (optionNodes.length - 1) * paddingBetweenOptions;
        var scaleFactor = Math.min(1, availableHeight / totalHeightWithPadding);
        var accumulatedHeight = 0;
        for (var i = 0; i < optionNodes.length; i++) {
          var option = optionNodes[i];
          var optionScaleFactor = scaleFactor;
          option.width *= optionScaleFactor;
          option.height *= optionScaleFactor;
          var posY = accumulatedHeight + option.height * option.anchorY;
          option.y = posY - optionsLayout.height * optionsLayout.anchorY;
          accumulatedHeight += option.height + paddingBetweenOptions;
          for (var _i = 0, _a = option.children; _i < _a.length; _i++) {
            var subChild = _a[_i];
            subChild.x *= optionScaleFactor;
            subChild.y *= optionScaleFactor;
            subChild.width *= optionScaleFactor;
            subChild.height *= optionScaleFactor;
          }
        }
        optionsLayout.width = maxWidth * scaleFactor;
      };
      NewClass.prototype.reverseOptionsLayout = function() {
        var optionsLayout = this.optionsNode;
        var optionNodes = optionsLayout.children;
        var newPositions = [];
        for (var i = optionNodes.length - 1; i >= 0; i--) newPositions.push(optionNodes[i].y);
        for (var i = 0; i < optionNodes.length; i++) optionNodes[i].y = newPositions[i];
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "extraImg", void 0);
      __decorate([ property(cc.Font) ], NewClass.prototype, "podar_font", void 0);
      __decorate([ property(cc.Font) ], NewClass.prototype, "jaipuria_font", void 0);
      __decorate([ property(cc.Font) ], NewClass.prototype, "tlc_font", void 0);
      __decorate([ property(cc.Font) ], NewClass.prototype, "supercub_font", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "popSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "popSound2", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "questionSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "positiveSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "negativeSound", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "positiveAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "negativeAudio", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "stallionPositive", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "stallionNegative", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bagPositive", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bagNegative", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "cryonPositive", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "cryonNegative", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "tlcPositive", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "tlcNegative", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "supercubPositive", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "supercubNegative", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "tlc_birdFlying", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "supercub_Pos1", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "supercub_Pos2", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "supercub_Neg1", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "supercub_Neg2", void 0);
      __decorate([ property(cc.Material) ], NewClass.prototype, "defaultMat", void 0);
      __decorate([ property(cc.Material) ], NewClass.prototype, "greyMat", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../Framework/Prefabs/ProgressBar/Scripts/ProgressBar": "ProgressBar",
    "../../../Framework/Scripts/StartGame": "StartGame",
    "./globalVariables": "globalVariables"
  } ],
  globalVariables: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6f528Ta8lKfpYTwz7oqVtg", "globalVariables");
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
        _this.totalQuestions = 3;
        _this.currentQuestion = 1;
        _this.increasetransition = 0;
        _this.fillRange = 1;
        _this.canvasTopY = 0;
        _this.canvasLeftX = 0;
        _this.canvasRightX = 0;
        _this.canvasBottomY = 0;
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
  }, {} ]
}, {}, [ "Jockey", "ProgressBar", "CustomWidget", "CustomWidget2", "Progress", "StartGame", "TextLoader", "Utility", "Utils", "CheckForInitWebView", "WebView", "Title", "endScreen", "gameplay", "globalVariables" ]);
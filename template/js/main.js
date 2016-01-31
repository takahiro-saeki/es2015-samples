(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var test = function () {
  function test(name, age) {
    _classCallCheck(this, test);

    this.name = name;
    this.age = age;
  }

  _createClass(test, [{
    key: "status",
    value: function status() {
      console.log("this.nameは今不在です。");
    }
  }]);

  return test;
}();

exports.default = test;

},{}],2:[function(require,module,exports){
'use strict';

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = new _api2.default('山田,18');
data.status();

var validate = new _form2.default('#name');

validate.number();
validate.maxNum(4);

console.log($('#name').data('validation'));

},{"./api":1,"./form":3}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var form = function () {
  function form(el) {
    _classCallCheck(this, form);

    this.el = el;
  }

  _createClass(form, [{
    key: 'maxNum',
    value: function maxNum(max) {
      var _this = this;

      $(this.el).on('blur', function (e) {
        if ($(_this.el).val().length > max) {
          console.log('大きいよ');
          return _this.error();
        }
        _this.remove();
      });
    }
  }, {
    key: 'minNum',
    value: function minNum(min) {
      var _this2 = this;

      $(this.el).on('blur', function (e) {
        if ($(_this2.el).val().length < min) {
          console.log('大きいよ');
          return _this2.error('もっと少なく！');
        }
        _this2.remove();
      });
    }
  }, {
    key: 'number',
    value: function number() {
      var _this3 = this;

      $(this.el).on('blur', function (e) {
        if (!$(_this3.el).val().match(/^[0-9]+$/)) {
          return _this3.error();
        };
        _this3.remove();
      });
    }
  }, {
    key: 'error',
    value: function error(message) {
      var error = $(this.el).addClass('error');
      this.errMsg(message);
      $(this.el).after('<p>' + msg + '</p>');
    }
  }, {
    key: 'remove',
    value: function remove() {
      var clear = $(this.el).removeClass('error');
    }
  }]);

  return form;
}();

exports.default = form;

},{}]},{},[2]);

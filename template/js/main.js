(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var apiPath = "../data/test.json";
var apiJson = $.getJSON(apiPath);

var model = {};
$.getJSON(apiPath).done(function (data) {
  return model.data = data;
});
console.log(model);

var foo = {};
function hoge() {
  return foo = "aaa";
}

console.log(hoge.foo);

var funcTest = 10;

},{}],2:[function(require,module,exports){
'use strict';

var _test = require('./test.js');

var _test2 = _interopRequireDefault(_test);

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Test = new _test2.default('p');

},{"./api.js":1,"./test.js":3}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal(el) {
    _classCallCheck(this, Modal);

    $('body').addClass('wrap');
    $(el).on('click', function () {
      return console.log('test');
    });
  }

  _createClass(Modal, [{
    key: 'show',
    value: function show(test) {
      //this.test = test;
      console.log(this.name + 'です！' + test);
    }
  }]);

  return Modal;
}();

exports.default = Modal;

},{}]},{},[2]);

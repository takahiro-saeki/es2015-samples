(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _es = require('./es6');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalText = {
  title: 'モーダルタイトル',
  text: 'ここにモーダルに挿入する文章を入れます。',
  yes: 'チェックする',
  no: 'だが断る'
};

var m = modalText;
var Modal = new _modal2.default('.submit');
Modal.show(m.title, m.text, m.yes, m.no);
Modal.ok();
Modal.ng();
Modal.reset();

var nameInValid = new _form2.default('#name');
nameInValid.maxNum(4);

var kanaInValid = new _form2.default('#kana');
kanaInValid.kana();

var telInValid = new _form2.default('#tel');
telInValid.tel();

var mailInValid = new _form2.default('#mail');
mailInValid.mail();

var postcodeInValid = new _form2.default('#postcode');
postcodeInValid.postcode();

},{"./es6":2,"./form":3,"./modal":4}],2:[function(require,module,exports){
'use strict';

var test = 'varとほぼ同じ使い方をするよ';
var apiData = "APIのパス";
//test(a,b) => return a * b;

//defaults(a = "defaults") => console.log(a)
/*
var template1 = `バックスラッシュで記述するよ`
template2(a,b) => {
  `引数がある場合はこのように${ a }みたいな感じで指定すると出来るよ！
  また、改行したり関数の実行もう出来るよ${ b }`
}
*/
var arrays = ['高坂穂乃果', '絢瀬 絵里', '南ことり', '園田海未', '星空凛', '西木野真姫', '東條希', '小泉花陽', '矢澤にこ'];
for (var i in arrays) {
  if (i == -1) {
    var arr = 'postcss-' + i;
    console.log(arr);
  } else {
    var arr = 'postcss-' + i + ',';
    console.log(arr);
  }
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;

    if (i === -1) {
      var arr = 'postcss-' + i;
      console.log(arr);
    } else {
      var arr = 'postcss-' + i + ',';
      console.log(arr);
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regExp = require('./regExp');

var _regExp2 = _interopRequireDefault(_regExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var form = function () {
  function form(el) {
    _classCallCheck(this, form);

    this.$el = $(el);
    this.$find = this.$el.find('input');
  }

  //最大文字数

  _createClass(form, [{
    key: 'maxNum',
    value: function maxNum(max) {
      var _this = this;

      var errMsg = arguments.length <= 1 || arguments[1] === undefined ? '最大' + max + '文字までにしてください' : arguments[1];

      this.$find.on('blur', function () {
        if (_this.$find.val().length > max) {
          return _this.error(errMsg);
        }
        _this.remove();
      });
    }

    //最小文字数

  }, {
    key: 'minNum',
    value: function minNum(min) {
      var _this2 = this;

      var errMsg = arguments.length <= 1 || arguments[1] === undefined ? '最大' + min + '文字までにしてください' : arguments[1];

      this.$find.on('blur', function () {
        if (_this2.$find.val().length < min) {
          return _this2.error(errMsg);
        }
        _this2.remove();
      });
    }

    //数値のみ

  }, {
    key: 'number',
    value: function number() {
      var _this3 = this;

      var errMsg = arguments.length <= 0 || arguments[0] === undefined ? '全てカタカナで入力してください。' : arguments[0];

      this.$find.on('blur', function () {
        if (!_this3.$find.val().match(_regExp2.default.number)) {
          return _this3.error(errMsg);
        };
        _this3.remove();
      });
    }

    //カタカナのみ

  }, {
    key: 'kana',
    value: function kana() {
      var _this4 = this;

      var errMsg = arguments.length <= 0 || arguments[0] === undefined ? '全てカタカナで入力してください。' : arguments[0];

      this.$find.on('blur', function () {
        if (!_this4.$find.val().match(_regExp2.default.kana)) {
          return _this4.error(errMsg);
        }
        _this4.remove();
      });
    }

    //電話番号

  }, {
    key: 'tel',
    value: function tel() {
      var _this5 = this;

      var errMsg = arguments.length <= 0 || arguments[0] === undefined ? '不正な入力です。' : arguments[0];

      this.$find.on('blur', function () {
        if (!_this5.$find.val().match(_regExp2.default.tel)) {
          return _this5.error(errMsg);
        }
        _this5.remove();
      });
    }

    //メールアドレス

  }, {
    key: 'mail',
    value: function mail() {
      var _this6 = this;

      var errMsg = arguments.length <= 0 || arguments[0] === undefined ? '不正な入力です。' : arguments[0];

      this.$find.on('blur', function () {
        if (!_this6.$find.val().match(_regExp2.default.mail)) {
          return _this6.error(errMsg);
        }
        _this6.remove();
      });
    }

    //郵便番号

  }, {
    key: 'postcode',
    value: function postcode() {
      var _this7 = this;

      var errMsg = arguments.length <= 0 || arguments[0] === undefined ? '不正な入力です。' : arguments[0];

      this.$find.on('blur', function () {
        if (!_this7.$find.val().match(_regExp2.default.postcode)) {
          return _this7.error(errMsg);
        }
        _this7.remove();
      });
    }

    //エラーの表示

  }, {
    key: 'error',
    value: function error(msg) {
      var errFlag = this.$el.find('.errMsg').length;
      if (!errFlag) {
        this.$find.addClass('error');
        this.$find.after('<span class="errMsg">' + msg + '</span>');
      }
    }

    //エラーの削除

  }, {
    key: 'remove',
    value: function remove() {
      this.$find.removeClass('error');
      this.$el.find('.errMsg').remove();
    }
  }]);

  return form;
}();

exports.default = form;

},{"./regExp":5}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modal = function () {
  function modal(el) {
    _classCallCheck(this, modal);

    this.$el = $(el);
    this.$modalFlag = $('#modal-flag');
    this.$body = $(document.body);
    this.$formInput = $('.form-input');
  }

  _createClass(modal, [{
    key: 'show',
    value: function show(title, msg) {
      var _this = this;

      var yes = arguments.length <= 2 || arguments[2] === undefined ? 'はい' : arguments[2];
      var no = arguments.length <= 3 || arguments[3] === undefined ? 'いいえ' : arguments[3];

      this.$el.on('click', function () {
        var errFlag = _this.$body.find('.errMsg').length;
        if (!errFlag) {
          var element = '<main class="ModalTest">\n        <section class="modal-title">' + title + '</section>\n        <section class="modal-main">' + msg + '</section>\n        <section class="modal-check">\n        <buttom class="ok">' + yes + '</buttom>\n        <buttom class="ng">' + no + '</buttom>\n        </section>\n        </main>';
          _this.$body.append(element);
          _this.$modalFlag.addClass('modal-bg');
        } else {
          document.querySelector('.error').focus();
          return false;
        }
      });
    }
  }, {
    key: 'ok',
    value: function ok() {
      var _this2 = this;

      this.$body.on('click', '.ok', function () {
        document.querySelector('.ModalTest').remove();
        _this2.$modalFlag.removeClass('modal-bg');
        _this2.$formInput.val('');
      });
    }
  }, {
    key: 'ng',
    value: function ng() {
      var _this3 = this;

      this.$body.on('click', '.ng', function () {
        document.querySelector('.ModalTest').remove();
        _this3.$modalFlag.removeClass('modal-bg');
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this4 = this;

      $('.reset').on('click', function () {
        _this4.$formInput.val('');
        _this4.$body.find('.form-input').removeClass('error');
        _this4.$body.find('.errMsg').remove();
      });
    }
  }]);

  return modal;
}();

exports.default = modal;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var regExp = {
  'tel': /\d{2,4}-\d{2,4}-\d{4}/,
  'number': /^[0-9]+$/,
  'kana': /^[ァ-ン]+$/,
  'postcode': /^\d{3}-?\d{4}$/,
  'mail': /[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i
};

exports.default = regExp;

},{}]},{},[1]);

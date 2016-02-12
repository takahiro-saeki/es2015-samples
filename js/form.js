import regExp from './regExp';

export default class form {
  constructor(el) {
    this.$el = $(el);
    this.$find = this.$el.find('input');
  }

  //最大文字数
  maxNum(max, errMsg = `最大${ max }文字までにしてください`) {
    this.$find.on('blur', () => {
      if (this.$find.val().length > max) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //最小文字数
  minNum(min,errMsg = `最大${ min }文字までにしてください`) {
    this.$find.on('blur', () => {
      if (this.$find.val().length < min) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //数値のみ
  number(errMsg = '全てカタカナで入力してください。') {
    this.$find.on('blur', () => {
      if(!this.$find.val().match((regExp.number))) {
        return this.error(errMsg);
      };
      this.remove();
    })
  }

  //カタカナのみ
  kana(errMsg = '全てカタカナで入力してください。') {
    this.$find.on('blur', () => {
      if(!this.$find.val().match(regExp.kana)) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //電話番号
  tel(errMsg = '不正な入力です。') {
    this.$find.on('blur', () => {
      if(!this.$find.val().match(regExp.tel)) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //メールアドレス
  mail(errMsg = '不正な入力です。') {
    this.$find.on('blur', () => {
      if(!this.$find.val().match(regExp.mail)) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //郵便番号
  postcode(errMsg = '不正な入力です。') {
    this.$find.on('blur', () => {
      if(!this.$find.val().match(regExp.postcode)) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //エラーの表示
  error(msg) {
    let errFlag = this.$el.find('.errMsg').length;
    if (!errFlag) {
      this.$find.addClass('error');
      this.$find.after(`<span class="errMsg">${ msg }</span>`);
    }
  }

  //エラーの削除
  remove() {
    this.$find.removeClass('error');
    this.$el.find('.errMsg').remove();
  }
}

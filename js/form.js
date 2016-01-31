export default class form {
  constructor(el) {
    this.$el = $(el);
  }
  //最大文字数
  maxNum(max, errMsg = `文字数がオーバーしています。`) {
    this.$el.on('blur', e => {
      if (this.$el.val().length > max) {
        return this.error(msg);
      }
      this.remove();
    })
  }

  //最小文字数
  minNum(min,errMsg) {
    this.$el.on('blur', e => {
      if (this.$el.val().length < min) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //数値のみ
  number(errMsg = '全てカタカナで入力してください。') {
    this.$el.on('blur', e => {
      if(!this.$el.val().match((/^[0-9]+$/))) {
        return this.error(errMsg);
      };
      this.remove();
    })
  }

  //カタカナのみ
  kana(errMsg = '全てカタカナで入力してください。') {
    this.$el.on('blur', e => {
      if(!this.$el.val().match(/^[ァ-ン]+$/)) {
        return this.error(errMsg);
      }
      this.remove();
    })
  }

  //エラーの表示
  error(msg) {
    let error = this.$el.addClass('error');
    this.$el.after('<p>' + msg + '</p>')
  }

  //エラーの削除
  remove() {
    let clear = this.$el.removeClass('error')
  }
}

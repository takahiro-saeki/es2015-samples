export default class form {
  constructor(el) {
    this.el = el;
  }
  maxNum(max) {
    $(this.el).on('blur', e => {
      if ($(this.el).val().length > max) {
        console.log('大きいよ')
        return this.error();
      }
      this.remove();
    })
  }

  minNum(min) {
    $(this.el).on('blur', e => {
      if ($(this.el).val().length < min) {
        console.log('大きいよ')
        return this.error('もっと少なく！');
      }
      this.remove();
    })
  }

  number() {
    $(this.el).on('blur', e => {
      if(!$(this.el).val().match((/^[0-9]+$/))) {
        return this.error();
      };
      this.remove();
    })
  }

  error(message) {
    let error = $(this.el).addClass('error');
    this.errMsg(message)
    $(this.el).after('<p>' + msg + '</p>')
  }

  remove() {
    let clear = $(this.el).removeClass('error')
  }
}

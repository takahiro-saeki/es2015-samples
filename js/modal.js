export default class modal {
  constructor(el) {
    this.$el = $(el);
    this.$modalFlag = $('#modal-flag');
    this.$body = $(document.body);
    this.$formInput = $('.form-input');
  }

  show(title, msg, yes = 'はい', no = 'いいえ') {
    this.$el.on('click', () => {
      let errFlag = this.$body.find('.errMsg').length;
      if (!errFlag) {
        let element =
        `<main class="ModalTest">
        <section class="modal-title">${ title }</section>
        <section class="modal-main">${ msg }</section>
        <section class="modal-check">
        <buttom class="ok">${ yes }</buttom>
        <buttom class="ng">${ no }</buttom>
        </section>
        </main>`;
        this.$body.append(element);
        this.$modalFlag.addClass('modal-bg');
      } else {
        document.querySelector('.error').focus();
        return false;
      }
    })
  }

  ok() {
    this.$body.on('click', '.ok', () => {
      document.querySelector('.ModalTest').remove();
      this.$modalFlag.removeClass('modal-bg');
      this.$formInput.val('');
    })
  }

  ng() {
    this.$body.on('click', '.ng', () => {
      document.querySelector('.ModalTest').remove();
      this.$modalFlag.removeClass('modal-bg');
    })
  }

  reset() {
    $('.reset').on('click', () => {
      this.$formInput.val('');
      this.$body.find('.form-input').removeClass('error');
      this.$body.find('.errMsg').remove();
    });
  }
}

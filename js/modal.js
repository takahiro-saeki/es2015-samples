export default class modal {
  constructor(el) {
    this.$el = $(el);
    this.$modalFlag = $('#modal-flag');
  }

  show(title, msg, yes = 'はい', no = 'いいえ') {
    this.$el.on('click', () => {
      let errFlag = $('body').find('.errMsg').length;
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
        $('body').append(element);
        this.$modalFlag.addClass('modal-bg');
      } else {
        document.querySelector('.error').focus();
        return false;
      }
    })
  }

  ok() {
    $(document).on('click', '.ok', () => {
        document.querySelector('.ModalTest').remove();
        this.$modalFlag.removeClass('modal-bg');
      })
    }
  }

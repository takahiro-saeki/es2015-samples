export default class modal {
  constructor(el) {
    this.$el = $(el);
    this.$modal = $('.ModalTest')
  }
  show(title, msg, yes = 'はい', no = 'いいえ') {
    this.$el.on('click', () => {

      let element =
      `<main class="ModalTest">
        <section class="modal-title">${ title }</section>
        <section class="modal-main">${ msg }</section>
        <section class="modal-check">
          <buttom class="ok">${ yes }</buttom>
          <buttom class="ng">${ no }</buttom>
        </section>
      </main>`

      $('body').append(element)
    })
  }

  ok() {
    $(document).on('click', '.ok', (e) => {
      console.log(this.$modal)
      console.log('test')
      document.querySelector('.ModalTest').remove()
    })
  }
}

export default class modal {
  constructor(el) {
    this.$el = $(el);
  }
  show(title, msg, yes = `はい`, no = `いいえ`) {
    this.$el.on('click', () => {
      $('body').append(
      `<main class="ModalTest">
        <section class="modal-title">${ title }</section>
        <section class="modal-main">${ msg }</section>
        <section class="modal-check">
          <buttom class="ok">${ yes }</buttom>
          <buttom class="ng">${ no }</buttom>
        </section>
      </main>`
      )
    })
  }
}

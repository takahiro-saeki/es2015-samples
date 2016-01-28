export default class Modal {
  constructor(el) {
    $el = $(el);
  }
  show(title,msg) {
    $('body').addClass('Modal-bg');
    this = $(this)
    this.append(
      `<main>
        <section>title</section>
        <section>msg</section>
      </main>`
    )
  }
  hide() {
    $('body').removeClass('Modal-bg');
    this.remove();
  }
}

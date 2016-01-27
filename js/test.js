export default class Modal {
  constructor(el) {
    $('body').addClass('wrap');
    $(el).on('click', () => console.log('test'))
  }
  show(test) {
    //this.test = test;
    console.log(this.name + 'です！' + test);
  }
}

import api from './api';
import form from './form';
import modal from './modal';

let modalText = {
  title: 'モーダルタイトル',
  text: 'ここにモーダルに挿入する文章を入れます。',
  yes: 'チェックする',
  no: 'だが断る'
}

let m = modalText;

let Modal = new modal('.test');
Modal.show(m.title, m.text, m.yes, m.no);
Modal.ok();

let nameInValid = new form('#name');
nameInValid.maxNum(4);

let kanaInValid = new form('#kana');
kanaInValid.kana();

let telInValid = new form('#tel');
telInValid.tel();

let mailInValid = new form('#mail');
mailInValid.mail();

let postcodeInValid = new form('#postcode');
postcodeInValid.postcode();

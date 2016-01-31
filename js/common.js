import api from './api';
import form from './form';

let data = new api('山田,18');
data.status();

let nameInValid = new form('#name');
nameInValid.maxNum(4);

let kanaInValid = new form('#kana');
kanaInValid.kana();

let telInValid = new form('#tel');
telInValid.tel();

let mailInValid = new form('#mail')

import api from './api';
import form from './form';

let data = new api('山田,18');
data.status();

let validate = new form('#name');

validate.number()
validate.maxNum(4)

console.log($('#name').data('validation'));

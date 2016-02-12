const regExp = {
  'tel': /\d{2,4}-\d{2,4}-\d{4}/,
  'number': /^[0-9]+$/,
  'kana': /^[ァ-ン]+$/,
  'postcode': /^\d{3}-?\d{4}$/,
  'mail': /[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i
}

export default regExp;

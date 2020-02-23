import Validator from 'validatorjs'
import { isValid as isValidDate, parseISO } from 'date-fns'

Validator.useLang('ja')

const rules = {
  lastNameKanji: 'required|zenkaku',
  firstNameKanji: 'required|zenkaku',
  lastNameKana: 'required|zenkakuKana',
  firstNameKana: 'required|zenkakuKana',
  birthday: 'required|birthday',
  zipcode: 'required|zipcode'
}

const attributeNames = {
  lastNameKanji: '姓',
  firstNameKanji: '名',
  lastNameKana: 'セイ',
  firstNameKana: 'メイ',
  birthday: '生年月日',
  zipcode: '郵便番号'
}

/* eslint-disable no-control-regex */
Validator.register(
  'zenkaku',
  value => /[^\x01-\x7E\xA1-\xDF]+$/.test(value),
  ':attributeは全角で入力してください'
)
Validator.register(
  'zenkakuKana',
  /* eslint-disable-next-line no-irregular-whitespace */
  value => /^[ァ-ヶー　]+$/.test(value),
  ':attributeは全角カナで入力してください'
)
Validator.register(
  'birthday',
  value => value.length === 10 && isValidDate(parseISO(value)),
  ':attributeを正しく入力してください'
)
Validator.register(
  'zipcode',
  value => /^\d{3}-?\d{4}$/.test(value),
  ':attributeは7桁で入力してください'
)

/* eslint-eable no-control-regex */

export function validate (obj) {
  const v = new Validator(obj, rules)
  v.setAttributeNames(attributeNames)

  if (v.passes()) {
    return null
  }
  return v.errors.errors
}

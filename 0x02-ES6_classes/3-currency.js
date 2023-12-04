/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

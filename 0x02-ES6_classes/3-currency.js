/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._namel;
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

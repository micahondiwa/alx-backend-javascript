/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toString]() {
    return `${this._code}`;
  }
}

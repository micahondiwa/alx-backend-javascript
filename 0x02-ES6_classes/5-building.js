/* eslint-disable no-underscore-dangle */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof (value) === 'number') {
      this._sqft = value;
    }
  }
}

import db from '@/config/db';
export default class Exclude {
  /**
   * Exclude data
   *
   * @param {State} state object
   * @param {Object} payload values
   * @param {String} target define db work on
   */
  constructor(state, payload, target) {
    this.__target = target;
    this.__state = state;
    this.__payload = payload;
  }

  __filter() {
    return this.__state.list.filter(item => item.id !== this.__payload.id);
  }

  fromStore() {
    this.__state.list = this.__filter();
  }

  fromIndexedDB() {
    return db[this.__target]
      .where('id')
      .equals(this.__payload.id)
      .delete();
  }

  get list() {
    return this.__state.list;
  }
}

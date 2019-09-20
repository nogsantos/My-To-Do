import db from '@/config/db';
import types from './types';

const add = (state, payload) => {
  const done = { ...payload };
  db.done.add(done).then(id => {
    Object.assign(done, { id: id });
    state.done = done;
    state.list.unshift(done);
  });
};

const list = async state => {
  await db.done.reverse().each(todo => {
    state.list.push(todo);
  });
};

const exclude = (state, payload) => {
  const exclude = new Exclude(state, payload);
  exclude.fromStore();
  exclude.fromIndexedDB();
  state.list = exclude.list;
};

class Exclude {
  constructor(state, payload) {
    this.__state = state;
    this.__payload = payload;
  }

  __filter() {
    return this.__state.list.filter(todo => todo.id !== this.__payload.id);
  }

  fromStore() {
    this.__state.list = this.__filter();
  }

  fromIndexedDB() {
    return db.done
      .where('id')
      .equals(this.__payload.id)
      .delete();
  }

  get list() {
    return this.__state.list;
  }
}

export default {
  [types.ADD]: add,
  [types.LIST]: list,
  [types.EXCLUDE]: exclude,
};

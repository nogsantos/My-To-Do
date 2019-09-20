import db from '@/config/db';
import types from './types';

const add = (state, payload) => {
  const todo = { ...payload };
  db.todo.add(todo).then(id => {
    Object.assign(todo, { id: id });
    state.todo = todo;
    state.list.push(todo);
  });
};

const list = async state => {
  await db.todo.each(todo => {
    state.list.push(todo);
  });
};

const update = (state, payload) => {
  const todo = { ...payload };
  db.todo.update(todo.id, todo);
  state.todo = todo;
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
    return db.todo
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
  [types.UPDATE]: update,
  [types.EXCLUDE]: exclude,
};

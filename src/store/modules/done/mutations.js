import { notification } from 'ant-design-vue';

import db from '@/config/db';
import faker from 'faker';
import types from './types';

const add = (state, payload) => {
  const done = { ...payload };
  db.done.add(done).then(id => {
    Object.assign(done, { id: id });
    state.done = done;
    state.list.unshift(done);
    notification.success({
      message: 'Success',
      description: `Great Job! To Do '${done.title}' marked as done.`,
    });
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
  notification.success({
    message: 'Success',
    description: `'${payload.title}' excluded.`,
  });
};

const bulk_generate = async state => {
  let done = [];
  for (let i = 0; i < 13; ++i) {
    done.push({
      title: faker.random.words(),
      observation: faker.lorem.paragraph(),
      created_at: faker.date.past(),
      finished_at: faker.date.recent(),
    });
  }
  db.done.bulkAdd(done).then(() => {
    state.list.push(...done);
  });
};

const bulk_exclude = state => {
  db.done
    .where('id')
    .above(0)
    .delete()
    .then(() => {
      state.list = [];
    });
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
  [types.BULK_GENERATE]: bulk_generate,
  [types.BULK_EXCLUDE]: bulk_exclude,
};

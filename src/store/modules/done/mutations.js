import { notification } from 'ant-design-vue';

import db from '@/config/db';
import faker from 'faker';
import types from './types';
import Exclude from '../shared/Exclude';

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
  state.list = await db.done.toArray().then(items => items);
};

const exclude = (state, payload) => {
  const exclude = new Exclude(state, payload, 'done');
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
    list(state);
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

export default {
  [types.ADD]: add,
  [types.LIST]: list,
  [types.EXCLUDE]: exclude,
  [types.BULK_GENERATE]: bulk_generate,
  [types.BULK_EXCLUDE]: bulk_exclude,
};

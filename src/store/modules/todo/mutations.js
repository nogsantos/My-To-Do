import { notification } from 'ant-design-vue';

import db from '@/config/db';
import faker from 'faker';
import types from './types';
import Exclude from '../shared/Exclude';

const add = (state, payload) => {
  const todo = { ...payload };
  db.todo.add(todo).then(id => {
    Object.assign(todo, { id: id });
    state.todo = todo;
    state.list.push(todo);
    notification.success({
      message: 'Success',
      description: `To Do '${todo.title}' successfully created!`,
    });
  });
};

const list = async state => {
  state.list = await db.todo.toArray().then(items => items);
};

const update = (state, payload) => {
  const todo = { ...payload };
  db.todo.update(todo.id, todo).then(updated => {
    if (updated) {
      notification.success({
        message: 'Success',
        description: `To Do '${todo.title}' Updated!`,
      });
      state.todo = todo;
    } else {
      notification.error({
        message: 'Error',
        description: 'Sorry, something is wrong...',
      });
    }
  });
};

const exclude = (state, payload) => {
  const exclude = new Exclude(state, payload, 'todo');
  exclude.fromStore();
  exclude.fromIndexedDB();
  state.list = exclude.list;
  if (!payload.silent) {
    notification.success({
      message: 'Success',
      description: `'${payload.title}' excluded.`,
    });
  }
  delete payload.silent;
};

const bulk_generate = async state => {
  let todo = [];
  for (let i = 0; i < 13; ++i) {
    todo.push({
      title: faker.random.words(),
      observation: faker.lorem.paragraph(),
      created_at: faker.date.recent(),
    });
  }
  db.todo.bulkAdd(todo).then(() => {
    list(state);
  });
};

const bulk_exclude = state => {
  db.todo
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
  [types.UPDATE]: update,
  [types.EXCLUDE]: exclude,
  [types.BULK_GENERATE]: bulk_generate,
  [types.BULK_EXCLUDE]: bulk_exclude,
};

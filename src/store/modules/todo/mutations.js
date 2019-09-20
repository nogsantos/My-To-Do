import db from '@/config/db';
import types from './types';

const add = (state, payload) => {
  state.todo = payload.todo;
  const todo = {
    title: payload.title,
    done: false,
  };
  db.table('todos')
    .add(todo)
    .then(id => {
      console.log('LOG: save -> id', id);
      // dispatch({
      //   type: ADD_TODO,
      //   payload: Object.assign({}, todoToAdd, { id }),
      // });
    });
};

const todosCount = async (state, payload) => {
  console.log('LOG: todosCount -> payload', payload);
  const total = await db['todos'].count();
  state.todo.count = total;
  console.log('LOG: total -> total', state.todo.count);
};

export default {
  [types.ADD]: add,
  [types.TODOS_COUNT]: todosCount,
};

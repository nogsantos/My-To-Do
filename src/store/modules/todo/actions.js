import types from './types';

const addTodo = ({ commit }, payload) => {
  commit(types.ADD, payload);
};

export default {
  addTodo,
};

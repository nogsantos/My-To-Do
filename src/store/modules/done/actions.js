import types from './types';

const add = ({ commit }, payload) => {
  commit(types.ADD, payload);
};

const list = ({ commit }) => {
  commit(types.LIST);
};

const exclude = ({ commit }, payload) => {
  commit(types.EXCLUDE, payload);
};

export default {
  add,
  list,
  exclude,
};

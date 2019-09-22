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

const update = ({ commit }, payload) => {
  commit(types.UPDATE, payload);
};

const bulk_generate = ({ commit }) => {
  commit(types.BULK_GENERATE);
};

const bulk_exclude = ({ commit }) => {
  commit(types.BULK_EXCLUDE);
};

export default {
  add,
  list,
  exclude,
  update,
  bulk_generate,
  bulk_exclude,
};

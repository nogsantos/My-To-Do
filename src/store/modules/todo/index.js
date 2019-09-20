import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

export default {
  namespaced,
  state: () => ({
    todo: {
      id: null,
      title: null,
      done: null,
      timestamp: null,
    },
    todos: [],
  }),
  actions,
  getters,
  mutations,
};

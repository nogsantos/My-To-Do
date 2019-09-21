import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

export default {
  namespaced,
  state: () => ({
    todo: {
      id: Number,
      title: String,
      observation: String,
      tags: [],
      created_at: Date,
    },
    list: [],
  }),
  actions,
  getters,
  mutations,
};

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

export default {
  namespaced,
  state: () => ({
    done: {
      id: Number,
      title: String,
      observation: String,
      tags: [],
      created_at: Date,
      finished_at: Date,
    },
    list: [],
  }),
  actions,
  getters,
  mutations,
};

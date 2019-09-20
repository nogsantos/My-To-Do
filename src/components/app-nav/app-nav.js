import { mapGetters } from 'vuex';

const store = {
  module: {
    todo: 'todo',
    done: 'done',
  },
};
export default {
  name: 'app-nav',
  computed: {
    ...mapGetters(store.module.todo, {
      total_of_todo: 'list',
    }),
    ...mapGetters(store.module.done, {
      total_of_done: 'list',
    }),
  },
};

import { mapGetters, mapActions } from 'vuex';

import { AppEmoji } from '@/components/';

const store = {
  module: {
    todo: 'todo',
    done: 'done',
  },
};

export default {
  name: 'todo-list',
  components: {
    AppEmoji,
  },
  computed: {
    ...mapGetters(store.module.todo, {
      list_of_todo: 'list',
    }),
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapActions(store.module.todo, ['list', 'exclude', 'update']),
    ...mapActions(store.module.done, {
      add_as_done: 'add',
    }),
    createDone(todo) {
      const done = Object.assign({ ...todo }, { finished_at: new Date() });
      this.add_as_done(done);
    },
    updateToDo(todo) {
      this.update(todo);
    },
  },
  created() {
    this.list();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};

import { mapGetters, mapActions } from 'vuex';

import { AppEmoji, AppExport } from '@/components/';
import { DateHelper } from '@/mixins/';

const store = {
  module: {
    todo: 'todo',
    done: 'done',
  },
};

export default {
  name: 'todo-list',
  components: {
    'app-emoji': AppEmoji,
    'app-export': AppExport,
  },
  mixins: [DateHelper],
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
      delete todo.id;
      const done = Object.assign({ ...todo }, { finished_at: new Date() });
      this.add_as_done(done);
    },
    updateToDo(todo) {
      this.update(todo);
    },
    excludeTodo(todo) {
      this.exclude(Object.assign(todo, { silent: true }));
    },
  },
  created() {
    this.list();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};

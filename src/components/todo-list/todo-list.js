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
  methods: {
    ...mapActions(store.module.todo, ['list', 'exclude', 'update']),
    ...mapActions(store.module.done, {
      add_as_done: 'add',
    }),
    createDone(todo) {
      const done = Object.assign({ ...todo }, { finished_at: new Date() });
      this.add_as_done(done);
      this.$notification.success({
        message: 'Success',
        description: 'Done!',
      });
    },
    updateToDo(todo) {
      this.update(todo);
      this.$notification.success({
        message: 'Success',
        description: 'Updated!',
      });
    },
  },
  created() {
    this.list();
  },
};

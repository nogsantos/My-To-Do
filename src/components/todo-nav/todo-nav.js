import { mapGetters } from 'vuex';

export default {
  name: 'todo-nav',
  ...mapGetters(['doneCount']),
  data() {
    return {
      done: null,
    };
  },
  computed: {
    doneCount() {
      this.doneCount().then(value => (this.done = value));
    },
  },
};

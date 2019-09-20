import { mapState, mapActions } from 'vuex';

export default {
  name: 'todo-form',
  computed: {
    ...mapState('todo', {
      todos: (state) => state.todos,
    }),
  },
  methods: {
    ...mapActions('todo', ['create']),
    add() {
      this.create('test');
    },
  },
};

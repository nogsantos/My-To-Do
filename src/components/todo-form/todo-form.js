import { mapActions, mapGetters } from 'vuex';
import { DateHelper } from '@/mixins';

const store = {
  module: {
    todo: 'todo',
  },
};

export default {
  name: 'todo-form',
  mixins: [DateHelper],
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  computed: {
    ...mapGetters(store.module.todo, ['todo']),
  },
  methods: {
    ...mapActions(store.module.todo, {
      add_todo: 'add',
    }),
    add() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.add_todo({
            title: values.title,
            observation: values.observation,
            created_at: new Date(),
          });
          this.form.resetFields();
        }
      });
    },
  },
};

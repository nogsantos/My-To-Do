export default {
  name: 'app-settings',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: Object,
    },
  },
  methods: {
    cancel() {
      this.visible = false;
    },
    todoGenerate() {
      this.actions.todo.generate();
    },
    todoExclude() {
      this.actions.todo.exclude();
    },
    doneGenerate() {
      this.actions.done.generate();
    },
    doneExclude() {
      this.actions.done.exclude();
    },
    excludeAll() {
      this.actions.todo.exclude();
      this.actions.done.exclude();
    },
  },
};

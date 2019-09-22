import Vue from 'vue';
import { mapActions } from 'vuex';
import { AppSettings } from '@/components/';

const store = {
  module: {
    todo: 'todo',
    done: 'done',
  },
};

export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    ...mapActions(store.module.todo, {
      todo_bulk_generate: 'bulk_generate',
      todo_bulk_exclude: 'bulk_exclude',
    }),
    ...mapActions(store.module.done, {
      done_bulk_generate: 'bulk_generate',
      done_bulk_exclude: 'bulk_exclude',
    }),
    settings() {
      const ComponentClass = Vue.extend(AppSettings);
      const instance = new ComponentClass({
        propsData: {
          visible: true,
          actions: {
            todo: {
              generate: this.todo_bulk_generate,
              exclude: this.todo_bulk_exclude,
            },
            done: {
              generate: this.done_bulk_generate,
              exclude: this.done_bulk_exclude,
            },
          },
        },
      });
      instance.$mount();
    },
  },
};

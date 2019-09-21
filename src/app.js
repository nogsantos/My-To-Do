import Module from '@/config/module';
import TodoStore from '@/store/modules/todo/';
import DoneStore from '@/store/modules/done/';

import { AppNav, AppFooter, TodoForm, TodoList, DoneList } from '@/components/';

export default {
  name: 'app',
  mixins: [Module('todo', TodoStore), Module('done', DoneStore)],
  components: {
    'todo-list': TodoList,
    'done-list': DoneList,
    'app-nav': AppNav,
    'todo-form': TodoForm,
    'app-footer': AppFooter,
  },
};

import Module from '@/config/module';
import userStore from '@/store/modules/todo/';
import { TodoNav, TodoFooter, TodoForm, TodoList } from '@/components/';

export default {
  name: 'app',
  extends: Module('todo', userStore),
  components: {
    TodoList,
    TodoNav,
    TodoForm,
    TodoFooter,
  },
};

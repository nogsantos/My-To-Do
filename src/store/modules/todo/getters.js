import store from '@/store/';

const getTodo = (state = store.state) => {
  return state.todo;
};

const getTodos = (state = store.activation) => {
  return state.todos;
};

export default {
  getTodo,
  getTodos,
};

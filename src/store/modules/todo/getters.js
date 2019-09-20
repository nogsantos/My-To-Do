import store from '@/store/';

const todo = (state = store.state) => {
  return state.todo;
};

const list = (state = store.activation) => {
  return state.list;
};

export default {
  todo,
  list,
};

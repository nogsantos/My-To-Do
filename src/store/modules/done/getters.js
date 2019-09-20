import store from '@/store/';

const done = (state = store.state) => {
  return state.done;
};

const list = (state = store.activation) => {
  return state.list;
};

export default {
  done,
  list,
};

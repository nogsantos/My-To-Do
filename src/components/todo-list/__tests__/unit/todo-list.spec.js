import Antd from 'ant-design-vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import todo from '@/store/modules/todo';
import done from '@/store/modules/done';
import { TodoList } from '@/components/';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Antd);

const store = new Vuex.Store({
  modules: {
    done,
    todo,
  },
});

describe('TodoList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      localVue,
      store,
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('todo-list');
    expect(wrapper.find('.app-layout-list').exists()).toBeTruthy();
  });
});

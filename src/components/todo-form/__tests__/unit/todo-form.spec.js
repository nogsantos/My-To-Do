import Antd from 'ant-design-vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import todo from '@/store/modules/todo';
import { TodoForm } from '@/components/';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Antd);

const store = new Vuex.Store({
  modules: {
    todo,
  },
});

describe('TodoForm.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoForm, {
      localVue,
      store,
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('todo-form');
    expect(wrapper.find('.app-layout-form').exists()).toBeTruthy();
  });
});

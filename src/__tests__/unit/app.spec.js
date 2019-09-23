import Antd from 'ant-design-vue';
import Vuex from 'vuex';
import { Layout, BackTop } from 'ant-design-vue';
import { AppNav, AppFooter, TodoForm, TodoList, DoneList } from '@/components/';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import todo from '@/store/modules/todo';
import done from '@/store/modules/done';
import App from '@/App.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Antd);

const store = new Vuex.Store({
  modules: {
    todo,
    done,
  },
});

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      localVue,
      store,
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('app');
    expect(wrapper.find('.app-layout').exists()).toBeTruthy();
  });

  it('should contains ant layout component when render', () => {
    expect(wrapper.contains(Layout)).toBeTruthy();
    expect(wrapper.contains(BackTop)).toBeTruthy();
  });

  it('should contains template components when render', () => {
    expect(wrapper.contains(AppNav)).toBeTruthy();
    expect(wrapper.contains(AppFooter)).toBeTruthy();
    expect(wrapper.contains(TodoForm)).toBeTruthy();
    expect(wrapper.contains(TodoList)).toBeTruthy();
    expect(wrapper.contains(DoneList)).toBeTruthy();
  });
});

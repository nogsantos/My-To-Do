import Antd from 'ant-design-vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import todo from '@/store/modules/todo';
import done from '@/store/modules/done';
import { AppNav } from '@/components/';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Antd);

const store = new Vuex.Store({
  modules: {
    todo,
    done,
  },
});

describe('AppNav.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppNav, {
      localVue,
      store,
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('app-nav');
    expect(wrapper.find('.app-layout-nav').exists()).toBeTruthy();
  });
});

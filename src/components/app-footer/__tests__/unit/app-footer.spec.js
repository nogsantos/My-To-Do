import Antd from 'ant-design-vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { AppFooter } from '@/components/';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Antd);

const namespaced = true;
const store = new Vuex.Store({
  modules: {
    todo: {
      namespaced,
    },
    done: {
      namespaced,
    },
  },
});

describe('AppFooter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppFooter, {
      localVue,
      store,
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('app-footer');
    expect(wrapper.find('.app-layout-footer').exists()).toBeTruthy();
  });

  it('should contains a link when render', () => {
    const a = wrapper.find('a');
    expect(a.attributes().target).toBe('_blank');
    expect(a.text()).toBe('©Fabricio Nogueira');
    expect(a.attributes().href).toBe('http://fabricionogueira.me');
  });

  it('should contains current year value when render', () => {
    const span = wrapper.find('.app-layout-footer-current-year');
    expect(span.text()).toBe(new Date().getFullYear().toString());
  });
});

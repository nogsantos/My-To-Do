import Antd from 'ant-design-vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import done from '@/store/modules/done';
import { DoneList } from '@/components/';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Antd);

const store = new Vuex.Store({
  modules: {
    done,
  },
});

describe('DoneList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DoneList, {
      localVue,
      store,
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('done-list');
    expect(wrapper.find('.app-layout-list').exists()).toBeTruthy();
  });
});

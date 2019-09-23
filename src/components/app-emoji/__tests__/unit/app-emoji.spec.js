import Antd from 'ant-design-vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { AppEmoji } from '@/components/';

const localVue = createLocalVue();

localVue.use(Antd);

describe('AppEmoji.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppEmoji, {
      localVue,
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('app-emoji');
  });
});

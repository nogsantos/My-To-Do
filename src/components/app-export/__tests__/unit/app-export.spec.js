import Antd from 'ant-design-vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { AppExport } from '@/components/';

const localVue = createLocalVue();

localVue.use(Antd);

describe('AppExport.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppExport, {
      localVue,
      propsData: {
        source: 'some',
        resource: ['some'],
      },
    });
  });

  it('should render component name and main class when render', () => {
    expect(wrapper.name()).toBe('app-export');
  });
});

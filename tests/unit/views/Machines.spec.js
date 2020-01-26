import { shallowMount } from '@vue/test-utils'
import Machines from '@/views/Machines.vue'

describe('Machine view', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Machines, {
      propsData: {},
      mocks: {},
      stubs: {},
      methods: {},
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  });
});

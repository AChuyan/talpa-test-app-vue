import { shallowMount } from '@vue/test-utils'
import { RouterLinkStub } from '@vue/test-utils';
import MachineListItem from '@/components/machines/MachineListItem.vue'

describe('MachineListItem component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MachineListItem, {
      methods: {},
      mocks: {},
      propsData: {
        machine: { id: 'id', name: 'name' }
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
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
  })
});

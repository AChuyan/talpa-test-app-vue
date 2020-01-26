import { shallowMount } from '@vue/test-utils'
import MachineCoordinates from '@/components/machines/MachineCoordinates.vue'

describe('MachineCoordinates component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MachineCoordinates);
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

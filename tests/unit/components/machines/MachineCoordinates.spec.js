import { shallowMount } from '@vue/test-utils'
import MachineCoordinates from '@/components/machines/MachineCoordinates.vue'

describe('MachineCoordinates component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MachineCoordinates);

    expect(wrapper.isVueInstance()).toBeTruthy()
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(MachineCoordinates);

    expect(wrapper.element).toMatchSnapshot()
  })
});

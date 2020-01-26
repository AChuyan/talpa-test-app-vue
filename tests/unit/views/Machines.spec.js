import { shallowMount } from '@vue/test-utils'
import Machines from '@/views/Machines.vue'

jest.mock('@/components/mashines/MachineList');

describe('MachineList view', () => {
  test('should renders correctly', () => {
    const wrapper = shallowMount(Machines);

    expect(wrapper).toMatchSnapshot();
  });
});

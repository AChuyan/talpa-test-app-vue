import gql from 'graphql-tag';
import MachineFragment from './MachineFragment';

export const machine = gql`
  query machine($id: ID!) {
    machine(id: $id) {
      ...MachineFragment
      lastKnownPosition {
        lat
        lng
      }
      
    }
  }
  ${MachineFragment}
`;

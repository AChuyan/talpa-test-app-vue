import gql from 'graphql-tag';
import MachineFragment from './MachineFragment';

export const machines = gql`
  query machines {
    machines {
      ...MachineFragment
    }
  }
  ${MachineFragment}
`;

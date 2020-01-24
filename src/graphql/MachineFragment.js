import gql from 'graphql-tag';

export default gql`
    fragment MachineFragment on Machine {
        id
        name
    }
`;

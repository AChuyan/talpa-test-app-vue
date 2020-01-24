import gql from 'graphql-tag';

export const sensor = gql`
  query sensor($id: ID!) {
    sensor(id: $id) {
      id
      name
      data {
        time
        value
      }
    }
  }
`;

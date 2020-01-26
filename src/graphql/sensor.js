import gql from 'graphql-tag';

export const sensor = gql`
  query sensor($filters: SensorFilters) {
    sensor(filters: $filters) {
      id
      name
      data {
        time
        value
      }
    }
  }
`;

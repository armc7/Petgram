import React from 'react';
import { PhotoCard } from '../Components/PhotoCard';
import { ThreeHorseLoading } from 'react-loadingg';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <ThreeHorseLoading />;
      if (error) return <p>Error</p>;
      const { photo = {} } = data;
      return <PhotoCard {...photo} />;
    }}
  </Query>
);
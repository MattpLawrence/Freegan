import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      password
      profile {
        _id
        firstName
        lastName
        zipCode
        photo
        items {
            _id
            name
            description
            image
            quantity
            category {
                _id
                name
            }
        }
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

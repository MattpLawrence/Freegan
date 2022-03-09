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

export const QUERY_ITEMS = gql`
  query getItems {
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
`;

export const QUERY_ONE_ITEM = gql`
  query getOneItem($itemId: ID!) {
    item(itemId: $itemId) {
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
`;

export const QUERY_INDIVIDUAL = gql`
  query INDIVIDUAL {
    individual {
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

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    quantity: Int
    category: [Category]
  }

  type Profile {
    _id: ID
    firstName: String
    lastName: String
    zipCode: Int
    photo: String
    profile: [Profile]
  }

  type User {
    _id: ID
    email: String
    password: String
    profile: [Profile]
    items: [Item]
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    items: [Item]
    profiles: [Profile]
    users: [User]
    categories:[Category]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
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
    items: [Item]
  }

  type User {
    _id: ID
    email: String
    password: String
    profile: Profile
    items: [Item]
  }

  type Category {
    _id: ID
    name: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
    profiles: [Profile]
    profile: Profile
    items: [Item]
    item: Item
    category : Category
    categories : [Category]
    individual: User
  }

  type Mutation {
    addUser(email:String!, password: String!): Auth
    login(email: String!, password:String!): Auth
    addProfile(firstName: String!, lastName: String!, zipCode: Int!):Profile
    addItem(profileId: ID!, name: String!, description: String!, quantity: Int! ):Profile
    removeItem(itemId: ID!): Profile
  }
`;

module.exports = typeDefs;
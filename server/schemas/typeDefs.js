const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    quantity: Int
    category: [Category]
  }
  
  type Order {
    _id:ID
    claimDate: String
    items: [Item]
  }

  type Profile {
    _id: ID
    firstName: String
    lastName: String
    zipCode: Int
    photo: String
    profile: Profile
  }

  type User {
    _id: ID
    email: String
    password: String
    profile: Profile
    orders: [Order]
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
    items: [Item]
    item: Item
    profiles: [Profile]
    users: [User]
    categories:[Category]
    user: User
    order: Order
    orders: [Order]
  }

  type Mutation {
    addUser(username: String!, email:String!, password: String!): Auth
    login(email: String!, password:String!): Auth
    addProfile(firstName: String!, lastName: String!, zipCode: Int!):Profile
    addItem(profileId: ID!, name: String!, description: String!, quantity: Int! ):Profile
    removeItem(itemId: ID!): Profile
  }
`;

module.exports = typeDefs;
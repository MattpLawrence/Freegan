const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Profile } = require('../models');



const { Category, Item, Profile, User } = require('../models');

const resolvers = {
  Query: {
    items: async ()=> {
        return await Item.find({}).populate('category');
    },
    profiles: async () => {
        return await Profile.find({});
    },
    users: async () => {
        return await User.find({}).populate('profile').populate({
            path:'profile',
            populate:'item'
        });
    },
    categories: async () => {
        return await Category.find({});
    },
  }
};

module.exports = resolvers;

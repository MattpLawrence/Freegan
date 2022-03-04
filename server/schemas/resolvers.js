const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Profile } = require('../models');

const resolvers = {
    Query: {
        categories: async () => Category.find(),
        items: async (parent, {category, name}) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name ={
                    $regex: name,
                };
            }

            return Item.find(params).populate('category');
        },
        item: async (parent, { id }) => 
            Item.findById(id).populate('category'),
        
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id).populate({
                    path:'orders.items',
                    populate: 'category',
                });
                
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },

        order: async (parent, { id }, context) => {
            if (context.user) {
                const user = await User.findById(context.   user.id).populate({
                    path: 'orders.items',
                    populate: 'category',
        });

        return user.orders.id(id);
      }

      throw new AuthenticationError('Not logged in');
        },
    },  

    Mutation: {
        
    }
};

module.exports = resolvers;

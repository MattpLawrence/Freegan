const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Profile, Order } = require('../models');
const { signToken } = require('../utils/auth');

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
        // add a User
        addUser: async ({ email, password, profile, items }) => {
            return await User.create( { email, password, profile, items})
        },
        // update User
        updateUser: async ({ email, password, profile, items }) => {
            return await User.findOneAndUpdate( { email, password, profile, items } )
        },
        // add an Order
        addOrder: async ({ claimDate,items }) => {
            return await Order.create({ claimDate,items })
        }

        

        // update Item

        // login verification


    }
};

module.exports = resolvers;

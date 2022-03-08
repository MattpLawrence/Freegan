
const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Profile, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find({});
        },
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
        },
        // update Item
        updateItem: async({ name,description,image, quantity, category }) => {
            return await Item.create({ name,description,image, quantity, category})
        },
        // login verification
        login: async({ email, password }) => {
            await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              const token = signToken(user);
        
              return { token, user };
            },
    }  
};

module.exports = resolvers;

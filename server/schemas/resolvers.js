const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Category, Profile, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // populate the users with profiles
    users: async () => {
      return User.find.populate("profiles");
    },
    // populate the singular use with the email and password
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("profiles");
    },
    //  populate profiles with items
    profiles: async () => {
      return Profile.populate("items");
    },
    //  populate the profile with first. last. zipCode and photo
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    categories: async () => {
      return Category.find();
    },

    category: async (parent, { categoryId }) => {
      return Category.findOne({ _id: categoryId });
    },
    //  populate the items with categories and query the first and last name associated with the item
    items: async () => {
      return Item.find.populate("categories");
    },
    // find singular item
    item: async (parent, { itemId }) => {
      return Iteme.findOne({ _id: itemId });
    },
    // find the individual
    individual: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("profiles");
      }
      throw new AuthenticationError("You are not logged in");
    },
  },
  Mutation: {
    //   add a User
    addUser: async ({ email, password, profile, items }) => {
      return await User.create({ email, password, profile, items });
    },
    //   login verification
    login: async ({ email, password }) => {
      await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    //  add Profile
    addProfile: async (parent, { firstName, lastName, zipCode, photo, items }, context) => {
        if (context.user) {
          const profile = await Profile.create({
            firstName,
            lastName,
            zipCode,
            photo
          });
          return profile;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    //   add item
    addItem: async (parent, { profileId, item }) => {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToItems: { items: item },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
    //  remove Item
    removeItem: async (parent, { profileId, item }) => {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $pull: { items: item } },
          { new: true }
        );
      },
    }
};

module.exports = resolvers;

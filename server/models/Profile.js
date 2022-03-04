const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  zipCode: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    trim: true
  }
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
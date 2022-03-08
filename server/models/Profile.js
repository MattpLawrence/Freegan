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
  },
  items:[ {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
const { Schema, model } = require("mongoose");
const Bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  profile:
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    }
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 12;
    this.password = await Bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return Bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

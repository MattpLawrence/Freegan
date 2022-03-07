const { Schema, model } = require("mongoose");
const Item = require("./Item");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  profile: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  items: [Item.schema],
});

const User = model("User", userSchema);

module.exports = User;

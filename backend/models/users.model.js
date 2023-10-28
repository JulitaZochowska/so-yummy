const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      default: null,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      default: null,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

usersSchema.pre('save', async function () {
  if (!this.password) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

usersSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('users', usersSchema);

module.exports = {
  User,
};

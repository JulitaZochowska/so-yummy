const { User } = require('../models/users.model.js');
const { nanoid } = require('nanoid');

class UnknownDatabaseError extends Error {
  constructor() {
    super('Something went wrong at database layer.');
  }
}

const createUser = async data => {
  try {
    return await User.create({
      ...data,
      verified: false,
      verifyToken: nanoid(24),
    });
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('Conflict');
    }
    throw error;
  }
};

const getUser = async filter => {
  try {
    const user = await User.findOne(filter);
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const updateUser = async (_id, data) => {
  try {
    return await User.findByIdAndUpdate(_id, data, { new: true });
  } catch (error) {
    console.error(error.message);
    throw new UnknownDatabaseError();
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  UnknownDatabaseError,
};

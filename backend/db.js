const mongoose = require('mongoose');
const { mongoConnectionString } = require('./config.js');

const connect = async () => {
  try {
    await mongoose.connect(mongoConnectionString);
  } catch (error) {
    console.error(error);
    throw new Error('Database connection failed');
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
    throw new Error('Cannot disconnect from database');
  }
};

module.exports = {
  connect,
  disconnect,
};
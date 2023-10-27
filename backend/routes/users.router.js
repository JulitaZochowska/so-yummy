const express = require('express');
const {
  registerHandler,
  signInHandler,
} = require('../controllers/users.controller.js');
const {
  userDataValidator,
} = require('../../backend/middleware/userDataValidator.middleware');

const usersRouter = express.Router();

usersRouter.post('/register', userDataValidator, registerHandler);
usersRouter.post('/signin', userDataValidator, signInHandler);

module.exports = usersRouter;

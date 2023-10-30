const express = require('express');
const {
  registerHandler,
  signInHandler,
  accountVerifyHandler,
} = require('../controllers/users.controller.js');
const {
  userRegisterValidator,
  userSignInValidator,
} = require('../middleware/userDataValidator.middleware.js');

const usersRouter = express.Router();

usersRouter.post('/register', userRegisterValidator, registerHandler);
usersRouter.post('/signin', userSignInValidator, signInHandler);
usersRouter.get('/verify/:verifyToken', accountVerifyHandler);

module.exports = usersRouter;

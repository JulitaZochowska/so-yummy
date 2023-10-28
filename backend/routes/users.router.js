const express = require('express');
const {
  registerHandler,
  signInHandler,
  accountVerifyHandler,
  logOutHandler,
} = require('../controllers/users.controller.js');
const {
  userRegisterValidator,
  userSignInValidator,
} = require('../middleware/userDataValidator.middleware.js');
const { authMiddleware } = require('../service/auth.service.js');

const usersRouter = express.Router();

usersRouter.post('/register', userRegisterValidator, registerHandler);
usersRouter.post('/signin', userSignInValidator, signInHandler);
usersRouter.get('/verify/:verifyToken', accountVerifyHandler);
usersRouter.post('/logout', authMiddleware, logOutHandler);

module.exports = usersRouter;

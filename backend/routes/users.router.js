const express = require('express');
const {
  registerHandler,
  signInHandler,
  accountVerifyHandler,
  logOutHandler,
  currentUserHandler,
  updateUserNameHandler,
} = require('../controllers/users.controller.js');
const {
  userRegisterValidator,
} = require('../middleware/userDataValidator.middleware.js');
const {
  userSignInValidator,
} = require('../middleware/userSignIn.middleware.js');
const {
  userNameValidator,
} = require('../middleware/userNameValidator.middleware.js');
const { authMiddleware } = require('../service/auth.service.js');

const usersRouter = express.Router();

usersRouter.post('/register', userRegisterValidator, registerHandler);
usersRouter.post('/signin', userSignInValidator, signInHandler);
usersRouter.post('/logout', authMiddleware, logOutHandler);
usersRouter.get('/verify/:verificationToken', accountVerifyHandler);
usersRouter.get('/current', authMiddleware, currentUserHandler);
usersRouter.patch(
  '/current/update',
  authMiddleware,
  userNameValidator,
  updateUserNameHandler
);

module.exports = usersRouter;

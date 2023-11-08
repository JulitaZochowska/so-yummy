const {
  createUser,
  getUser,
  updateUser,
} = require('../service/users.service.js');
const { generateToken } = require('../service/auth.service.js');
const { sendVerificationMessage } = require('../service/mailer.service.js');

const registerHandler = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const { verificationToken } = await createUser({
      name,
      email,
      password,
    });

    await sendVerificationMessage(email, verificationToken);

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'User created',
      data: {
        name: name,
        email: email,
      },
    });
  } catch (error) {
    console.error(error);
    if (error.message === 'Conflict') {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Email is already in use',
        data: 'Conflict',
      });
    }
    return next(error);
  }
};

const signInHandler = async (req, res, next) => {
  try {
    const user = await getUser({ email: req.body.email });
    const isPasswordValid = await user.validatePassword(req.body.password);
    if (!user || !isPasswordValid) {
      return res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Incorrect email or password',
      });
    }

    const userPayload = {
      _id: user._id,
      email: user.email,
      name: user.name,
    };

    const token = generateToken(userPayload);
    await updateUser(user._id, { token });

    return res.status(200).json({
      status: 'OK',
      code: 200,
      token: token,
      user: {
        name: userPayload.name,
        email: userPayload.email,
      },
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const accountVerifyHandler = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await getUser({ verificationToken });

    if (!user) {
      return res.status(404).json({
        status: 'Not Found',
        code: 404,
        message: 'Verification token is invalid or user does not exist',
      });
    }

    await updateUser(user._id, { verified: true, verificationToken: null });

    return res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'Verification successful',
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const logOutHandler = async (req, res, next) => {
  try {
    await updateUser(req.user._id, { token: null });

    return res.status(204).json({
      status: 'OK',
      code: 204,
    });
  } catch (error) {
    return next(error);
  }
};

const currentUserHandler = async (req, res, next) => {
  try {
    const {
      name,
      email,
      newsletter,
      token,
      avatar,
      verified,
      createdAt,
      updatedAt,
    } = await getUser({ email: req.body.email });
    if (token === null) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Unauthorized',
      });
    }
    return res.status(200).json({
      status: 'OK',
      code: 200,
      user: {
        name: name,
        email: email,
        newsletter: newsletter,
        token: token,
        avatar: avatar,
        verified: verified,
        created: createdAt,
        updated: updatedAt,
      },
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const updateUserNameHandler = async (req, res, next) => {
  try {
    const { name } = req.body;
    const updatedUser = await updateUser(req.user._id, { name });

    if (!updatedUser) {
      return res.status(404).json({
        status: 'fail',
        code: 404,
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        updatedUser,
      },
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = {
  registerHandler,
  signInHandler,
  accountVerifyHandler,
  logOutHandler,
  currentUserHandler,
  updateUserNameHandler,
};

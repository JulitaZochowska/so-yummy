const { createUser, getUser } = require('../service/users.service.js');
const { sendVerificationMessage } = require('../service/mailer.service.js');

const registerHandler = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const { newsletter, verificationToken } = await createUser({
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
        newsletter: newsletter,
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
    if (!user.verified) {
      return res.status(403).json({
        status: 'Forbidden',
        code: 403,
        message: 'User not verified',
      });
    }
    const userPayload = {
      _id: user._id,
      email: user.email,
      subscription: user.subscription,
      avatar: user.avatarURL,
    };

    const token = generateToken(userPayload);
    await updateUser(user._id, { token });

    return res.status(200).json({
      status: 'OK',
      code: 200,
      token: token,
      user: {
        email: userPayload.email,
        subscription: userPayload.subscription,
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
};

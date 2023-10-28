const Joi = require('joi');

const userRegistrationSchema = Joi.object({
  name: Joi.string()
    .required()
    .pattern(new RegExp('^(?=.*[a-zA-Z])[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email().required(),
  password: Joi.string()
    .required()
    .pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[@$!%*?&]).{8,30}$')),
});

const userRegisterValidator = (req, res, next) => {
  const { error } = userRegistrationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    });
  }

  return next();
};

module.exports = {
  userRegisterValidator,
};

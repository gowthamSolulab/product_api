import joi from 'joi';
const validation = joi.object({
  productName: joi.string().min(3).max(25).required(),
  price: joi.string().required(),
  quantity: joi.number().required(),
  category: joi.string().min(3).max(25).required(),
});

module.exports = {
  newProductValidation: async (req, res, next) => {
    const payload = req.body;
    const { error } = validation.validate(payload);
    if (error) {
      return res.status(422).json({
        status: 'fail',
        message: 'validation failed',
        error: error.message,
      });
    } else {
      next();
    }
  },
};

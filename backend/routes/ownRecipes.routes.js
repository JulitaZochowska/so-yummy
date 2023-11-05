const express = require('express');
const { authMiddleware } = require('../service/auth.service.js');
const {
  addOwnRecipeHandler,
  deleteOwnRecipeHandler,
  getOwnRecipesHandler,
} = require('../controllers/ownRecipes.controller.js');
const {
  addRecipeValidator,
} = require('../middleware/recipeDataValidator.middleware.js');

const ownRecipesRouter = express.Router();

ownRecipesRouter.get('/', authMiddleware, getOwnRecipesHandler);
ownRecipesRouter.post(
  '/add',
  authMiddleware,
  addRecipeValidator,
  addOwnRecipeHandler
);
ownRecipesRouter.delete('/:recipeId', authMiddleware, deleteOwnRecipeHandler);

module.exports = ownRecipesRouter;

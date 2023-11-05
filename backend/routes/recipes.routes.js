const express = require('express');
const { authMiddleware } = require('../service/auth.service.js');
const {
  getCategoriesHandler,
  getCategoryRecipesHandler,
  getRecipeByIdHandler,
} = require('../controllers/recipes.controller.js');

const recipesRouter = express.Router();

recipesRouter.get('/category-list', authMiddleware, getCategoriesHandler);
recipesRouter.get(
  '/category/:categoryId',
  authMiddleware,
  getCategoryRecipesHandler
);
recipesRouter.get('/:id', authMiddleware, getRecipeByIdHandler);

module.exports = recipesRouter;

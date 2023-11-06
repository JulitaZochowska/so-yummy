const { Recipe } = require('../models/recipes.model.js');
const { Category } = require('../models/categories.model');
const { UnknownDatabaseError } = require('../db.js');

const getRecipeById = async recipeId => {
  try {
    const data = await Recipe.findById(recipeId);
    return data;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const getRecipesByTitle = async title => {
  try {
    const data = await Recipe.find({ title: { $regex: title, $options: 'i' } });
    return data;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const getCategories = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const getCategoryRecipes = async categoryId => {
  try {
    const recipes = await Recipe.find({ category: categoryId });
    return recipes;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const getRecipesMainPage = async () => {
  try {
    const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Desserts'];
    const result = {};

    for (const category of categories) {
      const recipes = await Recipe.find({ category }).limit(4);
      result[category] = recipes;
    }

    return result;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

module.exports = {
  getRecipeById,
  getCategories,
  getCategoryRecipes,
  getRecipesByTitle,
  getRecipesMainPage,
};

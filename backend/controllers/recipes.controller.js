const {
  getRecipeById,
  getCategories,
  getCategoryRecipes,
  getRecipesByTitle,
  getRecipesMainPage,
} = require('../service/recipes.service.js');

const getCategoriesHandler = async (req, res, next) => {
  try {
    const data = await getCategories();

    if (data.length > 0) {
      const categories = data.map(({ _id, title, thumb, description }) => ({
        id: _id,
        name: title,
        description,
        thumb,
      }));
      return res.status(200).json({
        status: 'OK',
        code: 200,
        categories,
      });
    } else {
      return res.status(404).json({
        status: 'Not Found',
        code: 404,
        message: 'No categories found',
      });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const getCategoryRecipesHandler = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const data = await getCategoryRecipes(categoryId);

    if (data.length > 0) {
      return res.status(200).json({
        status: 'OK',
        code: 200,
        data,
      });
    } else {
      return res.status(404).json({
        status: 'Not Found',
        code: 404,
        message: 'No recipes found',
      });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const getRecipeByIdHandler = async (req, res, next) => {
  try {
    const recipeId = req.params.recipeId;
    const recipe = await getRecipeById(recipeId);
    if (recipe === null) {
      res.status(404).json({
        status: 'fail',
        code: 404,
        message: 'Not found',
      });
    }
    res.status(200).json({
      status: 'success',
      code: 200,
      recipe,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const getRecipesByTitleHandler = async (req, res, next) => {
  try {
    const params = req.body.title;
    const recipes = await getRecipesByTitle(params);
    if (recipes === null) {
      res.status(404).json({
        status: 'fail',
        code: 404,
        message: 'Not found',
      });
    }
    res.status(200).json({
      status: 'success',
      code: 200,
      recipes,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const getRecipesMainPageHandler = async (req, res, next) => {
  try {
    const recipes = await getRecipesMainPage();
    if (recipes === null) {
      res.status(404).json({
        status: 'fail',
        code: 404,
        message: 'Not found',
      });
    }
    res.status(200).json({
      status: 'success',
      code: 200,
      recipes,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = {
  getCategoriesHandler,
  getCategoryRecipesHandler,
  getRecipeByIdHandler,
  getRecipesByTitleHandler,
  getRecipesMainPageHandler,
};

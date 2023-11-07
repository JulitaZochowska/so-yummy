export const selectRecipeName = state => state.addRecipe.title;
export const selectRecipeCategory = state => state.addRecipe.category;
export const selectRecipeInstructions = state => state.addRecipe.instructions;
export const selectRecipeDescription = state => state.addRecipe.description;
export const selectRecipePicture = state => state.addRecipe.picture;
export const selectRecipeTime = state => state.addRecipe.time;
export const selectRecipeIngredients = state => state.addRecipe.ingredients;

export const selectBreakfastRecipes = state =>
  state.recipes.categories.Breakfast;
export const selectMiscellaneousRecipes = state =>
  state.recipes.categories.Miscellaneous;
export const selectChickenRecipes = state => state.recipes.categories.Chicken;
export const selectDessertRecipes = state => state.recipes.categories.Dessert;
export const selectCategoriesList = state => state.recipes.categoriesList;

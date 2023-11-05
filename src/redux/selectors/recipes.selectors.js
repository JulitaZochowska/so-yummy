export const selectBreakfastRecipes = state =>
  state.recipes.categories.Breakfast;
export const selectMiscellaneousRecipes = state =>
  state.recipes.categories.Miscellaneous;
export const selectChickenRecipes = state => state.recipes.categories.Chicken;
export const selectDessertRecipes = state => state.recipes.categories.Dessert;
export const selectCategoriesList = state => state.recipes.categoriesList;
export const selectSelectedCategoryName = state =>
  state.recipes.selectedCategoryName;

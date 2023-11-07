import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategoryRecipes,
  fetchCategoriesList,
} from 'redux/actions/recipes.actions';

const initialState = {
  categories: {},
  categoriesList: [],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategoryRecipes.fulfilled, (state, action) => {
        state.categories[action.meta.arg] = action.payload.data;
      })
      .addCase(fetchCategoryRecipes.rejected, (state, action) => {
        state.categories[action.meta.arg] = [];
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.categoriesList = action.payload.categories;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.categoriesList = [];
      });
  },
});

export const recipesReducer = recipesSlice.reducer;

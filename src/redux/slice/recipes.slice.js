import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategoriesList,
  fetchCategoryRecipes,
} from 'redux/actions/recipes.actions';

const initialState = {
  categories: {},
  categoriesList: [],
  selectedCategoryName: null,
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
        if (!state.selectedCategoryName) {
          state.selectedCategoryName = action.payload.categories[0].name;
        }
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.categoriesList = [];
        state.selectedCategoryName = null;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;

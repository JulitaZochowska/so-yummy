import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoryRecipes } from 'redux/actions/recipes.actions';

const initialState = {
  categories: {},
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
      });
  },
});

export const recipesReducer = recipesSlice.reducer;

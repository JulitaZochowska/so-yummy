import RecipePageHero from 'components/Recipe/RecipeHero/RecipePageHero';
import React from 'react';
import recipesData from '../../components/Recipe/mock/recipes.json';
import RecipeIngredientsList from 'components/Recipe/RecipeList/RecipeList';
import css from './RecipesPage.module.css';
import RecipePreparation from 'components/Recipe/RecipePreparation/RecipePreparation';
import { useParams } from 'react-router-dom';

export const RecipesPage = _ => {
  const { recipeId } = useParams();
  // // useParams();
  console.log(recipeId);

  const recipe = recipesData.filter(recipe => recipe._id.$oid === recipeId);
  console.log(recipe);
  const { title, description, time, thumb, _id, ingredients, instructions } =
    recipe[0];
  return (
    <div className={css.General}>
      <div className={css.RecipesPageBackgroundImange}>
        <RecipePageHero
          title={title}
          description={description}
          time={time}
          thumb={thumb}
          _id={_id}
        />
      </div>

      <RecipeIngredientsList requiredIngredients={ingredients} />
      <RecipePreparation
        thumb={thumb}
        instructions={instructions}
        title={title}
      />
    </div>
  );
};

export default RecipesPage;

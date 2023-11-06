import css from './AddRecipeForm.module.css';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectRecipeName,
  selectRecipeCategory,
  selectRecipeInstructions,
  selectRecipeDescription,
  selectRecipePicture,
  selectRecipeTime,
  selectRecipeIngredients,
} from 'redux/selectors/recipes.selectors';
import { addRecipe } from 'redux/actions/recipes.actions';
import { useEffect } from 'react';

const AddRecipeForm = () => {
  const title = useSelector(selectRecipeName);
  const category = useSelector(selectRecipeCategory);
  const instructions = useSelector(selectRecipeInstructions);
  const description = useSelector(selectRecipeDescription);
  const picture = useSelector(selectRecipePicture);
  const time = useSelector(selectRecipeTime);
  const ingredients = useSelector(selectRecipeIngredients);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    let array = [];
    ingredients.forEach(({ inputData }) => {
      array.push(inputData);
      return inputData;
    });
    const recipe = {
      title: title,
      category: category,
      instructions: instructions,
      description: description,
      thumb: picture,
      time: time,
      ingredients: array,
    };

    dispatch(addRecipe(recipe));
    form.reset();
  };

  useEffect(() => {}, [
    title,
    category,
    instructions,
    description,
    picture,
    time,
    ingredients,
  ]);
  return (
    <form
      className={css.form}
      id="addRecipe"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <RecipeDescriptionFields />
      <RecipeIngredientsFields />
      <RecipePreparationFields />
      <button type="submit" className={css.button}>
        Add
      </button>
    </form>
  );
};

export default AddRecipeForm;

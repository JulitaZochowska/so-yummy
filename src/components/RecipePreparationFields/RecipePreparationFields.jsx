import { useDispatch } from 'react-redux';
import { updateInstructions } from 'redux/slice/addRecipe.slice';
import css from './RecipePreparationFields.module.css';
const RecipePreparationFields = () => {
  const dispatch = useDispatch();

  const handlePreparation = event => {
    const value = event.target.value;
    if (value.includes('\n')) {
      const breaks = value.split('\n');
      const filter = breaks.filter(breaks => breaks.trim() !== '');
      dispatch(updateInstructions(filter));
    }
  };

  return (
    <div className={css.container}>
      <div className={css.headlineContainer}>
        <h2 className={css.headline}>Recipe Preparation</h2>
        <textarea
          name="preparation"
          placeholder="Enter recipe preparation"
          onChange={handlePreparation}
        ></textarea>
      </div>
    </div>
  );
};

export default RecipePreparationFields;

import MainTitle from '../../components/MainTitle/MainTitle';
import AddRecipeForm from '../../components/AddRecipeForm/AddRecipeForm';

import css from './AddRecipePage.module.css';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import FollowUs from 'components/FollowUs/FollowUs';

const AddRecipePage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainTitle title="Add recipe" />
        <div className={css.form}>
          <FollowUs />
          <AddRecipeForm />
        </div>
        <PopularRecipe />
      </div>
    </section>
  );
};

export default AddRecipePage;

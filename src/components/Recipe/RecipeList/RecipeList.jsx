import ingredientsData from '../list/soyummy.ingredients.json';
import css from '../RecipeList/RecipeList.module.css';

export default function RecipeIngredientsList({ requiredIngredients }) {
  const allIngredient = ingredientsData;
  //   console.log(allIngredient);
  return (
    <>
      <div className={css.RecipeListHead}>
        <span className={css.RecipeListHeadText}>Ingredients</span>
        <div>
          <span className={css.RecipeListHeadText}>Number</span>
          <span className={css.RecipeListHeadText}>Add to list</span>
        </div>
      </div>
      <ul className={css.RecipeListList}>
        {requiredIngredients?.map(indegrient => {
          const id = indegrient.id ?? indegrient.ingredientId;
          const ingredientMeasure =
            indegrient.measure ?? indegrient.ingredientMeasure;
          const { title, thumb, description } = allIngredient.find(
            ({ _id }) => _id.$oid === id
          ) ?? { title: '', thumb: '', description: '' };
          return (
            <li className={css.RecipeListListLi} key={id}>
              <div className={css.RecipeListListLiDiv}>
                <img
                  className={css.RecipeListListLiDivImg}
                  src={thumb}
                  alt={description}
                />
                <span className={css.RecipeListListLiDivTitle}>{title}</span>
              </div>
              <div className={css.RecipeListListLiInpiut}>
                <span className={css.RecipeListListLiInpiutMesure}>
                  {`${ingredientMeasure}`}
                </span>
                <input
                  className={css.RecipeListListLiInpiutInput}
                  type="checkbox"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

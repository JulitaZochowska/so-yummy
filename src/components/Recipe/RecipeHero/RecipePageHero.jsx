import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './RecipePageHero.module.css';
import { ReactComponent as Clock } from '../../../images/RecepiePage/clock.svg';

export default function RecipePageHero({
  description,
  title,
  time,
  thumb,
  _id,
}) {
  // const [isFavorite, setIsFavorite] = useState(false);
  // const favRecipes = useSelector(selectFavRecipes);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const isRecipeFavorite = favRecipes.some(recipe => recipe.title === title);
  //   setIsFavorite(isRecipeFavorite);
  // }, [favRecipes, title]);

  // const toggleFavorite = () => {
  // const recipe = { title, description, time, thumb, _id };
  // console.log(`🚀 ~ toggleFavorite ~ recipe:`, recipe);

  //   if (isFavorite) {
  //     return dispatch(removeFromFavorite(_id));
  //   } else {
  //     dispatch(addFavoriteRecipes(_id));
  //   }
  // };

  return (
    <div className={css.recepieDiv}>
      <span className={css.recepieTitle}>{title}</span>

      <span className={css.recepieDescription}>{description}</span>
      <button className={css.recepieTitleButton}>
        Add to favorite recipes
      </button>
      <div className={css.recepieTitleClockAndTime}>
        <Clock className={css.recepieTitleClock} />
        <span className={css.recepieTitleTime}>{time} min</span>
      </div>
    </div>
  );
}

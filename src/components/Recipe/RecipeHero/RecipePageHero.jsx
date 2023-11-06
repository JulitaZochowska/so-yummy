import css from './RecipePageHero.module.css';
import { ReactComponent as Clock } from '../../../images/RecepiePage/clock.svg';

export default function RecipePageHero({ description, title, time }) {
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

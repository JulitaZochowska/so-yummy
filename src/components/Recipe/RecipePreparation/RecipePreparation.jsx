import css from './RecipePreparation.module.css';
export default function RecipePreparation({ instructions, thumb, title }) {
  let instructionsArray = [];

  const stepSeparatedInstructions = instructions?.split(/^\d+[.)]\s*/gm);

  stepSeparatedInstructions.forEach(step => {
    if (step.trim() === '') {
      return;
    }

    const lineSeparatedSteps = step.split('\n').map(el => el.trim());
    instructionsArray = instructionsArray.concat(lineSeparatedSteps);
  });

  let counter = 0;

  return (
    <div className={css.RecipePreparationContainer}>
      <div className={css.RecipePreparationContainer2}>
        <h1 className={css.RecipePreparationTitle}>Recipe Preparation</h1>
        <ul className={css.RecipePreparationList}>
          {instructionsArray.map((el, index) => {
            if (el.trim() === '') {
              return null;
            }
            counter += 1;
            return (
              <li className={css.RecipePreparationListItem} key={index}>
                <div className={css.RecipePreparationListItemNumber}>
                  {counter}
                </div>
                <span className={css.RecipePreparationListItemText}>{el}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={css.RecipePreparationListItemImage}
        src={thumb}
        alt={title}
      />
    </div>
  );
}

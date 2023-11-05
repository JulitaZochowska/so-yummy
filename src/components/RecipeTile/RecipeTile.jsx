import React from 'react';
import PropTypes from 'prop-types';
import css from './RecipeTile.module.css';

const RecipeTile = ({ onClick, recipe }) => {
  return (
    <li className={css.recipeTile} onClick={onClick}>
      <div className={css.recipeTitle}>{recipe.title}</div>
      <img className={css.recipeImage} src={recipe.thumb} alt={recipe.title} />
    </li>
  );
};

RecipeTile.propTypes = {
  _id: PropTypes.string,
  thumb: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default RecipeTile;

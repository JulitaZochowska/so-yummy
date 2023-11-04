import React from 'react';
import PropTypes from 'prop-types';
import RecipeTile from 'components/RecipeTile/RecipeTile';
import css from './PopularCategory.module.css';
import { useNavigate } from 'react-router-dom';

const PopularCategory = ({ title, category }) => {
  const navigate = useNavigate();

  return (
    <div className={css.upperContainer}>
      <div className={css.recipesContainer}>
        <h2 className={css.categoryTitle}>{title}</h2>
        <ul className={css.recipesLine}>
          {category.map(recipe => (
            <RecipeTile
              className={css.recipeTile}
              key={recipe._id}
              recipe={recipe}
              onClick={() => navigate('/recipe/' + recipe._id)}
            ></RecipeTile>
          ))}
        </ul>
        <div className={css.right}>
          <button
            className={css.seeAllButton}
            onClick={() => navigate('/categories/' + title)}
          >
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

PopularCategory.propTypes = {
  title: PropTypes.string,
  category: PropTypes.array,
};

export default PopularCategory;

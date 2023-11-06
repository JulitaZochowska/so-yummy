import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, location }) => {
  const uppPageHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <li onClick={uppPageHandler}>
      <Link to={`/recipes/${recipe._id}`} state={{ from: location }}>
        <img src={recipe.preview} alt="Dish preview" />
        <p>{recipe.title}</p>
      </Link>
    </li>
  );
};

export default RecipeCard;

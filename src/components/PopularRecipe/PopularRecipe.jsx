import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUserToken } from 'redux/selectors/users.selectors';
import axios from 'axios';
import css from './PopularRecipe.module.css';
import { Link } from 'react-router-dom';

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3030/recipes/popular-recipe',
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (response) {
          setRecipes(response.data.recipes);
          return response.data.recipes;
        }
      } catch (error) {
        console.error(error);
        throw new Error('Something went wrong...');
      }
    };
    getRecipes();
    setIsFetch(true);
  }, [isFetch, userToken]);

  return (
    <div className={css.container}>
      <p className={css.title}>Popular recipe</p>
      {recipes ? (
        <ul className={css.list}>
          {recipes.map(recipe => (
            <Link to={'/recipe/' + recipe.id}>
              <li key={recipe.id} className={css.item}>
                <img
                  src={recipe.thumb}
                  alt="Recipe preview"
                  className={css.img}
                ></img>
                <div>
                  <p className={css.name}>{recipe.title}</p>
                  <p className={css.description}>{recipe.description}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularRecipe;

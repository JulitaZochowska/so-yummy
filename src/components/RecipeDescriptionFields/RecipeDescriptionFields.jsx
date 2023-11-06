import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserToken } from 'redux/selectors/users.selectors';
import {
  selectRecipeCategory,
  selectRecipeTime,
} from 'redux/selectors/recipes.selectors';
import {
  updateTitle,
  updateDescription,
  updateTime,
  updateCategory,
  updatePicture,
} from 'redux/slice/addRecipe.slice';
import { ReactComponent as Placeholder } from '../../images/file-field-icon.svg';
import { ReactComponent as Arrow } from '../../images/dropdown-arrow-down.svg';
import css from './RecipeDescriptionFields.module.css';
import axios from 'axios';

const RecipeDescriptionFields = () => {
  const dispatch = useDispatch();
  const [previewSource, setPreviewSource] = useState('');
  const [showCategory, setShowCategory] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [categories, setCategories] = useState([]);
  const inputCategory = useRef(null);
  const inputTime = useRef(null);
  const userToken = useSelector(selectUserToken);
  const category = useSelector(selectRecipeCategory);
  const time = useSelector(selectRecipeTime);
  const cookingTime = [];
  for (let i = 5; i <= 120; i += 5) {
    cookingTime.push(`${i} min`);
  }

  const getCategories = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3030/recipes/category-list',
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response) {
        return response.data;
      } else {
        throw new Error('Something went wrong...');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOutsideClick = event => {
    if (
      inputCategory.current &&
      !inputCategory.current.contains(event.target) &&
      inputTime.current &&
      !inputTime.current.contains(event.target)
    ) {
      setShowCategory(false);
      setShowTime(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    const fetchCategories = async () => {
      if (categories.length === 0) {
        try {
          const data = await getCategories();
          setCategories(data.categories);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewSource(reader.result);
      dispatch(updatePicture(reader.result));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const changeName = event => {
    dispatch(updateTitle(event.target.value));
  };

  const changeAbout = event => {
    dispatch(updateDescription(event.target.value));
  };

  const handleCategoryClick = () => {
    setShowCategory(!showCategory);
  };

  const handleCategorySelect = value => {
    dispatch(updateCategory(value));
  };
  const handleTimeClick = () => {
    setShowTime(!showTime);
  };

  const handleTimeSelect = value => {
    dispatch(updateTime(value));
  };
  return (
    <div className={css.container}>
      <div className={css.fileItem}>
        <label className={css.fileLabel}>
          <input
            className={css.fileInput}
            type="file"
            name="file"
            accept="image/png, image/jpeg, image/jpg"
            multiple={false}
            onChange={handleFileInputChange}
          ></input>
          {previewSource ? (
            <img
              src={previewSource}
              alt="Podgląd"
              className={css.previewImage}
            />
          ) : (
            <Placeholder className={css.placeholder} />
          )}
        </label>
      </div>
      <div className={css.descriptionItem}>
        <div className={css.item}>
          <input
            type="text"
            name="name"
            placeholder="Enter item title"
            className={css.input}
            onChange={changeName}
          ></input>
        </div>
        <div className={css.item}>
          <input
            type="text"
            name="about"
            placeholder="Enter about recipe"
            className={css.input}
            onChange={changeAbout}
          ></input>
        </div>
        <div className={css.itemDropdown}>
          <label>Category</label>
          <div onClick={handleCategoryClick} ref={inputCategory}>
            <input
              type="text"
              name="category"
              value={category}
              readOnly
              className={css.inputDropdown}
            ></input>
            <Arrow className={css.dropdownIcon} />
          </div>
          {showCategory && (
            <div className={css.options}>
              {categories.map((category, index) => (
                <div key={index} onClick={() => handleCategorySelect(category)}>
                  {category.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={css.itemDropdown}>
          <label>Cooking time</label>
          <div onClick={handleTimeClick} ref={inputTime}>
            <input
              type="text"
              name="time"
              value={time}
              readOnly
              className={css.inputDropdown}
            ></input>
            <Arrow className={css.dropdownIcon} />
          </div>
          {showTime && (
            <div className={css.options}>
              {cookingTime.map((time, index) => (
                <div key={index} onClick={() => handleTimeSelect(time)}>
                  {time}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;

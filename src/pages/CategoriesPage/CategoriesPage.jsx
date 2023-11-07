import { useParams } from 'react-router-dom';
import css from './CategoriesPage.module.css';
import CategoriesGalleryImage from 'components/Categories/CategoriesGallery';
import CategoriesList from 'components/CategoriesList/CategoriesList';

const CategoriesPage = _ => {
  const { categoryName } = useParams();
  return (
    <div className={css.CategoriesPage}>
      <h1 className={css.CategoriesPage_h1}>Categories</h1>
      <div>
        <CategoriesList categoryName={categoryName} />
      </div>
      <div>
        <CategoriesGalleryImage categoryName={categoryName} />
      </div>
    </div>
  );
};

export default CategoriesPage;

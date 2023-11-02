import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import css from './CategoriesPage.module.css';
import CategoriesGalleryImage from 'components/Categories/CategoriesGallery';
import CategoriesList from 'components/CategoriesList/CategoriesList'; // Corrected import
import spinachImage from 'images/spinach-leafs.png';
import rectangle8 from 'images/rectangle8.png';
import rectangle9 from 'images/rectangle9.png';
import rectangle11 from 'images/rectangle11.png';

const CategoriesPage = () => {
  return (
    <div>
      <Header />
      <div className={css.CategoriesPage}>
        <h1 className={css.CategoriesPage_h1}>Categories</h1>

        <div>
          <CategoriesList />
        </div>

        <div>
          <CategoriesGalleryImage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;

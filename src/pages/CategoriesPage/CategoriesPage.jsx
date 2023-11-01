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

        <div >
          <CategoriesList /> 
        </div>

        <div>
          <CategoriesGalleryImage />
        </div>
        <div className={css.rectangle8}>
          <img src={rectangle8} alt="Black rectangle" />
        </div>
        <div className={css.rectangle9}>
          <img src={rectangle9} alt="Green rectangle" />
        </div>
        <div className={css.rectangle11}>
          <img src={rectangle11} alt="Green rectangle" />
        </div>
        <div className={css.spinachImage}>
          <img src={spinachImage} alt="Spinach Leaves" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoriesPage;

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import css from './CategoriesPage.module.css';
import ImageGallery from 'components/Categories/ImageGallery';
import spinachImage from 'images/spinach-leafs.png';
import rectangle8 from 'images/rectangle8.png';
import rectangle9 from 'images/rectangle9.png';
import rectangle11 from 'images/rectangle11.png';
import { element } from 'prop-types';
const CategoriesPage = () => {
  return (
    <div>
      <Header />
      <div className={css.CategoriesPage}>
        <h1 className={css.CategoriesPage_h1}>Categories</h1>
        <nav className={css.CategoriesPage_nav}>
          <h2 className={css.CategoriesPage_nav_h2}>Beef</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Breakfast</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Chicken</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Desserts</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Goat</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Lamb</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Miscelanous</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Pasta</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Pork</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Seafood</h2>
          <h2 className={css.CategoriesPage_nav_h2}>Side</h2>
        </nav>
        <div>
          <ImageGallery />
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

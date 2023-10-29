import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import css from './CategoriesPage.module.css';
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
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import css from './CategoriesPage.module.css';
import CategoriesGalleryImage from 'components/Categories/CategoriesGallery';
import CategoriesList from 'components/CategoriesList/CategoriesList'; // Corrected import

const CategoriesPage = _ => {
  const { categoryName } = useParams();
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

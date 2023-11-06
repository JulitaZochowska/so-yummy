import { ReactComponent as HeaderLogo } from '../../images/Header/HeaderLogo.svg';
import { BurgerMenu } from './BurgerMenu';
import { HeaderUser } from './HeaderUser';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as MagnifyingGlass } from '../../images/Header/MagnifyingGlass.svg';
export const Header = () => {
  return (
    <>
      <div className={css.HeaderStyled}>
        <Link className={css.HeaderStyledLogoLink} to={'/'}>
          <HeaderLogo className={css.HeaderStyledLogo} />
        </Link>
        <div className={css.HeaderStyledNav}>
          <Link to={'categories'} className={css.HeaderStyledNavLink}>
            Categories
          </Link>
          <Link className={css.HeaderStyledNavLink} to={'/ownRecipes/add'}>
            Add recipes
          </Link>
          <Link className={css.HeaderStyledNavLink} to={'my'}>
            My recipes
          </Link>
          <Link className={css.HeaderStyledNavLink} to={'favorite'}>
            Favorites
          </Link>
          <Link className={css.HeaderStyledNavLink} to={'shopping-list'}>
            Shopping list
          </Link>

          <MagnifyingGlass
            title="MagnifyingGlass"
            className={css.MagnifyingGlass}
          />
        </div>

        <HeaderUser />
      </div>

      <BurgerMenu />
    </>
  );
};

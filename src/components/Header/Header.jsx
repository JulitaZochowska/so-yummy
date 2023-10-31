import { HeaderStyledNavLink } from './Header.styled';
import { HeaderLogo, MagnifyingGlass } from './HeaderIcons';
import { BurgerMenu } from './BurgerMenu';
import { HeaderUser } from './HeaderUser';
import css from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className={css.HeaderStyled}>
        <Link className={css.HeaderStyledLogoLink} to={'/'}>
          <HeaderLogo />
        </Link>
        <div className={css.HeaderStyledNav}>
          <Link to={'categories'} className={css.HeaderStyledNavLink}>
            Categories
          </Link>
          <Link className={css.HeaderStyledNavLink} to={'add-recipe'}>
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
          <HeaderStyledNavLink to={'search'}>
            <MagnifyingGlass />
          </HeaderStyledNavLink>
        </div>

        <HeaderUser />
      </div>

      <BurgerMenu />
    </>
  );
};

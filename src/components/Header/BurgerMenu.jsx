import { fallDown as Menu } from 'react-burger-menu';
import { BurgerMenuStyles } from './BurgerMenu.styled';
import css from './Header.module.css';
import { useState } from 'react';
import {
  BurgerIcon,
  HeaderLogo,
  CrossIcon,
  MagnifyingGlass,
} from './HeaderIcons';
import { Link } from 'react-router-dom';

export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={css.BurgerMenuContainer}>
      <Menu
        customBurgerIcon={<BurgerIcon />}
        customCrossIcon={<CrossIcon />}
        right
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
        styles={BurgerMenuStyles}
        className={css.BurgerMenuStyles}
      >
        <Link
          className={css.BurgerMenuLogoLink}
          onClick={() => closeMenu()}
          to={'/'}
        >
          <HeaderLogo />
        </Link>
        <Link
          className={css.BurgerMenuStyledNavLink}
          onClick={() => closeMenu()}
          to={'categories'}
        >
          Categories
        </Link>
        <Link
          className={css.BurgerMenuStyledNavLink}
          onClick={() => closeMenu()}
          to={'add'}
        >
          Add recipes
        </Link>
        <Link
          className={css.BurgerMenuStyledNavLink}
          onClick={() => closeMenu()}
          to={'my'}
        >
          My recipes
        </Link>
        <Link
          className={css.BurgerMenuStyledNavLink}
          onClick={() => closeMenu()}
          to={'favorite'}
        >
          Favorites
        </Link>
        <Link
          className={css.BurgerMenuStyledNavLink}
          onClick={() => closeMenu()}
          to={'shopping-list'}
        >
          Shopping list
        </Link>
        <Link
          className={css.BurgerMenuStyledNavLink}
          onClick={() => closeMenu()}
          to={'search'}
        >
          <MagnifyingGlass />
          Search
        </Link>
        <div className={css.BurgerMenuBackgroundContainer}></div>
      </Menu>
    </div>
  );
};

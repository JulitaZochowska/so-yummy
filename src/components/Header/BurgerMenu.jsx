import { fallDown as Menu } from 'react-burger-menu';
import css from './Header.module.css';
import { useState } from 'react';
import { BurgerIcon, CrossIcon } from './HeaderIcons';
import { ReactComponent as HeaderLogo } from '../../images/Header/HeaderLogo.svg';
import { ReactComponent as MagnifyingGlass } from '../../images/Header/MagnifyingGlass.svg';
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
          <MagnifyingGlass className={css.BurgerMenuMagnifyingGlass} />
          Search
        </Link>
        <div className={css.BurgerMenuBackgroundContainer}></div>
      </Menu>
    </div>
  );
};

const BurgerMenuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '24px',
    height: '16px',
    right: '33px',
    top: '32px',
  },
  bmBurgerBars: {
    background: '#22252A',
  },
  bmCrossButton: {
    height: '14px',
    width: '14px',
    top: '32px',
    right: '32px',
  },
  bmCross: {
    background: '#22252A',
  },
  bmMenuWrap: {
    height: '100%',
    width: '100%',
  },
  bmMenu: {
    background: '#EBF3D4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '184px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

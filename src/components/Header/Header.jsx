import {
  HeaderStyled,
  HeaderStyledLogoLink,
  HeaderStyledNav,
  HeaderStyledNavLink,
} from './Header.styled';
import { HeaderLogo, MagnifyingGlass } from './HeaderIcons';
import { BurgerMenu } from './BurgerMenu';
import { HeaderUser } from './HeaderUser';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderStyledLogoLink to={'/'}>
          <HeaderLogo />
        </HeaderStyledLogoLink>
        <HeaderStyledNav>
          <HeaderStyledNavLink to={'categories'}>
            Categories
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'add-recipe'}>
            Add recipes
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'my'}>My recipes</HeaderStyledNavLink>
          <HeaderStyledNavLink to={'favorite'}>Favorites</HeaderStyledNavLink>
          <HeaderStyledNavLink to={'shopping-list'}>
            Shopping list
          </HeaderStyledNavLink>
          <HeaderStyledNavLink to={'search'}>
            <MagnifyingGlass />
          </HeaderStyledNavLink>
        </HeaderStyledNav>
        <HeaderUser />
      </HeaderStyled>
      <BurgerMenu />
    </>
  );
};

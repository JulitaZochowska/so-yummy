import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyledNavLink = styled(NavLink)`
  font-family: 'Poppins';
  text-decoration: none;
  margin-right: 30px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: #23262a;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #8baa36;
  }
  svg {
    width: 16px;
    height: 16px;
    stroke: #22252a;
  }
  svg:hover {
    stroke: #8baa36;
  }
  @media (max-width: 830px) {
    margin-right: 9px;
  }
`;

export const HeaderStyledUser = styled.div`
  margin-right: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.06);
  }
  @media (min-width: 768px) {
    margin-right: 0px;
  }
  @media (max-width: 477px) {
    margin-right: 52px;
  }
  svg {
    width: 40px;
    height: 40px;
    margin-right: 14px;
    fill: #9c9c9c;
    @media (max-width: 477px) {
      width: 34px;
      height: 34px;
    }
  }
`;

export const HeaderStyledUserText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #22252a;
  margin: 0;
  margin-left: 14px;
  @media (min-width: 478px) {
    font-size: 14px;
    line-height: 1.7;
  }
`;
export const HeaderUserModalContainerStyled = styled.div`
  padding: 18px;
`;
export const HeaderUserModalLogoutButton = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: #8baa36;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 12px 24px;
  width: 125px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #d3d3d3;
    background-color: rgba(34, 37, 42, 1);
  }
  svg {
    margin-left: 4px;
    width: 17px;
    height: 17px;
  }
  @media (min-width: 478px) {
    width: 141px;
    padding: 12px 32px;
  }
`;
export const HeaderUserModalEditButton = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  color: #23262a;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
    svg {
      stroke: #8baa36;
    }
  }
  svg {
    margin-left: 37px;
    width: 14px;
    height: 14px;
    stroke: #23262a;
    @media (min-width: 478px) {
      margin-left: 53px;
    }
  }
  @media (min-width: 478px) {
    margin-bottom: 32px;
  }
  svg:hover {
    stroke: #8baa36;
  }
`;
export const BurgerMenuStyles = {
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

export const BurgerMenuStyledNavLink = styled(NavLink)`
  position: relative;
  z-index: 1;
  font-family: 'Poppins';
  text-decoration: none;
  margin-bottom: 32px;
  line-height: 1.6;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #22252a;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
  }
  @media (min-width: 478px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &.active {
    color: #8baa36;
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    @media (min-width: 478px) {
      width: 21px;
      height: 21px;
    }
  }
`;

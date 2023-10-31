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

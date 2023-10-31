import styled from 'styled-components';
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

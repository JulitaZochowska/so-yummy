import {
  HeaderUserModalOverlayStyled,
  HeaderUserModalBodyStyled,
  HeaderUserModalContainerStyled,
  HeaderUserModalEditButton,
  HeaderUserModalLogoutButton,
  HeaderUserModalContainer,
} from './HeaderModals.styled';
import { useEffect } from 'react';
import { ArrowRight, Pen } from './HeaderIcons';

export const HeaderUserModal = ({ onClose, editOpen, logOutOpen }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <HeaderUserModalOverlayStyled onClick={handleOverlayClick}>
      <HeaderUserModalContainer onClick={handleOverlayClick}>
        <HeaderUserModalBodyStyled>
          <HeaderUserModalContainerStyled>
            <HeaderUserModalEditButton
              onClick={() => {
                onClose();
                editOpen();
              }}
            >
              Edit profile
              <Pen />
            </HeaderUserModalEditButton>
            <HeaderUserModalLogoutButton
              onClick={() => {
                onClose();
                logOutOpen();
              }}
            >
              Log-out
              <ArrowRight />
            </HeaderUserModalLogoutButton>
          </HeaderUserModalContainerStyled>
        </HeaderUserModalBodyStyled>
      </HeaderUserModalContainer>
    </HeaderUserModalOverlayStyled>
  );
};

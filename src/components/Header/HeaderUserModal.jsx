import {
  HeaderUserModalEditButton,
  HeaderUserModalLogoutButton,
} from './HeaderModals.styled';
import { useEffect } from 'react';
import { ArrowRight, Pen } from './HeaderIcons';
import css from './Header.module.css';

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
    <div
      className={css.HeaderUserModalOverlayStyled}
      onClick={handleOverlayClick}
    >
      <div
        className={css.HeaderUserModalContainer}
        onClick={handleOverlayClick}
      >
        <div className={css.HeaderUserModalBodyStyled}>
          <div className={css.HeaderUserModalContainerStyled}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

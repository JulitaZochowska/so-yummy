import { useEffect } from 'react';
import { ReactComponent as ArrowRight } from '../../images/Header/ArrowRight.svg';
import { ReactComponent as Pen } from '../../images/Header/pen.svg';
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
            <button
              className={css.HeaderUserModalEditButton}
              onClick={() => {
                onClose();
                editOpen();
              }}
            >
              Edit profile
              <Pen className={css.HeaderUserModalPen} />
            </button>
            <button
              className={css.HeaderUserModalLogoutButton}
              onClick={() => {
                onClose();
                logOutOpen();
              }}
            >
              Log-out
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

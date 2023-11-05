import css from './Header.module.css';
import { useEffect } from 'react';
import { ReactComponent as CrossIcon } from '../../images/Header/CrossIcon.svg';
import { ReactComponent as Empty } from '../../images/Header/Empty.svg';
import { ReactComponent as AddPhotoIcon } from '../../images/Header/AddPhotoIcon.svg';
import { ReactComponent as Man } from '../../images/Header/man.svg';

import { ReactComponent as Pen } from '../../images/Header/pen.svg';

export const HeaderEditModal = ({ onClose }) => {
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

  return (
    <>
      <div className={css.HeaderEditModalOverlayStyled}>
        <div className={css.HeaderEditModalBodyStyled}>
          <div className={css.HeaderEditModalContainerStyled}>
            <button
              className={css.HeaderEditModalCloseButtonStyled}
              onClick={() => {
                onClose();
              }}
            >
              <CrossIcon className={css.CrossIcon} />
            </button>
            <div className={css.HeaderEditModalStyledImgContainer}>
              <Empty className={css.Empty} />
            </div>
            <form className={css.HeaderEditModalForm}>
              <label className={css.HeaderEditModalForm}>
                <input
                  type={'file'}
                  accept={'image/jpeg,image/png,image/gif'}
                  className={css.HeaderEditModalFileInput}
                />

                <AddPhotoIcon className={css.AddPhotoIcon} />
              </label>
              <label className={css.HeaderEditModalNameLabel}>
                <input className={css.HeaderEditModalNameInput} />

                <Pen className={css.HeaderEditModalPen} />
                <Man className={css.Man} />
              </label>
              <button className={css.HeaderEditModalSubmitButton}>
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

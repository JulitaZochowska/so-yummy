import css from './Header.module.css';
import { useEffect, useState } from 'react';

import CrossIcon from '../../images/Header/CrossIcon.svg';
import Empty from '../../images/Header/Empty.svg';
import AddPhotoIcon from '../../images/Header/AddPhotoIcon.svg';
import Man from '../../images/Header/man.svg';
import Pen from '../../images/Header/pen.svg';

import { toast } from 'react-toastify';

export const HeaderEditModal = ({ onClose, avatar, user }) => {
  const [image, setImage] = useState(avatar);
  const [name, setName] = useState(user);

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

  const previewOnChangeImg = e => {
    const [file] = e.target.files;
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    const files = e.target.elements[0].files[0];
    const formData = new FormData();

    if (name === '') {
      return toast.warning('Please enter your name');
    }
    if (files) {
      formData.append('avatar', files);
    }
    if (name) {
      formData.append('name', name);
    }
  };

  const nameOnChange = e => {
    setName(e.target.value);
  };

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
              <img className={css.CrossIcon} src={CrossIcon} alt="CrossIcon" />
            </button>
            <div className={css.HeaderEditModalStyledImgContainer}>
              {image ? (
                <img
                  className={css.HeaderEditModalStyledImg}
                  src={image}
                  alt="CrossIcon"
                />
              ) : (
                <img className={css.Empty} src={Empty} alt="CrossIcon" />
              )}
            </div>
            <form className={css.HeaderEditModalForm} onSubmit={handleOnSubmit}>
              <label className={css.HeaderEditModalForm}>
                <input
                  type={'file'}
                  accept={'image/jpeg,image/png,image/gif'}
                  onChange={previewOnChangeImg}
                  className={css.HeaderEditModalFileInput}
                />

                <img
                  className={css.AddPhotoIcon}
                  src={AddPhotoIcon}
                  alt="CrossIcon"
                />
              </label>
              <label className={css.HeaderEditModalNameLabel}>
                <input
                  value={name}
                  onChange={nameOnChange}
                  className={css.HeaderEditModalNameInput}
                />
                {/* <Man />
                <Pen /> */}
                <img className={css.Pen} src={Pen} alt="CrossIcon" />
                <img className={css.Man} src={Man} alt="CrossIcon" />
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

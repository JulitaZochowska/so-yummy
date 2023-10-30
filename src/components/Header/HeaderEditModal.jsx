import {
  HeaderEditModalOverlayStyled,
  HeaderEditModalBodyStyled,
  HeaderEditModalContainerStyled,
  HeaderEditModalCloseButtonStyled,
  HeaderEditModalStyledImg,
  HeaderEditModalStyledImgContainer,
  HeaderEditModalForm,
  HeaderEditModalFileInput,
  HeaderEditModalFileLabel,
  HeaderEditModalNameLabel,
  HeaderEditModalNameInput,
  HeaderEditModalSubmitButton,
} from './HeaderModals.styled';
import { useEffect, useState } from 'react';
import { CrossIcon, Empty, Man, Pen } from './HeaderIcons';

import { AddPhotoIcon } from './HeaderIcons';

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
      <HeaderEditModalOverlayStyled>
        <HeaderEditModalBodyStyled>
          <HeaderEditModalContainerStyled>
            <HeaderEditModalCloseButtonStyled
              onClick={() => {
                onClose();
              }}
            >
              <CrossIcon />
            </HeaderEditModalCloseButtonStyled>
            <HeaderEditModalStyledImgContainer>
              {image ? <HeaderEditModalStyledImg src={image} /> : <Empty />}
            </HeaderEditModalStyledImgContainer>
            <HeaderEditModalForm onSubmit={handleOnSubmit}>
              <HeaderEditModalFileLabel>
                <HeaderEditModalFileInput
                  type={'file'}
                  accept={'image/jpeg,image/png,image/gif'}
                  onChange={previewOnChangeImg}
                />
                <AddPhotoIcon />
              </HeaderEditModalFileLabel>
              <HeaderEditModalNameLabel>
                <HeaderEditModalNameInput
                  value={name}
                  onChange={nameOnChange}
                />
                <Man />
                <Pen />
              </HeaderEditModalNameLabel>
              <HeaderEditModalSubmitButton>
                Save changes
              </HeaderEditModalSubmitButton>
            </HeaderEditModalForm>
          </HeaderEditModalContainerStyled>
        </HeaderEditModalBodyStyled>
      </HeaderEditModalOverlayStyled>
    </>
  );
};

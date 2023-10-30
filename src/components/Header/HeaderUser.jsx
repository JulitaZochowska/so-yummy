import { useState, useCallback } from 'react';
import {
  HeaderStyledUser,
  HeaderStyledUserText,
  HeaderStyledUserAvatarConteiner,
} from './Header.styled';

import { HeaderUserModal } from './HeaderUserModal';
import { HeaderEditModal } from './HeaderEditModal';
import { HeaderLogoutModal } from './HeaderLogoutModal';
export const HeaderUser = () => {
  const [showUserModal, notShowUserModal] = useState(false);
  const [showEditModal, notShowEditModal] = useState(false);
  const [showLogoutModal, notShowLogoutModal] = useState(false);

  const openUserModal = e => {
    togleUserModal();
  };

  const openEditModal = e => {
    togleEditModal();
  };

  const openLogoutModal = e => {
    togleLogoutModal();
  };

  const togleUserModal = useCallback(() => {
    notShowUserModal(!showUserModal);
  }, [showUserModal]);

  const togleEditModal = useCallback(() => {
    notShowEditModal(!showEditModal);
  }, [showEditModal]);

  const togleLogoutModal = useCallback(() => {
    notShowLogoutModal(!showLogoutModal);
  }, [showLogoutModal]);

  return (
    <>
      <HeaderStyledUser onClick={openUserModal}>
        <HeaderStyledUserAvatarConteiner></HeaderStyledUserAvatarConteiner>

        <HeaderStyledUserText>Name</HeaderStyledUserText>
      </HeaderStyledUser>
      {showUserModal && (
        <HeaderUserModal
          onClose={togleUserModal}
          editOpen={openEditModal}
          logOutOpen={openLogoutModal}
        />
      )}
      {showLogoutModal && <HeaderLogoutModal onClose={togleLogoutModal} />}
      {showEditModal && <HeaderEditModal onClose={togleEditModal} />}
    </>
  );
};

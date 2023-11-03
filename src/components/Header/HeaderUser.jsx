import { useState, useCallback } from 'react';
import css from './Header.module.css';
import { HeaderUserModal } from './HeaderUserModal';
import { HeaderEditModal } from './HeaderEditModal';
import { HeaderLogoutModal } from './HeaderLogoutModal';
import { getAvatar, getName } from 'redux/selectors/users.selectors';
import { useSelector } from 'react-redux';

export const HeaderUser = () => {
  const [showUserModal, notShowUserModal] = useState(false);
  const [showEditModal, notShowEditModal] = useState(false);
  const [showLogoutModal, notShowLogoutModal] = useState(false);

  const userName = useSelector(getName);
  const userAvatar = useSelector(getAvatar);

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
      <div className={css.HeaderStyledUser} onClick={openUserModal}>
        <div className={css.HeaderStyledUserAvatarConteiner}>{userAvatar}</div>

        <div className={css.HeaderStyledUserText}>{userName}</div>
      </div>
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

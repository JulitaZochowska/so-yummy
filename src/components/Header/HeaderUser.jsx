import { useCallback } from 'react';
import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import { HeaderUserModal } from './HeaderUserModal';
import { HeaderEditModal } from './HeaderEditModal';
import { HeaderLogoutModal } from './HeaderLogoutModal';
import { selectAvatar, selectName } from 'redux/selectors/users.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from 'redux/actions/users.actions';
import { ReactComponent as Placeholder } from '../../images/Header/avatar-icon.svg';

// console.log(state.auth);

export const HeaderUser = () => {
  const [showUserModal, notShowUserModal] = useState(false);
  const [showEditModal, notShowEditModal] = useState(false);
  const [showLogoutModal, notShowLogoutModal] = useState(false);

  const userName = useSelector(selectName);
  const userAvatar = useSelector(selectAvatar);

  // const { name } = useSelector(state => state.name);
  // const { userName, userAvatar } = useSelector(state => state.auth);

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
        <div className={css.HeaderStyledUserAvatarConteiner}>
          {userAvatar || (
            <span>
              <Placeholder className={css.HeaderStyledUserAvatarPlaceholder} />
            </span>
          )}
        </div>

        <div className={css.HeaderStyledUserText}>
          {userName || <span>User</span>}
        </div>
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

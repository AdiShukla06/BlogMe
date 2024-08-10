import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className='px-4 py-2 text-white bg-[#7091E6] rounded-full hover:bg-[#8697C4] transition-colors duration-300'
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;

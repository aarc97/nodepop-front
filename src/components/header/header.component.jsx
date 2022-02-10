import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession.hooks";
import { isEmpty } from "../../utils/common/functions";
import "./header.styles.css";

const Header = () => {
  const { currentUser, removeUserSession } = useSession();

  const navigate = useNavigate();

  const handleLogOut = async (event) => {
    event.preventDefault();
    removeUserSession();
    navigate("/login");
  };
  return (
    <div className='header'>
      <div className='options'>
        <CustomNavLinks className='option' to='/adverts'>
          Adverts
        </CustomNavLinks>
        {!isEmpty(currentUser) ? (
          <span className='option' onClick={handleLogOut}>
            LogOut
          </span>
        ) : (
          <CustomNavLinks className='option' to='/login'>
            Login
          </CustomNavLinks>
        )}
      </div>
    </div>
  );
};
export default Header;

const CustomNavLinks = (props) => {
  return (
    <NavLink
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#00000014" : "#fff",
      })}
      {...props}
    />
  );
};

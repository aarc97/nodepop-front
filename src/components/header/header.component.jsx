import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/SessionContext';
import './header.styles.css';

const Header = () => {
  const userContext = useContext(UserContext);
  const { currentUser } = userContext.state;
  const { removeUserSession } = userContext.actions;

  const navigate = useNavigate();

  const handleLogOut = async (event) => {
    event.preventDefault();
    removeUserSession();
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/adverts">
          Adverts
        </Link>
        {Object.keys(currentUser).length > 0 ? (
          <span className="option" onClick={handleLogOut}>
            LogOut
          </span>
        ) : (
          <Link className="option" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;

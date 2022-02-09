import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { userLogin } from '../../utils/api/user';

import './login.styles.css';

import { UserContext } from '../../context/SessionContext';

const Login = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const { currentUser } = userContext.state;
  const { storeUserSession } = userContext.actions;

  useEffect(() => {
    if (Object.keys(currentUser).length > 0) {
      navigate('/adverts');
    }
  }, []);

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    const { email, password } = userCredentials;
    const userLoginResponse = await userLogin(email, password);
    console.log('response', userLoginResponse);
    const { valid, message, token } = userLoginResponse;
    if (valid) {
      storeUserSession({ email, token });
      navigate('/adverts');
    } else {
      setErrorMessage(message);
    }
  };

  const handleChange = (event) => {
    setErrorMessage('');
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;

  return (
    <div className="login">
      <form>
        <FormInput
          name="email"
          value={email}
          type="email"
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          value={password}
          type="password"
          label="password"
          handleChange={handleChange}
        />
        <span className="form-error-message">{errorMessage}</span>
        <CustomButton label="Sign In" type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};
export default Login;

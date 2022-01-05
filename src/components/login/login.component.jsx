import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { userLogin } from '../../utils/api/user';

import './login.styles.css';

const Login = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    setErrorMessage('');
    event.preventDefault();
    const { email, password } = userCredentials;
    const userLoginResponse = await userLogin(email, password);
    setErrorMessage(userLoginResponse.message);
    console.log(userLoginResponse);
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
        <CustomButton
          className="button"
          label="Sign In"
          type="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
export default Login;

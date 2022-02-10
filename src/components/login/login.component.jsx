import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { isEmpty } from "../../utils/common/functions";
import useSession from "../../hooks/useSession.hooks";
import { onLogin } from "../../store/auth/auth.thunk";

import "./login.styles.css";

const Login = () => {
  const navigate = useNavigate();

  const { currentUser } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(currentUser)) {
      navigate("/adverts");
    }
  }, [currentUser]);

  const [userCredentials, setCredentials] = useState({
    email: "test@example.com",
    password: "test1234",
    remember: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(
      onLogin({ user: userCredentials, onError: setErrorMessage, navigate })
    );
  };

  const handleChange = (event) => {
    setErrorMessage("");
    const { value, name, type, checked } = event.target;

    if (type === "checkbox") {
      return setCredentials({ ...userCredentials, [name]: checked });
    }
    setCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password, remember } = userCredentials;

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          value={email}
          type='email'
          label='email'
          handleChange={handleChange}
        />
        <FormInput
          name='password'
          value={password}
          type='password'
          label='password'
          handleChange={handleChange}
        />
        <div style={{ marginBottom: 24 }}>
          <label>
            <input
              name='remember'
              type='checkbox'
              checked={remember}
              onChange={handleChange}
            />
            Remember session
          </label>
        </div>
        <span className='form-error-message'>{errorMessage}</span>
        <CustomButton label='Sign In' type='submit' />
      </form>
    </div>
  );
};
export default Login;

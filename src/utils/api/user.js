import axios from 'axios';
import { ApiConnection } from './api_connection_data';

export const userLogin = async (email, password) => {
  try {
    const { HOST_NAME, PORT } = ApiConnection;

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await axios.post(
      `http://${HOST_NAME}:${PORT}/api/auth/login`,
      { email: email, password: password },
      config
    );
    console.log('response', response.data);
    if (response.status === 201) {
      const { accessToken } = response.data;
      return {
        valid: true,
        email: email,
        password: password,
        accessToken: accessToken,
        message: 'USER_SUCCESFULLY_SIGNED_IN',
      };
    } else {
      return { valid: true, accessToken: null, message: response.message };
    }
  } catch (error) {
    return { valid: false, accessToken: null, message: error.message };
  }
};

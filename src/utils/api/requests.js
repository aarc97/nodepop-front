import axios from 'axios';

import { ApiConnection } from './api_connection_data';
import { getSession } from '../storage/user_session';

const config = {
  headers: { 'Content-Type': 'application/json' },
};
const { HOST_NAME, PORT } = ApiConnection;

export const request = async (type, path, params) => {
  const { token } = getSession();
  if (token !== '') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  try {
    let response;
    switch (type) {
      case 'post':
        response = await axios.post(
          `http://${HOST_NAME}:${PORT}/api${path}`,
          params,
          config
        );
        break;
      default:
        response = await axios.get(
          `http://${HOST_NAME}:${PORT}/api${path}`,
          config
        );
    }
    if (response.status === 201 || response.status === 200) {
      return {
        valid: true,
        data: response.data,
        message: response.message,
      };
    } else {
      return {
        valid: false,
        data: null,
        message: response.message,
        status: response.status,
      };
    }
  } catch (error) {
    return { valid: false, data: null, message: error.message };
  }
};

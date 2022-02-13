import { getSession } from "../storage/user_session";
import axios from "./core";

const config = { headers: {} };

export const request = async (type, path, params) => {
  const { token } = getSession();
  if (token !== "") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  try {
    let response;
    switch (type) {
      case "post":
        response = await axios.post(`${path}`, params, config);
        break;
      case "delete":
        response = await axios.delete(`${path}`, params, config);
        break;
      default:
        response = await axios.get(`${path}`, config);
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

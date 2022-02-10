import { request } from "./requests";

export const userLogin = async (email, password) => {
  try {
    const response = await request("post", "/auth/login", {
      email,
      password,
    });
    const { valid, data, message } = response;
    if (valid) {
      const { accessToken } = data;
      return {
        valid: true,
        email: email,
        token: accessToken,
        message: "USER_SUCCESFULLY_SIGNED_IN",
      };
    } else {
      return { valid, data, message };
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

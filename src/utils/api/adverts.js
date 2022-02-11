import { request } from "./requests";

export const getAllAdverts = async () => {
  try {
    const response = await request("get", "/v1/adverts", {});
    const { valid, data, message } = response;
    if (valid) {
      return {
        valid: true,
        adverts: data,
        message: "ADVERTS_FOUND",
      };
    } else {
      return { valid, data, message };
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

export const getAdvert = async (advertId) => {
  try {
    const response = await request("get", "/v1/login", { advertId });
    const { valid, data, message } = response;
    if (valid) {
      const { accessToken } = data;
      return {
        valid: true,
        message: "USER_SUCCESFULLY_SIGNED_IN",
      };
    }
    return { valid, data, message };
  } catch (error) {
    console.log("error", error.message);
  }
};

export const getAdvertTagsFromServer = async () => {
  try {
    const response = await request("get", "/v1/adverts/tags", {});
    const { valid, data, message } = response;
    if (valid) {
      return {
        valid: true,
        data,
        message: "ADVERTS_TAGS",
      };
    }
    return { valid, data, message };
  } catch (error) {
    console.log("error", error.message);
  }
};

export const addAdvertToServer = async (advertDetails) => {
  try {
    const response = await request("post", "/v1/adverts", { ...advertDetails });
    const { valid, data, message } = response;

    if (valid) {
      return {
        valid: true,
        data,
        message: "ADVERT_SUCCESSFULLY_ADDED",
      };
    }
    return { valid, data, message };
  } catch (error) {
    console.log("error", error.message);
  }
};

export const deleteAdvertFromServer = async (advertId) => {
  try {
    const response = await request("delete", "/v1/adverts", { id: advertId });

    const { valid, data, message } = response;

    if (!valid) {
      const { accessToken } = data;
      return {
        valid: true,
        message: "ADVERT_SUCCESSFULLY_DELETED",
      };
    }
    return { valid, data, message };
  } catch (error) {
    console.log("error", error.message);
  }
};

export const advertCRUD = async (action, params) => {
  /*
  try {
    const response = await request('post', '/auth/login', { email, password });
    const { valid, data, message } = response;
    if (valid) {
      const { accessToken } = data;
      return {
        valid: true,
        email: email,
        accessToken: accessToken,
        message: 'USER_SUCCESFULLY_SIGNED_IN',
      };
    } else {
      return { valid, data, message };
    }
  } catch (error) {
    console.log('error', error.message);
  }
  */
};

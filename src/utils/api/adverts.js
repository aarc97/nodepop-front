import { request } from './requests';

export const getAllAdverts = async () => {
  try {
    const response = await request('get', '/v1/adverts', {});
    const { valid, data, message } = response;
    if (valid) {
      return {
        valid: true,
        adverts: data,
        message: 'ADVERTS_FOUND',
      };
    } else {
      return { valid, data, message };
    }
  } catch (error) {
    console.log('error', error.message);
  }
};

export const getAdvert = async (advertId) => {
  try {
    const response = await request('post', '/v1/login', { advertId });
    const { valid, data, message } = response;
    if (valid) {
      const { accessToken } = data;
      return {
        valid: true,
        message: 'USER_SUCCESFULLY_SIGNED_IN',
      };
    } else {
      return { valid, data, message };
    }
  } catch (error) {
    console.log('error', error.message);
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

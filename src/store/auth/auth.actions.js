export const SAVE_TOKEN = "auth/save_token";
export const SAVE_USER = "auth/save_user";
export const SAVE_TOKEN_STORAGE = "auth/save_token_into_storage";
export const ON_LOGIN = "auth/on_login";

const saveUser = (payload) => {
  return {
    type: SAVE_USER,
    payload,
  };
};

export { saveUser };

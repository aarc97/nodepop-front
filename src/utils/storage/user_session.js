export const storeSession = (userEmail, userToken) => {
  const email = localStorage.setItem("USER_EMAIL", userEmail);
  const token = localStorage.setItem("USER_TOKEN", userToken);
  return { email, token };
};

export const getSession = () => {
  const email = localStorage.getItem("USER_EMAIL");
  const token = localStorage.getItem("USER_TOKEN");
  if (email === null) return {};
  return { email, token };
};

export const removeSession = () => {
  localStorage.removeItem("USER_EMAIL");
  localStorage.removeItem("USER_TOKEN");
  return {};
};

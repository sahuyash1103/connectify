import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const getToken = () => {
  const token = getCookie("x-auth-token");
  if (!token) return null;
  return token;
};

export const getUser = () => {
  const user = getCookie("user");
  if (!user) return null;
  return JSON.parse(user);
};

export const setToken = (token) => {
  const expDate = new Date();
  expDate.setDate(expDate.getDate() + 1);
  setCookie("x-auth-token", token);
};

export const setUser = (user) => {
  const expDate = new Date();
  expDate.setDate(expDate.getDate() + 1);
  setCookie("user", JSON.stringify(user), { expires: expDate });
};

export const removeAuthCookie = () => {
  deleteCookie("x-auth-token");
  deleteCookie("user");
};

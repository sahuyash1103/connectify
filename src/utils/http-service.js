import httpRequest from "@/utils/http-request";
import { getToken, setToken, setUser, removeAuthCookie } from "./cookies";

export const registerUser = async (signupData) => {
  const res = await httpRequest("auth/signup/", "POST", {
    body: signupData,
  });

  if (res?.status === 200) {
    const token = res.headers.get("x-auth-token");
    setToken(token);
  }
  return res;
};

export const verifyUser = async (loginData) => {
  const res = await httpRequest("auth/login/", "POST", {
    body: loginData,
  });

  if (res?.status === 200) {
    const token = res.headers.get("x-auth-token");
    setToken(token);
  }
  return res;
};

export const getUserData = async () => {
  const token = getToken();
  if (!token) {
    removeAuthCookie();
    return { data: "No Token", status: 0 };
  }
  const res = await httpRequest("profile/", "GET", {
    headers: {
      "x-auth-token": token,
    },
  });

  if (res?.status === 200) {
    setUser(res?.data);
  }

  return res;
};

export const updateUserData = async (data) => {
  const token = getToken();
  if (!token) {
    removeAuthCookie();
    return { data: "No Token", status: 0 };
  }
  const res = await httpRequest("profile/update/", "PUT", {
    headers: {
      "x-auth-token": token,
    },
    body: data,
  });

  if (res?.status === 200) {
    setUser(res?.data);
  }
  
  return res;
};

export const getUserConnectionsData = async () => {
  const token = getToken();
  if (!token) {
    removeAuthCookie();
    return { data: "No Token", status: 0 };
  }
  const res = await httpRequest("connections/my/", "GET", {
    headers: {
      "x-auth-token": token,
    },
  });
  return res;
};

export const getAllConnectionsData = async () => {
  const token = getToken();
  if (!token) {
    removeAuthCookie();
    return { data: "No Token", status: 0 };
  }
  const res = await httpRequest("connections/all/", "GET", {
    headers: {
      "x-auth-token": token,
    },
  });
  return res;
};

export const connectToUserPutReq = async (email) => {
  const token = getToken();
  if (!token) {
    removeAuthCookie();
    return { data: "No Token", status: 0 };
  }
  const res = await httpRequest("connections/connect/", "PUT", {
    headers: {
      "x-auth-token": token,
    },
    body: {
      emailToConnect: email,
    },
  });
  return res;
};

export const disconnectToUserPutReq = async (email) => {
  const token = getToken();
  if (!token) {
    removeAuthCookie();
    return { data: "No Token", status: 0 };
  }
  const res = await httpRequest("connections/disconnect/", "DELETE", {
    headers: {
      "x-auth-token": token,
    },
    body: {
      emailToDisconnect: email,
    },
  });
  return res;
};










import { AuthBindings, AuthProvider, useList } from "@refinedev/core";
import axios from 'axios';
import { API_URL } from "@/App";

export const authProvider: AuthBindings = {
  login: async ({ username, password }) => {
    const data = await axios.get(`${API_URL}collection/api/user`);
    const user = data.data.find((item:any) => item.username === username);
    console.log(user)
    if (user) {
      localStorage.setItem("username",user.username);
      localStorage.setItem("auth",user.token);
      return {
        success: true,
        redirectTo: "/dashboard",
      };
    }
    return {
      success: false,
      error: {
        message: "Login Error",
        name: "Invalid email or password",
      },
    };
  },
  getIdentity() {
    return JSON.parse(localStorage.getItem("username") || "{}");
  },
  logout: async () => {
    localStorage.removeItem("username");
    localStorage.removeItem("auth");
    return { success: true, redirectTo: "/" };
  },
  // check: async () => {
  //   try {
  //     const authString = localStorage.getItem("auth");
  //     if (!authString) throw new Error();

  //     const auth = JSON.parse(authString);
  //     if (!auth || !auth.expires_at) throw new Error();

  //     console.log(auth.expires_at, auth.expires_at - Date.now(), Date.now());

  //     if (auth.expires_at > Date.now()) {
  //       return { authenticated: true };
  //     }

  //     return { authenticated: true };
  //   } catch (error) {
  //     return {
  //       authenticated: false,
  //       logout: true,
  //       redirectTo: "/login",
  //       error: { message: "Check failed", name: "Unauthorized" }
  //     };
  //   }
  // },
    check: async () => {
    const token = localStorage.getItem("auth");
    const user = localStorage.getItem("username");
    if (token && user) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/",
    };
  },
  onError: async (error) => {
    if (error.status === 401 || error.status === 403) {
      return {
        logout: true,
        redirectTo: "/",
        error
      };
    }

    return {};
  }
};
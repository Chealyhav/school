import { API_URL } from "@/api/url";
import { AuthBindings} from "@refinedev/core";
import axios from "axios";


export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    const login = await axios.post(`${API_URL}/collection/api/login`, {
      email,
      password,
    });
    const { data } = login;
    if (data) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("auth", data.refresh);
      localStorage.setItem("role", data.role);
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
    localStorage.removeItem("role");
    return { success: true, redirectTo: "/" };
  },
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
        error,
      };
    }

    return {};
  },
};

import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { router } from "../routes";
import { setAuthData } from "./utils/setAuthData";

export const useAuthStore = defineStore("auth", () => {
  const email = ref<string>("");
  const password = ref<string>("");
  const userToken = ref<string>("");
  const isAuthorizated = ref<boolean>(false);
  const userRole = ref<string>("");

  const register = async (roleName: string) => {
    try {
      const payload = {
        email: email.value,
        password: password.value,
        roleName: roleName,
      };
      const response = await axios.post(
        `http://localhost:3000/api/auth/register`,
        payload
      );
      userToken.value = response.data.accessToken;
      userRole.value = response.data.roleId;
      localStorage.setItem("token", response.data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      const payload = {
        email: email.value,
        password: password.value,
      };
      const response = await axios.post(
        `http://localhost:3000/api/auth/login`,
        payload
      );
      userToken.value = response.data.accessToken;
      userRole.value = response.data.roleId;
      isAuthorizated.value = true;
      setAuthData(response.data.accessToken, response.data.roleId);
    } catch (err) {
      console.log(err);
    }
  };

  const loginAdmin = async () => {
    try {
      const payload = {
        email: email.value,
        password: password.value,
      };
      const response = await axios.post(
        `http://localhost:3000/api/auth/login`,
        payload
      );
      if (response.data.role === "admin") {
        userRole.value = response.data.role;
        userToken.value = response.data.accessToken;
        isAuthorizated.value = true;
        setAuthData(userToken.value, userRole.value);
        router.push("/admin-panel");
      } else {
        console.log("You are not admin");
        router.push("/auth");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = async () => {
    try {
      if (userToken) {
        userToken.value = "";
        userRole.value = "";
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        isAuthorizated.value = false;
        router.push("/auth");
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    email,
    password,
    userToken,
    userRole,
    isAuthorizated,
    login,
    register,
    signOut,
    loginAdmin,
  };
});

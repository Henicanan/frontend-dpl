import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { router } from "../routes";

export const useAuthStore = defineStore("auth", () => {
  const email = ref<string>("");
  const password = ref<string>("");
  const userToken = ref<string | null>("");
  const isAuthorizated = ref<boolean>(false);

  const register = async (roleName: string) => {
    try {
      const payload = {
        email: email.value,
        password: password.value,
        roleName: roleName,
      };
      const response = await axios.post(
        `http://localhost:${import.meta.env.PORT}/api/auth/register`,
        payload
      );
      userToken.value = response.data.accessToken;
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
      localStorage.setItem("token", response.data.accessToken);
      isAuthorizated.value = true;
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = async () => {
    try {
      if (userToken) {
        userToken.value = null;
        localStorage.removeItem("token");
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
    isAuthorizated,
    login,
    register,
    signOut,
  };
});

import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const email = ref("");
  const password = ref("");
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
        `http://localhost:${import.meta.env.PORT}/api/auth/login`,
        payload
      );
      console.log(response);
      userToken.value = response.data.accessToken;
      console.log(userToken.value);
      localStorage.setItem("token", response.data.accessToken);
      isAuthorizated.value = true;
    } catch (err) {
      console.log(err);
    }
  };
  return {
    email,
    password,
    userToken,
    login,
    register,
  };
});

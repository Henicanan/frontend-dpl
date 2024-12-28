import { ref } from "vue";
import axios from "axios";
import type { ModeratorResponse, Moderator } from "../types";

export function useModerators() {
  const moderators = ref<Moderator[]>([]);
  const inputSearchModerator = ref<string>("");
  const loading = ref<boolean>(false);

  const fetchModerators = async () => {
    loading.value = true;
    try {
      const response = await axios.get<ModeratorResponse>(
        "http://localhost:3000/api/moderator/get-all-moderators",
        {
          params: {
            search: inputSearchModerator.value,
          },
        }
      );

      moderators.value = response.data.moderators;
      console.log(moderators.value);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  };

  const createModerator = async (
    roleName: string,
    email: string,
    password: string
  ) => {
    console.log(roleName, email, password);
    try {
      const payload = {
        email: email,
        password: password,
        roleName: roleName,
      };
      const response = await axios.post(
        `http://localhost:3000/api/auth/register`,
        payload
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    createModerator,
    fetchModerators,
    inputSearchModerator,
    loading,
    moderators,
  };
}

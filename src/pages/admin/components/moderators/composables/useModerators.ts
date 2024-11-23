import { ref } from "vue";
import axios from "axios";
import type { ModeratorResponse, Moderator } from "../types";

export function useStudents() {
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

  return {
    fetchModerators,
    inputSearchModerator,
    loading,
    moderators,
  };
}

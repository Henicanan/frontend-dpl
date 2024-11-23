import { ref } from "vue";
import type { Block, BlockResponse } from "../types";
import axios from "axios";

export function useCourse() {
  const blocks = ref<Block[]>([]);
  const inputSearchBlock = ref<string>("");
  const loading = ref<boolean>(false);
  const blockName = ref<string>("");
  const blockId = ref(null)

  const createBlock = async()=>{
    loading.value = true;
    try{
        const response = await axios.post<Block>(
            "http://localhost:3000/api/material/create-block",
            {
                title:blockName.value,
                id: blockId.value
            }
        )
        console.log(response.data)
    }
  }
}

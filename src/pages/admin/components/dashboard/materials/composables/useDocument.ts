import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useFolder } from "./useFolder";

const { folders, findFolderById } = useFolder();

export function useDocument() {
  const documentName = ref<string>("");

  const createDocument = async (folderId: string) => {
    const newDocument = {
      id: uuidv4(),
      name: documentName.value || "Новый документ",
      folderId: folderId,
      content: "",
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/material/create-document",
        {
          title: newDocument.name,
          name: newDocument.content,
          folderId: newDocument.folderId,
        }
      );
      if (response.status === 200) {
        if (folderId) {
          const folder = findFolderById(folderId, folders.value);
          if (folder) {
            folder.items.push(newDocument);
          }
        }
        documentName.value = "";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { documentName, createDocument };
}

import { ref } from "vue";
import type { Folder } from "../types";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export function useFolder() {
  const folders = ref<Folder[]>([]);
  const folderName = ref<string>("");

  const createFolder = async (parentId: string | null = null) => {
    const newFolder: Folder = {
      id: uuidv4(),
      title: folderName.value || "Новая папка",
      items: [],
      subfolders: [],
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/material/create-folder",
        {
          id: newFolder.id,
          title: newFolder.title,
          parentId: parentId,
        }
      );

      if (response.status === 200) {
        if (parentId) {
          const parentFolder = findFolderById(parentId, folders.value);
          if (parentFolder) {
            parentFolder.subfolders.push(newFolder);
          }
        } else {
          folders.value.push(newFolder);
        }
        folderName.value = "";
      }
    } catch (error) {
      console.error("Ошибка при создании папки:", error);
    }
  };

  const findFolderById = (id: string, folders: Folder[]): Folder | null => {
    for (const folder of folders) {
      if (folder.id === id) return folder;
      const found = findFolderById(id, folder.subfolders);
      if (found) return found;
    }
    return null;
  };

  const getAllFolders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/material/get-all-folders"
      );
      folders.value = response.data;
    } catch (error) {
      console.error("Ошибка при получении папок:", error);
    }
  };

  return {
    folders,
    folderName,
    createFolder,
    getAllFolders,
    findFolderById,
  };
}

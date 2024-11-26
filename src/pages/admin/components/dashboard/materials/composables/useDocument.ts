import { ref } from "vue";
import axios from "axios";
import type { Document } from "../types/document";

export function useDocument() {
  const loading = ref<boolean>(false);
  const documentName = ref<string>("");
  const documents = ref<Document[]>([]);
  const deletedDocumentIds = ref<Set<string>>(new Set());

  const createDocument = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/material/create-document",
        {
          title: documentName.value.trim() || "Новый документ",
          content: "",
        }
      );
      documentName.value = "";
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllDocument = async () => {
    loading.value = true;
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/material/get-all-documents`
        );
        documents.value = response.data;
        console.log(documents.value);
      } catch (err) {
        console.log(err);
      } finally {
        loading.value = false;
      }
    }, 5000);
  };

  const getDocumentById = async (id: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/material/get-document/${id}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateDocument = async (id: string, content: string) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/material/update-document/${id}`,
        {
          content,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      await axios.patch(
        `http://localhost:3000/api/material/delete-document/${id}`
      );
      deletedDocumentIds.value.add(id);
      getAllDocument();
    } catch (err) {
      console.log(err);
    }
  };

  return {
    documentName,
    createDocument,
    getAllDocument,
    updateDocument,
    documents,
    deleteDocument,
    deletedDocumentIds,
    getDocumentById,
    loading,
  };
}

<script setup lang="ts">
import DocumentIcon from "@/assets/img-document/document-icon.vue";
import TrashIcon from "@/components/icons/trash-icon.vue";
import { useDocument } from "../composables/useDocument";

const { deleteDocument, deletedDocumentIds } = useDocument();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const isDeleted = (id: string) => {
  return deletedDocumentIds.value.has(id);
};

const openDocument = () => {
  window.open(`/admin-panel/document/${props.id}`, "_blank");
};
</script>

<template>
  <div class="document-card" @click="openDocument">
    <div class="delete-btn">
      <TrashIcon @click="deleteDocument(props.id)" />
    </div>
    <div class="document-icon">
      <DocumentIcon class="icon" />
    </div>
    <div class="document-info">
      <h3 class="document-title">{{ props.title }}</h3>
      <span v-if="isDeleted(props.id)" class="document-delete-title"
        >(удалено)</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.document-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative; /* Для позиционирования вложенных элементов относительно карточки */

  .delete-btn {
    position: absolute; /* Абсолютное позиционирование */
    top: 10px; /* Отступ сверху */
    right: 10px; /* Отступ справа */
    cursor: pointer;
    font-size: 20px;

    &:hover {
      color: red;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .document-icon {
    margin-bottom: 12px;
    margin-top: 14px;
    .icon {
      font-size: 40px;
      color: #007bff;
    }
  }

  .document-info {
    .document-title {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin-top: 8px;
    }
  }
}
</style>

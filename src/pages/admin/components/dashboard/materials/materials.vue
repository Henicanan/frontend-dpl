<script setup lang="ts">
import { onMounted } from "vue";
import CreateDocument from "./components/create-document.vue";
import DocumentItem from "@/pages/admin/components/dashboard/materials/components/document-item.vue";
import { useDocument } from "./composables/useDocument";
import CircleSpinner from "@/components/spinner/circle-spinner.vue";

const { getAllDocument, documents, loading } = useDocument();

onMounted(() => {
  getAllDocument();
});
</script>

<template>
  <div class="materials">
    <div>
      <div class="create-block">
        <CreateDocument />
      </div>
      <div v-if="loading" class="loading-spinner">
        <CircleSpinner />
      </div>
      <div class="materials-list">
        <DocumentItem
          v-for="document in documents"
          :key="document.id"
          :title="document.title"
          :id="document.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.materials {
  display: flex;
  flex-direction: column;

  .create-block {
    margin-bottom: 20px;
  }

  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .materials-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>

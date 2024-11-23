<script setup lang="ts">
import { onMounted, ref } from "vue";
import CreateMaterials from "./components/create-materials.vue";
import MaterialFolderList from "./components/material-folder-item.vue";
import MaterailDocumentItem from "./components/materail-document-item.vue";
import { useFolder } from "./composables/useFolder";

const { folders, getAllFolders } = useFolder();

const selectedIdFolder = ref<string>("");
const selectedNameFolder = ref<string>("");

const handleFolderOpen = (folderId: string, folderName: string) => {
  selectedIdFolder.value = folderId;
  selectedNameFolder.value = folderName;
};

onMounted(() => {
  getAllFolders();
});
</script>

<template>
  <div class="materials">
    <div v-if="!selectedIdFolder">
      <div class="create-block">
        <CreateMaterials />
      </div>
      <div class="materials-list">
        <MaterialFolderList
          v-for="folder in folders"
          :key="folder.id"
          :folderName="folder.title"
          :folderId="folder.id"
          :required="true"
          @click="handleFolderOpen(folder.id, folder.title)"
        />
      </div>
    </div>
    <div v-else class="document-list">
      <MaterailDocumentItem
        :folderName="selectedNameFolder"
        :folderId="selectedIdFolder"
      />
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

  .materials-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>

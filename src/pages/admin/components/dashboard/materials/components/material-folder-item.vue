<script setup lang="ts">
import foldericon from "../../../../../../assets/img-folder/folder-icon.png";

const props = defineProps<{
  folderName: string;
  folderId: string;
  required: true;
}>();

const emit = defineEmits<{
  (event: "click", folderId: string): void;
}>();
</script>

<template>
  <div class="material-folder-item" @click="emit('click', props.folderId)">
    <div class="wrapper-folder-icon">
      <img :src="foldericon" class="folder-icon" />
    </div>
    <div class="material-folder-name">
      <span>{{ props.folderName }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.material-folder-item {
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .wrapper-folder-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  .folder-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .material-folder-name {
    font-size: 16px;
    color: #333;
    text-align: center;
  }
}
</style>

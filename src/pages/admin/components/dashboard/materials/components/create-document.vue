<script setup lang="ts">
import { ref } from "vue";
import { useDocument } from "../composables/useDocument";
import PlusIcon from "@/components/icons/plus-icon.vue";
import UploadButton from "@/components/icons/check-line.vue";

const { documentName, createDocument } = useDocument();

const isShowInput = ref<boolean>(false);

const showInputCreateDocument = () => {
  isShowInput.value = !isShowInput.value;
};
</script>

<template>
  <div class="document-create-wrapper">
    <div class="create-document">
      <button @click="showInputCreateDocument" class="create-document-btn">
        <PlusIcon class="plus-icon" /> Создать документ
      </button>
      <div v-if="isShowInput" class="input-wrapper">
        <input class="input-create-document" v-model="documentName" />
        <UploadButton @click="createDocument" class="upload-btn" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.create-document {
  display: flex;
  flex-direction: column;

  .create-document-btn {
    width: 13rem;
    background-color: $blue-color;
    color: white;
    padding: 10px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 17px;

    .plus-icon {
      font-size: 20px;
      margin-right: 10px;
    }
  }

  .input-wrapper {
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 10px;

    .input-create-document {
      width: 13rem;
      padding: 5px 8px;
      background: #f4f4f4;
      border-radius: 7px;
    }

    .upload-btn {
      font-size: 30px;
      border: 2px solid $blue-color;
      border-radius: 5px;
      cursor: pointer;
      transition: border-color 0.3s;
      padding: 5px;
    }

    .upload-btn:hover {
      border-color: darken($blue-color, 10%);
    }
  }
}
</style>

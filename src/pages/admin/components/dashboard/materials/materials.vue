<script setup lang="ts">
import { ref } from "vue";
import UploadBtn from "../../../../../components/button/upload-btn.vue";

const isShowInput = ref<boolean>(false);

const showInputCreateMaterial = () => {
  isShowInput.value = !isShowInput.value;
};
</script>

<template>
  <div class="materials">
    <div class="add-block-materials">
      <button @click="showInputCreateMaterial" class="add-materials-btn">
        Добавить блок
      </button>
      <div v-if="isShowInput">
        <UploadBtn />
        <input
          class="input-create-material"
          type="text"
          placeholder="Введите название блока"
        />
        <button class="save-materials-btn">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-block-materials {
  display: flex;
  flex-direction: column;
  width: 17rem;
  gap: 10px;

  .add-materials-btn {
    background-color: $blue-color;
    color: white;
    padding: 15px;
    border-radius: 5px;
    border: none;
    width: 9rem;

    &:hover {
      background-color: #0056b3;
      color: #c7c7c7;
    }
  }

  .input-create-material {
    margin-top: 10px;
    width: fit-content;
    padding: 5px;
    padding-left: 10px;
    font-size: 20px;
    height: 2rem;
    border: none;
    background: #f4f4f4;
    border-bottom: 1px solid black;
  }

  .save-materials-btn {
    margin-top: 10px;
    border: 2px solid $blue-color;
    border-radius: 5px;
    padding: 10px;
    background-color: none;
    color: $blue-color;

    &:hover {
      background-color: #d1cfcf;
    }
  }
}
</style>

<script setup lang="ts">
import CloudIcon from "../icons/upload-icon.vue";
</script>

<template>
  <label class="upload-btn blue-btn">
    <CloudIcon class="icon" /> Загрузить
    <input type="file" hidden />
  </label>
</template>

<style lang="scss" scoped>
.upload-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: $blue-color;
  transition: background-color 0.3s;
  width: 10rem;

  .icon {
    color: white;
  }

  input {
    display: none;
  }

  &:hover {
    opacity: 0.9;
  }
}

.blue-btn {
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
}
</style>

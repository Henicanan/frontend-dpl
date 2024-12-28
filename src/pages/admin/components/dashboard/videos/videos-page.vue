<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const selectedFile = ref(null);

const onFileSelected = (event: any) => {
  selectedFile.value = event.target.files[0];
};

const uploadVideo = async () => {
  if (!selectedFile.value) return;

  const formData = new FormData();
  formData.append("video", selectedFile.value);

  try {
    const response = await axios.post(
      "http//localhost:3000/api/videos/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Видео успешно загружеено");
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div>
    <h2>Загрузить видео</h2>
    <input type="file" accept="video/*" @change="onFileSelected" />
    <button @click="uploadVideo" :disabled="!selectedFile">Загрузить</button>
  </div>
</template>

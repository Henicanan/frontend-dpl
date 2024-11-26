<script setup lang="ts">
import { useRoute } from "vue-router";
import { useDocument } from "../composables/useDocument";
import { onMounted, ref, watch } from "vue";
import debounce from "lodash/debounce";
import { ToggleSwitch } from "primevue";

import { editorOptions } from "../composables/editorsOptions";

const { getDocumentById, updateDocument } = useDocument();
const route = useRoute();

const documentId = route.params.id as string;
const documentTitle = ref<string>("");
const documentContent = ref<string>("");
const isAutoSave = ref<boolean>(false);

const loadDocument = async () => {
  const doc = await getDocumentById(documentId);
  if (doc) {
    documentTitle.value = doc.title;
    documentContent.value = doc.content;
  }
};

const handleSwitchAutoSave = () => {
  isAutoSave.value = !isAutoSave.value;
};

const handleUpdateDocument = async (content: string) => {
  if (!content.trim()) return;
  try {
    await updateDocument(documentId, content);
  } catch (err) {
    console.log(err);
  }
};

const debouncedUpdateDocument = debounce(handleUpdateDocument, 1000);

watch(documentContent, (newContent: string) => {
  debouncedUpdateDocument(newContent);
});

onMounted(() => {
  loadDocument();
});
</script>

<template>
  <div>
    {{ isAutoSave }}
    <div class="autosave-wrapper">
      <span class="autosave-title">Автосохранение...</span>
      <ToggleSwitch v-model="isAutoSave" />
    </div>
    <h1 class="title">
      Редактировать документ :
      <span class="document-title">{{ documentTitle }}</span>
    </h1>
    <Editor
      editorStyle="height: 320px"
      v-model="documentContent"
      :options="editorOptions"
      class="editor"
    />
  </div>
</template>

<style scoped lang="scss">
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.autosave-wrapper {
  display: flex;
  flex-direction: column;

  .autosave-title {
    font-size: 16px;
    margin-top: 10px;
    animation: blink 2s ease-in-out 1s infinite;

    @keyframes blink {
      0%,
      100% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    }
  }
}

.title {
  font-size: 20px;
  margin-top: 20px;
}

.document-title {
  font-size: 18px;
}

.editor {
  margin-top: 1rem;
}
</style>

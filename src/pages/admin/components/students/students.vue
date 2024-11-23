<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useStudents } from "./composables/useStudents";
import circleSpinner from "../../../../components/spinner/circle-spinner.vue";
import debounce from "lodash/debounce";

const { fetchStudents, inputSearchCourse, loading, students } = useStudents();

const debouncedFetchStudents = debounce(fetchStudents, 500);

watch(inputSearchCourse, () => {
  debouncedFetchStudents();
});
onMounted(() => {
  fetchStudents();
});
</script>

<template>
  <div class="students">
    <div class="input-wrapper">
      <input
        v-model="inputSearchCourse"
        class="input-search-student"
        placeholder="Поиск учеников"
      />
    </div>
    <div class="students-list">
      <div v-if="loading" class="loading-spinner">
        <circleSpinner />
      </div>
      <div
        v-else
        class="student-item"
        v-for="student in students"
        :key="student.id"
      >
        <div class="student-item-name">{{ student.email }}</div>
      </div>
    </div>
  </div>
</template>

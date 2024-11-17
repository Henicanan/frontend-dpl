<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const courses = ref([
  { id: 1, name: "Курс 1" },
  { id: 2, name: "Курс 2" },
  { id: 3, name: "Курс 3" },
]);

const createCourse = () => {
  router.push({ name: "admin-create-course" });
};

const goToCourse = (id: number) => {
  router.push({ name: "course-details", params: { id } });
};
</script>

<template>
  <div class="courses">
    <button @click="createCourse" class="create-course-btn">
      Создать курс
    </button>

    <div class="courses-list">
      <div
        class="course-item"
        v-for="course in courses"
        :key="course.id"
        @click="goToCourse(course.id)"
      >
        {{ course.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.courses {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.create-course-btn {
  padding: 10px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.courses-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.course-item {
  padding: 12px 20px;
  background-color: #2196f3;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import debounce from "lodash/debounce";
import { useRouter } from "vue-router";
import type { Course, CourseResponse } from "./types";
import trashIcon from "../../../../../components/icons/trash-icon.vue";
import circleSpinner from "../../../../../components/spinner/circle-spinner.vue";

import axios from "axios";

const router = useRouter();

const courses = ref<Course[]>([]);
const inputSearchCourse = ref<string>("");
const loading = ref<boolean>(false);

const fetchCourses = async () => {
  loading.value = true;
  try {
    const response = await axios.get<CourseResponse>(
      "http://localhost:3000/api/course/get-all-courses",
      {
        params: {
          search: inputSearchCourse.value,
        },
      }
    );
    courses.value = response.data.courses;
    console.log(courses.value);
  } catch (error) {
    console.error("Ошибка при получении курсов:", error);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
};

const createCourse = () => {
  router.push({ name: "admin-create-course" });
};

const goToCourse = (id: number) => {
  router.push({ name: "course-details", params: { id } });
};

const debouncedFetchCourses = debounce(fetchCourses, 500);

watch(inputSearchCourse, () => {
  debouncedFetchCourses();
});

onMounted(() => {
  fetchCourses();
});
</script>

<template>
  <div class="courses">
    <button @click="createCourse" class="create-course-btn">
      Создать курс
    </button>
    <div class="input-wrapper">
      <input
        v-model="inputSearchCourse"
        class="input-search-course"
        placeholder="Поиск курсов"
      />
    </div>
    <div class="courses-list">
      <div v-if="loading" class="loading-spinner">
        <circleSpinner />
      </div>
      <div
        v-else
        class="course-item"
        v-for="course in courses"
        :key="course.id"
        @click="goToCourse(course.id)"
      >
        <div class="course-item-title">{{ course.title }}</div>
        <trashIcon class="trash-icon" />
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
  width: 20rem;
}

.input-search-course {
  width: 13rem;
  padding: 5px 8px;
  border: none;
  background: #f4f4f4;
  border-bottom: 1px solid black;
}

.courses-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
}

.course-item {
  padding: 12px 20px;
  background-color: #425490;
  color: white;
  border-radius: 4px;

  text-align: center;
  width: 26rem;
  display: flex;
}

.course-item-title {
  cursor: pointer;
}

.trash-icon {
  cursor: pointer;
  color: white;
  margin-left: auto;
}

.trash-icon:hover,
.course-item-title:hover {
  color: #c7c6c6;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>

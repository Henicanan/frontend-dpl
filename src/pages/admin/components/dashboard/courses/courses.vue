<script setup lang="ts">
import { onMounted, watch } from "vue";
import debounce from "lodash/debounce";
import { useRouter } from "vue-router";

import trashIcon from "../../../../../components/icons/trash-icon.vue";
import circleSpinner from "../../../../../components/spinner/circle-spinner.vue";
import settingsAdjustment from "../../../../../components/icons/settings-adjustment.vue";
import { useCourse } from "./composables/useCourse";

const { fetchCourses, deleteCourse, inputSearchCourse, loading, courses } =
  useCourse();

const router = useRouter();

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
      >
        <div class="course-item-title" @click="goToCourse(course.id)">
          {{ course.title }}
        </div>
        <div class="icon-group">
          <settingsAdjustment
            class="settings-icon"
            @click="goToCourse(course.id)"
          />
          <trashIcon @click="deleteCourse(course.id)" class="trash-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

  width: 26rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-item-title {
  cursor: pointer;
  flex: 1;
}

.icon-group {
  display: flex;
  gap: 10px;
}

.trash-icon,
.settings-icon {
  cursor: pointer;
  color: white;
}

.trash-icon:hover,
.course-item-title:hover,
.settings-icon:hover {
  color: #c7c6c6;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>

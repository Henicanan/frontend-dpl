<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { v4 as uuidv4 } from "uuid";
import type { Module } from "../types";
import axios from "axios";

const courseName = ref<string>("");
const modules = ref<Module[]>([]);
const courseId = ref<number | string>(0);
const loading = ref<boolean>(false);

const fetchCourse = async (id: number) => {
  try {
    loading.value = true;
    const { data } = await axios.get(
      `http://localhost:3000/api/course/get-course/${id}`
    );
    if (data.course) {
      courseName.value = data.course.title;
      courseId.value = data.course.id;
      modules.value = data.course.modules.map((module: any) => ({
        id: module.id,
        title: module.title,
        lessons: module.lessons.map((lesson: any) => ({
          id: lesson.id,
          title: lesson.title,
          content: lesson.title,
          videoUrl: lesson.videoUrl,
        })),
      }));
    }
  } catch (error) {
    console.error("Ошибка при загрузке курса:", error);
  } finally {
    loading.value = false;
  }
};

const addModule = () => {
  modules.value.push({
    id: uuidv4(),
    title: "",
    lessons: [],
  });
};

const addLesson = (moduleIndex: number) => {
  modules.value[moduleIndex].lessons.push({
    id: uuidv4(),
    title: "",
    content: "",
    videoUrl: "",
  });
};

const removeModule = async (moduleIndex: number) => {
  const moduleToRemove = modules.value[moduleIndex];
  if (moduleToRemove.id) {
    try {
      await axios.delete(
        `http://localhost:3000/api/course/delete-module/${moduleToRemove.id}`
      );
      modules.value.splice(moduleIndex, 1);
      console.log("Модуль успешно удален", moduleToRemove);
    } catch (err) {
      console.log(err);
    }
  } else {
    modules.value.splice(moduleIndex, 1);
  }
};

const removeLesson = async (moduleIndex: number, lessonIndex: number) => {
  const lessonToRemove = modules.value[moduleIndex].lessons[lessonIndex];
  if (lessonToRemove.id) {
    try {
      await axios.delete(
        `http://localhost:3000/api/course/delete-lesson/${lessonToRemove.id}`
      );
      modules.value[moduleIndex].lessons.splice(lessonIndex, 1);
      console.log("Урок успешно удален", lessonToRemove);
    } catch (err) {
      console.log(err);
    }
  } else {
    modules.value[moduleIndex].lessons.splice(lessonIndex, 1);
  }
};

const submitCourse = async () => {
  try {
    const payload = {
      id: courseId.value,
      title: courseName.value,
      modules: modules.value.map((module) => ({
        title: module.title,
        lessons: module.lessons.map((lesson) => ({
          title: lesson.title,
          content: lesson.content,
          videoUrl: lesson.videoUrl,
        })),
      })),
    };

    if (courseId.value) {
      await axios.put(
        `http://localhost:3000/api/course/update-course/${courseId.value}`,
        payload
      );
      console.log("Курс успешно обновлен");
    } else {
      const { data } = await axios.post(
        "http://localhost:3000/api/course/create-course",
        payload
      );
      courseId.value = data.course.id;
      console.log("Курс успешно создан", data);
    }
  } catch (error) {
    console.error("Ошибка при сохранении курса:", error);
  }
};

onMounted(() => {
  const route = useRoute();
  const id = Number(route.params.id);

  if (id) {
    courseId.value = id;
    fetchCourse(id);
  } else {
    loading.value = false;
    console.log("Not found course id");
  }
});
</script>

<
<template>
  <div class="course-constructor">
    <h1>Редактор курса</h1>

    <div class="course-name">
      <input v-model="courseName" placeholder="Введите название курса" />
    </div>

    <div
      v-for="(module, moduleIndex) in modules"
      :key="module.id"
      class="module"
    >
      <h2>
        Модуль {{ moduleIndex + 1 }}
        <button @click="removeModule(moduleIndex)" class="remove-button">
          Удалить модуль
        </button>
      </h2>
      <input v-model="module.title" placeholder="Введите название модуля" />

      <div
        v-for="(lesson, lessonIndex) in module.lessons"
        :key="lesson.id"
        class="lesson"
      >
        <h3>
          Урок {{ lessonIndex + 1 }}
          <button
            @click="removeLesson(moduleIndex, lessonIndex)"
            class="remove-button"
          >
            Удалить урок
          </button>
        </h3>
        <input v-model="lesson.title" placeholder="Название урока" />
        <textarea
          v-model="lesson.content"
          placeholder="Содержимое урока"
        ></textarea>
        <input v-model="lesson.videoUrl" placeholder="Ссылка на видео" />
      </div>
      <button @click="addLesson(moduleIndex)">Добавить урок</button>
    </div>
    <button @click="addModule">Добавить модуль</button>
    <button @click="submitCourse">Сохранить курс</button>
  </div>
</template>

<style scoped lang="scss">
.course-constructor {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.module {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.lesson {
  border: 1px dashed #aaa;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

.remove-button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #d9363e;
}

button {
  display: block;
  margin: 10px 0;
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

input,
textarea {
  display: block;
  width: 100%;
  margin: 5px 0;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

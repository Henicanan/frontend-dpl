<script setup lang="ts">
import { useCourse } from "../composables/useCourse";

const { modules, courseName, addModule, addLesson, submitCourse } = useCourse();
</script>

<template>
  <div class="course-constructor">
    <h1>Конструктор курса</h1>

    <div class="course-name">
      <input v-model="courseName" placeholder="Введите название курса" />
    </div>

    <button v-if="modules.length === 0" @click="addModule">
      Создать первый модуль
    </button>

    <div
      v-for="(module, moduleIndex) in modules"
      :key="module.id"
      class="module"
    >
      <h2>Модуль {{ moduleIndex + 1 }}</h2>
      <div>
        <label>
          Название модуля:
          <input
            type="text"
            v-model="module.title"
            placeholder="Введите название модуля"
          />
        </label>
      </div>

      <div
        v-for="(lesson, lessonIndex) in module.lessons"
        :key="lesson.id"
        class="lesson"
      >
        <h3>Урок {{ lessonIndex + 1 }}</h3>
        <div>
          <label>
            Название урока:
            <input
              type="text"
              v-model="lesson.title"
              placeholder="Введите название урока"
            />
          </label>
        </div>
        <div>
          <label>
            Содержимое урока:
            <textarea
              v-model="lesson.content"
              placeholder="Введите содержимое урока"
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Ссылка на видео:
            <input
              type="text"
              v-model="lesson.videoUrl"
              placeholder="Введите название урока"
            />
          </label>
        </div>
      </div>

      <button @click="addLesson(moduleIndex)">Добавить урок</button>
    </div>

    <button v-if="modules.length > 0" @click="addModule">
      Добавить модуль
    </button>

    <button v-if="modules.length > 0" @click="submitCourse">
      Сохранить курс
    </button>
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

<script lang="ts" setup>
import {
  testimonials,
  instructors,
  faq,
  courses,
} from "./constants/discription-school";
</script>

<template>
  <div class="main-page">
    <header class="hero-section">
      <h1>Добро пожаловать в школу веб-разработки</h1>
      <p>
        Обучение от основ до профессионального уровня. Начни карьеру в IT уже
        сегодня!
      </p>
    </header>

    <section class="courses-section">
      <h2>Направления обучения</h2>
      <div class="courses">
        <div class="course-card" v-for="course in courses" :key="course.title">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <h2>Отзывы выпускников</h2>
      <div class="testimonials">
        <div
          class="testimonial-card"
          v-for="testimonial in testimonials"
          :key="testimonial.name"
        >
          <blockquote>{{ testimonial.review }}</blockquote>
          <footer>- {{ testimonial.name }}</footer>
        </div>
      </div>
    </section>

    <section class="instructors-section">
      <h2>Преподаватели</h2>
      <div class="instructors">
        <div
          class="instructor-card"
          v-for="instructor in instructors"
          :key="instructor.name"
        >
          <img
            :src="instructor.photo"
            :alt="instructor.name"
            class="instructor-photo"
          />
          <h3>{{ instructor.name }}</h3>
          <p>Эксперт в области: {{ instructor.expertise }}</p>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <h2>Часто задаваемые вопросы</h2>
      <div class="faq">
        <div class="faq-item" v-for="item in faq" :key="item.question">
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  .hero-section {
    text-align: center;
    margin-bottom: 30px;
  }

  .courses-section,
  .testimonials-section,
  .instructors-section,
  .faq-section {
    margin-bottom: 40px;
  }

  .courses,
  .testimonials,
  .instructors,
  .faq {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }

  .course-card,
  .testimonial-card,
  .instructor-card,
  .faq-item {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    width: calc(50% - 10px);
    text-align: center;
  }

  .instructor-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    .instructor-photo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }
  }
}
</style>

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
      <h1 class="hero-title">Добро пожаловать в школу веб-разработки</h1>
      <p class="hero-description">
        Обучение от основ до профессионального уровня. Начни карьеру в IT уже
        сегодня!
      </p>
    </header>

    <section class="courses-section">
      <h2 class="courses-section-title">Направления обучения</h2>
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
  max-width: 1200px;
  margin: 0 auto;

  .hero-section {
    text-align: center;
    margin-bottom: 40px;

    .hero-title {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .hero-description {
      margin-top: 1rem;
      font-size: 1.2rem;
      line-height: 1.6;
      color: #555;
    }
  }

  .courses-section,
  .testimonials-section,
  .instructors-section,
  .faq-section {
    margin-bottom: 50px;
  }

  .courses-section-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    margin-bottom: 20px;
  }

  .courses {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .course-card {
      background: $blue-color;
      color: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      width: calc(45% - 10px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        line-height: 1.5;
      }

      &:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .testimonials {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .testimonial-card {
      background: linear-gradient(135deg, #ffffff, #f3f4f6);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: left;
      width: calc(45% - 10px);

      blockquote {
        font-style: italic;
        margin-bottom: 10px;
        color: #555;
      }

      footer {
        font-weight: bold;
        color: #333;
      }

      &:hover {
        transform: translateY(+10px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .instructors {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .instructor-card {
      background: #ffffff;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(45% - 10px);

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
      }

      .instructor-photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 10px;
        border: 3px solid $blue-color;
        transition: border-color 0.3s ease;

        &:hover {
          border-color: #ffcc00;
        }
      }

      h3 {
        margin-top: 10px;
        font-size: 1.3rem;
        color: #333;
      }

      p {
        margin-top: 5px;
        font-size: 1rem;
        color: #555;
      }
    }
  }

  .faq {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .faq-item {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      width: calc(45% - 10px);

      h3 {
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
      }

      p {
        margin-top: 5px;
        font-size: 1rem;
        color: #555;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>

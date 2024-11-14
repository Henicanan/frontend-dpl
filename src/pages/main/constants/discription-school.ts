import { ref } from "vue";
import artyomPhoto from "../../../assets/img-instructors/artyom.jpg";
import leonPhoto from "../../../assets/img-instructors/leon.jpg";

export const courses = ref([
  {
    title: "Основы веб-разработки",
    description: "HTML, CSS, основы JavaScript",
  },
  {
    title: "Frontend-разработка",
    description: "Vue.js, анимации и интерактивность",
  },
  { title: "Backend-разработка", description: "Node.js, базы данных и API" },
  {
    title: "Полный стек",
    description: "Полный стек разработки: от клиентской до серверной части",
  },
]);

export const testimonials = ref([
  { name: "Чувак Чувачок", review: "Курс помог мне получить работу мечты!" },
  {
    name: "Мэн Макар",
    review: "Отличные преподаватели и поддержка на каждом этапе.",
  },
]);

export const instructors = ref([
  {
    name: "Артем Безносво",
    expertise: "Frontend-разработка, Vue.js",
    photo: artyomPhoto,
  },
  {
    name: "Леон Горецка",
    expertise: "Backend-разработка, Node.js",
    photo: leonPhoto,
  },
]);

export const faq = ref([
  {
    question: "Какой уровень подготовки нужен для курсов?",
    answer: "Курсы подходят для начинающих и профессионалов.",
  },
  {
    question: "Можно ли обучаться удаленно?",
    answer: "Да, все курсы проходят онлайн.",
  },
]);

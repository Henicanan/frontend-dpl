import { ref } from "vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import type { Course, CourseResponse, Module } from "../types";

export function useCourse() {
  const courses = ref<Course[]>([]);
  const inputSearchCourse = ref<string>("");
  const loading = ref<boolean>(false);

  const modules = ref<Module[]>([]);
  const courseName = ref("");

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
      console.log("Курсы загружены:", courses.value);
    } catch (error) {
      console.error("Ошибка при получении курсов:", error);
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  };

  const deleteCourse = async (courseId: number) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/course/delete-course/${courseId}`
      );
      await fetchCourses(); 
      console.log("Курс успешно удален");
    } catch (error) {
      console.error("Ошибка при удалении курса:", error);
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

  const submitCourse = async () => {
    console.log(modules.value);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/course/create-course",
        {
          title: courseName.value,
          modules: modules.value,
        }
      );
      console.log("Курс успешно сохранен", response.data);
    } catch (error) {
      console.error("Ошибка при сохранении курса:", error);
    }
  };

  return {
    courses,
    inputSearchCourse,
    loading,
    fetchCourses,
    deleteCourse,
    modules,
    courseName,
    addModule,
    addLesson,
    submitCourse,
  };
}

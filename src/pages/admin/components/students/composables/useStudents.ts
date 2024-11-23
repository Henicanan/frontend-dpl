import { ref } from "vue";
import axios from "axios";
import type { StudentResponse, Student } from "../types";

export function useStudents() {
  const students = ref<Student[]>([]);
  const inputSearchCourse = ref<string>("");
  const loading = ref<boolean>(false);

  const fetchStudents = async () => {
    loading.value = true;
    try {
      const response = await axios.get<StudentResponse>(
        "http://localhost:3000/api/student/get-all-students",
        {
          params: {
            search: inputSearchCourse.value,
          },
        }
      );

      students.value = response.data.students;
      console.log(students.value);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  };

  return {
    fetchStudents,
    inputSearchCourse,
    loading,
    students,
  };
}

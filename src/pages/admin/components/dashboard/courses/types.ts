export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
}

export interface CourseResponse {
  courses: Course[];
}

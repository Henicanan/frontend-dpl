export interface Lesson {
  id: number;
  title: string;
  content: string;
  videoUrl: string;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Student {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface StudentResponse {
  students: Student[];
}

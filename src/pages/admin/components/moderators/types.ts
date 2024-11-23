export interface Moderator {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface ModeratorResponse {
  moderators: Moderator[];
}

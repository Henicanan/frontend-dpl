export interface Document {
  id: string;
  name: string;
  folderId: string;
  content: string;
}

export interface Folder {
  id: string;
  title: string;
  items: Document[];
  subfolders: Folder[];
}

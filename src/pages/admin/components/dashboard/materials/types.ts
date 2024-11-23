export interface Block {
  id: number;
  title: string;
}

export interface BlockResponse {
  blocks: Block[];
}

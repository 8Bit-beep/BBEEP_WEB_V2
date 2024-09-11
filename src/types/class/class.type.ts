export interface ClassResponse {
  data: ClassResponseType[];
}

export interface ClassResponseType {
  name: string;
  grade: number;
  cls: number;
  num: number;
}

export interface FloorResponseType {
  code: string;
  name: string;
}

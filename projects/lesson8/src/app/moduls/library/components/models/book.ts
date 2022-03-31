export interface Book {
  id: number,
  title:string,
  autors: string[],
  description?: string,
  year: number,
  analogue? : string[];
}

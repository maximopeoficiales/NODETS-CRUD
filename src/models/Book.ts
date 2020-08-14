import mongosse, { Schema, model } from "mongoose";
//interfaz para validar los datos
export interface Book extends mongosse.Document {
  title: string;
  author: string;
  isbn: string;
}
//esquema base
const BookSchema = new Schema({
  title: String,
  author: String,
  isbn: String,
});

export default model<Book>("Book", BookSchema);

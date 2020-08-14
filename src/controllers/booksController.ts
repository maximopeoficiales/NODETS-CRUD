import { Request, Response } from "express";
import BookModel, { Book } from "../models/Book";
class BooksController {
  public async index(req: Request, res: Response): Promise<void> {
    //consulta a la bd  y envia datos a la vista
    const books: Book[] = await BookModel.find().lean();
    res.render("books/index", { title: "Books", books });
  }
  public renderFormBook(req: Request, res: Response): void {
    res.render("books/add", { title: "Add a Book" });
  }
  public async saveBook(req: Request, res: Response): Promise<void> {
    const { title, author, isbn } = req.body;
    //tambien podria ser req.body
    const book: Book = new BookModel({ title, author, isbn });
    await book.save();
    res.redirect("/books");
  }
  public async deleteBook(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    await BookModel.findByIdAndDelete(id);
    res.redirect("/books");
  }
  public async getBook(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    //devolvera un json no un array
    const book: any = await BookModel.findById(id).lean();
    res.render("books/mybook", { title: "My book", book });
  }
}

export const booksController = new BooksController();

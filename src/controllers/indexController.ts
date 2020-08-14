import { Request, Response } from "express";
class IndexController {
  public index(req: Request, res: Response): void {
    res.render("index", { title: "Welcome to book App" });
  }
}

export const indexController = new IndexController();

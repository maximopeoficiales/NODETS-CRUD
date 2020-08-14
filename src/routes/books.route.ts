import { Router } from "express";
import { booksController } from "../controllers/booksController";
const router: Router = Router();
router.get("/", booksController.index);
router.get("/add", booksController.renderFormBook);
router.get("/:id", booksController.getBook);
router.post("/add", booksController.saveBook);
router.post("/remove", booksController.deleteBook);
export default router;

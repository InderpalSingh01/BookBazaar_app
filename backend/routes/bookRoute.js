import express from 'express';
import { addBook, listBook, removeBook } from '../controllers/bookController.js';
import multer from 'multer';
const bookRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

bookRouter.get("/list",listBook);
bookRouter.post("/add",upload.single('image'),addBook);
bookRouter.post("/remove",removeBook);

export default bookRouter;
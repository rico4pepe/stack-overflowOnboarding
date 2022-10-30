import express from "express";
import path from 'path'
import {fileURLToPath} from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//using regex to deteremine if the api root is just slash or with index.html then go to the views folder to call index.html file
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

export default router;
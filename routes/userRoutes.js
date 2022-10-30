import express from "express";

import {getAllUsers, createNewUser, signin, googleSignIn} from "../controllers/userController.js";


const router = express.Router();

router.post("/signin", signin);
router.post("/googlesignin", googleSignIn);
router.post("/signup", createNewUser)
router.get("/allusers", getAllUsers)

  

export default router;
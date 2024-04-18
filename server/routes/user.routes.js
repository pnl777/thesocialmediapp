import express from "express";
import {getAllUsers} from "../controllers/user.controllers.js";

const router = express.Router();

// GET ALL USERS
router.get("/users", getAllUsers);

export default router;

import express from "express";
import {getAllUsers, registerUser} from "../controllers/user.controllers.js";

const router = express.Router();

// Route: /api/users
router.get("/users", getAllUsers);

// Route: /api/register
router.post("/register", registerUser);

export default router;

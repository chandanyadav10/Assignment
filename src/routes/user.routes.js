import express from "express";
import { createUser } from "../controllers/user.controller.js";
import { getUsersByDay } from "../controllers/list.controller.js";
import { toggleAllUsersStatus } from "../controllers/admin.controller.js";
import { getDistance } from "../controllers/distance.controller.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", createUser);
router.put("/toggle-status", auth, toggleAllUsersStatus);
router.get("/distance", auth, getDistance);
router.get("/list", auth, getUsersByDay);

export default router;

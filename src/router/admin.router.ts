import express from "express";

import roleMiddleware from "../middleware/role.middleware.js";

import { ROLES } from "../enums/main.js";
import adminController from "../controllers/admin.controller.js";

const router = express.Router();
const {ADMIN} = ROLES;

// path /api/admin/
router.patch("/user", roleMiddleware(ADMIN), adminController.updateUser);
router.get("/user", roleMiddleware(ADMIN), adminController.getUsers);
router.delete("/user", roleMiddleware(ADMIN), adminController.deleteUser);

export default router;
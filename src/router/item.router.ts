import express from "express";

import roleMiddleware from "../middleware/role.middleware.js";

import itemController from "../controllers/item.controller.js";
import { validation } from "../middleware/item.validation.middleware.js";

import { ROLES } from "../enums/main.js";

const router = express.Router();
const {ADMIN} = ROLES;

// path /api/item
router.post("/", roleMiddleware(ADMIN), validation, itemController.createItem);
router.patch("/", roleMiddleware(ADMIN), validation, itemController.updateItem);
router.get("/",  itemController.getItems);
router.delete("/", roleMiddleware(ADMIN), itemController.deleteItem);

export default router;
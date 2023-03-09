import express from "express";

import roleMiddleware from "../middleware/role.middleware.js";

import itemController from "../controllers/item.controller.js";
import { validation } from "../middleware/item.validation.middleware.js";

import { ROLES } from "../enums/main.js";

const router = express.Router();
const {ADMIN} = ROLES;

// item routes
router.post("/item", roleMiddleware(ADMIN), validation, itemController.createItem);
router.patch("/item", roleMiddleware(ADMIN), validation, itemController.updateItem);
router.get("/item",  itemController.getItems);
router.delete("/item", roleMiddleware(ADMIN), itemController.deleteItem);

export default router;
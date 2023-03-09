import express from "express";
import { message } from "../utils/main.js";

import { User, UserDTO, UserId } from "../types/main.js";
import UserService from "../services/user.service.js";

class AdminController {
  // path: /api/admin/user
  // GET ALL
  async getUsers(request: express.Request, response: express.Response) {
    try {
      const users: User[] = await UserService.getAllUser();
      return response.status(200).json(users);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка отримання списску користувачів. ${errorMessage}.`);
      return response.status(500).json(message("Помилка отримання списску користувачів."));
    }
  }
  // UPDATE ONE
  async updateUser(request: express.Request, response: express.Response) {
    try {
      const values: UserDTO = request.body;
      await UserService.updateOneUser(values);
      return response.status(200).json(message("Дані користувача оновлено"));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка оновлення даних користувача. ${errorMessage}.`);
      return response.status(500).json(message("Помилка оновлення даних користувача."));
    }
  }
  // DELETE ONE
  async deleteUser(request: express.Request, response: express.Response) {
    try {
      const {_id}: UserId = request.body;
      await UserService.deleteOneUser({ _id });
      return response.status(200).json(message(`Користувач з id:${_id} видалено.`));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка видалення користувача. ${errorMessage}.`);
      return response.status(500).json(message("Помилка видалення користувача."));
    }
  }
}

export default new AdminController();
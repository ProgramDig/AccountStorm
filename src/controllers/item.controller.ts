import express from "express";
import { validationResult } from "express-validator";

import ItemService from "../services/item.service.js";

import { message } from "../utils/main.js";

import { Item } from "../interfaces/main.js";
import { IdItem } from "../types/main.js";

class ItemController {
  // ALL PATH api/admin/destract-object
  // CREATE ONE
  async createItem(request: express.Request, response: express.Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ message: "Помилка введених даних", errors: errors.array() });
      }
      const values: Item = request.body;
      await ItemService.createItem(values);
      return response.status(200).json(message("Об'єкт сворено"));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка створення об'єкту:${errorMessage}.`);
      return response.status(500).json(message("Помилка створення об'єкту."));
    }
  }
  // GET ALL
  async getItems(request: express.Request, response: express.Response) {
    try {
      const destractObjects = await ItemService.getItems();
      response.status(200).json(destractObjects);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка отриманння масиву об'єктів. ${errorMessage}.`);
      return response.status(500).json(message(`Помилка отриманння масиву об'єктів. ${errorMessage}.`));
    }
  }
  // UPDATE ONE
  async updateItem(request: express.Request, response: express.Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ message: "Помилка введених даних", errors: errors.array() });
      }
      const values: Item = request.body;
      await ItemService.updateItem(values);
      return response.status(200).json(message("Дані об'єкта руйнації оновлено."));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка оновлення об'єкту. ${errorMessage}.`);
      return response.status(500).json(message(`Помилка оновлення об'єкту. ${errorMessage}.`));
    }
  }
  // DELETE ONE
  async deleteItem(request: express.Request, response: express.Response) {
    try {
      const { _id }: IdItem = request.body;
      await ItemService.deleteItem({ _id });
      return response.status(200).json(message(`Об'єкта руйнації з id:${_id} видалено.`));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка видалення об'єкту:${errorMessage}.`);
      return response.status(500).json(message("Помилка видалення об'єкту."));
    }
  }
}

export default new ItemController();
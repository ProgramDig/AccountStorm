import express from "express";
import { validationResult } from "express-validator";

import ItemService from "../services/item.service.js";

import { message } from "../utils/main.js";

import { Item } from "../interfaces/main.js";
import { IdItem } from "../types/main.js";

class ItemController {
  // ALL PATH api/item/
  // CREATE ONE
  async createItem(request: express.Request, response: express.Response) {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ message: "Помилка введених даних", errors: errors.array() });
      }
      const values: Item = request.body;
      await ItemService.createItem(values);
      return response.status(200).json(message("Запис майна сворено"));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка створення об'єкту:${errorMessage}.`);
      return response.status(500).json(message("Помилка створення запису про майно."));
    }
  }
  // GET ALL
  async getItems(request: express.Request, response: express.Response) {
    try {
      const items = await ItemService.getItems();
      response.status(200).json(items);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка отриманння масиву об'єктів. ${errorMessage}.`);
      return response.status(500).json(message(`Помилка отриманння запису про майно. ${errorMessage}.`));
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
      return response.status(200).json(message("Запис про майно оновлено."));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка оновлення об'єкту. ${errorMessage}.`);
      return response.status(500).json(message(`Помилка оновлення запису. ${errorMessage}.`));
    }
  }
  // DELETE ONE
  async deleteItem(request: express.Request, response: express.Response) {
    try {
      const { _id }: IdItem = request.body;
      await ItemService.deleteItem({ _id });
      return response.status(200).json(message(`Запис з id:${_id} видалено.`));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Невідома помилка.";
      console.log(`Помилка видалення об'єкту:${errorMessage}.`);
      return response.status(500).json(message("Помилка видалення запису."));
    }
  }
}

export default new ItemController();
import ItemModel from "../models/item.model.js";

import { Item } from "../interfaces/main.js";
import { IdItem } from "../types/main.js";

class ItemService {
  // create item
  async createItem(values: Item) {
    try {
      const item = new ItemModel({ ...values });
      await item.save();
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка створення запису. ${message}`);
    }
  }
  // get items
  async getItems() {
    try {
      return await ItemModel.find();
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка взяття записів. ${message}`);
    }
  }
  // update item
  async updateItem(values: Item) {
    try {
      const _id = values._id;
      const dbResponse = await ItemModel.findOne({ _id });
      if (!dbResponse) {
        throw new Error(`Запису з id:${_id} не інсує`);
      }
      delete values._id;
      return await ItemModel.updateOne({ _id }, { ...values });
    } catch (error) {
      const { message }: any = error;
      throw new Error(message);
    }
  }
  // delete item
  async deleteItem(_id: IdItem) {
    try {
      const dbResponse = await ItemModel.findOne({ _id });
      if (!dbResponse) {
        throw new Error(`Запису з id:${_id} не інсує`);
      }
      return await ItemModel.deleteOne({ _id });
    } catch (error) {
      const { message }: any = error;
      throw new Error(message);
    }
  }
}

export default new ItemService();
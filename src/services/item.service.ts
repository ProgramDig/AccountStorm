import ItemModel from "../models/item.model.js";

import { Item } from "../interfaces/main.js";
import { IdItem } from "../types/main.js";

class ItemService {
  // create destract object
  async createItem(values: Item) {
    try {
      const destractObject = new ItemModel({ ...values });
      await destractObject.save();
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка створення об'єкта руйнації. ${message}`);
    }
  }
  // get destract object list
  async getItems() {
    try {
      return await ItemModel.find();
    } catch (error) {
      const { message }: any = error;
      throw new Error(`Помилка взяття масиву об'єктів з бази. ${message}`);
    }
  }
  // update destract object
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
  // delete destract object
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
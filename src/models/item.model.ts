import {Schema, model} from "mongoose";

const Item: Schema = new Schema({
  number:{ type: Number, require: true, unique: true},
  dateOfItem:{ type: String, require: true},
  numberOfDocument:{ type: Number, require: true},
  dateOfDocument:{ type: String, require: true},
  provider:{ type: String, require: true},
  name:{ type: String, require: true},
  code:{ type: String, require: true},
  unitOfMeasure:{ type: String, require: true},
  price:{ type: Number, require: true},
  arrived:{ type: Number, require: true},
  out:{ type: Number, require: true},
  amount:{ type: Number, require: true},
  serialCode:{ type: String, require: true},
});

export default model("Item", Item);
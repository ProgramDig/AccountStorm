import {Schema, model} from "mongoose";

const Item: Schema = new Schema({
  number:{ type: Number, require: true, unique: true},
  dateOfItem:{ type: String, require: true, unique: true},
  numberOfDocument:{ type: Number, require: true, unique: true},
  dateOfDocument:{ type: String, require: true, unique: true},
  provider:{ type: String, require: true, unique: true},
  name:{ type: String, require: true, unique: true},
  code:{ type: String, require: true, unique: true},
  unitOfMeasure:{ type: String, require: true, unique: true},
  price:{ type: Number, require: true, unique: true},
  arrived:{ type: Number, require: true, unique: true},
  out:{ type: Number, require: true, unique: true},
  amount:{ type: Number, require: true, unique: true},
  serialCode:{ type: Number, require: true, unique: true},
});

export default model("Item", Item);
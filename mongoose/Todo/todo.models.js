import { Mongoose } from "mongoose";

const TodoSchema = new Mongoose.Schema({},{timestamps: true})

export const Todo = Mongoose.model("Todo",TodoSchema);

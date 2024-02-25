import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: [true, "Username is required"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
}, { timestamps: true })

export const User = Mongoose.model("User", userSchema);
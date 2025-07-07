import { Schema, model } from "mongoose";

const infoSchema = new Schema({
    name: {
        type: String
    },
    flavor: {
        type: String
    },
    ingredients: [
        {ingredient_1: {type: String}},
        {ingredient_2: {type: String}},
        {ingredient_3: {type: String}}
    ],
    image: {
        type: String
    }
},{versionKey:false, timestamps:true});

export default model("student", infoSchema);
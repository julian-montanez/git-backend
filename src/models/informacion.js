import { Schema, model } from "mongoose";

const infoSchema = new Schema({
    nameDessert: {
        type: String
    },
    ingredients: {
        type: String
    },
    howToMake: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    userId: {
        type: String
    }
},{versionKey:false, timestamps:true});

export default model("info", infoSchema);
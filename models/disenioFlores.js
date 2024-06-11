import mongoose from "../config/mongoose.config.js";

const disenioFloresModel = mongoose.Schema(
    {
        name: String, 
        price: Number,
        description: String,
        genre: String, 
        size: Number, 
        stock: Number,
        color: String,
        review: String,
    }
);

const DisenioFlores = mongoose.model("Diseño Flores", disenioFloresModel);

export default DisenioFlores;
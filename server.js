import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose.connect();

const UsersSchema = mongoose.schema(
    {
        id: String,
        firstname: String,
        lastname: String,
        email: String,
        password: String
    }
);

const productSchema = mongoose.schema(
    {
        id: String,
        name: String, 
        prize: Number,
        description: String,
        genre: String, 
        size: Number, 
        stock: Number,
        color: String,
        review: String
    
    }
);

const purchasesSchema = mongoose.schema(
    {
        id: String,
        userId: String,
        products: String,
        total: Number,
        paymentmethod: String
    }
);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
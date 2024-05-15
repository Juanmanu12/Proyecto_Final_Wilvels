import express from "express";
import mongoose from "mongoose";
import productsRoutes from "./Routes/productsRoutes.js";

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
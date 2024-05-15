import express from "express";
import mongoose from "mongoose";
import productsRoutes from "./Routes/productsRoutes.js";

const app = express();

app.use(productsRoutes());

mongoose.connect();




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
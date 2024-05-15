import express from "express";
import mongoose from "mongoose";
import productControllers from "../Controllers/product_controllers.js";

const router = express.Router();

router.use(express.json());

app.get("/api/products", productControllers.list);
app.get("/api/products/:id", productController.find);
app.post("/api/products", productController.create);
app.patch("/api/products/:id", productController.update);
app.delete("/api/products/:id", productController.destroy);
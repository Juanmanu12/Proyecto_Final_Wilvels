import express from "express";
import productControllers from "../Controllers/product_controllers.js";

const productsRouter = express.Router();


productsRouter.get("/api/products", productControllers.list);
productsRouter.get("/api/products/:id", productControllers.find);
productsRouter.post("/api/products", productControllers.create);
productsRouter.patch("/api/products/:id", productControllers.update);
productsRouter.delete("/api/products/:id", productControllers.destroy);
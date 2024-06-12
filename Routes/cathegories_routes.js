import express from "express";
import categoriesController from "../Controllers/cathegories_controller.js";

const categoriesRouter = express.Router();

categoriesRouter.post("/api/categories", categoriesController.create);
categoriesRouter.get("/api/categories", categoriesController.list);
categoriesRouter.get("/api/categories/:id", categoriesController.find);
categoriesRouter.patch("/api/categories/:id", categoriesController.update);
categoriesRouter.delete("/api/categories/:id", categoriesController.destroy);

export default categoriesRouter;
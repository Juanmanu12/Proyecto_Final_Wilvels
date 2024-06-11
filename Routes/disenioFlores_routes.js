import express from "express";
import disenioFloresController from "../Controllers/disenioFlores_controllers.js";

const disenioFloresRouter = express.Router();

disenioFloresRouter.post("/api/disenioFlores", disenioFloresController.create);
disenioFloresRouter.get("/api/disenioFlores", disenioFloresController.list);
disenioFloresRouter.get("/api/disenioFlores/:id", disenioFloresController.find);
disenioFloresRouter.patch("/api/disenioFlores/:id", disenioFloresController.update);
disenioFloresRouter.delete("/api/disenioFlores/:id", disenioFloresController.destroy);

export default disenioFloresRouter;
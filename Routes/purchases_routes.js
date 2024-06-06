import express from "express";
import purchasesController from "../Controllers/purchases_controllers.js";


const  purchasesRouter = express.Router();

purchasesRouter.post("/api/purchases/", purchasesController.create);
purchasesRouter.get("/api/purchases/:id", purchasesController.find);
purchasesRouter.get("/api/purchases/", purchasesController.list);
purchasesRouter.patch("/api/purchases/:id", purchasesController.update);
purchasesRouter.delete("/api/purchases/:id", purchasesController.erase);



export default purchasesRouter;
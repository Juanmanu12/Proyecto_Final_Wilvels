import express from "express";


const  purchasesRouter = express.Router();

purchasesRouter.post("/purchases/:id");
purchasesRouter.get("/purchases/:id");
purchasesRouter.get("/user/:id");
purchasesRouter.get("/products/:total");
purchasesRouter.post("/purchases/:total");
purchasesRouter.get("/purchases/:metodoPago");
purchasesRouter.post("/purchases/:metodoPago");


export default purchasesRouter;
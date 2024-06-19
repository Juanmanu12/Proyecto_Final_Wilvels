import express from "express";

import userController from "../Controllers/users_controllers.js";
import { expressjwt } from "express-jwt";

const userRouter = express.Router();
//ruta para crear usuario en auth ya que es un metodo register
userRouter.get("/api/users", userController.list);
userRouter.get("/api/users/:id", userController.search);
userRouter.patch("/api/users/:id", userController.updateUser);
userRouter.delete("/api/users/:id", userController.eliminate);

export default userRouter;

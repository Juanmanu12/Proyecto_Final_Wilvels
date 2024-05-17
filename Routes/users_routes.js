import express from "express";

import userController from "../Controllers/users_controllers.js";
import { expressjwt } from "express-jwt";

const userRouter = express.Router();

userRouter.post("/api/users", userController.create);
userRouter.get("/api/users", userController.list);
userRouter.get("/api/users/:id", userController.search);
userRouter.patch("/api/users/:id", userController.updateUser);
userRouter.delete("/api/users/:id", userController.eliminate);
userRouter.post("/api/users/login", userController.login);

userRouter.post(
  "/api/users/profile",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_TOKEN }),
  userController.profile
);

export default userRouter;

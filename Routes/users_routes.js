import express from "express";
import userController from "../Controllers/users_controllers.js";

const userRouter = express.Router();

userRouter.post("/api/users", userController.create);
userRouter.get("/api/users", userController.list);
userRouter.get("/api/users/:id", userController.search);
userRouter.patch("/api/users/:id", userController.updateUser);
userRouter.delete("/api/users/:id", userController.eliminate);

export default userRouter;

import express from "express";

import userController from "../Controllers/users_controllers.js";
import { expressjwt } from "express-jwt";
import auth_controllers from "../Controllers/auth_controllers.js";

const authRouter = express.Router();

authRouter.post("/api/auth/login", auth_controllers.login);
authRouter.post("/api/auth/register", userController.create);
authRouter.get("/api/auth/validate", auth_controllers.tokenIsValid);

authRouter.post(
  "/api/auth/private",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_TOKEN }),
  userController.profile
);

export default authRouter;
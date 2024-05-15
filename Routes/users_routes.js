import express from "express";
import userController from "../Controllers/users_controllers.js";

const router = express.Router();

router.post("/api/users", userController.create);
router.get("/api/users", userController.list);
router.get("/api/users/:id", userController.search);
router.patch("/api/users:id", userController.updateUser);
router.delete("/api/users:id", userController.eliminate);

export default router;
